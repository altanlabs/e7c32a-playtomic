import Stripe from 'stripe';
import { buffer } from 'micro';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16',
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export const config = {
  api: {
    bodyParser: false,
  },
};

async function handlePaymentSucceeded(paymentIntent: Stripe.PaymentIntent) {
  try {
    // Extraer los datos de la reserva del metadata del PaymentIntent
    const { 
      courtId, 
      courtType, 
      bookingDate, 
      bookingTime,
      playerName,
      playerPhone,
      clubId 
    } = paymentIntent.metadata;

    // Aquí actualizarías el estado de la reserva en tu base de datos
    // y enviarías las notificaciones correspondientes
    
    // Ejemplo:
    // await updateBookingStatus(paymentIntent.id, 'confirmed');
    // await sendNotificationToClub(clubId, {
    //   type: 'newBooking',
    //   bookingDetails: { ... }
    // });
  } catch (error) {
    console.error('Error processing successful payment:', error);
  }
}

async function handlePaymentFailed(paymentIntent: Stripe.PaymentIntent) {
  try {
    // Manejar el fallo del pago
    // Ejemplo:
    // await updateBookingStatus(paymentIntent.id, 'failed');
    // await sendNotificationToPlayer(paymentIntent.metadata.playerEmail, {
    //   type: 'paymentFailed',
    //   bookingDetails: { ... }
    // });
  } catch (error) {
    console.error('Error processing failed payment:', error);
  }
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const buf = await buffer(req);
    const sig = req.headers['stripe-signature'];

    if (!sig || !webhookSecret) {
      return res.status(400).json({ message: 'Missing signature or webhook secret' });
    }

    const event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);

    // Manejar diferentes tipos de eventos
    switch (event.type) {
      case 'payment_intent.succeeded':
        await handlePaymentSucceeded(event.data.object as Stripe.PaymentIntent);
        break;
      
      case 'payment_intent.payment_failed':
        await handlePaymentFailed(event.data.object as Stripe.PaymentIntent);
        break;
      
      // Puedes agregar más manejadores de eventos según necesites
    }

    res.status(200).json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(400).json({ message: 'Webhook error' });
  }
}