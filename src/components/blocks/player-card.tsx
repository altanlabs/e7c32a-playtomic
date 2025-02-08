import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Calendar, Trophy } from "lucide-react"

interface PlayerCardProps {
  name: string
  avatar: string
  position: string
  level: string
  rating: number
  availability: string[]
  stats: {
    games: number
    winRate: number
  }
}

export function PlayerCard({
  name,
  avatar,
  position,
  level,
  rating,
  availability,
  stats,
}: PlayerCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback>{name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">{name}</h3>
              <div className="flex items-center space-x-2 mt-1">
                <Badge variant="secondary" className="text-xs">
                  {position}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {level}
                </Badge>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <span className="ml-1 text-sm font-medium">{rating}</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-2" />
            <span>Disponible: {availability.join(", ")}</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-sm">
              <Trophy className="h-4 w-4 mr-1 text-muted-foreground" />
              <span>{stats.games} partidos</span>
            </div>
            <div className="text-sm">
              <span className={`font-medium ${
                stats.winRate >= 70 ? "text-green-500" :
                stats.winRate >= 50 ? "text-yellow-500" :
                "text-red-500"
              }`}>
                {stats.winRate}% victorias
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4 flex space-x-2">
          <Button className="w-full" variant="default">
            Invitar a jugar
          </Button>
          <Button variant="outline" className="px-3">
            Ver perfil
          </Button>
        </div>
      </div>
    </Card>
  )
}