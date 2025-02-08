import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookingStatusBadge } from "./booking-status-badge"
import { CourtBooking } from "@/types/booking"
import { Basketball, Calendar, Clock, MapPin, Phone, User } from "lucide-react"
import { formatDate, formatTime, formatCurrency } from "@/lib/utils"

interface BookingDetailsCardProps {
  booking: CourtBooking
  onCancel?: () => void
  onConfirm?: () => void
  onReject?: () => void
  showActions?: boolean
}

export function BookingDetailsCard({ 
  booking,
  onCancel,
  onConfirm,
  onReject,
  showActions = true
}: BookingDetailsCardProps) {
  const canCancel = ['confirmed', 'pending_approval'].includes(booking.status)
  const canConfirmOrReject = booking.status === 'pending_approval'

  return (
    <Card>
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl">Reserva #{booking.id}</CardTitle>
          <BookingStatusBadge status={booking.status} />
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Detalles de la pista */}
        <div className="space-y-4">
          <h3 className="font-semibold">Detalles de la pista</h3>
          <div className="grid gap-3">
            <div className="flex items-center gap-2">
              <Basketball className="h-4 w-4 text-muted-foreground" />
              <span>{booking.courtName}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span>{booking.clubName}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span>{formatDate(booking.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span>{formatTime(booking.timeSlot)}</span>
            </div>
          </div>
        </div>

        {/* Detalles del jugador */}
        <div className="space-y-4">
          <h3 className="font-semibold">Datos del jugador</h3>
          <div className="grid gap-3">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-muted-foreground" />
              <span>{booking.playerName}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span>{booking.playerPhone}</span>
            </div>
          </div>
        </div>

        {/* Detalles del pago */}
        <div className="space-y-4">
          <h3 className="font-semibold">Detalles del pago</h3>
          <div className="bg-muted p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-muted-foreground">
                  {booking.courtType === 'half' ? 'Medio campo (1 aro)' : 'Campo completo (2 aros)'}
                </p>
                <p className="text-sm text-muted-foreground">
                  Ref. pago: {booking.payment.paymentIntentId}
                </p>
              </div>
              <p className="text-2xl font-bold">
                {formatCurrency(booking.price)}
              </p>
            </div>
          </div>
        </div>

        {/* Acciones */}
        {showActions && (
          <div className="flex justify-end gap-4 pt-4">
            {canCancel && onCancel && (
              <Button
                variant="outline"
                onClick={onCancel}
              >
                Cancelar reserva
              </Button>
            )}
            
            {canConfirmOrReject && (
              <div className="flex gap-2">
                {onReject && (
                  <Button
                    variant="outline"
                    className="text-red-500 hover:bg-red-50"
                    onClick={onReject}
                  >
                    Rechazar
                  </Button>
                )}
                {onConfirm && (
                  <Button
                    className="bg-green-500 hover:bg-green-600 text-white"
                    onClick={onConfirm}
                  >
                    Confirmar
                  </Button>
                )}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}