import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, Users } from "lucide-react"
import { motion } from "framer-motion"

interface TimeSlot {
  time: string
  available: boolean
  price: number
  maxPlayers: number
  currentPlayers: number
}

interface BookingCalendarProps {
  mode?: "club" | "player"
  onSlotSelect?: (date: Date, slot: TimeSlot) => void
  onSlotUpdate?: (date: Date, slot: TimeSlot) => void
}

export function BookingCalendar({ mode = "player", onSlotSelect, onSlotUpdate }: BookingCalendarProps) {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null)

  // Example time slots - in a real app, these would come from an API
  const timeSlots: TimeSlot[] = [
    { time: "09:00", available: true, price: 15, maxPlayers: 10, currentPlayers: 4 },
    { time: "10:00", available: true, price: 15, maxPlayers: 10, currentPlayers: 2 },
    { time: "11:00", available: false, price: 15, maxPlayers: 10, currentPlayers: 10 },
    { time: "12:00", available: true, price: 20, maxPlayers: 10, currentPlayers: 6 },
    { time: "13:00", available: true, price: 20, maxPlayers: 10, currentPlayers: 3 },
    { time: "16:00", available: true, price: 20, maxPlayers: 10, currentPlayers: 5 },
    { time: "17:00", available: true, price: 25, maxPlayers: 10, currentPlayers: 7 },
    { time: "18:00", available: false, price: 25, maxPlayers: 10, currentPlayers: 10 },
    { time: "19:00", available: true, price: 25, maxPlayers: 10, currentPlayers: 4 },
    { time: "20:00", available: true, price: 25, maxPlayers: 10, currentPlayers: 2 },
  ]

  const handleSlotClick = (slot: TimeSlot) => {
    if (!slot.available && mode === "player") return
    setSelectedSlot(slot)
    if (date && mode === "player" && onSlotSelect) {
      onSlotSelect(date, slot)
    }
  }

  const handleSlotUpdate = (slot: TimeSlot, updates: Partial<TimeSlot>) => {
    const updatedSlot = { ...slot, ...updates }
    if (date && mode === "club" && onSlotUpdate) {
      onSlotUpdate(date, updatedSlot)
    }
  }

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <Card className="p-4 bg-white/5 border-white/10">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="text-white"
        />
      </Card>

      <Card className="flex-1 p-6 bg-white/5 border-white/10">
        <h3 className="text-xl font-semibold mb-6">Horarios disponibles</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {timeSlots.map((slot, index) => (
            <motion.div
              key={slot.time}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card
                className={`p-4 cursor-pointer transition-all duration-300 hover:scale-105 ${
                  selectedSlot === slot ? "ring-2 ring-[#FFA726]" : ""
                } ${
                  !slot.available && mode === "player"
                    ? "opacity-50 cursor-not-allowed bg-white/5"
                    : "bg-white/10 hover:bg-white/20"
                }`}
                onClick={() => handleSlotClick(slot)}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-[#FFA726]" />
                    <span className="font-medium">{slot.time}</span>
                  </div>
                  <span className="text-[#FFA726] font-semibold">{slot.price}€</span>
                </div>

                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-400">
                    {slot.currentPlayers}/{slot.maxPlayers} jugadores
                  </span>
                </div>

                {mode === "club" && (
                  <div className="mt-3 space-y-2">
                    <Select
                      value={slot.available.toString()}
                      onValueChange={(value) =>
                        handleSlotUpdate(slot, { available: value === "true" })
                      }
                    >
                      <SelectTrigger className="w-full bg-white/5">
                        <SelectValue placeholder="Disponibilidad" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="true">Disponible</SelectItem>
                        <SelectItem value="false">No disponible</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select
                      value={slot.price.toString()}
                      onValueChange={(value) =>
                        handleSlotUpdate(slot, { price: parseInt(value) })
                      }
                    >
                      <SelectTrigger className="w-full bg-white/5">
                        <SelectValue placeholder="Precio" />
                      </SelectTrigger>
                      <SelectContent>
                        {[15, 20, 25, 30].map((price) => (
                          <SelectItem key={price} value={price.toString()}>
                            {price}€
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {mode === "player" && slot.available && (
                  <Button
                    className="w-full mt-3 bg-[#FFA726] hover:bg-[#FF9800]"
                    onClick={() => handleSlotClick(slot)}
                  >
                    Reservar
                  </Button>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </Card>
    </div>
  )
}