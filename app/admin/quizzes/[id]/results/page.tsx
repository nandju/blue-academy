"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Search, Download, MoreVertical, Eye, RotateCcw, AlertTriangle, TrendingUp } from "lucide-react"
import Link from "next/link"

const attempts = [
  {
    id: 1,
    user: "Jean Dupont",
    email: "jean@exemple.com",
    score: 95,
    passed: true,
    duration: "28:45",
    date: "2024-01-15 10:30",
    suspicious: false,
  },
  {
    id: 2,
    user: "Marie Martin",
    email: "marie@exemple.com",
    score: 88,
    passed: true,
    duration: "25:12",
    date: "2024-01-15 09:15",
    suspicious: false,
  },
  {
    id: 3,
    user: "Pierre Durand",
    email: "pierre@exemple.com",
    score: 65,
    passed: false,
    duration: "15:30",
    date: "2024-01-14 16:45",
    suspicious: true,
  },
]

const suspiciousAttempts = attempts.filter((a) => a.suspicious)

export default async function QuizResultsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const [searchTerm, setSearchTerm] = useState("")

  const filteredAttempts = attempts.filter(
    (attempt) =>
      attempt.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      attempt.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild className="hover:bg-[#0d6ebb]/10">
            <Link href="/admin/quizzes">
              <ArrowLeft className="h-4 w-4 text-[#0d6ebb]" />
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-[#0d6ebb]">Résultats du Quiz</h1>
            <p className="text-gray-600">Quiz Pollution Plastique Océanique</p>
          </div>
        </div>
        <Button className="bg-[#0d6ebb] hover:bg-[#0d6ebb]/90">
          <Download className="h-4 w-4 mr-2" />
          Exporter Résultats
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-white border-l-4 border-l-[#0d6ebb]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">Total Tentatives</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#0d6ebb]">234</div>
            <p className="text-xs text-gray-600">Depuis création</p>
          </CardContent>
        </Card>

        <Card className="bg-white border-l-4 border-l-[#0DBD9F]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">Score Moyen</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#0DBD9F]">85%</div>
            <p className="text-xs text-[#0DBD9F] flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              +3% cette semaine
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white border-l-4 border-l-[#0DBD9F]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">Taux de Réussite</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#0DBD9F]">78%</div>
            <p className="text-xs text-gray-600">183 réussis</p>
          </CardContent>
        </Card>

        <Card className="bg-white border-l-4 border-l-orange-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">Suspects</CardTitle>
            <AlertTriangle className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{suspiciousAttempts.length}</div>
            <p className="text-xs text-gray-600">À vérifier</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="bg-white border border-[#0d6ebb]/20">
          <TabsTrigger value="all" className="data-[state=active]:bg-[#0d6ebb] data-[state=active]:text-white">
            Toutes les Tentatives
          </TabsTrigger>
          <TabsTrigger value="suspicious" className="data-[state=active]:bg-[#0d6ebb] data-[state=active]:text-white">
            Suspectes
            {suspiciousAttempts.length > 0 && (
              <Badge variant="destructive" className="ml-2">
                {suspiciousAttempts.length}
              </Badge>
            )}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {/* Search */}
          <Card className="bg-white border-[#0d6ebb]/20">
            <CardContent className="p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0d6ebb]" />
                <Input
                  placeholder="Rechercher par nom ou email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 border-[#0d6ebb]/30 focus:border-[#0d6ebb]"
                />
              </div>
            </CardContent>
          </Card>

          {/* Results Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredAttempts.map((attempt) => (
              <Card key={attempt.id} className="bg-white hover:shadow-lg hover:border-[#0d6ebb]/40 transition-all border-[#0d6ebb]/10">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{attempt.user}</h3>
                        <p className="text-sm text-gray-600">{attempt.email}</p>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="hover:bg-[#0d6ebb]/10">
                            <MoreVertical className="h-4 w-4 text-[#0d6ebb]" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="h-4 w-4 mr-2" />
                            Voir Détails
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Download className="h-4 w-4 mr-2" />
                            Exporter
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-orange-600">
                            <RotateCcw className="h-4 w-4 mr-2" />
                            Réinitialiser
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    <div className="flex items-center gap-2">
                      <Badge className={attempt.passed ? "bg-[#0DBD9F] text-white" : "bg-red-100 text-red-800"}>
                        {attempt.passed ? "Réussi" : "Échoué"}
                      </Badge>
                      {attempt.suspicious && (
                        <Badge variant="destructive" className="gap-1">
                          <AlertTriangle className="h-3 w-3" />
                          Suspect
                        </Badge>
                      )}
                    </div>

                    <div className="space-y-2 pt-2 border-t border-[#0d6ebb]/10">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Score</span>
                        <span className={`text-2xl font-bold ${attempt.passed ? "text-[#0DBD9F]" : "text-red-600"}`}>
                          {attempt.score}%
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Durée</span>
                        <span className="text-gray-700">{attempt.duration}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Date</span>
                        <span className="text-gray-700">{attempt.date}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="suspicious">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {suspiciousAttempts.map((attempt) => (
              <Card key={attempt.id} className="bg-white border-orange-200 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{attempt.user}</h3>
                        <p className="text-sm text-gray-600">{attempt.email}</p>
                      </div>
                      <Badge variant="destructive" className="gap-1">
                        <AlertTriangle className="h-3 w-3" />
                        Suspect
                      </Badge>
                    </div>

                    <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                      <p className="text-sm text-orange-800">
                        <span className="font-semibold">Raison:</span> Complétion inhabituellement rapide
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-orange-200">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Score</span>
                        <span className="text-2xl font-bold text-red-600">{attempt.score}%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Durée</span>
                        <span className="text-orange-600 font-semibold">{attempt.duration}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Date</span>
                        <span className="text-gray-700">{attempt.date}</span>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline" className="flex-1 border-[#0d6ebb] text-[#0d6ebb] hover:bg-[#0d6ebb]/10">
                        Examiner
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 text-red-600 border-red-600 hover:bg-red-50">
                        Invalider
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}