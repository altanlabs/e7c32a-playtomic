import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, MapPin, Star, Clock } from "lucide-react"

const CourtCard = ({ 
  name,
  location,
  rating,
  price,
  imageUrl,
  availability
}: { 
  name: string
  location: string
  rating: number
  price: string
  imageUrl: string
  availability: string
}) => (
  <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all">
    <div className="aspect-[16/9] relative">
      <img 
        src={imageUrl} 
        alt={name}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-3 right-3 bg-white rounded-full px-3 py-1 flex items-center gap-1">
        <Star className="w-4 h-4 text-[#029455] fill-current" />
        <span className="text-sm font-medium text-gray-900">{rating}</span>
      </div>
    </div>
    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{name}</h3>
          <p className="text-sm text-gray-600 subtitle-font flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            {location}
          </p>
        </div>
        <div className="text-right">
          <p className="text-[#029455] font-bold">{price}</p>
          <p className="text-sm text-gray-500 subtitle-font">por hora</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center text-sm text-gray-600">
          <Clock className="w-4 h-4 mr-1" />
          <span className="subtitle-font">{availability}</span>
        </div>
        <Button 
          className="bg-[#029455] text-white hover:bg-[#029455]/90 px-6 rounded-full"
        >
          Reservar
        </Button>
      </div>
    </div>
  </div>
)

const filters = ["Todos", "Interior", "Exterior", "3x3", "5x5"]

export default function CourtsPage() {
  return (
    <div className="min-h-screen bg-[#fff6e7]">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#029455]">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Canchas
          </h1>
          <p className="text-xl text-white/90 subtitle-font max-w-2xl">
            Encuentra y reserva las mejores canchas cerca de ti
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 border-b border-gray-200 bg-white/50 backdrop-blur-sm sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input 
                placeholder="Buscar por ubicación..." 
                className="pl-10 bg-white border-gray-200 rounded-full w-full"
              />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" className="rounded-full border-gray-200 bg-white text-gray-600 hover:bg-gray-50">
                <Filter className="h-4 w-4 mr-2" />
                Filtros
              </Button>
            </div>
          </div>
          
          {/* Type filters */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant="ghost"
                className={`rounded-full px-4 py-2 text-sm whitespace-nowrap
                  ${filter === "Todos" 
                    ? "bg-[#029455] text-white hover:bg-[#029455]/90" 
                    : "text-gray-600 hover:bg-gray-100"
                  }`}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Courts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CourtCard
              name="Polideportivo Central"
              location="Calle Mayor, 123"
              rating={4.8}
              price="15€"
              imageUrl="https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              availability="Disponible ahora"
            />
            <CourtCard
              name="Cancha Municipal"
              location="Av. Libertad, 45"
              rating={4.6}
              price="12€"
              imageUrl="https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              availability="Desde 17:00"
            />
            <CourtCard
              name="Club Deportivo Elite"
              location="Plaza España, 7"
              rating={4.9}
              price="20€"
              imageUrl="https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              availability="Disponible ahora"
            />
          </div>
        </div>
      </section>

      {/* Help Button */}
      <div className="fixed bottom-6 left-6 flex gap-4">
        <Button className="rounded-full bg-[#029455] text-white hover:bg-[#029455]/90 h-12 w-12 p-0">
          ?
        </Button>
        <Button className="rounded-full bg-[#029455] text-white hover:bg-[#029455]/90">
          Hire An Expert
        </Button>
      </div>
    </div>
  )
}