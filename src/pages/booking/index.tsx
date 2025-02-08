import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TimeSlotPicker } from "@/components/booking/time-slot-picker"
import { BookingSummary } from "@/components/booking/booking-summary"
import { CalendarIcon } from "lucide-react"
import "@/styles/calendar.css"

const timeSlots = [
  "09:00", "10:00", "11:00", "12:00", "13:00", "14:00",
  "15:00", "16:00", "17:00", "18:00", "19:00", "20:00",
  "21:00", "22:00"
]

export default function BookingPage() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();

  const handleContinue = () => {
    if (selectedDate && selectedTime) {
      // Aquí podrías guardar los datos en un estado global o pasarlos como parámetros
      navigate('/booking/payment', {
        state: {
          date: selectedDate,
          time: selectedTime,
          price: 30
        }
      });
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto">
        {/* Progress Steps */}
        <div className="flex justify-between mb-8">
          <div className="flex items-center">
            <div className="rounded-full h-8 w-8 flex items-center justify-center bg-[#FFA726] text-white">
              1
            </div>
            <div className="ml-2">Fecha y hora</div>
          </div>
          <div className="flex items-center">
            <div className="rounded-full h-8 w-8 flex items-center justify-center bg-muted text-muted-foreground">
              2
            </div>
            <div className="ml-2">Pago</div>
          </div>
          <div className="flex items-center">
            <div className="rounded-full h-8 w-8 flex items-center justify-center bg-muted text-muted-foreground">
              3
            </div>
            <div className="ml-2">Confirmación</div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Calendar and Time Selection */}
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Selecciona fecha y hora</CardTitle>
                <CardDescription>
                  Elige cuándo quieres jugar
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex items-center mb-2">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    <h3 className="font-medium">Fecha</h3>
                  </div>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) =>
                      date < new Date() || date > new Date(new Date().setMonth(new Date().getMonth() + 2))
                    }
                    className="rounded-md border"
                  />
                </div>

                <TimeSlotPicker
                  selectedTime={selectedTime}
                  onTimeSelect={setSelectedTime}
                  availableSlots={timeSlots}
                />
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-[#FFA726] hover:bg-[#FF9800]"
                  disabled={!selectedDate || !selectedTime}
                  onClick={handleContinue}
                >
                  Continuar
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Booking Summary */}
          <div>
            <BookingSummary
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              price={30}
            />
          </div>
        </div>
      </div>
    </div>
  )
}