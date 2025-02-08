import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Link } from "react-router-dom"
import { Search, Filter, MapPin, Clock, Euro } from "lucide-react"

export default function CourtsPage() {
  const courts = [
    {
      id: 1,
      name: "Cancha Central Barcelona",
      location: "Av. Diagonal 123, Barcelona",
      price: "30€/hora",
      availability: "9:00 - 22:00",
      type: "3x3",
      surface: "Parquet",
      image: "/sports/basketball-3x3.svg"
    },
    {
      id: 2,
      name: "Urban Court Madrid",
      location: "Calle Gran Vía 45, Madrid",
      price: "25€/hora",
      availability: "8:00 - 23:00",
      type: "3x3",
      surface: "Sintético",
      image: "/sports/basketball-3x3.svg"
    },
    // Más canchas aquí
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Canchas</h1>
        <Link to="/clubs/publish">
          <Button className="bg-[#FFA726] hover:bg-[#FF9800]">
            Publicar pista
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
              placeholder="Buscar canchas..."
              className="w-full pl-10 p-2 rounded-md border bg-background"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filtros
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Mapa
          </Button>
        </div>
      </div>

      {/* Quick Filters */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        <Button variant="outline" size="sm">Todos</Button>
        <Button variant="outline" size="sm">3x3</Button>
        <Button variant="outline" size="sm">5x5</Button>
        <Button variant="outline" size="sm">Cubierta</Button>
        <Button variant="outline" size="sm">Exterior</Button>
        <Button variant="outline" size="sm">Disponible ahora</Button>
      </div>

      {/* Courts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courts.map((court) => (
          <Card key={court.id} className="overflow-hidden">
            <div className="aspect-video relative">
              <img
                src={court.image}
                alt={court.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2">
                <span className="bg-background/90 text-foreground px-2 py-1 rounded-md text-sm">
                  {court.type}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">{court.name}</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{court.location}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{court.availability}</span>
                </div>
                <div className="flex items-center">
                  <Euro className="h-4 w-4 mr-2" />
                  <span>{court.price}</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Superficie: {court.surface}</span>
                  <Link to={`/booking?court=${court.id}`}>
                    <Button className="bg-[#FFA726] hover:bg-[#FF9800]">
                      Reservar
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}