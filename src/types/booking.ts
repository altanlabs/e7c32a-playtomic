export type BookingStatus = 
  | 'pending_payment'    // Reserva iniciada, pendiente de pago
  | 'payment_processing' // Pago en proceso
  | 'payment_failed'     // Pago fallido
  | 'pending_approval'   // Pagado, esperando confirmación del club
  | 'confirmed'          // Confirmado por el club
  | 'rejected'           // Rechazado por el club
  | 'cancelled'          // Cancelado por el usuario
  | 'completed'          // Reserva ya utilizada

export interface BookingPayment {
  id: string
  amount: number
  currency: string
  status: 'pending' | 'processing' | 'completed' | 'failed'
  paymentIntentId: string
  paymentMethod?: string
  createdAt: Date
  updatedAt: Date
}

export interface CourtBooking {
  id: string
  courtId: string
  courtName: string
  clubId: string
  clubName: string
  playerId: string
  playerName: string
  playerPhone: string
  date: Date
  timeSlot: string
  courtType: 'half' | 'full'
  price: number
  status: BookingStatus
  payment: BookingPayment
  createdAt: Date
  updatedAt: Date
  cancelledAt?: Date
  completedAt?: Date
}