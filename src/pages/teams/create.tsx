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
import { Upload, ChevronLeft } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "sonner"

export default function CreateTeamPage() {
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [teamData, setTeamData] = useState({
    name: "",
    description: "",
    level: "",
    maxPlayers: "3",
    status: "open"
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Aquí iría la llamada a la API para crear el equipo
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulación
      
      toast.success("Equipo creado correctamente")
      navigate("/teams")
    } catch (error) {
      toast.error("Error al crear el equipo")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container max-w-3xl py-10">
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <Link to="/teams">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold">Crear nuevo equipo</h1>
            <p className="text-muted-foreground">
              Configura tu equipo para participar en torneos
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                {/* Información básica */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre del equipo</Label>
                    <Input
                      id="name"
                      value={teamData.name}
                      onChange={(e) => setTeamData({ ...teamData, name: e.target.value })}
                      placeholder="Ej: Street Warriors"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Descripción</Label>
                    <Textarea
                      id="description"
                      value={teamData.description}
                      onChange={(e) => setTeamData({ ...teamData, description: e.target.value })}
                      placeholder="Cuéntanos sobre tu equipo..."
                      className="min-h-[100px]"
                    />
                  </div>
                </div>

                {/* Logo del equipo */}
                <div className="space-y-4">
                  <Label>Logo del equipo</Label>
                  <div className="border-2 border-dashed rounded-lg p-8 text-center space-y-4">
                    <div className="flex justify-center">
                      <Upload className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-muted-foreground">
                        Arrastra y suelta una imagen aquí o
                      </p>
                      <Button variant="link" className="text-primary">
                        selecciona un archivo
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Configuración del equipo */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="level">Nivel del equipo</Label>
                    <Select
                      value={teamData.level}
                      onValueChange={(value) => setTeamData({ ...teamData, level: value })}
                    >
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

                  <div className="space-y-2">
                    <Label htmlFor="maxPlayers">Número de jugadores</Label>
                    <Select
                      value={teamData.maxPlayers}
                      onValueChange={(value) => setTeamData({ ...teamData, maxPlayers: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona el tamaño" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3">3 jugadores (3x3)</SelectItem>
                        <SelectItem value="4">4 jugadores (4x4)</SelectItem>
                        <SelectItem value="5">5 jugadores (5x5)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="status">Estado del equipo</Label>
                    <Select
                      value={teamData.status}
                      onValueChange={(value) => setTeamData({ ...teamData, status: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona el estado" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="open">Abierto a nuevos jugadores</SelectItem>
                        <SelectItem value="closed">Cerrado</SelectItem>
                        <SelectItem value="looking_for_players">Buscando jugadores</SelectItem>
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
              onClick={() => navigate("/teams")}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="bg-[#FFA726] hover:bg-[#FF9800]"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creando equipo..." : "Crear equipo"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}