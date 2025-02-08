import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Trophy, Award, Star } from "lucide-react"

interface JoinGameFormProps {
  onSubmit: (data: any) => void
  isLoading?: boolean
  gameDetails: {
    title: string
    date: string
    time: string
    location: string
    price: string
    level: string
  }
}

export function JoinGameForm({ onSubmit, isLoading = false, gameDetails }: JoinGameFormProps) {
  const [step, setStep] = useState(1)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({
      // datos del formulario
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Game Details Summary */}
      <div className="bg-white/5 p-6 rounded-lg space-y-4">
        <h3 className="text-xl font-semibold">{gameDetails.title}</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-400">Fecha y hora</p>
            <p>{gameDetails.date} - {gameDetails.time}</p>
          </div>
          <div>
            <p className="text-gray-400">Ubicación</p>
            <p>{gameDetails.location}</p>
          </div>
          <div>
            <p className="text-gray-400">Precio</p>
            <p className="text-[#FFA726] font-semibold">{gameDetails.price}</p>
          </div>
          <div>
            <p className="text-gray-400">Nivel</p>
            <p>{gameDetails.level}</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <Label>¿Cuál es tu nivel de juego?</Label>
              <RadioGroup defaultValue="intermediate" className="grid grid-cols-1 gap-4">
                <Label
                  htmlFor="beginner"
                  className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <Trophy className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="font-medium">Principiante</p>
                      <p className="text-sm text-gray-400">Estoy empezando a jugar 3x3</p>
                    </div>
                  </div>
                  <RadioGroupItem value="beginner" id="beginner" />
                </Label>
                
                <Label
                  htmlFor="intermediate"
                  className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-[#FFA726]" />
                    <div>
                      <p className="font-medium">Intermedio</p>
                      <p className="text-sm text-gray-400">Juego regularmente y conozco las reglas</p>
                    </div>
                  </div>
                  <RadioGroupItem value="intermediate" id="intermediate" />
                </Label>
                
                <Label
                  htmlFor="advanced"
                  className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <div>
                      <p className="font-medium">Avanzado</p>
                      <p className="text-sm text-gray-400">Tengo experiencia en torneos y competiciones</p>
                    </div>
                  </div>
                  <RadioGroupItem value="advanced" id="advanced" />
                </Label>
              </RadioGroup>
            </div>

            <Button 
              type="button" 
              className="w-full bg-[#FFA726] hover:bg-[#FF9800]"
              onClick={() => setStep(2)}
            >
              Siguiente
            </Button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <Label>Posición preferida</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona tu posición" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="guard">Base</SelectItem>
                  <SelectItem value="wing">Alero</SelectItem>
                  <SelectItem value="post">Pívot</SelectItem>
                  <SelectItem value="versatile">Versátil</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Experiencia previa</Label>
              <Textarea 
                placeholder="Cuéntanos brevemente tu experiencia en baloncesto 3x3..."
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-4">
              <Label>Preferencias de juego</Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="defensive" />
                  <label
                    htmlFor="defensive"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Me gusta jugar una defensa intensa
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="teamplay" />
                  <label
                    htmlFor="teamplay"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Prefiero el juego en equipo al individual
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="competitive" />
                  <label
                    htmlFor="competitive"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Busco un ambiente competitivo
                  </label>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button 
                type="button" 
                variant="outline"
                className="flex-1"
                onClick={() => setStep(1)}
              >
                Atrás
              </Button>
              <Button 
                type="submit"
                className="flex-1 bg-[#FFA726] hover:bg-[#FF9800]"
                disabled={isLoading}
              >
                {isLoading ? "Enviando..." : "Unirme al partido"}
              </Button>
            </div>
          </motion.div>
        )}
      </form>

      {/* Progress indicator */}
      <div className="flex justify-center gap-2">
        {[1, 2].map((i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full transition-colors ${
              i === step ? "bg-[#FFA726]" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </motion.div>
  )
}