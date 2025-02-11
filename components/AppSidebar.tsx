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


export const AppSidebar = () => {

    const pathname = usePathname()

    if (pathname === "auth/signup" || pathname === "auth/signin") {
        return null
    }
    
    return (
        <Sidebar>
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