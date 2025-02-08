import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function JoinTeamForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Unirse a un equipo</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Nombre completo
            </label>
            <input
              type="text"
              className="w-full p-2 rounded-md border bg-background"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full p-2 rounded-md border bg-background"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Teléfono
            </label>
            <input
              type="tel"
              className="w-full p-2 rounded-md border bg-background"
              placeholder="Teléfono de contacto"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Posición preferida
            </label>
            <select className="w-full p-2 rounded-md border bg-background">
              <option value="">Selecciona una posición</option>
              <option value="base">Base</option>
              <option value="escolta">Escolta</option>
              <option value="alero">Alero</option>
              <option value="ala-pivot">Ala-Pívot</option>
              <option value="pivot">Pívot</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Experiencia
            </label>
            <textarea
              className="w-full p-2 rounded-md border bg-background"
              rows={3}
              placeholder="Cuéntanos tu experiencia en baloncesto"
            />
          </div>

          <Button 
            type="submit"
            className="w-full bg-[#FFA726] hover:bg-[#FF9800]"
          >
            Enviar solicitud
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}