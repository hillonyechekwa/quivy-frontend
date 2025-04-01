"use client"
import React from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { ChevronUp, ChevronDown} from 'lucide-react'

interface DurationPickerProps {
    hours: number;
    minutes: number;
    handleHours: (hours: number) => void;
    handleMinutes: (minutes: number) => void;
}

const DurationPicker: React.FC<DurationPickerProps> = ({hours, minutes, handleHours, handleMinutes}) => {


    const incrementDuration = () => {
        if (minutes < 45) {
            handleMinutes(minutes + 15);
        } else {
            handleHours(hours + 1);
            handleMinutes(0);
        }
    };

    const decrementDuration = () => {
        if (minutes > 0) {
            handleMinutes(minutes - 15);
        } else if (hours > 0) {
            handleHours(hours - 1);
            handleMinutes(45);
        }
    };

    const formatDuration = () => {
        return `${hours}h ${minutes}m`;
    };

    return (
        <TextField
            label=""
            value={formatDuration()}
            InputProps={{
                readOnly: true,
                endAdornment: (
                    <InputAdornment position="end">
                        <div className="flex flex-col">
                            <IconButton
                                size="small"
                                onClick={incrementDuration}
                                edge="end"
                            >
                                <ChevronUp size={10} />
                            </IconButton>
                            <IconButton
                                size="small"
                                onClick={decrementDuration}
                                edge="end"
                            >
                                <ChevronDown size={10} />
                            </IconButton>
                        </div>
                    </InputAdornment>
                ),
            }}
            variant="outlined"
            fullWidth
        />
    );
};

export default DurationPicker;