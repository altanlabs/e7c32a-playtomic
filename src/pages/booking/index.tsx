import { BookingCalendar } from "@/components/blocks/booking-calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, Clock, Euro } from "lucide-react"

export default function BookingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
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
            <BookingCalendar />
          </div>

          {/* Booking Summary */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Resumen de la reserva</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    <span>Fecha</span>
                  </div>
                  <span className="font-medium">-</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>Hora</span>
                  </div>
                  <span className="font-medium">-</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Euro className="mr-2 h-4 w-4" />
                    <span>Precio</span>
                  </div>
                  <span className="font-medium">30€</span>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center font-semibold">
                    <span>Total</span>
                    <span>30€</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}