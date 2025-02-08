import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Elements } from '@stripe/react-stripe-js';
import stripePromise from '@/lib/stripe';
import { StripePaymentForm } from '@/components/payment/stripe-payment-form';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CalendarIcon, Clock, CreditCard, Euro } from "lucide-react"
import { notificationService } from '@/lib/notifications';

export default function PaymentPage() {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePaymentSuccess = async () => {
    setIsProcessing(true);
    try {
      // Simular la creación de la reserva en el backend
      const bookingId = 'booking-' + Date.now();
      const courtName = 'Pista Central';
      const bookingDate = new Date('2024-03-15T18:00:00');
      const bookingTime = '18:00';

      // Enviar confirmación y programar recordatorios
      await notificationService.sendBookingConfirmation(
        bookingId,
        courtName,
        bookingDate,
        bookingTime
      );

      // Redirigir a la página de confirmación
      navigate('/booking/confirmation');
    } catch (error) {
      console.error('Error processing booking:', error);
    } finally {
      setIsProcessing(false);
    }
  };

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
                  Pago seguro con Stripe
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Elements stripe={stripePromise}>
                  <StripePaymentForm
                    amount={30}
                    onSuccess={handlePaymentSuccess}
                  />
                </Elements>
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