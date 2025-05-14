"use client"
import { EventsDataTable } from "./ActiveEventsTable"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import AppLayout from "@/app/providers"
import {useQuery} from "@tanstack/react-query"
import {EventType} from "../types"
import {useRouter} from "next/navigation"


const ActiveEventsPage = () => {

  const {data: events = []} = useQuery({
    queryKey: ['event'],
    queryFn: async () => {
      const response = await fetch("/api/events/getEvents")
      const data = await response.json()
      return data
    }
  })

  const router = useRouter()

  console.log('events',  events)
  const activeEvents = events?.filter((event: EventType) => event.status === 'ACTIVE')

  console.log('activeEvents', activeEvents)
  const goToNewEventPage = (status: string) => {
    router.push(`/events/new/${status}`)
  }

  return (
    <AppLayout>
    <div className="h-auto flex justify-center items-center p-3 w-full">
      {
        activeEvents.length > 0
        ?
        <EventsDataTable events={activeEvents} />
        :
        (
          <div className="flex flex-col space-y-2 justify-center items-center text-wrap w-full min-h-screen">
            <Calendar size={80} className="stroke-quivyPurple/30"/>
            <p className="text-md  text-gray-300 text-wrap">Create an event and make it more engaging with an exciting giveaway for your audience!</p>
            <Button className="w-[400px] bg-quivyPurple text-white p-5" onClick={() => goToNewEventPage('active')}>Create Event</Button>
        </div>
        )
      }
    </div>
    </AppLayout>
  )
}

export default ActiveEventsPage