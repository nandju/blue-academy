"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Shield, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function AdminLoginSection() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(data?.error || "Connexion échouée")
        return
      }
      const next = new URLSearchParams(window.location.search).get("next") || "/admin"
      window.location.href = next
    } catch (err) {
      setError("Erreur réseau. Réessayez.")
    }
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left side - Hero content */}
      <div className="flex-1 relative overflow-hidden min-h-[50vh] lg:min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/images/backgrounds/items-3.png')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d6ebb]/80 via-[#0DBD9F]/60 to-[#0d6ebb]/40" />
        </div>

        <div className="relative z-10 flex flex-col justify-between h-full p-8 lg:p-12">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-2">
              <img 
                src="/assets/images/logo.png"
                alt="BLUE Academy Logo"
                className="w-6 h-6 rounded object-cover"
              />
            </div>
            <span className="text-white font-bold text-xl">Academy</span>
          </div>

          {/* Main content */}
          <div className="max-w-md">
            <h1 className="text-4xl font-bold text-white my-6">Accès Administrateur</h1>
            <p className="text-white/90 text-lg leading-relaxed mb-8">
                Bienvenue dans l'espace d'administration de BLUE ACADEMY. Gérez les cours, 
                les utilisateurs, les certificats et supervisez l'ensemble de la plateforme 
                de formation en ligne pour la protection de l'environnement.
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

      {/* Right side - Admin Login form */}
      <div className="w-full lg:w-[480px] bg-[#0d6ebb]/90 backdrop-blur-sm flex items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-sm">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">Administration</h2>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white/80">
                Email Administrateur
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#0DBD9F]"
                placeholder="admin@blue-academy.ci"
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
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#0DBD9F]"
                placeholder="••••••••••"
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                className="border-white/20 data-[state=checked]:bg-[#0DBD9F] data-[state=checked]:border-[#0DBD9F]"
              />
              <Label htmlFor="remember" className="text-sm text-white/80">
                Se souvenir de moi pendant 30 jours
              </Label>
            </div>

            {error && (
              <div className="rounded bg-red-500/20 border border-red-400 text-red-100 px-4 py-2 text-sm">
                {error}
              </div>
            )}

            <Button 
              onClick={handleSubmit}
              className="w-full bg-[#0DBD9F] hover:bg-[#0DBD9F]/90 text-white font-semibold py-3"
            >
              Accéder à l'Administration
            </Button>

            <div className="text-center">
              <Link href="/login" className="text-white/80 hover:text-white transition-colors">
                Retour à la connexion étudiant
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
