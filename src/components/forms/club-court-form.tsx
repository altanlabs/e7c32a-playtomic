import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
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
import { Checkbox } from "@/components/ui/checkbox"

const courtFormSchema = z.object({
  clubName: z.string().min(3, {
    message: "El nombre del club debe tener al menos 3 caracteres",
  }),
  address: z.string().min(10, {
    message: "La dirección debe ser completa",
  }),
  city: z.string().min(2, {
    message: "Introduce una ciudad válida",
  }),
  courtType: z.string({
    required_error: "Selecciona el tipo de pista",
  }),
  courtCount: z.string({
    required_error: "Indica el número de pistas",
  }),
  facilities: z.array(z.string()).min(1, {
    message: "Selecciona al menos una instalación",
  }),
  description: z.string().min(20, {
    message: "La descripción debe tener al menos 20 caracteres",
  }),
  price: z.string().min(1, {
    message: "Indica el precio por hora",
  }),
  contactName: z.string().min(3, {
    message: "Introduce el nombre de contacto",
  }),
  contactPhone: z.string().min(9, {
    message: "Introduce un teléfono válido",
  }),
  contactEmail: z.string().email({
    message: "Introduce un email válido",
  }),
  photos: z
    .any()
    .refine((files) => files?.length >= 1, "Sube al menos una foto de la pista")
    .refine(
      (files) => Array.from(files).every((file) => file.size <= 5000000),
      "Cada imagen debe ser menor a 5MB"
    ),
})

const courtTypes = ["Cubierta", "Exterior", "Mixta"]
const courtCounts = ["1", "2", "3", "4", "5+"]
const facilityOptions = [
  { id: "parking", label: "Parking" },
  { id: "showers", label: "Duchas" },
  { id: "lockers", label: "Taquillas" },
  { id: "bar", label: "Bar/Cafetería" },
  { id: "shop", label: "Tienda" },
  { id: "lighting", label: "Iluminación" },
]

export function ClubCourtForm() {
  const form = useForm<z.infer<typeof courtFormSchema>>({
    resolver: zodResolver(courtFormSchema),
    defaultValues: {
      facilities: [],
    },
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  function onSubmit(values: z.infer<typeof courtFormSchema>) {
    setIsSubmitting(true)
    console.log(values)
    // Aquí iría la lógica de publicación de la pista
    setTimeout(() => {
      setIsSubmitting(false)
    }, 2000)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Información del club</h3>
          <FormField
            control={form.control}
            name="clubName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre del club</FormLabel>
                <FormControl>
                  <Input placeholder="Nombre de tu club" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Dirección</FormLabel>
                <FormControl>
                  <Input placeholder="Dirección completa" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ciudad</FormLabel>
                <FormControl>
                  <Input placeholder="Ciudad" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Detalles de las pistas</h3>
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="courtType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo de pista</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona el tipo" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {courtTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
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
              name="courtCount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Número de pistas</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Número de pistas" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {courtCounts.map((count) => (
                        <SelectItem key={count} value={count}>
                          {count}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="facilities"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel>Instalaciones</FormLabel>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {facilityOptions.map((facility) => (
                    <FormField
                      key={facility.id}
                      control={form.control}
                      name="facilities"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={facility.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(facility.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, facility.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== facility.id
                                        )
                                      )
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {facility.label}
                            </FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descripción</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe las instalaciones, horarios, etc."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Precio por hora (€)</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="30" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Información de contacto</h3>
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="contactName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre de contacto</FormLabel>
                  <FormControl>
                    <Input placeholder="Nombre" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="contactPhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Teléfono</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="600123456" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="contactEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="contacto@club.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="photos"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fotos de las pistas</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(e) => field.onChange(e.target.files)}
                />
              </FormControl>
              <FormDescription>
                Sube fotos claras de las pistas (máx. 5MB por imagen)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Publicando..." : "Publicar pista"}
        </Button>
      </form>
    </Form>
  )
}