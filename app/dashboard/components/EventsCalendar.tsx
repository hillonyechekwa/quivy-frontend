"use client";

import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar"; // Adjust this path as needed

const EventCalendar: React.FC = () => {
    // Example event counts keyed by date string (YYYY-MM-DD)
    const events: Record<string, number> = {
        "2025-01-02": 3,
        "2025-01-05": 5,
        "2025-01-11": 8,
        "2025-01-15": 12,
    };

    // State to track the selected date
    const [selectedDate, setSelectedDate] = useState<Date>();

    // Helper to choose classes based on the event count
    const getDayClasses = (date: Date): string => {
        const dateString = date.toISOString().split("T")[0];
        const eventCount = events[dateString] || 0;

        if (eventCount >= 10) return "bg-purple-500 text-white";
        if (eventCount >= 5) return "bg-orange-500 text-white";
        if (eventCount > 0) return "bg-gray-300 text-black";
        return "bg-white text-black";
    };

    return (
        <div className="p-4">
            <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                modifiers={{
                    hasEvents: Object.keys(events).map((date) => new Date(date)),
                }}
                modifiersClassNames={{
                    hasEvents: "ring-2 ring-purple-500", // Add a subtle ring for days with events
                }}
                className={`${(date: Date) => getDayClasses(date)} bg-quivyPurple text-white`}
            />
            {selectedDate && (
                <div className="mt-4">
                    <p className="text-lg font-medium">
                        Selected Date: {selectedDate.toDateString()}
                    </p>
                    <p>
                        Events:{" "}
                        {events[selectedDate.toISOString().split("T")[0]] || 0}
                    </p>
                </div>
            )}
        </div>
    );
};

export default EventCalendar;
