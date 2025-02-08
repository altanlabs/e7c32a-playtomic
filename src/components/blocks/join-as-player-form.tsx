import { useState } from "react"
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
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"

export default function JoinAsPlayerForm() {
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [playerData, setPlayerData] = useState({
    name: "",
    position: "",
    level: "",
    experience: "",
    availability: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Aquí iría la llamada a la API para registrar al jugador
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulación
      
      toast.success("¡Te has registrado correctamente como jugador!")
      navigate("/teams")
    } catch (error) {
      toast.error("Error al registrarte como jugador")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container max-w-3xl py-10">
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold">Únete como jugador</h1>
          <p className="text-muted-foreground">
            Completa tu perfil para unirte a equipos y participar en torneos
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                {/* Información básica */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre completo</Label>
                    <Input
                      id="name"
                      value={playerData.name}
                      onChange={(e) => setPlayerData({ ...playerData, name: e.target.value })}
                      placeholder="Ej: Juan Pérez"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="position">Posición preferida</Label>
                    <Select
                      value={playerData.position}
                      onValueChange={(value) => setPlayerData({ ...playerData, position: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona tu posición" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="base">Base</SelectItem>
                        <SelectItem value="escolta">Escolta</SelectItem>
                        <SelectItem value="alero">Alero</SelectItem>
                        <SelectItem value="ala-pivot">Ala-Pívot</SelectItem>
                        <SelectItem value="pivot">Pívot</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="level">Nivel de juego</Label>
                    <Select
                      value={playerData.level}
                      onValueChange={(value) => setPlayerData({ ...playerData, level: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona tu nivel" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Principiante</SelectItem>
                        <SelectItem value="intermediate">Intermedio</SelectItem>
                        <SelectItem value="advanced">Avanzado</SelectItem>
                        <SelectItem value="pro">Profesional</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Experiencia</Label>
                    <Textarea
                      id="experience"
                      value={playerData.experience}
                      onChange={(e) => setPlayerData({ ...playerData, experience: e.target.value })}
                      placeholder="Cuéntanos sobre tu experiencia jugando baloncesto..."
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="availability">Disponibilidad</Label>
                    <Select
                      value={playerData.availability}
                      onValueChange={(value) => setPlayerData({ ...playerData, availability: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona tu disponibilidad" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekdays">Entre semana</SelectItem>
                        <SelectItem value="weekends">Fines de semana</SelectItem>
                        <SelectItem value="both">Ambos</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/")}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="bg-[#FFA726] hover:bg-[#FF9800]"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Registrando..." : "Unirme como jugador"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}