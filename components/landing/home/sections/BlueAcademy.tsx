"use client"

import React, { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Heart, Users, GraduationCap, ArrowRight, X, Sparkles } from "lucide-react"
import Image from "next/image"

interface CTAItem {
  id: string
  title: string
  icon: React.ReactNode
  image: string
  description: string
  fullDescription: string
  benefits: string[]
}

const ctaItems: CTAItem[] = [
  {
    id: "volunteer",
    title: "Devenez Bénévole",
    icon: <Users className="w-12 h-12" />,
    image: "/assets/images/illustrations/page-landing/testimonials/volunteers-beach-cleanup-teamwork-ocean-conservat.jpg",
    description: "Rejoignez notre mouvement mondial",
    fullDescription:
      "Ayez un impact direct dans la lutte contre la pollution plastique en rejoignant notre réseau de bénévoles. Que vous puissiez consacrer quelques heures par mois ou devenir un membre régulier de l'équipe, votre contribution compte.",
    benefits: [
      "Participez aux événements de nettoyage des plages et océans",
      "Dirigez des campagnes de sensibilisation communautaire",
      "Connectez-vous avec des défenseurs de l'environnement partageant les mêmes idées",
      "Recevez une formation et une certification",
      "Faites une différence mesurable dans votre communauté",
    ],
  },
  {
    id: "donate",
    title: "Faire un Don",
    icon: <Heart className="w-12 h-12" />,
    image: "/assets/images/illustrations/page-landing/testimonials/donation-support-ocean-conservation-funding-enviro.jpg",
    description: "Soutenez notre mission",
    fullDescription:
      "Votre soutien financier nous permet d'étendre notre portée, de financer des recherches critiques et de mettre en œuvre des solutions innovantes pour lutter contre la pollution plastique. Chaque contribution, quelle que soit sa taille, crée un changement durable.",
    benefits: [
      "Financez les opérations de nettoyage des océans et l'équipement",
      "Soutenez les projets de recherche et d'innovation",
      "Permettez les programmes éducatifs dans les écoles",
      "Fournissez des ressources pour les initiatives communautaires",
      "Allocation des fonds 100% transparente",
    ],
  },
  {
    id: "academy",
    title: "Rejoignez Blue Academy",
    icon: <GraduationCap className="w-12 h-12" />,
    image: "/assets/images/illustrations/page-landing/testimonials/online-education-environmental-training-sustainabil.jpg",
    description: "Apprenez et dirigez le changement",
    fullDescription:
      "Blue Academy est notre plateforme de formation en ligne complète conçue pour équiper les bénévoles, les éducateurs et les activistes avec les connaissances et les compétences nécessaires pour conduire un changement environnemental significatif.",
    benefits: [
      "Accédez à des cours dirigés par des experts en conservation marine",
      "Apprenez la science de la pollution plastique et les solutions",
      "Acquérez des compétences en leadership et en plaidoyer",
      "Obtenez des certifications reconnues",
      "Rejoignez une communauté mondiale de créateurs de changement",
    ],
  },
]

export function CallToActionSection() {
  const [selectedCTA, setSelectedCTA] = useState<CTAItem | null>(null)

  return (
    <section className="relative py-6 overflow-hidden">
      {/* Background avec gradient et motif */}
      <div className="absolute inset-0 bg-[#F5F5DC]" />
      {/* <div className="absolute inset-0 bg-gradient-to-br from-[#0d6ebb] via-[#0e9aaa] to-[#0DBD9F]" /> */}
      {/* <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} /> */}

      <div className="container mx-auto px-4 relative z-10">
        {/* En-tête de section */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 text-[#0d6ebb] bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full ">
            <Sparkles className="w-4 h-4 " />
            <span className=" text-sm font-medium">Rejoignez-nous</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-black ">
            Passez à l'Action Aujourd'hui
          </h2>
          {/* <p className="text-xl font-poppins text-black max-w-3xl mx-auto leading-relaxed">
            Choisissez comment vous souhaitez faire la différence dans la lutte contre la pollution plastique
          </p> */}
        </div>

        {/* Cartes CTA modernes */}
        <div className="flex justify-center items-center text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-24 max-w-6xl mx-auto">
          {ctaItems.map((item, index) => (
            <div
              key={item.id}
              className="group cursor-pointer"
              onClick={() => setSelectedCTA(item)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-[220px] w-[220px] sm:h-[240px] sm:w-[240px] md:h-[260px] md:w-[260px] rounded-full overflow-hidden shadow-lg transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_12px_35px_rgba(0,0,0,0.25)]">
                {/* Image de fond */}
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay avec gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d6ebb] via-[#0d6ebb]/80 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Contenu */}
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-white">
                  {/* Icône */}
                  <div className="mb-2 transform transition-all duration-300 group-hover:-translate-y-1">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-[#0DBD9F] to-[#0d6ebb] shadow-md">
                      {item.icon}
                    </div>
                  </div>

                  {/* Titre */}
                  <h3 className="text-lg font-bold mb-1 transform transition-all duration-300 group-hover:-translate-y-1">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs font-poppins text-white/90 mb-3 leading-snug transform transition-all duration-300 group-hover:-translate-y-1">
                    {item.description}
                  </p>

                  {/* Bouton CTA */}
                  <div className="flex font-poppins items-center gap-1 text-[#F5F5DC] font-semibold text-xs transform transition-all duration-300  group-hover:gap-3">
                    <span>En savoir plus</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Effet de brillance */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000" />
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>

      {/* Modal amélioré */}
      <Dialog open={!!selectedCTA} onOpenChange={() => setSelectedCTA(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0 bg-[#F5F5DC] border-none">
          {selectedCTA && (
            <div className="relative">
              {/* Bouton fermer personnalisé */}
              <button
                onClick={() => setSelectedCTA(null)}
                className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all hover:scale-110 shadow-lg"
              >
                <X className="w-5 h-5 text-[#0d6ebb]" />
              </button>

              {/* En-tête avec image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={selectedCTA.image || "/placeholder.svg"}
                  alt={selectedCTA.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d6ebb] via-[#0d6ebb]/60 to-transparent" />
                
                {/* Contenu de l'en-tête */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-[#0DBD9F] to-[#0d6ebb] shadow-xl mb-4">
                    <div  className="w-8 h-8" >
                      {React.cloneElement(selectedCTA.icon as React.ReactElement, )}
                    </div>
                  </div>
                  <DialogTitle className="text-4xl font-bold mb-2">{selectedCTA.title}</DialogTitle>
                  <p className="text-white/90 font-poppins text-lg">{selectedCTA.description}</p>
                </div>
              </div>

              {/* Contenu scrollable */}
              <div className="max-h-[calc(90vh-18rem)] overflow-y-auto">
                <DialogHeader>
                  <DialogDescription className="text-base text-gray-800 p-8 space-y-8">
                    {/* Description complète */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                      <p className="text-lg font-poppins leading-relaxed text-gray-700">
                        {selectedCTA.fullDescription}
                      </p>
                    </div>

                    {/* Avantages */}
                    <div className="bg-gradient-to-br from-[#0d6ebb]/5 to-[#0DBD9F]/5 rounded-2xl p-6">
                      <h4 className="font-bold text-2xl mb-6 text-[#0d6ebb] flex items-center gap-2">
                        <Sparkles className="w-6 h-6 text-[#0DBD9F]" />
                        Ce que vous obtiendrez
                      </h4>
                      <ul className="space-y-4 font-poppins">
                        {selectedCTA.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-4 group">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0DBD9F] to-[#0d6ebb] flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                              <span className="text-white font-bold text-sm">{index + 1}</span>
                            </div>
                            <span className="text-gray-700 leading-relaxed pt-1">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Boutons d'action */}
                    <div className="flex font-poppins flex-col sm:flex-row gap-4 pt-4">
                      <Button
                        className="flex-1 bg-gradient-to-r from-[#0d6ebb] to-[#0DBD9F] hover:shadow-lg hover:scale-[1.02] transition-all text-white font-semibold h-14 rounded-xl text-lg"
                      >
                        Commencer maintenant
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={() => setSelectedCTA(null)}
                        className="h-14 rounded-xl border-2 border-[#0d6ebb] text-[#0d6ebb] hover:bg-[#0d6ebb] hover:text-white font-semibold text-lg transition-all"
                      >
                        Fermer
                      </Button>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}