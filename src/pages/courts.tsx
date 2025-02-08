import { Button } from "@/components/ui/button"
import { Search, Filter, MapPin, Clock, Euro } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Link } from "react-router-dom"

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
    {
      id: 3,
      name: "Aro Street Valencia",
      location: "Av. del Puerto 80, Valencia",
      price: "20€/hora",
      availability: "10:00 - 21:00",
      type: "3x3",
      surface: "Cemento",
      image: "/sports/basketball-3x3.svg"
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Background */}
      <div className="relative bg-[#0A0F1C] py-16">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/headers/basketball-hoop.jpg"
            alt="Basketball Hoop"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C]/80 to-[#0A0F1C]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-6">
            <h1 className="text-2xl sm:text-4xl font-bold mb-3">
              Reserva tu aro
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg mb-6">
              Encuentra y reserva las mejores canchas de baloncesto
            </p>
            <Link to="/clubs/publish">
              <Button size="lg" className="bg-[#FFA726] hover:bg-[#FF9800] w-full sm:w-auto">
                Publicar aro
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Search and Filters Section - Fixed below hero */}
      <div className="sticky top-0 z-10 bg-[#0A0F1C] shadow-lg">
        <div className="container mx-auto px-4 py-4">
          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <input
              type="text"
              placeholder="Buscar aros disponibles..."
              className="w-full pl-12 pr-4 py-3 rounded-full border bg-background/95 text-base"
            />
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2">
            <div className="flex-1 overflow-x-auto no-scrollbar">
              <div className="flex gap-2 pb-1">
                <Button variant="outline" size="sm" className="flex-none whitespace-nowrap rounded-full bg-background/10 hover:bg-background/20 border-none">
                  Todos los aros
                </Button>
                <Button variant="outline" size="sm" className="flex-none whitespace-nowrap rounded-full bg-background/10 hover:bg-background/20 border-none">
                  Cubierto
                </Button>
                <Button variant="outline" size="sm" className="flex-none whitespace-nowrap rounded-full bg-background/10 hover:bg-background/20 border-none">
                  Exterior
                </Button>
                <Button variant="outline" size="sm" className="flex-none whitespace-nowrap rounded-full bg-background/10 hover:bg-background/20 border-none">
                  Disponible
                </Button>
              </div>
            </div>
            <Button variant="outline" size="icon" className="flex-none rounded-full bg-background/10 hover:bg-background/20 border-none">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Courts List */}
      <div className="bg-background py-6">
        {/* Mobile view (1 column, centered) */}
        <div className="md:hidden px-4">
          <div className="max-w-[340px] mx-auto">
            <div className="space-y-3">
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
        
        {/* Desktop view (2-3 columns) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto px-4">
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