"use client"

import { useEffect, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Bell } from "lucide-react"
import { Separator } from "./ui/separator"
import { useIsMobile } from "@/hooks/use-mobile"
import { verifySession } from "@/utils/dal"



const AuthNav = () => {


    const [isUser, setIsUser] = useState()

    
    useEffect(() => {       
        const user = verifySession
        console.log(user)
    }, [])

    const isMobile = useIsMobile()

  return (
      <nav>
          {
              isMobile ? 
                  (
                      <ul>
                          <li></li>
                          <li></li>
                      </ul>
                  )
                  :
                  (
                      <ul>
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
                              <Avatar />
                          </li>
                          <li></li>
                      </ul>
                  )
        }
      </nav>
  )
}

export default AuthNav