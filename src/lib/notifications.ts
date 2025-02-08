export type NotificationType = 'success' | 'error' | 'info' | 'warning';

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
}

export interface BookingNotification extends Notification {
  bookingId: string;
  courtName: string;
  date: Date;
  time: string;
}

export interface ReminderNotification extends Notification {
  bookingId: string;
  reminderTime: Date;
  eventTime: Date;
}

class NotificationService {
  private static instance: NotificationService;
  private notifications: Notification[] = [];

  private constructor() {}

  public static getInstance(): NotificationService {
    if (!NotificationService.instance) {
      NotificationService.instance = new NotificationService();
    }
    return NotificationService.instance;
  }

  public async scheduleBookingReminders(
    bookingId: string,
    eventDate: Date,
    courtName: string
  ) {
    // Programar recordatorio 24h antes
    const reminder24h = new Date(eventDate);
    reminder24h.setDate(reminder24h.getDate() - 1);
    
    // Programar recordatorio 1h antes
    const reminder1h = new Date(eventDate);
    reminder1h.setHours(reminder1h.getHours() - 1);

    // Crear las notificaciones
    const reminders: ReminderNotification[] = [
      {
        id: `${bookingId}-24h`,
        type: 'info',
        title: 'Recordatorio de reserva',
        message: `Tu reserva en ${courtName} es mañana a las ${eventDate.toLocaleTimeString()}`,
        timestamp: new Date(),
        read: false,
        bookingId,
        reminderTime: reminder24h,
        eventTime: eventDate
      },
      {
        id: `${bookingId}-1h`,
        type: 'info',
        title: 'Recordatorio de reserva',
        message: `Tu reserva en ${courtName} es en 1 hora`,
        timestamp: new Date(),
        read: false,
        bookingId,
        reminderTime: reminder1h,
        eventTime: eventDate
      }
    ];

    // Aquí se integraría con el sistema de notificaciones push o email
    await this.scheduleNotifications(reminders);

    return reminders;
  }

  private async scheduleNotifications(reminders: ReminderNotification[]) {
    // Integración con sistema de notificaciones (Firebase Cloud Messaging, por ejemplo)
    try {
      const response = await fetch('/api/notifications/schedule', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ reminders }),
      });

      if (!response.ok) {
        throw new Error('Error scheduling notifications');
      }

      return await response.json();
    } catch (error) {
      console.error('Error scheduling notifications:', error);
      throw error;
    }
  }

  public async sendBookingConfirmation(
    bookingId: string,
    courtName: string,
    date: Date,
    time: string
  ) {
    const notification: BookingNotification = {
      id: `booking-${bookingId}`,
      type: 'success',
      title: 'Reserva confirmada',
      message: `Tu reserva en ${courtName} para el ${date.toLocaleDateString()} a las ${time} ha sido confirmada`,
      timestamp: new Date(),
      read: false,
      bookingId,
      courtName,
      date,
      time
    };

    try {
      // Enviar notificación inmediata
      await fetch('/api/notifications/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ notification }),
      });

      // Programar recordatorios
      await this.scheduleBookingReminders(bookingId, date, courtName);

      return notification;
    } catch (error) {
      console.error('Error sending booking confirmation:', error);
      throw error;
    }
  }

  public async markAsRead(notificationId: string) {
    try {
      await fetch(`/api/notifications/${notificationId}/read`, {
        method: 'PUT',
      });
    } catch (error) {
      console.error('Error marking notification as read:', error);
      throw error;
    }
  }

  public async getUnreadCount(): Promise<number> {
    try {
      const response = await fetch('/api/notifications/unread/count');
      const data = await response.json();
      return data.count;
    } catch (error) {
      console.error('Error getting unread count:', error);
      return 0;
    }
  }
}

export const notificationService = NotificationService.getInstance();