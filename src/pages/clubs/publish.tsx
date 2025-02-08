import { ClubCourtForm } from "@/components/forms/club-court-form"

export default function PublishCourtPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Publica tu pista</h1>
          <p className="text-muted-foreground">
            Añade tu club o pista a nuestra plataforma y empieza a recibir reservas
          </p>
        </div>

        <div className="bg-card rounded-lg border p-6">
          <ClubCourtForm />
        </div>
      </div>
    </div>
  )
}