import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useSearchParams, useNavigate } from "react-router-dom"
import { toast } from "sonner"

export default function JoinAsPlayerPage() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const teamName = searchParams.get("team")
  const tournamentId = searchParams.get("tournament")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    try {
      // Aquí iría la llamada a la API para registrar al jugador
      console.log({
        playerName: formData.get("playerName"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        position: formData.get("position"),
        team: teamName,
        tournament: tournamentId
      })

      toast.success("¡Registro completado con éxito!")
      navigate(`/tournaments/${tournamentId}`)
    } catch (error) {
      toast.error("Error al procesar el registro")
    }
  }

  return (
    <div className="min-h-screen bg-background px-4 py-6 sm:py-8">
      <Card className="max-w-md mx-auto">
        <div className="p-4 sm:p-6">
          <div className="text-center mb-6">
            <h1 className="text-xl sm:text-2xl font-bold mb-2">Unirse como jugador</h1>
            {teamName && (
              <p className="text-sm text-muted-foreground">
                Únete al equipo {teamName}
              </p>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-3">
              <div>
                <Label htmlFor="playerName" className="text-sm">Nombre completo</Label>
                <Input
                  id="playerName"
                  name="playerName"
                  placeholder="Tu nombre completo"
                  required
                  className="h-8 text-sm"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-sm">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  required
                  className="h-8 text-sm"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-sm">Teléfono</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Tu número de teléfono"
                  required
                  className="h-8 text-sm"
                />
              </div>

              <div>
                <Label htmlFor="position" className="text-sm">Posición preferida</Label>
                <Select name="position" required>
                  <SelectTrigger className="h-8 text-sm">
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

              <div>
                <Label htmlFor="experience" className="text-sm">Experiencia</Label>
                <Select name="experience" required>
                  <SelectTrigger className="h-8 text-sm">
                    <SelectValue placeholder="Nivel de experiencia" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="principiante">Principiante</SelectItem>
                    <SelectItem value="intermedio">Intermedio</SelectItem>
                    <SelectItem value="avanzado">Avanzado</SelectItem>
                    <SelectItem value="profesional">Profesional</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-center gap-3 pt-2">
              <Button 
                type="button" 
                variant="outline"
                onClick={() => navigate(`/tournaments/${tournamentId}`)}
                className="h-7 text-xs px-3"
              >
                Cancelar
              </Button>
              <Button 
                type="submit" 
                className="h-7 text-xs px-3 bg-[#FFA726] hover:bg-[#FF9800]"
              >
                Completar registro
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  )
}