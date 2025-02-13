import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, MapPin, Users } from "lucide-react"
import { Link } from "react-router-dom"
import { TournamentFilters } from "@/components/blocks/tournament-filters"
import { Badge } from "@/components/ui/badge"

export default function TournamentsPage() {
  const tournaments = [
    {
      id: 1,
      name: "Liga 3x3 Barcelona",
      date: "15-20 Marzo 2024",
      location: "Barcelona",
      teams: "16/32",
      price: "150",
      type: "3x3",
      level: "Intermedio",
      image: "/headers/basketball-hoop.jpg"
    },
    {
      id: 2,
      name: "Torneo Verano Madrid",
      date: "1-5 Julio 2024",
      location: "Madrid",
      teams: "8/16",
      price: "100",
      type: "5x5",
      level: "Avanzado",
      image: "/headers/basketball-hoop.jpg"
    },
  ]

  const handleFilterChange = (filters: any) => {
    // Implement filter logic
    console.log(filters)
  }

  return (
    <div className="container max-w-7xl mx-auto px-4 py-6 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Torneos</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Encuentra y únete a los mejores torneos de baloncesto
          </p>
        </div>
        <Link to="/tournaments/create">
          <Button className="bg-primary hover:bg-primary/90">
            Crear torneo
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <TournamentFilters onFilterChange={handleFilterChange} />

      {/* Tournaments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tournaments.map((tournament) => (
          <Link to={`/tournaments/${tournament.id}`} key={tournament.id}>
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-200">
              <div className="relative h-48">
                <img 
                  src={tournament.image} 
                  alt={tournament.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 flex gap-1">
                  <Badge variant="secondary" className="bg-black/50 text-white">
                    {tournament.type}
                  </Badge>
                  <Badge className="bg-primary/90">{tournament.level}</Badge>
                </div>
              </div>
              
              <div className="p-4 space-y-4">
                <div>
                  <h3 className="font-semibold text-lg leading-none">
                    {tournament.name}
                  </h3>
                  <Badge variant="outline" className="mt-2">
                    {tournament.price}€
                  </Badge>
                </div>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{tournament.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{tournament.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{tournament.teams} equipos</span>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90">
                  Ver detalles
                </Button>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}