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
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-[#0A0F1C] py-12 mb-6">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Reserva tu aro
            </h1>
            <p className="text-muted-foreground text-lg mb-6">
              Encuentra y reserva las mejores canchas de baloncesto
            </p>
            <Link to="/clubs/publish">
              <Button size="lg" className="bg-[#FFA726] hover:bg-[#FF9800] w-full sm:w-auto">
                Publicar aro
              </Button>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <input
                type="text"
                placeholder="Buscar aros disponibles..."
                className="w-full pl-12 pr-4 py-3 rounded-full border bg-background/95 text-base"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Filters */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 no-scrollbar">
            <Button variant="outline" size="sm" className="whitespace-nowrap rounded-full">
              Todos los aros
            </Button>
            <Button variant="outline" size="sm" className="whitespace-nowrap rounded-full">
              Cubierto
            </Button>
            <Button variant="outline" size="sm" className="whitespace-nowrap rounded-full">
              Exterior
            </Button>
            <Button variant="outline" size="sm" className="whitespace-nowrap rounded-full">
              Disponible ahora
            </Button>
          </div>
          <Button variant="outline" size="icon" className="ml-2 flex-shrink-0">
            <Filter className="h-4 w-4" />
          </Button>
        </div>

        {/* Courts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courts.map((court) => (
            <Card key={court.id} className="overflow-hidden bg-[#0A0F1C] border-border">
              <div className="aspect-video relative">
                <img
                  src={court.image}
                  alt={court.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3">
                  <span className="bg-background/90 text-foreground px-3 py-1 rounded-full text-sm">
                    {court.type}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-3">{court.name}</h3>
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
                  <Link to={`/booking?court=${court.id}`} className="block">
                    <Button className="w-full bg-[#FFA726] hover:bg-[#FF9800]">
                      Reservar aro
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}