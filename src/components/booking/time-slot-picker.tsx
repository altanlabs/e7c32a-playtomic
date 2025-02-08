import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"

interface TimeSlotPickerProps {
  selectedTime: string | undefined
  onTimeSelect: (time: string) => void
  availableSlots: string[]
}

export function TimeSlotPicker({
  selectedTime,
  onTimeSelect,
  availableSlots
}: TimeSlotPickerProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center mb-2">
        <Clock className="mr-2 h-4 w-4" />
        <h3 className="font-medium">Hora</h3>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {availableSlots.map((time) => (
          <Button
            key={time}
            variant={selectedTime === time ? "default" : "outline"}
            className={selectedTime === time ? "bg-[#FFA726] hover:bg-[#FF9800]" : ""}
            onClick={() => onTimeSelect(time)}
          >
            {time}
          </Button>
        ))}
      </div>
    </div>
  )
}