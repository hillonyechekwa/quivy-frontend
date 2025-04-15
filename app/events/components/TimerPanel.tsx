import { Button } from "@/components/ui/button"
import Timer from "../event-components/timer"

interface TimerPanelProps {
    timer: { hours: string; minutes: string; seconds: string }
    onTimeChange: (hours: string, minutes: string, seconds: string) => void
    onClose: () => void
}

export function TimerPanel({ timer, onTimeChange, onClose }: TimerPanelProps) {
    return (
        <div className="space-y-6">
            <h2 className="text-lg font-medium">Set your time</h2>
            <Timer
                initialHours={timer.hours}
                initialMinutes={timer.minutes}
                initialSeconds={timer.seconds}
                onTimeChange={onTimeChange}
            />
            <Button
                className="w-full bg-[#7340fd] text-white hover:bg-[#7340fd]/90"
                onClick={onClose}
            >
                Save
            </Button>
        </div>
    )
}