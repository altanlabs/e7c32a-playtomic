import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useLocation, useSearchParams } from "react-router-dom"
import { toast } from "sonner"

export default function CreateTeamPage() {
  const [searchParams] = useSearchParams()
  const location = useLocation()
  const tournamentId = searchParams.get("tournament")
  const teamData = location.state?.teamData || {
    teamName: "",
    captainName: "",
    email: "",
    phone: ""
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // Aquí iría la lógica para crear el equipo
      toast.success("Equipo creado correctamente")
    } catch (error) {
      toast.error("Error al crear el equipo")
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Crear nuevo equipo</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="teamName">Nombre del equipo</Label>
              <Input
                id="teamName"
                defaultValue={teamData.teamName}
                placeholder="Nombre del equipo"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="captainName">Nombre del capitán</Label>
              <Input
                id="captainName"
                defaultValue={teamData.captainName}
                placeholder="Nombre del capitán"
                required
              />
            </div>

            <div>
              <Label htmlFor="email">Email de contacto</Label>
              <Input
                id="email"
                type="email"
                defaultValue={teamData.email}
                placeholder="Email"
                required
              />
            </div>

            <div>
              <Label htmlFor="phone">Teléfono de contacto</Label>
              <Input
                id="phone"
                type="tel"
                defaultValue={teamData.phone}
                placeholder="Teléfono"
                required
              />
            </div>
          </div>

          <div className="flex gap-4">
            <Button type="submit" className="w-full bg-[#FFA726] hover:bg-[#FF9800]">
              Crear equipo
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}