"use client"

import { useState, useRef, useEffect } from "react"
import { CalendarDays, MousePointerClick, QrCode, Trophy } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"

export function MetricCards() {
  const metrics = [
    {
      title: "Total Events",
      value: 0,
      unit: "Events",
      icon: CalendarDays,
      color: "bg-primary text-primary-foreground",
    },
    {
      title: "Total clicks",
      value: 0,
      unit: "clicks",
      icon: MousePointerClick,
      color: "bg-primary text-primary-foreground",
    },
    {
      title: "Total Scans",
      value: 0,
      unit: "scans",
      icon: QrCode,
      color: "bg-primary text-primary-foreground",
    },
    {
      title: "Total Prize winner",
      value: 0,
      unit: "winners",
      icon: Trophy,
      color: "bg-primary text-primary-foreground",
    },
  ]

  const isMobile = useIsMobile()
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  // Handle scroll for mobile carousel
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft
      const cardWidth = scrollRef.current.offsetWidth
      const newIndex = Math.round(scrollPosition / cardWidth)
      setActiveIndex(newIndex)
    }
  }

  // Add scroll event listener
  useEffect(() => {
    const currentRef = scrollRef.current
    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll)
      return () => {
        currentRef.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  if (isMobile) {
    return (
      <div className="relative">
        <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
          {metrics.map((metric) => (
            <div key={metric.title} className="flex-shrink-0 w-full snap-center pr-4">
              <Card className={metric.color}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <div className="text-3xl font-bold">
                    {metric.value} <span className="text-sm font-normal">{metric.unit}</span>
                  </div>
                  <metric.icon className="h-6 w-6" />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-4">
          {metrics.map((_, index) => (
            <div
              key={index}
              className={cn("h-2 w-2 rounded-full mx-1", index === activeIndex ? "bg-primary" : "bg-primary/30")}
            />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric) => (
        <Card key={metric.title} className={metric.color}>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div className="text-3xl font-bold">
              {metric.value} <span className="text-sm font-normal">{metric.unit}</span>
            </div>
            <metric.icon className="h-6 w-6" />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

