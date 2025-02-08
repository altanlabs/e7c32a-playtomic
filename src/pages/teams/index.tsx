import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Users, Trophy, PlusCircle } from "lucide-react"
import { Link } from "react-router-dom"
import { Team } from "@/types/team"

// Datos de ejemplo - En una implementación real, esto vendría de una API
const MOCK_TEAMS: Team[] = [
  {
    id: "1",
    name: "Street Warriors",
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=street-warriors",
    description: "Equipo competitivo de baloncesto 3x3 buscando nuevos desafíos",
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
  },
  // Añade más equipos aquí...
]

function TeamCard({ team }: { team: Team }) {
  return (
    <Link to={`/teams/${team.id}`}>
      <Card className="hover:bg-muted/50 transition-colors">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src={team.logo} />
              <AvatarFallback>{team.name[0]}</AvatarFallback>
            </Avatar>
            
            <div className="flex-1 space-y-2">
              <div>
                <h3 className="font-semibold">{team.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {team.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">
                  {team.players.length}/{team.maxPlayers} jugadores
                </Badge>
                <Badge variant="secondary">
                  Nivel {team.level}
                </Badge>
                {team.status === "looking_for_players" && (
                  <Badge variant="secondary" className="bg-[#FFA726] text-white">
                    Buscando jugadores
                  </Badge>
                )}
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Trophy className="h-4 w-4" />
                  <span>{team.stats?.tournamentsWon || 0} torneos ganados</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{team.players.length} miembros</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export default function TeamsPage() {
  const [teams] = useState<Team[]>(MOCK_TEAMS)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredTeams = teams.filter(team =>
    team.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    team.description?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="container py-10">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Encabezado */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold mb-2">Equipos</h1>
            <p className="text-muted-foreground">
              Encuentra tu equipo o crea uno nuevo
            </p>
          </div>
          <Link to="/teams/create">
            <Button className="bg-[#FFA726] hover:bg-[#FF9800]">
              <PlusCircle className="mr-2 h-4 w-4" />
              Crear equipo
            </Button>
          </Link>
        </div>

        {/* Barra de búsqueda */}
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar equipos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Lista de equipos */}
        <div className="space-y-4">
          {filteredTeams.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}

          {filteredTeams.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No se encontraron equipos que coincidan con tu búsqueda
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}