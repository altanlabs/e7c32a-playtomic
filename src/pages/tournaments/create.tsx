import { CreateTournamentForm } from "@/components/blocks/create-tournament-form"

export default function CreateTournamentPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Crear nuevo torneo</h1>
          <p className="text-muted-foreground">
            Organiza tu torneo de baloncesto 3x3 y gestiona las inscripciones
          </p>
        </div>

        <CreateTournamentForm />
      </div>
    </div>
  )
}