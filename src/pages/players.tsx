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
    {
      id: 4,
      name: "Laura Sánchez",
      position: "Base",
      level: "Intermedio",
      rating: 4.7,
      avatar: "/avatars/player4.jpg"
    },
    {
      id: 5,
      name: "Miguel Torres",
      position: "Pívot",
      level: "Avanzado",
      rating: 4.6,
      avatar: "/avatars/player5.jpg"
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-[#0A0F1C] py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h1 className="text-2xl sm:text-4xl font-bold mb-3">
              Jugadores
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg mb-4">
              Encuentra jugadores para tus partidos
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filters Section - Fixed below hero */}
      <div className="sticky top-0 z-10 bg-[#0A0F1C] shadow-lg">
        <div className="container mx-auto px-4 py-4">
          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <input
              type="text"
              placeholder="Buscar jugadores..."
              className="w-full pl-12 pr-4 py-3 rounded-full border bg-background/95 text-base"
            />
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2">
            <div className="flex-1 overflow-x-auto no-scrollbar">
              <div className="flex gap-2 pb-1">
                <Button variant="outline" size="sm" className="flex-none whitespace-nowrap rounded-full bg-background/10 hover:bg-background/20 border-none">
                  Todos
                </Button>
                <Button variant="outline" size="sm" className="flex-none whitespace-nowrap rounded-full bg-background/10 hover:bg-background/20 border-none">
                  Base
                </Button>
                <Button variant="outline" size="sm" className="flex-none whitespace-nowrap rounded-full bg-background/10 hover:bg-background/20 border-none">
                  Escolta
                </Button>
                <Button variant="outline" size="sm" className="flex-none whitespace-nowrap rounded-full bg-background/10 hover:bg-background/20 border-none">
                  Alero
                </Button>
                <Button variant="outline" size="sm" className="flex-none whitespace-nowrap rounded-full bg-background/10 hover:bg-background/20 border-none">
                  Ala-Pívot
                </Button>
                <Button variant="outline" size="sm" className="flex-none whitespace-nowrap rounded-full bg-background/10 hover:bg-background/20 border-none">
                  Pívot
                </Button>
              </div>
            </div>
            <Button variant="outline" size="icon" className="flex-none rounded-full bg-background/10 hover:bg-background/20 border-none">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Players List */}
      <div className="container mx-auto py-6">
        <div className="max-w-sm mx-auto space-y-3 px-8">
          {players.map((player) => (
            <div key={player.id} className="w-full">
              <PlayerCard {...player} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}