import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PlayerLevelSelector } from "./player-level-selector"
import { motion, AnimatePresence } from "framer-motion"
import { User, Building2, Mail, Lock, Phone, MapPin } from "lucide-react"

interface AuthDialogProps {
  isOpen: boolean
  onClose: () => void
  defaultTab?: "player" | "club"
  defaultView?: "login" | "register"
}

export function AuthDialog({ 
  isOpen, 
  onClose, 
  defaultTab = "player",
  defaultView = "login"
}: AuthDialogProps) {
  const [tab, setTab] = useState(defaultTab)
  const [view, setView] = useState(defaultView)
  const [playerLevel, setPlayerLevel] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica de autenticación
    console.log("Form submitted")
  }

  const switchView = () => {
    setView(view === "login" ? "register" : "login")
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-black/95 border-white/10">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            {view === "login" ? "Iniciar sesión" : "Crear cuenta"}
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue={defaultTab} className="w-full" onValueChange={(value) => setTab(value as "player" | "club")}>
          <TabsList className="grid w-full grid-cols-2 bg-white/5">
            <TabsTrigger value="player" className="data-[state=active]:bg-[#FFA726]">
              <User className="w-4 h-4 mr-2" />
              Jugador
            </TabsTrigger>
            <TabsTrigger value="club" className="data-[state=active]:bg-[#FFA726]">
              <Building2 className="w-4 h-4 mr-2" />
              Club
            </TabsTrigger>
          </TabsList>

          <TabsContent value="player">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4 py-4"
              onSubmit={handleSubmit}
            >
              {view === "register" && (
                <>
                  <div className="space-y-2">
                    <Label>Nombre completo</Label>
                    <Input
                      type="text"
                      placeholder="Tu nombre"
                      className="bg-white/5"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Nivel de juego</Label>
                    <PlayerLevelSelector onSelect={setPlayerLevel} />
                  </div>
                </>
              )}

              <div className="space-y-2">
                <Label>Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="tu@email.com"
                    className="pl-10 bg-white/5"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Contraseña</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="password"
                    placeholder="••••••••"
                    className="pl-10 bg-white/5"
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full bg-[#FFA726] hover:bg-[#FF9800]">
                {view === "login" ? "Iniciar sesión" : "Crear cuenta"}
              </Button>

              <p className="text-center text-sm text-gray-400">
                {view === "login" ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}{" "}
                <button
                  type="button"
                  onClick={switchView}
                  className="text-[#FFA726] hover:underline"
                >
                  {view === "login" ? "Regístrate" : "Inicia sesión"}
                </button>
              </p>
            </motion.form>
          </TabsContent>

          <TabsContent value="club">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4 py-4"
              onSubmit={handleSubmit}
            >
              {view === "register" && (
                <>
                  <div className="space-y-2">
                    <Label>Nombre del club</Label>
                    <Input
                      type="text"
                      placeholder="Nombre del club"
                      className="bg-white/5"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Teléfono</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        type="tel"
                        placeholder="+34 600 000 000"
                        className="pl-10 bg-white/5"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Dirección</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        type="text"
                        placeholder="Dirección completa"
                        className="pl-10 bg-white/5"
                        required
                      />
                    </div>
                  </div>
                </>
              )}

              <div className="space-y-2">
                <Label>Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="club@email.com"
                    className="pl-10 bg-white/5"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Contraseña</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="password"
                    placeholder="••••••••"
                    className="pl-10 bg-white/5"
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full bg-[#FFA726] hover:bg-[#FF9800]">
                {view === "login" ? "Iniciar sesión" : "Crear cuenta"}
              </Button>

              <p className="text-center text-sm text-gray-400">
                {view === "login" ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}{" "}
                <button
                  type="button"
                  onClick={switchView}
                  className="text-[#FFA726] hover:underline"
                >
                  {view === "login" ? "Regístrate" : "Inicia sesión"}
                </button>
              </p>
            </motion.form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}