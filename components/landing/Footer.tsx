"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  const navigationLinks = {
    column1: [
      { label: "Accueil", href: "#home" },
      { label: "À propos", href: "#about" },
      { label: "Nos projets", href: "#projects" },
      { label: "Témoignages", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
    ],
    column2: [
      { label: "Blue Academy", href: "#academy" },
      { label: "Devenir bénévole", href: "#volunteer" },
      { label: "Faire un don", href: "#donate" },
      { label: "Travailler avec BLUE", href: "#partnership" },
      { label: "Ressources", href: "#resources" },
    ],
  };

  const contactInfo = [
    {
      icon: MapPin,
      text: "123 Ocean Drive, Coastal City, CC 12345",
    },
    {
      icon: Phone,
      text: "+1 (555) 123-4567",
    },
    {
      icon: Mail,
      text: "info@blueocean.org",
    },
  ];

  return (
    <footer className="relative bg-[#F5F5DC] py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo Section */}
          <div className="flex flex-col items-start">
            <div className="relative right-8 w-32 h-16 mb-4">
              <Image src="/assets/images/logo.png" alt="Logo BLUE" fill className="object-contain" />
            </div>
            <p className="text-black font-poppins text-sm mt-2">
              Lutter contre la pollution plastique pour des océans plus propres et une planète en meilleure santé.
            </p>
          </div>

          {/* Navigation Links - Column 1 */}
          <div className="flex flex-col">
            <h3 className="text-black font-semibold text-lg mb-4">Liens rapides</h3>
            <nav className="flex flex-col font-poppins gap-3">
              {navigationLinks.column1.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-black text-sm transition-colors hover:text-[#0DBD9F] hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Navigation Links - Column 2 */}
          <div className="flex flex-col">
            <h3 className="text-black font-semibold text-lg mb-4">S'impliquer</h3>
            <nav className="flex flex-col font-poppins gap-3">
              {navigationLinks.column2.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-black text-sm transition-colors hover:text-[#0DBD9F] hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col">
            <h3 className="text-black font-semibold text-lg mb-4">Contact</h3>
            <div className="flex flex-col font-poppins gap-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black/5 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-black" />
                    </div>
                    <p className="text-black text-sm pt-1">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-black/10">
          <p className="text-black/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} BLUE Conservation des Océans. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
