"use client"
import MetricCards from "./components/MetricCards"
import DashboardChart from "./components/DashboardChart"
// import { EventsCalendar } from "./components/EventsCalendar"
import CalendarInsights from "./components/CalendarInsights"
import { PrizeHistory } from "./components/PrizeHistory"
import AppLayout from "../providers"


const DashboardPage = () => {

  return (
    <AppLayout>
    <section className="w-full grid grid-cols-4 grid-rows-3 grid-flow-col gap-x-3 gap-y-3 bg-[#FAFAFA]">     
      <MetricCards />
      <DashboardChart />
      <CalendarInsights />
      <PrizeHistory />
    </section>
    </AppLayout>
  )
}

export default DashboardPage