import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Trophy, Star, ArrowUp, ArrowDown, Minus } from "lucide-react"
import { useState } from "react"

// Mock data - En una implementación real, esto vendría de una API
const MOCK_RANKINGS = [
  {
    id: 1,
    name: "Los Invencibles",
    points: 45,
    wins: 15,
    losses: 3,
    streak: "W3",
    trend: "up",
    level: "Avanzado",
    avatar: "https://i.pravatar.cc/150?u=team1"
  },
  {
    id: 2,
    name: "Street Warriors",
    points: 36,
    wins: 12,
    losses: 6,
    streak: "W1",
    trend: "down",
    level: "Intermedio",
    avatar: "https://i.pravatar.cc/150?u=team2"
  },
  {
    id: 3,
    name: "Rookies",
    points: 24,
    wins: 8,
    losses: 10,
    streak: "L2",
    trend: "same",
    level: "Principiante",
    avatar: "https://i.pravatar.cc/150?u=team3"
  }
]

export default function RankingsPage() {
  const [filter, setFilter] = useState("all")
  const [timeRange, setTimeRange] = useState("season")

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <ArrowUp className="h-3 w-3 text-green-500" />
      case "down":
        return <ArrowDown className="h-3 w-3 text-red-500" />
      default:
        return <Minus className="h-3 w-3 text-gray-500" />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1200px] mx-auto px-3 sm:px-6 py-4 sm:py-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Encabezado */}
          <div className="w-full text-center max-w-xl mx-auto">
            <h1 className="text-xl sm:text-2xl font-bold mb-2">Clasificación</h1>
            <p className="text-xs sm:text-sm text-muted-foreground mb-4">
              Ranking de equipos por rendimiento
            </p>
          </div>

          {/* Filtros */}
          <div className="w-full max-w-md mx-auto flex flex-col sm:flex-row gap-2 px-2">
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="h-8 text-xs">
                <SelectValue placeholder="Filtrar por nivel" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los niveles</SelectItem>
                <SelectItem value="principiante">Principiante</SelectItem>
                <SelectItem value="intermedio">Intermedio</SelectItem>
                <SelectItem value="avanzado">Avanzado</SelectItem>
              </SelectContent>
            </Select>

            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="h-8 text-xs">
                <SelectValue placeholder="Periodo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="season">Temporada actual</SelectItem>
                <SelectItem value="month">Último mes</SelectItem>
                <SelectItem value="week">Última semana</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Tabla de clasificación */}
          <div className="w-full max-w-3xl mx-auto">
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="text-xs font-medium text-left p-2 pl-4">Pos</th>
                      <th className="text-xs font-medium text-left p-2">Equipo</th>
                      <th className="text-xs font-medium text-center p-2">PTS</th>
                      <th className="text-xs font-medium text-center p-2 hidden sm:table-cell">V-D</th>
                      <th className="text-xs font-medium text-center p-2 hidden sm:table-cell">Racha</th>
                      <th className="text-xs font-medium text-center p-2">Tend.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {MOCK_RANKINGS.map((team, index) => (
                      <tr key={team.id} className="border-b last:border-0 hover:bg-muted/50">
                        <td className="text-xs p-2 pl-4">
                          {index + 1}
                          {index === 0 && (
                            <Trophy className="h-3 w-3 text-yellow-500 inline ml-1" />
                          )}
                        </td>
                        <td className="p-2">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src={team.avatar} />
                              <AvatarFallback>{team.name[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-xs font-medium">{team.name}</p>
                              <Badge variant="secondary" className="text-[10px] mt-0.5">
                                {team.level}
                              </Badge>
                            </div>
                          </div>
                        </td>
                        <td className="text-xs text-center p-2 font-medium">
                          {team.points}
                        </td>
                        <td className="text-xs text-center p-2 hidden sm:table-cell">
                          {team.wins}-{team.losses}
                        </td>
                        <td className="text-xs text-center p-2 hidden sm:table-cell">
                          {team.streak}
                        </td>
                        <td className="text-xs text-center p-2">
                          {getTrendIcon(team.trend)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          {/* Leyenda */}
          <div className="text-xs text-muted-foreground flex flex-wrap justify-center gap-4">
            <span className="flex items-center gap-1">
              <Trophy className="h-3 w-3 text-yellow-500" /> Líder
            </span>
            <span className="flex items-center gap-1">
              <ArrowUp className="h-3 w-3 text-green-500" /> Subiendo
            </span>
            <span className="flex items-center gap-1">
              <ArrowDown className="h-3 w-3 text-red-500" /> Bajando
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}