"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Save, Trash2, Plus, X, GripVertical } from "lucide-react"
import Link from "next/link"

export default async function EditQuizPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
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
            <h1 className="text-3xl font-bold tracking-tight text-[#0d6ebb]">Modifier le Quiz</h1>
            <p className="text-gray-600">ID Quiz: {id}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
            <Trash2 className="h-4 w-4 mr-2" />
            Supprimer Quiz
          </Button>
          <Button className="bg-[#0d6ebb] hover:bg-[#0d6ebb]/90">
            <Save className="h-4 w-4 mr-2" />
            Enregistrer
          </Button>
        </div>
      </div>

      <Card className="bg-white border-[#0d6ebb]/20">
        <CardHeader>
          <CardTitle className="text-[#0d6ebb]">Paramètres du Quiz</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="title">Titre du Quiz</Label>
              <Input 
                id="title" 
                defaultValue="Quiz Pollution Plastique Océanique"
                className="border-[#0d6ebb]/30 focus:border-[#0d6ebb]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="duration">Durée (minutes)</Label>
              <Input 
                id="duration" 
                type="number" 
                defaultValue="30"
                className="border-[#0d6ebb]/30 focus:border-[#0d6ebb]"
              />
            </div>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="course">Formation Associée</Label>
              <Select defaultValue="plastic-management">
                <SelectTrigger className="border-[#0d6ebb]/30 focus:border-[#0d6ebb]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="plastic-management">Gestion des Déchets Plastiques</SelectItem>
                  <SelectItem value="circular-economy">Économie Circulaire et Plastique</SelectItem>
                  <SelectItem value="marine-protection">Protection des Écosystèmes Marins</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="passing-score">Score de Réussite (%)</Label>
              <Input 
                id="passing-score" 
                type="number" 
                defaultValue="70"
                min="0"
                max="100"
                className="border-[#0d6ebb]/30 focus:border-[#0d6ebb]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea 
              id="description" 
              rows={3} 
              defaultValue="Évaluez vos connaissances sur la pollution plastique océanique et ses impacts environnementaux..."
              className="border-[#0d6ebb]/30 focus:border-[#0d6ebb]"
            />
          </div>
        </CardContent>
      </Card>

      {/* Questions Section */}
      <Card className="bg-white border-[#0d6ebb]/20">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-[#0d6ebb]">Questions du Quiz</CardTitle>
          <Button className="bg-[#0d6ebb] hover:bg-[#0d6ebb]/90">
            <Plus className="h-4 w-4 mr-2" />
            Ajouter Question
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Question 1 */}
          <div className="p-4 border border-[#0d6ebb]/20 rounded-lg hover:border-[#0d6ebb]/40 transition-colors">
            <div className="flex items-start gap-3">
              <GripVertical className="h-5 w-5 text-gray-400 mt-1 cursor-move" />
              <div className="flex-1 space-y-3">
                <div className="flex items-center justify-between">
                  <Badge className="bg-[#0d6ebb] text-white">Question 1</Badge>
                  <Button variant="ghost" size="sm" className="text-red-600 hover:bg-red-50">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="space-y-2">
                  <Label>Question</Label>
                  <Input 
                    defaultValue="Quel pourcentage de plastique finit dans les océans chaque année ?"
                    className="border-[#0d6ebb]/30 focus:border-[#0d6ebb]"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Options de Réponse</Label>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <input type="radio" name="q1" id="q1a" defaultChecked className="accent-[#0DBD9F]" />
                      <Input 
                        defaultValue="Environ 8 millions de tonnes (Correct)"
                        className="flex-1 border-[#0d6ebb]/30 focus:border-[#0d6ebb]"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="radio" name="q1" id="q1b" className="accent-[#0d6ebb]" />
                      <Input 
                        defaultValue="Environ 2 millions de tonnes"
                        className="flex-1 border-[#0d6ebb]/30 focus:border-[#0d6ebb]"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="radio" name="q1" id="q1c" className="accent-[#0d6ebb]" />
                      <Input 
                        defaultValue="Environ 15 millions de tonnes"
                        className="flex-1 border-[#0d6ebb]/30 focus:border-[#0d6ebb]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Question 2 */}
          <div className="p-4 border border-[#0d6ebb]/20 rounded-lg hover:border-[#0d6ebb]/40 transition-colors">
            <div className="flex items-start gap-3">
              <GripVertical className="h-5 w-5 text-gray-400 mt-1 cursor-move" />
              <div className="flex-1 space-y-3">
                <div className="flex items-center justify-between">
                  <Badge className="bg-[#0d6ebb] text-white">Question 2</Badge>
                  <Button variant="ghost" size="sm" className="text-red-600 hover:bg-red-50">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="space-y-2">
                  <Label>Question</Label>
                  <Input 
                    defaultValue="Combien de temps met un sac plastique à se décomposer dans l'océan ?"
                    className="border-[#0d6ebb]/30 focus:border-[#0d6ebb]"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Options de Réponse</Label>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <input type="radio" name="q2" id="q2a" className="accent-[#0d6ebb]" />
                      <Input 
                        defaultValue="10 ans"
                        className="flex-1 border-[#0d6ebb]/30 focus:border-[#0d6ebb]"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="radio" name="q2" id="q2b" className="accent-[#0d6ebb]" />
                      <Input 
                        defaultValue="100 ans"
                        className="flex-1 border-[#0d6ebb]/30 focus:border-[#0d6ebb]"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="radio" name="q2" id="q2c" defaultChecked className="accent-[#0DBD9F]" />
                      <Input 
                        defaultValue="450 ans (Correct)"
                        className="flex-1 border-[#0d6ebb]/30 focus:border-[#0d6ebb]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Button variant="outline" className="w-full border-[#0d6ebb] text-[#0d6ebb] hover:bg-[#0d6ebb]/10">
            <Plus className="h-4 w-4 mr-2" />
            Ajouter une Question
          </Button>
        </CardContent>
      </Card>

      {/* Quiz Statistics */}
      <Card className="bg-[#0d6ebb]/5 border-[#0d6ebb]/20">
        <CardContent className="p-6">
          <div className="grid gap-4 md:grid-cols-4">
            <div>
              <p className="text-sm text-gray-600">Total Questions</p>
              <p className="text-2xl font-bold text-[#0d6ebb]">2</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Tentatives</p>
              <p className="text-2xl font-bold text-[#0d6ebb]">234</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Score Moyen</p>
              <p className="text-2xl font-bold text-[#0DBD9F]">85%</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Taux Réussite</p>
              <p className="text-2xl font-bold text-[#0DBD9F]">78%</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}