import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Check, X, Clock, Basketball } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { CourtBookingNotification } from "@/types/notifications"

interface CourtBookingNotificationProps {
  notification: CourtBookingNotification
  onConfirm?: (bookingId: string) => void
  onReject?: (bookingId: string) => void
  onRead: (id: string) => void
}

export function CourtBookingNotification({
  notification,
  onConfirm,
  onReject,
  onRead
}: CourtBookingNotificationProps) {
  const getStatusColor = () => {
    switch (notification.type) {
      case "courtBookingRequest":
        return {
          bg: "bg-blue-50 dark:bg-blue-950/30",
          icon: "text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/50",
          border: "border-blue-500"
        }
      case "courtBookingConfirmed":
        return {
          bg: "bg-green-50 dark:bg-green-950/30",
          icon: "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/50",
          border: "border-green-500"
        }
      case "courtBookingRejected":
        return {
          bg: "bg-red-50 dark:bg-red-950/30",
          icon: "text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/50",
          border: "border-red-500"
        }
      case "courtBookingCancelled":
        return {
          bg: "bg-gray-50 dark:bg-gray-950/30",
          icon: "text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900/50",
          border: "border-gray-500"
        }
    }
  }

  const colors = getStatusColor()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
    >
      <Card 
        className={cn(
          "transition-all hover:shadow-lg",
          colors.bg,
          !notification.read && `border-l-4 ${colors.border}`
        )}
      >
        <CardHeader className="flex flex-row items-start space-y-0 pb-2">
          <div className="flex-1 space-y-1">
            <div className="flex items-center gap-3">
              <div className={cn(
                "p-2.5 rounded-full",
                colors.icon
              )}>
                <Basketball className="h-5 w-5" />
              </div>
              <CardTitle className="text-base font-semibold">
                {notification.title}
              </CardTitle>
              {!notification.read && (
                <Badge 
                  variant="secondary" 
                  className="ml-auto animate-pulse bg-primary/10 text-primary"
                >
                  Nueva
                </Badge>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-sm mb-4 leading-relaxed">
            {notification.description}
          </CardDescription>
          
          <div className="bg-black/5 rounded-lg p-4 mb-4 space-y-2">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">
                {notification.booking.date} - {notification.booking.time}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Basketball className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">
                {notification.booking.courtName} - 
                {notification.booking.courtType === 'half' ? ' Medio campo (1 aro)' : ' Campo completo (2 aros)'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-semibold">
                {notification.booking.price}€
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground font-medium">
              {notification.date}
            </span>
            <div className="flex gap-2">
              {!notification.read && (
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => onRead(notification.id)}
                  className="hover:bg-primary/10 hover:text-primary"
                >
                  Marcar como leída
                </Button>
              )}
              
              {notification.type === "courtBookingRequest" && onConfirm && onReject && (
                <>
                  <Button 
                    size="sm"
                    variant="outline"
                    className="text-red-500 hover:bg-red-50"
                    onClick={() => onReject(notification.booking.courtId)}
                  >
                    <X className="h-4 w-4 mr-1" />
                    Rechazar
                  </Button>
                  <Button 
                    size="sm"
                    className="bg-green-500 hover:bg-green-600 text-white"
                    onClick={() => onConfirm(notification.booking.courtId)}
                  >
                    <Check className="h-4 w-4 mr-1" />
                    Confirmar
                  </Button>
                </>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}