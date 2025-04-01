"use client"
import React from 'react'
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { format } from "date-fns"
import { cn } from "@/lib/utils"




const DatePicker = ({ date, handleDate }: { date: Date | undefined, handleDate: (date: Date | undefined) => void }) => {
  return (
      <Popover>
          <PopoverTrigger asChild>
              <Button
                  variant={"outline"}
                  className={cn(
                      "w-[240px] justify-start text-left p-7 border-gray-300 font-normal",
                      !date && "text-muted-foreground"
                  )}
              >
                  <CalendarIcon />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                  mode="single"
                  selected={date}
                  onSelect={handleDate}
                  initialFocus
              />
          </PopoverContent>
      </Popover>
  )
}

export default DatePicker