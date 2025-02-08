import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Link } from "react-router-dom"
import { Search, Filter, MapPin, Clock, Euro } from "lucide-react"

export default function CourtsPage() {
  const courts = [
    {
      id: 1,
      name: "Aro Central Barcelona",
      location: "Av. Diagonal 123, Barcelona",
      price: "30€/hora",
      availability: "9:00 - 22:00",
      type: "3x3",
      surface: "Parquet",
      image: "/sports/basketball-3x3.svg"
    },
    {
      id: 2,
      name: "Aro Urban Madrid",
      location: "Calle Gran Vía 45, Madrid",
      price: "25€/hora",
      availability: "8:00 - 23:00",
      type: "3x3",
      surface: "Sintético",
      image: "/sports/basketball-3x3.svg"
    },
    // Más aros aquí
  ]

  return (
    <div className="container mx-auto px-4 py-4 sm:py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold">Reserva tu aro</h1>
        <Link to="/clubs/publish">
          <Button className="w-full sm:w-auto bg-[#FFA726] hover:bg-[#FF9800]">
            Publicar aro
          </Button>
        </Link>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-8">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar aros disponibles..."
              className="w-full pl-10 p-2 rounded-md border bg-background"
            />
          </div>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Button variant="outline" className="flex-1 sm:flex-initial flex items-center justify-center gap-2">
            <Filter className="h-4 w-4" />
            <span className="hidden sm:inline">Filtros</span>
          </Button>
          <Button variant="outline" className="flex-1 sm:flex-initial flex items-center justify-center gap-2">
            <MapPin className="h-4 w-4" />
            <span className="hidden sm:inline">Mapa</span>
          </Button>
        </div>
      </div>

      {/* Quick Filters */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
        <Button variant="outline" size="sm" className="whitespace-nowrap">Todos los aros</Button>
        <Button variant="outline" size="sm" className="whitespace-nowrap">Cubierto</Button>
        <Button variant="outline" size="sm" className="whitespace-nowrap">Exterior</Button>
        <Button variant="outline" size="sm" className="whitespace-nowrap">Disponible ahora</Button>
        <Button variant="outline" size="sm" className="whitespace-nowrap">Con iluminación</Button>
      </div>

      {/* Courts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {courts.map((court) => (
          <Card key={court.id} className="overflow-hidden bg-[#0A0F1C] border-border">
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
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{court.name}</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="line-clamp-1">{court.location}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span>{court.availability}</span>
                </div>
                <div className="flex items-center">
                  <Euro className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span>{court.price}</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between items-start sm:items-center">
                  <span className="text-sm">Superficie: {court.surface}</span>
                  <Link to={`/booking?court=${court.id}`} className="w-full sm:w-auto">
                    <Button className="w-full sm:w-auto bg-[#FFA726] hover:bg-[#FF9800]">
                      Reservar aro
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