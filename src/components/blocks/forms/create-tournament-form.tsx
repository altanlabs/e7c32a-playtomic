import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { CalendarIcon, Trophy, Users, MapPin } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"

interface CreateTournamentFormProps {
  onSubmit: (data: any) => void
  isLoading?: boolean
}

export function CreateTournamentForm({ onSubmit, isLoading = false }: CreateTournamentFormProps) {
  const [step, setStep] = useState(1)
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({
      // form data
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Nombre del torneo</Label>
                <Input placeholder="Nombre del torneo" />
              </div>

              <div className="space-y-2">
                <Label>Descripción</Label>
                <Textarea 
                  placeholder="Describe el torneo, formato, premios..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label>Tipo de torneo</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona el tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3x3">3x3 Regular</SelectItem>
                    <SelectItem value="3x3-pro">3x3 Pro</SelectItem>
                    <SelectItem value="knockout">Eliminatorias</SelectItem>
                    <SelectItem value="league">Liga</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Nivel de competición</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona el nivel" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Principiante</SelectItem>
                    <SelectItem value="intermediate">Intermedio</SelectItem>
                    <SelectItem value="advanced">Avanzado</SelectItem>
                    <SelectItem value="pro">Profesional</SelectItem>
                  </SelectContent>
                </Select>
              </div>
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
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Fecha de inicio</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {startDate ? format(startDate, "PPP", { locale: es }) : "Seleccionar"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={startDate}
                        onSelect={setStartDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label>Fecha de fin</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {endDate ? format(endDate, "PPP", { locale: es }) : "Seleccionar"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={endDate}
                        onSelect={setEndDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Ubicación</Label>
                <Input placeholder="Dirección del torneo" />
              </div>

              <div className="space-y-2">
                <Label>Número máximo de equipos</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona el límite" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="8">8 equipos</SelectItem>
                    <SelectItem value="16">16 equipos</SelectItem>
                    <SelectItem value="32">32 equipos</SelectItem>
                    <SelectItem value="64">64 equipos</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Precio de inscripción</Label>
                <Input type="number" placeholder="€ por equipo" />
              </div>

              <div className="space-y-4">
                <Label>Premios</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="prize-money" />
                    <label
                      htmlFor="prize-money"
                      className="text-sm font-medium leading-none"
                    >
                      Premio en metálico
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="prize-trophy" />
                    <label
                      htmlFor="prize-trophy"
                      className="text-sm font-medium leading-none"
                    >
                      Trofeos
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="prize-medals" />
                    <label
                      htmlFor="prize-medals"
                      className="text-sm font-medium leading-none"
                    >
                      Medallas
                    </label>
                  </div>
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
                {isLoading ? "Creando torneo..." : "Crear torneo"}
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