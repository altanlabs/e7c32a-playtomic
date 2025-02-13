import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, TrendingUp, Trophy, Medal } from "lucide-react"

const RankingCard = ({ 
  position,
  name,
  points,
  matches,
  winRate,
  trend,
  imageUrl
}: { 
  position: number
  name: string
  points: number
  matches: number
  winRate: number
  trend: 'up' | 'down' | 'stable'
  imageUrl: string
}) => (
  <div className="bg-white rounded-2xl shadow-sm p-4 hover:shadow-md transition-all">
    <div className="flex items-center gap-4">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${
        position === 1 ? 'bg-yellow-100 text-yellow-700' :
        position === 2 ? 'bg-gray-100 text-gray-700' :
        position === 3 ? 'bg-orange-100 text-orange-700' :
        'bg-[#029455]/10 text-[#029455]'
      }`}>
        {position}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          {position <= 3 && (
            <Trophy className={`w-4 h-4 ${
              position === 1 ? 'text-yellow-500' :
              position === 2 ? 'text-gray-500' :
              'text-orange-500'
            }`} />
          )}
        </div>
        <div className="flex items-center gap-4 text-sm text-gray-600 subtitle-font">
          <span>{matches} partidos</span>
          <span>{winRate}% victorias</span>
        </div>
      </div>
      <div className="text-right">
        <div className="text-2xl font-bold text-[#029455]">{points}</div>
        <div className="text-sm text-gray-500 subtitle-font">puntos</div>
      </div>
      <div className={`flex items-center gap-1 ${
        trend === 'up' ? 'text-[#029455]' :
        trend === 'down' ? 'text-red-500' :
        'text-gray-400'
      }`}>
        <TrendingUp className={`w-4 h-4 ${trend === 'down' ? 'rotate-180' : ''}`} />
        <span className="text-sm font-medium">3</span>
      </div>
    </div>
  </div>
)

const filters = ["Global", "3x3", "5x5", "Local", "Nacional"]

export default function RankingsPage() {
  return (
    <div className="min-h-screen bg-[#fff6e7]">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#029455]">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Rankings
          </h1>
          <p className="text-xl text-white/90 subtitle-font max-w-2xl">
            Compite y sube posiciones en el ranking
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
          
          {/* Type filters */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant="ghost"
                className={`rounded-full px-4 py-2 text-sm whitespace-nowrap
                  ${filter === "Global" 
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
              matches={48}
              winRate={85}
              trend="up"
              imageUrl="/avatars/1.jpg"
            />
            <RankingCard
              position={2}
              name="Ana Martínez"
              points={2350}
              matches={45}
              winRate={82}
              trend="stable"
              imageUrl="/avatars/2.jpg"
            />
            <RankingCard
              position={3}
              name="David García"
              points={2200}
              matches={42}
              winRate={78}
              trend="up"
              imageUrl="/avatars/3.jpg"
            />
            <RankingCard
              position={4}
              name="Laura Sánchez"
              points={2100}
              matches={40}
              winRate={75}
              trend="down"
              imageUrl="/avatars/4.jpg"
            />
            <RankingCard
              position={5}
              name="Miguel Torres"
              points={2000}
              matches={38}
              winRate={72}
              trend="up"
              imageUrl="/avatars/5.jpg"
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