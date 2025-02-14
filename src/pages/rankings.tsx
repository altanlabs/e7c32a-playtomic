import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, Trophy, TrendingUp } from "lucide-react"
import Layout from "@/layout"

const RankingCard = ({ 
  position,
  name,
  points,
  trend,
  matches,
  winRate,
  imageUrl
}: { 
  position: number
  name: string
  points: number
  trend: 'up' | 'down' | 'stable'
  matches: number
  winRate: number
  imageUrl: string
}) => (
  <div className="bg-white rounded-2xl p-4 flex items-center gap-4 hover:shadow-md transition-all">
    <div className={`w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold
      ${position <= 3 ? 'bg-[#029455] text-white' : 'bg-gray-100 text-gray-700'}`}>
      {position}
    </div>
    
    <div className="flex-1 flex items-center gap-4">
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div>
        <h3 className="font-semibold text-gray-900">{name}</h3>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>{matches} partidos</span>
          <span>•</span>
          <span>{winRate}% victorias</span>
        </div>
      </div>
    </div>

    <div className="flex items-center gap-6">
      <div className="text-right">
        <div className="font-bold text-[#029455] text-lg">{points}</div>
        <div className="text-sm text-gray-500">puntos</div>
      </div>
      
      <div className={`flex items-center gap-1 ${
        trend === 'up' ? 'text-green-500' :
        trend === 'down' ? 'text-red-500' :
        'text-gray-400'
      }`}>
        {trend === 'up' && <TrendingUp className="w-4 h-4" />}
        {trend === 'down' && <TrendingUp className="w-4 h-4 transform rotate-180" />}
        {trend === 'stable' && <div className="w-4 h-4 flex items-center">―</div>}
      </div>
    </div>
  </div>
)

const filters = ["Global", "Local", "Regional", "Nacional"]
const timeFilters = ["Toda la temporada", "Último mes", "Última semana"]

export default function RankingsPage() {
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
              Rankings
            </h1>
            <p className="text-xl text-white/90 subtitle-font max-w-2xl">
              Descubre los mejores jugadores y equipos de la temporada
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
                  placeholder="Buscar jugador..." 
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
            
            {/* Region filters */}
            <div className="flex gap-2 mt-4">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant="ghost"
                  className={`rounded-full px-4 py-2 text-sm
                    ${filter === "Global" 
                      ? "bg-[#029455] text-white hover:bg-[#029455]/90" 
                      : "text-gray-600 hover:bg-gray-100"
                    }`}
                >
                  {filter}
                </Button>
              ))}
            </div>

            {/* Time filters */}
            <div className="flex gap-2 mt-2">
              {timeFilters.map((filter) => (
                <Button
                  key={filter}
                  variant="ghost"
                  className={`rounded-full px-4 py-2 text-sm
                    ${filter === "Toda la temporada" 
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

        {/* Rankings List */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="space-y-4">
              <RankingCard
                position={1}
                name="Carlos Ruiz"
                points={2500}
                trend="up"
                matches={45}
                winRate={85}
                imageUrl="https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              />
              <RankingCard
                position={2}
                name="Ana Martínez"
                points={2350}
                trend="stable"
                matches={42}
                winRate={80}
                imageUrl="https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              />
              <RankingCard
                position={3}
                name="David García"
                points={2200}
                trend="up"
                matches={38}
                winRate={75}
                imageUrl="https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              />
              <RankingCard
                position={4}
                name="Laura Sánchez"
                points={2100}
                trend="down"
                matches={40}
                winRate={70}
                imageUrl="https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              />
              <RankingCard
                position={5}
                name="Miguel Torres"
                points={2000}
                trend="up"
                matches={36}
                winRate={72}
                imageUrl="https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
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