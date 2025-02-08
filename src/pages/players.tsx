import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Link } from "react-router-dom"
import { Search, Filter, MapPin, Star } from "lucide-react"

export default function PlayersPage() {
  const players = [
    {
      id: 1,
      name: "Carlos García",
      position: "Base",
      level: "Avanzado",
      location: "Barcelona",
      rating: 4.8,
      image: "https://i.pravatar.cc/150?img=1"
    },
    {
      id: 2,
      name: "Laura Martínez",
      position: "Escolta",
      level: "Intermedio",
      location: "Madrid",
      rating: 4.5,
      image: "https://i.pravatar.cc/150?img=2"
    },
    // Añade más jugadores aquí
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Jugadores</h1>
        <Link to="/join-as-player">
          <Button className="bg-[#FFA726] hover:bg-[#FF9800]">
            Unirse como jugador
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
              placeholder="Buscar jugadores..."
              className="w-full pl-10 p-2 rounded-md border bg-background"
            />
          </div>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filtros
        </Button>
      </div>

      {/* Players Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {players.map((player) => (
          <Card key={player.id} className="overflow-hidden">
            <div className="aspect-square relative">
              <img
                src={player.image}
                alt={player.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{player.name}</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center justify-between">
                  <span>{player.position}</span>
                  <span className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    {player.rating}
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {player.location}
                </div>
                <div>Nivel: {player.level}</div>
              </div>
              <div className="mt-4 pt-4 border-t">
                <Button variant="outline" className="w-full">
                  Ver perfil
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}