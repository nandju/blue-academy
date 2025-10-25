"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Waves, Users, GraduationCap, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const projects = [
  {
    id: 1,
    title: "Initiative de Nettoyage des Océans",
    category: "Nettoyage",
    description:
      "Rejoignez notre mission pour retirer les déchets plastiques des océans et des côtes. Nos équipes dévouées ont collecté plus de 500 tonnes de débris plastiques, protégeant la vie marine et restaurant les écosystèmes côtiers.",
    icon: Waves,
    cardColor: "from-[#0d6ebb] to-[#0DBD9F]",
    image: "/assets/images/illustrations/page-landing/action_1.jpg",
  },
  {
    id: 2,
    title: "Programmes de Sensibilisation Communautaire",
    category: "Sensibilisation",
    description:
      "Autonomiser les communautés grâce à l’éducation et à l’engagement. Nous avons touché plus de 100 000 personnes avec nos campagnes de sensibilisation, inspirant des changements de comportement et des pratiques durables.",
    icon: Users,
    cardColor: "from-white to-gray-50",
    image: "/assets/images/illustrations/page-landing/action_2.jpg",
  },
  {
    id: 3,
    title: "Formation Blue Academy",
    category: "Formation",
    description:
      "Renforcer les capacités grâce à des programmes de formation complets. Notre Blue Academy a formé plus de 5 000 défenseurs de l’environnement, leur donnant les compétences nécessaires pour diriger des initiatives locales.",
    icon: GraduationCap,
    cardColor: "from-gray-50 to-white",
    image: "/assets/images/illustrations/page-landing/action_3.jpg",
  },
  {
    id: 4,
    title: "Laboratoire d’Innovation",
    category: "Innovation",
    description:
      "Des solutions pionnières pour un avenir sans plastique. Notre laboratoire d’innovation développe des technologies de pointe et des alternatives durables, transformant les déchets plastiques en ressources précieuses.",
    icon: Lightbulb,
    cardColor: "from-[#0DBD9F] to-[#0d6ebb]",
    image: "/assets/images/illustrations/page-landing/action_4.jpg",
  },
]


export function ProjectsShowcase() {
  const [backgroundIndex, setBackgroundIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((current) => (current + 1) % projects.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen py-20 px-4 overflow-hidden">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === backgroundIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={project.image || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
          {/* <div className="absolute inset-0 bg-gradient-to-br from-[#0d6ebb]/80 to-[#0DBD9F]/80" /> */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {projects.map((project, index) => {
              const Icon = project.icon
              const isColoredCard = index === 0 || index === 3

              return (
                <Card
                  key={project.id}
                  className={`p-6 backdrop-blur-sm transition-all opacity-80 hover:opacity-100 duration-300 hover:scale-105 hover:shadow-2xl ${
                    index % 2 === 0 ? "lg:ml-0" : "lg:ml-12"
                  } ${
                    isColoredCard
                      ? `bg-gradient-to-br ${project.cardColor} text-white border-0`
                      : "bg-white/95 text-gray-900 border-gray-200"
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-lg ${
                        isColoredCard ? "bg-white/20" : "bg-gradient-to-br from-[#0d6ebb] to-[#0DBD9F]"
                      }`}
                    >
                      <Icon className={`h-6 w-6 ${isColoredCard ? "text-white" : "text-white"}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold mb-2 ${isColoredCard ? "text-white" : "text-gray-900"}`}>
                        {project.title}
                      </h3>
                      <p
                        className={`text-sm font-poppins leading-relaxed mb-4 ${isColoredCard ? "text-white/90" : "text-gray-600"}`}
                      >
                        {project.description.split(".")[0]}.
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className={`p-0 h-auto font-poppins font-semibold hover:bg-transparent group ${
                          isColoredCard ? "text-white hover:text-white/80" : "text-[#0d6ebb] hover:text-[#0DBD9F]"
                        }`}
                      >
                        Continuer
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          <div className="text-white lg:pl-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
              Luttons Ensemble contre la Pollution Plastique
            </h2>
            <p className="text-lg font-poppins md:text-xl leading-relaxed mb-6 text-white/90">
              Marre de voir nos océans étouffés par le plastique ? Des heures passées à nettoyer les plages pour finalement voir
              encore plus de déchets apparaître ? Nous savons à quel point cette tâche peut être décourageante et épuisante.
            </p>
            <p className="text-lg font-poppins md:text-xl leading-relaxed mb-6 text-white/90">
              HappyActions vous apporte une solution inédite pour lutter contre la pollution plastique sous plusieurs angles.
            </p>
            <p className="text-lg font-poppins md:text-xl leading-relaxed text-white/90">
              Obtenez des résultats rapides et voyez un véritable impact en un simple clic grâce à nos puissantes initiatives de
              projets — et c’est quelque chose que vous allez adorer.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
