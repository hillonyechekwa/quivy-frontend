"use client"

import { Card } from "@/components/ui/card"
import { ChevronLeftCircle, Edit, Plus, Minus, Upload, Trash2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCallback, useState } from "react"
import DatePicker from "./event-components/date-picker"
import TimeSelector from "./event-components/time-picker"
import DurationPicker from "./event-components/duration-picker"
import Timer from "./event-components/timer"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { format } from 'date-fns'
import Image from "next/image"



type SidePanelState = "none" | "timer" | "prize-add"

interface Prize {
    name: string
    description: string
    quantity: number,
    //TODO: add prize image here instead of being seperate
}

interface EventsFormProps {
    handleOpenForm: (open: boolean) => void
}

const EventsForm = ({ handleOpenForm }: EventsFormProps) => {
    const [sidePanelState, setSidePanelState] = useState<SidePanelState>("none")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [timeValue, setTimeValue] = useState<Date | null>(new Date())
    const [hours, setHours] = useState(3);
    const [minutes, setMinutes] = useState(0);
    const [prizes, setPrizes] = useState<Prize[]>([])
    const [newPrize, setNewPrize] = useState<Prize>({ name: "", description: "", quantity: 1 })
    const [editingPrizeIndex, setEditingPrizeIndex] = useState<number | null>(null)
    const [timer, setTimer] = useState({ hours: "00", minutes: "30", seconds: "00" })
    const [selectedImage, setSelectedImage] = useState<string | null>(null)
    const [error, setError] = useState<string | null>(null)




    const handleTimeChange = (newTime: Date | null) => {
        setTimeValue(newTime)
    }

    const duration = hours * 60 + minutes

    console.log('sidepanelstate1', sidePanelState)

    const handleTimerChange = useCallback((newHours: string, newMinutes: string, newSeconds: string) => {
        setTimer({
            hours: newHours.padStart(2, "0"),
            minutes: newMinutes.padStart(2, "0"),
            seconds: newSeconds.padStart(2, "0"),
        })
    }, [])

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
            setNewPrize({ name: "", description: "", quantity: 1 })
            setSidePanelState("none")
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
                setError(`file size is too large, max file size is ${MAX_FILE_SIZE/1024/1024}MB`)
                return
            }

            const allowedTypes = ['image/jpg', 'image/png', 'image/webp', 'image/jpeg']
            if (!allowedTypes.includes(file.type)) {
                setError("invalid file type. please upload another image")
                return
            }

            const imageURL = URL.createObjectURL(file)
            setSelectedImage(imageURL)
        }
    }

    const triggerFileInput = () => {
        document.getElementById('file-upload')?.click()
    }


    return (
        <section className="w-auto h-auto flex flex-col items-start justify-between space-y-5 p-10 relative">
            <ChevronLeftCircle size={40} className="relative left-5 stroke-gray-500 stroke-1 hover:stroke-gray-300 cursor-pointer" onClick={() => handleOpenForm(false)} />
            <Card className="p-3 flex justify-between space-x-6 ">
                <form className="flex flex-col justify-between items-start space-y-16 p-5">
                    <section className="flex flex-col space-y-2">
                        <Label htmlFor="title">Title</Label>
                        <Input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-[600px] p-5" />
                    </section>
                    <section className="space-y-2">
                        <label htmlFor="description">Description</label>
                        <Textarea name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)} cols={100} rows={10}></Textarea>
                    </section>
                    <section className="flex justify-between items-center space-x-4">
                        <div className="flex flex-col space-y-2">
                            <Label htmlFor="">Date</Label>
                            <DatePicker date={date} handleDate={setDate} />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <Label htmlFor="">Time</Label>
                            <TimeSelector value={timeValue} handleValue={handleTimeChange} />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <Label htmlFor="">Duration</Label>
                            <DurationPicker hours={hours} minutes={minutes} handleHours={setHours} handleMinutes={setMinutes} />
                        </div>
                    </section>
                    <p>{`This event will take place on ${format(date ?? new Date(), "MMMM d, yyyy")} from ${format(timeValue ?? new Date(), 'h:mm:a')} until ${format(new Date((date ?? new Date()).getTime() + duration * 60000), "hh:mm:a")}`}</p>
                    <div className="space-y-2 w-full bg-gray-200 rounded-md p-3">
                        <div className="flex justify-between items-center">
                            <Label className="text-sm font-medium">Timer</Label>
                            <Button
                                type="button"
                                variant="default"
                                size="sm"
                                className=""
                                onClick={() => {
                                    console.log('sidePanelState', sidePanelState)
                                    setSidePanelState(sidePanelState === "timer" ? "none" : "timer")
                                }}
                            >
                                Set
                            </Button>
                        </div>
                        <div className="text-2xl font-medium">
                            {timer.hours}:{timer.minutes}:{timer.seconds}
                        </div>
                        <div className="flex space-x-4 text-xs text-gray-500">
                            <span>Hrs</span>
                            <span>Min</span>
                            <span>Sec</span>
                        </div>
                    </div>
                    <div className="space-y-2 w-full">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-medium">Prize listing</label>
                            <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                className="bg-black text-white rounded-md hover:bg-black/90"
                                onClick={() => {
                                    setNewPrize({ name: "", description: "", quantity: 1 })
                                    setEditingPrizeIndex(null)
                                    setSidePanelState(sidePanelState === "prize-add" ? "none" : "prize-add")
                                }}
                            >
                                Add to List
                            </Button>
                        </div>

                        {prizes.length > 0 && (
                            <div className="mt-4 space-y-4">
                                {prizes.map((prize, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="text-sm font-medium w-10">{prize.quantity}</div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2">
                                                <div className="h-8 w-8 bg-gray-200 rounded-md flex items-center justify-center">
                                                    <span className="text-xs">🎁</span>
                                                </div>
                                                <div>
                                                    <div className="font-medium">{prize.name}</div>
                                                    <div className="text-xs text-gray-500">{prize.description}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button type="button" variant="ghost" size="icon" onClick={() => handleEditPrize(index)}>
                                                <Edit className="h-4 w-4" />
                                            </Button>
                                            <Button type="button" variant="ghost" size="icon" onClick={() => handleRemovePrize(index)}>
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <Button className="w-full bg-quivyPurple text-white hover:bg-quivyPurple/50">Create Event</Button>
                </form>
                {sidePanelState !== "none" && (
                    <div className="w-80 bg-white p-8 rounded-lg shadow-md">
                        {sidePanelState === "timer" && (
                            <div className="space-y-6">
                                <h2 className="text-lg font-medium">Set your time</h2>

                                <Timer
                                    initialHours={timer.hours}
                                    initialMinutes={timer.minutes}
                                    initialSeconds={timer.seconds}
                                    onTimeChange={handleTimerChange}
                                />

                                <Button
                                    className="w-full bg-[#7340fd] text-white hover:bg-[#7340fd]/90"
                                    onClick={() => setSidePanelState("none")}
                                >
                                    Save
                                </Button>
                            </div>
                        )}
                        {sidePanelState === "prize-add" && (
                            <div className="space-y-6">
                                <h2 className="text-lg font-medium">Prize listing</h2>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Prize name</label>
                                        <Input
                                            value={newPrize.name}
                                            onChange={(e) => setNewPrize({ ...newPrize, name: e.target.value })}
                                            placeholder="Enter prize name"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Prize Description</label>
                                        <Textarea
                                            value={newPrize.description}
                                            onChange={(e) => setNewPrize({ ...newPrize, description: e.target.value })}
                                            placeholder="Enter prize description"
                                            className="min-h-[100px]"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Quantity</label>
                                        <div className="flex items-center">
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                className="rounded-full"
                                                onClick={() => setNewPrize({ ...newPrize, quantity: Math.max(1, newPrize.quantity - 1) })}
                                            >
                                                <Minus className="h-4 w-4" />
                                            </Button>
                                            <div className="w-12 text-center">{newPrize.quantity}</div>
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                className="rounded-full"
                                                onClick={() => setNewPrize({ ...newPrize, quantity: newPrize.quantity + 1 })}
                                            >
                                                <Plus className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Upload image</label>
                                        <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6">
                                            <div className="flex items-center justify-center bg-gray-100 rounded-full p-2">
                                                <Upload className="h-6 w-6 text-gray-500" />
                                            </div>
                                            <Input id="file-upload" type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                                            {error && (
                                                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded flex items-center">
                                                    <AlertCircle className="mr-2" />
                                                    <p>{error}</p>
                                                </div>
                                            )}
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={triggerFileInput}
                                                className="mt-4 bg-black text-white rounded-md hover:bg-black/90"
                                            >
                                                Upload image
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center p-3">
                                        {selectedImage && (
                                            <div className="rounded-lg shadow-md max-h-64 object-cover">
                                                <Image width={150} height={150} src={selectedImage} alt="product-image" />
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <Button className="w-full bg-[#7340fd] text-white hover:bg-[#7340fd]/90" onClick={handleAddPrize}>
                                    Save
                                </Button>
                            </div>
                        )}
                    </div>
                )}
            </Card>
        </section>
    )
}

export default EventsForm