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
      {/* Hero Section with Search and Filters */}
      <div className="relative bg-[#0A0F1C] py-12">
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
          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <input
                type="text"
                placeholder="Buscar jugadores..."
                className="w-full pl-12 pr-4 py-3 rounded-full border bg-background/95 text-base"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="max-w-3xl mx-auto flex items-center justify-center">
            <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 no-scrollbar">
              <Button variant="outline" size="sm" className="whitespace-nowrap rounded-full bg-background/10 hover:bg-background/20 border-none">
                Todos
              </Button>
              <Button variant="outline" size="sm" className="whitespace-nowrap rounded-full bg-background/10 hover:bg-background/20 border-none">
                Base
              </Button>
              <Button variant="outline" size="sm" className="whitespace-nowrap rounded-full bg-background/10 hover:bg-background/20 border-none">
                Escolta
              </Button>
              <Button variant="outline" size="sm" className="whitespace-nowrap rounded-full bg-background/10 hover:bg-background/20 border-none">
                Alero
              </Button>
              <Button variant="outline" size="sm" className="whitespace-nowrap rounded-full bg-background/10 hover:bg-background/20 border-none">
                Ala-Pívot
              </Button>
              <Button variant="outline" size="sm" className="whitespace-nowrap rounded-full bg-background/10 hover:bg-background/20 border-none">
                Pívot
              </Button>
              <Button variant="outline" size="icon" className="rounded-full bg-background/10 hover:bg-background/20 border-none">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Players Grid */}
        <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
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