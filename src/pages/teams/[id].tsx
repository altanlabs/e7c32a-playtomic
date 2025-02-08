import { useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, Trophy, Users, Star, Mail } from "lucide-react"
import { toast } from "sonner"
import { Team } from "@/types/team"

// Datos de ejemplo - En una implementación real, esto vendría de una API
const MOCK_TEAM: Team = {
  id: "1",
  name: "Street Warriors",
  logo: "https://api.dicebear.com/7.x/shapes/svg?seed=street-warriors",
  description: "Equipo competitivo de baloncesto 3x3 buscando nuevos desafíos. Participamos en torneos locales y buscamos jugadores comprometidos para crecer juntos.",
  level: "advanced",
  players: [
    {
      id: "1",
      name: "Carlos Rodríguez",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=carlos",
      position: "Base",
      level: "advanced"
    },
    {
      id: "2",
      name: "Ana Martínez",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ana",
      position: "Escolta",
      level: "advanced"
    }
  ],
  captain: {
    id: "1",
    name: "Carlos Rodríguez",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=carlos",
    position: "Base",
    level: "advanced"
  },
  stats: {
    wins: 28,
    losses: 14,
    tournamentsPlayed: 8,
    tournamentsWon: 2
  },
  maxPlayers: 3,
  status: "looking_for_players",
  createdAt: new Date("2023-01-01"),
  updatedAt: new Date("2024-01-15")
}

export default function TeamDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [isJoining, setIsJoining] = useState(false)
  const [team] = useState<Team>(MOCK_TEAM)

  const handleJoinTeam = async () => {
    setIsJoining(true)
    try {
      // Aquí iría la llamada a la API para unirse al equipo
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulación
      toast.success("Solicitud enviada correctamente")
    } catch (error) {
      toast.error("Error al enviar la solicitud")
    } finally {
      setIsJoining(false)
    }
  }

  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Navegación */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/teams")}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold">Detalle del equipo</h1>
            <p className="text-muted-foreground">
              Información y miembros del equipo
            </p>
          </div>
        </div>

        {/* Información del equipo */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Logo y estadísticas */}
              <div className="w-full md:w-1/3 space-y-4">
                <Avatar className="w-full h-auto aspect-square">
                  <AvatarImage src={team.logo} />
                  <AvatarFallback>{team.name[0]}</AvatarFallback>
                </Avatar>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1 text-center p-4 bg-muted rounded-lg">
                    <p className="text-2xl font-bold">{team.stats.wins}</p>
                    <p className="text-sm text-muted-foreground">Victorias</p>
                  </div>
                  <div className="space-y-1 text-center p-4 bg-muted rounded-lg">
                    <p className="text-2xl font-bold">{team.stats.tournamentsWon}</p>
                    <p className="text-sm text-muted-foreground">Torneos</p>
                  </div>
                </div>
              </div>

              {/* Detalles y acciones */}
              <div className="flex-1 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">{team.name}</h2>
                    {team.status === "looking_for_players" && (
                      <Badge className="bg-[#FFA726] text-white">
                        Buscando jugadores
                      </Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground">
                    {team.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">
                    <Users className="mr-1 h-4 w-4" />
                    {team.players.length}/{team.maxPlayers} jugadores
                  </Badge>
                  <Badge variant="secondary">
                    <Star className="mr-1 h-4 w-4" />
                    Nivel {team.level}
                  </Badge>
                  <Badge variant="secondary">
                    <Trophy className="mr-1 h-4 w-4" />
                    {team.stats.tournamentsWon} torneos ganados
                  </Badge>
                </div>

                {team.status === "looking_for_players" && (
                  <div className="flex gap-4">
                    <Button
                      className="flex-1 bg-[#FFA726] hover:bg-[#FF9800]"
                      onClick={handleJoinTeam}
                      disabled={isJoining}
                    >
                      {isJoining ? "Enviando solicitud..." : "Unirse al equipo"}
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Mail className="mr-2 h-4 w-4" />
                      Contactar capitán
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Miembros del equipo */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Miembros del equipo</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {team.players.map((player) => (
              <Card key={player.id}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={player.avatar} />
                      <AvatarFallback>{player.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">
                        {player.name}
                        {player.id === team.captain.id && (
                          <Badge variant="secondary" className="ml-2">
                            Capitán
                          </Badge>
                        )}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {player.position} · Nivel {player.level}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}