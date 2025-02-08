import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, Clock, Euro } from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"

interface BookingSummaryProps {
  selectedDate?: Date
  selectedTime?: string
  price: number
}

export function BookingSummary({ selectedDate, selectedTime, price }: BookingSummaryProps) {
  return (
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
          <span className="font-medium">
            {selectedDate ? format(selectedDate, "d MMMM yyyy", { locale: es }) : "-"}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4" />
            <span>Hora</span>
          </div>
          <span className="font-medium">{selectedTime || "-"}</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Euro className="mr-2 h-4 w-4" />
            <span>Precio</span>
          </div>
          <span className="font-medium">{price}€</span>
        </div>
        <div className="pt-4 border-t">
          <div className="flex justify-between items-center font-semibold">
            <span>Total</span>
            <span>{price}€</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}