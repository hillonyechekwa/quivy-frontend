"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"

export function DeviceInsights() {
  const isMobile = useIsMobile()

  const devices = [
    {
      name: "Mobile",
      percentage: 52,
      heightClass: "h-[52%]",
    },
    {
      name: "Laptop",
      percentage: 26,
      heightClass: "h-[26%]",
    },
    {
      name: "Desktop",
      percentage: 14,
      heightClass: "h-[14%]",
    },
    {
      name: "Others",
      percentage: 8,
      heightClass: "h-[8%]",
    },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-medium">Device Insights</CardTitle>
        <Select defaultValue="monthly">
          <SelectTrigger className={cn(isMobile ? "w-[100px]" : "w-[120px]", "h-8")}>
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
            <div key={device.name} className="flex flex-col items-center">
              <div className="relative w-full h-32 bg-secondary/50 rounded-lg mb-2">
                <div
                  className={cn(
                    "absolute bottom-0 w-full bg-purple-dark rounded-lg flex items-center justify-center min-h-[30px]",
                    device.heightClass,
                  )}
                >
                  <div className="w-8 h-1 bg-white/30 rounded-full mb-1 absolute top-2"></div>
                  <span className="text-white font-medium">{device.percentage}%</span>
                </div>
              </div>
              <span className="text-xs text-center">{device.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

