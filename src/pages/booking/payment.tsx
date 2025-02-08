import { useNavigate, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { CalendarIcon, Clock, CreditCard } from "lucide-react"

export default function BookingPaymentPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { date, time } = location.state || {};

  const handlePayment = () => {
    navigate('/booking/confirmation');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Progress Steps */}
        <div className="flex justify-between mb-8">
          <div className="flex items-center">
            <div className="rounded-full h-8 w-8 flex items-center justify-center bg-muted text-muted-foreground">
              1
            </div>
            <div className="ml-2">Fecha y hora</div>
          </div>
          <div className="flex items-center">
            <div className="rounded-full h-8 w-8 flex items-center justify-center bg-[#FFA726] text-white">
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
          {/* Payment Form */}
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Método de pago</CardTitle>
                <CardDescription>
                  Introduce los datos de tu tarjeta
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Card Number */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Número de tarjeta
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 rounded-md border bg-background"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Expiry Date */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Fecha de caducidad
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 rounded-md border bg-background"
                      placeholder="MM/YY"
                    />
                  </div>

                  {/* CVC */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      CVC
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 rounded-md border bg-background"
                      placeholder="123"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-[#FFA726] hover:bg-[#FF9800]"
                  onClick={handlePayment}
                >
                  Pagar 30€
                </Button>
              </CardFooter>
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
                  <span className="font-medium">{date || "-"}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>Hora</span>
                  </div>
                  <span className="font-medium">{time || "-"}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Total</span>
                  </div>
                  <span className="font-medium">30€</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}