"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronUp, ChevronDown } from "lucide-react"

interface TimePickerProps {
    initialHours: string
    initialMinutes: string
    initialSeconds: string
    onTimeChange: (hours: string, minutes: string, seconds: string) => void
}

export default function Timer({ initialHours, initialMinutes, initialSeconds, onTimeChange }: TimePickerProps) {
    const [hours, setHours] = useState(Number.parseInt(initialHours))
    const [minutes, setMinutes] = useState(Number.parseInt(initialMinutes))
    const [seconds, setSeconds] = useState(Number.parseInt(initialSeconds))

    const hoursRef = useRef<HTMLDivElement>(null)
    const minutesRef = useRef<HTMLDivElement>(null)
    const secondsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        onTimeChange(
            hours.toString().padStart(2, "0"),
            minutes.toString().padStart(2, "0"),
            seconds.toString().padStart(2, "0"),
        )
    }, [hours, minutes, seconds, onTimeChange])

    const incrementHours = () => setHours((prev) => (prev + 1) % 24)
    const decrementHours = () => setHours((prev) => (prev - 1 + 24) % 24)

    const incrementMinutes = () => setMinutes((prev) => (prev + 1) % 60)
    const decrementMinutes = () => setMinutes((prev) => (prev - 1 + 60) % 60)

    const incrementSeconds = () => setSeconds((prev) => (prev + 1) % 60)
    const decrementSeconds = () => setSeconds((prev) => (prev - 1 + 60) % 60)

    // Generate array of visible numbers for each time unit
    const generateTimeNumbers = (current: number, max: number) => {
        const result = []
        for (let i = 0; i < max; i++) {
            result.push({
                value: i,
                display: i.toString().padStart(2, "0"),
                isCurrent: i === current,
            })
        }
        return result
    }

    const hourNumbers = generateTimeNumbers(hours, 24)
    const minuteNumbers = generateTimeNumbers(minutes, 60)
    const secondNumbers = generateTimeNumbers(seconds, 60)

    // Handle wheel events for scrolling
    const handleWheel = (
        event: React.WheelEvent<HTMLDivElement>,
        setter: React.Dispatch<React.SetStateAction<number>>,
        max: number,
    ) => {
        event.preventDefault()
        if (event.deltaY > 0) {
            // Scrolling down
            setter((prev) => (prev + 1) % max)
        } else {
            // Scrolling up
            setter((prev) => (prev - 1 + max) % max)
        }
    }

    // Scroll to the current value when component mounts or values change
    useEffect(() => {
        if (hoursRef.current) {
            const hourElement = hoursRef.current.querySelector(`[data-value="${hours}"]`)
            if (hourElement) {
                hourElement.scrollIntoView({ block: "center", behavior: "auto" })
            }
        }
    }, [hours])

    useEffect(() => {
        if (minutesRef.current) {
            const minuteElement = minutesRef.current.querySelector(`[data-value="${minutes}"]`)
            if (minuteElement) {
                minuteElement.scrollIntoView({ block: "center", behavior: "auto" })
            }
        }
    }, [minutes])

    useEffect(() => {
        if (secondsRef.current) {
            const secondElement = secondsRef.current.querySelector(`[data-value="${seconds}"]`)
            if (secondElement) {
                secondElement.scrollIntoView({ block: "center", behavior: "auto" })
            }
        }
    }, [seconds])

    return (
        <div className="flex flex-col items-center">
            <div className="text-4xl font-bold mb-4">
                {hours.toString().padStart(2, "0")}:{minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}
            </div>

            <div className="flex justify-between w-full mb-4">
                <div className="text-center">Hours</div>
                <div className="text-center">Minutes</div>
                <div className="text-center">Seconds</div>
            </div>

            <div className="flex justify-between w-full">
                {/* Hours Column */}
                <div className="flex flex-col items-center">
                    <Button variant="ghost" size="sm" onClick={incrementHours} className="p-1 h-8">
                        <ChevronUp className="h-5 w-5" />
                    </Button>
                    <div
                        className="h-[150px] w-[60px] overflow-auto scrollbar-hide relative"
                        onWheel={(e) => handleWheel(e, setHours, 24)}
                        ref={hoursRef}
                    >
                        <div className="absolute inset-0 flex flex-col items-center py-[60px]">
                            {hourNumbers.map((item) => (
                                <div
                                    key={item.value}
                                    data-value={item.value}
                                    className={`py-2 cursor-pointer transition-all ${item.isCurrent ? "text-lg font-bold text-[#7340fd]" : "text-sm text-gray-400"
                                        }`}
                                    onClick={() => setHours(item.value)}
                                >
                                    {item.display}
                                </div>
                            ))}
                        </div>
                        {/* Highlight for selected value */}
                        <div className="absolute top-1/2 left-0 right-0 h-10 -mt-5 bg-gray-100 rounded-md pointer-events-none"></div>
                    </div>
                    <Button variant="ghost" size="sm" onClick={decrementHours} className="p-1 h-8">
                        <ChevronDown className="h-5 w-5" />
                    </Button>
                </div>

                {/* Minutes Column */}
                <div className="flex flex-col items-center">
                    <Button variant="ghost" size="sm" onClick={incrementMinutes} className="p-1 h-8">
                        <ChevronUp className="h-5 w-5" />
                    </Button>
                    <div
                        className="h-[150px] w-[60px] overflow-auto scrollbar-hide relative"
                        onWheel={(e) => handleWheel(e, setMinutes, 60)}
                        ref={minutesRef}
                    >
                        <div className="absolute inset-0 flex flex-col items-center py-[60px]">
                            {minuteNumbers.map((item) => (
                                <div
                                    key={item.value}
                                    data-value={item.value}
                                    className={`py-2 cursor-pointer transition-all ${item.isCurrent ? "text-lg font-bold text-[#7340fd]" : "text-sm text-gray-400"
                                        }`}
                                    onClick={() => setMinutes(item.value)}
                                >
                                    {item.display}
                                </div>
                            ))}
                        </div>
                        {/* Highlight for selected value */}
                        <div className="absolute top-1/2 left-0 right-0 h-10 -mt-5 bg-gray-100 rounded-md pointer-events-none"></div>
                    </div>
                    <Button variant="ghost" size="sm" onClick={decrementMinutes} className="p-1 h-8">
                        <ChevronDown className="h-5 w-5" />
                    </Button>
                </div>

                {/* Seconds Column */}
                <div className="flex flex-col items-center">
                    <Button variant="ghost" size="sm" onClick={incrementSeconds} className="p-1 h-8">
                        <ChevronUp className="h-5 w-5" />
                    </Button>
                    <div
                        className="h-[150px] w-[60px] overflow-auto scrollbar-hide relative"
                        onWheel={(e) => handleWheel(e, setSeconds, 60)}
                        ref={secondsRef}
                    >
                        <div className="absolute inset-0 flex flex-col items-center py-[60px]">
                            {secondNumbers.map((item) => (
                                <div
                                    key={item.value}
                                    data-value={item.value}
                                    className={`py-2 cursor-pointer transition-all ${item.isCurrent ? "text-lg font-bold text-[#7340fd]" : "text-sm text-gray-400"
                                        }`}
                                    onClick={() => setSeconds(item.value)}
                                >
                                    {item.display}
                                </div>
                            ))}
                        </div>
                        {/* Highlight for selected value */}
                        <div className="absolute top-1/2 left-0 right-0 h-10 -mt-5 bg-gray-100 rounded-md pointer-events-none"></div>
                    </div>
                    <Button variant="ghost" size="sm" onClick={decrementSeconds} className="p-1 h-8">
                        <ChevronDown className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </div>
    )
}

