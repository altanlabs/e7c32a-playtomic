import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy, Star, ThumbsUp, ThumbsDown } from "lucide-react"

interface PlayerStats {
  gamesPlayed: number
  gamesWon: number
  gamesLost: number
  rating: number
}

export default function PlayerProfilePage() {
  // Estos datos vendrían de tu API/backend
  const player = {
    id: 1,
    name: "David García",
    avatar: "/avatars/player1.jpg",
    position: "Base",
    level: "Avanzado",
    stats: {
      gamesPlayed: 45,
      gamesWon: 32,
      gamesLost: 13,
      rating: 4.8
    }
  }

  const StatCard = ({ title, value, icon }: { title: string; value: string | number; icon: React.ReactNode }) => (
    <Card className="p-4 flex flex-col items-center justify-center text-center bg-[#0A0F1C] border-border">
      <div className="mb-2 text-[#FFA726]">
        {icon}
      </div>
      <div className="text-2xl font-bold mb-1">{value}</div>
      <div className="text-sm text-muted-foreground">{title}</div>
    </Card>
  )

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      {/* Cabecera del perfil */}
      <Card className="p-6 mb-8 bg-[#0A0F1C] border-border">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Avatar className="w-24 h-24">
            <AvatarImage src={player.avatar} alt={player.name} />
            <AvatarFallback>{player.name.charAt(0)}</AvatarFallback>
          </Avatar>
          
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold mb-2">{player.name}</h1>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start text-muted-foreground">
              <span>{player.position}</span>
              <span>•</span>
              <span>{player.level}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-[#FFA726]" />
            <span className="text-xl font-bold">{player.stats.rating}</span>
          </div>
        </div>
      </Card>

      {/* Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard
          title="Partidos jugados"
          value={player.stats.gamesPlayed}
          icon={<Trophy className="h-8 w-8" />}
        />
        <StatCard
          title="Victorias"
          value={player.stats.gamesWon}
          icon={<ThumbsUp className="h-8 w-8" />}
        />
        <StatCard
          title="Derrotas"
          value={player.stats.gamesLost}
          icon={<ThumbsDown className="h-8 w-8" />}
        />
      </div>

      {/* Últimos partidos */}
      <Card className="mt-8 p-6 bg-[#0A0F1C] border-border">
        <h2 className="text-xl font-bold mb-4">Últimos partidos</h2>
        <div className="space-y-4">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <div className="text-sm">
                  <div className="font-medium">Los Invencibles vs. Dream Team</div>
                  <div className="text-muted-foreground">12 Mar 2024</div>
                </div>
              </div>
              <div className="text-lg font-bold">
                21 - 15
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Valoraciones recibidas */}
      <Card className="mt-8 p-6 bg-[#0A0F1C] border-border">
        <h2 className="text-xl font-bold mb-4">Valoraciones recibidas</h2>
        <div className="space-y-4">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex items-start gap-4 p-4 border rounded-lg">
              <Avatar className="w-10 h-10">
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Juan Díaz</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-[#FFA726] text-[#FFA726]" />
                    <span className="font-medium">5.0</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  Excelente jugador, gran actitud y muy buen compañero de equipo.
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}