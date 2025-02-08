import { Badge } from "@/components/ui/badge"
import { BookingStatus } from "@/types/booking"
import { cn } from "@/lib/utils"
import { 
  Clock, 
  CreditCard, 
  AlertCircle, 
  CheckCircle2, 
  XCircle, 
  Ban,
  CheckCheck
} from "lucide-react"

interface BookingStatusBadgeProps {
  status: BookingStatus
  className?: string
}

export function BookingStatusBadge({ status, className }: BookingStatusBadgeProps) {
  const getStatusConfig = (status: BookingStatus) => {
    switch (status) {
      case 'pending_payment':
        return {
          label: 'Pendiente de pago',
          icon: CreditCard,
          className: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
        }
      case 'payment_processing':
        return {
          label: 'Procesando pago',
          icon: Clock,
          className: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
        }
      case 'payment_failed':
        return {
          label: 'Pago fallido',
          icon: AlertCircle,
          className: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
        }
      case 'pending_approval':
        return {
          label: 'Pendiente de confirmación',
          icon: Clock,
          className: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
        }
      case 'confirmed':
        return {
          label: 'Confirmada',
          icon: CheckCircle2,
          className: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
        }
      case 'rejected':
        return {
          label: 'Rechazada',
          icon: XCircle,
          className: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
        }
      case 'cancelled':
        return {
          label: 'Cancelada',
          icon: Ban,
          className: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
        }
      case 'completed':
        return {
          label: 'Completada',
          icon: CheckCheck,
          className: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
        }
      default:
        return {
          label: 'Desconocido',
          icon: AlertCircle,
          className: 'bg-gray-100 text-gray-800'
        }
    }
  }

  const config = getStatusConfig(status)
  const Icon = config.icon

  return (
    <Badge 
      variant="secondary"
      className={cn(
        "flex items-center gap-1 px-2 py-1",
        config.className,
        className
      )}
    >
      <Icon className="h-3 w-3" />
      <span>{config.label}</span>
    </Badge>
  )
}