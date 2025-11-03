"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-20 lg:pt-0">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/videos/ocean_loop.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />

      {/* Contenu centré */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl xl:max-w-6xl">
          <div className="flex flex-col items-center justify-center text-center space-y-6 lg:space-y-8 xl:space-y-10">
            {/* Titre principal */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white leading-tight">
              Luttons contre la pollution plastique
              <br />
              {/* <span className="text-[#0DBD9F] inline-block mt-2 lg:mt-3">
                Une vague à la fois
              </span> */}
            </h1>

            {/* Sous-titre */}
            <p className="font-poppins text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-white/95 max-w-3xl xl:max-w-4xl mx-auto leading-relaxed">
              Rejoignez-nous dans notre mission de protection des océans et de la vie marine contre les effets dévastateurs des déchets plastiques.
            </p>

            {/* Boutons d'action */}
            <div className="flex flex-col font-poppins sm:flex-row gap-4 lg:gap-5 justify-center items-center w-full sm:w-auto pt-2 lg:pt-4">
              <Button
                size="lg"
                className="bg-[#0DBD9F] hover:bg-[#0DBD9F]/90 text-white font-semibold px-8 lg:px-10 py-6 lg:py-7 text-base lg:text-lg w-full sm:w-auto transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                S'engager
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#0d6ebb] font-semibold px-8 lg:px-10 py-6 lg:py-7 text-base lg:text-lg bg-transparent w-full sm:w-auto transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                En savoir plus
              </Button>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}