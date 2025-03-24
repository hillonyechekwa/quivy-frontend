import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, TooltipProps } from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ClicksScansChart = () => {
    const [timeRange, setTimeRange] = useState('Last 31 days');

    // Sample data - this would come from your actual data source
    const data = [
        { date: '01/12', clicks: 25, scans: 30 },
        { date: '02/12', clicks: 35, scans: 55 },
        { date: '03/12', clicks: 42, scans: 70 },
        { date: '04/12', clicks: 48, scans: 72 },
        { date: '05/12', clicks: 45, scans: 65 },
        { date: '06/12', clicks: 40, scans: 55 },
        { date: '07/12', clicks: 35, scans: 45 },
        { date: '08/12', clicks: 38, scans: 40 },
        { date: '09/12', clicks: 45, scans: 35 },
        { date: '10/12', clicks: 52, scans: 30 },
        { date: '11/12', clicks: 58, scans: 25 },
        { date: '12/12', clicks: 65, scans: 15 },
    ];

    const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
        if (active && payload && payload.length) {
            const dataType = payload[0].dataKey === 'clicks' ? 'Clicks' : 'Scans';
            return (
                <div className="bg-black text-white text-xs rounded p-2">
                    <p className="font-medium">{`${payload[0].value} ${dataType}`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <Card className="col-start-1 col-end-4">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-md font-medium">Clicks & Scans over time</CardTitle>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-amber-500"></div>
                        <span className="text-sm">Clicks</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                        <span className="text-sm">Scans</span>
                    </div>
                </div>
                <Select value={timeRange} onValueChange={setTimeRange}>
                    <SelectTrigger className="w-40">
                        <SelectValue placeholder="Select time range" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Last 7 days">Last 7 days</SelectItem>
                        <SelectItem value="Last 31 days">Last 31 days</SelectItem>
                        <SelectItem value="Last 90 days">Last 90 days</SelectItem>
                        <SelectItem value="Last year">Last year</SelectItem>
                    </SelectContent>
                </Select>
            </CardHeader>
            <CardContent className="pt-0">
                <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            data={data}
                            margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                        >
                            <defs>
                                <linearGradient id="clicksGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.2} />
                                    <stop offset="95%" stopColor="#F59E0B" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="scansGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.2} />
                                    <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis
                                dataKey="date"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 12 }}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 12 }}
                                domain={[0, 100]}
                                ticks={[0, 20, 40, 60, 80, 100]}
                            />
                            <Tooltip content={<CustomTooltip />} />
                            <Line
                                type="monotone"
                                dataKey="clicks"
                                stroke="#F59E0B"
                                strokeWidth={3}
                                dot={false}
                                activeDot={{ r: 6, fill: "#F59E0B" }}
                            />
                            <Line
                                type="monotone"
                                dataKey="scans"
                                stroke="#8B5CF6"
                                strokeWidth={3}
                                dot={false}
                                activeDot={{ r: 6, fill: "#8B5CF6" }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
};

export default ClicksScansChart;