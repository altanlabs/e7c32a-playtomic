import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

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
  stats 
}: PlayerCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <CardTitle className="text-xl">{name}</CardTitle>
          <div className="flex items-center gap-2 mt-1">
            <Badge variant="outline">{position}</Badge>
            <Badge variant="secondary">{level}</Badge>
            <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100">
              <Star className="w-3 h-3 mr-1" />
              {rating}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold mb-2">Disponibilidad</h4>
            <div className="flex flex-wrap gap-2">
              {availability.map((time) => (
                <Badge key={time} variant="outline">{time}</Badge>
              ))}
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold">{stats.games}</p>
                <p className="text-sm text-muted-foreground">Partidos</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">{stats.winRate}%</p>
                <p className="text-sm text-muted-foreground">Victorias</p>
              </div>
            </div>
            <Button>Invitar a jugar</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}