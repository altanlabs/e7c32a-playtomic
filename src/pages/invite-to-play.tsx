import { InviteToPlayForm } from "@/components/blocks/forms/invite-to-play-form"

export default function InviteToPlayPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Invitar a jugar</h1>
        <InviteToPlayForm />
      </div>
    </div>
  )
}