import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PublishCourtPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Publicar pista</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Información de la pista</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              {/* Club Info */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Nombre del club
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 rounded-md border bg-background"
                    placeholder="Nombre del club"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Dirección
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 rounded-md border bg-background"
                    placeholder="Dirección completa"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
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
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full p-2 rounded-md border bg-background"
                      placeholder="Email de contacto"
                    />
                  </div>
                </div>
              </div>

              {/* Court Info */}
              <div className="space-y-4 pt-6 border-t">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Número de pistas
                  </label>
                  <input
                    type="number"
                    className="w-full p-2 rounded-md border bg-background"
                    min="1"
                    placeholder="Número de pistas disponibles"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Horario de apertura
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="time"
                      className="w-full p-2 rounded-md border bg-background"
                    />
                    <input
                      type="time"
                      className="w-full p-2 rounded-md border bg-background"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Precio por hora
                  </label>
                  <input
                    type="number"
                    className="w-full p-2 rounded-md border bg-background"
                    placeholder="Precio en euros"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="pt-6">
                <Button 
                  type="submit"
                  className="w-full bg-[#FFA726] hover:bg-[#FF9800]"
                >
                  Publicar pista
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}