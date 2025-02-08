import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, Clock, Euro, Users } from "lucide-react"
import { Link } from "react-router-dom"

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
            <Card>
              <CardHeader>
                <CardTitle>Selecciona fecha y hora</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Date Selection */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Fecha
                    </label>
                    <input
                      type="date"
                      className="w-full p-2 rounded-md border bg-background"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  {/* Time Selection */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Hora
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {[
                        "09:00", "10:00", "11:00", "12:00",
                        "13:00", "14:00", "15:00", "16:00",
                        "17:00", "18:00", "19:00", "20:00"
                      ].map((time) => (
                        <Button
                          key={time}
                          variant="outline"
                          className="w-full"
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Me apunto button */}
                  <div className="pt-4 border-t">
                    <Link to="/join-game">
                      <Button 
                        className="w-full bg-[#66BB6A] hover:bg-[#4CAF50] mb-2"
                      >
                        Me apunto al partido
                      </Button>
                    </Link>
                    <p className="text-sm text-muted-foreground text-center">
                      ¿Buscas equipo o jugadores? Apúntate al partido
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
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
                    <Users className="mr-2 h-4 w-4" />
                    <span>Jugadores apuntados</span>
                  </div>
                  <span className="font-medium">0/6</span>
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
                <Button 
                  className="w-full bg-[#FFA726] hover:bg-[#FF9800]"
                  disabled
                >
                  Continuar al pago
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}