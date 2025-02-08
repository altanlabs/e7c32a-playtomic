import { Card } from "@/components/ui/card"
import { Trophy, Star, Medal } from "lucide-react"

interface TeamAchievementsProps {
  achievements: {
    title: string
    type: "trophy" | "star" | "medal"
    date: string
  }[]
}

export function TeamAchievements({ achievements }: TeamAchievementsProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case "trophy":
        return <Trophy className="h-3 w-3 text-yellow-500" />
      case "star":
        return <Star className="h-3 w-3 text-yellow-500" />
      case "medal":
        return <Medal className="h-3 w-3 text-yellow-500" />
      default:
        return <Trophy className="h-3 w-3 text-yellow-500" />
    }
  }

  return (
    <Card className="p-4">
      <h2 className="text-sm font-semibold mb-3">Logros del equipo</h2>
      <div className="space-y-2">
        {achievements.map((achievement, index) => (
          <div 
            key={index}
            className="flex items-center gap-2 p-2 rounded-lg bg-secondary"
          >
            {getIcon(achievement.type)}
            <div>
              <p className="text-xs font-medium">{achievement.title}</p>
              <p className="text-[10px] text-muted-foreground">{achievement.date}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}