"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const trainingImages = [
  // "/assets/images/illustrations/page-landing/blue_training_1.png",
  "/assets/images/illustrations/page-landing/blue_training_2.png",
  // "/assets/images/illustrations/page-landing/blue_training_3.png",
  "/assets/images/illustrations/page-landing/blue_training_4.png",
  "/assets/images/illustrations/page-landing/blue_training_5.png"
]

export function BlueAcademyCTA() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % trainingImages.length)
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 md:py-24 bg-[#F5F5DC]">
       {/* <section className="py-16 md:py-24 bg-gradient-to-br from-gray-100 to-gray-200"></section> */}
      <div className="container mx-auto px-4">
        <div className="shadow-xl rounded-3xl">
          {/* <div className="bg-white rounded-3xl p-4 md:p-6 shadow-xl"></div> */}
          <div className="bg-gradient-to-br from-[#0d6ebb] to-[#0DBD9F] rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center p-8 md:p-12 lg:p-16">
              {/* Left Content */}
              <div className="text-white space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance">
                  Prêt à transformer votre impact sur la protection des océans ?
                </h2>
                <p className="text-lg font-poppins md:text-xl text-white/90 leading-relaxed">
                  Découvrez le futur de l’éducation environnementale avec notre plateforme innovante <strong>BLUE Academy</strong>.
                  Formez dès aujourd’hui des volontaires et amplifiez votre impact pour un océan plus propre !
                </p>
                <Button
                  size="lg"
                  className="bg-white font-poppins text-[#0d6ebb] hover:bg-gray-100 font-semibold text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Rejoindre BLUE Academy
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              {/* Right Images - Rotating */}
              <div className="relative h-[300px] md:h-[400px] lg:h-[450px]">
                {trainingImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="relative h-full w-full">
                      {/* Image principale */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] md:w-[320px] lg:w-[360px] transform rotate-2 hover:rotate-0 transition-transform duration-300">
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`BLUE Academy Training ${index + 1}`}
                          className="w-full h-[340px] md:h-[400px] lg:h-[440px] object-cover rounded-2xl"
                        />
                      </div>

                      {/* Image secondaire */}
                      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[180px] md:w-[200px] lg:w-[220px] hidden sm:block transform -rotate-3">
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`BLUE Academy Preview ${index + 1}`}
                          className="w-full h-[160px] md:h-[200px] lg:h-[220px] object-cover rounded-2xl opacity-80"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
