"use client"

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Bell } from "lucide-react"
import { Separator } from "./ui/separator"
import { useIsMobile } from "@/hooks/use-mobile"
import { useAuthContext } from "@/hooks/useAuthContext"
import { useRouter } from "next/navigation"



const AuthNav = () => {

    const { user } = useAuthContext()
    const isMobile = useIsMobile()
    const router = useRouter()

    return (
        <nav className="p-3 flex justify-center items-center relative w-auto ">
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
                            
                            <span className="relative cursor-pointer">
                                <Bell className="fill-quivyPurple stroke-quivyPurple cursor-pointer" onClick={() => router.push("/notifications")} />
                                <p className="flex justify-center items-center absolute top-2 left-3 bg-quivyOrange h-3 w-3 rounded-full text-quivyPurple p-2 px-2 text-[10px] text-center">8</p>
                            </span>

                            <Separator orientation="vertical" className="h-10 bg-black" />

                            <Avatar className="cursor-pointer">
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

export default AuthNav