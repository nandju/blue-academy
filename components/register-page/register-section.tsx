"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { GraduationCap, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function RegisterSection() {
  const [email, setEmail] = useState("")
  const [fullName, setFullName] = useState("")
  const [password, setPassword] = useState("")
  const [agreeToTerms, setAgreeToTerms] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle registration logic here
    console.log("Tentative d'inscription:", { email, fullName, password, agreeToTerms })
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left side - Hero content */}
      <div className="flex-1 relative overflow-hidden min-h-[50vh] lg:min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=800&fit=crop&auto=format')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0DBD9F]/80 via-[#0d6ebb]/60 to-[#0DBD9F]/40" />
        </div>

        <div className="relative z-10 flex flex-col justify-between h-full p-8 lg:p-12">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-2">
              <img 
                src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=32&h=32&fit=crop&auto=format"
                alt="LearnHub Logo"
                className="w-6 h-6 rounded object-cover"
              />
            </div>
            <span className="text-white font-bold text-xl">LEARNHUB</span>
          </div>

          {/* Main content */}
          <div className="max-w-md">
            <h1 className="text-4xl font-bold text-white mb-6">Vous n'avez pas de compte ?</h1>
            <p className="text-white/90 text-lg leading-relaxed mb-8">
              Inscrivez-vous pour accéder à toutes les fonctionnalités de notre plateforme d'apprentissage. 
              Commencez votre parcours éducatif et libérez votre potentiel dès aujourd'hui !
            </p>
          </div>

          {/* Social links */}
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
              <Facebook className="w-5 h-5 text-white" />
            </div>
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
              <Twitter className="w-5 h-5 text-white" />
            </div>
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
              <Linkedin className="w-5 h-5 text-white" />
            </div>
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
              <Instagram className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Registration form */}
      <div className="w-full lg:w-[480px] bg-[#0DBD9F]/90 backdrop-blur-sm flex items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-sm">
          <h2 className="text-3xl font-bold text-white mb-8">Inscription</h2>

          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white/80">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#0d6ebb]"
                placeholder="etudiant@learnhub.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-white/80">
                Nom complet
              </Label>
              <Input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#0d6ebb]"
                placeholder="Jean Dupont"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-white/80">
                Mot de passe
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#0d6ebb]"
                placeholder="••••••••••"
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={agreeToTerms}
                onCheckedChange={(checked) => setAgreeToTerms(checked as boolean)}
                className="border-white/20 data-[state=checked]:bg-[#0d6ebb] data-[state=checked]:border-[#0d6ebb]"
              />
              <Label htmlFor="terms" className="text-sm text-white/80">
                J'accepte les Conditions d'utilisation
              </Label>
            </div>

            <Button
              onClick={handleSubmit}
              className="w-full bg-[#0d6ebb] hover:bg-[#0d6ebb]/90 text-white font-semibold py-3"
              disabled={!agreeToTerms}
            >
              S'inscrire
            </Button>

            <div className="text-center">
              <Link href="/login" className="text-white/80 hover:text-white transition-colors">
                Vous avez déjà un compte ?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}