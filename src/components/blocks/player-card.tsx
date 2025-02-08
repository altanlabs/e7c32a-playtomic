import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { Link } from "react-router-dom"

interface PlayerCardProps {
  id: number
  name: string
  position: string
  level: string
  rating: number
  avatar?: string
}

export default function PlayerCard({
  id,
  name,
  position,
  level,
  rating,
  avatar
}: PlayerCardProps) {
  return (
    <Card className="overflow-hidden bg-[#0A0F1C] border-border">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-xl font-bold">{name}</h3>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>{position}</span>
              <span>•</span>
              <span>{level}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-1">
            <Star className="h-5 w-5 text-[#FFA726] fill-[#FFA726]" />
            <span className="text-lg font-bold">{rating}</span>
          </div>
          <Link to={`/perfil/${id}`}>
            <Button 
              size="lg"
              className="bg-[#FFA726] hover:bg-[#FF9800] text-white font-semibold"
            >
              Ver perfil
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  )
}