"use client"

import { DataTable } from "./draft-components/DataTable"
import { columns } from "./draft-components/Columns"
import { Calendar } from "lucide-react"
import {Button} from "@/components/ui/button"
import { EventType } from "../types"
import { AsyncBoundary } from "@/components/AsyncBoundary"
import Loader from "@/components/Loader"
import {useQuery} from "@tanstack/react-query"
import AppLayout from "@/app/providers"
import { useRouter } from "next/navigation"


const DraftsPage = () => {
  const router = useRouter()

  const goToNewEventPage = (status: string) => {
    router.push(`/events/new/${status}`)
  }

  const {data: events = [], isLoading} = useQuery({
    queryKey: ["drafts"],
    queryFn: async () => {
      const response = await fetch("/api/events/getEvents")
      const result = await response.json()
      return result
    }
  })

  const drafts = events.filter((event: EventType) => event.status === "DRAFTED")

  const handleRowClick = (draft: EventType) => {
    router.push(`/events/drafts/${draft.id}`)
  } 


  if(isLoading) {
    return <Loader />
  }

  return (
    <AppLayout>
      <AsyncBoundary loadingFallback={<Loader />} errorFallback={<div>Couldn&apos;t load page</div>}>
    <section className="w-full h-auto justify-center items-center p-5">
      {
        drafts.length > 0 
        ?
        <DataTable columns={columns} data={drafts} title="Drafts" onRowClick={handleRowClick} />
        :
        (
           <div className="flex flex-col space-y-2 justify-center items-center text-wrap w-full min-h-screen">
              <Calendar size={80} className="stroke-quivyPurple/30"/>
              <p className="text-md  text-gray-300 text-wrap">Create an event and make it more engaging with an exciting giveaway for your audience!</p>
              <Button className="w-[400px] bg-quivyPurple text-white p-5" onClick={() => goToNewEventPage('drafted')}>Create Event</Button>
          </div>
        )
      }
    </section>
    </AsyncBoundary>
    </AppLayout>
  )
}

export default DraftsPage