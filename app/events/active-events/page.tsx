"use client"
import { EventsDataTable } from "./ActiveEventsTable"
import AppLayout from "@/app/providers"


const ActiveEventsPage = () => {
  return (
    <AppLayout>
    <div className="h-auto flex justify-center items-center p-3 w-full">
      <EventsDataTable />
    </div>
    </AppLayout>
  )
}

export default ActiveEventsPage