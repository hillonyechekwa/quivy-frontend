"use client"

import { Card } from "@/components/ui/card"
import { ChevronLeftCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { EventFormData, Prize, SidePanelState } from "../../types"
import { PrizePanel } from "../../components/PrizePanel"
import { PrizeList } from "../../components/PrizeList"
import { EventDetailsSection } from "../../components/EventDetailsSection"
// import { useRouter } from 'next/navigation'


interface EventsFormProps {
    eventStatus: string | string[] | undefined

}

const EventsForm = ({ eventStatus }: EventsFormProps) => {

    // const router = useRouter()

    console.log('eventStatus', eventStatus)

    const [sidePanelState, setSidePanelState] = useState<SidePanelState>("none")
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
                imageFile: file,
                imageUrl: imageURL
            }))
            setError(null)
        }
    }

    console.log({ eventFormData, prizes })


    const handleSubmit = async (e: React.FormEvent) => {
        const duration = eventFormData.hours * 60 + eventFormData.minutes
        const eventStartTime = new Date(eventFormData.timeValue)
        // const eventStartTimeMinutes = eventStartTime.getHours() * 60 + eventStartTime.getMinutes()
        const eventEndTime = new Date(eventStartTime.getTime() + duration * 60 * 1000)
        // const eventEndTimeMinutes = eventEndTime.getHours() * 60 + eventEndTime.getMinutes()

        e.preventDefault()
        // TODO: Implement form submission

        const eventData = {
            name: eventFormData.name,
            description: eventFormData.description,
            date: new Date(eventFormData.date),
            eventStartTime: eventStartTime,
            eventEndTime: eventEndTime,
            qrCodeValidityDuration: duration, // Fixed property name and using correct duration
            status: eventStatus as string,
        }
        prizes: prizes.map(prize => ({
            name: prize.name,
            description: prize.description,
            quantity: prize.quantity,
            image: prize.image
        }))
        console.log('eventdata', eventData)
        


        // eventData.prizes.forEach((prize, index) => {
        //     formData.append(`prizes[${index}][name]`, prize.name);
        //     formData.append(`prizes[${index}][description]`, prize.description);
        //     formData.append(`prizes[${index}][quantity]`, prize.quantity.toString());

        //     // Handle the image file - changed field name to match backend expectation
        //     if (prize.image instanceof Blob) {
        //         formData.append('prizeImages', prize.image);
        //     }
        // });

        try {
            const response = await fetch("/api/events/createEvent", {
                method: 'POST',
                body: JSON.stringify({eventData})
            })
            console.log('form event response', response)

            if (response.ok) {
                const data = await response.json()
                console.log('eventdata', data)
                // router.push("/events/active-events")
            }
        } catch (error) {
            console.log("Error:", error)
        }

    }

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

                    {/* <div className="space-y-2 w-full bg-gray-200 rounded-md p-3">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-medium">Timer</label>
                            <Button
                                type="button"
                                variant="default"
                                size="sm"
                                onClick={() => setSidePanelState(sidePanelState === "timer" ? "none" : "timer")}
                            >
                                Set
                            </Button>
                        </div>
                        <div className="text-2xl font-medium">
                            {formData.timer.hours}:{formData.timer.minutes}:{formData.timer.seconds}
                        </div>
                        <div className="flex space-x-4 text-xs text-gray-500">
                            <span>Hrs</span>
                            <span>Min</span>
                            <span>Sec</span>
                        </div>
                    </div> */}

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

                    <Button type="submit" className="w-full bg-quivyPurple text-white hover:bg-quivyPurple/50">
                        Create Event
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