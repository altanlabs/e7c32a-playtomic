import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface SportCardProps {
  name: string
  players: string
  icon: string
}

export function SportCard({ name, players, icon }: SportCardProps) {
  return (
    <Card className="cursor-pointer transition-all hover:scale-105">
      <CardContent className="p-6 flex flex-col items-center justify-center space-y-4">
        <img src={icon} alt={name} className="w-16 h-16" />
        <h3 className="font-semibold text-lg">{name}</h3>
        <Badge variant="secondary">{players}</Badge>
      </CardContent>
    </Card>
  )
}