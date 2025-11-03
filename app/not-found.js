import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen mt-20 bg-gray-100 px-6">
      {/* Illustration */}
      <Image
        src="/assets/images/illustrations/page-introuvable/404-erreur.png"
        alt="Page non trouvée"
        width={450}
        height={450}
        className="mb-10 drop-shadow-lg"
      />

      {/* Texte principal */}
      <h1 className="text-2xl md:text-3xl font-bold text-[#0d6ebb] mb-4 text-center">
        Page introuvable
      </h1>

      {/* Texte secondaire */}
      <p className="text-base md:text-lg text-gray-700 mb-3 text-center">
        Désolé, cette page n’existe pas ou a été déplacée.
      </p>
      <p className="text-sm md:text-base text-gray-500 mb-8 text-center">
        Retournez à l’accueil pour poursuivre votre navigation.
      </p>


      {/* Bouton de retour */}
      <Link href="/" passHref>
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
