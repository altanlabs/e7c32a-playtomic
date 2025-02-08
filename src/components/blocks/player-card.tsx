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
      <div className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <Avatar className="w-12 h-12">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-base font-bold">{name}</h3>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>{position}</span>
              <span>•</span>
              <span>{level}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-[#FFA726] fill-[#FFA726]" />
            <span className="text-base font-bold">{rating}</span>
          </div>
          <Link to={`/perfil/${id}`}>
            <Button 
              className="bg-[#FFA726] hover:bg-[#FF9800] text-white font-medium text-sm px-4"
            >
              Ver perfil
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  )
}