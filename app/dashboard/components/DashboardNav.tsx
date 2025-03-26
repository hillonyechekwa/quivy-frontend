"use client"

import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar"
import { Bell } from "lucide-react"
import { Separator } from "../../../components/ui/separator"
import { useIsMobile } from "@/hooks/use-mobile"
import { useAuthContext } from "@/hooks/useAuthContext"



const DashboardNav = () => {

    const { user } = useAuthContext()
    const isMobile = useIsMobile()

    return (
        <nav className="p-3 flex justify-center items-center relative w-auto">
            {
                isMobile ?
                    (
                        <div className="">
                            <Bell className="fill-quivyPurple stroke-quivyPurple" />
                            <Avatar>
                                <AvatarImage src="" />
                                <AvatarFallback></AvatarFallback>
                            </Avatar>
                        </div>
                    )
                    :
                    (
                        <div className="flex justify-between items-center space-x-8">
                            <span className="w-3 h-3 rounded-full bg-quivyOrange/30 text-center p-3 flex justify-center items-center ">
                                <p>?</p>
                            </span>

                            <Bell className="fill-quivyPurple stroke-quivyPurple" />

                            <Separator orientation="vertical" className="h-10 bg-black" />

                            <Avatar>
                                <AvatarImage src="" />
                                <AvatarFallback></AvatarFallback>
                            </Avatar>

                            <p>{user?.email}</p>
                        </div>
                    )
            }
        </nav>
    )
}

export default DashboardNav