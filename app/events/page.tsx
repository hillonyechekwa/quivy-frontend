"use client"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"


const EventsPage = () => {
    const router = useRouter()

    const goToNewEventPage = (status: string) => {
        router.push(`/events/new/${status}`)
    }

  return (
    <main className="flex justify-start items-center w-full">
        <div className="flex flex-col space-y-2 justify-center items-center text-wrap w-full">
            <Calendar size={80} className="stroke-quivyPurple/30"/>
            <p className="text-md  text-gray-300 text-wrap">Create an event and make it more engaging with an exciting giveaway for your audience!</p>
            <Button className="w-[400px] bg-quivyPurple text-white p-5" onClick={() => goToNewEventPage('drafted')}>Create Event</Button>
        </div>
    </main>
  )
}

export default EventsPage