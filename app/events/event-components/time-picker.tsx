"use client"
import React from 'react'

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { TimePicker } from '@mui/x-date-pickers';

interface TimePickerProps {
  value: Date | null;
  handleValue: (value: Date | null) => void;
}

const TimeSelector: React.FC<TimePickerProps> = ({value, handleValue}) => {
  return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker label="" value={value} onChange={handleValue} />
      </LocalizationProvider>
  )
}

export default TimeSelector