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
  {
    id: "2",
    name: "Hoops Elite",
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=hoops-elite",
    description: "Equipo de 5x5 con experiencia en ligas locales",
    level: "intermediate",
    players: [
      {
        id: "3",
        name: "Miguel Ángel",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=miguel",
        position: "Base",
        level: "intermediate"
      },
      {
        id: "4",
        name: "Laura García",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=laura",
        position: "Alero",
        level: "intermediate"
      },
      {
        id: "5",
        name: "Pablo Sánchez",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=pablo",
        position: "Pívot",
        level: "intermediate"
      }
    ],
    captain: {
      id: "3",
      name: "Miguel Ángel",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=miguel",
      position: "Base",
      level: "intermediate"
    },
    stats: {
      wins: 15,
      losses: 10,
      tournamentsPlayed: 4,
      tournamentsWon: 1
    },
    maxPlayers: 5,
    status: "looking_for_players",
    createdAt: new Date("2023-06-15"),
    updatedAt: new Date("2024-01-20")
  },
  {
    id: "3",
    name: "Rookies United",
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=rookies-united",
    description: "Equipo principiante buscando mejorar y divertirse",
    level: "beginner",
    players: [
      {
        id: "6",
        name: "David López",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
        position: "Escolta",
        level: "beginner"
      },
      {
        id: "7",
        name: "Sara Ruiz",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sara",
        position: "Base",
        level: "beginner"
      }
    ],
    captain: {
      id: "6",
      name: "David López",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
      position: "Escolta",
      level: "beginner"
    },
    stats: {
      wins: 5,
      losses: 8,
      tournamentsPlayed: 2,
      tournamentsWon: 0
    },
    maxPlayers: 3,
    status: "looking_for_players",
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-22")
  },
  {
    id: "4",
    name: "Pro Ballers",
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=pro-ballers",
    description: "Equipo profesional con experiencia en competiciones nacionales",
    level: "pro",
    players: [
      {
        id: "8",
        name: "Javier Martín",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=javier",
        position: "Base",
        level: "pro"
      },
      {
        id: "9",
        name: "Carmen Vega",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=carmen",
        position: "Escolta",
        level: "pro"
      },
      {
        id: "10",
        name: "Roberto Gil",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=roberto",
        position: "Alero",
        level: "pro"
      }
    ],
    captain: {
      id: "8",
      name: "Javier Martín",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=javier",
      position: "Base",
      level: "pro"
    },
    stats: {
      wins: 45,
      losses: 12,
      tournamentsPlayed: 15,
      tournamentsWon: 8
    },
    maxPlayers: 3,
    status: "closed",
    createdAt: new Date("2023-03-15"),
    updatedAt: new Date("2024-01-18")
  }
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