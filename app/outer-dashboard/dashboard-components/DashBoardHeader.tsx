"use client"

import { Bell, Plus } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const DashBoardHeader = () => {
  return (
      <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-primary">Dashboard</h1>
          <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" className="rounded-full">
                  <Plus className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                  <Bell className="h-4 w-4" />
              </Button>
              <div className="flex items-center gap-2">
                  <Avatar>
                      <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-muted-foreground">johndoe@gmail.com</span>
              </div>
          </div>
      </div>
  )
}

export default DashBoardHeader