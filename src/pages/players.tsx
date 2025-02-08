import { Button } from "@/components/ui/button"
import { Search, Filter } from "lucide-react"
import PlayerCard from "@/components/blocks/player-card"

export default function PlayersPage() {
  // Datos de ejemplo - esto vendría de tu API/backend
  const players = [
    {
      id: 1,
      name: "David García",
      position: "Base",
      level: "Avanzado",
      rating: 4.8,
      avatar: "/avatars/player1.jpg"
    },
    {
      id: 2,
      name: "Ana Martínez",
      position: "Escolta",
      level: "Intermedio",
      rating: 4.5,
      avatar: "/avatars/player2.jpg"
    },
    {
      id: 3,
      name: "Carlos Ruiz",
      position: "Alero",
      level: "Avanzado",
      rating: 4.9,
      avatar: "/avatars/player3.jpg"
    },
    // Más jugadores aquí
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Jugadores</h1>
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

      {/* Quick Filters */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        <Button variant="outline" size="sm">Todos</Button>
        <Button variant="outline" size="sm">Base</Button>
        <Button variant="outline" size="sm">Escolta</Button>
        <Button variant="outline" size="sm">Alero</Button>
        <Button variant="outline" size="sm">Ala-Pívot</Button>
        <Button variant="outline" size="sm">Pívot</Button>
      </div>

      {/* Players Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {players.map((player) => (
          <PlayerCard
            key={player.id}
            {...player}
          />
        ))}
      </div>
    </div>
  )
}