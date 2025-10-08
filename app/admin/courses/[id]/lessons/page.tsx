"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ArrowLeft, Plus, MoreVertical, Upload, Lock, Unlock, Edit, Trash2 } from "lucide-react"
import Link from "next/link"

const lessons = [
  { id: 1, title: "Introduction à la Pollution Plastique Marine", type: "Vidéo", duration: "15:30", order: 1, locked: false },
  { id: 2, title: "Types de Déchets Plastiques", type: "Vidéo", duration: "22:45", order: 2, locked: false },
  { id: 3, title: "Impact sur les Écosystèmes", type: "PDF", duration: "N/A", order: 3, locked: false },
  { id: 4, title: "Quiz de Compréhension", type: "Quiz", duration: "30:00", order: 4, locked: true },
]

export default async function CourseLessonsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild className="hover:bg-[#0d6ebb]/10">
            <Link href="/admin/courses">
              <ArrowLeft className="h-4 w-4 text-[#0d6ebb]" />
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-[#0d6ebb]">Gérer les Leçons</h1>
            <p className="text-gray-600">ID Formation: {id}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-[#0d6ebb] text-[#0d6ebb] hover:bg-[#0d6ebb]/10">
            <Upload className="h-4 w-4 mr-2" />
            Téléverser Contenu
          </Button>
          <Button className="bg-[#0d6ebb] hover:bg-[#0d6ebb]/90">
            <Plus className="h-4 w-4 mr-2" />
            Ajouter Leçon
          </Button>
        </div>
      </div>

      <Card className="bg-white border-[#0d6ebb]/20">
        <CardHeader>
          <CardTitle className="text-[#0d6ebb]">Leçons de la Formation</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            {lessons.map((lesson) => (
              <div 
                key={lesson.id} 
                className="flex items-center justify-between p-4 border border-[#0d6ebb]/20 rounded-lg hover:border-[#0d6ebb]/40 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0d6ebb]/10 text-[#0d6ebb] font-semibold">
                    {lesson.order}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{lesson.title}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <Badge variant="outline" className="border-[#0d6ebb]/30 text-[#0d6ebb]">
                        {lesson.type}
                      </Badge>
                      <span className="text-sm text-gray-500">{lesson.duration}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  {lesson.locked ? (
                    <Badge className="bg-red-100 text-red-800">
                      <Lock className="h-3 w-3 mr-1" />
                      Verrouillé
                    </Badge>
                  ) : (
                    <Badge className="bg-[#0DBD9F] text-white">
                      <Unlock className="h-3 w-3 mr-1" />
                      Déverrouillé
                    </Badge>
                  )}
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="hover:bg-[#0d6ebb]/10">
                        <MoreVertical className="h-4 w-4 text-[#0d6ebb]" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Edit className="h-4 w-4 mr-2" />
                        Modifier
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Upload className="h-4 w-4 mr-2" />
                        Remplacer Contenu
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        {lesson.locked ? (
                          <>
                            <Unlock className="h-4 w-4 mr-2" />
                            Déverrouiller
                          </>
                        ) : (
                          <>
                            <Lock className="h-4 w-4 mr-2" />
                            Verrouiller
                          </>
                        )}
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Supprimer
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
          
          {lessons.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">Aucune leçon pour cette formation.</p>
              <Button className="mt-4 bg-[#0d6ebb] hover:bg-[#0d6ebb]/90">
                <Plus className="h-4 w-4 mr-2" />
                Ajouter votre première leçon
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Info Card */}
      <Card className="bg-[#0d6ebb]/5 border-[#0d6ebb]/20">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0d6ebb]">
              <span className="text-white text-sm font-semibold">ℹ️</span>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-[#0d6ebb] mb-1">Organisation des Leçons</h4>
              <p className="text-sm text-gray-600">
                Les leçons sont présentées aux apprenants dans l'ordre indiqué. Vous pouvez verrouiller certaines leçons 
                pour qu'elles ne soient accessibles qu'après avoir complété les précédentes. Les quiz verrouillés nécessitent 
                généralement la complétion de toutes les leçons précédentes.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}