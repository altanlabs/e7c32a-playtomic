import { Button } from "@/components/ui/button"
import { Search, Filter } from "lucide-react"
import PlayerCard from "@/components/blocks/player-card"

export default function PlayersPage() {
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
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-[#0A0F1C] py-12 mb-6">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Jugadores
            </h1>
            <p className="text-muted-foreground text-lg mb-6">
              Encuentra jugadores para tus partidos
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <input
                type="text"
                placeholder="Buscar jugadores..."
                className="w-full pl-12 pr-4 py-3 rounded-full border bg-background/95 text-base"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Filters */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 no-scrollbar">
            <Button variant="outline" size="sm" className="whitespace-nowrap rounded-full">
              Todos
            </Button>
            <Button variant="outline" size="sm" className="whitespace-nowrap rounded-full">
              Base
            </Button>
            <Button variant="outline" size="sm" className="whitespace-nowrap rounded-full">
              Escolta
            </Button>
            <Button variant="outline" size="sm" className="whitespace-nowrap rounded-full">
              Alero
            </Button>
            <Button variant="outline" size="sm" className="whitespace-nowrap rounded-full">
              Ala-Pívot
            </Button>
            <Button variant="outline" size="sm" className="whitespace-nowrap rounded-full">
              Pívot
            </Button>
          </div>
          <Button variant="outline" size="icon" className="ml-2 flex-shrink-0">
            <Filter className="h-4 w-4" />
          </Button>
        </div>

        {/* Players Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {players.map((player) => (
            <PlayerCard
              key={player.id}
              {...player}
            />
          ))}
        </div>
      </div>
    </div>
  )
}