"use client"

import { useState } from "react"
import { Bell, Calendar, Gift, Volume2 } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Skeleton } from "@/components/ui/skeleton"

// Notification types
type NotificationType =
  | "event_created"
  | "active_event"
  | "winner_alert"
  | "event_completion"
  | "platform_update"
  | "upcoming_reminder"

interface Notification {
  id: string
  type: NotificationType
  title: string
  content: string
  timestamp: string
  isRead: boolean
  isImportant?: boolean
  eventName?: string
}

// Sample notifications data
const sampleNotifications: Notification[] = [
  {
    id: "1",
    type: "event_created",
    title: "Event created",
    content:
      "You've successfully created the event The Visionary Gala, this event will take place on January 16, 2025 from 11:00AM until 01:00PM",
    timestamp: "5h ago",
    isRead: false,
    isImportant: true,
    eventName: "The Visionary Gala",
  },
  {
    id: "2",
    type: "active_event",
    title: "Active event",
    content: "The event Pioneer Pathway! is now active and will take place from 09:00 AM to 10:00 AM.",
    timestamp: "7h ago",
    isRead: false,
    isImportant: true,
    eventName: "Pioneer Pathway!",
  },
  {
    id: "3",
    type: "winner_alert",
    title: "Winner's alert",
    content:
      "We have a winner! Congrats! 🎉 your event Pathway Pioneer have a winner. Head to your dashboard to finalize the process.",
    timestamp: "19h ago",
    isRead: true,
    eventName: "Pathway Pioneer",
  },
  {
    id: "4",
    type: "active_event",
    title: "Active event",
    content: "The event Horizon Conference! is now active and will take place from 01:00 PM to 04:00 PM.",
    timestamp: "Jan 09, 01:00PM",
    isRead: false,
    isImportant: true,
    eventName: "Horizon Conference!",
  },
  {
    id: "5",
    type: "event_created",
    title: "Event created",
    content:
      "You've successfully created the event Horizon Conference!, this event will take place on January 09, 2025 from 01:00PM until 04:00PM",
    timestamp: "Dec 29, 10:34AM",
    isRead: true,
    eventName: "Horizon Conference!",
  },
  {
    id: "6",
    type: "event_completion",
    title: "Event completion",
    content:
      "Your event NextWave Submit! has successfully ended. View the results and winners in your event dashboard.",
    timestamp: "Dec 27, 03:00PM",
    isRead: true,
    isImportant: true,
    eventName: "NextWave Submit!",
  },
  {
    id: "7",
    type: "platform_update",
    title: "Platform update",
    content: "Check out the latest features on Quivy!, designed to make your giveaway experience even better!",
    timestamp: "Dec 27, 03:00PM",
    isRead: true,
    isImportant: true,
  },
  {
    id: "8",
    type: "upcoming_reminder",
    title: "Upcoming Event Reminder",
    content: "The event NextWave Submit! is starting soon in 30 minutes. Don't miss it!",
    timestamp: "Dec 27, 02:30PM",
    isRead: true,
    eventName: "NextWave Submit!",
  },
]

export default function NotificationPage() {
  const [activeTab, setActiveTab] = useState("all")
  // const [isLoading, setIsLoading] = useState(false)
  // const [showEmpty, setShowEmpty] = useState(false)

  // Filter notifications based on active tab
  const filteredNotifications = sampleNotifications.filter((notification) => {
    if (activeTab === "all") return true
    if (activeTab === "unread") return !notification.isRead
    if (activeTab === "read") return notification.isRead
    return true
  })

  // Get notification icon based on type
  const getNotificationIcon = (type: NotificationType) => {
    switch (type) {
      case "event_created":
      case "active_event":
      case "event_completion":
        return <Calendar className="h-5 w-5 text-[#5d5d5d]" />
      case "winner_alert":
        return <Gift className="h-5 w-5 text-[#5d5d5d]" />
      case "platform_update":
        return <Volume2 className="h-5 w-5 text-[#5d5d5d]" />
      case "upcoming_reminder":
        return <Bell className="h-5 w-5 text-[#5d5d5d]" />
      default:
        return <Bell className="h-5 w-5 text-[#5d5d5d]" />
    }
  }

  // Toggle states for demo purposes
  // const toggleLoading = () => {
  //   setIsLoading((prev) => !prev)
  //   setShowEmpty(false)
  // }

  // const toggleEmpty = () => {
  //   setShowEmpty((prev) => !prev)
  //   setIsLoading(false)
  // }

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-sm">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-[#7340fd]">Notification</h1>

          {/* Demo controls - you can remove these in production */}
          {/* <div className="flex gap-2">
            <button onClick={toggleLoading} className="px-3 py-1 text-xs rounded-md bg-gray-100 hover:bg-gray-200">
              Toggle Loading
            </button>
            <button onClick={toggleEmpty} className="px-3 py-1 text-xs rounded-md bg-gray-100 hover:bg-gray-200">
              Toggle Empty
            </button>
          </div> */}
        </div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full grid grid-cols-3 mb-6 bg-transparent">
            <TabsTrigger
              value="all"
              className="data-[state=active]:border-b-2 data-[state=active]:border-[#7340fd] data-[state=active]:text-[#7340fd] data-[state=active]:shadow-none rounded-none bg-transparent"
            >
              All
              {activeTab === "all" && (
                <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#7340fd] text-[10px] text-white">
                  {sampleNotifications.length}
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger
              value="unread"
              className="data-[state=active]:border-b-2 data-[state=active]:border-[#7340fd] data-[state=active]:text-[#7340fd] data-[state=active]:shadow-none rounded-none bg-transparent"
            >
              Unread
              {activeTab === "unread" && (
                <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#7340fd] text-[10px] text-white">
                  {sampleNotifications.filter((n) => !n.isRead).length}
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger
              value="read"
              className="data-[state=active]:border-b-2 data-[state=active]:border-[#7340fd] data-[state=active]:text-[#7340fd] data-[state=active]:shadow-none rounded-none bg-transparent"
            >
              Read
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            {renderNotificationContent()}
          </TabsContent>
          <TabsContent value="unread" className="mt-0">
            {renderNotificationContent()}
          </TabsContent>
          <TabsContent value="read" className="mt-0">
            {renderNotificationContent()}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )

  // Render appropriate content based on state
  function renderNotificationContent() {
    // if (isLoading) {
    //   return <NotificationLoadingState />
    // }

    // if (showEmpty || filteredNotifications.length === 0) {
    //   return <NotificationEmptyState />
    // }

    return (
      <div className="space-y-6">
        {filteredNotifications.map((notification) => (
          <div key={notification.id} className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#f2f2f2] flex items-center justify-center">
              {getNotificationIcon(notification.type)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                {notification.isImportant && <div className="w-2 h-2 rounded-full bg-green-500"></div>}
                <h3 className="font-medium text-[#000000]">{notification.title}</h3>
              </div>
              <p className="text-[#5d5d5d] mt-1">{notification.content}</p>
            </div>
            <div className="text-sm text-[#939393] whitespace-nowrap">{notification.timestamp}</div>
          </div>
        ))}
      </div>
    )
  }
}

// Empty state component
// function NotificationEmptyState() {
//   return (
//     <div className="flex flex-col items-center justify-center py-16">
//       <div className="w-24 h-24 rounded-full bg-[#f2f2f2] flex items-center justify-center mb-4">
//         <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path
//             d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM24 40C15.18 40 8 32.82 8 24C8 15.18 15.18 8 24 8C32.82 8 40 15.18 40 24C40 32.82 32.82 40 24 40Z"
//             fill="#D9D9D9"
//           />
//           <path
//             d="M24 28C26.21 28 28 26.21 28 24C28 21.79 26.21 20 24 20C21.79 20 20 21.79 20 24C20 26.21 21.79 28 24 28Z"
//             fill="#D9D9D9"
//           />
//           <path
//             d="M24 16C20.69 16 18 18.69 18 22H22C22 20.9 22.9 20 24 20C25.1 20 26 20.9 26 22C26 23.1 25.1 24 24 24H20V28H24C27.31 28 30 25.31 30 22C30 18.69 27.31 16 24 16Z"
//             fill="#D9D9D9"
//           />
//         </svg>
//       </div>
//       <h3 className="text-xl font-medium text-[#000000] mb-2">No notifications yet</h3>
//       <p className="text-[#939393] text-center max-w-md">
//         When you receive notifications, they will appear here. Stay tuned for updates about your events and activities.
//       </p>
//     </div>
//   )
// }

// // Loading state component
// function NotificationLoadingState() {
//   return (
//     <div className="space-y-6">
//       {[1, 2, 3, 4].map((i) => (
//         <div key={i} className="flex items-start gap-4">
//           <Skeleton className="w-10 h-10 rounded-full" />
//           <div className="flex-1">
//             <Skeleton className="h-5 w-32 mb-2" />
//             <Skeleton className="h-4 w-full mb-1" />
//             <Skeleton className="h-4 w-3/4" />
//           </div>
//           <Skeleton className="h-4 w-16" />
//         </div>
//       ))}
//     </div>
//   )
// }

