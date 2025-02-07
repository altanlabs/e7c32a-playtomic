import { RankingTable } from "@/components/blocks/ranking-table"
import { RankingFilters } from "@/components/blocks/ranking-filters"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

// Datos de ejemplo - En una implementación real, esto vendría de una API
const MOCK_PLAYERS = [
  {
    id: "1",
    position: 1,
    previousPosition: 1,
    name: "Carlos Rodríguez",
    avatar: "https://i.pravatar.cc/150?u=carlos",
    level: "Pro",
    points: 2500,
    gamesPlayed: 150,
    winRate: 85,
    streak: 8
  },
  {
    id: "2",
    position: 2,
    previousPosition: 3,
    name: "Laura Martínez",
    avatar: "https://i.pravatar.cc/150?u=laura",
    level: "Elite",
    points: 2350,
    gamesPlayed: 130,
    winRate: 82,
    streak: 5
  },
  {
    id: "3",
    position: 3,
    previousPosition: 2,
    name: "Miguel Ángel",
    avatar: "https://i.pravatar.cc/150?u=miguel",
    level: "Pro",
    points: 2200,
    gamesPlayed: 140,
    winRate: 80,
    streak: -2
  },
  {
    id: "4",
    position: 4,
    previousPosition: 6,
    name: "Ana García",
    avatar: "https://i.pravatar.cc/150?u=ana",
    level: "Elite",
    points: 2100,
    gamesPlayed: 120,
    winRate: 78,
    streak: 3
  },
  {
    id: "5",
    position: 5,
    previousPosition: 4,
    name: "David López",
    avatar: "https://i.pravatar.cc/150?u=david",
    level: "Avanzado",
    points: 1950,
    gamesPlayed: 110,
    winRate: 75,
    streak: 0
  }
]

export default function RankingsPage() {
  const [filters, setFilters] = useState({})
  const [players] = useState(MOCK_PLAYERS)
  const navigate = useNavigate()

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters)
    // Aquí iría la lógica de filtrado real
    console.log("Aplicando filtros:", newFilters)
  }

  const handlePlayerClick = (playerId: string) => {
    navigate(`/players/${playerId}`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        {/* Encabezado */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Ranking de jugadores</h1>
          <p className="text-muted-foreground">
            Clasificación basada en rendimiento y victorias en partidos 3x3
          </p>
        </div>

        {/* Top 3 destacado */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {players.slice(0, 3).map((player, index) => (
            <div 
              key={player.id}
              className="bg-card p-6 rounded-lg border text-center space-y-4"
            >
              <div className="relative inline-block">
                <div className={`
                  absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center
                  ${index === 0 ? 'bg-yellow-500' : 
                    index === 1 ? 'bg-gray-400' : 
                    'bg-amber-600'} text-white font-bold
                `}>
                  #{index + 1}
                </div>
                <div className="w-24 h-24 mx-auto">
                  <img 
                    src={player.avatar} 
                    alt={player.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg">{player.name}</h3>
                <p className="text-muted-foreground">{player.level}</p>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="font-bold text-2xl">{player.points}</p>
                  <p className="text-muted-foreground">Puntos</p>
                </div>
                <div>
                  <p className="font-bold text-2xl">{player.winRate}%</p>
                  <p className="text-muted-foreground">Victoria</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Filtros */}
        <RankingFilters 
          onFilterChange={handleFilterChange}
          totalPlayers={players.length}
        />

        {/* Tabla de ranking */}
        <RankingTable 
          players={players}
          onPlayerClick={handlePlayerClick}
        />

        {/* Información adicional */}
        <div className="bg-muted p-4 rounded-lg text-sm text-muted-foreground">
          <h3 className="font-semibold mb-2">¿Cómo funciona el ranking?</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Los puntos se obtienen en base a victorias y nivel de los oponentes</li>
            <li>El ranking se actualiza después de cada partido oficial</li>
            <li>Las rachas positivas otorgan puntos adicionales</li>
            <li>Se requiere un mínimo de 10 partidos para aparecer en el ranking</li>
          </ul>
        </div>
      </div>
    </div>
  )
}