import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center h-screen bg-gray-50">
      <Image
        src="/assets/images/illustrations/page-introuvable/404-erreur.png" 
        alt="Page non trouvée"
        width={400}
        height={400}
        className="mb-6"
      />
      <p className="mt-4 text-xl font-semibold text-center text-black">Oops ! Nous rencontrons un problème avec la page</p>
      <p className="mt-2 text-center text-gray-600">
      Nous vous suggérons de revenir en arrière et d&apos;essayer un autre lien
      </p>

      <Link href="/" passHref>
        <Button
          as="a"
          className="mt-6 bg-[#F77F00] hover:bg-[#E06F00] text-white px-8 py-3 rounded-full font-semibold transition-colors"
          size="lg"
        >
          Retour à l&apos;accueil
        </Button>
      </Link>
    </div>
  );
}