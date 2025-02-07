import { Card } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"

interface StatsCardProps {
  title: string
  value: string
  description: string
  icon: React.ElementType
  trend?: string
}

export function StatsCard({
  title,
  value,
  description,
  icon: Icon,
  trend
}: StatsCardProps) {
  return (
    <Card className="p-6 hover:border-primary/50 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <div className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center",
          "bg-gradient-to-br from-background to-muted"
        )}>
          <Icon className="h-6 w-6 text-primary" />
        </div>
        {trend && (
          <div className="flex items-center text-sm text-green-500">
            <TrendingUp className="h-4 w-4 mr-1" />
            {trend}
          </div>
        )}
      </div>
      <h3 className="text-2xl font-bold mb-1">{value}</h3>
      <p className="font-medium text-foreground mb-1">{title}</p>
      <p className="text-sm text-muted-foreground">{description}</p>
    </Card>
  )
}