"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Search, Plus, MoreVertical, Edit, Copy, Eye, Archive, Trash2, Users, Clock, Filter } from "lucide-react"
import Link from "next/link"

const courses = [
  {
    id: 1,
    title: "Gestion des Déchets Plastiques en Mer",
    instructor: "Dr. Marie Océane",
    category: "Pollution Marine",
    students: 234,
    lessons: 12,
    duration: "8h 30m",
    status: "Publié",
    lastUpdated: "2024-01-15",
    visibility: "Public",
  },
  {
    id: 2,
    title: "Économie Circulaire et Plastique",
    instructor: "Prof. Jean Recyclage",
    category: "Économie Verte",
    students: 189,
    lessons: 15,
    duration: "12h 15m",
    status: "Publié",
    lastUpdated: "2024-01-14",
    visibility: "Public",
  },
  {
    id: 3,
    title: "Protection des Écosystèmes Marins",
    instructor: "Dr. Sophie Mer",
    category: "Écologie Marine",
    students: 156,
    lessons: 8,
    duration: "6h 45m",
    status: "Brouillon",
    lastUpdated: "2024-01-13",
    visibility: "Privé",
  },
  {
    id: 4,
    title: "Innovation en Recyclage Plastique",
    instructor: "Ing. David Eco",
    category: "Technologie Verte",
    students: 98,
    lessons: 10,
    duration: "10h 00m",
    status: "Publié",
    lastUpdated: "2024-01-12",
    visibility: "Public",
  },
  {
    id: 5,
    title: "Sensibilisation Pollution Plastique",
    instructor: "Lisa Nature",
    category: "Éducation",
    students: 267,
    lessons: 9,
    duration: "7h 20m",
    status: "Publié",
    lastUpdated: "2024-01-11",
    visibility: "Public",
  },
  {
    id: 6,
    title: "Législation Environnementale",
    instructor: "Me. Robert Vert",
    category: "Droit Environnemental",
    students: 145,
    lessons: 6,
    duration: "5h 30m",
    status: "Archivé",
    lastUpdated: "2024-01-10",
    visibility: "Privé",
  },
]

const categories = [
  "Toutes Catégories",
  "Pollution Marine",
  "Économie Verte",
  "Écologie Marine",
  "Technologie Verte",
  "Éducation",
  "Droit Environnemental",
]
const statuses = ["Tous Statuts", "Publié", "Brouillon", "Archivé"]

export default function AdminCoursesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Toutes Catégories")
  const [selectedStatus, setSelectedStatus] = useState("Tous Statuts")

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "Toutes Catégories" || course.category === selectedCategory
    const matchesStatus = selectedStatus === "Tous Statuts" || course.status === selectedStatus
    return matchesSearch && matchesCategory && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Publié":
        return "bg-[#0DBD9F] text-white"
      case "Brouillon":
        return "bg-yellow-100 text-yellow-800"
      case "Archivé":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[#0d6ebb]">Gestion des Formations</h1>
          <p className="text-gray-600">Gérer toutes les formations et le contenu pédagogique</p>
        </div>
        <Button asChild className="bg-[#0d6ebb] hover:bg-[#0d6ebb]/90">
          <Link href="/admin/courses/new">
            <Plus className="h-4 w-4 mr-2" />
            Créer Formation
          </Link>
        </Button>
      </div>

      {/* Filters */}
      <Card className="bg-white border-[#0d6ebb]/20">
        <CardContent className="p-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0d6ebb]" />
              <Input
                placeholder="Rechercher par titre ou instructeur..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 border-[#0d6ebb]/30 focus:border-[#0d6ebb]"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-[#0d6ebb]/30 bg-background rounded-md text-sm hover:border-[#0d6ebb]"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-3 py-2 border border-[#0d6ebb]/30 bg-background rounded-md text-sm hover:border-[#0d6ebb]"
              >
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
              <Button variant="outline" size="icon" className="border-[#0d6ebb] text-[#0d6ebb] hover:bg-[#0d6ebb]/10">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Courses Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map((course) => (
          <Card key={course.id} className="bg-white hover:shadow-lg hover:border-[#0d6ebb]/40 transition-all border-[#0d6ebb]/10">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-gray-900 line-clamp-2">{course.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">par {course.instructor}</p>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="hover:bg-[#0d6ebb]/10">
                        <MoreVertical className="h-4 w-4 text-[#0d6ebb]" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link href={`/admin/courses/${course.id}/edit`}>
                          <Edit className="h-4 w-4 mr-2" />
                          Modifier
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href={`/admin/courses/${course.id}/lessons`}>
                          <Eye className="h-4 w-4 mr-2" />
                          Gérer Leçons
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Copy className="h-4 w-4 mr-2" />
                        Dupliquer
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      {course.status === "Publié" && (
                        <DropdownMenuItem>
                          <Archive className="h-4 w-4 mr-2" />
                          Archiver
                        </DropdownMenuItem>
                      )}
                      {course.status === "Brouillon" && (
                        <DropdownMenuItem>
                          <Eye className="h-4 w-4 mr-2" />
                          Publier
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuItem className="text-red-600">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Supprimer
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="border-[#0d6ebb]/30 text-[#0d6ebb]">
                    {course.category}
                  </Badge>
                  <Badge className={getStatusColor(course.status)}>{course.status}</Badge>
                </div>

                <div className="space-y-2 pt-2 border-t border-[#0d6ebb]/10">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      Apprenants
                    </span>
                    <span className="font-semibold text-[#0d6ebb]">{course.students}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Leçons</span>
                    <span className="text-gray-700">{course.lessons}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      Durée
                    </span>
                    <span className="text-gray-700">{course.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Mis à jour</span>
                    <span className="text-gray-700">{course.lastUpdated}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Visibilité</span>
                    <span className="text-gray-700">{course.visibility}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">Aucune formation trouvée selon vos critères.</p>
        </div>
      )}
    </div>
  )
}