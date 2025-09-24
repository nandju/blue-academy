"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { GraduationCap, BookOpen, Users, Trophy, Code, Briefcase } from "lucide-react"
import Link from "next/link"

const courses = [
  {
    id: 1,
    title: "Bases du Code de l'Environnement",
    description: "Comprendre les principes et obligations du Code de l'Environnement pour une action conforme et responsable.",
    icon: Code,
    color: "from-[#0d6ebb] to-[#0DBD9F]",
    image: "/assets/images/illustrations/page-accueil/ite-1.jpg",
  },
  {
    id: 2,
    title: "Lutte contre la pollution plastique",
    description: "Identifier les sources, impacts et solutions pratiques pour réduire la pollution plastique à l'échelle locale.",
    icon: Trophy,
    color: "from-[#0DBD9F] to-[#0d6ebb]",
    image: "/assets/images/illustrations/page-accueil/ite-2.jpg",
  },
  {
    id: 3,
    title: "Gestion et tri des déchets",
    description: "Bonnes pratiques de tri, valorisation et organisation locale des filières de déchets.",
    icon: Users,
    color: "from-[#0d6ebb] to-[#0DBD9F]",
    image: "/assets/images/illustrations/page-accueil/ite-3.jpg",
  },
  {
    id: 4,
    title: "Sensibilisation & mobilisation communautaire",
    description: "Techniques et outils pour animer des actions de sensibilisation et mobiliser les communautés locales.",
    icon: Briefcase,
    color: "from-[#0DBD9F] to-[#0d6ebb]",
    image: "/assets/images/illustrations/page-accueil/ite-4.jpg",
  },
  {
    id: 5,
    title: "Suivi, évaluation et reporting environnemental",
    description: "Mesurer l'impact des actions, construire des indicateurs et produire des rapports exploitables.",
    icon: BookOpen,
    color: "from-[#0d6ebb] to-[#0DBD9F]",
    image: "/assets/images/illustrations/page-accueil/ite-5.jpg",
  },
];


export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [backgroundImage, setBackgroundImage] = useState(courses[0].image)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % courses.length
        setBackgroundImage(courses[next].image)
        return next
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const getCardPosition = (index: number) => {
    const diff = (index - currentIndex + courses.length) % courses.length
    const positions = [
      "translate-x-0 z-30 scale-110", // center
      "translate-x-40 z-20 scale-95 rotate-12", // right
      "translate-x-80 z-10 scale-75 rotate-24", // far right
      "-translate-x-80 z-10 scale-75 -rotate-24", // far left
      "-translate-x-40 z-20 scale-95 -rotate-12", // left
    ]
    return positions[diff] || "translate-x-96 z-0 scale-50 opacity-0"
  }

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-white/75" />
        {/* <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" /> */}
      </div>

      {/* Content */}
      <div className="relative z-40 flex flex-col items-center justify-center min-h-screen px-6 py-12">
        {/* Logo avec plus d'espacement */}
        <div className="mb-20">
          <div className="flex items-center gap-4 p-6 rounded-3xl bg-white/90 backdrop-blur-sm border border-[#0d6ebb]/20 shadow-lg">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-[#0d6ebb] to-[#0DBD9F]">
              <img 
                src="/assets/images/logo.png"
                alt="LearnHub Logo"
                className="h-10 w-10 rounded-lg"
              />
            </div>
            <h1 className="text-3xl font-bold text-[#0d6ebb]">Academy</h1>
          </div>
        </div>

        {/* Rotating Cards avec plus d'espacement */}
        <div className="relative w-full max-w-5xl h-96 mb-20">
          <div className="absolute inset-0 flex items-center justify-center">
            {courses.map((course, index) => {
              const IconComponent = course.icon
              return (
                <Card
                  key={course.id}
                  className={`absolute w-80 h-80 transition-all duration-700 ease-in-out transform ${getCardPosition(index)} bg-white/95 backdrop-blur-sm border-[#0d6ebb]/20 hover:border-[#0DBD9F]/60 shadow-xl hover:shadow-2xl`}
                >
                  <div className="p-6 h-full flex flex-col">
                    {/* Header avec icône */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${course.color} shadow-lg`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-bold text-lg text-[#0d6ebb]">{course.title}</h3>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-6 flex-1 leading-relaxed">
                      {course.description}
                    </p>
                    
                    {/* Image de cours */}
                    <div className="w-full h-32 rounded-xl overflow-hidden shadow-lg">
                      <img 
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Main Heading adapté à BLUE ACADEMY */}
        <div className="text-center mb-16 max-w-4xl px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-[#0d6ebb] mb-8 leading-tight">
            Formez-vous pour
            <span className="block bg-gradient-to-r from-[#0d6ebb] to-[#0DBD9F] bg-clip-text text-transparent">
            Protéger l’Environnement
            </span>
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Découvrez nos formations en ligne dédiées aux bénévoles de BLUE CI, 
            alliant savoir, engagement et certifications pour renforcer la lutte 
            contre la pollution plastique et préserver notre planète.
        </p>
        </div>


        {/* Bouton de connexion adapté à BLUE ACADEMY */}
        <Link href="/login">
            <Button
            size="lg"
            className="px-10 py-8 text-xl font-bold bg-gradient-to-r from-[#0d6ebb] to-[#0DBD9F] hover:from-[#0DBD9F] hover:to-[#0d6ebb] text-white rounded-full transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl mb-12"
            >
            Je participe
            <div className="ml-3 w-3 h-3 bg-white rounded-full animate-pulse" />
            </Button>
        </Link>

        {/* Indicateurs de cours avec plus d'espacement */}
        {/* <div className="flex gap-3 mt-4">
          {courses.map((_, index) => (
            <Button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? "bg-[#0d6ebb] w-12 shadow-lg" 
                  : "bg-gray-300 w-3 hover:bg-[#0DBD9F]/60"
              }`}
            />
          ))}
        </div> */}
      </div>
    </div>
  )
}