"use client"

import { Card } from "@/components/ui/card"
import { ChevronLeftCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { EventFormData, EventData, Prize, SidePanelState } from "../../types"
import { PrizePanel } from "../../components/PrizePanel"
import { PrizeList } from "../../components/PrizeList"
import { EventDetailsSection } from "../../components/EventDetailsSection"
import {useToast} from "@/hooks/use-toast"
import { useRouter } from 'next/navigation'


interface EventsFormProps {
    eventStatus: string | string[] | undefined

}

const EventsForm = ({ eventStatus }: EventsFormProps) => {

    const router = useRouter()
    const { toast } = useToast()

    console.log('eventStatus', eventStatus)

    const [sidePanelState, setSidePanelState] = useState<SidePanelState>("none")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [eventFormData, setEventFormData] = useState<EventFormData>({
        name: "",
        description: "",
        date: new Date(),
        timeValue: new Date(),
        hours: 3,
        minutes: 0,
        // timer: { hours: "00", minutes: "30", seconds: "00" }
    })
    const [prizes, setPrizes] = useState<Prize[]>([])
    const [newPrize, setNewPrize] = useState<Prize>({
        name: "",
        description: "",
        quantity: 1,
        imageUrl: "",
        image: null
    })
    const [editingPrizeIndex, setEditingPrizeIndex] = useState<number | null>(null)
    const [selectedImage, setSelectedImage] = useState<string | null>(null)
    const [error, setError] = useState<string | null>(null)

    const handleFormDataChange = (data: Partial<EventFormData>) => {
        setEventFormData(prev => ({ ...prev, ...data }))
    }

    const handleAddPrize = () => {
        if (newPrize.name) {
            if (editingPrizeIndex !== null) {
                const updatedPrizes = [...prizes]
                updatedPrizes[editingPrizeIndex] = newPrize
                setPrizes(updatedPrizes)
                setEditingPrizeIndex(null)
            } else {
                setPrizes([...prizes, newPrize])
            }
            setNewPrize({
                name: "",
                description: "",
                quantity: 1,
                imageUrl: "",
                image: null
            })
            setSidePanelState("none")
            setSelectedImage(null)
        }
    }

    const handleEditPrize = (index: number) => {
        setNewPrize(prizes[index])
        setEditingPrizeIndex(index)
        setSidePanelState("prize-add")
    }

    const handleRemovePrize = (index: number) => {
        const updatedPrizes = [...prizes]
        updatedPrizes.splice(index, 1)
        setPrizes(updatedPrizes)
    }

    const MAX_FILE_SIZE = 8 * 1024 * 1024

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            if (file.size > MAX_FILE_SIZE) {
                setError(`file size is too large, max file size is ${MAX_FILE_SIZE / 1024 / 1024}MB`)
                return
            }
            const allowedTypes = ['image/jpg', 'image/png', 'image/webp', 'image/jpeg']
            if (!allowedTypes.includes(file.type)) {
                setError("invalid file type. please upload another image")
                return
            }
            const imageURL = URL.createObjectURL(file)
            setSelectedImage(imageURL)
            setNewPrize(prev => ({
                ...prev,
                image: file,
                imageUrl: imageURL
            }))
            setError(null)
        }
    }

    console.log({ eventFormData, prizes })


 const createEvent = async (eventData: Partial<EventData>) => {
        try {
            const response = await fetch("/api/events/createEvent", {
                method: 'POST',
                body: JSON.stringify({ eventData }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`Failed to create event: ${response.statusText}`);
            }

            const data = await response.json();
            return data.id;
        } catch (error) {
            throw error;
        }
    };

    // Helper function to create prizes
    const createPrizes = async (prizes: Prize[], eventId: string) => {
        try {
            const formData = new FormData();

            prizes.forEach((prize: Prize, index: number) => {
                formData.append(`prizes[${index}][name]`, prize.name);
                formData.append(`prizes[${index}][description]`, prize.description);
                formData.append(`prizes[${index}][quantity]`, String(prize.quantity));
                if (prize.image) {
                    formData.append(`prizes[${index}][image]`, prize.image);
                }
            });

            for (const key of formData.keys()) {
                console.log(`${key}: ${formData.get(key)}`);
            }

            const response = await fetch(`/api/prizes/createPrizes/${eventId}`, {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                throw new Error(`Failed to create prizes: ${response.statusText}`);
            }

            return true;
        } catch (error) {
            throw error;
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // 1. Calculate event times
            const duration = eventFormData.hours * 60 + eventFormData.minutes;
            const eventStartTime = new Date(eventFormData.timeValue);
            const eventEndTime = new Date(eventStartTime.getTime() + duration * 60 * 1000);

            // 2. Prepare event data
            const eventData = {
                name: eventFormData.name,
                description: eventFormData.description,
                date: new Date(eventFormData.date),
                eventStartTime,
                eventEndTime,
                qrCodeValidityDuration: duration,
                status: eventStatus as string,
            };

            // 3. Create and submit the event first
            const eventResponse = await createEvent(eventData);

            // const eventId = eventResponse.event.id
            const eventId = eventResponse
            if (!eventId) {
                setIsLoading(false);
                toast({
                    variant: "destructive",
                    title: "Error",
                    description: "Failed to create event - no event ID returned"
                });
                return;
            }

            // 4. Prepare and submit prize data using the eventId
            if (prizes.length > 0) {
                const success = await createPrizes(prizes, eventId);
                if (success) {
                    toast({
                        title: "Success",
                        description: "Event created successfully",
                    });
                    router.push("/events/active-events");
                } else {
                    toast({
                        variant: "destructive",
                        title: "Warning",
                        description: "Event created but there was an issue with prizes"
                    });
                }
            } else {
                toast({
                    variant: "default",
                    title: "Event Created",
                    description: "Event created successfully with no prizes added"
                });
                router.push("/events/active-events");
            }
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Something went wrong";
            toast({
                variant: "destructive",
                title: "Error Creating Event",
                description: errorMessage
            });
            console.error("Submission error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="w-auto h-auto flex flex-col items-start justify-between space-y-5 p-10 relative">
            <ChevronLeftCircle
                size={40}
                className="relative left-5 stroke-gray-500 stroke-1 hover:stroke-gray-300 cursor-pointer"
                onClick={() => window.history.back()}
            />

            <Card className="p-3 flex justify-between space-x-6">
                <form onSubmit={handleSubmit} className="flex flex-col justify-between items-start space-y-16 p-5">
                    <EventDetailsSection
                        formData={eventFormData}
                        onFormDataChange={handleFormDataChange}
                    />

                    <div className="space-y-2 w-full">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-medium">Prize listing</label>
                            <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                className="bg-black text-white rounded-md hover:bg-black/90"
                                onClick={() => {
                                    setNewPrize({
                                        name: "",
                                        description: "",
                                        quantity: 1,
                                        imageUrl: "",
                                        image: null
                                    })
                                    setEditingPrizeIndex(null)
                                    setSidePanelState(sidePanelState === "prize-add" ? "none" : "prize-add")
                                }}
                            >
                                Add to List
                            </Button>
                        </div>

                        <PrizeList
                            prizes={prizes}
                            onEdit={handleEditPrize}
                            onRemove={handleRemovePrize}
                        />
                    </div>

                    <Button type="submit" className="w-full bg-quivyPurple text-white hover:bg-quivyPurple/50"
                    disabled={isLoading}
                    >
                        {isLoading ? "Creating your event..." : "Create Event"}

                    </Button>
                </form>

                {sidePanelState !== "none" && (
                    <div className="w-80 bg-white p-8 rounded-lg shadow-md">
                        {/* {sidePanelState === "timer" && (
                            <TimerPanel
                                timer={formData.timer}
                                onTimeChange={handleTimerChange}
                                onClose={() => setSidePanelState("none")}
                            />
                        )} */}
                        {sidePanelState === "prize-add" && (
                            <PrizePanel
                                prize={newPrize}
                                onPrizeChange={setNewPrize}
                                onSave={handleAddPrize}
                                selectedImage={selectedImage}
                                error={error}
                                onImageUpload={handleImageUpload}
                            />
                        )}
                    </div>
                )}
            </Card>
        </section>
    )
}

export default EventsForm