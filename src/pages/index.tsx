import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Users, Trophy, ArrowRight } from "lucide-react"
import { WaitlistForm } from "@/components/blocks/waitlist-form"

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-[#fff6e7]">
      {/* Previous sections remain the same until CTA Section */}
      
      {/* CTA Section */}
      <section className="relative h-[600px] bg-[#fff6e7] overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("https://api.altan.ai/platform/media/a446ede6-a8cf-41bf-9423-731deaa8fe1a?account_id=00e70dcf-ba54-4e8c-9d06-dc8372251dae")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-lg ml-auto"> {/* Positioned to the right */}
              <h2 className="text-4xl font-bold mb-4 text-white">
                ¿Listo para jugar?
              </h2>
              <p className="subtitle-font text-xl text-white/90 mb-8 font-light">
                Únete a la comunidad de baloncesto más grande de España
              </p>
              <Link to="/booking">
                <Button size="lg" 
                  className="bg-[#029455] hover:bg-[#029455]/90 text-white font-medium px-8 py-6 text-lg rounded-full hover-scale">
                  Reserva tu aro ahora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}