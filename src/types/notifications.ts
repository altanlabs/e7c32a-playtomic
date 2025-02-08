export type NotificationType = 
  | "newTournament" 
  | "teamJoin" 
  | "reminder" 
  | "update" 
  | "result"
  | "courtBookingRequest"    // Nueva solicitud de reserva
  | "courtBookingConfirmed"  // Reserva confirmada por el club
  | "courtBookingRejected"   // Reserva rechazada por el club
  | "courtBookingCancelled"  // Reserva cancelada por el jugador

export interface BaseNotification {
  id: string
  type: NotificationType
  title: string
  description: string
  date: string
  read: boolean
  actionUrl?: string
}

export interface CourtBookingNotification extends BaseNotification {
  type: "courtBookingRequest" | "courtBookingConfirmed" | "courtBookingRejected" | "courtBookingCancelled"
  booking: {
    courtId: string
    courtName: string
    date: string
    time: string
    courtType: "half" | "full"
    price: number
    playerName: string
    playerPhone?: string
    clubId: string
    clubName: string
  }
}

export interface TournamentNotification extends BaseNotification {
  type: "newTournament" | "reminder"
  tournament: {
    name: string
    date: string
  }
}

export interface TeamNotification extends BaseNotification {
  type: "teamJoin" | "result"
}

export interface UpdateNotification extends BaseNotification {
  type: "update"
}

export type Notification = 
  | CourtBookingNotification 
  | TournamentNotification 
  | TeamNotification 
  | UpdateNotification