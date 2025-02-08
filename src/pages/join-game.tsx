import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function JoinGamePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Me apunto al partido</h1>
        
        <Tabs defaultValue="team" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="team">Apuntarme como equipo</TabsTrigger>
            <TabsTrigger value="player">Apuntarme como jugador</TabsTrigger>
          </TabsList>

          <TabsContent value="team">
            <Card>
              <CardHeader>
                <CardTitle>Registro de equipo para el partido</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  {/* Información del equipo */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Nombre del equipo
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 rounded-md border bg-background"
                        placeholder="Nombre de tu equipo"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Nivel del equipo
                      </label>
                      <select className="w-full p-2 rounded-md border bg-background">
                        <option value="">Selecciona el nivel</option>
                        <option value="principiante">Principiante</option>
                        <option value="intermedio">Intermedio</option>
                        <option value="avanzado">Avanzado</option>
                      </select>
                    </div>

                    {/* Jugadores del equipo */}
                    <div className="space-y-4 pt-4 border-t">
                      <h3 className="font-medium">Jugadores (3 jugadores para 3x3)</h3>
                      
                      {[1, 2, 3].map((num) => (
                        <div key={num} className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              Jugador {num} - Nombre
                            </label>
                            <input
                              type="text"
                              className="w-full p-2 rounded-md border bg-background"
                              placeholder="Nombre completo"
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
                        </div>
                      ))}
                    </div>

                    {/* Información de contacto */}
                    <div className="space-y-4 pt-4 border-t">
                      <h3 className="font-medium">Información de contacto del capitán</h3>
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
                    </div>

                    {/* Comentarios adicionales */}
                    <div className="space-y-4 pt-4 border-t">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Comentarios adicionales
                        </label>
                        <textarea
                          className="w-full p-2 rounded-md border bg-background"
                          rows={3}
                          placeholder="Información adicional que quieras compartir"
                        />
                      </div>
                    </div>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-[#FFA726] hover:bg-[#FF9800]"
                  >
                    Apuntar equipo al partido
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="player">
            <Card>
              <CardHeader>
                <CardTitle>Apuntarme como jugador individual</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  {/* Información personal */}
                  <div className="space-y-4">
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

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Nivel de juego
                        </label>
                        <select className="w-full p-2 rounded-md border bg-background">
                          <option value="">Selecciona tu nivel</option>
                          <option value="principiante">Principiante</option>
                          <option value="intermedio">Intermedio</option>
                          <option value="avanzado">Avanzado</option>
                        </select>
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
                    </div>

                    {/* Información de contacto */}
                    <div className="space-y-4 pt-4 border-t">
                      <h3 className="font-medium">Información de contacto</h3>
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
                    </div>

                    {/* Comentarios */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Comentarios
                      </label>
                      <textarea
                        className="w-full p-2 rounded-md border bg-background"
                        rows={3}
                        placeholder="¿Algo más que quieras compartir?"
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-[#FFA726] hover:bg-[#FF9800]"
                  >
                    Apuntarme al partido
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}