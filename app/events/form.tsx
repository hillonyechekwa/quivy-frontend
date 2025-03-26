"use client"

import { Card } from "@/components/ui/card"
import { ChevronLeftCircle, Edit, Plus, Minus, Upload, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import DatePicker from "./event-components/date-picker"
import TimeSelector from "./event-components/time-picker"
import DurationPicker from "./event-components/duration-picker"
import Timer from "./event-components/timer"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"



type SidePanelState = "none" | "timer" | "prize-add"

interface Prize {
    name: string
    description: string
    quantity: number
}

interface EventsFormProps {
    handleOpenForm: (open: boolean) => void
}

const EventsForm = ({ handleOpenForm }: EventsFormProps) => {
    const [sidePanelState, setSidePanelState] = useState<SidePanelState>("none")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [timeValue, setTimeValue] = useState<Date | null>(null)
    const [hours, setHours] = useState(3);
    const [minutes, setMinutes] = useState(0);
    const [prizes, setPrizes] = useState<Prize[]>([])
    const [newPrize, setNewPrize] = useState<Prize>({name: "", description: "", quantity: 1})


    const [timer, setTimer] = useState({ hours: "00", minutes: "30", seconds: "00" })

    const handleTimeChange = (newTime: Date | null) => {
        setTimeValue(newTime)
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


    return (
      <section className="w-full h-auto">
        <ChevronLeftCircle size={30} onClick={() => handleOpenForm(false)} className="cursor-pointer" />
        <Card className="p-3">
                <form className="flex flex-col justify-between items-center space-y-8">
                    <section>
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title" />
                    </section>
                    <section>
                        <label htmlFor="description">Description</label>
                        <textarea name="description" id="description" cols={10} rows={5}></textarea>
                    </section>
                    <section className="flex justify-between items-center space-x-4">
                        <div>
                            <label htmlFor="">Date</label>
                            <DatePicker date={date} handleDate={setDate} />        
                        </div>
                        <div>
                            <label htmlFor="">Time</label>
                            <TimeSelector value={timeValue} handleValue={handleTimeChange} />
                        </div>
                        <div>
                            <label htmlFor="">Duration</label>
                            <DurationPicker hours={hours} minutes={minutes} handleHours={setHours} handleMinutes={setMinutes} />
                        </div>
                    </section>
                    <p>{`This event will take place on ${date} from ${timeValue} until `}</p>
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-medium">Timer</label>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setSidePanelState(sidePanelState === "timer" ? "none" : "timer")}
                            >
                                <Edit className="h-4 w-4" />
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
                </form>
                {sidePanelState !== "none" && (
                    <div className="w-80 bg-white p-6 rounded-lg shadow-sm">
                        {sidePanelState === "timer" && (
                            <div className="space-y-6">
                                <h2 className="text-lg font-medium">Set your time</h2>

                                <Timer
                                    initialHours={timer.hours}
                                    initialMinutes={timer.minutes}
                                    initialSeconds={timer.seconds}
                                    onTimeChange={handleTimeChange}
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
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="mt-4 bg-black text-white rounded-md hover:bg-black/90"
                                            >
                                                Upload image
                                            </Button>
                                        </div>
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