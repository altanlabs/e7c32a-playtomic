import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Bell, Trophy, UserPlus, Calendar, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import { useNavigate } from "react-router-dom"

interface Notification {
  id: string
  type: "newTournament" | "teamJoin" | "reminder" | "update" | "result"
  title: string
  description: string
  date: string
  read: boolean
  actionUrl?: string
}

const getNotificationIcon = (type: Notification["type"]) => {
  switch (type) {
    case "newTournament":
      return <Trophy className="h-4 w-4" />
    case "teamJoin":
      return <UserPlus className="h-4 w-4" />
    case "reminder":
      return <Calendar className="h-4 w-4" />
    case "update":
      return <Bell className="h-4 w-4" />
    case "result":
      return <Users className="h-4 w-4" />
  }
}

const getNotificationColor = (type: Notification["type"]) => {
  switch (type) {
    case "newTournament":
      return "text-green-500"
    case "teamJoin":
      return "text-blue-500"
    case "reminder":
      return "text-yellow-500"
    case "update":
      return "text-purple-500"
    case "result":
      return "text-orange-500"
  }
}

interface NotificationsDropdownProps {
  notifications: Notification[]
  onRead: (id: string) => void
}

export function NotificationsDropdown({ 
  notifications,
  onRead 
}: NotificationsDropdownProps) {
  const navigate = useNavigate()
  const unreadCount = notifications.filter(n => !n.read).length

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge 
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0"
              variant="destructive"
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <div className="flex items-center justify-between px-4 py-2">
          <h3 className="font-semibold">Notificaciones</h3>
          {unreadCount > 0 && (
            <Badge variant="secondary">{unreadCount} nuevas</Badge>
          )}
        </div>
        <DropdownMenuSeparator />
        <div className="max-h-[300px] overflow-auto">
          {notifications.length === 0 ? (
            <div className="p-4 text-center text-muted-foreground">
              No hay notificaciones
            </div>
          ) : (
            notifications.slice(0, 5).map((notification) => (
              <DropdownMenuItem
                key={notification.id}
                className={cn(
                  "flex items-start gap-3 p-4 cursor-pointer",
                  !notification.read && "bg-muted/50"
                )}
                onClick={() => {
                  onRead(notification.id)
                  if (notification.actionUrl) {
                    navigate(notification.actionUrl)
                  }
                }}
              >
                <div className={cn(
                  "mt-1",
                  getNotificationColor(notification.type)
                )}>
                  {getNotificationIcon(notification.type)}
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {notification.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {notification.description}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {notification.date}
                  </p>
                </div>
              </DropdownMenuItem>
            ))
          )}
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem 
          className="p-2 text-center cursor-pointer"
          onClick={() => navigate("/notifications")}
        >
          Ver todas las notificaciones
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}