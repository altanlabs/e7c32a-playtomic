import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useSearchParams, useNavigate } from "react-router-dom"
import { Users, Trophy, Star } from "lucide-react"

interface Player {
  name: string
  position: string
  avatar: string
}

interface Team {
  id: number
  name: string
  level: string
  wins: number
  losses: number
  players: Player[]
}

interface TournamentTeams {
  [key: string]: Team[]
}

// Mock data - En una implementación real, esto vendría de una API
const MOCK_TEAMS: TournamentTeams = {
  "1": [ // ID del torneo
    {
      id: 1,
      name: "Los Invencibles",
      level: "Avanzado",
      wins: 15,
      losses: 3,
      players: [
        { 
          name: "Juan Pérez", 
          position: "Base",
          avatar: "https://i.pravatar.cc/150?u=juan"
        },
        { 
          name: "Ana García", 
          position: "Alero",
          avatar: "https://i.pravatar.cc/150?u=ana"
        },
        { 
          name: "Carlos López", 
          position: "Pívot",
          avatar: "https://i.pravatar.cc/150?u=carlos"
        },
      ],
    },
    {
      id: 2,
      name: "Street Warriors",
      level: "Intermedio",
      wins: 12,
      losses: 6,
      players: [
        { 
          name: "María Rodríguez", 
          position: "Base",
          avatar: "https://i.pravatar.cc/150?u=maria"
        },
        { 
          name: "Pedro Sánchez", 
          position: "Alero",
          avatar: "https://i.pravatar.cc/150?u=pedro"
        },
      ],
    },
  ],
  "2": [ // ID del torneo
    {
      id: 3,
      name: "Rookies",
      level: "Principiante",
      wins: 8,
      losses: 10,
      players: [
        { 
          name: "Luis Torres", 
          position: "Base",
          avatar: "https://i.pravatar.cc/150?u=luis"
        },
        { 
          name: "Sara Martín", 
          position: "Alero",
          avatar: "https://i.pravatar.cc/150?u=sara"
        },
      ],
    }
  ]
}

export default function TeamsPage() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const tournamentId = searchParams.get("tournament") || "1"
  const teams = MOCK_TEAMS[tournamentId] || []

  const handleCreateTeam = () => {
    navigate(`/teams/create?tournament=${tournamentId}`)
  }

  const handleJoinTeam = (teamId: number) => {
    navigate(`/join-as-player?tournament=${tournamentId}&team=${teamId}`)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1200px] mx-auto px-3 sm:px-6 py-4 sm:py-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Encabezado */}
          <div className="w-full text-center max-w-xl mx-auto">
            <h1 className="text-xl sm:text-2xl font-bold mb-2">Equipos del torneo</h1>
            <p className="text-xs sm:text-sm text-muted-foreground mb-4">
              {teams.length} equipos participantes
            </p>
            <Button 
              onClick={handleCreateTeam}
              className="h-7 text-xs px-3 bg-[#FFA726] hover:bg-[#FF9800]"
            >
              <Users className="mr-2 h-3 w-3" />
              Crear equipo
            </Button>
          </div>

          {/* Lista de equipos */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {teams.map((team: Team) => (
              <Card key={team.id} className="w-full max-w-sm mx-auto p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h2 className="text-base sm:text-lg font-semibold">{team.name}</h2>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary" className="text-xs">{team.level}</Badge>
                      <span className="text-xs text-muted-foreground">
                        {team.wins}W - {team.losses}L
                      </span>
                    </div>
                  </div>
                  {team.wins > 10 && (
                    <Badge variant="default" className="bg-yellow-500 text-xs">
                      <Star className="h-3 w-3 mr-1" />
                      Top Team
                    </Badge>
                  )}
                </div>

                <div className="space-y-3">
                  <div className="space-y-2">
                    {team.players.map((player: Player, index: number) => (
                      <div key={index} className="flex items-center gap-2 p-2 rounded-lg bg-secondary">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={player.avatar} />
                          <AvatarFallback className="text-xs">{player.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{player.name}</p>
                          <p className="text-xs text-muted-foreground">{player.position}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {team.players.length < 3 && (
                    <Button 
                      variant="outline"
                      onClick={() => handleJoinTeam(team.id)}
                      className="w-full h-7 text-xs"
                    >
                      <Users className="mr-2 h-3 w-3" />
                      Unirse al equipo
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}