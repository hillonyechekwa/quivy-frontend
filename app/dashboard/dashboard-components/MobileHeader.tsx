"use client"
import { Menu, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface MobileHeaderProps {
  onMenuClick: () => void
}

const MobileHeader = ({ onMenuClick }: MobileHeaderProps) => {
  return (
    <div className = "sticky top-0 z-10 bg-background border-b" >
      {/* Status bar mockup */ }
      < div className = "flex justify-between items-center p-2 text-xs text-muted-foreground" >
        <div>9:41</div>
        <div className="flex items-center gap-1">
          <div className="h-3 w-3">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.33 4.67c.98-.98 2.56-.98 3.54 0l3.46 3.46c.98.98.98 2.56 0 3.54l-3.46 3.46c-.98.98-2.56.98-3.54 0l-3.46-3.46c-.98-.98-.98-2.56 0-3.54l3.46-3.46z" />
            </svg>
          </div>
          <div className="h-3 w-3">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
            </svg>
          </div>
          <div className="h-3 w-5 flex items-center">
            <div className="h-2 w-full bg-current rounded-sm"></div>
          </div>
        </div>
      </div >

  {/* Header with menu and title */ }
  < div className = "flex items-center justify-between p-4" >
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={onMenuClick} className="p-1">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
          <h1 className="text-xl font-semibold text-primary">Dashboard</h1>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="p-1 relative">
            <Bell className="h-6 w-6 text-primary" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </div >
    </div >
  )
}

export default MobileHeader