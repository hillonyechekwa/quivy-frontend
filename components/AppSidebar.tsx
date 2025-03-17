"use client"

// import Link from "next/link"
import {
    Sidebar,
    SidebarContent, 
    SidebarMenuItem, 
    // SidebarMenuButton, 
    SidebarGroup,
    // SidebarMenuSubItem,
    SidebarGroupContent, 
    SidebarMenu
} from "./ui/sidebar"
import { usePathname } from "next/navigation"


interface AppSidebarProps {
    side: "right" | "left" | undefined; // Replace 'string' with the appropriate type if needed
}

export const AppSidebar = ({ side }: AppSidebarProps) => {

    const pathname = usePathname()

    if (pathname === "auth/signup" || pathname === "auth/signin") {
        return null
    }
    
    return (
        <Sidebar side={side}>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>

                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}