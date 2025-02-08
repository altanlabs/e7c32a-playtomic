import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Search, Filter, Trophy } from "lucide-react"

export default function RankingsPage() {
  const rankings = [
    {
      position: 1,
      name: "Carlos García",
      points: 2500,
      matches: 45,
      winRate: "78%"
    },
    {
      position: 2,
      name: "Laura Martínez",
      points: 2350,
      matches: 42,
      winRate: "75%"
    },
    // Añade más jugadores aquí
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Rankings</h1>
        <div className="flex gap-4">
          <Button variant="outline" className="flex items-center gap-2">
            <Trophy className="h-4 w-4" />
            Temporada actual
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-wrap gap-4 mb-8">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar jugadores..."
              className="w-full pl-10 p-2 rounded-md border bg-background"
            />
          </div>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filtros
        </Button>
      </div>

      {/* Rankings Table */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted">
              <tr>
                <th className="px-4 py-3 text-left">Pos.</th>
                <th className="px-4 py-3 text-left">Jugador</th>
                <th className="px-4 py-3 text-right">Puntos</th>
                <th className="px-4 py-3 text-right">Partidos</th>
                <th className="px-4 py-3 text-right">% Victoria</th>
              </tr>
            </thead>
            <tbody>
              {rankings.map((player) => (
                <tr key={player.position} className="border-t">
                  <td className="px-4 py-3">
                    <span className={`
                      font-bold
                      ${player.position === 1 ? 'text-[#FFD700]' : ''}
                      ${player.position === 2 ? 'text-[#C0C0C0]' : ''}
                      ${player.position === 3 ? 'text-[#CD7F32]' : ''}
                    `}>
                      #{player.position}
                    </span>
                  </td>
                  <td className="px-4 py-3">{player.name}</td>
                  <td className="px-4 py-3 text-right">{player.points}</td>
                  <td className="px-4 py-3 text-right">{player.matches}</td>
                  <td className="px-4 py-3 text-right">{player.winRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}