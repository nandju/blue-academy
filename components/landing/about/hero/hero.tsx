"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface HeroSlide {
  image: string
  title: string
  subtitle: string
}

const slides: HeroSlide[] = [
  {
    image: "/assets/images/illustrations/page-landing/ocean-conservation-initiative-blue.jpg",
    title: "SCIENCE. HISTOIRES. ACTION.",
    subtitle: "Aider chacun à trouver et accomplir son rôle dans la lutte contre la pollution plastique.",
  },
  {
    image: "/assets/images/illustrations/page-landing/marine-research-ocean-pollution-study.jpg",
    title: "ÉDUCATION & SENSIBILISATION",
    subtitle: "Renforcer les connaissances et la compréhension sur la préservation des océans.",
  },
  {
    image: "/assets/images/illustrations/page-landing/community-cleanup-volunteers-beach.jpg",
    title: "IMPACT COMMUNAUTAIRE",
    subtitle: "Donner aux communautés les moyens d'agir directement contre les déchets plastiques.",
  },
  {
    image: "/assets/images/illustrations/page-landing/sustainable-future-ocean-protection.jpg",
    title: "INNOVATION POUR LE CHANGEMENT",
    subtitle: "Développer des solutions durables pour une planète plus saine.",
  },
]

export function AboutHeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [fadeIn, setFadeIn] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        setFadeIn(true)
      }, 500)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const slide = slides[currentSlide]

  return (
    <section className="relative h-screen w-full overflow-hidden pt-20 lg:pt-0 bg-gradient-to-br from-[#0d6ebb] to-[#0DBD9F]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <div className={`absolute inset-0 transition-opacity duration-500 ${fadeIn ? "opacity-100" : "opacity-0"}`}>
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center lg:justify-start">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl lg:max-w-2xl xl:max-w-3xl">
            {/* Left border accent */}
            <div className="flex items-start gap-4 sm:gap-6 lg:gap-8">
              <div className="hidden sm:block w-1 h-24 sm:h-32 lg:h-40 xl:h-48 bg-white rounded-full flex-shrink-0" />

              <div
                className={`transition-all duration-500 ${
                  fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                {/* Main Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-4 lg:mb-6 xl:mb-8 leading-tight tracking-tight">
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-poppins text-white/95 leading-relaxed font-light max-w-2xl">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setFadeIn(false)
              setTimeout(() => {
                setCurrentSlide(index)
                setFadeIn(true)
              }, 500)
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-white w-8 lg:w-10" 
                : "bg-white/50 w-2 hover:bg-white/75 hover:w-3"
            }`}
            aria-label={`Aller à la diapositive ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}