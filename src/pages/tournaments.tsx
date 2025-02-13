import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, Calendar, Users, Trophy, MapPin } from "lucide-react"

const TournamentCard = ({ 
  name,
  date,
  location,
  players,
  prize,
  imageUrl,
  status
}: { 
  name: string
  date: string
  location: string
  players: string
  prize: string
  imageUrl: string
  status: 'open' | 'closing' | 'closed'
}) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
    <div className="aspect-[16/9] relative">
      <img 
        src={imageUrl} 
        alt={name}
        className="w-full h-full object-cover"
      />
      <div className={`absolute top-3 right-3 rounded-full px-4 py-1.5 ${
        status === 'open' ? 'bg-[#029455] text-white' : 
        status === 'closing' ? 'bg-amber-500 text-white' : 
        'bg-gray-100 text-gray-600'
      }`}>
        <span className="text-sm font-medium">
          {status === 'open' ? 'Inscripción abierta' : 
           status === 'closing' ? 'Cerrando pronto' : 
           'Inscripción cerrada'}
        </span>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{name}</h3>
      <div className="space-y-3 mb-6">
        <p className="text-base text-gray-700 flex items-center">
          <Calendar className="w-5 h-5 mr-3 text-[#029455]" />
          {date}
        </p>
        <p className="text-base text-gray-700 flex items-center">
          <MapPin className="w-5 h-5 mr-3 text-[#029455]" />
          {location}
        </p>
        <p className="text-base text-gray-700 flex items-center">
          <Users className="w-5 h-5 mr-3 text-[#029455]" />
          {players}
        </p>
        <p className="text-base text-gray-700 flex items-center">
          <Trophy className="w-5 h-5 mr-3 text-[#029455]" />
          Premio: {prize}
        </p>
      </div>
      <div className="flex justify-end">
        <Button 
          className={`rounded-full px-8 py-6 text-base font-semibold ${
            status === 'open' 
              ? 'bg-[#029455] hover:bg-[#029455]/90 text-white shadow-md hover:shadow-lg' 
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
          disabled={status !== 'open'}
        >
          {status === 'open' ? 'Inscribirse' : 'Completo'}
        </Button>
      </div>
    </div>
  </div>
)

const filters = ["Todos", "3x3", "5x5", "Pro", "Amateur"]

export default function TournamentsPage() {
  return (
    <div className="min-h-screen bg-[#fff6e7]">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />
        </div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Torneos
          </h1>
          <p className="text-xl text-white font-medium max-w-2xl drop-shadow-md">
            Compite en los mejores torneos de baloncesto
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-6 border-b border-gray-200 bg-white shadow-sm sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input 
                placeholder="Buscar torneos..." 
                className="pl-12 py-6 bg-white border-gray-200 rounded-full w-full text-base"
              />
            </div>
            <Button 
              variant="outline" 
              className="rounded-full border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:text-[#029455] py-6 px-6"
            >
              <Filter className="h-5 w-5 mr-2" />
              Filtros
            </Button>
          </div>
          
          {/* Type filters */}
          <div className="flex gap-3 mt-6 overflow-x-auto pb-2">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant="ghost"
                className={`rounded-full px-6 py-5 text-base font-medium whitespace-nowrap transition-all
                  ${filter === "Todos" 
                    ? "bg-[#029455] text-white hover:bg-[#029455]/90 shadow-md" 
                    : "text-gray-700 hover:bg-gray-100 hover:text-[#029455]"
                  }`}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Tournaments Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TournamentCard
              name="Torneo 3x3 Street Basketball"
              date="15 Mayo 2024 - 17:00"
              location="Plaza Mayor"
              players="16/24 equipos"
              prize="1000€ + Trofeos"
              imageUrl="https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              status="open"
            />
            <TournamentCard
              name="Liga Amateur 5x5"
              date="20 Mayo 2024 - 10:00"
              location="Polideportivo Central"
              players="8/8 equipos"
              prize="2000€ + Medallas"
              imageUrl="https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              status="closed"
            />
            <TournamentCard
              name="Torneo Pro 3x3"
              date="1 Junio 2024 - 16:00"
              location="Club Deportivo Elite"
              players="22/24 equipos"
              prize="5000€ + Trofeos"
              imageUrl="https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              status="closing"
            />
          </div>
        </div>
      </section>

      {/* Create Tournament Button */}
      <div className="fixed bottom-6 right-6">
        <Link to="/tournaments/create">
          <Button 
            className="rounded-full bg-[#029455] text-white hover:bg-[#029455]/90 shadow-lg hover:shadow-xl py-6 px-8 text-base font-semibold"
          >
            Crear torneo
          </Button>
        </Link>
      </div>
    </div>
  )
}