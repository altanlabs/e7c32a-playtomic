import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

interface Level {
  id: string
  name: string
  description: string
  icon: string
}

const levels: Level[] = [
  {
    id: "beginner",
    name: "Principiante",
    description: "Estoy empezando a jugar al baloncesto",
    icon: "🏀"
  },
  {
    id: "intermediate",
    name: "Intermedio",
    description: "Juego regularmente y conozco las reglas",
    icon: "🏀🏀"
  },
  {
    id: "advanced",
    name: "Avanzado",
    description: "Buen nivel técnico y experiencia en competición",
    icon: "🏀🏀🏀"
  },
  {
    id: "pro",
    name: "Pro",
    description: "He jugado a nivel profesional o semi-profesional",
    icon: "🏀🏀🏀🏀"
  }
]

interface PlayerLevelSelectorProps {
  onSelect: (level: string) => void
  initialLevel?: string
}

export function PlayerLevelSelector({ onSelect, initialLevel }: PlayerLevelSelectorProps) {
  const [selectedLevel, setSelectedLevel] = useState(initialLevel)

  const handleSelect = (levelId: string) => {
    setSelectedLevel(levelId)
    onSelect(levelId)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {levels.map((level) => (
        <motion.div
          key={level.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card
            className={`p-4 cursor-pointer transition-all duration-300 hover:scale-105 ${
              selectedLevel === level.id
                ? "bg-[#FFA726] text-white"
                : "bg-white/5 hover:bg-white/10"
            }`}
            onClick={() => handleSelect(level.id)}
          >
            <div className="flex items-center gap-4">
              <div className="text-2xl">{level.icon}</div>
              <div>
                <h3 className="font-semibold">{level.name}</h3>
                <p className="text-sm text-gray-300">{level.description}</p>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}