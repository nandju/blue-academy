"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

type PageWrapperProps = {
  children: React.ReactNode;
  minDisplay?: number;
  color?: string;
};

export default function PageWrapper({
  children,
  minDisplay = 600,
  color = "#0DBD9F",
}: PageWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(6);
  const [fadeOut, setFadeOut] = useState(false);
  const startTs = useRef<number | null>(null);
  const finished = useRef(false);

  useEffect(() => {
    let raf: number | null = null;

    const step = (ts: number) => {
      if (!startTs.current) startTs.current = ts;
      const elapsed = ts - (startTs.current ?? ts);
      const target = Math.min(90, 6 + Math.floor(elapsed / 25));
      setProgress((p) => Math.max(p, target));
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => {
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const onLoad = () => {
      finished.current = true;
      setProgress(100);

      const elapsedSinceStart = startTs.current ? Date.now() - startTs.current : 0;
      const wait = Math.max(0, minDisplay - elapsedSinceStart);

      setTimeout(() => {
        setFadeOut(true);
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

  useEffect(() => {
    const fallback = setTimeout(() => {
      if (!finished.current) {
        setProgress(100);
        setFadeOut(true);
        setTimeout(() => setIsLoading(false), 420);
      }
    }, 10000);
    return () => clearTimeout(fallback);
  }, []);

  return (
    <>
      {isLoading && (
        <div
          aria-hidden={false}
          role="status"
          className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-400 ${
            fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          {/* Ocean gradient background */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(180deg, #E8F4F8 0%, #B8E3F0 50%, #7DD3E8 100%)",
            }}
          />

          {/* Animated waves background */}
          <div className="absolute inset-0 overflow-hidden opacity-30">
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "300px",
                background: `linear-gradient(180deg, transparent 0%, ${color}40 100%)`,
                animation: "wave1 3s ease-in-out infinite",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "250px",
                background: `linear-gradient(180deg, transparent 0%, ${color}30 100%)`,
                animation: "wave2 4s ease-in-out infinite",
                animationDelay: "0.5s",
              }}
            />
          </div>

          {/* Floating plastic particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  width: `${8 + Math.random() * 12}px`,
                  height: `${8 + Math.random() * 12}px`,
                  background: i % 2 === 0 ? "rgba(13, 189, 159, 0.3)" : "rgba(13, 110, 187, 0.3)",
                  borderRadius: i % 3 === 0 ? "50%" : "20%",
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float${(i % 3) + 1} ${4 + Math.random() * 3}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              />
            ))}
          </div>

          <div className="relative z-10 flex flex-col items-center gap-8 px-6">
            {/* Main logo container with ocean effect */}
            <div className="relative" style={{ width: 140, height: 140 }}>
              {/* Outer ripple effect */}
              <div
                style={{
                  position: "absolute",
                  inset: -10,
                  borderRadius: "9999px",
                  border: `3px solid ${color}30`,
                  animation: "ripple 2s ease-out infinite",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: -10,
                  borderRadius: "9999px",
                  border: `3px solid ${color}20`,
                  animation: "ripple 2s ease-out infinite 0.5s",
                }}
              />

              {/* Rotating water droplet effect */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "9999px",
                  background: `conic-gradient(from 0deg, ${color}, #0d6ebb, ${color})`,
                  animation: "rotate 3s linear infinite",
                  padding: "4px",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "9999px",
                    background: "linear-gradient(180deg, #E8F4F8 0%, #B8E3F0 100%)",
                  }}
                />
              </div>

              {/* Logo container */}
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  animation: "pulse 2s ease-in-out infinite",
                }}
              >
                <div
                  className="flex items-center justify-center rounded-full bg-white"
                  style={{
                    width: 100,
                    height: 100,
                    boxShadow: `0 8px 32px ${color}40, inset 0 2px 8px rgba(255,255,255,0.8)`,
                  }}
                >
                  <div className="w-16 h-16 rounded-full bg-[#0DBD9F] flex items-center justify-center overflow-hidden relative">
                    <Image
                      src="/assets/images/logo.png"
                      alt="Logo BLUE"
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                    {/* Water shimmer effect */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)",
                        animation: "shimmer 2s linear infinite",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Message with ocean theme */}
            <div className="text-center max-w-sm">
              <p className="text-base font-bold text-[#0d6ebb] mb-2" style={{ textShadow: "0 2px 4px rgba(255,255,255,0.8)" }}>
                Nettoyage de l'océan en cours...
              </p>
              <p className="text-sm text-gray-600">
                Chargement des données sur la pollution plastique
              </p>
            </div>

            {/* Ocean wave progress container */}
            <div className="relative w-72">
              {/* Progress percentage display - Ocean bubble */}
              <div
                className="absolute -top-16 left-1/2 transform -translate-x-1/2 flex items-center justify-center"
                style={{
                  width: 80,
                  height: 80,
                  animation: "bounce 2s ease-in-out infinite",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "9999px",
                    background: `linear-gradient(135deg, ${color}, #0d6ebb)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: `0 8px 24px ${color}60, inset 0 2px 8px rgba(255,255,255,0.3)`,
                    border: "3px solid rgba(255,255,255,0.5)",
                  }}
                >
                  <span className="text-2xl font-bold text-white" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.2)" }}>
                    {progress}%
                  </span>
                </div>
                {/* Bubble shine */}
                <div
                  style={{
                    position: "absolute",
                    top: "15%",
                    left: "20%",
                    width: "30%",
                    height: "30%",
                    borderRadius: "9999px",
                    background: "radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)",
                  }}
                />
              </div>

              {/* Wave progress bar container */}
              <div
                className="relative overflow-hidden rounded-full"
                style={{
                  height: 24,
                  background: "linear-gradient(90deg, rgba(13,110,187,0.1) 0%, rgba(13,189,159,0.1) 100%)",
                  border: "2px solid rgba(13,189,159,0.3)",
                  boxShadow: "inset 0 2px 8px rgba(0,0,0,0.05)",
                }}
              >
                {/* Animated water fill */}
                <div
                  className="absolute inset-0 transition-all duration-300 ease-out"
                  style={{
                    width: `${progress}%`,
                    background: `linear-gradient(90deg, ${color}, #0d6ebb)`,
                    boxShadow: `2px 0 12px ${color}80`,
                  }}
                >
                  {/* Wave effect on top */}
                  <div
                    style={{
                      position: "absolute",
                      top: -10,
                      left: 0,
                      right: -20,
                      height: 40,
                      background: `repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(255,255,255,0.3) 20px, rgba(255,255,255,0.3) 40px)`,
                      animation: "wave-slide 1.5s linear infinite",
                    }}
                  />
                </div>

                {/* Shimmer overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
                    animation: "shimmer-bar 2s linear infinite",
                  }}
                />
              </div>

              {/* Drops falling into progress */}
              <div className="absolute -top-8 left-1/4 w-2 h-2 rounded-full opacity-60" style={{ background: color, animation: "drop 2s ease-in infinite" }} />
              <div className="absolute -top-8 right-1/3 w-2 h-2 rounded-full opacity-60" style={{ background: "#0d6ebb", animation: "drop 2s ease-in infinite 0.7s" }} />
            </div>
          </div>
        </div>
      )}

      <div style={{ visibility: isLoading ? "hidden" : "visible", transition: "visibility 0s linear 0s" }}>
        {children}
      </div>

      <style>{`
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes ripple {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.3); opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes shimmer-bar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes bounce {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, -10px); }
        }
        @keyframes wave-slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(40px); }
        }
        @keyframes wave1 {
          0%, 100% { transform: translateY(0) scaleY(1); }
          50% { transform: translateY(-20px) scaleY(1.1); }
        }
        @keyframes wave2 {
          0%, 100% { transform: translateY(0) scaleY(1); }
          50% { transform: translateY(-15px) scaleY(1.08); }
        }
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(20px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, -15px) rotate(240deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-25px, -20px) rotate(-120deg); }
          66% { transform: translate(15px, -35px) rotate(-240deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(10px, -40px) rotate(180deg); }
        }
        @keyframes drop {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 0.6; }
          100% { transform: translateY(40px); opacity: 0; }
        }
      `}</style>
    </>
  );
}