import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { loadStripe } from "@stripe/stripe-js"
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { Loader2 } from "lucide-react"

// Inicializa Stripe (reemplaza con tu clave pública de Stripe)
const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY || 'tu_clave_publica_stripe')

interface PaymentFormProps {
  amount: number
  description: string
  onSuccess: () => void
  onError: (error: string) => void
}

function CheckoutForm({ amount, description, onSuccess, onError }: PaymentFormProps) {
  const stripe = useStripe()
  const elements = useElements()
  const [isProcessing, setIsProcessing] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsProcessing(true)

    try {
      const { error: submitError } = await elements.submit()
      if (submitError) {
        onError(submitError.message)
        return
      }

      const { error: confirmError } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/payment-confirmation`,
        },
      })

      if (confirmError) {
        onError(confirmError.message)
      } else {
        onSuccess()
      }
    } catch (e) {
      onError('Ocurrió un error al procesar el pago')
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="p-4 bg-muted rounded-lg">
          <p className="font-medium">Resumen del pago</p>
          <p className="text-sm text-muted-foreground">{description}</p>
          <p className="text-xl font-bold mt-2">{amount}€</p>
        </div>

        <PaymentElement />
      </div>

      <Button 
        type="submit" 
        className="w-full bg-[#FFA726] hover:bg-[#FF9800]"
        disabled={isProcessing || !stripe || !elements}
      >
        {isProcessing ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Procesando...
          </>
        ) : (
          `Pagar ${amount}€`
        )}
      </Button>
    </form>
  )
}

interface PaymentDialogProps extends PaymentFormProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function PaymentDialog({ 
  open, 
  onOpenChange,
  amount,
  description,
  onSuccess,
  onError
}: PaymentDialogProps) {
  const [clientSecret, setClientSecret] = useState<string>("")

  // Obtener el client secret de tu backend cuando el diálogo se abre
  const initializePayment = async () => {
    try {
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, description })
      })
      const data = await response.json()
      setClientSecret(data.clientSecret)
    } catch (error) {
      onError('Error al inicializar el pago')
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Completar pago</DialogTitle>
        </DialogHeader>

        {clientSecret && (
          <Elements 
            stripe={stripePromise} 
            options={{
              clientSecret,
              appearance: {
                theme: 'stripe',
                variables: {
                  colorPrimary: '#FFA726',
                }
              }
            }}
          >
            <CheckoutForm
              amount={amount}
              description={description}
              onSuccess={onSuccess}
              onError={onError}
            />
          </Elements>
        )}
      </DialogContent>
    </Dialog>
  )
}