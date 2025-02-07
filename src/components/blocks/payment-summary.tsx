import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

interface PaymentSummaryProps {
  baseAmount: number
  concept: string
  date?: string
  time?: string
  isPremium?: boolean
}

export function PaymentSummary({ 
  baseAmount, 
  concept,
  date,
  time,
  isPremium = false
}: PaymentSummaryProps) {
  // Cálculos de comisiones y descuentos
  const serviceFeePercentage = isPremium ? 0.05 : 0.08 // 5% premium, 8% normal
  const serviceFee = baseAmount * serviceFeePercentage
  const insuranceFee = 1 // 1€ seguro por reserva
  const totalAmount = baseAmount + serviceFee + insuranceFee

  return (
    <Card>
      <CardHeader>
        <CardTitle>Resumen del pago</CardTitle>
        <CardDescription>
          Desglose de la reserva y servicios
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Detalles de la reserva */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm">Concepto</span>
            <span className="font-medium">{concept}</span>
          </div>
          {date && (
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Fecha</span>
              <span>{date}</span>
            </div>
          )}
          {time && (
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Hora</span>
              <span>{time}</span>
            </div>
          )}
        </div>

        <Separator />

        {/* Desglose de precios */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm">Precio base</span>
            <span>{baseAmount.toFixed(2)}€</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                Comisión de servicio ({(serviceFeePercentage * 100)}%)
              </span>
              {isPremium && (
                <Badge variant="secondary" className="text-xs">Premium</Badge>
              )}
            </div>
            <span className="text-muted-foreground">
              {serviceFee.toFixed(2)}€
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">
              Seguro de cancelación
            </span>
            <span className="text-muted-foreground">
              {insuranceFee.toFixed(2)}€
            </span>
          </div>
        </div>

        <Separator />

        {/* Total */}
        <div className="flex justify-between items-center">
          <span className="font-semibold">Total a pagar</span>
          <Badge variant="default" className="text-lg py-1">
            {totalAmount.toFixed(2)}€
          </Badge>
        </div>

        {/* Beneficios incluidos */}
        <div className="space-y-2 bg-muted p-3 rounded-lg">
          <p className="text-sm font-medium">El precio incluye:</p>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>• Reserva garantizada</li>
            <li>• Seguro de cancelación hasta 24h antes</li>
            <li>• Soporte prioritario 24/7</li>
            <li>• Protección al jugador</li>
          </ul>
        </div>

        {!isPremium && (
          <p className="text-xs text-muted-foreground">
            💡 Los usuarios Premium disfrutan de un 3% menos en comisiones. 
            <a href="/premium" className="text-primary ml-1 hover:underline">
              Hazte Premium
            </a>
          </p>
        )}
      </CardContent>
    </Card>
  )
}