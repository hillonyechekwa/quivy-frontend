"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useIsMobile } from "@/hooks/use-mobile"
import { ChevronDown } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

const data = [
    { month: "Jan", day: "01/12", clicks: 10, scans: 20 },
    { month: "Feb", day: "02/12", clicks: 25, scans: 35 },
    { month: "Mar", day: "03/12", clicks: 40, scans: 45 },
    { month: "Apr", day: "04/12", clicks: 30, scans: 25 },
    { month: "May", day: "05/12", clicks: 55, scans: 65 },
    { month: "Jun", day: "06/12", clicks: 70, scans: 60 },
    { month: "Jul", day: "07/12", clicks: 65, scans: 75 },
    { month: "Aug", day: "08/12", clicks: 80, scans: 90 },
]

export function ClicksAndScansChart() {
    const isMobile = useIsMobile()
    const [timeRange, setTimeRange] = useState("31")

    const timeRangeOptions = [
        { value: "7", label: "Last 7 days" },
        { value: "31", label: "Last 31 days" },
        { value: "90", label: "Last 90 days" },
    ]

    const chartConfig = {
        clicks: {
            label: "Clicks",
            color: "hsl(var(--orange))",
        },
        scans: {
            label: "Scans",
            color: "hsl(var(--primary))",
        },
    }

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-4 md:pb-8">
                <CardTitle className="text-base font-medium">Clicks & Scans over time</CardTitle>

                {isMobile ? (
                    <Select defaultValue={timeRange} onValueChange={setTimeRange}>
                        <SelectTrigger className="w-[140px] h-8">
                            <SelectValue />
                            <ChevronDown className="h-4 w-4 opacity-50" />
                        </SelectTrigger>
                        <SelectContent>
                            {timeRangeOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                ) : (
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                            <div className="h-3 w-3 rounded-full bg-orange"></div>
                            <span className="text-sm">Clicks</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="h-3 w-3 rounded-full bg-primary"></div>
                            <span className="text-sm">Scans</span>
                        </div>
                    </div>
                )}
            </CardHeader>
            <CardContent>
                {isMobile && (
                    <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-1">
                            <div className="h-3 w-3 rounded-full bg-orange"></div>
                            <span className="text-sm">Clicks</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="h-3 w-3 rounded-full bg-primary"></div>
                            <span className="text-sm">Scans</span>
                        </div>
                    </div>
                )}

                <div className="h-[300px]">
                    <ChartContainer config={chartConfig}>
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="5 5" vertical={false} />
                            <XAxis
                                dataKey={isMobile ? "day" : "month"}
                                tickLine={false}
                                axisLine={false}
                                padding={{ left: 10, right: 10 }}
                            />
                            <YAxis
                                tickLine={false}
                                axisLine={false}
                                tickFormatter={(value) => `${value}`}
                                domain={[0, "dataMax + 10"]}
                            />
                            <Line
                                type="monotone"
                                dataKey="clicks"
                                stroke="var(--color-clicks)"
                                strokeWidth={2}
                                activeDot={{
                                    r: 4,
                                    fill: "hsl(var(--orange))",
                                    strokeWidth: 0,
                                }}
                                dot={{
                                    r: 0,
                                }}
                            />
                            <Line
                                type="monotone"
                                dataKey="scans"
                                stroke="var(--color-scans)"
                                strokeWidth={2}
                                activeDot={{
                                    r: 4,
                                    fill: "hsl(var(--primary))",
                                    strokeWidth: 0,
                                }}
                                dot={{
                                    r: 0,
                                }}
                            />
                            <ChartTooltip content={<ChartTooltipContent className="border-none bg-white p-2 shadow-lg" />} />
                        </LineChart>
                    </ChartContainer>
                </div>
            </CardContent>
        </Card>
    )
}

