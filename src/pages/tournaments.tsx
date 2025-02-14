import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, Trophy, Users, Calendar } from "lucide-react"
import Layout from "@/layout"

const TournamentCard = ({ 
  name,
  date,
  players,
  prize,
  imageUrl,
  status
}: { 
  name: string
  date: string
  players: string
  prize: string
  imageUrl: string
  status: 'open' | 'in_progress' | 'completed'
}) => (
  <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all">
    <div className="aspect-[16/9] relative">
      <img 
        src={imageUrl} 
        alt={name}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-3 right-3 bg-white rounded-full px-3 py-1">
        <span className={`text-sm font-medium ${
          status === 'open' ? 'text-[#029455]' :
          status === 'in_progress' ? 'text-orange-500' :
          'text-gray-500'
        }`}>
          {status === 'open' ? 'Inscripción abierta' :
           status === 'in_progress' ? 'En curso' :
           'Completado'}
        </span>
      </div>
    </div>
    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{name}</h3>
          <div className="flex items-center gap-4">
            <p className="text-sm text-gray-600 flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {date}
            </p>
            <p className="text-sm text-gray-600 flex items-center">
              <Users className="w-4 h-4 mr-1" />
              {players}
            </p>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-1">
            <Trophy className="w-5 h-5 text-[#029455]" />
            <p className="text-[#029455] font-bold">{prize}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Button 
          className="bg-[#029455] text-white hover:bg-[#029455]/90 px-6 rounded-full"
        >
          {status === 'open' ? 'Inscribirse' : 'Ver detalles'}
        </Button>
      </div>
    </div>
  </div>
)

const filters = ["Todos", "Abiertos", "En curso", "Completados"]

export default function TournamentsPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-[#fff6e7]">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0" style={{ backgroundImage: 'url(https://api.altan.ai/platform/media/69cc2738-5a95-46c7-9c5e-46f11d6fc5af?account_id=00e70dcf-ba54-4e8c-9d06-dc8372251dae)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
          </div>
          <div className="container mx-auto px-4 relative">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Torneos
            </h1>
            <p className="text-xl text-white/90 subtitle-font max-w-2xl">
              Participa en los mejores torneos y compite por grandes premios
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
                  placeholder="Buscar torneos..." 
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
            
            {/* Status filters */}
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

        {/* Tournaments Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TournamentCard
                name="Torneo de Verano 2024"
                date="15 Jul - 30 Jul"
                players="32 equipos"
                prize="1000€"
                imageUrl="https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                status="open"
              />
              <TournamentCard
                name="Liga Municipal"
                date="En curso"
                players="16 equipos"
                prize="500€"
                imageUrl="https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                status="in_progress"
              />
              <TournamentCard
                name="Copa Primavera"
                date="Finalizado"
                players="24 equipos"
                prize="750€"
                imageUrl="https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                status="completed"
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
    </Layout>
  )
}