import { PlayerCard } from "@/components/blocks/player-card"
import { PlayerFilters } from "@/components/blocks/player-filters"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"
import { useState } from "react"

// Datos de ejemplo - En una implementación real, esto vendría de una API
const MOCK_PLAYERS = [
  {
    id: "1",
    name: "Carlos Rodríguez",
    avatar: "https://i.pravatar.cc/150?u=carlos",
    position: "Base",
    level: "Avanzado",
    rating: 4.8,
    availability: ["Tardes", "Fines de semana"],
    stats: {
      games: 45,
      winRate: 72
    }
  },
  {
    id: "2",
    name: "Laura Martínez",
    avatar: "https://i.pravatar.cc/150?u=laura",
    position: "Escolta",
    level: "Intermedio",
    rating: 4.5,
    availability: ["Noches", "Fines de semana"],
    stats: {
      games: 32,
      winRate: 65
    }
  },
  {
    id: "3",
    name: "Miguel Ángel",
    avatar: "https://i.pravatar.cc/150?u=miguel",
    position: "Alero",
    level: "Avanzado",
    rating: 4.9,
    availability: ["Mañanas", "Tardes"],
    stats: {
      games: 58,
      winRate: 80
    }
  },
  {
    id: "4",
    name: "Ana García",
    avatar: "https://i.pravatar.cc/150?u=ana",
    position: "Base",
    level: "Principiante",
    rating: 4.2,
    availability: ["Fines de semana"],
    stats: {
      games: 15,
      winRate: 53
    }
  }
]

export default function PlayersPage() {
  const [filters, setFilters] = useState({})
  const [players] = useState(MOCK_PLAYERS)
  const [searchTerm, setSearchTerm] = useState("")

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters)
    // Aquí iría la lógica de filtrado real
    console.log("Aplicando filtros:", newFilters)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1200px] mx-auto px-3 py-4">
        {/* Hero Section */}
        <div className="relative h-[250px] rounded-2xl overflow-hidden mb-8">
          <img
            src="https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?q=80&w=1000&auto=format&fit=crop"
            alt="Basketball Players"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">
                Encuentra jugadores
              </h1>
              <p className="text-xl text-gray-300">
                Conecta con jugadores de baloncesto 3x3 cerca de ti
              </p>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="space-y-4 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative col-span-2">
              <Input
                placeholder="Buscar jugadores..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-6"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
            <div className="flex gap-4">
              <PlayerFilters onFilterChange={handleFilterChange} />
              <Button variant="outline" size="icon">
                <Filter className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Players Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {players
            .filter(player => 
              player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              player.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
              player.level.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((player) => (
              <PlayerCard key={player.id} {...player} />
            ))
          }
        </div>

        {/* Results Status */}
        <div className="text-center text-sm text-muted-foreground mt-8">
          Mostrando {players.length} jugadores disponibles
        </div>
      </div>
    </div>
  )
}