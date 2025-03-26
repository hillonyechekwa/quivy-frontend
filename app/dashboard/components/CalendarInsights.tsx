import React from 'react'
import { DeviceInsights } from './DeviceInsights'
import { EventsCalendar } from './EventsCalendar'


const CalendarInsights = () => {
    return (
        <section className="w-full flex flex-col justify-between items-center col-start-4 col-end-6 space-y-3">
            <DeviceInsights />
            <EventsCalendar />
        </section>
    )
}

export default CalendarInsights