"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button" // Vérifie ton chemin si tu utilises shadcn/ui

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen px-6 text-center overflow-hidden">
      {/* 🖼️ Image d’arrière-plan */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/images/illustrations/page-introuvable/background.png" // 👉 remplace par ton image
          alt="Fond océan"
          fill
          className="object-cover object-center"
          priority
        />
        {/* 🎨 Overlay sombre dégradé pour lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d6ebb]/60 via-[#0d6ebb]/70 to-black/80" />
      </div>

      {/* Illustration principale */}
      <Image
        src="/assets/images/illustrations/page-introuvable/404-erreur.png"
        alt="Page non trouvée"
        width={400}
        height={400}
        className="mb-8 drop-shadow-2xl animate-fade-in"
      />

      {/* Texte principal */}
      <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
        Page introuvable
      </h1>

      {/* Texte secondaire */}
      <p className="text-base md:text-lg text-white/90 mb-2">
        Désolé, cette page n’existe pas ou a été déplacée.
      </p>
      <p className="text-sm md:text-base text-white/70 mb-8">
        Retournez à l’accueil pour poursuivre votre navigation.
      </p>

      {/* Bouton de retour */}
      <Link href="/" passHref>
        <Button
          size="lg"
          className="px-8 py-4 text-base font-semibold rounded-full bg-gradient-to-r 
                     from-[#0d6ebb] to-[#0DBD9F] hover:from-[#0DBD9F] hover:to-[#0d6ebb] 
                     text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
        >
          Retour à l&apos;accueil
        </Button>
      </Link>
    </div>
  )
}
