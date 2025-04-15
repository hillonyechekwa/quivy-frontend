import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {DateSelector} from "../event-components/date-picker"
import TimeSelector from "../event-components/time-picker"
import DurationPicker from "../event-components/duration-picker"
import { format } from 'date-fns'
import { FormData } from "../types"

interface EventDetailsSectionProps {
    formData: FormData
    onFormDataChange: (data: Partial<FormData>) => void
}

export function EventDetailsSection({ formData, onFormDataChange }: EventDetailsSectionProps) {
    const duration = formData.hours * 60 + formData.minutes

    return (
        <div className="space-y-8">
            <section className="flex flex-col space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                    type="text"
                    name="title"
                    id="title"
                    value={formData.title}
                    onChange={(e) => onFormDataChange({ title: e.target.value })}
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
                    <DurationPicker
                        hours={formData.hours}
                        minutes={formData.minutes}
                        handleHours={(hours) => onFormDataChange({ hours })}
                        handleMinutes={(minutes) => onFormDataChange({ minutes })}
                    />
                </div>
            </section>

            <p>{`This event will take place on ${format(formData.date, "MMMM d, yyyy")} from ${format(formData.timeValue, 'h:mm:a')} until ${format(new Date(formData.date.getTime() + duration * 60000), "hh:mm:a")}`}</p>
        </div>
    )
}