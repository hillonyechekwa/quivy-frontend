"use client"

// import { useState } from "react"
import { Calendar, Bell } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { AsyncBoundary } from "@/components/AsyncBoundary"
// import Loader from "@/components/Loader"
// import ErrorPage from "@/components/ErrorPage"
// import { useQuery } from "@tanstack/react-query"


type NotificationType = "event-created" | "active-event" | "event-completion" | "upcoming-reminder"

interface Notification {
  id: string
  type: NotificationType
  title: string
  description: string
  timestamp: string
  hasIndicator?: boolean
}

export default function NotificationsFeed() {
  const notifications: Notification[] = [
    {
      id: "1",
      type: "upcoming-reminder",
      title: "The event NextWave Submit!",
      description: "is starting soon in 30 minutes. Don't miss it!",
      timestamp: "",
      hasIndicator: false,
    },
    {
      id: "2",
      type: "event-created",
      title: "Event created",
      description:
        "You've successfully created the event The Visionary Gala!, this event will take place on January 16, 2025 from 11:00AM until 01:00PM",
      timestamp: "5h ago",
      hasIndicator: true,
    },
    {
      id: "3",
      type: "active-event",
      title: "Active event",
      description: "The event Pioneer Pathway! is now active and will take place from 09:00 AM to 10:00 AM.",
      timestamp: "7h ago",
      hasIndicator: false,
    },
    {
      id: "4",
      type: "active-event",
      title: "Active event",
      description: "The event Horizon Conference! is now active and will take place from 01:00 PM to 04:00 PM.",
      timestamp: "Jan 09, 01:00PM",
      hasIndicator: true,
    },
    {
      id: "5",
      type: "event-created",
      title: "Event created",
      description:
        "You've successfully created the event Horizon Conference!, this event will take place on January 09, 2025 from 01:00PM until 04:00PM",
      timestamp: "Dec 29, 10:34AM",
      hasIndicator: false,
    },
    {
      id: "6",
      type: "event-completion",
      title: "Event completion",
      description:
        "Your event NextWave Submit! has successfully ended. View the results and winners in your event dashboard.",
      timestamp: "Dec 27, 03:00PM",
      hasIndicator: true,
    },
    {
      id: "7",
      type: "upcoming-reminder",
      title: "Upcoming Event Reminder",
      description: "The event NextWave Submit! is starting soon in 30 minutes. Don't miss it!",
      timestamp: "Dec 27, 02:30PM",
      hasIndicator: false,
    },
  ]

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-sm border">
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full grid grid-cols-3 rounded-none border-b">
          <TabsTrigger
            value="all"
            className="data-[state=active]:text-purple-600 data-[state=active]:border-b-2 data-[state=active]:border-purple-600 rounded-none"
          >
            All
            <span className="ml-1 inline-flex items-center justify-center w-5 h-5 text-xs font-medium bg-purple-100 text-purple-600 rounded-full">
              4
            </span>
          </TabsTrigger>
          <TabsTrigger
            value="unread"
            className="data-[state=active]:text-purple-600 data-[state=active]:border-b-2 data-[state=active]:border-purple-600 rounded-none"
          >
            Unread
            <span className="ml-1 inline-flex items-center justify-center w-5 h-5 text-xs font-medium bg-gray-200 text-gray-600 rounded-full">
              4
            </span>
          </TabsTrigger>
          <TabsTrigger
            value="read"
            className="data-[state=active]:text-purple-600 data-[state=active]:border-b-2 data-[state=active]:border-purple-600 rounded-none"
          >
            Read
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-0">
          <div className="divide-y">
            {notifications.map((notification) => (
              <div key={notification.id} className="flex py-4 px-4">
                <div className="mr-4 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                    {notification.type === "upcoming-reminder" ? (
                      <Bell className="h-6 w-6 text-gray-500" />
                    ) : (
                      <Calendar className="h-6 w-6 text-gray-500" />
                    )}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center">
                    {notification.hasIndicator && <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>}
                    <h4 className="text-sm font-medium text-gray-900">{notification.title}</h4>
                  </div>
                  <p className="text-sm text-gray-700 mt-1">{notification.description}</p>
                </div>
                {notification.timestamp && (
                  <div className="ml-4 flex-shrink-0 self-start text-xs text-gray-500">{notification.timestamp}</div>
                )}
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="unread" className="mt-0">
          <div className="divide-y">
            {notifications
              .filter((n) => n.hasIndicator)
              .map((notification) => (
                <div key={notification.id} className="flex py-4 px-4">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                      {notification.type === "upcoming-reminder" ? (
                        <Bell className="h-6 w-6 text-gray-500" />
                      ) : (
                        <Calendar className="h-6 w-6 text-gray-500" />
                      )}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center">
                      {notification.hasIndicator && <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>}
                      <h4 className="text-sm font-medium text-gray-900">{notification.title}</h4>
                    </div>
                    <p className="text-sm text-gray-700 mt-1">{notification.description}</p>
                  </div>
                  {notification.timestamp && (
                    <div className="ml-4 flex-shrink-0 self-start text-xs text-gray-500">{notification.timestamp}</div>
                  )}
                </div>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="read" className="mt-0">
          <div className="divide-y">
            {notifications
              .filter((n) => !n.hasIndicator)
              .map((notification) => (
                <div key={notification.id} className="flex py-4 px-4">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                      {notification.type === "upcoming-reminder" ? (
                        <Bell className="h-6 w-6 text-gray-500" />
                      ) : (
                        <Calendar className="h-6 w-6 text-gray-500" />
                      )}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center">
                      {notification.hasIndicator && <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>}
                      <h4 className="text-sm font-medium text-gray-900">{notification.title}</h4>
                    </div>
                    <p className="text-sm text-gray-700 mt-1">{notification.description}</p>
                  </div>
                  {notification.timestamp && (
                    <div className="ml-4 flex-shrink-0 self-start text-xs text-gray-500">{notification.timestamp}</div>
                  )}
                </div>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
