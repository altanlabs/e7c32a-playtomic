import { useState } from "react"
import { useParams } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Trophy,
  Users,
  Star,
  ChevronLeft,
  UserPlus,
  MessageSquare,
  Share2
} from "lucide-react"
import { Link } from "react-router-dom"
import { Team } from "@/types/team"

// Datos de ejemplo - En una implementación real, esto vendría de una API
const MOCK_TEAM: Team = {
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
      level: "advanced",
      stats: {
        gamesPlayed: 45,
        pointsPerGame: 15.5,
        assistsPerGame: 4.2,
        reboundsPerGame: 3.1
      }
    },
    {
      id: "2",
      name: "Ana Martínez",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ana",
      position: "Escolta",
      level: "advanced",
      stats: {
        gamesPlayed: 42,
        pointsPerGame: 12.8,
        assistsPerGame: 2.5,
        reboundsPerGame: 4.3
      }
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
  achievements: [
    {
      id: "1",
      name: "Campeones Liga Local",
      description: "Ganadores de la liga local de baloncesto 3x3",
      date: "2023",
      icon: "🏆"
    },
    {
      id: "2",
      name: "Subcampeones Torneo Nacional",
      description: "Segundo puesto en el torneo nacional",
      date: "2023",
      icon: "🥈"
    }
  ],
  maxPlayers: 3,
  status: "looking_for_players",
  createdAt: new Date("2023-01-01"),
  updatedAt: new Date("2024-01-15")
}

export default function TeamPage() {
  const { id } = useParams()
  const [team] = useState<Team>(MOCK_TEAM)
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="container py-10">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Navegación */}
        <div className="flex items-center gap-4">
          <Link to="/teams">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{team.name}</h1>
            <p className="text-muted-foreground">
              Equipo de baloncesto 3x3
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <MessageSquare className="h-4 w-4" />
            </Button>
            {team.status === "looking_for_players" && (
              <Button className="bg-[#FFA726] hover:bg-[#FF9800]">
                <UserPlus className="h-4 w-4 mr-2" />
                Unirse al equipo
              </Button>
            )}
          </div>
        </div>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Barra lateral */}
          <div className="space-y-6">
            {/* Tarjeta del equipo */}
            <Card>
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <Avatar className="w-24 h-24 mx-auto">
                    <AvatarImage src={team.logo} />
                    <AvatarFallback>{team.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-xl font-bold">{team.name}</h2>
                    <p className="text-sm text-muted-foreground">
                      Creado en {team.createdAt.getFullYear()}
                    </p>
                  </div>
                  <div className="flex justify-center gap-2">
                    <Badge variant="secondary">
                      {team.maxPlayers} jugadores
                    </Badge>
                    <Badge variant="secondary">
                      Nivel {team.level}
                    </Badge>
                  </div>
                  {team.description && (
                    <p className="text-sm text-muted-foreground">
                      {team.description}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Estadísticas */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Estadísticas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <p className="text-2xl font-bold">{team.stats?.wins}</p>
                    <p className="text-sm text-muted-foreground">Victorias</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <p className="text-2xl font-bold">{team.stats?.losses}</p>
                    <p className="text-sm text-muted-foreground">Derrotas</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <p className="text-2xl font-bold">{team.stats?.tournamentsPlayed}</p>
                    <p className="text-sm text-muted-foreground">Torneos jugados</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <p className="text-2xl font-bold">{team.stats?.tournamentsWon}</p>
                    <p className="text-sm text-muted-foreground">Torneos ganados</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contenido principal */}
          <div className="lg:col-span-2 space-y-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="overview">
                  <Users className="h-4 w-4 mr-2" />
                  Jugadores
                </TabsTrigger>
                <TabsTrigger value="achievements">
                  <Trophy className="h-4 w-4 mr-2" />
                  Logros
                </TabsTrigger>
                <TabsTrigger value="stats">
                  <Star className="h-4 w-4 mr-2" />
                  Estadísticas
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                {/* Lista de jugadores */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Jugadores del equipo</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {team.players.map((player) => (
                        <div
                          key={player.id}
                          className="flex items-center justify-between p-4 rounded-lg bg-muted"
                        >
                          <div className="flex items-center gap-4">
                            <Avatar>
                              <AvatarImage src={player.avatar} />
                              <AvatarFallback>{player.name[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{player.name}</p>
                              <p className="text-sm text-muted-foreground">
                                {player.position}
                              </p>
                            </div>
                          </div>
                          {player.id === team.captain.id && (
                            <Badge>Capitán</Badge>
                          )}
                        </div>
                      ))}

                      {/* Espacios vacíos */}
                      {team.players.length < team.maxPlayers && (
                        <div className="p-4 rounded-lg border-2 border-dashed text-center">
                          <p className="text-muted-foreground">
                            {team.maxPlayers - team.players.length} plaza(s) disponible(s)
                          </p>
                          {team.status === "looking_for_players" && (
                            <Button variant="link" className="mt-2">
                              <UserPlus className="h-4 w-4 mr-2" />
                              Unirse al equipo
                            </Button>
                          )}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="achievements">
                {/* Logros del equipo */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Logros conseguidos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {team.achievements?.map((achievement) => (
                        <div
                          key={achievement.id}
                          className="flex items-start gap-4 p-4 rounded-lg bg-muted"
                        >
                          <div className="text-2xl">{achievement.icon}</div>
                          <div>
                            <p className="font-medium">{achievement.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {achievement.description}
                            </p>
                            <p className="text-sm text-muted-foreground mt-1">
                              {achievement.date}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="stats">
                {/* Estadísticas detalladas */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Estadísticas del equipo</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {team.players.map((player) => (
                        <div key={player.id} className="space-y-4">
                          <div className="flex items-center gap-4">
                            <Avatar>
                              <AvatarImage src={player.avatar} />
                              <AvatarFallback>{player.name[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{player.name}</p>
                              <p className="text-sm text-muted-foreground">
                                {player.position}
                              </p>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="p-4 rounded-lg bg-muted text-center">
                              <p className="text-2xl font-bold">
                                {player.stats?.pointsPerGame}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                Puntos por partido
                              </p>
                            </div>
                            <div className="p-4 rounded-lg bg-muted text-center">
                              <p className="text-2xl font-bold">
                                {player.stats?.assistsPerGame}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                Asistencias por partido
                              </p>
                            </div>
                            <div className="p-4 rounded-lg bg-muted text-center">
                              <p className="text-2xl font-bold">
                                {player.stats?.reboundsPerGame}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                Rebotes por partido
                              </p>
                            </div>
                            <div className="p-4 rounded-lg bg-muted text-center">
                              <p className="text-2xl font-bold">
                                {player.stats?.gamesPlayed}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                Partidos jugados
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}