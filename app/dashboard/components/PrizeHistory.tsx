"use client"

import { useState } from "react"
import { Search, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function PrizeHistory() {
    const [searchQuery, setSearchQuery] = useState("")

    // Empty state for the table
    interface Prize {
        date: string
        event: string
        fullName: string
        phoneNumber: string
        address: string
        prize: string
        code: string
    }

    const prizeData: Prize[] = []

    return (
        <Card className="col-start-1 col-end-6 row-start-3 row-end-4">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-base font-medium">Prize History</CardTitle>
                <div className="flex items-center gap-2">
                    <div className="relative">
                        <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                            placeholder="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-8 h-9 w-[200px]"
                        />
                    </div>
                    <Button variant="outline" size="sm" className="gap-2 h-9">
                        <Calendar className="h-4 w-4" />
                        <span>Dec 19, 2024 - Jan 18, 2025</span>
                    </Button>
                    <Select defaultValue="all">
                        <SelectTrigger className="w-[120px] h-9">
                            <SelectValue placeholder="All Events" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Events</SelectItem>
                            <SelectItem value="active">Active Events</SelectItem>
                            <SelectItem value="completed">Completed Events</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Event</TableHead>
                            <TableHead>Full name</TableHead>
                            <TableHead>Phone number</TableHead>
                            <TableHead>Address</TableHead>
                            <TableHead>Prize</TableHead>
                            <TableHead>Code</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {prizeData.length > 0 ? (
                            prizeData.map((prize, index) => (
                                <TableRow key={index}>
                                    <TableCell>{prize.date}</TableCell>
                                    <TableCell>{prize.event}</TableCell>
                                    <TableCell>{prize.fullName}</TableCell>
                                    <TableCell>{prize.phoneNumber}</TableCell>
                                    <TableCell>{prize.address}</TableCell>
                                    <TableCell>{prize.prize}</TableCell>
                                    <TableCell>{prize.code}</TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={7} className="h-24 text-center">
                                    No prize history data available
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}

