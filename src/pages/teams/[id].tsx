import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useParams, useNavigate } from "react-router-dom"
import { Users, Trophy, Star, MapPin, Calendar } from "lucide-react"

// Mock data - En una implementación real, esto vendría de una API
const MOCK_TEAM = {
  id: "1",
  name: "Los Invencibles",
  description: "Equipo de baloncesto 3x3 con experiencia en torneos locales y nacionales. Buscamos jugadores comprometidos para completar la plantilla.",
  level: "Avanzado",
  location: "Madrid",
  foundedDate: "2022",
  stats: {
    wins: 15,
    losses: 3,
    tournamentsWon: 3,
    currentStreak: "W3"
  },
  achievements: [
    "Campeones Torneo Verano 2023",
    "Subcampeones Liga Local 2023",
    "MVP del torneo - Juan Pérez"
  ],
  players: [
    { 
      name: "Juan Pérez",
      position: "Base",
      number: "5",
      stats: {
        ppg: "15.5",
        apg: "4.2",
        rpg: "3.1"
      },
      avatar: "https://i.pravatar.cc/150?u=juan"
    },
    { 
      name: "Ana García",
      position: "Alero",
      number: "7",
      stats: {
        ppg: "12.3",
        apg: "2.8",
        rpg: "5.4"
      },
      avatar: "https://i.pravatar.cc/150?u=ana"
    },
    { 
      name: "Carlos López",
      position: "Pívot",
      number: "11",
      stats: {
        ppg: "10.8",
        apg: "1.5",
        rpg: "8.2"
      },
      avatar: "https://i.pravatar.cc/150?u=carlos"
    }
  ],
  upcomingTournaments: [
    {
      id: "1",
      name: "Torneo Verano 3x3",
      date: "15 de Julio, 2024",
      location: "Pista Central - Madrid"
    }
  ]
}

export default function TeamDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  
  // En una implementación real, aquí se haría una llamada a la API
  const team = MOCK_TEAM // Usar el ID para obtener el equipo correcto

  const handleJoinTeam = () => {
    navigate(`/join-as-player?team=${id}`)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1200px] mx-auto px-3 sm:px-6 py-4 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Información principal */}
          <div className="lg:col-span-2 space-y-4">
            <Card className="p-4">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Avatar className="h-16 w-16 sm:h-20 sm:w-20">
                  <AvatarImage src={`https://i.pravatar.cc/150?u=team${id}`} />
                  <AvatarFallback>{team.name[0]}</AvatarFallback>
                </Avatar>
                <div className="text-center sm:text-left">
                  <h1 className="text-xl sm:text-2xl font-bold">{team.name}</h1>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-2">
                    <Badge variant="secondary" className="text-xs">
                      {team.level}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {team.location}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      Desde {team.foundedDate}
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                {team.description}
              </p>
            </Card>

            {/* Estadísticas */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Card className="p-3 text-center">
                <p className="text-2xl font-bold">{team.stats.wins}</p>
                <p className="text-xs text-muted-foreground">Victorias</p>
              </Card>
              <Card className="p-3 text-center">
                <p className="text-2xl font-bold">{team.stats.losses}</p>
                <p className="text-xs text-muted-foreground">Derrotas</p>
              </Card>
              <Card className="p-3 text-center">
                <p className="text-2xl font-bold">{team.stats.tournamentsWon}</p>
                <p className="text-xs text-muted-foreground">Torneos ganados</p>
              </Card>
              <Card className="p-3 text-center">
                <p className="text-2xl font-bold">{team.stats.currentStreak}</p>
                <p className="text-xs text-muted-foreground">Racha actual</p>
              </Card>
            </div>

            {/* Jugadores */}
            <Card className="p-4">
              <h2 className="text-lg font-semibold mb-4">Jugadores</h2>
              <div className="space-y-3">
                {team.players.map((player, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded-lg bg-secondary">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={player.avatar} />
                      <AvatarFallback>{player.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">{player.name}</p>
                          <p className="text-xs text-muted-foreground">{player.position}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs font-medium">#{player.number}</p>
                          <p className="text-xs text-muted-foreground">
                            {player.stats.ppg} PPG
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {team.players.length < 3 && (
                <Button 
                  onClick={handleJoinTeam}
                  className="w-full mt-4 h-7 text-xs bg-[#FFA726] hover:bg-[#FF9800]"
                >
                  <Users className="mr-2 h-3 w-3" />
                  Unirse al equipo
                </Button>
              )}
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Logros */}
            <Card className="p-4">
              <h2 className="text-lg font-semibold mb-4">Logros</h2>
              <div className="space-y-2">
                {team.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Trophy className="h-3 w-3 text-yellow-500 flex-shrink-0" />
                    <p className="text-xs">{achievement}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Próximos torneos */}
            <Card className="p-4">
              <h2 className="text-lg font-semibold mb-4">Próximos torneos</h2>
              <div className="space-y-3">
                {team.upcomingTournaments.map((tournament) => (
                  <div 
                    key={tournament.id}
                    className="p-2 rounded-lg bg-secondary cursor-pointer hover:bg-secondary/80"
                    onClick={() => navigate(`/tournaments/${tournament.id}`)}
                  >
                    <p className="text-sm font-medium">{tournament.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {tournament.date}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {tournament.location}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}