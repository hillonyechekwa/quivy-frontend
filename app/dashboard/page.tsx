"use client"
import { useIsMobile } from "@/hooks/use-mobile"
import DashboardHeader from "./dashboard-components/DashBoardHeader"
import { MetricCards } from "./dashboard-components/MetricCards"
import { ClicksAndScansChart } from "./dashboard-components/ClicksScansChart"
import EventsCalendar from "./dashboard-components/EventsCalendar"
import { DeviceInsights } from "./dashboard-components/DeviceInsights"
import PrizeHistory from "./dashboard-components/PrizeHistory"
import MobilePrizeHistoryLink from "./dashboard-components/MobilePrizeHistoryLink"

const Page = () => {
  const isMobile = useIsMobile()

  return (
    <div className={`flex flex-col gap-6 ${isMobile ? "p-4" : "p-6"}`}>
      {!isMobile && <DashboardHeader />}
      {isMobile && <MobilePrizeHistoryLink />}
      <MetricCards />

      {isMobile ? (
        <>
          <div className="grid grid-cols-1 gap-6">
            <EventsCalendar />
            <DeviceInsights />
            <ClicksAndScansChart />
          </div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <ClicksAndScansChart />
            </div>
            <div>
              <DeviceInsights />
              <div className="mt-6">
                <EventsCalendar />
              </div>
            </div>
          </div>
          <PrizeHistory />
        </>
      )}
    </div>
  )
}

export default Page