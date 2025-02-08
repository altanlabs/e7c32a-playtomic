import { TournamentRegistration } from "@/components/blocks/tournament-registration"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Trophy, Users } from "lucide-react"
import { useParams, useNavigate } from "react-router-dom"

// Datos de ejemplo - En una implementación real, esto vendría de una API
const MOCK_TOURNAMENTS = {
  "1": {
    id: "1",
    name: "Torneo Verano 3x3",
    description: "Gran torneo de baloncesto 3x3 con los mejores equipos de la ciudad. Ven y demuestra tu nivel en la cancha.",
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
          {
            name: "Juan Pérez",
            avatar: "https://i.pravatar.cc/150?u=juan",
            position: "Base"
          },
          {
            name: "Ana García",
            avatar: "https://i.pravatar.cc/150?u=ana",
            position: "Alero"
          },
          {
            name: "Carlos López",
            avatar: "https://i.pravatar.cc/150?u=carlos",
            position: "Pívot"
          }
        ]
      },
      {
        name: "Street Warriors",
        players: [
          {
            name: "María Rodríguez",
            avatar: "https://i.pravatar.cc/150?u=maria",
            position: "Base"
          },
          {
            name: "Pedro Sánchez",
            avatar: "https://i.pravatar.cc/150?u=pedro",
            position: "Alero"
          }
        ]
      }
    ],
    level: "Avanzado",
    image: "https://images.unsplash.com/photo-1544919982-b61976f0ba43?q=80&w=1476&auto=format&fit=crop"
  },
  "2": {
    id: "2",
    name: "Liga Amateur 3x3",
    description: "Liga amateur de baloncesto 3x3 perfecta para iniciarse en la competición. Partidos todos los sábados.",
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
          {
            name: "Luis Torres",
            avatar: "https://i.pravatar.cc/150?u=luis",
            position: "Base"
          },
          {
            name: "Sara Martín",
            avatar: "https://i.pravatar.cc/150?u=sara",
            position: "Alero"
          }
        ]
      }
    ],
    level: "Intermedio",
    image: "https://images.unsplash.com/photo-1544919982-b61976f0ba43?q=80&w=1476&auto=format&fit=crop"
  }
}

export default function TournamentDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  
  // En una implementación real, aquí se haría una llamada a la API
  const tournament = id ? MOCK_TOURNAMENTS[id] : null

  if (!tournament) return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] px-4">
      <h1 className="text-2xl font-bold mb-2">Torneo no encontrado</h1>
      <p className="text-muted-foreground mb-4">El torneo que buscas no existe o ha sido eliminado.</p>
      <Button onClick={() => navigate('/tournaments')}>Ver todos los torneos</Button>
    </div>
  )

  const handleViewOrganizer = () => {
    navigate(`/club/${tournament.clubName}`)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Información del torneo */}
        <div className="lg:col-span-2 space-y-6">
          <div className="relative h-[200px] sm:h-[300px] rounded-lg overflow-hidden">
            <img 
              src={tournament.image} 
              alt={tournament.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 flex gap-2">
              <Badge variant="secondary" className="text-base sm:text-lg py-1">
                {tournament.price}€
              </Badge>
              <Badge>{tournament.level}</Badge>
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">{tournament.name}</h1>
              <p className="text-muted-foreground">{tournament.description}</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span>{tournament.location}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-5 h-5 flex-shrink-0" />
                <span>{tournament.date}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Trophy className="w-5 h-5 flex-shrink-0" />
                <span>Premio: {tournament.prizePool}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="w-5 h-5 flex-shrink-0" />
                <span>Máximo {tournament.maxTeams} equipos</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold">Organizador</h2>
            <div className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-secondary rounded-lg">
              <div className="text-center sm:text-left">
                <h3 className="font-semibold">{tournament.clubName}</h3>
                <p className="text-sm text-muted-foreground">{tournament.location}</p>
              </div>
              <Button 
                className="w-full sm:w-auto sm:ml-auto" 
                variant="outline"
                onClick={handleViewOrganizer}
              >
                Ver perfil
              </Button>
            </div>
          </div>
        </div>

        {/* Panel de registro */}
        <div className="lg:col-span-1">
          <div className="sticky top-8 space-y-6">
            <div className="bg-card p-4 sm:p-6 rounded-lg border">
              <h2 className="text-xl font-bold mb-4 text-center sm:text-left">Registro</h2>
              <TournamentRegistration
                tournamentId={tournament.id}
                maxTeams={tournament.maxTeams}
                registeredTeams={tournament.registeredTeams}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}