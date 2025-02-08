import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const playerSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Introduce un email válido.",
  }),
})

const formSchema = z.object({
  teamName: z.string().min(2, {
    message: "El nombre del equipo debe tener al menos 2 caracteres.",
  }),
  captainName: z.string().min(2, {
    message: "El nombre del capitán debe tener al menos 2 caracteres.",
  }),
  phone: z.string().min(9, {
    message: "Introduce un número de teléfono válido.",
  }),
  email: z.string().email({
    message: "Introduce un email válido.",
  }),
  teamSize: z.enum(["3", "4"], {
    required_error: "Debes seleccionar el tamaño del equipo.",
  }),
  players: z.array(playerSchema).min(2, {
    message: "Debes añadir al menos 2 jugadores adicionales.",
  }),
  acceptRules: z.boolean().refine((val) => val === true, {
    message: "Debes aceptar el reglamento del torneo.",
  }),
})

export default function JoinTournamentPage() {
  const [searchParams] = useSearchParams()
  const tournamentId = searchParams.get("id")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [teamSize, setTeamSize] = useState("3")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      teamName: "",
      captainName: "",
      phone: "",
      email: "",
      teamSize: "3",
      players: [{name: "", email: ""}, {name: "", email: ""}],
      acceptRules: false,
    },
  })

  const { fields, append, remove } = form.watch("players")

  const updateTeamSize = (size: string) => {
    setTeamSize(size)
    const currentPlayers = form.getValues("players")
    if (size === "3" && currentPlayers.length > 2) {
      // Reducir a 2 jugadores adicionales para equipo de 3
      while (currentPlayers.length > 2) {
        remove(currentPlayers.length - 1)
      }
    } else if (size === "4" && currentPlayers.length < 3) {
      // Añadir jugador para equipo de 4
      append({ name: "", email: "" })
    }
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      console.log(values)
      // Aquí iría la lógica para enviar los datos al backend
      alert("¡Inscripción realizada con éxito!")
    } catch (error) {
      console.error(error)
      alert("Error al realizar la inscripción")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container max-w-2xl mx-auto px-4 py-8">
      <Card className="p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">Inscripción al torneo</h1>
          <p className="text-muted-foreground">
            Rellena el formulario para inscribir a tu equipo
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Datos del equipo */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Datos del equipo</h2>
              
              <FormField
                control={form.control}
                name="teamName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre del equipo</FormLabel>
                    <FormControl>
                      <Input placeholder="Los Invencibles" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="teamSize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tamaño del equipo</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={(value) => {
                          field.onChange(value)
                          updateTeamSize(value)
                        }}
                        defaultValue={field.value}
                        className="flex gap-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="3" id="team-3" />
                          <label htmlFor="team-3">3 jugadores</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="4" id="team-4" />
                          <label htmlFor="team-4">4 jugadores</label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Separator />

            {/* Datos del capitán */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Datos del capitán</h2>
              
              <FormField
                control={form.control}
                name="captainName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre completo</FormLabel>
                    <FormControl>
                      <Input placeholder="Juan Pérez" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Teléfono</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="666555444" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="tu@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <Separator />

            {/* Datos de los jugadores */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Jugadores adicionales</h2>
              
              {form.getValues("players").map((_, index) => (
                <div key={index} className="space-y-4 p-4 border rounded-lg">
                  <h3 className="font-medium">Jugador {index + 2}</h3>
                  
                  <FormField
                    control={form.control}
                    name={`players.${index}.name`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre completo</FormLabel>
                        <FormControl>
                          <Input placeholder="Nombre del jugador" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`players.${index}.email`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="jugador@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              ))}
            </div>

            <Separator />

            {/* Aceptar reglamento */}
            <FormField
              control={form.control}
              name="acceptRules"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Acepto el reglamento del torneo y las condiciones de participación
                    </FormLabel>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Botón de envío */}
            <div className="pt-4">
              <Button 
                type="submit" 
                className="w-full bg-[#FFA726] hover:bg-[#FF9800]"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Completar inscripción"}
              </Button>
            </div>
          </form>
        </Form>
      </Card>
    </div>
  )
}