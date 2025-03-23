"use client"

import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar"
import { Bell } from "lucide-react"
import { Separator } from "../../../components/ui/separator"
import { useIsMobile } from "@/hooks/use-mobile"
import { useAuthContext } from "@/hooks/useAuthContext"



const DashboardNav = () => {

    const {user} = useAuthContext()
    const isMobile = useIsMobile()

  return (
      <nav className="border-2 border-black p-3 flex justify-center items-center relative left-2/4 w-[300px]">
          {
              isMobile ? 
                  (
                      <ul className="">
                          <li>
                              <Bell />
                          </li>
                          <li>
                              <Avatar>
                                  <AvatarImage src="" />
                                  <AvatarFallback></AvatarFallback>
                              </Avatar>
                          </li>
                      </ul>
                  )
                  :
                  (
                      <ul className="flex justify-between items-center">
                          <li>
                              ?
                          </li>
                          <li>
                              <Bell />
                          </li>
                          <li>
                              <Separator orientation="vertical" />
                          </li>
                          <li>
                              <Avatar>
                                  <AvatarImage src="" />
                                  <AvatarFallback></AvatarFallback>
                              </Avatar>
                          </li>
                          <li>{user?.email}</li>
                      </ul>
                  )
        }
      </nav>
  )
}

export default DashboardNav