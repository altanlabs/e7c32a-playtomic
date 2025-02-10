import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ChevronLeft, Upload, MapPin, Clock, Euro, Users, Droplets, Building, Basketball } from "lucide-react"
import { Link } from "react-router-dom"

export default function PublicarPistaBaloncesto() {
  return (
    <div className="container max-w-3xl py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div className="flex items-center gap-4">
          <Link to="/aros">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold">Publicar Pista de Baloncesto</h1>
            <p className="text-muted-foreground">
              Configura los detalles de tu pista de baloncesto para permitir reservas
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Información básica */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Basketball className="h-5 w-5" />
              Información básica
            </h2>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre de la pista</Label>
                <Input id="name" placeholder="Ej: Pista Principal de Baloncesto" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Ubicación</Label>
                <div className="flex gap-2">
                  <Input id="location" placeholder="Dirección completa" />
                  <Button variant="outline" size="icon">
                    <MapPin className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descripción</Label>
                <Textarea
                  id="description"
                  placeholder="Describe las características de tu pista..."
                  className="min-h-[100px]"
                />
              </div>
            </div>
          </div>

          {/* Precios y disponibilidad */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Euro className="h-5 w-5" />
              Precios y disponibilidad
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Precio medio campo (1 aro)</Label>
                <Input type="number" placeholder="€/hora" />
              </div>
              
              <div className="space-y-2">
                <Label>Precio campo completo (2 aros)</Label>
                <Input type="number" placeholder="€/hora" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Horario de apertura</Label>
              <div className="grid grid-cols-2 gap-4">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Hora de apertura" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 24 }).map((_, i) => (
                      <SelectItem key={i} value={`${i}:00`}>
                        {`${i}:00`}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Hora de cierre" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 24 }).map((_, i) => (
                      <SelectItem key={i} value={`${i}:00`}>
                        {`${i}:00`}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Características */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Building className="h-5 w-5" />
              Características
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="indoor">Pista cubierta</Label>
                <Switch id="indoor" />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="lighting">Iluminación</Label>
                <Switch id="lighting" />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="showers">Vestuarios</Label>
                <Switch id="showers" />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="parking">Parking</Label>
                <Switch id="parking" />
              </div>
            </div>
          </div>

          {/* Imágenes */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Imágenes</h2>
            
            <div className="border-2 border-dashed rounded-lg p-8 text-center space-y-4">
              <div className="flex justify-center">
                <Upload className="h-8 w-8 text-muted-foreground" />
              </div>
              <div>
                <p className="text-muted-foreground">
                  Arrastra y suelta imágenes aquí o
                </p>
                <Button variant="link" className="text-primary">
                  selecciona archivos
                </Button>
              </div>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex justify-end gap-4">
            <Button variant="outline">
              Guardar borrador
            </Button>
            <Button className="bg-[#FFA726] hover:bg-[#FF9800]">
              Publicar pista
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}