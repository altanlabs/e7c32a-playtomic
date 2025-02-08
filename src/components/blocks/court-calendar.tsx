import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CalendarIcon, Clock } from "lucide-react"

export function CourtCalendar() {
  const [selectedDate, setSelectedDate] = useState<string>("")
  const [selectedTime, setSelectedTime] = useState<string>("")

  const timeSlots = [
    "09:00", "10:00", "11:00", "12:00",
    "13:00", "14:00", "15:00", "16:00",
    "17:00", "18:00", "19:00", "20:00"
  ]

  return (
    <Card className="p-6">
      <div className="space-y-6">
        {/* Date Selection */}
        <div>
          <div className="flex items-center mb-2">
            <CalendarIcon className="mr-2 h-4 w-4" />
            <h3 className="font-medium">Fecha</h3>
          </div>
          <input
            type="date"
            className="w-full p-2 rounded-md border bg-background"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
          />
        </div>

        {/* Time Selection */}
        <div>
          <div className="flex items-center mb-2">
            <Clock className="mr-2 h-4 w-4" />
            <h3 className="font-medium">Hora</h3>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {timeSlots.map((time) => (
              <Button
                key={time}
                variant={selectedTime === time ? "default" : "outline"}
                className={selectedTime === time ? "bg-[#FFA726] hover:bg-[#FF9800]" : ""}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </Button>
            ))}
          </div>
        </div>

        {/* Available Courts */}
        <div className="pt-4 border-t">
          <h3 className="font-medium mb-4">Pistas disponibles</h3>
          <div className="space-y-2">
            <Button variant="outline" className="w-full justify-between">
              <span>Pista 1</span>
              <span className="text-[#4CAF50]">Disponible</span>
            </Button>
            <Button variant="outline" className="w-full justify-between">
              <span>Pista 2</span>
              <span className="text-[#4CAF50]">Disponible</span>
            </Button>
            <Button variant="outline" className="w-full justify-between" disabled>
              <span>Pista 3</span>
              <span className="text-[#F44336]">Ocupada</span>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}