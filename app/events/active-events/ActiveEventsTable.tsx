"use client"

import { useState } from "react"
import { ChevronRight, ChevronDown, ChevronUp, Search, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { format } from "date-fns"

// Define the event type
type Event = {
    id: string
    date: Date
    time: string
    name: string
}

// Sample data
const events: Event[] = [
    { id: "1", date: new Date(2023, 11, 27), time: "11:00 AM", name: "Innovation Ignite" },
    { id: "2", date: new Date(2023, 11, 27), time: "01:00 PM", name: "Pioneer Pathway" },
    { id: "3", date: new Date(2023, 11, 27), time: "01:30 PM", name: "Elevate Experience" },
    { id: "4", date: new Date(2023, 11, 27), time: "02:00 PM", name: "Momentum Connect" },
    { id: "5", date: new Date(2023, 11, 27), time: "02:00 PM", name: "Trailblazers' Meetup" },
    { id: "6", date: new Date(2023, 11, 27), time: "03:00 PM", name: "Spark Session" },
    { id: "7", date: new Date(2023, 11, 28), time: "09:00 AM", name: "Morning Briefing" },
    { id: "8", date: new Date(2023, 11, 28), time: "10:30 AM", name: "Strategy Summit" },
    { id: "9", date: new Date(2023, 11, 28), time: "01:00 PM", name: "Insight Workshop" },
    { id: "10", date: new Date(2023, 11, 29), time: "11:00 AM", name: "Future Forum" },
    { id: "11", date: new Date(2023, 11, 29), time: "02:00 PM", name: "Collaboration Conference" },
    { id: "12", date: new Date(2023, 11, 30), time: "10:00 AM", name: "Vision Venture" },
]

export function EventsDataTable() {
    const [searchQuery, setSearchQuery] = useState("")
    const [sortColumn, setSortColumn] = useState<"date" | "name">("date")
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 6

    // Filter events based on search query
    const filteredEvents = events.filter(
        (event) =>
            event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            format(event.date, "MMM d").toLowerCase().includes(searchQuery.toLowerCase()) ||
            event.time.toLowerCase().includes(searchQuery.toLowerCase()),
    )

    // Sort events
    const sortedEvents = [...filteredEvents].sort((a, b) => {
        if (sortColumn === "date") {
            const dateComparison = a.date.getTime() - b.date.getTime()
            if (dateComparison === 0) {
                // If dates are the same, sort by time
                return a.time.localeCompare(b.time)
            }
            return sortDirection === "asc" ? dateComparison : -dateComparison
        } else {
            return sortDirection === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
        }
    })

    // Paginate events
    const totalPages = Math.ceil(sortedEvents.length / itemsPerPage)
    const paginatedEvents = sortedEvents.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

    // Handle sort toggle
    const toggleSort = (column: "date" | "name") => {
        if (sortColumn === column) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc")
        } else {
            setSortColumn(column)
            setSortDirection("asc")
        }
    }

    // Generate pagination items
    const getPaginationItems = () => {
        const items = []
        const maxVisiblePages = 5

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                items.push(i)
            }
        } else {
            // Always show first page
            items.push(1)

            // Calculate middle pages
            let startPage = Math.max(2, currentPage - 1)
            let endPage = Math.min(totalPages - 1, currentPage + 1)

            // Adjust if we're near the beginning or end
            if (currentPage <= 3) {
                endPage = Math.min(totalPages - 1, 4)
            } else if (currentPage >= totalPages - 2) {
                startPage = Math.max(2, totalPages - 3)
            }

            // Add ellipsis if needed
            if (startPage > 2) {
                items.push("ellipsis1")
            }

            // Add middle pages
            for (let i = startPage; i <= endPage; i++) {
                items.push(i)
            }

            // Add ellipsis if needed
            if (endPage < totalPages - 1) {
                items.push("ellipsis2")
            }

            // Always show last page
            items.push(totalPages)
        }

        return items
    }

    return (
        <div className="space-y-4 w-full">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold text-[#7340fd]">Active Events</h1>
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search"
                            className="w-[250px] pl-8 rounded-lg border-input bg-background"
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value)
                                setCurrentPage(1) // Reset to first page on search
                            }}
                        />
                    </div>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="bg-[#7340fd] hover:bg-[#7340fd]/90">
                                <Plus className="mr-2 h-4 w-4" /> Create new event
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Create New Event</DialogTitle>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Event Name</Label>
                                    <Input id="name" placeholder="Enter event name" />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="date">Date</Label>
                                    <Input id="date" type="date" />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="time">Time</Label>
                                    <Input id="time" type="time" />
                                </div>
                                <Button className="mt-2 bg-[#7340fd] hover:bg-[#7340fd]/90">Create Event</Button>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-[#fafafa] hover:bg-[#fafafa]">
                            <TableHead className="w-[200px] cursor-pointer" onClick={() => toggleSort("date")}>
                                <div className="flex items-center">
                                    Date
                                    {sortColumn === "date" &&
                                        (sortDirection === "asc" ? (
                                            <ChevronUp className="ml-1 h-4 w-4" />
                                        ) : (
                                            <ChevronDown className="ml-1 h-4 w-4" />
                                        ))}
                                </div>
                            </TableHead>
                            <TableHead className="cursor-pointer" onClick={() => toggleSort("name")}>
                                <div className="flex items-center">
                                    Events
                                    {sortColumn === "name" &&
                                        (sortDirection === "asc" ? (
                                            <ChevronUp className="ml-1 h-4 w-4" />
                                        ) : (
                                            <ChevronDown className="ml-1 h-4 w-4" />
                                        ))}
                                </div>
                            </TableHead>
                            <TableHead className="w-[50px]"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {paginatedEvents.length > 0 ? (
                            paginatedEvents.map((event) => (
                                <TableRow key={event.id} className="hover:bg-[#f1ecff]/30 cursor-pointer group">
                                    <TableCell className="font-medium">
                                        {format(event.date, "MMM d")}, {event.time}
                                    </TableCell>
                                    <TableCell>{event.name}</TableCell>
                                    <TableCell>
                                        <ChevronRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={3} className="h-24 text-center">
                                    No events found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            {totalPages > 1 && (
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault()
                                    if (currentPage > 1) setCurrentPage(currentPage - 1)
                                }}
                                className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                            />
                        </PaginationItem>

                        {getPaginationItems().map((item, index) =>
                            typeof item === "number" ? (
                                <PaginationItem key={index}>
                                    <PaginationLink
                                        href="#"
                                        isActive={currentPage === item}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            setCurrentPage(item)
                                        }}
                                    >
                                        {item}
                                    </PaginationLink>
                                </PaginationItem>
                            ) : (
                                <PaginationItem key={index}>
                                    <PaginationEllipsis />
                                </PaginationItem>
                            ),
                        )}

                        <PaginationItem>
                            <PaginationNext
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault()
                                    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
                                }}
                                className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            )}
        </div>
    )
}

