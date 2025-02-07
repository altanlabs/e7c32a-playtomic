import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bell, Calendar, Trophy, UserPlus, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface Notification {
  id: string
  type: "newTournament" | "teamJoin" | "reminder" | "update" | "result"
  title: string
  description: string
  date: string
  read: boolean
  actionUrl?: string
  tournament?: {
    name: string
    date: string
  }
}

const getNotificationIcon = (type: Notification["type"]) => {
  switch (type) {
    case "newTournament":
      return <Trophy className="h-5 w-5" />
    case "teamJoin":
      return <UserPlus className="h-5 w-5" />
    case "reminder":
      return <Calendar className="h-5 w-5" />
    case "update":
      return <Bell className="h-5 w-5" />
    case "result":
      return <Users className="h-5 w-5" />
  }
}

const getNotificationColor = (type: Notification["type"]) => {
  switch (type) {
    case "newTournament":
      return {
        bg: "bg-emerald-50 dark:bg-emerald-950/30",
        icon: "text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/50",
        border: "border-emerald-500"
      }
    case "teamJoin":
      return {
        bg: "bg-blue-50 dark:bg-blue-950/30",
        icon: "text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/50",
        border: "border-blue-500"
      }
    case "reminder":
      return {
        bg: "bg-amber-50 dark:bg-amber-950/30",
        icon: "text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/50",
        border: "border-amber-500"
      }
    case "update":
      return {
        bg: "bg-purple-50 dark:bg-purple-950/30",
        icon: "text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/50",
        border: "border-purple-500"
      }
    case "result":
      return {
        bg: "bg-rose-50 dark:bg-rose-950/30",
        icon: "text-rose-600 dark:text-rose-400 bg-rose-100 dark:bg-rose-900/50",
        border: "border-rose-500"
      }
  }
}

interface NotificationItemProps {
  notification: Notification
  onRead: (id: string) => void
}

const NotificationItem = ({ notification, onRead }: NotificationItemProps) => {
  const colors = getNotificationColor(notification.type)
  
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
                {getNotificationIcon(notification.type)}
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
          <CardDescription className="text-sm mb-3 leading-relaxed">
            {notification.description}
          </CardDescription>
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
              {notification.actionUrl && (
                <Button 
                  size="sm"
                  className="bg-primary/90 hover:bg-primary"
                >
                  Ver detalles
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

interface NotificationsPanelProps {
  notifications: Notification[]
  onReadAll: () => void
  onRead: (id: string) => void
}

export function NotificationsPanel({ 
  notifications,
  onReadAll,
  onRead
}: NotificationsPanelProps) {
  const unreadCount = notifications.filter(n => !n.read).length

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Notificaciones</h2>
          <p className="text-sm text-muted-foreground mt-1">
            {unreadCount === 0 ? (
              "No hay notificaciones sin leer"
            ) : (
              `${unreadCount} notificación${unreadCount === 1 ? '' : 'es'} sin leer`
            )}
          </p>
        </div>
        {unreadCount > 0 && (
          <Button 
            variant="outline" 
            onClick={onReadAll}
            className="hover:bg-primary/10 hover:text-primary"
          >
            Marcar todas como leídas
          </Button>
        )}
      </div>

      <motion.div 
        className="space-y-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {notifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            notification={notification}
            onRead={onRead}
          />
        ))}
      </motion.div>
    </div>
  )
}