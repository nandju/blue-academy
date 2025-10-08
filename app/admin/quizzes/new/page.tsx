"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Plus, Trash2, Save, GripVertical } from "lucide-react"
import Link from "next/link"

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export default function NewQuizPage() {
  const [questions, setQuestions] = useState<Question[]>([
    { id: 1, question: "", options: ["", "", "", ""], correctAnswer: 0, explanation: "" },
  ])

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { id: questions.length + 1, question: "", options: ["", "", "", ""], correctAnswer: 0, explanation: "" },
    ])
  }

  const removeQuestion = (id: number) => {
    setQuestions(questions.filter((q) => q.id !== id))
  }

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
            <h1 className="text-3xl font-bold tracking-tight text-[#0d6ebb]">Créer un Nouveau Quiz</h1>
            <p className="text-gray-600">Ajouter des questions à choix multiples pour l'évaluation</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-[#0d6ebb] text-[#0d6ebb] hover:bg-[#0d6ebb]/10">
            Enregistrer Brouillon
          </Button>
          <Button className="bg-[#0d6ebb] hover:bg-[#0d6ebb]/90">
            <Save className="h-4 w-4 mr-2" />
            Publier Quiz
          </Button>
        </div>
      </div>

      {/* Quiz Settings */}
      <Card className="bg-white border-[#0d6ebb]/20">
        <CardHeader>
          <CardTitle className="text-[#0d6ebb]">Paramètres du Quiz</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="title">Titre du Quiz *</Label>
              <Input 
                id="title" 
                placeholder="ex: Quiz Pollution Plastique Océanique"
                className="border-[#0d6ebb]/30 focus:border-[#0d6ebb]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="course">Formation Associée *</Label>
              <Select>
                <SelectTrigger className="border-[#0d6ebb]/30 focus:border-[#0d6ebb]">
                  <SelectValue placeholder="Sélectionner une formation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Gestion des Déchets Plastiques</SelectItem>
                  <SelectItem value="2">Économie Circulaire et Plastique</SelectItem>
                  <SelectItem value="3">Protection des Écosystèmes Marins</SelectItem>
                  <SelectItem value="4">Innovation en Recyclage</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">Durée (minutes) *</Label>
              <Input 
                id="duration" 
                type="number" 
                placeholder="30"
                className="border-[#0d6ebb]/30 focus:border-[#0d6ebb]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="passing-score">Score de Réussite (%) *</Label>
              <Input 
                id="passing-score" 
                type="number" 
                placeholder="70"
                min="0"
                max="100"
                className="border-[#0d6ebb]/30 focus:border-[#0d6ebb]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description du Quiz</Label>
            <Textarea 
              id="description" 
              placeholder="Décrivez ce que ce quiz évalue..."
              rows={3}
              className="border-[#0d6ebb]/30 focus:border-[#0d6ebb]"
            />
          </div>
        </CardContent>
      </Card>

      {/* Questions */}
      <div className="space-y-4">
        {questions.map((question, index) => (
          <Card key={question.id} className="bg-white border-[#0d6ebb]/20 hover:border-[#0d6ebb]/40 transition-colors">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <GripVertical className="h-5 w-5 text-gray-400 cursor-move" />
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0d6ebb] text-white font-semibold text-sm">
                      {index + 1}
                    </div>
                    <CardTitle className="text-lg text-gray-900">Question {index + 1}</CardTitle>
                  </div>
                </div>
                {questions.length > 1 && (
                  <Button variant="ghost" size="icon" onClick={() => removeQuestion(question.id)} className="hover:bg-red-50">
                    <Trash2 className="h-4 w-4 text-red-600" />
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Texte de la Question *</Label>
                <Textarea 
                  placeholder="ex: Quel pourcentage de plastique finit dans les océans chaque année ?"
                  rows={3}
                  className="border-[#0d6ebb]/30 focus:border-[#0d6ebb]"
                />
              </div>

              <div className="space-y-3">
                <Label>Options de Réponse *</Label>
                {question.options.map((_, optionIndex) => (
                  <div key={optionIndex} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-[#0d6ebb]/5 transition-colors">
                    <input
                      type="radio"
                      name={`correct-${question.id}`}
                      className="h-4 w-4 accent-[#0DBD9F]"
                      defaultChecked={optionIndex === 0}
                    />
                    <Input 
                      placeholder={`Option ${optionIndex + 1}`}
                      className="border-[#0d6ebb]/30 focus:border-[#0d6ebb]"
                    />
                  </div>
                ))}
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#0d6ebb] text-white text-xs">ℹ️</span>
                  Sélectionnez le bouton radio pour la réponse correcte
                </p>
              </div>

              <div className="space-y-2">
                <Label>Explication (Optionnel)</Label>
                <Textarea 
                  placeholder="Expliquez pourquoi c'est la bonne réponse..."
                  rows={2}
                  className="border-[#0d6ebb]/30 focus:border-[#0d6ebb]"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button 
        onClick={addQuestion} 
        variant="outline" 
        className="w-full bg-transparent border-[#0d6ebb] text-[#0d6ebb] hover:bg-[#0d6ebb]/10"
      >
        <Plus className="h-4 w-4 mr-2" />
        Ajouter une Question
      </Button>

      {/* Summary Card */}
      <Card className="bg-[#0d6ebb]/5 border-[#0d6ebb]/20">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0d6ebb]">
              <span className="text-white text-sm font-semibold">💡</span>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-[#0d6ebb] mb-2">Conseils pour créer un bon quiz</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Formulez des questions claires et précises</li>
                <li>• Assurez-vous que les réponses sont distinctes et sans ambiguïté</li>
                <li>• Ajoutez des explications pour aider l'apprentissage</li>
                <li>• Visez 10-20 questions pour un quiz complet</li>
                <li>• Variez la difficulté des questions</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-[#0d6ebb]/20">
                <p className="text-sm font-medium text-[#0d6ebb]">
                  Questions actuelles: {questions.length}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}