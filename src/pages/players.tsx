import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"

const PlayerCard = ({ 
  initial, 
  name, 
  position, 
  level, 
  rating 
}: { 
  initial: string
  name: string
  position: string
  level: string
  rating: number
}) => (
  <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-all">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-[#029455] text-white flex items-center justify-center text-xl font-semibold">
        {initial}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600 subtitle-font">
          {position} • {level}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center">
          <span className="text-[#029455] font-bold">{rating}</span>
          <svg className="w-4 h-4 text-[#029455] ml-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
        <Button 
          className="bg-[#029455] text-white hover:bg-[#029455]/90 px-4 py-2 rounded-full text-sm"
        >
          Ver perfil
        </Button>
      </div>
    </div>
  </div>
)

const positions = ["Todos", "Base", "Escolta", "Alero", "Ala-Pivot", "Pivot"]

export default function PlayersPage() {
  return (
    <div className="min-h-screen bg-[#fff6e7]">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://api.altan.ai/platform/media/aec34100-0b8f-4149-9767-49897eb3fdef?account_id=00e70dcf-ba54-4e8c-9d06-dc8372251dae)' }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Jugadores
          </h1>
          <p className="text-xl text-white/90 subtitle-font max-w-2xl">
            Encuentra jugadores para tus partidos
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
                placeholder="Buscar jugadores..." 
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
          
          {/* Position filters */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
            {positions.map((position) => (
              <Button
                key={position}
                variant="ghost"
                className={`rounded-full px-4 py-2 text-sm whitespace-nowrap
                  ${position === "Todos" 
                    ? "bg-[#029455] text-white hover:bg-[#029455]/90" 
                    : "text-gray-600 hover:bg-gray-100"
                  }`}
              >
                {position}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Players Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-6">
            <PlayerCard
              initial="D"
              name="David García"
              position="Base"
              level="Avanzado"
              rating={4.8}
            />
            <PlayerCard
              initial="A"
              name="Ana Martínez"
              position="Escolta"
              level="Intermedio"
              rating={4.5}
            />
            <PlayerCard
              initial="C"
              name="Carlos Ruiz"
              position="Alero"
              level="Avanzado"
              rating={4.9}
            />
            <PlayerCard
              initial="L"
              name="Laura Sánchez"
              position="Base"
              level="Intermedio"
              rating={4.7}
            />
            <PlayerCard
              initial="M"
              name="Miguel Torres"
              position="Pivot"
              level="Avanzado"
              rating={4.6}
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