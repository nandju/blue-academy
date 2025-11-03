"use client"

import { useEffect, useRef } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Coordinatrice des bénévoles",
    rating: 5,
    text: "Rejoindre l’initiative de nettoyage des plages de BLUE a complètement changé ma vision de l’action environnementale. L’impact que nous créons ensemble est véritablement inspirant !",
    avatar: "/assets/images/illustrations/page-landing/testimonials/woman-volunteer.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Biologiste marin",
    rating: 5,
    text: "Les programmes de formation de la BLUE Academy sont exceptionnels. Ils ont permis à notre équipe d’acquérir des connaissances de pointe sur la conservation des océans et les solutions contre la pollution plastique.",
    avatar: "/assets/images/illustrations/page-landing/testimonials/marine-scientist.jpg",
  },
  {
    id: 3,
    name: "Amara Okafor",
    role: "Cheffe communautaire",
    rating: 5,
    text: "Les campagnes de sensibilisation ont mobilisé toute notre communauté. Nous avons réduit l’utilisation de plastiques à usage unique de 60 % en seulement six mois !",
    avatar: "/assets/images/illustrations/page-landing/testimonials/african-woman-leader.jpg",
  },
  {
    id: 4,
    name: "David Martinez",
    role: "Partenaire d’entreprise",
    rating: 5,
    text: "Collaborer avec BLUE a transformé nos objectifs en matière de durabilité. Leur approche innovante de la gestion des déchets plastiques est de classe mondiale.",
    avatar: "/assets/images/illustrations/page-landing/testimonials/diverse-businessman.png",
  },
  {
    id: 5,
    name: "Priya Sharma",
    role: "Éducatrice environnementale",
    rating: 5,
    text: "Les ressources pédagogiques de la BLUE Academy sont remarquables. Mes élèves sont désormais de fervents défenseurs de la protection des océans.",
    avatar: "/assets/images/illustrations/page-landing/testimonials/indian-teacher.jpg",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Bénévole de nettoyage des plages",
    rating: 5,
    text: "Chaque événement de nettoyage est parfaitement organisé et réellement efficace. J’ai pu constater de mes propres yeux comment nos efforts restaurent les écosystèmes marins.",
    avatar: "/assets/images/illustrations/page-landing/testimonials/young-man-volunteer.jpg",
  },
  {
    id: 7,
    name: "Elena Rodriguez",
    role: "Participante du Laboratoire d’innovation",
    rating: 5,
    text: "Le Laboratoire d’innovation m’a permis de concevoir une solution d’emballage sans plastique. Le soutien de BLUE a été inestimable !",
    avatar: "/assets/images/illustrations/page-landing/testimonials/latina-entrepreneur.jpg",
  },
  {
    id: 8,
    name: "Ahmed Hassan",
    role: "Ambassadeur de la jeunesse",
    rating: 5,
    text: "En tant que jeune activiste, BLUE m’a donné les moyens de devenir un acteur du changement dans ma communauté. Leur programme de mentorat a changé ma vie.",
    avatar: "/assets/images/illustrations/page-landing/testimonials/middle-eastern-youth.jpg",
  },
]


const imageCollage = [
  { url: "/assets/images/illustrations/page-landing/testimonials/beach-cleanup-volunteers.jpg", className: "row-span-2" },
  { url: "/assets/images/illustrations/page-landing/testimonials/ocean-plastic-collection.jpg", className: "" },
  { url: "/assets/images/illustrations/page-landing/testimonials/community-workshop-environment.jpg", className: "row-span-2" },
  { url: "/assets/images/illustrations/page-landing/testimonials/marine-conservation-team.jpg", className: "row-span-3" },
  { url: "/assets/images/illustrations/page-landing/testimonials/youth-environmental-training.jpg", className: "row-span-2" },
  { url: "/assets/images/illustrations/page-landing/testimonials/recycling-innovation-lab.jpg", className: "" },
  { url: "/assets/images/illustrations/page-landing/testimonials/coastal-cleanup-group.jpg", className: "row-span-2" },
  { url: "/assets/images/illustrations/page-landing/testimonials/sustainability-education.jpg", className: "" },
  { url: "/assets/images/illustrations/page-accueil/items-1.png", className: "row-span-2" },
  { url: "/assets/images/illustrations/page-accueil/items-2.png", className: "row-span-2" },
  { url: "/assets/images/illustrations/page-accueil/ite-5.jpg", className: "" },
  { url: "/assets/images/illustrations/page-landing/action_2.jpg", className: "" },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollAmount = 0
    const scrollStep = 1
    const scrollInterval = 30

    const autoScroll = setInterval(() => {
      if (scrollContainer) {
        scrollAmount += scrollStep
        scrollContainer.scrollLeft = scrollAmount

        // Reset scroll when reaching the end
        if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollAmount = 0
        }
      }
    }, scrollInterval)

    return () => clearInterval(autoScroll)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-[#0d6ebb] to-[#0DBD9F]">
      <div className="container mx-auto px-4">
        {/* Image Collage */}
        <div className="mb-16 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 auto-rows-[100px] max-w-6xl mx-auto">
          {imageCollage.map((image, index) => (
            <div
              key={index}
              className={`${image.className} rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300`}
            >
              <img
                src={image.url || "/placeholder.svg"}
                alt={`BLUE initiative ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Testimonials Badge and Heading */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-white font-semibold">Témoignages</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Inspirés par les défenseurs des océans
          </h2>
          <p className="text-xl font-poppins text-white/90">
            venus des communautés du monde entier
          </p>
        </div>
        {/* Auto-scrolling Testimonials */}
        <div className="relative overflow-hidden">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden pb-4" style={{ scrollBehavior: "auto" }}>
            {/* Duplicate testimonials for seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-[350px] bg-[#F5F5DC] rounded-2xl p-6 shadow-xl"
              >
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#0d6ebb] text-[#0d6ebb]" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 font-poppins leading-relaxed">"{testimonial.text}"</p>

                {/* User Info */}
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}