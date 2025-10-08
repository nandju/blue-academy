"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Upload, Plus, X, Save, Eye } from "lucide-react"
import Link from "next/link"

export default function NewCoursePage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    category: "",
    difficulty: "",
    instructor: "",
    duration: "",
    price: "",
    thumbnail: null as File | null,
    tags: [] as string[],
  })
  const [tagInput, setTagInput] = useState("")

  const addTag = () => {
    if (tagInput.trim() && !courseData.tags.includes(tagInput.trim())) {
      setCourseData({ ...courseData, tags: [...courseData.tags, tagInput.trim()] })
      setTagInput("")
    }
  }

  const removeTag = (tag: string) => {
    setCourseData({ ...courseData, tags: courseData.tags.filter((t) => t !== tag) })
  }

  const steps = [
    { number: 1, title: "Informations de Base", description: "Détails et métadonnées" },
    { number: 2, title: "Contenu & Médias", description: "Matériel pédagogique" },
    { number: 3, title: "Quiz & Évaluation", description: "Tests de compréhension" },
    { number: 4, title: "Certificat", description: "Configuration certificat" },
    { number: 5, title: "Révision & Publication", description: "Vérification finale" },
  ]

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
            <h1 className="text-3xl font-bold tracking-tight text-[#0d6ebb]">Créer une Nouvelle Formation</h1>
            <p className="text-gray-600">Suivez les étapes pour créer une formation complète</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-[#0d6ebb] text-[#0d6ebb] hover:bg-[#0d6ebb]/10">
            <Eye className="h-4 w-4 mr-2" />
            Aperçu
          </Button>
          <Button variant="outline" className="border-[#0d6ebb] text-[#0d6ebb] hover:bg-[#0d6ebb]/10">
            Enregistrer Brouillon
          </Button>
          <Button className="bg-[#0d6ebb] hover:bg-[#0d6ebb]/90">
            <Save className="h-4 w-4 mr-2" />
            Publier Formation
          </Button>
        </div>
      </div>

      {/* Progress Steps */}
      <Card className="bg-white border-[#0d6ebb]/20">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                      currentStep >= step.number ? "bg-[#0d6ebb] text-white" : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {step.number}
                  </div>
                  <div className="text-center mt-2">
                    <div className={`text-sm font-medium ${currentStep >= step.number ? "text-[#0d6ebb]" : "text-gray-900"}`}>
                      {step.title}
                    </div>
                    <div className="text-xs text-gray-500">{step.description}</div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`h-1 flex-1 mx-2 transition-colors ${currentStep > step.number ? "bg-[#0d6ebb]" : "bg-gray-200"}`} />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Step Content */}
      {currentStep === 1 && (
        <Card className="bg-white border-[#0d6ebb]/20">
          <CardHeader>
            <CardTitle className="text-[#0d6ebb]">Informations de Base</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="title">Titre de la Formation *</Label>
                <Input
                  id="title"
                  placeholder="ex: Gestion des Déchets Plastiques"
                  value={courseData.title}
                  onChange={(e) => setCourseData({ ...courseData, title: e.target.value })}
                  className="border-[#0d6ebb]/30 focus:border-[#0d6ebb]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="instructor">Instructeur *</Label>
                <Input
                  id="instructor"
                  placeholder="Nom de l'instructeur"
                  value={courseData.instructor}
                  onChange={(e) => setCourseData({ ...courseData, instructor: e.target.value })}
                  className="border-[#0d6ebb]/30 focus:border-[#0d6ebb]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Catégorie *</Label>
                <Select
                  value={courseData.category}
                  onValueChange={(value) => setCourseData({ ...courseData, category: value })}
                >
                  <SelectTrigger className="border-[#0d6ebb]/30 focus:border-[#0d6ebb]">
                    <SelectValue placeholder="Sélectionner catégorie" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pollution-marine">Pollution Marine</SelectItem>
                    <SelectItem value="economie-verte">Économie Verte</SelectItem>
                    <SelectItem value="ecologie-marine">Écologie Marine</SelectItem>
                    <SelectItem value="technologie-verte">Technologie Verte</SelectItem>
                    <SelectItem value="education">Éducation</SelectItem>
                    <SelectItem value="droit">Droit Environnemental</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="difficulty">Niveau de Difficulté *</Label>
                <Select
                  value={courseData.difficulty}
                  onValueChange={(value) => setCourseData({ ...courseData, difficulty: value })}
                >
                  <SelectTrigger className="border-[#0d6ebb]/30 focus:border-[#0d6ebb]">
                    <SelectValue placeholder="Sélectionner niveau" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="debutant">Débutant</SelectItem>
                    <SelectItem value="intermediaire">Intermédiaire</SelectItem>
                    <SelectItem value="avance">Avancé</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration">Durée *</Label>
                <Input
                  id="duration"
                  placeholder="ex: 8h 30m"
                  value={courseData.duration}
                  onChange={(e) => setCourseData({ ...courseData, duration: e.target.value })}
                  className="border-[#0d6ebb]/30 focus:border-[#0d6ebb]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="price">Prix (XOF) *</Label>
                <Input
                  id="price"
                  type="number"
                  placeholder="ex: 50000"
                  value={courseData.price}
                  onChange={(e) => setCourseData({ ...courseData, price: e.target.value })}
                  className="border-[#0d6ebb]/30 focus:border-[#0d6ebb]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description de la Formation *</Label>
              <Textarea
                id="description"
                placeholder="Fournir une description détaillée de ce que les apprenants vont découvrir..."
                rows={6}
                value={courseData.description}
                onChange={(e) => setCourseData({ ...courseData, description: e.target.value })}
                className="border-[#0d6ebb]/30 focus:border-[#0d6ebb]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tags">Mots-clés</Label>
              <div className="flex gap-2">
                <Input
                  id="tags"
                  placeholder="Ajouter des mots-clés (ex: Océan, Recyclage)"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                  className="border-[#0d6ebb]/30 focus:border-[#0d6ebb]"
                />
                <Button type="button" onClick={addTag} className="bg-[#0d6ebb] hover:bg-[#0d6ebb]/90">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {courseData.tags.map((tag) => (
                  <Badge key={tag} className="bg-[#0DBD9F] text-white gap-1">
                    {tag}
                    <button onClick={() => removeTag(tag)} className="ml-1 hover:bg-white/20 rounded-full">
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="thumbnail">Image de Couverture</Label>
              <div className="border-2 border-dashed border-[#0d6ebb]/30 rounded-lg p-8 text-center hover:border-[#0d6ebb]/50 transition-colors">
                <Upload className="h-8 w-8 mx-auto text-[#0d6ebb] mb-2" />
                <p className="text-sm text-gray-600 mb-2">Cliquez pour téléverser ou glissez-déposez</p>
                <p className="text-xs text-gray-500">PNG, JPG jusqu'à 5MB</p>
                <Input
                  id="thumbnail"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => setCourseData({ ...courseData, thumbnail: e.target.files?.[0] || null })}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {currentStep === 2 && (
        <Card className="bg-white border-[#0d6ebb]/20">
          <CardHeader>
            <CardTitle className="text-[#0d6ebb]">Contenu & Médias</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center py-12 border-2 border-dashed border-[#0d6ebb]/30 rounded-lg hover:border-[#0d6ebb]/50 transition-colors">
              <Upload className="h-12 w-12 mx-auto text-[#0d6ebb] mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Téléverser le Matériel Pédagogique</h3>
              <p className="text-gray-600 mb-4">Ajouter des vidéos, PDFs et autres ressources d'apprentissage</p>
              <Button className="bg-[#0d6ebb] hover:bg-[#0d6ebb]/90">
                <Plus className="h-4 w-4 mr-2" />
                Ajouter Contenu
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {currentStep === 3 && (
        <Card className="bg-white border-[#0d6ebb]/20">
          <CardHeader>
            <CardTitle className="text-[#0d6ebb]">Quiz & Évaluation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center py-12 border-2 border-dashed border-[#0d6ebb]/30 rounded-lg hover:border-[#0d6ebb]/50 transition-colors">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Créer un Quiz de Formation</h3>
              <p className="text-gray-600 mb-4">Ajouter des questions à choix multiples pour évaluer l'apprentissage</p>
              <Button className="bg-[#0d6ebb] hover:bg-[#0d6ebb]/90">
                <Plus className="h-4 w-4 mr-2" />
                Créer Quiz
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {currentStep === 4 && (
        <Card className="bg-white border-[#0d6ebb]/20">
          <CardHeader>
            <CardTitle className="text-[#0d6ebb]">Configuration du Certificat</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="cert-title">Titre du Certificat</Label>
                <Input 
                  id="cert-title" 
                  placeholder="Certificat de Complétion" 
                  className="border-[#0d6ebb]/30 focus:border-[#0d6ebb]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pass-score">Score de Réussite (%)</Label>
                <Input 
                  id="pass-score" 
                  type="number" 
                  placeholder="70" 
                  className="border-[#0d6ebb]/30 focus:border-[#0d6ebb]"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {currentStep === 5 && (
        <Card className="bg-white border-[#0d6ebb]/20">
          <CardHeader>
            <CardTitle className="text-[#0d6ebb]">Révision & Publication</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-4 text-[#0d6ebb]">Résumé de la Formation</h3>
                <dl className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-[#0d6ebb]/5 rounded-lg">
                    <dt className="text-sm text-gray-600">Titre</dt>
                    <dd className="font-medium text-gray-900">{courseData.title || "Non défini"}</dd>
                  </div>
                  <div className="p-3 bg-[#0d6ebb]/5 rounded-lg">
                    <dt className="text-sm text-gray-600">Instructeur</dt>
                    <dd className="font-medium text-gray-900">{courseData.instructor || "Non défini"}</dd>
                  </div>
                  <div className="p-3 bg-[#0d6ebb]/5 rounded-lg">
                    <dt className="text-sm text-gray-600">Catégorie</dt>
                    <dd className="font-medium text-gray-900">{courseData.category || "Non défini"}</dd>
                  </div>
                  <div className="p-3 bg-[#0d6ebb]/5 rounded-lg">
                    <dt className="text-sm text-gray-600">Difficulté</dt>
                    <dd className="font-medium text-gray-900">{courseData.difficulty || "Non défini"}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
          disabled={currentStep === 1}
          className="border-[#0d6ebb] text-[#0d6ebb] hover:bg-[#0d6ebb]/10 disabled:opacity-50"
        >
          Précédent
        </Button>
        <Button 
          onClick={() => setCurrentStep(Math.min(5, currentStep + 1))} 
          disabled={currentStep === 5}
          className="bg-[#0d6ebb] hover:bg-[#0d6ebb]/90 disabled:opacity-50"
        >
          Étape Suivante
        </Button>
      </div>
    </div>
  )
}