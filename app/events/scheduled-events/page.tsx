"use client"
import React from 'react'
import { EventsDataTable } from './ScheduledEventsTable'
import { Button } from '@/components/ui/button'
import {Calendar} from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import {EventType} from "../types"
import {useRouter} from "next/navigation"
import AppLayout from '@/app/providers'


const ScheduledEventsage = () => {

  const router = useRouter()

  const goToNewEventPage = (status: string) => {
      router.push(`/events/new/${status}`)
    }
  
    const {data: events = []} = useQuery({
      queryKey: ["events"],
      queryFn: async () => {
        const response = await fetch("/api/events/getEvents")
        const result = await response.json()
        return result
      }
    })
  
    const upcomingEvents = events.filter((event: EventType) => event.status === "UPCOMING")

  return (
    <AppLayout>
    <div className="w-full flex justify-center items-center p-3">
      {
        upcomingEvents.length > 0
        ?
        <EventsDataTable events={upcomingEvents} />
        :
        (
           <div className="flex flex-col space-y-2 justify-center items-center text-wrap w-full">
              <Calendar size={80} className="stroke-quivyPurple/30"/>
              <p className="text-md  text-gray-300 text-wrap">Create an event and make it more engaging with an exciting giveaway for your audience!</p>
              <Button className="w-[400px] bg-quivyPurple text-white p-5" onClick={() => goToNewEventPage('upcoming')}>Create Event</Button>
          </div>
        )
      }
    </div>
    </AppLayout>
  )
}

export default ScheduledEventsage