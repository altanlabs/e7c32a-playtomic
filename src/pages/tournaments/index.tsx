import { Button } from "@/components/ui/button"
import { Search, Filter } from "lucide-react"
import { Link } from "react-router-dom"
import TournamentCard from "@/components/TournamentCard"

export default function TournamentsPage() {
  const tournaments = [
    {
      id: 1,
      name: "Liga 3x3 Barcelona",
      date: "15-20 Marzo 2024",
      location: "Barcelona",
      teams: "16/32",
      price: "150",
    },
    {
      id: 2,
      name: "Torneo Verano Madrid",
      date: "1-5 Julio 2024",
      location: "Madrid",
      teams: "8/16",
      price: "100",
    },
    // Más torneos aquí
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Torneos</h1>
        <Link to="/tournaments/create">
          <Button className="bg-[#FFA726] hover:bg-[#FF9800]">
            Crear torneo
          </Button>
        </Link>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-wrap gap-4 mb-8">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar torneos..."
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
        <Button variant="outline" size="sm">Próximos</Button>
        <Button variant="outline" size="sm">Este mes</Button>
        <Button variant="outline" size="sm">Con plazas</Button>
      </div>

      {/* Tournaments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tournaments.map((tournament) => (
          <TournamentCard
            key={tournament.id}
            {...tournament}
          />
        ))}
      </div>
    </div>
  )
}