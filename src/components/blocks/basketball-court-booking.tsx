import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { Basketball, ArrowRight, Clock, Phone, User } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { PaymentDialog } from "./payment-form"

interface TimeSlot {
  time: string
  available: {
    halfCourt: boolean
    fullCourt: boolean
  }
  price: {
    halfCourt: number
    fullCourt: number
  }
}

interface BasketballCourtBookingProps {
  courtId: string
  courtName: string
  clubId: string
  clubName: string
  slots: {
    [date: string]: TimeSlot[]
  }
  onBookingRequest: (booking: {
    courtId: string
    courtName: string
    clubId: string
    clubName: string
    date: Date
    slot: TimeSlot
    courtType: 'half' | 'full'
    playerName: string
    playerPhone: string
  }) => void
}

export function BasketballCourtBooking({
  courtId,
  courtName,
  clubId,
  clubName,
  slots,
  onBookingRequest
}: BasketballCourtBookingProps) {
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot>()
  const [courtType, setCourtType] = useState<'half' | 'full'>()
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)
  const [showPaymentDialog, setShowPaymentDialog] = useState(false)
  const [playerName, setPlayerName] = useState("")
  const [playerPhone, setPlayerPhone] = useState("")

  const hasAvailableSlots = (date: Date) => {
    const dateStr = date.toISOString().split('T')[0]
    return slots[dateStr]?.some(slot => 
      slot.available.halfCourt || slot.available.fullCourt
    ) ?? false
  }

  const handleBookingRequest = () => {
    if (!selectedDate || !selectedSlot || !courtType || !playerName || !playerPhone) {
      toast.error("Por favor, completa todos los campos")
      return
    }

    // Mostrar diálogo de pago
    setShowConfirmDialog(false)
    setShowPaymentDialog(true)
  }

  const handlePaymentSuccess = () => {
    // Procesar la reserva después del pago exitoso
    onBookingRequest({
      courtId,
      courtName,
      clubId,
      clubName,
      date: selectedDate!,
      slot: selectedSlot!,
      courtType: courtType!,
      playerName,
      playerPhone
    })

    setShowPaymentDialog(false)
    toast.success("Pago completado y solicitud de reserva enviada correctamente")
  }

  const handlePaymentError = (error: string) => {
    toast.error(`Error en el pago: ${error}`)
  }

  const getCurrentPrice = () => {
    if (!selectedSlot || !courtType) return 0
    return selectedSlot.price[courtType === 'half' ? 'halfCourt' : 'fullCourt']
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Calendario */}
        <div className="space-y-4">
          <Card className="p-4">
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
                return date < new Date() || !hasAvailableSlots(date)
              }}
              className="rounded-md"
            />
          </Card>

          {selectedDate && (
            <Card className="p-4">
              <h3 className="font-semibold mb-4">Selecciona el tipo de pista</h3>
              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant={courtType === 'half' ? 'default' : 'outline'}
                  className="h-auto py-4 space-y-2"
                  onClick={() => setCourtType('half')}
                >
                  <Basketball className="h-8 w-8" />
                  <div>
                    <p className="font-semibold">Medio campo</p>
                    <p className="text-sm">1 aro</p>
                  </div>
                </Button>

                <Button
                  variant={courtType === 'full' ? 'default' : 'outline'}
                  className="h-auto py-4 space-y-2"
                  onClick={() => setCourtType('full')}
                >
                  <div className="flex gap-2">
                    <Basketball className="h-8 w-8" />
                    <Basketball className="h-8 w-8" />
                  </div>
                  <div>
                    <p className="font-semibold">Campo completo</p>
                    <p className="text-sm">2 aros</p>
                  </div>
                </Button>
              </div>
            </Card>
          )}
        </div>

        {/* Slots horarios */}
        <Card className="p-4">
          <h3 className="font-semibold mb-4">
            {selectedDate && courtType ? (
              `Horarios disponibles para ${selectedDate.toLocaleDateString()}`
            ) : (
              "Selecciona una fecha y tipo de pista para ver los horarios"
            )}
          </h3>

          {selectedDate && courtType && slots[selectedDate.toISOString().split('T')[0]] && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-2">
                {slots[selectedDate.toISOString().split('T')[0]].map((slot, index) => (
                  <Button
                    key={index}
                    variant={selectedSlot === slot ? "default" : "outline"}
                    className={cn(
                      "relative",
                      !slot.available[courtType === 'half' ? 'halfCourt' : 'fullCourt'] && 
                      "opacity-50 cursor-not-allowed"
                    )}
                    disabled={!slot.available[courtType === 'half' ? 'halfCourt' : 'fullCourt']}
                    onClick={() => setSelectedSlot(slot)}
                  >
                    <span>{slot.time}</span>
                    <Badge 
                      variant="secondary"
                      className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2"
                    >
                      {slot.price[courtType === 'half' ? 'halfCourt' : 'fullCourt']}€
                    </Badge>
                  </Button>
                ))}
              </div>

              {selectedSlot && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                    <div>
                      <p className="font-semibold">Resumen de reserva</p>
                      <p className="text-sm text-muted-foreground">
                        {selectedDate.toLocaleDateString()} - {selectedSlot.time}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {courtType === 'half' ? 'Medio campo (1 aro)' : 'Campo completo (2 aros)'}
                      </p>
                    </div>
                    <Badge variant="default" className="text-lg py-1">
                      {selectedSlot.price[courtType === 'half' ? 'halfCourt' : 'fullCourt']}€
                    </Badge>
                  </div>
                  
                  <Button 
                    className="w-full bg-[#FFA726] hover:bg-[#FF9800]"
                    onClick={() => setShowConfirmDialog(true)}
                  >
                    Solicitar reserva
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          )}
        </Card>
      </div>

      {/* Diálogo de confirmación */}
      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmar solicitud de reserva</DialogTitle>
            <DialogDescription>
              Por favor, introduce tus datos de contacto para proceder con el pago.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="playerName">Nombre completo</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="playerName"
                  placeholder="Tu nombre completo"
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="playerPhone">Teléfono de contacto</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="playerPhone"
                  placeholder="Tu número de teléfono"
                  value={playerPhone}
                  onChange={(e) => setPlayerPhone(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="bg-muted p-4 rounded-lg space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">
                  {selectedDate?.toLocaleDateString()} - {selectedSlot?.time}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Basketball className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">
                  {courtName} - 
                  {courtType === 'half' ? ' Medio campo (1 aro)' : ' Campo completo (2 aros)'}
                </span>
              </div>
              {selectedSlot && (
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold">
                    Precio: {getCurrentPrice()}€
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Button
              variant="outline"
              onClick={() => setShowConfirmDialog(false)}
            >
              Cancelar
            </Button>
            <Button
              className="bg-[#FFA726] hover:bg-[#FF9800]"
              onClick={handleBookingRequest}
            >
              Proceder al pago
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Diálogo de pago */}
      <PaymentDialog
        open={showPaymentDialog}
        onOpenChange={setShowPaymentDialog}
        amount={getCurrentPrice()}
        description={`Reserva de ${courtName} - ${courtType === 'half' ? 'Medio campo' : 'Campo completo'} - ${selectedDate?.toLocaleDateString()} ${selectedSlot?.time}`}
        onSuccess={handlePaymentSuccess}
        onError={handlePaymentError}
      />
    </>
  )
}