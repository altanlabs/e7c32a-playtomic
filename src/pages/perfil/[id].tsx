import { useParams } from "react-router-dom"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy, Star, ThumbsUp, ThumbsDown, Calendar } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function PlayerProfilePage() {
  const { id } = useParams()

  // Estos datos vendrían de tu API/backend
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
      winRate: 71, // (gamesWon / gamesPlayed) * 100
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
    <Card className="p-6 flex flex-col items-center justify-center text-center bg-[#0A0F1C] border-border">
      <div className={`mb-3 ${color}`}>
        {icon}
      </div>
      <div className="text-3xl font-bold mb-2">{value}</div>
      <div className="text-sm text-muted-foreground">{title}</div>
    </Card>
  )

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      {/* Cabecera del perfil */}
      <Card className="p-8 mb-8 bg-[#0A0F1C] border-border">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Avatar className="w-32 h-32">
            <AvatarImage src={player.avatar} alt={player.name} />
            <AvatarFallback>{player.name.charAt(0)}</AvatarFallback>
          </Avatar>
          
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-3">{player.name}</h1>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start text-lg text-muted-foreground">
              <span>{player.position}</span>
              <span>•</span>
              <span>{player.level}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-[#0A0F1C]/50 p-4 rounded-lg">
            <Star className="h-8 w-8 text-[#FFA726]" />
            <span className="text-3xl font-bold">{player.stats.rating}</span>
          </div>
        </div>
      </Card>

      {/* Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          title="Partidos jugados"
          value={player.stats.gamesPlayed}
          icon={<Trophy className="h-10 w-10" />}
        />
        <StatCard
          title="Victorias"
          value={player.stats.gamesWon}
          icon={<ThumbsUp className="h-10 w-10" />}
          color="text-green-500"
        />
        <StatCard
          title="Derrotas"
          value={player.stats.gamesLost}
          icon={<ThumbsDown className="h-10 w-10" />}
          color="text-red-500"
        />
      </div>

      {/* Porcentaje de victorias */}
      <Card className="p-6 mb-8 bg-[#0A0F1C] border-border">
        <h2 className="text-lg font-semibold mb-4">Porcentaje de victorias</h2>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>{player.stats.winRate}%</span>
            <span>{player.stats.gamesWon} V - {player.stats.gamesLost} D</span>
          </div>
          <Progress value={player.stats.winRate} className="h-3" />
        </div>
      </Card>

      {/* Últimos partidos */}
      <Card className="p-6 mb-8 bg-[#0A0F1C] border-border">
        <h2 className="text-lg font-semibold mb-4">Últimos partidos</h2>
        <div className="space-y-4">
          {player.recentGames.map((game) => (
            <div 
              key={game.id} 
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div className="flex items-center gap-4">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <div>
                  <div className="font-medium">{game.teams}</div>
                  <div className="text-sm text-muted-foreground">{game.date}</div>
                </div>
              </div>
              <div className={`text-lg font-bold ${
                game.result === 'victoria' ? 'text-green-500' : 'text-red-500'
              }`}>
                {game.score}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Valoraciones recibidas */}
      <Card className="p-6 bg-[#0A0F1C] border-border">
        <h2 className="text-lg font-semibold mb-4">Valoraciones recibidas</h2>
        <div className="space-y-4">
          {player.reviews.map((review) => (
            <div key={review.id} className="flex items-start gap-4 p-4 border rounded-lg">
              <Avatar className="w-12 h-12">
                <AvatarImage src={review.avatar} alt={review.author} />
                <AvatarFallback>{review.author[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{review.author}</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-[#FFA726] text-[#FFA726]" />
                    <span className="font-medium">{review.rating}</span>
                  </div>
                </div>
                <p className="text-muted-foreground">
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