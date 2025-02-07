import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  ChevronLeft,
  Upload,
  Calendar,
  Clock,
  Euro,
  Check,
  Users,
  Trophy,
  Medal,
  Target,
  Shield,
  Gift,
  Cloud,
  Sun
} from "lucide-react"
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function PublicarEvento() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-white/80 hover:text-white">
            <ChevronLeft className="h-5 w-5" />
            <span>Volver</span>
          </Link>
          <Button className="bg-[#FFA726] hover:bg-[#FF9800] text-white">
            Publicar evento
            <Check className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h1 className="text-3xl font-bold">Crear nuevo evento</h1>
            <p className="text-gray-400">
              Organiza torneos, partidos especiales y eventos para la comunidad
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* Información básica */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Información del evento</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Nombre del evento</Label>
                  <Input
                    placeholder="Ej: Torneo 3x3 Verano 2024"
                    className="bg-white/5 border-white/20"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Tipo de evento</Label>
                    <Select>
                      <SelectTrigger className="bg-white/5 border-white/20">
                        <SelectValue placeholder="Seleccionar tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="torneo">Torneo</SelectItem>
                        <SelectItem value="liga">Liga</SelectItem>
                        <SelectItem value="amistoso">Partido amistoso</SelectItem>
                        <SelectItem value="clinic">Clínic</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Formato</Label>
                    <Select>
                      <SelectTrigger className="bg-white/5 border-white/20">
                        <SelectValue placeholder="Formato de juego" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3x3">3x3</SelectItem>
                        <SelectItem value="5x5">5x5</SelectItem>
                        <SelectItem value="otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Descripción</Label>
                  <Textarea
                    placeholder="Describe el evento, formato, premios y toda la información relevante..."
                    className="bg-white/5 border-white/20 min-h-[100px]"
                  />
                </div>
              </div>
            </div>

            {/* Fecha y hora */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Fecha y hora</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Fecha inicio</Label>
                  <Input
                    type="date"
                    className="bg-white/5 border-white/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Hora inicio</Label>
                  <Input
                    type="time"
                    className="bg-white/5 border-white/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Fecha fin</Label>
                  <Input
                    type="date"
                    className="bg-white/5 border-white/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Hora fin</Label>
                  <Input
                    type="time"
                    className="bg-white/5 border-white/20"
                  />
                </div>
              </div>
            </div>

            {/* Ubicación y tipo de pista */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Ubicación y tipo de pista</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Pista</Label>
                  <Select>
                    <SelectTrigger className="bg-white/5 border-white/20">
                      <SelectValue placeholder="Seleccionar pista" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pista1">Pista Municipal Les Corts</SelectItem>
                      <SelectItem value="pista2">Club Baloncesto Sarrià</SelectItem>
                      <SelectItem value="pista3">Pista Vall d'Hebron</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Tipo de pista</Label>
                    <Select>
                      <SelectTrigger className="bg-white/5 border-white/20">
                        <SelectValue placeholder="Seleccionar tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cubierta">Cubierta</SelectItem>
                        <SelectItem value="aire-libre">Al aire libre</SelectItem>
                        <SelectItem value="semi-cubierta">Semi-cubierta</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Tipo de suelo</Label>
                    <Select>
                      <SelectTrigger className="bg-white/5 border-white/20">
                        <SelectValue placeholder="Seleccionar suelo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="parquet">Parquet</SelectItem>
                        <SelectItem value="sintetico">Sintético</SelectItem>
                        <SelectItem value="cemento">Cemento</SelectItem>
                        <SelectItem value="asfalto">Asfalto</SelectItem>
                        <SelectItem value="otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>

            {/* Participantes */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Participantes</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Mínimo participantes</Label>
                    <Input
                      type="number"
                      placeholder="Ej: 8"
                      className="bg-white/5 border-white/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Máximo participantes</Label>
                    <Input
                      type="number"
                      placeholder="Ej: 32"
                      className="bg-white/5 border-white/20"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Nivel requerido</Label>
                  <Select>
                    <SelectTrigger className="bg-white/5 border-white/20">
                      <SelectValue placeholder="Seleccionar nivel" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todos">Todos los niveles</SelectItem>
                      <SelectItem value="principiante">Principiante</SelectItem>
                      <SelectItem value="intermedio">Intermedio</SelectItem>
                      <SelectItem value="avanzado">Avanzado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Premios y cuotas */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Premios y cuotas</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Cuota de inscripción (€)</Label>
                  <Input
                    type="number"
                    placeholder="Ej: 20"
                    className="bg-white/5 border-white/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Premios</Label>
                  <Textarea
                    placeholder="Describe los premios para los ganadores..."
                    className="bg-white/5 border-white/20 min-h-[100px]"
                  />
                </div>
              </div>
            </div>

            {/* Características */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Características</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Trophy, label: "Trofeos" },
                  { icon: Medal, label: "Medallas" },
                  { icon: Gift, label: "Premios" },
                  { icon: Shield, label: "Seguro incluido" },
                  { icon: Target, label: "Árbitros oficiales" },
                  { icon: Users, label: "Equipos mixtos" },
                  { icon: Cloud, label: "Plan lluvia" },
                  { icon: Sun, label: "Plan calor" }
                ].map((feature) => (
                  <div
                    key={feature.label}
                    className="flex items-center justify-between p-4 rounded-xl bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <feature.icon className="h-5 w-5 text-gray-400" />
                      <span>{feature.label}</span>
                    </div>
                    <Switch />
                  </div>
                ))}
              </div>
            </div>

            {/* Imagen del evento */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Imagen del evento</h2>
              <div className="aspect-[16/9] rounded-xl border-2 border-dashed border-white/20 flex items-center justify-center bg-white/5 hover:bg-white/10 cursor-pointer transition-colors">
                <div className="text-center space-y-2">
                  <Upload className="h-8 w-8 mx-auto text-gray-400" />
                  <div className="text-sm text-gray-400">
                    Subir imagen del evento
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Botones de acción */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 pt-8"
          >
            <Button
              className="flex-1 bg-[#FFA726] hover:bg-[#FF9800] text-white"
            >
              Publicar evento
              <Check className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="flex-1 bg-white/5 hover:bg-white/10 border-white/20"
            >
              Guardar borrador
            </Button>
          </motion.div>
        </div>
      </main>
    </div>
  )
}