import React from "react";
import { TextField, MenuItem, Box } from "@mui/material";

interface DurationSelectorProps {
  hours: number;
  minutes: number;
  handleHours: (hours: number) => void;
  handleMinutes: (minutes: number) => void;
}

const DurationSelector = ({ hours, minutes, handleHours, handleMinutes }: DurationSelectorProps) => {
  // const durationString = `${hours}h ${minutes}m`;

  const handleHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newHours = Number(e.target.value);
    handleHours(newHours);
  };

  const handleMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMinutes = Number(e.target.value);
    handleMinutes(newMinutes);
  };

  return (
    <Box display="flex" flexDirection="column" gap={1}>
      <Box display="flex" gap={2} alignItems="center">
        <TextField
          select
          label="Hours"
          value={hours}
          onChange={handleHoursChange}
          size="small"
        >
          {[...Array(25).keys()].map((hour) => (
            <MenuItem key={hour} value={hour}>
              {hour}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          label="Minutes"
          value={minutes}
          onChange={handleMinutesChange}
          size="small"
        >
          {[...Array(60).keys()].map((minute) => (
            <MenuItem key={minute} value={minute}>
              {minute.toString().padStart(2, "0")}
            </MenuItem>
          ))}
        </TextField>
      </Box>

      {/* <Typography variant="body2">
        Duration: <strong>{durationString}</strong>
      </Typography> */}
    </Box>
  );
};

export default DurationSelector;
