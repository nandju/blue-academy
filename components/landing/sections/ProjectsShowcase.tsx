"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, ArrowRight, Waves, Users, GraduationCap, Lightbulb } from "lucide-react"
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
    color: "from-[#0d6ebb] to-[#0DBD9F]",
    image: "/assets/images/illustrations/page-landing/action_1.jpg",
  },
  {
    id: 2,
    title: "Programmes de Sensibilisation Communautaire",
    category: "Sensibilisation",
    description:
      "Autonomiser les communautés par l'éducation et l'engagement. Nous avons touché plus de 100 000 personnes avec nos campagnes de sensibilisation, inspirant des changements de comportement et des pratiques durables.",
    icon: Users,
    color: "from-[#0DBD9F] to-[#0d6ebb]",
    image: "/assets/images/illustrations/page-landing/action_2.jpg",
  },
  {
    id: 3,
    title: "Formation Blue Academy",
    category: "Formation",
    description:
      "Renforcer les capacités grâce à des programmes de formation complets. Notre Blue Academy a formé plus de 5 000 défenseurs de l'environnement, les équipant de compétences pour diriger des initiatives locales.",
    icon: GraduationCap,
    color: "from-[#0d6ebb] to-[#0DBD9F]",
    image: "/assets/images/illustrations/page-landing/action_3.jpg",
  },
  {
    id: 4,
    title: "Laboratoire d'Innovation",
    category: "Innovation",
    description:
      "Solutions pionnières pour un avenir sans plastique. Notre laboratoire d'innovation développe des technologies de pointe et des alternatives durables, transformant les déchets plastiques en ressources précieuses.",
    icon: Lightbulb,
    color: "from-[#0DBD9F] to-[#0d6ebb]",
    image: "/assets/images/illustrations/page-landing/action_4.jpg",
  },
]

export function ProjectsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % projects.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handlePrevious = () => {
    setIsAutoPlaying(false)
    setActiveIndex((current) => (current - 1 + projects.length) % projects.length)
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setActiveIndex((current) => (current + 1) % projects.length)
  }

  const activeProject = projects[activeIndex]

  return (
    <section className="relative py-16 md:py-24 px-4 bg-[#F5F5DC] overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 md:mb-16 gap-6">
          <div className="flex-1">
            <div
              
              className="text-sm font-semibold tracking-wider text-[#0d6ebb] mb-4"
            >
              Accès Complet
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-balance">
              Explorez Nos Études de Cas
            </h2>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-6 mb-12 font-poppins">
          {/* Featured Project Card */}
          <Card className="relative overflow-hidden h-[450px] md:h-[500px] bg-white border-0 shadow-lg p-0 group">
            <div className="relative h-[450px] md:h-[500px] overflow-hidden rounded-2xl m-4 md:m-6">
              <img
                src={activeProject.image || "/placeholder.svg"}
                alt={activeProject.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${activeProject.color} opacity-50`} />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4 text-balance leading-tight">
                    {activeProject.title}
                  </h3>
                  <p className="text-white/95 text-sm md:text-base leading-relaxed max-w-lg">
                    {activeProject.description.split(".").slice(0, 2).join(".")}.</p>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center gap-3">
                  <Button
                    size="icon"
                    variant="secondary"
                    onClick={handlePrevious}
                    className="bg-white/95 hover:bg-white text-[#0d6ebb] h-10 w-10 rounded-full shadow-lg"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    size="icon"
                    variant="secondary"
                    onClick={handleNext}
                    className="bg-white/95 hover:bg-white text-[#0d6ebb] h-10 w-10 rounded-full shadow-lg"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                  <div className="flex gap-2 ml-2">
                    {projects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setActiveIndex(index)
                          setIsAutoPlaying(false)
                        }}
                        className={`h-1.5 rounded-full transition-all ${
                          index === activeIndex ? "w-8 bg-white" : "w-4 bg-white/60 hover:bg-white/80"
                        }`}
                        aria-label={`Aller au projet ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Side Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
            {projects.slice(1, 4).map((project, idx) => {
              const ProjectIcon = project.icon
              const realIndex = idx + 1
              return (
                <Card
                  key={project.id}
                  className={`relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] border-0 shadow-md hover:shadow-xl ${
                    realIndex === activeIndex ? "ring-2 ring-[#0d6ebb]" : ""
                  }`}
                  onClick={() => {
                    setActiveIndex(realIndex)
                    setIsAutoPlaying(false)
                  }}
                >
                  <div className="relative h-[180px] md:h-[160px] overflow-hidden rounded-xl m-3">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-75`} />

                    <div className="absolute inset-0 p-4 md:p-5 flex flex-col justify-between">
                      <div className="flex items-start justify-between">
                        <span className="text-xs font-semibold text-white/90 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                        <Button
                          size="icon"
                          variant="secondary"
                          className="h-9 w-9 rounded-full bg-white/95 hover:bg-white text-[#0d6ebb] shadow-md"
                        >
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>

                      <div>
                        <h4 className="text-white font-bold text-base md:text-lg leading-tight text-balance">
                          {project.title}
                        </h4>
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Description and CTA */}
        <div className="max-w-4xl font-poppins">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
            Découvrez un trésor d'histoires de réussite et d'études de cas perspicaces qui illuminent le parcours de
            l'innovation et de l'entrepreneuriat. Des startups pionnières aux stratégies révolutionnaires de l'industrie,
            plongez dans des exemples concrets qui inspirent, informent et guident.
          </p>
          <Button 
            className="bg-gradient-to-r from-[#0d6ebb] to-[#0DBD9F] hover:opacity-90 text-white font-semibold group px-8 py-6 rounded-full shadow-lg"
          >
            Explorer en Détails
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}