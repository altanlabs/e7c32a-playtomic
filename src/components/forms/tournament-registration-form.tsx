import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Checkbox } from "@/components/ui/checkbox"

const tournamentFormSchema = z.object({
  teamName: z.string().min(3, {
    message: "El nombre del equipo debe tener al menos 3 caracteres",
  }),
  category: z.string({
    required_error: "Selecciona una categoría",
  }),
  players: z.array(z.object({
    name: z.string(),
    phone: z.string(),
    email: z.string().email(),
  })).min(3, {
    message: "Debes registrar al menos 3 jugadores",
  }),
  acceptRules: z.boolean().refine(val => val === true, {
    message: "Debes aceptar el reglamento del torneo",
  }),
})

const categories = ["Open", "Pro", "Amateur", "Mixto", "Sub-23"]

export function TournamentRegistrationForm() {
  const form = useForm<z.infer<typeof tournamentFormSchema>>({
    resolver: zodResolver(tournamentFormSchema),
    defaultValues: {
      players: [{}],
      acceptRules: false,
    },
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  function onSubmit(values: z.infer<typeof tournamentFormSchema>) {
    setIsSubmitting(true)
    console.log(values)
    // Aquí iría la lógica de inscripción al torneo
    setTimeout(() => {
      setIsSubmitting(false)
    }, 2000)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="teamName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre del equipo</FormLabel>
              <FormControl>
                <Input placeholder="Nombre de tu equipo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Categoría</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona la categoría" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-4">
          <FormLabel>Jugadores</FormLabel>
          {[1, 2, 3].map((index) => (
            <div key={index} className="grid grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name={`players.${index - 1}.name`}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder={`Jugador ${index}`} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`players.${index - 1}.phone`}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Teléfono" type="tel" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`players.${index - 1}.email`}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Email" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          ))}
        </div>

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
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Inscribiendo..." : "Inscribir equipo"}
        </Button>
      </form>
    </Form>
  )
}