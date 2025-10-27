"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

type PageWrapperProps = {
  children: React.ReactNode;
  minDisplay?: number; // durée mini en ms (par défaut 600ms)
  color?: string; // couleur accent (hex ou tailwind variable), ex: "#0DBD9F"
};

export default function PageWrapper({
  children,
  minDisplay = 600,
  color = "#0DBD9F",
}: PageWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(6); // départ de la barre
  const [fadeOut, setFadeOut] = useState(false);
  const startTs = useRef<number | null>(null);
  const finished = useRef(false);

  // Incrémente une barre de progression "visuelle" doucement
  useEffect(() => {
    let raf: number | null = null;

    const step = (ts: number) => {
      if (!startTs.current) startTs.current = ts;
      const elapsed = ts - (startTs.current ?? ts);

      // avance plus vite au début, puis ralenti
      const target = Math.min(90, 6 + Math.floor(elapsed / 25)); // jusqu'à 90% avant load
      setProgress((p) => Math.max(p, target));
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => {
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Écoute l'événement load du navigateur
  useEffect(() => {
    const onLoad = () => {
      finished.current = true;
      setProgress(100);

      // s'assurer la durée mini d'affichage
      const elapsedSinceStart = startTs.current ? Date.now() - startTs.current : 0;
      const wait = Math.max(0, minDisplay - elapsedSinceStart);

      setTimeout(() => {
        // lancer la transition de fadeOut
        setFadeOut(true);
        // cacher définitivement après la transition (400ms)
        setTimeout(() => setIsLoading(false), 420);
      }, wait);
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad, { once: true });
      return () => window.removeEventListener("load", onLoad);
    }
  }, [minDisplay]);

  // Safety: après un timeout long, forcer la fin (pour éviter blocage)
  useEffect(() => {
    const fallback = setTimeout(() => {
      if (!finished.current) {
        setProgress(100);
        setFadeOut(true);
        setTimeout(() => setIsLoading(false), 420);
      }
    }, 10000); // 10s max
    return () => clearTimeout(fallback);
  }, []);

  return (
    <>
      {/* Loader overlay */}
      {isLoading && (
        <div
          aria-hidden={false}
          role="status"
          className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-400 ${
            fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          {/* Backdrop with subtle blur and gradient */}
          <div
            className="absolute inset-0"
            style={{
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(245,245,220,0.9) 100%)",
            }}
          />

          <div className="relative z-10 flex flex-col items-center gap-6 px-6">
            {/* Animated circular logo + spinner */}
            <div
              className="relative flex items-center justify-center rounded-full"
              style={{
                width: 120,
                height: 120,
              }}
            >
              {/* outer animated ring */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "9999px",
                  border: `6px solid rgba(0,0,0,0.06)`,
                  boxShadow: "0 10px 30px rgba(13,110,187,0.08)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 6,
                  borderRadius: "9999px",
                  borderTop: `6px solid ${color}`,
                  borderRight: "6px solid rgba(255,255,255,0.06)",
                  borderBottom: "6px solid rgba(255,255,255,0.06)",
                  borderLeft: "6px solid rgba(255,255,255,0.06)",
                  animation: "pw-spin 1s linear infinite",
                }}
              />

              {/* Logo (SVG inline) */}
              <div
                className="flex items-center justify-center rounded-full bg-white"
                style={{
                  width: 92,
                  height: 92,
                  boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                }}
              >
                {/* Simple BLUE initial logo - personnalise si tu veux */}
            <div className="w-12 h-12 rounded-full bg-[#0DBD9F] flex items-center justify-center overflow-hidden">
                    <Image
                        src="/assets/images/logo.png"
                        alt="Logo BLUE"
                        width={48}
                        height={48}
                        className="object-contain"
                    />
                    </div>
              </div>
            </div>

            {/* Message */}
            <div className="text-center max-w-xs">
              <p className="text-sm font-medium text-gray-700">Préparation de la page</p>
              <p className="text-xs text-gray-500 mt-1">Merci de patienter une seconde — nous chargeons les ressources.</p>
            </div>

            {/* Progress bar */}
            <div className="w-52 bg-black/5 rounded-full h-2 overflow-hidden">
              <div
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${progress}%`,
                  background: `linear-gradient(90deg, ${color}, #0d6ebb)`,
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Page content hidden while loader active to avoid CLS */}
      <div style={{ visibility: isLoading ? "hidden" : "visible", transition: "visibility 0s linear 0s" }}>{children}</div>

      {/* small keyframes */}
      <style>{`
        @keyframes pw-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}
