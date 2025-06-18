"use client"

import React, { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { EventType } from "../../types"
import { MessageSquare } from "lucide-react"
// import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { differenceInMinutes, format } from "date-fns"
import { Textarea } from "@/components/ui/textarea"
import {
    Flame,
    QrCode,
    Gift,
    ChevronLeftCircle,
    // Edit,
    // ExternalLink,
    // Trash2,
    Calendar,
    Clock,
    MoveVertical,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"
import AppLayout from "@/app/providers"
import { useQuery } from "@tanstack/react-query"
import Loader from "@/components/Loader"


// interface Event {
//     id: string;
//     name: string;
//     description: string;
//     date: string;
//     eventStartTime: string;
//     eventEndTime: string;
//     qrCodeValidityDuration: number;
//     qrCodeUrl: string;
//     status: string;
//     uniqueCode: string;
//     scans: number;
//     clicks: number;
//     userId: string;
//     createdAt: string;
//     winners?: [];
//     prizes?: []
// }

interface Props {
    id: string;
}

const ActiveEventTemplatePage: React.FC<Props> = ({ id }) => {
    const router = useRouter()

    const { data: activeEvent, isLoading } = useQuery<EventType>({
        queryKey: ['activeEvent'],
        queryFn: async () => {
            const response = await fetch(`/api/events/getEvent/${id}`);
            const data = await response.json();
            return data;
        },
        throwOnError: true
    });

    const isMobile = useIsMobile();
    const [activeTab, setActiveTab] = useState<string>("outline");

    console.log("active event", activeEvent);

    // Early return if loading or if activeEvent is not yet available
    if (isLoading || !activeEvent) {
        return <Loader />
    }

    // Simple utility function to safely format dates
    const safeFormat = (date: string | undefined | null, formatStr: string, fallback: string = "Not available"): string => {
        try {
            if (!date) return fallback;
            return format(new Date(date), formatStr);
        } catch (error) {
            console.error("Error formatting date:", error);
            return fallback;
        }
    };

    // Simple utility function to safely get duration
    const safeDuration = (start: string | undefined | null, end: string | undefined | null, fallback: string = "Not available"): string => {
        try {
            if (!start || !end) return fallback;
            const startDate = new Date(start);
            const endDate = new Date(end);
            const totalMinutes = differenceInMinutes(endDate, startDate);

            const hours = Math.floor(totalMinutes / 60);
            const minutes = totalMinutes % 60;

            return `${hours}h ${minutes}m`;
        } catch (error) {
            console.error("Error calculating duration:", error);
            return fallback;
        }
    };

    // Default values for properties that might be missing
    const winners = activeEvent.winners || [];
    const prizes = activeEvent.prizes || []
    const clicks = activeEvent.clicks || 0;
    const scans = activeEvent.scans || 0;

    return (
        <AppLayout>
            <div className="flex flex-col min-h-screen bg-[#fafafa]">
                {/* Main content area */}
                <div className="flex-1 overflow-auto p-4 md:p-6 bg-[#f1ecff]/20 relative">
                    <ChevronLeftCircle size={24} className="absolute cursor-pointer" onClick={() => { router.back() }} />
                    <div className="mb-6">
                        <h2 className="text-lg font-medium text-center mb-4">Overview</h2>
                        <div className={cn("grid gap-4", isMobile ? "grid-cols-1" : "grid-cols-3")}>
                            <Card className="bg-[#7340fd] text-white">
                                <CardContent className="p-6 flex justify-between items-start">
                                    <div>
                                        <p className="text-sm font-medium mb-4">Total clicks</p>
                                        <div className="flex items-end gap-2">
                                            <span className="text-4xl font-bold">{clicks}</span>
                                            <span className="text-sm mb-1">clicks</span>
                                        </div>
                                    </div>
                                    <div className="bg-white/20 p-2 rounded-full">
                                        <Flame className="h-5 w-5 text-white" />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-[#7340fd] text-white">
                                <CardContent className="p-6 flex justify-between items-start">
                                    <div>
                                        <p className="text-sm font-medium mb-4">Total Scans</p>
                                        <div className="flex items-end gap-2">
                                            <span className="text-4xl font-bold">{scans}</span>
                                            <span className="text-sm mb-1">scans</span>
                                        </div>
                                    </div>
                                    <div className="bg-white/20 p-2 rounded-full">
                                        <QrCode className="h-5 w-5 text-white" />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-[#7340fd] text-white">
                                <CardContent className="p-6 flex justify-between items-start">
                                    <div>
                                        <p className="text-sm font-medium mb-4">Total Prize winner</p>
                                        <div className="flex items-end gap-2">
                                            <span className="text-4xl font-bold">{winners.length}</span>
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
                                    Winners <span className="w-7 h-7 bg-quivyPurple rounded-full p-2">{winners.length}</span>
                                </TabsTrigger>
                            </TabsList>

                            {/* <div className="flex gap-2">
                                <Button variant="ghost" size="icon">
                                    <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon">
                                    <ExternalLink className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon">
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </div> */}
                        </div>

                        <TabsContent value="outline" className="mt-0">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-base font-medium mb-2">Title</h3>
                                    <Input defaultValue={activeEvent.name || ""} className="border rounded-lg p-4" />
                                </div>

                                <div>
                                    <h3 className="text-base font-medium mb-2">Description</h3>
                                    <Textarea
                                        defaultValue={activeEvent.description || ""}
                                        className="min-h-[100px] border rounded-lg p-4"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <h3 className="text-base font-medium mb-2">Date</h3>
                                        <div className="relative">
                                            <Input
                                                type="text"
                                                defaultValue={safeFormat(activeEvent.date, "MMMM d, yyyy")}
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
                                                defaultValue={safeFormat(activeEvent.eventStartTime, "h:mm a")}
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
                                                defaultValue={safeDuration(activeEvent.eventStartTime, activeEvent.eventEndTime)}
                                                className="border rounded-lg p-4 pr-10"
                                            />
                                            <MoveVertical className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                                        </div>
                                    </div>
                                </div>

                                <p className="text-sm text-gray-500">
                                    This event will take place on{" "}
                                    {safeFormat(activeEvent.date, "MMMM d, yyyy")} from {safeFormat(activeEvent.eventStartTime, "h:mm a")} to {safeFormat(activeEvent.eventEndTime, "h:mm a")}
                                </p>
                            </div>

                            <div className="mt-4 space-y-4">
                                {prizes.map((prize, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="text-sm font-medium w-10">{prize.quantity}</div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2">
                                                <div className="h-8 w-8 bg-gray-200 rounded-md flex items-center justify-center overflow-hidden">
                                                    {prize.imageUrl ? (
                                                        <Image
                                                            src={prize.imageUrl}
                                                            alt={prize.name}
                                                            width={32}
                                                            height={32}
                                                            className="object-cover w-full h-full"
                                                        />
                                                    ) : (
                                                        <span className="text-xs">🎁</span>
                                                    )}
                                                </div>
                                                <div>
                                                    <div className="font-medium">{prize.name}</div>
                                                    <div className="text-xs text-gray-500">{prize.description}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="winners" className="mt-0">
                            {
                                winners.length === 0
                                    ?
                                    (
                                        <div className="flex items-center justify-center h-40">
                                            <MessageSquare size={30} />
                                            <p className="text-gray-500">No winners data available yet.</p>
                                        </div>
                                    )
                                    :
                                    (
                                        <div className="overflow-x-auto">
                                            <div className="inline-block min-w-full align-middle">
                                                <div className="overflow-hidden border rounded-lg">
                                                    <table className="min-w-full divide-y divide-gray-200">
                                                        <thead className="bg-gray-50">
                                                            <tr>
                                                                <th
                                                                    scope="col"
                                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                                >
                                                                    S/N
                                                                </th>
                                                                <th
                                                                    scope="col"
                                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                                >
                                                                    Full name
                                                                </th>
                                                                <th
                                                                    scope="col"
                                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                                >
                                                                    Phone number
                                                                </th>
                                                                <th
                                                                    scope="col"
                                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                                >
                                                                    Email
                                                                </th>
                                                                <th
                                                                    scope="col"
                                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                                >
                                                                    Address
                                                                </th>
                                                                <th
                                                                    scope="col"
                                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                                >
                                                                    Prize
                                                                </th>
                                                                <th
                                                                    scope="col"
                                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                                >
                                                                    Code
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="bg-white divide-y divide-gray-200">
                                                            {winners.map((winner, index) => (
                                                                <tr key={winner.id} className="hover:bg-gray-50">
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index}</td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                                        {winner.name}
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{winner.phoneNumber}</td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{winner.email}</td>
                                                                    <td className="px-6 py-4 text-sm text-gray-500 max-w-[200px]">{winner.address}</td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                        {(() => {
                                                                            const prize = prizes.find((prize) => prize.id === winner.prizeId);
                                                                            if (prize) {
                                                                                return (
                                                                                    <div className="flex items-center">
                                                                                        <div className="h-10 w-10 flex-shrink-0 mr-2">
                                                                                            <Image
                                                                                                className="h-10 w-10 rounded-full"
                                                                                                src={prize.imageUrl || "/placeholder.svg"}
                                                                                                alt={prize.name}
                                                                                                width={40}
                                                                                                height={40}
                                                                                            />
                                                                                        </div>
                                                                                        <div>{prize.name}</div>
                                                                                    </div>
                                                                                );
                                                                            } else {
                                                                                return <span>No prize</span>;
                                                                            }
                                                                        })()}
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{winner.uniqueCode}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    )
                            }
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </AppLayout>
    );
};

export default ActiveEventTemplatePage;