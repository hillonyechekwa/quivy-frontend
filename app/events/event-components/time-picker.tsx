"use client"
import React from 'react'

import { LocalizationProvider } from '@mui/x-date-pickers';
// If you are using date-fns v3.x or v4.x, please import the v3 adapter
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { TimePicker } from '@mui/x-date-pickers';

interface TimePickerProps {
  value: Date | null;
  handleValue: (value: Date | null) => void;
}

const TimeSelector: React.FC<TimePickerProps> = ({value, handleValue}) => {
  return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker label="Basic time picker" value={value} onChange={handleValue} />
      </LocalizationProvider>
  )
}

export default TimeSelector