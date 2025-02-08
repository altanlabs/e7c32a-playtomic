import { useParams } from "react-router-dom"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy, Star, ThumbsUp, ThumbsDown, Calendar } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function PlayerProfilePage() {
  const { id } = useParams()

  const player = {
    id: id,
    name: "David García",
    avatar: "/avatars/player1.jpg",
    position: "Base",
    level: "Avanzado",
    stats: {
      gamesPlayed: 45,
      gamesWon: 32,
      gamesLost: 13,
      rating: 4.8,
      winRate: 71,
    },
    recentGames: [
      {
        id: 1,
        date: "12 Mar 2024",
        teams: "Los Invencibles vs. Dream Team",
        score: "21 - 15",
        result: "victoria"
      },
      {
        id: 2,
        date: "8 Mar 2024",
        teams: "Los Invencibles vs. Warriors",
        score: "15 - 21",
        result: "derrota"
      },
      {
        id: 3,
        date: "1 Mar 2024",
        teams: "Los Invencibles vs. Lakers",
        score: "21 - 18",
        result: "victoria"
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Juan Díaz",
        avatar: "",
        rating: 5.0,
        comment: "Excelente jugador, gran actitud y muy buen compañero de equipo."
      },
      {
        id: 2,
        author: "María López",
        avatar: "",
        rating: 4.8,
        comment: "Muy buen jugador, siempre positivo y gran defensor."
      },
      {
        id: 3,
        author: "Carlos Ruiz",
        avatar: "",
        rating: 5.0,
        comment: "Increíble visión de juego y excelente tiro exterior."
      }
    ]
  }

  const StatCard = ({ title, value, icon, color = "text-[#FFA726]" }: { 
    title: string; 
    value: string | number; 
    icon: React.ReactNode;
    color?: string;
  }) => (
    <Card className="p-4 sm:p-6 flex flex-col items-center justify-center text-center bg-[#0A0F1C] border-border">
      <div className={`mb-2 sm:mb-3 ${color}`}>
        {icon}
      </div>
      <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">{value}</div>
      <div className="text-xs sm:text-sm text-muted-foreground">{title}</div>
    </Card>
  )

  return (
    <div className="container max-w-4xl mx-auto px-4 py-4 sm:py-8">
      {/* Cabecera del perfil */}
      <Card className="p-4 sm:p-8 mb-6 sm:mb-8 bg-[#0A0F1C] border-border">
        <div className="flex flex-col items-center sm:flex-row sm:items-center gap-4 sm:gap-8">
          <Avatar className="w-24 h-24 sm:w-32 sm:h-32">
            <AvatarImage src={player.avatar} alt={player.name} />
            <AvatarFallback>{player.name.charAt(0)}</AvatarFallback>
          </Avatar>
          
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-3">{player.name}</h1>
            <div className="flex flex-wrap gap-2 sm:gap-4 justify-center sm:justify-start text-base sm:text-lg text-muted-foreground">
              <span>{player.position}</span>
              <span>•</span>
              <span>{player.level}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-[#0A0F1C]/50 p-3 sm:p-4 rounded-lg">
            <Star className="h-6 w-6 sm:h-8 sm:w-8 text-[#FFA726]" />
            <span className="text-2xl sm:text-3xl font-bold">{player.stats.rating}</span>
          </div>
        </div>
      </Card>

      {/* Estadísticas */}
      <div className="grid grid-cols-3 gap-2 sm:gap-6 mb-6 sm:mb-8">
        <StatCard
          title="Partidos jugados"
          value={player.stats.gamesPlayed}
          icon={<Trophy className="h-8 w-8 sm:h-10 sm:w-10" />}
        />
        <StatCard
          title="Victorias"
          value={player.stats.gamesWon}
          icon={<ThumbsUp className="h-8 w-8 sm:h-10 sm:w-10" />}
          color="text-green-500"
        />
        <StatCard
          title="Derrotas"
          value={player.stats.gamesLost}
          icon={<ThumbsDown className="h-8 w-8 sm:h-10 sm:w-10" />}
          color="text-red-500"
        />
      </div>

      {/* Porcentaje de victorias */}
      <Card className="p-4 sm:p-6 mb-6 sm:mb-8 bg-[#0A0F1C] border-border">
        <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Porcentaje de victorias</h2>
        <div className="space-y-2">
          <div className="flex justify-between text-xs sm:text-sm">
            <span>{player.stats.winRate}%</span>
            <span>{player.stats.gamesWon} V - {player.stats.gamesLost} D</span>
          </div>
          <Progress value={player.stats.winRate} className="h-2 sm:h-3" />
        </div>
      </Card>

      {/* Últimos partidos */}
      <Card className="p-4 sm:p-6 mb-6 sm:mb-8 bg-[#0A0F1C] border-border">
        <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Últimos partidos</h2>
        <div className="space-y-3 sm:space-y-4">
          {player.recentGames.map((game) => (
            <div 
              key={game.id} 
              className="flex items-center justify-between p-3 sm:p-4 border rounded-lg"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                <div>
                  <div className="text-sm sm:text-base font-medium">{game.teams}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{game.date}</div>
                </div>
              </div>
              <div className={`text-base sm:text-lg font-bold ${
                game.result === 'victoria' ? 'text-green-500' : 'text-red-500'
              }`}>
                {game.score}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Valoraciones recibidas */}
      <Card className="p-4 sm:p-6 bg-[#0A0F1C] border-border">
        <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Valoraciones recibidas</h2>
        <div className="space-y-3 sm:space-y-4">
          {player.reviews.map((review) => (
            <div key={review.id} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 border rounded-lg">
              <Avatar className="w-10 h-10 sm:w-12 sm:h-12">
                <AvatarImage src={review.avatar} alt={review.author} />
                <AvatarFallback>{review.author[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1 sm:mb-2">
                  <span className="text-sm sm:text-base font-medium">{review.author}</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-[#FFA726] text-[#FFA726]" />
                    <span className="text-sm sm:text-base font-medium">{review.rating}</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 sm:line-clamp-none">
                  {review.comment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}