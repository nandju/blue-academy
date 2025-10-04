import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-6">
      {/* Illustration */}
      <Image
        src="/assets/images/illustrations/page-introuvable/404-erreur.png"
        alt="Page non trouvée"
        width={450}
        height={450}
        className="mb-10 drop-shadow-lg"
      />

      {/* Texte principal */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#0d6ebb] mb-6 leading-snug">
        Oups ! Cette page est introuvable
      </h1>

      {/* Texte secondaire */}
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-4 leading-relaxed text-center">
        Nous n’avons pas pu trouver la page que vous cherchez. 
      </p>
      <p className="text-base md:text-lg text-gray-500 max-w-xl mb-10 text-center">
        Il est possible que le lien soit incorrect ou que la page ait été déplacée.  
        Nous vous conseillons de retourner à l’accueil et de continuer votre navigation.
      </p>

      {/* Bouton de retour */}
      <Link href="/dashboard" passHref>
        <Button
          size="lg"
          className="px-10 py-5 text-lg font-semibold bg-gradient-to-r from-[#0d6ebb] to-[#0DBD9F] 
                     hover:from-[#0DBD9F] hover:to-[#0d6ebb] text-white rounded-full 
                     transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
        >
          Retour à l&apos;accueil
        </Button>
      </Link>
    </div>
  );
}
