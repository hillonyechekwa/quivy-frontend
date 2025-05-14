"use client"


import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import React from "react"
import { DatePicker } from "@mui/x-date-pickers"

interface DatePickerProps{
    value: Date | null
    handleValue: (value: Date | null) => void 
}

export const DateSelector: React.FC<DatePickerProps> = ({value, handleValue}) => {
    return (    
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker label="" value={value} onChange={handleValue} />
        </LocalizationProvider>
    )
}