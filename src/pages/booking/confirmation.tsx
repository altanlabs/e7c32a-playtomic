import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Link } from "react-router-dom"
import { CalendarIcon, Clock, CheckCircle2, MapPin, Share2 } from "lucide-react"

export default function ConfirmationPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-2xl mx-auto">
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
            <div className="rounded-full h-8 w-8 flex items-center justify-center bg-[#FFA726] text-white">
              3
            </div>
            <div className="ml-2">Confirmación</div>
          </div>
        </div>

        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <CheckCircle2 className="h-6 w-6 text-green-600" />
            </div>
            <CardTitle className="text-2xl">¡Reserva confirmada!</CardTitle>
            <CardDescription>
              Te hemos enviado un email con los detalles de tu reserva
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-muted/50 rounded-lg p-4 space-y-4">
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
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>Ubicación</span>
                </div>
                <span className="font-medium">Pista Central</span>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <Button variant="outline" className="flex-1">
                <Share2 className="mr-2 h-4 w-4" />
                Compartir
              </Button>
              <Button variant="outline" className="flex-1">
                <CalendarIcon className="mr-2 h-4 w-4" />
                Añadir al calendario
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex-col space-y-2">
            <Link to="/" className="w-full">
              <Button className="w-full bg-[#FFA726] hover:bg-[#FF9800]">
                Volver al inicio
              </Button>
            </Link>
            <Link to="/courts" className="w-full">
              <Button variant="outline" className="w-full">
                Reservar otra pista
              </Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Notification Preview */}
        <div className="mt-8">
          <h3 className="text-lg font-medium mb-4">Notificaciones configuradas:</h3>
          <div className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    <div>
                      <p className="font-medium">Recordatorio 24h antes</p>
                      <p className="text-sm text-muted-foreground">14 marzo 18:00</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    Editar
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    <div>
                      <p className="font-medium">Recordatorio 1h antes</p>
                      <p className="text-sm text-muted-foreground">15 marzo 17:00</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    Editar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}