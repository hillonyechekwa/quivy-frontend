"use client"

import {
    Sidebar,
    SidebarContent,
    SidebarMenuItem,
    SidebarMenu,
    SidebarHeader,
    SidebarMenuButton,
    SidebarFooter
} from "./ui/sidebar"
import { LayoutDashboard, Calendar, FileText, Clock, FileEdit, Bell, Settings, LogOut } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useState } from "react"



export const AppSidebar = () => {
    const pathname = usePathname()
    const [expandedMenu, setExpandedMenu] = useState(true)

    
    
    const menuItems = [
        {
            title: "Dashboard",
            icon: LayoutDashboard,
            href: "/dashboard",
            variant: "secondary",
            hasNotification: false
        },
        {
            title: "Event",
            icon: Calendar,
            href: "/events",
            hasSubmenu: true,
            hasNotification: false
        },
        {
            title: "Notification",
            icon: Bell,
            href: "/notification",
            hasNotification: true
        },
    ]

    const subEvents = [
        {
            title: "Active events",
            icon: FileText,
            href: "/events/active-events",
            hasNotification: true
        },
        {
            title: "Scheduled events",
            icon: Clock,
            href: "/events/scheduled-events",
            hasNotification: true
        },
        {
            title: "Drafts",
            icon: FileEdit,
            href: "/events/drafts",
            hasNotification: true
        },
    ]

    const footerItems = [
        {
            title: "Settings",
            icon: Settings,
            href: "/settings",
            hasNotification: false
        },
        {
            title: "Log out",
            icon: LogOut,
            href: "/api/auth/signout",
            hasNotification: false
        },
    ]

    
    if (pathname === "/auth/signup" || pathname === "/auth/signin" || pathname === "/") {
        return null
    }

    return (
        <Sidebar  className="border-r bg-white w-60">
            <SidebarHeader className="py-6 px-6">
                <Link href="/" className="flex items-center">
                    <h1 className="text-xl font-semibold text-purple-500">Quivy</h1>
                </Link>
            </SidebarHeader>
            <SidebarContent className="px-3">
                <SidebarMenu>
                    {menuItems.map((item) => (
                        <SidebarMenuItem key={item.title} className="mb-1">
                            {item.hasSubmenu ? (
                                <div>
                                    <SidebarMenuButton
                                        
                                        className="h-10 gap-3 w-full justify-start px-3 font-normal hover:bg-gray-100 rounded-md"
                                    >
                                    <Link href={item.href} className="h-10 flex items-center gap-3 w-full justify-start px-3 font-normal hover:bg-gray-100">
                                        <item.icon className="h-5 w-5" />
                                        <span>{item.title}</span>
                                    </Link>
                                    </SidebarMenuButton>

                                    {expandedMenu && (
                                        <div className="ml-6 mt-1 space-y-1">
                                            {subEvents.map((subItem) => (
                                                <Link
                                                    key={subItem.title}
                                                    href={subItem.href}
                                                    className={cn(
                                                        "flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-gray-100",
                                                        pathname === subItem.href && "bg-gray-100 font-medium"
                                                    )}
                                                >
                                                    <subItem.icon className="h-4 w-4" />
                                                    <span>{subItem.title}</span>
                                                    {subItem.hasNotification && (
                                                        <div className="h-2 w-2 rounded-full bg-purple-500 ml-auto" />
                                                    )}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <SidebarMenuButton
                                    asChild
                                    isActive={pathname === item.href}
                                    className={cn(
                                        "h-10 gap-3 justify-start px-3 font-normal hover:bg-gray-100 rounded-md",
                                        pathname === item.href && "bg-purple-100 text-purple-700"
                                    )}
                                >
                                    <Link href={item.href} className="flex items-center justify-between w-full">
                                        <div className="flex items-center gap-3">
                                            <item.icon className="h-5 w-5" />
                                            <span>{item.title}</span>
                                        </div>
                                        {item.hasNotification && (
                                            <div className="h-2 w-2 rounded-full bg-purple-500" />
                                        )}
                                    </Link>
                                </SidebarMenuButton>
                            )}
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarContent>
            <SidebarFooter className="mt-auto px-3 pb-6">
                <SidebarMenu>
                    {footerItems.map((item) => (
                        <SidebarMenuItem key={item.title} className="mb-1">
                            <SidebarMenuButton
                                asChild
                                className="h-10 gap-3 justify-start px-3 font-normal hover:bg-gray-100 rounded-md"
                            >
                                <Link href={item.href} className="flex items-center gap-3">
                                    <item.icon className="h-5 w-5" />
                                    <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}