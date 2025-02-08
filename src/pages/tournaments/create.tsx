import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

export default function CreateTournamentPage() {
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    try {
      // Aquí iría la llamada a la API para crear el torneo
      console.log({
        name: formData.get("name"),
        description: formData.get("description"),
        location: formData.get("location"),
        date: formData.get("date"),
        price: formData.get("price"),
        prizePool: formData.get("prizePool"),
        maxTeams: formData.get("maxTeams"),
        level: formData.get("level"),
        type: formData.get("type")
      })

      toast.success("¡Torneo creado con éxito!")
      navigate("/tournaments")
    } catch (error) {
      toast.error("Error al crear el torneo")
    }
  }

  return (
    <div className="min-h-screen bg-background px-4 py-6 sm:py-8">
      <Card className="max-w-md mx-auto">
        <div className="p-4 sm:p-6">
          <div className="text-center mb-6">
            <h1 className="text-xl sm:text-2xl font-bold mb-2">Crear nuevo torneo</h1>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Completa la información para publicar tu torneo
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-3">
              <div>
                <Label htmlFor="name" className="text-sm">Nombre del torneo</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Nombre del torneo"
                  required
                  className="h-8 text-sm"
                />
              </div>

              <div>
                <Label htmlFor="description" className="text-sm">Descripción</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Describe el torneo..."
                  className="h-20 text-sm resize-none"
                  required
                />
              </div>

              <div>
                <Label htmlFor="location" className="text-sm">Ubicación</Label>
                <Input
                  id="location"
                  name="location"
                  placeholder="Dirección del torneo"
                  required
                  className="h-8 text-sm"
                />
              </div>

              <div>
                <Label htmlFor="date" className="text-sm">Fecha</Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  required
                  className="h-8 text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="price" className="text-sm">Precio inscripción (€)</Label>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    min="0"
                    placeholder="60"
                    required
                    className="h-8 text-sm"
                  />
                </div>
                <div>
                  <Label htmlFor="maxTeams" className="text-sm">Máximo equipos</Label>
                  <Input
                    id="maxTeams"
                    name="maxTeams"
                    type="number"
                    min="2"
                    placeholder="16"
                    required
                    className="h-8 text-sm"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="prizePool" className="text-sm">Premio</Label>
                <Input
                  id="prizePool"
                  name="prizePool"
                  placeholder="1000€ + Trofeos"
                  required
                  className="h-8 text-sm"
                />
              </div>

              <div>
                <Label htmlFor="level" className="text-sm">Nivel</Label>
                <Select name="level" required>
                  <SelectTrigger className="h-8 text-sm">
                    <SelectValue placeholder="Selecciona el nivel" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="principiante">Principiante</SelectItem>
                    <SelectItem value="intermedio">Intermedio</SelectItem>
                    <SelectItem value="avanzado">Avanzado</SelectItem>
                    <SelectItem value="profesional">Profesional</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="type" className="text-sm">Tipo de torneo</Label>
                <Select name="type" required>
                  <SelectTrigger className="h-8 text-sm">
                    <SelectValue placeholder="Selecciona el tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3x3">3x3</SelectItem>
                    <SelectItem value="5x5">5x5</SelectItem>
                    <SelectItem value="liga">Liga</SelectItem>
                    <SelectItem value="copa">Copa</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-center gap-3 pt-2">
              <Button 
                type="button" 
                variant="outline"
                onClick={() => navigate("/tournaments")}
                className="h-7 text-xs px-3"
              >
                Cancelar
              </Button>
              <Button 
                type="submit" 
                className="h-7 text-xs px-3 bg-[#FFA726] hover:bg-[#FF9800]"
              >
                Publicar torneo
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  )
}