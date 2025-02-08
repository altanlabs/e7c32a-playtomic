import { bookingService } from '@/services/bookingService';
import { createPaymentIntent } from '@/lib/stripe';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const bookingData = req.body;

    // Validar datos requeridos
    const requiredFields = [
      'courtId',
      'courtName',
      'clubId',
      'clubName',
      'playerId',
      'playerName',
      'playerPhone',
      'date',
      'timeSlot',
      'courtType',
      'price'
    ];

    for (const field of requiredFields) {
      if (!bookingData[field]) {
        return res.status(400).json({ 
          message: `Missing required field: ${field}` 
        });
      }
    }

    // Crear intención de pago en Stripe
    const { clientSecret, id: paymentIntentId } = await createPaymentIntent({
      amount: bookingData.price,
      metadata: {
        courtId: bookingData.courtId,
        courtType: bookingData.courtType,
        bookingDate: new Date(bookingData.date).toISOString(),
        timeSlot: bookingData.timeSlot,
        playerName: bookingData.playerName,
        playerPhone: bookingData.playerPhone,
        clubId: bookingData.clubId
      }
    });

    // Crear la reserva con estado pendiente de pago
    const booking = await bookingService.createBooking({
      ...bookingData,
      payment: {
        paymentIntentId,
        amount: bookingData.price,
        currency: 'EUR',
        status: 'pending'
      }
    });

    res.status(200).json({
      booking,
      clientSecret
    });
  } catch (error: any) {
    console.error('Error creating booking:', error);
    res.status(500).json({ 
      message: error.message || 'Failed to create booking' 
    });
  }
}