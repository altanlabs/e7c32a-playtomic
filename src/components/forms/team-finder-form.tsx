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
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

const teamFinderFormSchema = z.object({
  position: z.string({
    required_error: "Selecciona tu posición",
  }),
  level: z.string({
    required_error: "Selecciona tu nivel",
  }),
  availability: z.string({
    required_error: "Describe tu disponibilidad",
  }),
  description: z.string().min(10, {
    message: "La descripción debe tener al menos 10 caracteres",
  }),
})

const positions = ["Base", "Escolta", "Alero", "Ala-Pívot", "Pívot"]
const levels = ["Principiante", "Intermedio", "Avanzado", "Pro"]

export function TeamFinderForm() {
  const form = useForm<z.infer<typeof teamFinderFormSchema>>({
    resolver: zodResolver(teamFinderFormSchema),
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  function onSubmit(values: z.infer<typeof teamFinderFormSchema>) {
    setIsSubmitting(true)
    console.log(values)
    // Aquí iría la lógica de búsqueda de equipo
    setTimeout(() => {
      setIsSubmitting(false)
    }, 2000)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="position"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Posición preferida</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona tu posición" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {positions.map((position) => (
                    <SelectItem key={position} value={position}>
                      {position}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="level"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nivel de juego</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona tu nivel" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {levels.map((level) => (
                    <SelectItem key={level} value={level}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="availability"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Disponibilidad</FormLabel>
              <FormControl>
                <Input placeholder="Ej: Tardes y fines de semana" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sobre ti</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Cuéntanos sobre tu experiencia y lo que buscas..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Buscando..." : "Encontrar equipo"}
        </Button>
      </form>
    </Form>
  )
}