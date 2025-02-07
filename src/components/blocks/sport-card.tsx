import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface SportCardProps {
  name: string
  icon: string
  available: boolean
}

export function SportCard({ name, icon, available }: SportCardProps) {
  return (
    <Card className={`cursor-pointer transition-all hover:scale-105 ${available ? '' : 'opacity-50'}`}>
      <CardContent className="p-6 flex flex-col items-center justify-center space-y-4">
        <img src={icon} alt={name} className="w-16 h-16" />
        <h3 className="font-semibold text-lg">{name}</h3>
        {!available && (
          <Badge variant="secondary">Próximamente</Badge>
        )}
      </CardContent>
    </Card>
  )
}