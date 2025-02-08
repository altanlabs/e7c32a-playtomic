import { TournamentCard } from "@/components/blocks/tournament-card"
import { TournamentFilters } from "@/components/blocks/tournament-filters"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

// Datos de ejemplo - En una implementación real, esto vendría de una API
const MOCK_TOURNAMENTS = [
  {
    id: "1",
    name: "Torneo Verano 3x3",
    clubName: "Club Deportivo Central",
    location: "Pista Central - Madrid",
    date: "15 de Julio, 2024",
    price: 60,
    prizePool: "1000€ + Trofeos",
    maxTeams: 16,
    registeredTeams: 10,
    registrationType: "team",
    level: "Avanzado",
    image: "https://images.unsplash.com/photo-1544919982-b61976f0ba43?q=80&w=1476&auto=format&fit=crop"
  },
  {
    id: "2",
    name: "Liga Amateur 3x3",
    clubName: "Urban Court Downtown",
    location: "Plaza del Deporte - Barcelona",
    date: "Todos los Sábados",
    price: 40,
    prizePool: "500€ por jornada",
    maxTeams: 24,
    registeredTeams: 15,
    registrationType: "individual",
    level: "Intermedio",
    image: "https://images.unsplash.com/photo-1544919982-b61976f0ba43?q=80&w=1476&auto=format&fit=crop"
  },
  {
    id: "3",
    name: "Torneo Nocturno",
    clubName: "The Cage",
    location: "Complejo Deportivo Sur - Valencia",
    date: "22 de Agosto, 2024",
    price: 75,
    prizePool: "1500€ + Equipamiento",
    maxTeams: 12,
    registeredTeams: 8,
    registrationType: "team",
    level: "Pro",
    image: "https://images.unsplash.com/photo-1544919982-b61976f0ba43?q=80&w=1476&auto=format&fit=crop"
  }
] as const

export default function TournamentsPage() {
  const navigate = useNavigate()
  const [filters, setFilters] = useState({})
  const [tournaments] = useState(MOCK_TOURNAMENTS)

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters)
    // Aquí iría la lógica de filtrado real
    console.log("Aplicando filtros:", newFilters)
  }

  const handleCreateTournament = () => {
    navigate("/publicar-evento")
  }

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="space-y-6 sm:space-y-8">
        {/* Encabezado */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">Torneos</h1>
            <p className="text-muted-foreground">
              Encuentra y participa en torneos 3x3 cerca de ti
            </p>
          </div>
          <Button 
            onClick={handleCreateTournament}
            className="w-full sm:w-auto"
          >
            <PlusCircle className="mr-2 h-4 w-4" />
            Organizar torneo
          </Button>
        </div>

        {/* Filtros */}
        <div className="w-full max-w-3xl mx-auto">
          <TournamentFilters onFilterChange={handleFilterChange} />
        </div>

        {/* Lista de torneos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {tournaments.map((tournament) => (
            <div key={tournament.id} className="flex justify-center">
              <div className="w-full max-w-md">
                <TournamentCard {...tournament} />
              </div>
            </div>
          ))}
        </div>

        {/* Estado de búsqueda */}
        <div className="text-center text-muted-foreground py-4">
          Mostrando {tournaments.length} torneos disponibles
        </div>
      </div>
    </div>
  )
}