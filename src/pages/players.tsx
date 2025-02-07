import { PlayerCard } from "@/components/blocks/player-card"
import { PlayerFilters } from "@/components/blocks/player-filters"
import { useState } from "react"

// Datos de ejemplo - En una implementación real, esto vendría de una API
const MOCK_PLAYERS = [
  {
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

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters)
    // Aquí iría la lógica de filtrado real
    console.log("Aplicando filtros:", newFilters)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        {/* Encabezado */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Encuentra jugadores</h1>
          <p className="text-muted-foreground">
            Busca jugadores disponibles para completar tu equipo de 3x3
          </p>
        </div>

        {/* Filtros */}
        <PlayerFilters onFilterChange={handleFilterChange} />

        {/* Lista de jugadores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {players.map((player) => (
            <PlayerCard key={player.name} {...player} />
          ))}
        </div>

        {/* Estado de búsqueda */}
        <div className="text-center text-muted-foreground">
          Mostrando {players.length} jugadores disponibles
        </div>
      </div>
    </div>
  )
}