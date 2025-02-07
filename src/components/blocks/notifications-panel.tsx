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
      return "text-green-500 bg-green-100 dark:bg-green-900"
    case "teamJoin":
      return "text-blue-500 bg-blue-100 dark:bg-blue-900"
    case "reminder":
      return "text-yellow-500 bg-yellow-100 dark:bg-yellow-900"
    case "update":
      return "text-purple-500 bg-purple-100 dark:bg-purple-900"
    case "result":
      return "text-orange-500 bg-orange-100 dark:bg-orange-900"
  }
}

interface NotificationItemProps {
  notification: Notification
  onRead: (id: string) => void
}

function NotificationItem({ notification, onRead }: NotificationItemProps) {
  return (
    <Card className={cn(
      "transition-all hover:shadow-md",
      !notification.read && "border-l-4 border-l-primary"
    )}>
      <CardHeader className="flex flex-row items-start space-y-0 pb-2">
        <div className="flex-1 space-y-1">
          <div className="flex items-center gap-2">
            <div className={cn(
              "p-2 rounded-full",
              getNotificationColor(notification.type)
            )}>
              {getNotificationIcon(notification.type)}
            </div>
            <CardTitle className="text-base">{notification.title}</CardTitle>
            {!notification.read && (
              <Badge variant="secondary" className="ml-auto">
                Nueva
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm mb-2">
          {notification.description}
        </CardDescription>
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            {notification.date}
          </span>
          <div className="flex gap-2">
            {!notification.read && (
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => onRead(notification.id)}
              >
                Marcar como leída
              </Button>
            )}
            {notification.actionUrl && (
              <Button size="sm">
                Ver detalles
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
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
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">Notificaciones</h2>
          <p className="text-sm text-muted-foreground">
            {unreadCount} notificaciones sin leer
          </p>
        </div>
        {unreadCount > 0 && (
          <Button variant="outline" onClick={onReadAll}>
            Marcar todas como leídas
          </Button>
        )}
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            notification={notification}
            onRead={onRead}
          />
        ))}
      </div>
    </div>
  )
}