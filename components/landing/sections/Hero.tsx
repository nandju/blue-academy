"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative max-h-[calc(100vh-80px)] md:max-h-screen w-full mt-20 md:mt-10 lg:mt-0 overflow-hidden">
      {/* Video Background */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/assets/videos/ocean_loop.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      {/* <div
        className="absolute inset-0 bg-gradient-to-br from-[#0d6ebb]/80 to-[#0DBD9F]/80"
        style={{
          background: "linear-gradient(135deg, rgba(13, 110, 187, 0.5) 0%, rgba(13, 189, 159, 0.5) 100%)",
        }}
      /> */}
      <div className="absolute inset-0 bg-black/50" />

      {/* 🔹 Flou au bas de la section */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0d6ebb]/60 via-[#0d6ebb]/20 to-transparent backdrop-blur-lg pointer-events-none" /> */}

      {/* Contenu */}
      <div className="relative h-full flex items-center justify-center px-4 py-8 md:py-12 lg:py-20">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-6 text-balance leading-tight">
            Luttons contre la pollution plastique
            <br />
            <span className="text-[#0DBD9F]">Une vague à la fois</span>
          </h1>

          <p className="font-poppins text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-5 sm:mb-6 md:mb-8 max-w-3xl mx-auto text-pretty leading-relaxed px-2">
            Rejoignez-nous dans notre mission de protection des océans et de la vie marine contre les effets dévastateurs des déchets plastiques.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center font-poppins items-center">
            <Button
              size="lg"
              variant={"ghost"}
              className="bg-[#0DBD9F] hover:bg-[#0DBD9F]/90 text-white font-semibold px-6 md:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg w-full sm:w-auto"
            >
              S'engager
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#0d6ebb] font-semibold px-6 md:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg bg-transparent w-full sm:w-auto"
            >
              En savoir plus
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}