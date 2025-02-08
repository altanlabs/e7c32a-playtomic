import { TournamentCard } from "@/components/blocks/tournament-card"
import { Button } from "@/components/ui/button"
import { PlusCircle, Search } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

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
  const [searchTerm, setSearchTerm] = useState("")
  const [levelFilter, setLevelFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
  const [tournaments] = useState(MOCK_TOURNAMENTS)

  const handleCreateTournament = () => {
    navigate("/publicar-evento")
  }

  const filteredTournaments = tournaments.filter(tournament => {
    const matchesSearch = tournament.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tournament.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLevel = levelFilter === "all" || tournament.level === levelFilter
    const matchesType = typeFilter === "all" || tournament.registrationType === typeFilter
    return matchesSearch && matchesLevel && matchesType
  })

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1200px] mx-auto px-3 py-4">
        <div className="flex flex-col items-center space-y-4">
          {/* Encabezado */}
          <div className="w-full text-center max-w-xl mx-auto">
            <h1 className="text-lg sm:text-2xl font-bold mb-1">Torneos</h1>
            <p className="text-xs sm:text-sm text-muted-foreground mb-3">
              Encuentra y participa en torneos 3x3 cerca de ti
            </p>
            <Button 
              onClick={handleCreateTournament}
              className="h-7 text-xs px-3 bg-[#FFA726] hover:bg-[#FF9800]"
            >
              <PlusCircle className="mr-2 h-3 w-3" />
              Organizar torneo
            </Button>
          </div>

          {/* Filtros */}
          <div className="w-full max-w-3xl space-y-2">
            <div className="relative">
              <Search className="absolute left-2 top-1.5 h-3 w-3 text-muted-foreground" />
              <Input
                placeholder="Buscar torneos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 h-7 text-xs"
              />
            </div>
            <div className="flex gap-2">
              <Select value={levelFilter} onValueChange={setLevelFilter}>
                <SelectTrigger className="h-7 text-xs flex-1">
                  <SelectValue placeholder="Nivel" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos los niveles</SelectItem>
                  <SelectItem value="Principiante">Principiante</SelectItem>
                  <SelectItem value="Intermedio">Intermedio</SelectItem>
                  <SelectItem value="Avanzado">Avanzado</SelectItem>
                  <SelectItem value="Pro">Pro</SelectItem>
                </SelectContent>
              </Select>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="h-7 text-xs flex-1">
                  <SelectValue placeholder="Tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos los tipos</SelectItem>
                  <SelectItem value="team">Equipos</SelectItem>
                  <SelectItem value="individual">Individual</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Lista de torneos */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
            {filteredTournaments.map((tournament) => (
              <TournamentCard key={tournament.id} {...tournament} />
            ))}
          </div>

          {/* Estado de búsqueda */}
          <div className="text-xs text-muted-foreground py-2">
            Mostrando {filteredTournaments.length} torneos
          </div>
        </div>
      </div>
    </div>
  )
}