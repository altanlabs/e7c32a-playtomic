import { useParams } from "react-router-dom"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Trophy, Users } from "lucide-react"
import { TournamentRegistration } from "@/components/blocks/tournament-registration"

interface Tournament {
  id: string
  name: string
  description: string
  clubName: string
  location: string
  date: string
  price: number
  prizePool: string
  maxTeams: number
  registeredTeams: Array<{
    name: string
    players: Array<{
      name: string
      avatar: string
      position: string
    }>
  }>
  level: string
  image: string
}

interface TournamentData {
  [key: string]: Tournament
}

// Mock data - En una implementación real, esto vendría de una API
const MOCK_TOURNAMENTS: TournamentData = {
  "1": {
    id: "1",
    name: "Torneo Verano 3x3",
    description: "Torneo de baloncesto 3x3 con los mejores equipos de la ciudad. Premios en metálico y trofeos para los ganadores.",
    clubName: "Club Deportivo Central",
    location: "Pista Central - Madrid",
    date: "15 de Julio, 2024",
    price: 60,
    prizePool: "1000€ + Trofeos",
    maxTeams: 16,
    registeredTeams: [
      {
        name: "Los Invencibles",
        players: [
          { name: "Juan Pérez", position: "Base", avatar: "https://i.pravatar.cc/150?u=juan" },
          { name: "Ana García", position: "Alero", avatar: "https://i.pravatar.cc/150?u=ana" }
        ]
      },
      {
        name: "Street Warriors",
        players: [
          { name: "María Rodríguez", position: "Base", avatar: "https://i.pravatar.cc/150?u=maria" },
          { name: "Pedro Sánchez", position: "Alero", avatar: "https://i.pravatar.cc/150?u=pedro" }
        ]
      }
    ],
    level: "Avanzado",
    image: "https://images.unsplash.com/photo-1544919982-b61976f0ba43?q=80&w=1476&auto=format&fit=crop"
  },
  "2": {
    id: "2",
    name: "Liga Amateur 3x3",
    description: "Liga amateur de baloncesto 3x3. Partidos todos los sábados con premios semanales.",
    clubName: "Urban Court Downtown",
    location: "Plaza del Deporte - Barcelona",
    date: "Todos los Sábados",
    price: 40,
    prizePool: "500€ por jornada",
    maxTeams: 24,
    registeredTeams: [
      {
        name: "Rookies",
        players: [
          { name: "Luis Torres", position: "Base", avatar: "https://i.pravatar.cc/150?u=luis" },
          { name: "Sara Martín", position: "Alero", avatar: "https://i.pravatar.cc/150?u=sara" }
        ]
      }
    ],
    level: "Intermedio",
    image: "https://images.unsplash.com/photo-1544919982-b61976f0ba43?q=80&w=1476&auto=format&fit=crop"
  }
}

export default function TournamentDetailPage() {
  const { id = "1" } = useParams()
  const tournament = MOCK_TOURNAMENTS[id]

  if (!tournament) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="p-4 text-center">
          <h1 className="text-xl font-bold mb-2">Torneo no encontrado</h1>
          <p className="text-sm text-muted-foreground">
            El torneo que buscas no existe o ha sido eliminado
          </p>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1200px] mx-auto px-3 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Información principal */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative h-48 sm:h-64 rounded-lg overflow-hidden">
              <img 
                src={tournament.image} 
                alt={tournament.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h1 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  {tournament.name}
                </h1>
                <p className="text-sm text-white/80">{tournament.clubName}</p>
              </div>
            </div>

            <Card className="p-4">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    {tournament.level}
                  </Badge>
                  <Badge variant="destructive" className="text-xs">
                    {tournament.price}€
                  </Badge>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{tournament.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{tournament.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Trophy className="h-4 w-4 text-muted-foreground" />
                    <span>Premio: {tournament.prizePool}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{tournament.registeredTeams.length}/{tournament.maxTeams} equipos</span>
                  </div>
                </div>

                <div className="pt-2 border-t">
                  <h2 className="text-lg font-semibold mb-2">Sobre el torneo</h2>
                  <p className="text-sm text-muted-foreground">
                    {tournament.description}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <Card className="p-4">
              <TournamentRegistration
                tournamentId={tournament.id}
                maxTeams={tournament.maxTeams}
                registeredTeams={tournament.registeredTeams}
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}