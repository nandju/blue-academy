"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // 🎯 Détection du scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/about" },
    { label: "Nos Projets", href: "/projects" },
    { label: "Blue Academy", href: "/academy" },
    { label: "Travailler avec nous", href: "/join" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 font-poppins transition-all duration-500 border-b border-white/10 backdrop-blur-sm ${
        isScrolled
          ? "bg-[#0d6ebb]/95 shadow-md" // 💧 Couleur quand on scroll
          : "bg-transparent" // 🌫️ Transparent au début
      }`}
    >

      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-[#0DBD9F] flex items-center justify-center overflow-hidden">
              <Image
                src="/assets/images/logo.png"
                alt="Logo BLUE"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-[#0DBD9F] transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-[#0DBD9F] hover:bg-[#0DBD9F]/90 text-white font-semibold px-6">
              Faire un don
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Ouvrir le menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-[#0DBD9F] transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button className="bg-[#0DBD9F] hover:bg-[#0DBD9F]/90 text-white font-semibold w-full mt-2">
                Faire un don
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
