import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useNavigate } from "react-router-dom"
import { CalendarIcon, Clock, CreditCard, Euro } from "lucide-react"

export default function PaymentPage() {
  const navigate = useNavigate()
  const [isProcessing, setIsProcessing] = useState(false)

  const handlePayment = async () => {
    setIsProcessing(true)
    // Aquí iría la integración con la pasarela de pago
    setTimeout(() => {
      setIsProcessing(false)
      navigate("/booking/confirmation")
    }, 2000)
  }

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
                <CardTitle>Información de pago</CardTitle>
                <CardDescription>
                  Introduce los datos de tu tarjeta
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="cardName">Titular de la tarjeta</Label>
                  <Input id="cardName" placeholder="Nombre completo" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Número de tarjeta</Label>
                  <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiryDate">Fecha de caducidad</Label>
                    <Input id="expiryDate" placeholder="MM/AA" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-[#FFA726] hover:bg-[#FF9800]"
                  onClick={handlePayment}
                  disabled={isProcessing}
                >
                  {isProcessing ? "Procesando..." : "Pagar 30€"}
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
                  <span className="font-medium">15 marzo 2024</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>Hora</span>
                  </div>
                  <span className="font-medium">18:00</span>
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

            <div className="mt-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Pago seguro con cifrado SSL
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}