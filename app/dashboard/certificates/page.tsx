"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Award,
  Download,
  Share2,
  Search,
  Calendar,
  Trophy,
  Star,
  MoreVertical,
  Grid3X3,
  List,
  Filter,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"

const certificates = [
  {
    id: "CERT-ENV-001",
    title: "Introduction au Code de l’Environnement",
    course: "Code de l’Environnement et Lutte contre la Pollution Plastique",
    instructor: "ONG BLUE CI",
    completedDate: "2025-09-10",
    score: 92,
    category: "Code de l’Environnement",
    difficulty: "Débutant → Intermédiaire",
    credentialUrl: "https://blueci-academy.org/certificates/CERT-ENV-001",
    image: "/assets/images/illustrations/page-dashbaord/formateur.png", 
    color: "from-[#0d6ebb] to-[#0DBD9F]",
  },
]


const categories = [
  "Toutes les Catégories",
  "Code de l’Environnement",
  // "Développement Durable",
  // "Gestion des Déchets",
  "Recyclage & Économie Circulaire",
  // "Sensibilisation & Engagement",
  "Développement Personnel",
  "Leadership & Gestion de Projet",
]


export default function CertificatesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Toutes les Catégories")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("date")
  const [showSortMenu, setShowSortMenu] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const filteredCertificates = certificates
    .filter((cert) => {
      const matchesSearch =
        cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cert.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cert.instructor.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "Toutes les Catégories" || cert.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "date":
          return new Date(b.completedDate).getTime() - new Date(a.completedDate).getTime()
        case "score":
          return b.score - a.score
        case "title":
          return a.title.localeCompare(b.title)
        default:
          return 0
      }
    })

  const handleDownloadCertificate = (certificateId: string) => {
    console.log(`Téléchargement du certificat: ${certificateId}`)
  }

  const handleShareCertificate = (certificate: (typeof certificates)[0]) => {
    console.log(`Partage du certificat: ${certificate.id}`)
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-[#0DBD9F]"
    if (score >= 80) return "text-[#0d6ebb]"
    if (score >= 70) return "text-orange-500"
    return "text-red-500"
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Débutant":
        return "bg-[#0DBD9F]/10 text-[#0DBD9F] border-[#0DBD9F]/20"
      case "Intermédiaire":
        return "bg-orange-100 text-orange-700 border-orange-200"
      case "Avancé":
        return "bg-[#0d6ebb]/10 text-[#0d6ebb] border-[#0d6ebb]/20"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[#0d6ebb]">Mes Certificats</h1>
          <p className="text-gray-600">Vos réalisations d'apprentissage et vos accréditations</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Rechercher des certificats..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 w-64 border-[#0d6ebb]/20 focus:border-[#0DBD9F]"
            />
          </div>

          <div className="relative">
            <Button 
              variant="outline" 
              size="icon" 
              className="border-[#0d6ebb]/20 hover:bg-[#0d6ebb]/10 hover:border-[#0DBD9F]"
              onClick={() => setShowSortMenu(!showSortMenu)}
            >
              <Filter className="h-4 w-4 text-[#0d6ebb]" />
            </Button>
            {showSortMenu && (
              <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10 w-48">
                <button 
                  className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-sm"
                  onClick={() => { setSortBy("date"); setShowSortMenu(false) }}
                >
                  Trier par Date
                </button>
                <button 
                  className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-sm"
                  onClick={() => { setSortBy("score"); setShowSortMenu(false) }}
                >
                  Trier par Score
                </button>
                <button 
                  className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-sm"
                  onClick={() => { setSortBy("title"); setShowSortMenu(false) }}
                >
                  Trier par Titre
                </button>
              </div>
            )}
          </div>

          <div className="flex border border-[#0d6ebb]/20 rounded-md">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className={`rounded-r-none ${viewMode === "grid" ? "bg-[#0d6ebb] hover:bg-[#0d6ebb]/90 text-white" : "hover:bg-[#0d6ebb]/10 text-[#0d6ebb]"}`}
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className={`rounded-l-none ${viewMode === "list" ? "bg-[#0d6ebb] hover:bg-[#0d6ebb]/90 text-white" : "hover:bg-[#0d6ebb]/10 text-[#0d6ebb]"}`}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-[#0d6ebb]/20 hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">Total Certificats</CardTitle>
            <Award className="h-4 w-4 text-[#0DBD9F]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#0d6ebb]">{certificates.length}</div>
            <p className="text-xs text-gray-500">Toutes catégories confondues</p>
          </CardContent>
        </Card>

        <Card className="border-[#0d6ebb]/20 hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">Score Moyen</CardTitle>
            <Star className="h-4 w-4 text-[#0DBD9F]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#0d6ebb]">
              {Math.round(certificates.reduce((sum, cert) => sum + cert.score, 0) / certificates.length)}%
            </div>
            <p className="text-xs text-gray-500">Performance globale</p>
          </CardContent>
        </Card>

        <Card className="border-[#0d6ebb]/20 hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">Ce Mois-ci</CardTitle>
            <Calendar className="h-4 w-4 text-[#0DBD9F]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#0d6ebb]">2</div>
            <p className="text-xs text-gray-500">Nouveaux certificats obtenus</p>
          </CardContent>
        </Card>

        <Card className="border-[#0d6ebb]/20 hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">Catégorie Principale</CardTitle>
            <Trophy className="h-4 w-4 text-[#0DBD9F]" />
          </CardHeader>
          <CardContent>
            <div className="text-sm font-bold text-[#0d6ebb]">Introduction au Code de l’Environnement</div>
            <p className="text-xs text-gray-500">Le plus de certificats obtenus</p>
          </CardContent>
        </Card>
      </div>

      {/* Category Filter */}
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category 
                  ? "bg-[#0d6ebb] hover:bg-[#0d6ebb]/90 text-white" 
                  : "border-[#0d6ebb]/30 text-[#0d6ebb] hover:bg-[#0d6ebb]/10"
              }
            >
              {category === "Toutes les Catégories" ? "Toutes" : category}
            </Button>
          ))}
        </div>

        {viewMode === "grid" ? (
          // Grid View
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredCertificates.map((certificate) => (
              <div key={certificate.id} className="overflow-hidden border shadow-md rounded-lg hover:shadow-xl transition-all duration-300 border-[#0d6ebb]/20 hover:border-[#0DBD9F]/50">
                <div className="relative">
                  <div className={`h-40 bg-gradient-to-r ${certificate.color} relative overflow-hidden`}>
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="w-full h-full object-cover object-top mix-blend-overlay"
                    />
                    <div className="absolute top-3 right-3">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <Badge className={`absolute top-3 left-3 ${getDifficultyColor(certificate.difficulty)} border`}>
                    {certificate.difficulty}
                  </Badge>
                </div>

                <div className="p-4">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-lg line-clamp-2 text-[#0d6ebb]">{certificate.title}</h3>
                      <p className="text-sm text-gray-600">par {certificate.instructor}</p>
                      <Badge className="mt-1 bg-[#0DBD9F]/10 text-[#0DBD9F] border-[#0DBD9F]/20">
                        {certificate.category}
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1 text-gray-500">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(certificate.completedDate).toLocaleDateString('fr-FR')}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-[#0DBD9F]" />
                        <span className={`font-medium ${getScoreColor(certificate.score)}`}>
                          {certificate.score}%
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-2 justify-center">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-[#0d6ebb]/30 text-[#0d6ebb] hover:bg-[#0d6ebb] hover:text-white"
                        onClick={() => handleDownloadCertificate(certificate.id)}
                      >
                        <Download className="h-3 w-3 mr-1" />
                        Télécharger
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-[#0DBD9F]/30 text-[#0DBD9F] hover:bg-[#0DBD9F] hover:text-white"
                        onClick={() => handleShareCertificate(certificate)}
                      >
                        <Share2 className="h-3 w-3 mr-1" />
                        Partager
                      </Button>
                      <div className="relative">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="border-gray-300 hover:bg-gray-100"
                          onClick={() => setActiveDropdown(activeDropdown === certificate.id ? null : certificate.id)}
                        >
                          <MoreVertical className="h-3 w-3" />
                        </Button>
                        {activeDropdown === certificate.id && (
                          <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10 w-48">
                            <button className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-50 text-sm">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Voir l'Accréditation
                            </button>
                            <button className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-sm">
                              Ajouter à LinkedIn
                            </button>
                            <button className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-sm">
                              Imprimer le Certificat
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // List View
          <div className="space-y-4">
            {filteredCertificates.map((certificate) => (
              <Card key={certificate.id} className="border-[#0d6ebb]/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 relative flex-shrink-0">
                      <div className={`w-full h-full bg-gradient-to-r ${certificate.color} rounded-lg relative overflow-hidden`}>
                        <img
                          src={certificate.image}
                          alt={certificate.title}
                          className="w-full h-full object-cover mix-blend-overlay"
                        />
                        <Award className="absolute inset-0 m-auto h-6 w-6 text-white" />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-lg text-[#0d6ebb]">{certificate.title}</h3>
                          <p className="text-sm text-gray-600">
                            {certificate.course} • par {certificate.instructor}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge className="bg-[#0DBD9F]/10 text-[#0DBD9F] border-[#0DBD9F]/20">{certificate.category}</Badge>
                            <Badge className={`${getDifficultyColor(certificate.difficulty)} border`}>
                              {certificate.difficulty}
                            </Badge>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className={`text-lg font-bold ${getScoreColor(certificate.score)}`}>
                            {certificate.score}%
                          </div>
                          <p className="text-sm text-gray-500">
                            {new Date(certificate.completedDate).toLocaleDateString('fr-FR')}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-[#0d6ebb]/30 text-[#0d6ebb] hover:bg-[#0d6ebb] hover:text-white"
                        onClick={() => handleDownloadCertificate(certificate.id)}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Télécharger
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-[#0DBD9F]/30 text-[#0DBD9F] hover:bg-[#0DBD9F] hover:text-white"
                        onClick={() => handleShareCertificate(certificate)}
                      >
                        <Share2 className="h-4 w-4 mr-2" />
                        Partager
                      </Button>
                      {/* <div className="relative">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="border-gray-300 hover:bg-gray-100"
                          onClick={() => setActiveDropdown(activeDropdown === certificate.id ? null : certificate.id)}
                        >
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                        {activeDropdown === certificate.id && (
                          <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10 w-48">
                            <button className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-50 text-sm">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Voir l'Accréditation
                            </button>
                            <button className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-sm">
                              Ajouter à LinkedIn
                            </button>
                            <button className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-sm">
                              Imprimer le Certificat
                            </button>
                          </div>
                        )}
                      </div> */}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {filteredCertificates.length === 0 && (
          <div className="text-center py-12">
            <Award className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-[#0d6ebb]">Aucun certificat trouvé</h3>
            <p className="text-gray-600 mb-4">
              {searchTerm || selectedCategory !== "Toutes les Catégories"
                ? "Essayez d'ajuster vos critères de recherche ou de filtre."
                : "Terminez des cours et réussissez les quiz pour obtenir des certificats."}
            </p>
            <Button asChild className="bg-gradient-to-r from-[#0d6ebb] to-[#0DBD9F] hover:from-[#0DBD9F] hover:to-[#0d6ebb] text-white">
              <Link href="/dashboard/courses">Parcourir les Cours</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}