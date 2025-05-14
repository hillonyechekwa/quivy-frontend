import { Input } from "@/components/ui/input"
// import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {DateSelector} from "../event-components/date-picker"
import TimeSelector from "../event-components/time-picker"
// import DurationPicker from "../event-components/duration-picker"
import DurationSelector from "../event-components/duration-selector"
import { EventFormData } from "../types"
import {format, add} from 'date-fns'

interface EventDetailsSectionProps {
    formData: EventFormData
    onFormDataChange: (data: Partial<EventFormData>) => void
}

export function EventDetailsSection({ formData, onFormDataChange }: EventDetailsSectionProps) {


    const duration = formData.hours * 60 + formData.minutes
    console.log(duration, 'duration')

    const calculateEndTime = (startTimeString: Date, startDateString: Date, durationHours: number, durationMinutes: number) => {
        const combinedStartDateTime = new Date(
            startDateString.getFullYear(),
            startDateString.getMonth(),
            startDateString.getDate(),
            startTimeString.getHours(),
            startTimeString.getMinutes()
        );

         const endTime = add(combinedStartDateTime, {
            hours: durationHours,
            minutes: durationMinutes,
        });

        const formattedEndTime = format(endTime, "MMMM d, yyyy h:mm a");

        return {
            endTime,
            formattedEndTime
        }
    }

    const eventEndTime = calculateEndTime(formData.timeValue,formData.date, formData.hours, formData.minutes)
    
    return (
        <div className="space-y-8">
            <section className="flex flex-col space-y-2">
                <Label htmlFor="name">Event Name</Label>
                <Input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={(e) => onFormDataChange({ name: e.target.value })}
                    className="w-[600px] p-5"
                />
            </section>

            <section className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                    name="description"
                    id="description"
                    value={formData.description}
                    onChange={(e) => onFormDataChange({ description: e.target.value })}
                    cols={100}
                    rows={10}
                />
            </section>

            <section className="flex justify-between items-center space-x-4">
                <div className="flex flex-col space-y-2">
                    <Label>Date</Label>
                    <DateSelector
                        value={formData.date}
                        handleValue={(date) => date && onFormDataChange({ date })}  
                    />
                </div>
                <div className="flex flex-col space-y-2">
                    <Label>Time</Label>
                    <TimeSelector
                        value={formData.timeValue}
                        handleValue={(timeValue) => timeValue && onFormDataChange({ timeValue })}
                    />
                </div>
                <div className="flex flex-col space-y-2">
                    <Label>Duration</Label>
                    <DurationSelector
                        hours={formData.hours}
                        minutes={formData.minutes}
                        handleHours={(hours) => onFormDataChange({ hours })}
                        handleMinutes={(minutes) => onFormDataChange({ minutes })}
                    />
                </div>
            </section>

            <p>{`This event will take place on ${format(formData.date, "MMMM d, yyyy")} from ${format(formData.timeValue, 'h:mm:a')} until ${eventEndTime.formattedEndTime}`}</p>
        </div>
    )
}