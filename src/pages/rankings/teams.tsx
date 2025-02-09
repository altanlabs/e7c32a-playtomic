import { TeamRankingTable } from "@/components/blocks/team-ranking-table"
import { TeamRankingFilters } from "@/components/blocks/team-ranking-filters"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

// Datos de ejemplo - En una implementación real, esto vendría de una API
const MOCK_TEAMS = [
  {
    id: "1",
    position: 1,
    previousPosition: 1,
    name: "Street Kings",
    logo: "https://i.pravatar.cc/150?u=team1",
    division: "Primera",
    points: 3500,
    gamesPlayed: 45,
    winRate: 88,
    streak: 10,
    members: [
      { name: "Carlos Rodríguez", avatar: "https://i.pravatar.cc/150?u=carlos" },
      { name: "Laura Martínez", avatar: "https://i.pravatar.cc/150?u=laura" },
      { name: "Miguel Ángel", avatar: "https://i.pravatar.cc/150?u=miguel" }
    ],
    tournaments: {
      won: 5,
      played: 6
    }
  },
  {
    id: "2",
    position: 2,
    previousPosition: 3,
    name: "Urban Warriors",
    logo: "https://i.pravatar.cc/150?u=team2",
    division: "Primera",
    points: 3200,
    gamesPlayed: 42,
    winRate: 85,
    streak: 6,
    members: [
      { name: "Ana García", avatar: "https://i.pravatar.cc/150?u=ana" },
      { name: "David López", avatar: "https://i.pravatar.cc/150?u=david" },
      { name: "Sara Pérez", avatar: "https://i.pravatar.cc/150?u=sara" }
    ],
    tournaments: {
      won: 4,
      played: 6
    }
  },
  {
    id: "3",
    position: 3,
    previousPosition: 2,
    name: "Court Masters",
    logo: "https://i.pravatar.cc/150?u=team3",
    division: "Primera",
    points: 3100,
    gamesPlayed: 40,
    winRate: 82,
    streak: -2,
    members: [
      { name: "Juan Martín", avatar: "https://i.pravatar.cc/150?u=juan" },
      { name: "Elena Ruiz", avatar: "https://i.pravatar.cc/150?u=elena" },
      { name: "Pablo Sanz", avatar: "https://i.pravatar.cc/150?u=pablo" }
    ],
    tournaments: {
      won: 3,
      played: 5
    }
  }
]

export default function TeamRankingsPage() {
  const [filters, setFilters] = useState({})
  const [teams] = useState(MOCK_TEAMS)
  const navigate = useNavigate()

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters)
    // Aquí iría la lógica de filtrado real
    console.log("Aplicando filtros:", newFilters)
  }

  const handleTeamClick = (teamId: string) => {
    navigate(`/teams/${teamId}`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        {/* Encabezado */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Ranking de equipos</h1>
          <p className="text-muted-foreground">
            Clasificación de equipos 3x3 basada en rendimiento y torneos
          </p>
        </div>

        {/* Top 3 destacado */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teams.slice(0, 3).map((team, index) => (
            <div 
              key={team.id}
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
                    src={team.logo} 
                    alt={team.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg">{team.name}</h3>
                <p className="text-muted-foreground">{team.division}</p>
              </div>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div>
                  <p className="font-bold text-2xl">{team.points}</p>
                  <p className="text-muted-foreground">Puntos</p>
                </div>
                <div>
                  <p className="font-bold text-2xl">{team.tournaments.won}</p>
                  <p className="text-muted-foreground">Torneos</p>
                </div>
                <div>
                  <p className="font-bold text-2xl">{team.winRate}%</p>
                  <p className="text-muted-foreground">Victoria</p>
                </div>
              </div>
              <div className="flex -space-x-2 justify-center">
                {team.members.map((member, i) => (
                  <img
                    key={i}
                    src={member.avatar}
                    alt={member.name}
                    className="w-8 h-8 rounded-full border-2 border-background"
                    title={member.name}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Filtros */}
        <TeamRankingFilters 
          onFilterChange={handleFilterChange}
          totalTeams={teams.length}
        />

        {/* Tabla de ranking */}
        <TeamRankingTable 
          teams={teams.map(team => ({
    id: team.id,
    position: team.position,
    name: team.name,
    avatar: team.logo,
    level: team.division,
    points: team.points,
    wins: Math.round(team.gamesPlayed * (team.winRate / 100)),
    losses: Math.round(team.gamesPlayed * (1 - team.winRate / 100)),
    streak: team.streak.toString(),
    trend: team.position < team.previousPosition ? 'up' : team.position > team.previousPosition ? 'down' : 'same'
  }))}
          onTeamClick={handleTeamClick}
        />

        {/* Información adicional */}
        <div className="bg-muted p-4 rounded-lg text-sm text-muted-foreground">
          <h3 className="font-semibold mb-2">Sistema de divisiones y puntos</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Primera División: Equipos con más de 3000 puntos</li>
            <li>Segunda División: Equipos entre 2000 y 3000 puntos</li>
            <li>Tercera División: Equipos con menos de 2000 puntos</li>
            <li>Los puntos se obtienen por victorias y torneos ganados</li>
            <li>Ascensos y descensos al final de cada temporada</li>
          </ul>
        </div>
      </div>
    </div>
  )
}