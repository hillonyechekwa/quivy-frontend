"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Laptop, Smartphone, Monitor, MoreHorizontal } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

export function DeviceInsights() {
  const isMobile = useIsMobile()

  const devices = [
    {
      name: "Mobile",
      icon: Smartphone,
      percentage: 0,
    },
    {
      name: "Laptop",
      icon: Laptop,
      percentage: 0,
    },
    {
      name: "Desktop",
      icon: Monitor,
      percentage: 0,
    },
    {
      name: "Others",
      icon: MoreHorizontal,
      percentage: 0,
    },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-medium">Device Insights</CardTitle>
        <Select defaultValue="monthly">
          <SelectTrigger className={`${isMobile ? "w-[100px]" : "w-[120px]"} h-8`}>
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="daily">Daily</SelectItem>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
            <SelectItem value="yearly">Yearly</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 gap-2">
          {devices.map((device) => (
            <div key={device.name} className="flex flex-col items-center justify-center p-4 bg-secondary rounded-lg">
              <device.icon className="h-6 w-6 mb-2" />
              <span className="text-xs text-center">{device.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

