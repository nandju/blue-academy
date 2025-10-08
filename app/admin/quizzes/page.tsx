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
import { Search, Plus, MoreVertical, Edit, Eye, Copy, Trash2, FileText, AlertTriangle, Clock, FileQuestion } from "lucide-react"
import Link from "next/link"

const quizzes = [
  {
    id: 1,
    title: "Quiz Pollution Plastique Océanique",
    course: "Gestion des Déchets Plastiques",
    questions: 20,
    duration: 30,
    attempts: 234,
    avgScore: 85,
    passRate: 78,
    status: "Actif",
    suspicious: 3,
  },
  {
    id: 2,
    title: "Évaluation Économie Circulaire",
    course: "Économie Circulaire et Plastique",
    questions: 25,
    duration: 45,
    attempts: 189,
    avgScore: 82,
    passRate: 75,
    status: "Actif",
    suspicious: 1,
  },
  {
    id: 3,
    title: "Quiz Protection Écosystèmes",
    course: "Protection des Écosystèmes Marins",
    questions: 15,
    duration: 20,
    attempts: 156,
    avgScore: 88,
    passRate: 82,
    status: "Brouillon",
    suspicious: 0,
  },
]

export default function AdminQuizzesPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredQuizzes = quizzes.filter(
    (quiz) =>
      quiz.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quiz.course.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[#0d6ebb]">Gestion des Quiz</h1>
          <p className="text-gray-600">Créer et gérer les évaluations de formation</p>
        </div>
        <Button asChild className="bg-[#0d6ebb] hover:bg-[#0d6ebb]/90">
          <Link href="/admin/quizzes/new">
            <Plus className="h-4 w-4 mr-2" />
            Créer Quiz
          </Link>
        </Button>
      </div>

      {/* Search */}
      <Card className="bg-white border-[#0d6ebb]/20">
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0d6ebb]" />
            <Input
              placeholder="Rechercher par titre ou formation..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 border-[#0d6ebb]/30 focus:border-[#0d6ebb]"
            />
          </div>
        </CardContent>
      </Card>

      {/* Quizzes Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredQuizzes.map((quiz) => (
          <Card key={quiz.id} className="bg-white hover:shadow-lg hover:border-[#0d6ebb]/40 transition-all border-[#0d6ebb]/10">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <FileQuestion className="h-5 w-5 text-[#0d6ebb]" />
                      <h3 className="font-semibold text-lg text-gray-900">{quiz.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600">{quiz.course}</p>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="hover:bg-[#0d6ebb]/10">
                        <MoreVertical className="h-4 w-4 text-[#0d6ebb]" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link href={`/admin/quizzes/${quiz.id}/edit`}>
                          <Edit className="h-4 w-4 mr-2" />
                          Modifier Quiz
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href={`/admin/quizzes/${quiz.id}/results`}>
                          <Eye className="h-4 w-4 mr-2" />
                          Voir Résultats
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Copy className="h-4 w-4 mr-2" />
                        Dupliquer
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <FileText className="h-4 w-4 mr-2" />
                        Exporter Résultats
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Supprimer
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="flex items-center gap-2">
                  <Badge
                    className={quiz.status === "Actif" ? "bg-[#0DBD9F] text-white" : "bg-gray-100 text-gray-800"}
                  >
                    {quiz.status}
                  </Badge>
                  {quiz.suspicious > 0 && (
                    <Badge variant="destructive" className="gap-1">
                      <AlertTriangle className="h-3 w-3" />
                      {quiz.suspicious} suspects
                    </Badge>
                  )}
                </div>

                <div className="space-y-2 pt-2 border-t border-[#0d6ebb]/10">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500">Questions</span>
                      <span className="text-sm font-semibold text-[#0d6ebb]">{quiz.questions}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        Durée
                      </span>
                      <span className="text-sm font-semibold text-gray-700">{quiz.duration} min</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500">Tentatives</span>
                      <span className="text-sm font-semibold text-gray-700">{quiz.attempts}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500">Score Moyen</span>
                      <span className="text-sm font-semibold text-[#0DBD9F]">{quiz.avgScore}%</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#0d6ebb]/10">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">Taux de Réussite</span>
                      <span className="text-sm font-semibold text-[#0d6ebb]">{quiz.passRate}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div 
                        className="bg-[#0DBD9F] h-2 rounded-full transition-all" 
                        style={{ width: `${quiz.passRate}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredQuizzes.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">Aucun quiz trouvé.</p>
        </div>
      )}

      {/* Stats Summary */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-white border-l-4 border-l-[#0d6ebb]">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Quiz Actifs</p>
                <p className="text-2xl font-bold text-[#0d6ebb]">
                  {quizzes.filter(q => q.status === "Actif").length}
                </p>
              </div>
              <FileQuestion className="h-8 w-8 text-[#0d6ebb]" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-l-4 border-l-[#0DBD9F]">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Tentatives Totales</p>
                <p className="text-2xl font-bold text-[#0DBD9F]">
                  {quizzes.reduce((sum, q) => sum + q.attempts, 0)}
                </p>
              </div>
              <Eye className="h-8 w-8 text-[#0DBD9F]" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-l-4 border-l-orange-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Tentatives Suspectes</p>
                <p className="text-2xl font-bold text-orange-600">
                  {quizzes.reduce((sum, q) => sum + q.suspicious, 0)}
                </p>
              </div>
              <AlertTriangle className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}