import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Star, Target, Award, Zap, Users, Crown, Flame } from "lucide-react"

interface Achievement {
  id: string
  name: string
  description: string
  icon: "trophy" | "star" | "target" | "award" | "zap" | "users" | "crown" | "flame"
  rarity: "common" | "rare" | "epic" | "legendary"
  progress: number
  maxProgress: number
  completed: boolean
  completedDate?: string
  points: number
}

const getAchievementIcon = (icon: Achievement["icon"]) => {
  switch (icon) {
    case "trophy": return <Trophy className="w-6 h-6" />
    case "star": return <Star className="w-6 h-6" />
    case "target": return <Target className="w-6 h-6" />
    case "award": return <Award className="w-6 h-6" />
    case "zap": return <Zap className="w-6 h-6" />
    case "users": return <Users className="w-6 h-6" />
    case "crown": return <Crown className="w-6 h-6" />
    case "flame": return <Flame className="w-6 h-6" />
  }
}

const getRarityColor = (rarity: Achievement["rarity"]) => {
  switch (rarity) {
    case "common": return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
    case "rare": return "bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100"
    case "epic": return "bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100"
    case "legendary": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100"
  }
}

const getRarityGradient = (rarity: Achievement["rarity"]) => {
  switch (rarity) {
    case "common": return "from-gray-500 to-gray-700"
    case "rare": return "from-blue-500 to-blue-700"
    case "epic": return "from-purple-500 to-purple-700"
    case "legendary": return "from-yellow-500 to-yellow-700"
  }
}

interface TeamAchievementsProps {
  achievements: Achievement[]
}

export function TeamAchievements({ achievements }: TeamAchievementsProps) {
  // Ordenar logros: primero completados, luego por rareza
  const sortedAchievements = [...achievements].sort((a, b) => {
    if (a.completed && !b.completed) return -1
    if (!a.completed && b.completed) return 1
    const rarityOrder = { legendary: 3, epic: 2, rare: 1, common: 0 }
    return rarityOrder[b.rarity] - rarityOrder[a.rarity]
  })

  const completedCount = achievements.filter(a => a.completed).length
  const totalPoints = achievements.reduce((sum, a) => sum + (a.completed ? a.points : 0), 0)

  return (
    <div className="space-y-6">
      {/* Resumen de logros */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Logros completados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {completedCount}/{achievements.length}
            </div>
            <Progress 
              value={(completedCount / achievements.length) * 100} 
              className="mt-2"
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Puntos de logros
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {totalPoints}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Puntos totales acumulados
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Próximo logro
            </CardTitle>
          </CardHeader>
          <CardContent>
            {achievements.find(a => !a.completed)?.name || "¡Todos completados!"}
          </CardContent>
        </Card>
      </div>

      {/* Lista de logros */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sortedAchievements.map((achievement) => (
          <Card 
            key={achievement.id}
            className={`relative overflow-hidden ${
              achievement.completed ? 'border-2 border-primary' : ''
            }`}
          >
            {achievement.completed && (
              <div className="absolute top-0 right-0 p-1.5 bg-primary text-primary-foreground text-xs">
                Completado
              </div>
            )}
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className={`
                  p-3 rounded-lg bg-gradient-to-br ${getRarityGradient(achievement.rarity)}
                  text-white
                `}>
                  {getAchievementIcon(achievement.icon)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold">{achievement.name}</h3>
                    <Badge className={getRarityColor(achievement.rarity)}>
                      {achievement.rarity}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {achievement.description}
                  </p>
                  {!achievement.completed && (
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Progreso</span>
                        <span>{achievement.progress}/{achievement.maxProgress}</span>
                      </div>
                      <Progress 
                        value={(achievement.progress / achievement.maxProgress) * 100} 
                      />
                    </div>
                  )}
                  {achievement.completed && achievement.completedDate && (
                    <p className="text-xs text-muted-foreground">
                      Completado el {achievement.completedDate}
                    </p>
                  )}
                </div>
                <div className="text-right">
                  <span className="font-bold text-lg">{achievement.points}</span>
                  <p className="text-xs text-muted-foreground">puntos</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}