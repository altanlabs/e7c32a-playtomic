import { CourtBooking, BookingStatus } from '@/types/booking';
import { stripe } from '@/lib/stripe';

class BookingService {
  // Crear una nueva reserva
  async createBooking(bookingData: Partial<CourtBooking>): Promise<CourtBooking> {
    try {
      // 1. Crear la intención de pago en Stripe
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(bookingData.price! * 100),
        currency: 'eur',
        metadata: {
          courtId: bookingData.courtId,
          courtType: bookingData.courtType,
          bookingDate: bookingData.date?.toISOString(),
          timeSlot: bookingData.timeSlot,
          playerName: bookingData.playerName,
          playerPhone: bookingData.playerPhone,
          clubId: bookingData.clubId
        }
      });

      // 2. Crear la reserva en la base de datos
      const booking: CourtBooking = {
        ...bookingData,
        id: generateBookingId(),
        status: 'pending_payment',
        payment: {
          id: generatePaymentId(),
          amount: bookingData.price!,
          currency: 'EUR',
          status: 'pending',
          paymentIntentId: paymentIntent.id,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        createdAt: new Date(),
        updatedAt: new Date()
      } as CourtBooking;

      await saveBookingToDatabase(booking);

      return booking;
    } catch (error) {
      console.error('Error creating booking:', error);
      throw new Error('Failed to create booking');
    }
  }

  // Actualizar el estado de una reserva
  async updateBookingStatus(bookingId: string, status: BookingStatus): Promise<CourtBooking> {
    try {
      const booking = await getBookingFromDatabase(bookingId);
      if (!booking) {
        throw new Error('Booking not found');
      }

      booking.status = status;
      booking.updatedAt = new Date();

      if (status === 'completed') {
        booking.completedAt = new Date();
      } else if (status === 'cancelled') {
        booking.cancelledAt = new Date();
      }

      await saveBookingToDatabase(booking);

      // Enviar notificaciones según el nuevo estado
      await this.sendBookingStatusNotifications(booking);

      return booking;
    } catch (error) {
      console.error('Error updating booking status:', error);
      throw new Error('Failed to update booking status');
    }
  }

  // Confirmar una reserva (por parte del club)
  async confirmBooking(bookingId: string, clubId: string): Promise<CourtBooking> {
    try {
      const booking = await getBookingFromDatabase(bookingId);
      
      if (!booking) {
        throw new Error('Booking not found');
      }

      if (booking.clubId !== clubId) {
        throw new Error('Unauthorized to confirm this booking');
      }

      if (booking.status !== 'pending_approval') {
        throw new Error('Booking cannot be confirmed in current status');
      }

      return await this.updateBookingStatus(bookingId, 'confirmed');
    } catch (error) {
      console.error('Error confirming booking:', error);
      throw new Error('Failed to confirm booking');
    }
  }

  // Rechazar una reserva (por parte del club)
  async rejectBooking(bookingId: string, clubId: string, reason: string): Promise<CourtBooking> {
    try {
      const booking = await getBookingFromDatabase(bookingId);
      
      if (!booking) {
        throw new Error('Booking not found');
      }

      if (booking.clubId !== clubId) {
        throw new Error('Unauthorized to reject this booking');
      }

      if (booking.status !== 'pending_approval') {
        throw new Error('Booking cannot be rejected in current status');
      }

      // Realizar el reembolso en Stripe
      await stripe.refunds.create({
        payment_intent: booking.payment.paymentIntentId,
      });

      const updatedBooking = await this.updateBookingStatus(bookingId, 'rejected');

      // Enviar notificación al jugador sobre el rechazo
      await sendNotificationToPlayer(booking.playerId, {
        type: 'booking_rejected',
        bookingId: booking.id,
        reason
      });

      return updatedBooking;
    } catch (error) {
      console.error('Error rejecting booking:', error);
      throw new Error('Failed to reject booking');
    }
  }

  // Cancelar una reserva (por parte del jugador)
  async cancelBooking(bookingId: string, playerId: string): Promise<CourtBooking> {
    try {
      const booking = await getBookingFromDatabase(bookingId);
      
      if (!booking) {
        throw new Error('Booking not found');
      }

      if (booking.playerId !== playerId) {
        throw new Error('Unauthorized to cancel this booking');
      }

      if (!['confirmed', 'pending_approval'].includes(booking.status)) {
        throw new Error('Booking cannot be cancelled in current status');
      }

      // Verificar política de cancelación y calcular reembolso
      const refundAmount = await this.calculateRefundAmount(booking);
      
      if (refundAmount > 0) {
        await stripe.refunds.create({
          payment_intent: booking.payment.paymentIntentId,
          amount: Math.round(refundAmount * 100)
        });
      }

      const updatedBooking = await this.updateBookingStatus(bookingId, 'cancelled');

      // Notificar al club sobre la cancelación
      await sendNotificationToClub(booking.clubId, {
        type: 'booking_cancelled',
        bookingId: booking.id
      });

      return updatedBooking;
    } catch (error) {
      console.error('Error cancelling booking:', error);
      throw new Error('Failed to cancel booking');
    }
  }

  // Calcular el monto a reembolsar según la política de cancelación
  private async calculateRefundAmount(booking: CourtBooking): Promise<number> {
    const now = new Date();
    const bookingDate = new Date(booking.date);
    const hoursUntilBooking = (bookingDate.getTime() - now.getTime()) / (1000 * 60 * 60);

    // Política de cancelación:
    // - Más de 24h antes: reembolso completo
    // - Entre 24h y 12h antes: 50% de reembolso
    // - Menos de 12h antes: sin reembolso
    if (hoursUntilBooking > 24) {
      return booking.price;
    } else if (hoursUntilBooking > 12) {
      return booking.price * 0.5;
    }
    return 0;
  }

  // Enviar notificaciones según el estado de la reserva
  private async sendBookingStatusNotifications(booking: CourtBooking) {
    switch (booking.status) {
      case 'pending_approval':
        await sendNotificationToClub(booking.clubId, {
          type: 'new_booking_request',
          bookingId: booking.id
        });
        break;
      
      case 'confirmed':
        await sendNotificationToPlayer(booking.playerId, {
          type: 'booking_confirmed',
          bookingId: booking.id
        });
        break;
      
      case 'rejected':
        await sendNotificationToPlayer(booking.playerId, {
          type: 'booking_rejected',
          bookingId: booking.id
        });
        break;
      
      case 'cancelled':
        await sendNotificationToClub(booking.clubId, {
          type: 'booking_cancelled',
          bookingId: booking.id
        });
        break;
    }
  }
}

// Funciones auxiliares (implementar según tu base de datos)
function generateBookingId(): string {
  return `bkg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

function generatePaymentId(): string {
  return `pay_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

async function saveBookingToDatabase(booking: CourtBooking): Promise<void> {
  // Implementar según tu base de datos
}

async function getBookingFromDatabase(bookingId: string): Promise<CourtBooking | null> {
  // Implementar según tu base de datos
  return null;
}

async function sendNotificationToPlayer(playerId: string, notification: any): Promise<void> {
  // Implementar según tu sistema de notificaciones
}

async function sendNotificationToClub(clubId: string, notification: any): Promise<void> {
  // Implementar según tu sistema de notificaciones
}

export const bookingService = new BookingService();