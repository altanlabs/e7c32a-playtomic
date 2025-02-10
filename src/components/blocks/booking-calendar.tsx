import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"

interface TimeSlot {
  time: string
  available: boolean
  price: number
  maxPlayers: number
  currentPlayers: number
}

interface BookingCalendarProps {
  mode: 'club' | 'player'
  onSlotSelect?: (date: Date, slot: TimeSlot) => void
  onSlotUpdate?: (date: Date, slot: any) => void
}

export function BookingCalendar({ mode, onSlotSelect, onSlotUpdate }: BookingCalendarProps) {
  const [date, setDate] = useState<Date | undefined>(new Date())
  
  // Example time slots - in a real app, these would come from an API
  const timeSlots: TimeSlot[] = [
    { time: "09:00", available: true, price: 20, maxPlayers: 10, currentPlayers: 4 },
    { time: "10:00", available: true, price: 20, maxPlayers: 10, currentPlayers: 2 },
    { time: "11:00", available: false, price: 20, maxPlayers: 10, currentPlayers: 10 },
    { time: "12:00", available: true, price: 25, maxPlayers: 10, currentPlayers: 6 },
    { time: "13:00", available: true, price: 25, maxPlayers: 10, currentPlayers: 3 },
    { time: "16:00", available: true, price: 30, maxPlayers: 10, currentPlayers: 5 },
    { time: "17:00", available: false, price: 30, maxPlayers: 10, currentPlayers: 10 },
    { time: "18:00", available: true, price: 30, maxPlayers: 10, currentPlayers: 7 },
    { time: "19:00", available: true, price: 30, maxPlayers: 10, currentPlayers: 4 },
    { time: "20:00", available: true, price: 25, maxPlayers: 10, currentPlayers: 2 },
  ]

  const handleSlotClick = (slot: TimeSlot) => {
    if (!date) return
    
    if (mode === 'player' && onSlotSelect && slot.available) {
      onSlotSelect(date, slot)
    } else if (mode === 'club' && onSlotUpdate) {
      onSlotUpdate(date, slot)
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />

      <Card className="p-4">
        <div className="space-y-2">
          <h3 className="font-semibold">Horarios disponibles</h3>
          <div className="grid grid-cols-2 gap-2">
            {timeSlots.map((slot) => (
              <Button
                key={slot.time}
                variant={slot.available ? "outline" : "ghost"}
                className={`
                  justify-start space-x-2
                  ${!slot.available && "opacity-50 cursor-not-allowed"}
                  ${mode === 'club' && "hover:bg-primary hover:text-primary-foreground"}
                `}
                onClick={() => handleSlotClick(slot)}
                disabled={mode === 'player' && !slot.available}
              >
                <Clock className="h-4 w-4" />
                <span>{slot.time}</span>
                {mode === 'player' && slot.available && (
                  <span className="ml-auto">{slot.price}€</span>
                )}
              </Button>
            ))}
          </div>
        </div>
      </Card>
    </div>
  )
}