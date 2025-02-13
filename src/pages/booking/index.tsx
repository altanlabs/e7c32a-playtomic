import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, Clock, Euro, Users } from "lucide-react"
import { Link } from "react-router-dom"

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-[#fff6e7] py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="flex justify-between mb-8">
            <div className="flex items-center">
              <div className="rounded-full h-8 w-8 flex items-center justify-center bg-[#029455] text-white font-semibold">
                1
              </div>
              <div className="ml-2 text-gray-800 font-medium">Fecha y hora</div>
            </div>
            <div className="flex items-center">
              <div className="rounded-full h-8 w-8 flex items-center justify-center bg-gray-200 text-gray-600 font-semibold">
                2
              </div>
              <div className="ml-2 text-gray-600 font-medium">Pago</div>
            </div>
            <div className="flex items-center">
              <div className="rounded-full h-8 w-8 flex items-center justify-center bg-gray-200 text-gray-600 font-semibold">
                3
              </div>
              <div className="ml-2 text-gray-600 font-medium">Confirmación</div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Calendar and Time Selection */}
            <div className="md:col-span-2">
              <Card className="border-0 shadow-lg bg-white">
                <CardHeader className="border-b border-gray-100 bg-white">
                  <CardTitle className="text-xl text-gray-800">Selecciona fecha y hora</CardTitle>
                </CardHeader>
                <CardContent className="bg-white">
                  <div className="space-y-6 pt-4">
                    {/* Date Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Fecha
                      </label>
                      <input
                        type="date"
                        className="w-full p-3 rounded-lg border border-gray-200 bg-white text-gray-800 focus:ring-2 focus:ring-[#029455] focus:border-[#029455] transition-all"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>

                    {/* Time Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
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
                            className="w-full py-4 text-gray-700 border-gray-200 hover:bg-[#029455]/10 hover:border-[#029455] hover:text-[#029455] transition-all"
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* Me apunto button */}
                    <div className="pt-4 border-t border-gray-100">
                      <Link to="/join-game" className="block">
                        <Button 
                          className="w-full bg-[#029455] hover:bg-[#029455]/90 text-white font-medium py-6 text-base mb-2"
                        >
                          Me apunto al partido
                        </Button>
                      </Link>
                      <p className="text-sm text-gray-600 text-center">
                        ¿Buscas equipo o jugadores? Apúntate al partido
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Booking Summary */}
            <div>
              <Card className="border-0 shadow-lg bg-white">
                <CardHeader className="border-b border-gray-100 bg-white">
                  <CardTitle className="text-xl text-gray-800">Resumen de la reserva</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 bg-white pt-4">
                  <div className="flex justify-between items-center py-2">
                    <div className="flex items-center text-gray-700">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      <span>Fecha</span>
                    </div>
                    <span className="font-medium text-gray-800">-</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <div className="flex items-center text-gray-700">
                      <Clock className="mr-2 h-4 w-4" />
                      <span>Hora</span>
                    </div>
                    <span className="font-medium text-gray-800">-</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <div className="flex items-center text-gray-700">
                      <Users className="mr-2 h-4 w-4" />
                      <span>Jugadores apuntados</span>
                    </div>
                    <span className="font-medium text-gray-800">0/6</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <div className="flex items-center text-gray-700">
                      <Euro className="mr-2 h-4 w-4" />
                      <span>Precio</span>
                    </div>
                    <span className="font-medium text-gray-800">30€</span>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex justify-between items-center py-2">
                      <span className="font-semibold text-gray-800">Total</span>
                      <span className="font-semibold text-gray-800">30€</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-[#029455] hover:bg-[#029455]/90 text-white font-medium py-6 text-base disabled:opacity-50 disabled:cursor-not-allowed"
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
    </div>
  )
}