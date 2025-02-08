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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Upload, Users, Trophy, X } from "lucide-react"

interface CreateTeamFormProps {
  onSubmit: (data: any) => void
  isLoading?: boolean
}

export function CreateTeamForm({ onSubmit, isLoading = false }: CreateTeamFormProps) {
  const [step, setStep] = useState(1)
  const [teamLogo, setTeamLogo] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({
      // form data
    })
  }

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setTeamLogo(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
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
                <Label>Nombre del equipo</Label>
                <Input placeholder="Nombre de tu equipo" />
              </div>

              <div className="space-y-2">
                <Label>Logo del equipo</Label>
                <div className="flex items-center gap-4">
                  <Avatar className="h-20 w-20">
                    {teamLogo ? (
                      <AvatarImage src={teamLogo} alt="Team logo" />
                    ) : (
                      <AvatarFallback>
                        <Upload className="h-8 w-8 text-gray-400" />
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <div>
                    <Input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      id="logo-upload"
                      onChange={handleLogoUpload}
                    />
                    <Label
                      htmlFor="logo-upload"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg cursor-pointer"
                    >
                      <Upload className="h-4 w-4" />
                      Subir logo
                    </Label>
                    <p className="text-sm text-gray-400 mt-1">
                      PNG, JPG o GIF. Máximo 2MB.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Descripción</Label>
                <Textarea 
                  placeholder="Describe tu equipo..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label>Nivel del equipo</Label>
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
              <div className="space-y-2">
                <Label>Ciudad base</Label>
                <Input placeholder="¿Dónde juega tu equipo habitualmente?" />
              </div>

              <div className="space-y-2">
                <Label>Disponibilidad</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="¿Cuándo suele jugar el equipo?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekday-morning">Entre semana - Mañanas</SelectItem>
                    <SelectItem value="weekday-evening">Entre semana - Tardes</SelectItem>
                    <SelectItem value="weekend-morning">Fines de semana - Mañanas</SelectItem>
                    <SelectItem value="weekend-evening">Fines de semana - Tardes</SelectItem>
                    <SelectItem value="flexible">Horario flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Objetivos del equipo</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona el objetivo principal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recreational">Recreativo</SelectItem>
                    <SelectItem value="competitive">Competitivo</SelectItem>
                    <SelectItem value="tournaments">Torneos</SelectItem>
                    <SelectItem value="professional">Profesional</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Redes sociales (opcional)</Label>
                <div className="space-y-2">
                  <Input placeholder="Instagram" />
                  <Input placeholder="Twitter" />
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
                {isLoading ? "Creando equipo..." : "Crear equipo"}
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