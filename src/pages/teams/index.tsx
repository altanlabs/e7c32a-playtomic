import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useSearchParams, useNavigate } from "react-router-dom"
import { Users, Trophy, Star } from "lucide-react"

// Mock data - En una implementación real, esto vendría de una API
const MOCK_TEAMS = {
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
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-2">Equipos del torneo</h1>
          <p className="text-muted-foreground">
            {teams.length} equipos participantes
          </p>
        </div>
        <Button 
          onClick={handleCreateTeam}
          className="bg-[#FFA726] hover:bg-[#FF9800]"
        >
          <Users className="mr-2 h-4 w-4" />
          Crear equipo
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.map((team) => (
          <Card key={team.id} className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold">{team.name}</h2>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="secondary">{team.level}</Badge>
                  <span className="text-sm text-muted-foreground">
                    {team.wins}W - {team.losses}L
                  </span>
                </div>
              </div>
              {team.wins > 10 && (
                <Badge variant="default" className="bg-yellow-500">
                  <Star className="h-4 w-4 mr-1" />
                  Top Team
                </Badge>
              )}
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                {team.players.map((player, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded-lg bg-secondary">
                    <Avatar>
                      <AvatarImage src={player.avatar} />
                      <AvatarFallback>{player.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{player.name}</p>
                      <p className="text-sm text-muted-foreground">{player.position}</p>
                    </div>
                  </div>
                ))}
              </div>

              {team.players.length < 3 && (
                <Button 
                  className="w-full"
                  variant="outline"
                  onClick={() => handleJoinTeam(team.id)}
                >
                  <Users className="mr-2 h-4 w-4" />
                  Unirse al equipo
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}