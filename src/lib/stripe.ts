import { loadStripe } from '@stripe/stripe-js';

// Reemplazar con tu clave pública de Stripe
const stripePromise = loadStripe(process.env.VITE_STRIPE_PUBLIC_KEY || '');

export default stripePromise;