"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Clock, Trophy, Star, Search, PlayCircle, CheckCircle, Users, Calendar } from "lucide-react"
import Link from "next/link"

const categories = [
  "Toutes les Catégories",
  "Code de l’Environnement",
  "Pollution Plastique",
  "Protection de la Biodiversité",
  "Gestion Durable des Ressources",
  "Énergies Renouvelables",
  "Changement Climatique",
  "Engagement Citoyen",
  "Développement Personnel",
]


const availableCourses = [
  {
    id: 1,
    title: "Introduction au Code de l'Environnement",
    instructor: "Dr. Awa Konaté",
    duration: "6 heures",
    difficulty: "Débutant",
    rating: 4.7,
    students: 842,
    price: "89€",
    category: "Code de l’Environnement",
    image: "/assets/images/illustrations/page-dashbaord/formateur.png",
    color: "from-[#0d6ebb] to-[#0DBD9F]",
    description: "Découvrez les principes fondamentaux du Code de l’Environnement, comprenez vos droits et devoirs en matière de protection de la nature, et apprenez à appliquer les bonnes pratiques pour préserver notre planète.",
  },
]

const completedCourses = [
  {
    id: 101,
    title: "Fondamentaux JavaScript",
    instructor: "Alex Thompson",
    completedDate: "2024-01-15",
    score: 95,
    duration: "6 heures",
    category: "Développement Web",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop&auto=format",
    certificateId: "CERT-JS-001",
  },
  {
    id: 102,
    title: "Introduction à l'Analyse de Données",
    instructor: "Maria Garcia",
    completedDate: "2024-01-08",
    score: 88,
    duration: "4 heures",
    category: "Science des Données",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&auto=format",
    certificateId: "CERT-DA-002",
  },
  {
    id: 103,
    title: "Marketing sur les Réseaux Sociaux",
    instructor: "John Smith",
    completedDate: "2023-12-20",
    score: 92,
    duration: "3 heures",
    category: "Marketing Digital",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop&auto=format",
    certificateId: "CERT-SMM-003",
  },
]

// const inProgressCourses = [
//   {
//     id: 201,
//     title: "Techniques CSS Avancées",
//     instructor: "Sophie Chen",
//     progress: 65,
//     nextLesson: "Maîtrise de CSS Grid",
//     timeLeft: "2h 30m",
//     category: "Développement Web",
//     image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop&auto=format",
//   },
//   {
//     id: 202,
//     title: "Bases de l'Apprentissage Automatique",
//     instructor: "Dr. James Wilson",
//     progress: 30,
//     nextLesson: "Régression Linéaire",
//     timeLeft: "5h 45m",
//     category: "Science des Données",
//     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&auto=format",
//   },
// ]

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Toutes les Catégories")
  const [activeTab, setActiveTab] = useState("available")

  const filteredAvailableCourses = availableCourses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "Toutes les Catégories" || course.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[#0d6ebb]">Mes Cours</h1>
          <p className="text-gray-600">Gérez votre parcours d'apprentissage</p>
        </div>

        {/* Search and Filter */}
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Rechercher des cours..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 w-64 border-[#0d6ebb]/20 focus:border-[#0DBD9F]"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 border border-[#0d6ebb]/20 bg-white rounded-md text-sm focus:border-[#0DBD9F] focus:outline-none"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-gray-100">
          <TabsTrigger value="available" className="data-[state=active]:bg-[#0d6ebb] data-[state=active]:text-white">
            Disponibles
          </TabsTrigger>
          <TabsTrigger value="in-progress" className="data-[state=active]:bg-[#0d6ebb] data-[state=active]:text-white">
            En Cours
          </TabsTrigger>
          <TabsTrigger value="completed" className="data-[state=active]:bg-[#0d6ebb] data-[state=active]:text-white">
            Terminés
          </TabsTrigger>
        </TabsList>

        {/* Available Courses */}
        <TabsContent value="available" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredAvailableCourses.map((course) => (
              <div key={course.id} className="overflow-hidden border shadow-md rounded-lg hover:shadow-xl transition-all duration-300 border-[#0d6ebb]/20 hover:border-[#0DBD9F]/50">
                <div className="relative">
                  <div className={`h-40 bg-gradient-to-r ${course.color} relative overflow-hidden`}>
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover object-top mix-blend-overlay"
                    />
                  </div>
                  <Badge className="absolute top-3 right-3 bg-white/90 text-[#0d6ebb] hover:bg-white">
                    {course.difficulty}
                  </Badge>
                  <Badge className="absolute top-3 left-3 bg-[#0DBD9F] text-white font-semibold">
                    {course.price}
                  </Badge>
                </div>

                <div className="p-4">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-lg line-clamp-2 text-[#0d6ebb]">{course.title}</h3>
                      <p className="text-sm text-gray-600">par {course.instructor}</p>
                      <p className="text-sm text-gray-500 mt-1 line-clamp-2">{course.description}</p>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-[#0DBD9F] text-[#0DBD9F]" />
                        {course.rating}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {course.students}
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-[#0d6ebb] to-[#0DBD9F] hover:from-[#0DBD9F] hover:to-[#0d6ebb] text-white" asChild>
                      <Link href={`/dashboard/course/${course.id}`}>
                        <PlayCircle className="h-4 w-4 mr-2" />
                        Commencer le Cours
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* In Progress Courses */}
        {/* <TabsContent value="in-progress" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            {inProgressCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden border-[#0d6ebb]/20 hover:shadow-lg transition-shadow">
                <div className="flex">
                  <div className="w-32 h-32 relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover rounded-l-lg"
                    />
                  </div>
                  <div className="flex-1 p-4">
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-semibold text-lg text-[#0d6ebb]">{course.title}</h3>
                        <p className="text-sm text-gray-600">par {course.instructor}</p>
                        <Badge variant="outline" className="mt-1 border-[#0DBD9F] text-[#0DBD9F]">
                          {course.category}
                        </Badge>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Progression</span>
                          <span className="font-medium text-[#0d6ebb]">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>Suivant: {course.nextLesson}</span>
                          <span>{course.timeLeft} restant</span>
                        </div>
                      </div>

                      <Button asChild className="w-full bg-gradient-to-r from-[#0d6ebb] to-[#0DBD9F] hover:from-[#0DBD9F] hover:to-[#0d6ebb] text-white" size="sm">
                        <Link href={`/dashboard/course/${course.id}`}>
                          <PlayCircle className="h-4 w-4 mr-2" />
                          Continuer l'Apprentissage
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent> */}

        {/* Completed Courses */}
        {/* <TabsContent value="completed" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {completedCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden border-[#0d6ebb]/20 hover:shadow-lg transition-shadow">
                <div className="relative">
                  <div className="h-32 bg-gradient-to-br from-[#0DBD9F] to-[#0d6ebb] relative overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover mix-blend-overlay"
                    />
                    <div className="absolute top-3 right-3">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-[#0d6ebb]">{course.title}</h3>
                      <p className="text-sm text-gray-600">par {course.instructor}</p>
                      <Badge variant="outline" className="mt-1 border-[#0DBD9F] text-[#0DBD9F]">
                        {course.category}
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1 text-gray-500">
                        <Calendar className="h-3 w-3" />
                        <span>Terminé le {new Date(course.completedDate).toLocaleDateString('fr-FR')}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Trophy className="h-3 w-3 text-[#0DBD9F]" />
                        <span className="font-medium text-[#0d6ebb]">{course.score}%</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1 border-[#0d6ebb] text-[#0d6ebb] hover:bg-[#0d6ebb] hover:text-white" asChild>
                        <Link href={`/dashboard/course/${course.id}`}>Revoir le Cours</Link>
                      </Button>
                      <Button size="sm" className="flex-1 bg-gradient-to-r from-[#0d6ebb] to-[#0DBD9F] hover:from-[#0DBD9F] hover:to-[#0d6ebb] text-white" asChild>
                        <Link href={`/dashboard/certificates/${course.certificateId}`}>Voir le Certificat</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent> */}
      </Tabs>
    </div>
  )
}