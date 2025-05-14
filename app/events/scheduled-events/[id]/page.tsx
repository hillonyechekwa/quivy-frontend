"üse client"


import { useParams } from "next/navigation"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
// import { EventType } from "../../types"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { differenceInMinutes, format, addDays,isBefore } from "date-fns"
import { Textarea } from "@/components/ui/textarea"
import {
  // ChevronLeft,
  // Bell,
  Flame,
  QrCode,
  Gift,
  Edit,
  ExternalLink,
  Trash2,
  Calendar,
  Clock,
  MoveVertical,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"
import AppLayout from "@/app/providers"
import { useQuery } from "@tanstack/react-query"
// import {format, parse} from "date-fns"





export function ScheduledEventTemplatePage() {
  const isMobile = useIsMobile()
  const params = useParams()
  const id = params.id

  const [activeTab, setActiveTab] = useState("outline")



  const {data: activeEvent} = useQuery({
    queryKey: ['activeEvent'],
    queryFn: async () => {
        const response = await fetch(`/api/events/getEvent/${id}`)
        const data = await response.json()
        return data
    }
  })


  function getDurationFromDates(start: Date, end: Date): string {
    const totalMinutes = differenceInMinutes(end, start);

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${hours}h ${minutes}m`;
  }


  const calculateEndTime = (startTimeString: Date, startDateString: Date, endTimeString: Date) => {
           const startDateTime = new Date(
            startDateString.getFullYear(),
            startDateString.getMonth(),
            startDateString.getDate(),
            startTimeString.getHours(),
            startTimeString.getMinutes()
          );

          let endDateTime = new Date(
            startDateString.getFullYear(),
            startDateString.getMonth(),
            startDateString.getDate(),
            endTimeString.getHours(),
            endTimeString.getMinutes()
          );
  
           if (isBefore(endDateTime, startDateTime)) {
            endDateTime = addDays(endDateTime, 1);
          }

          const formatted = format(endDateTime, "MMMM d, yyyy h:mm a");

          return {
            endDateTime,
            formatted,
          };
      }

      const endDuration = calculateEndTime(activeEvent?.eventStartTime, activeEvent?.date, activeEvent?.eventEndTime)

  console.log("activeEvent", activeEvent)	

  return (
    <AppLayout>
    <div className="flex flex-col min-h-screen bg-[#fafafa]">
      {/* Header */}
      {/* <header className="flex items-center justify-between p-4 border-b bg-white">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" className="mr-2">
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex items-center gap-4">
          {!isMobile && (
            <div className="bg-[#f1ecff] rounded-full p-2">
              <span className="text-[#7340fd] text-xs">?</span>
            </div>
          )}
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          {!isMobile && (
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                <img src="/placeholder.svg?height=32&width=32" alt="Profile" className="h-full w-full object-cover" />
              </div>
              <span className="text-sm">johndoe@gmail.com</span>
            </div>
          )}
        </div>
      </header> */}


      {/* Main content area */}
      <div className="flex-1 overflow-auto p-4 md:p-6 bg-[#f1ecff]/20">
        {/* Overview section */}
        <div className="mb-6">
          <h2 className="text-lg font-medium text-center mb-4">Overview</h2>

          <div className={cn("grid gap-4", isMobile ? "grid-cols-1" : "grid-cols-3")}>
            {/* Total Clicks Card */}
            <Card className="bg-[#7340fd] text-white">
              <CardContent className="p-6 flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium mb-4">Total clicks</p>
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-bold">{activeEvent?.clicks}</span>
                    <span className="text-sm mb-1">clicks</span>
                  </div>
                </div>
                <div className="bg-white/20 p-2 rounded-full">
                  <Flame className="h-5 w-5 text-white" />
                </div>
              </CardContent>
            </Card>

            {/* Total Scans Card */}
            <Card className="bg-[#7340fd] text-white">
              <CardContent className="p-6 flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium mb-4">Total Scans</p>
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-bold">{activeEvent?.scans}</span>
                    <span className="text-sm mb-1">scans</span>
                  </div>
                </div>
                <div className="bg-white/20 p-2 rounded-full">
                  <QrCode className="h-5 w-5 text-white" />
                </div>
              </CardContent>
            </Card>

            {/* Total Prize Winner Card */}
            <Card className="bg-[#7340fd] text-white">
              <CardContent className="p-6 flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium mb-4">Total Prize winner</p>
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-bold">{activeEvent?.winners.length}</span>
                    <span className="text-sm mb-1">winners</span>
                  </div>
                </div>
                <div className="bg-white/20 p-2 rounded-full">
                  <Gift className="h-5 w-5 text-white" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Device Insights */}
        <div className="mb-6">
          <Card className="bg-white">
            <CardContent className={cn("p-4", !isMobile && "p-6")}>
              <h3 className="text-sm font-medium mb-4">Device Insights</h3>
              <div className="grid grid-cols-4 gap-2 md:gap-4">
                {["Mobile", "Laptop", "Desktop", "Others"].map((device) => (
                  <div key={device} className="flex flex-col items-center">
                    <div
                      className={cn("w-full bg-[#f1ecff] rounded-md mb-1 md:mb-2", isMobile ? "h-12" : "h-20")}
                    ></div>
                    <span className={cn(isMobile ? "text-[10px]" : "text-xs")}>{device}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="outline" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex items-center justify-between mb-4">
            <TabsList className="bg-transparent border-b w-auto">
              <TabsTrigger
                value="outline"
                className={cn(
                  "data-[state=active]:border-b-2 data-[state=active]:border-[#7340fd] data-[state=active]:text-[#7340fd] data-[state=active]:shadow-none rounded-none",
                  "data-[state=active]:bg-transparent",
                )}
              >
                Outline
              </TabsTrigger>
              <TabsTrigger
                value="winners"
                className={cn(
                  "data-[state=active]:border-b-2 data-[state=active]:border-[#7340fd] data-[state=active]:text-[#7340fd] data-[state=active]:shadow-none rounded-none",
                  "data-[state=active]:bg-transparent",
                )}
              >
                Winners
              </TabsTrigger>
            </TabsList>

            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <Edit className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <ExternalLink className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <TabsContent value="outline" className="mt-0">
            <div className="space-y-6">
              {/* Title */}
              <div>
                <h3 className="text-base font-medium mb-2">Title</h3>
                <Input defaultValue={activeEvent?.name} className="border rounded-lg p-4" />
              </div>

              {/* Description */}
              <div>
                <h3 className="text-base font-medium mb-2">Description</h3>
                <Textarea
                  defaultValue={activeEvent?.description}
                  className="min-h-[100px] border rounded-lg p-4"
                />
              </div>

              {/* Date, Time, Duration */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h3 className="text-base font-medium mb-2">Date</h3>
                  <div className="relative">
                    <Input
                      type="text"
                      defaultValue={new Date(activeEvent?.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                      className="border rounded-lg p-4 pr-10"
                    />
                    <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-medium mb-2">Time</h3>
                  <div className="relative">
                    <Input
                      type="text"
                      defaultValue={new Date(activeEvent?.startDate).toLocaleTimeString("en-US", {
                        hour: "2-digit"})}
                      className="border rounded-lg p-4 pr-10"
                    />
                    <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-medium mb-2">Duration</h3>
                  <div className="relative">
                    <Input
                      type="text"
                      defaultValue={getDurationFromDates(new Date(activeEvent?.eventStartTime), new Date(activeEvent?.eventEndTime))}
                      className="border rounded-lg p-4 pr-10"
                    />
                    <MoveVertical className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                  </div>
                </div>
              </div>

              {/* Event Time Info */}
              <p className="text-sm text-gray-500">
                This event will take place on{" "}
                {`${format(new Date(activeEvent?.date), "MMMM, d, yyyy")} from ${format(new Date(activeEvent?.eventStartTime), 'hh:mm:a')} to ${endDuration} `}
              </p>

              {/* Timer
              <div>
                <h3 className="text-base font-medium mb-2">Timer</h3>
                <div className="text-4xl font-bold">00:30:00</div>
                <div className="flex gap-4 text-xs text-gray-500 mt-1">
                  <span>Hrs</span>
                  <span>Min</span>
                  <span>Sec</span>
                </div>
              </div> */}
            </div> 
          </TabsContent>

          <TabsContent value="winners" className="mt-0">
            <div className="flex items-center justify-center h-40">
              <p className="text-gray-500">No winners data available yet.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
    </AppLayout>
  )
}
