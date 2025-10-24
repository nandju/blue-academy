import { Shield, Recycle, Globe, Lightbulb, Eye, Target } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#0d6ebb] to-[#0DBD9F]">
      <div className="max-w-6xl mx-auto">
        {/* Main content card with cream background */}
        <div className="bg-[#F5F5DC] rounded-3xl p-12 md:p-16 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-wider text-[#0d6ebb] mb-4">À PROPOS DE NOUS</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-balance">
              Découvrez Notre Identité, Vision et Valeurs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed font-poppins text-lg">
              Nous sommes passionnés par la conservation des océans. Avec des années d'expérience dans la protection de l'environnement, nous nous sommes établis comme leaders dans la lutte contre la pollution plastique et la préservation des écosystèmes marins.
            </p>
          </div>

          {/* Values card */}
          <div className="bg-gradient-to-br from-[#0d6ebb] to-[#0DBD9F] rounded-3xl p-10 md:p-14 mb-16 font-poppins">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
              <div className="flex flex-col items-center text-center text-white">
                <Shield className="w-12 h-12 mb-4" />
                <p className="font-semibold text-lg">Protection</p>
              </div>
              <div className="flex flex-col items-center text-center text-white">
                <Recycle className="w-12 h-12 mb-4" />
                <p className="font-semibold text-lg">Durabilité</p>
              </div>
              <div className="flex flex-col items-center text-center text-white">
                <Globe className="w-12 h-12 mb-4" />
                <p className="font-semibold text-lg">Impact Global</p>
              </div>
              <div className="flex flex-col items-center text-center text-white">
                <Lightbulb className="w-12 h-12 mb-4" />
                <p className="font-semibold text-lg">Innovation</p>
              </div>
            </div>
          </div>

          {/* Vision and Mission */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 mb-16">
            {/* Vision */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-5">
                <Eye className="w-7 h-7 text-[#0d6ebb]" />
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed font-poppins text-base md:text-lg">
                Être à l'avant-garde de la conservation des océans en proposant des solutions innovantes, durables et impactantes qui créent un avenir sans plastique pour nos océans et la vie marine.
              </p>
            </div>

            {/* Mission */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-5">
                <Target className="w-7 h-7 text-[#0DBD9F]" />
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed font-poppins text-base md:text-lg">
                Mobiliser notre expertise, nos ressources et notre technologie pour combattre la pollution plastique, éduquer les communautés et mettre en œuvre des solutions qui dépassent les normes environnementales.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center flex justify-center items-center font-poppins pt-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#0d6ebb] to-[#0DBD9F] hover:opacity-90 text-white font-semibold px-10 py-6 rounded-full text-base md:text-lg shadow-lg hover:shadow-xl transition-all"
            >
              En Savoir Plus Sur Nous
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}