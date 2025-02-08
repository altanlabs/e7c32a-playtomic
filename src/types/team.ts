export interface Player {
  id: string
  name: string
  avatar: string
  position: string
  level: string
  stats?: {
    gamesPlayed: number
    pointsPerGame: number
    assistsPerGame: number
    reboundsPerGame: number
  }
}

export interface Team {
  id: string
  name: string
  logo?: string
  description?: string
  level: string
  players: Player[]
  captain: Player
  stats?: {
    wins: number
    losses: number
    tournamentsPlayed: number
    tournamentsWon: number
  }
  achievements?: {
    id: string
    name: string
    description: string
    date: string
    icon: string
  }[]
  maxPlayers: number
  status: 'open' | 'closed' | 'looking_for_players'
  createdAt: Date
  updatedAt: Date
}