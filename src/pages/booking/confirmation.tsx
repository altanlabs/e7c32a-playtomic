import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function BookingConfirmationPage() {
  const navigate = useNavigate();

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
            <div className="rounded-full h-8 w-8 flex items-center justify-center bg-muted text-muted-foreground">
              2
            </div>
            <div className="ml-2">Pago</div>
          </div>
          <div className="flex items-center">
            <div className="rounded-full h-8 w-8 flex items-center justify-center bg-[#FFA726] text-white">
              3
            </div>
            <div className="ml-2">Confirmación</div>
          </div>
        </div>

        {/* Confirmation Card */}
        <Card>
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16 text-[#4CAF50]" />
            </div>
            <CardTitle className="text-2xl">¡Reserva confirmada!</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-6">
              Te hemos enviado un email con los detalles de tu reserva
            </p>
            <div className="space-y-4">
              <Button
                className="w-full bg-[#FFA726] hover:bg-[#FF9800]"
                onClick={() => navigate('/')}
              >
                Volver al inicio
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => navigate('/booking')}
              >
                Hacer otra reserva
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}