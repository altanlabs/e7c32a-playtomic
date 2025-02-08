import { CreateTournamentForm } from "@/components/blocks/forms/create-tournament-form"

export default function CreateTournamentPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Crear nuevo torneo</h1>
        <CreateTournamentForm />
      </div>
    </div>
  )
}