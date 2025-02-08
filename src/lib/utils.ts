import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export function formatTime(time: string): string {
  return time
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR'
  }).format(amount)
}

export function formatPhoneNumber(phone: string): string {
  // Formato español: XXX XXX XXX
  return phone.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3')
}

export function generateBookingReference(): string {
  const timestamp = Date.now().toString(36)
  const random = Math.random().toString(36).substr(2, 5)
  return `BK-${timestamp}-${random}`.toUpperCase()
}

export function calculateRefundAmount(
  price: number, 
  bookingDate: Date, 
  cancellationDate: Date = new Date()
): number {
  const hoursUntilBooking = (bookingDate.getTime() - cancellationDate.getTime()) / (1000 * 60 * 60)

  if (hoursUntilBooking > 24) {
    return price // Reembolso completo
  } else if (hoursUntilBooking > 12) {
    return price * 0.5 // 50% de reembolso
  }
  return 0 // Sin reembolso
}

export function getBookingStatusColor(status: string): {
  text: string
  bg: string
  border: string
} {
  const colors = {
    pending_payment: {
      text: 'text-yellow-800',
      bg: 'bg-yellow-100',
      border: 'border-yellow-500'
    },
    payment_processing: {
      text: 'text-blue-800',
      bg: 'bg-blue-100',
      border: 'border-blue-500'
    },
    payment_failed: {
      text: 'text-red-800',
      bg: 'bg-red-100',
      border: 'border-red-500'
    },
    pending_approval: {
      text: 'text-purple-800',
      bg: 'bg-purple-100',
      border: 'border-purple-500'
    },
    confirmed: {
      text: 'text-green-800',
      bg: 'bg-green-100',
      border: 'border-green-500'
    },
    rejected: {
      text: 'text-red-800',
      bg: 'bg-red-100',
      border: 'border-red-500'
    },
    cancelled: {
      text: 'text-gray-800',
      bg: 'bg-gray-100',
      border: 'border-gray-500'
    },
    completed: {
      text: 'text-green-800',
      bg: 'bg-green-100',
      border: 'border-green-500'
    }
  }

  return colors[status as keyof typeof colors] || colors.pending_payment
}

export function isBookingCancellable(
  status: string, 
  bookingDate: Date
): boolean {
  if (!['confirmed', 'pending_approval'].includes(status)) {
    return false
  }

  const hoursUntilBooking = (bookingDate.getTime() - Date.now()) / (1000 * 60 * 60)
  return hoursUntilBooking > 12
}

export function getTimeSlots(
  openTime: string = '09:00',
  closeTime: string = '22:00',
  duration: number = 60
): string[] {
  const slots: string[] = []
  const [openHour, openMinute] = openTime.split(':').map(Number)
  const [closeHour, closeMinute] = closeTime.split(':').map(Number)

  let currentDate = new Date()
  currentDate.setHours(openHour, openMinute, 0)

  const endDate = new Date()
  endDate.setHours(closeHour, closeMinute, 0)

  while (currentDate < endDate) {
    slots.push(
      currentDate.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      })
    )
    currentDate = new Date(currentDate.getTime() + duration * 60000)
  }

  return slots
}