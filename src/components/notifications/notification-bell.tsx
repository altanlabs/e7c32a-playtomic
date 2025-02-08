import { useState, useEffect } from 'react';
import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { notificationService, Notification } from '@/lib/notifications';
import { Badge } from '@/components/ui/badge';

export function NotificationBell() {
  const [unreadCount, setUnreadCount] = useState(0);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    // Cargar notificaciones iniciales
    fetchNotifications();

    // Actualizar cada minuto
    const interval = setInterval(fetchNotifications, 60000);

    return () => clearInterval(interval);
  }, []);

  const fetchNotifications = async () => {
    try {
      const count = await notificationService.getUnreadCount();
      setUnreadCount(count);
      
      // Aquí se cargarían las notificaciones reales desde el backend
      // Por ahora usamos datos de ejemplo
      const mockNotifications: Notification[] = [
        {
          id: '1',
          type: 'info',
          title: 'Recordatorio',
          message: 'Tu reserva es mañana a las 18:00',
          timestamp: new Date(),
          read: false,
        },
        {
          id: '2',
          type: 'success',
          title: 'Reserva confirmada',
          message: 'Tu reserva ha sido confirmada con éxito',
          timestamp: new Date(),
          read: true,
        },
      ];
      
      setNotifications(mockNotifications);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  const handleMarkAsRead = async (notificationId: string) => {
    try {
      await notificationService.markAsRead(notificationId);
      setNotifications(notifications.map(notification => 
        notification.id === notificationId 
          ? { ...notification, read: true }
          : notification
      ));
      setUnreadCount(prev => Math.max(0, prev - 1));
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge 
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center bg-[#FFA726]"
              variant="secondary"
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <DropdownMenuItem
              key={notification.id}
              className={`flex flex-col items-start p-4 ${
                !notification.read ? 'bg-muted/50' : ''
              }`}
              onClick={() => handleMarkAsRead(notification.id)}
            >
              <div className="flex items-center justify-between w-full">
                <span className="font-medium">{notification.title}</span>
                <span className="text-xs text-muted-foreground">
                  {notification.timestamp.toLocaleTimeString()}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                {notification.message}
              </p>
            </DropdownMenuItem>
          ))
        ) : (
          <div className="p-4 text-center text-muted-foreground">
            No hay notificaciones
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}