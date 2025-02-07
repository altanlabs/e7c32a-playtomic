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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { PaymentSummary } from "./payment-summary"
import { CreditCard, Calendar as CalendarIcon } from "lucide-react"
import { useState } from "react"

interface PaymentFormProps {
  baseAmount: number
  concept: string
  date?: string
  time?: string
  isPremium?: boolean
  onPaymentComplete: (paymentInfo: any) => void
  onCancel: () => void
}

export function PaymentForm({ 
  baseAmount, 
  concept,
  date,
  time,
  isPremium = false,
  onPaymentComplete,
  onCancel 
}: PaymentFormProps) {
  const [paymentMethod, setPaymentMethod] = useState("card")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la integración real con el sistema de pagos
    onPaymentComplete({
      status: "success",
      transactionId: "txn_" + Math.random().toString(36).substr(2, 9),
      paymentMethod
    })
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Formulario de pago */}
      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Información de pago</CardTitle>
            <CardDescription>
              Pago seguro con cifrado SSL
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Método de pago */}
            <div className="space-y-2">
              <Label>Método de pago</Label>
              <Select 
                defaultValue="card"
                onValueChange={(value) => setPaymentMethod(value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona método de pago" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="card">Tarjeta de crédito/débito</SelectItem>
                  <SelectItem value="bizum">Bizum</SelectItem>
                  <SelectItem value="paypal">PayPal</SelectItem>
                  <SelectItem value="apple">Apple Pay</SelectItem>
                  <SelectItem value="google">Google Pay</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {paymentMethod === "card" && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Titular de la tarjeta</Label>
                  <Input placeholder="Nombre como aparece en la tarjeta" required />
                </div>

                <div className="space-y-2">
                  <Label>Número de tarjeta</Label>
                  <div className="relative">
                    <Input 
                      placeholder="1234 5678 9012 3456" 
                      required
                      minLength={16}
                      maxLength={16}
                      pattern="[0-9]*"
                    />
                    <CreditCard className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Fecha de caducidad</Label>
                    <div className="relative">
                      <Input 
                        placeholder="MM/AA" 
                        required
                        pattern="(0[1-9]|1[0-2])\/([0-9]{2})"
                      />
                      <CalendarIcon className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>CVV</Label>
                    <Input 
                      placeholder="123" 
                      required
                      minLength={3}
                      maxLength={4}
                      pattern="[0-9]*"
                      type="password"
                    />
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === "bizum" && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Número de teléfono</Label>
                  <Input 
                    placeholder="+34 600 000 000" 
                    required
                    type="tel"
                    pattern="[0-9]{9}"
                  />
                </div>
              </div>
            )}

            {(paymentMethod === "paypal" || paymentMethod === "apple" || paymentMethod === "google") && (
              <div className="text-center p-4">
                <p className="text-muted-foreground">
                  Serás redirigido a la plataforma de pago al continuar
                </p>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" type="button" onClick={onCancel}>
              Cancelar
            </Button>
            <Button type="submit">
              Confirmar pago
            </Button>
          </CardFooter>
        </Card>
      </form>

      {/* Resumen del pago */}
      <PaymentSummary
        baseAmount={baseAmount}
        concept={concept}
        date={date}
        time={time}
        isPremium={isPremium}
      />
    </div>
  )
}