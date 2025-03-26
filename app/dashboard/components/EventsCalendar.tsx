"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useIsMobile } from "@/hooks/use-mobile"
import { ChevronDown } from "lucide-react"

export function EventsCalendar() {
    const weekdays = ["M", "T", "W", "T", "F", "S", "S"]

    // Generate calendar days for January
    const days = Array.from({ length: 31 }, (_, i) => i + 1)

    // Legend items
    const legendItems = [
        { label: "1 - 4", color: "bg-white border border-primary" },
        { label: "5 - 9", color: "bg-orange-light" },
        { label: "10 & above", color: "bg-primary" },
    ]

    const isMobile = useIsMobile()

    return (
        <Card className="bg-[#321A72] text-white w-full">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-base font-medium">Events per day</CardTitle>
                <Select defaultValue="jan">
                    <SelectTrigger className="w-[80px] h-8 bg-transparent border-none text-white">
                        <SelectValue placeholder="Select month" />
                        <ChevronDown className="h-4 w-4 opacity-50" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="jan">Jan</SelectItem>
                        <SelectItem value="feb">Feb</SelectItem>
                        <SelectItem value="mar">Mar</SelectItem>
                        <SelectItem value="apr">Apr</SelectItem>
                        <SelectItem value="may">May</SelectItem>
                        <SelectItem value="jun">Jun</SelectItem>
                        <SelectItem value="jul">Jul</SelectItem>
                        <SelectItem value="aug">Aug</SelectItem> 
                        <SelectItem value="sep">Sep</SelectItem> 
                        <SelectItem value="oct">Oct</SelectItem> 
                        <SelectItem value="nov">Nov</SelectItem> 
                        <SelectItem value="dev">Dev</SelectItem> 
                    </SelectContent>
                </Select>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-7 gap-1 mb-2">
                    {weekdays.map((day) => (
                        <div key={day} className="text-center text-xs">
                            {day}
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                    {/* Empty cells for days before the 1st of January (Monday) */}
                    {Array.from({ length: 0 }).map((_, i) => (
                        <div key={`empty-${i}`} className="h-6 w-full"></div>
                    ))}

                    {days.map((day) => (
                        <div key={day} className="h-6 w-full flex items-center justify-center text-xs">
                            {day}
                        </div>
                    ))}
                </div>

                <div className="flex items-center justify-center gap-4 mt-4">
                    {legendItems.map((item) => (
                        <div key={item.label} className="flex items-center gap-1">
                            <div className={`h-3 w-3 rounded-full ${item.color}`}></div>
                            <span className="text-xs">{item.label}</span>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

