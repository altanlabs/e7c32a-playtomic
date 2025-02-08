import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Button } from "@/components/ui/button";
import { toast } from 'react-hot-toast';

interface StripePaymentFormProps {
  amount: number;
  onSuccess: () => void;
}

export function StripePaymentForm({ amount, onSuccess }: StripePaymentFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    try {
      // Crear un Payment Intent en el backend
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }),
      });

      const data = await response.json();

      // Confirmar el pago con Stripe
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        data.clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement)!,
          },
        }
      );

      if (error) {
        toast.error(error.message || 'Error al procesar el pago');
      } else if (paymentIntent.status === 'succeeded') {
        toast.success('¡Pago completado con éxito!');
        onSuccess();
      }
    } catch (err) {
      toast.error('Error al procesar el pago');
      console.error('Error:', err);
    }

    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="p-4 border rounded-lg">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
      </div>

      <Button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full bg-[#FFA726] hover:bg-[#FF9800]"
      >
        {isProcessing ? 'Procesando...' : `Pagar ${amount}€`}
      </Button>
    </form>
  );
}