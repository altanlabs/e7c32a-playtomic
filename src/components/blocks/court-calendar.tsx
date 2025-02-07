import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface TimeSlot {
  time: string
  available: boolean
  price: number
}

interface CourtCalendarProps {
  slots: {
    [date: string]: TimeSlot[]
  }
  onSlotSelect: (date: Date, slot: TimeSlot) => void
}

export function CourtCalendar({ slots, onSlotSelect }: CourtCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot>()

  // Función para determinar qué días tienen slots disponibles
  const hasAvailableSlots = (date: Date) => {
    const dateStr = date.toISOString().split('T')[0]
    return slots[dateStr]?.some(slot => slot.available) ?? false
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Calendario */}
      <div className="bg-card rounded-lg p-4 border">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          modifiers={{
            available: hasAvailableSlots
          }}
          modifiersStyles={{
            available: { fontWeight: 'bold' }
          }}
          disabled={(date) => {
            // Deshabilitar fechas pasadas y días sin slots disponibles
            return date < new Date() || !hasAvailableSlots(date)
          }}
          className="rounded-md border"
        />
      </div>

      {/* Slots horarios */}
      <div className="bg-card rounded-lg p-4 border">
        <h3 className="font-semibold mb-4">
          {selectedDate ? (
            `Horarios disponibles para ${selectedDate.toLocaleDateString()}`
          ) : (
            "Selecciona una fecha para ver los horarios disponibles"
          )}
        </h3>

        {selectedDate && slots[selectedDate.toISOString().split('T')[0]] && (
          <div className="grid grid-cols-2 gap-2">
            {slots[selectedDate.toISOString().split('T')[0]].map((slot, index) => (
              <Button
                key={index}
                variant={selectedSlot === slot ? "default" : "outline"}
                className={cn(
                  "relative",
                  !slot.available && "opacity-50 cursor-not-allowed"
                )}
                disabled={!slot.available}
                onClick={() => {
                  setSelectedSlot(slot)
                  onSlotSelect(selectedDate, slot)
                }}
              >
                <span>{slot.time}</span>
                <Badge 
                  variant="secondary"
                  className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2"
                >
                  {slot.price}€
                </Badge>
              </Button>
            ))}
          </div>
        )}

        {selectedDate && selectedSlot && (
          <div className="mt-6 space-y-4">
            <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
              <div>
                <p className="font-semibold">Resumen de reserva</p>
                <p className="text-sm text-muted-foreground">
                  {selectedDate.toLocaleDateString()} - {selectedSlot.time}
                </p>
              </div>
              <Badge variant="default" className="text-lg py-1">
                {selectedSlot.price}€
              </Badge>
            </div>
            <Button className="w-full">
              Confirmar reserva
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}