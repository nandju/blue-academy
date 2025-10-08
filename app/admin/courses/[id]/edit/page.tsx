"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Save, Eye, Trash2 } from "lucide-react"
import Link from "next/link"


export default async function EditCoursePage({ params }: { params: Promise<{ id: string }> }) {
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
            <h1 className="text-3xl font-bold tracking-tight text-[#0d6ebb]">Modifier la Formation</h1>
            <p className="text-gray-600">ID Formation: {id}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-[#0d6ebb] text-[#0d6ebb] hover:bg-[#0d6ebb]/10">
            <Eye className="h-4 w-4 mr-2" />
            Aperçu
          </Button>
          <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
            <Trash2 className="h-4 w-4 mr-2" />
            Supprimer
          </Button>
          <Button className="bg-[#0d6ebb] hover:bg-[#0d6ebb]/90">
            <Save className="h-4 w-4 mr-2" />
            Enregistrer
          </Button>
        </div>
      </div>

      <Tabs defaultValue="details" className="w-full">
        <TabsList className="bg-white border border-[#0d6ebb]/20">
          <TabsTrigger value="details" className="data-[state=active]:bg-[#0d6ebb] data-[state=active]:text-white">
            Détails Formation
          </TabsTrigger>
          <TabsTrigger value="content" className="data-[state=active]:bg-[#0d6ebb] data-[state=active]:text-white">
            Contenu
          </TabsTrigger>
          <TabsTrigger value="settings" className="data-[state=active]:bg-[#0d6ebb] data-[state=active]:text-white">
            Paramètres
          </TabsTrigger>
        </TabsList>

        <TabsContent value="details" className="space-y-6">
          <Card className="bg-white border-[#0d6ebb]/20">
            <CardHeader>
              <CardTitle className="text-[#0d6ebb]">Informations de Base</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="title">Titre de la Formation</Label>
                  <Input 
                    id="title" 
                    defaultValue="Gestion des Déchets Plastiques en Mer"
                    className="border-[#0d6ebb]/30 focus:border-[#0d6ebb]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="instructor">Instructeur</Label>
                  <Input 
                    id="instructor" 
                    defaultValue="Dr. Marie Océane"
                    className="border-[#0d6ebb]/30 focus:border-[#0d6ebb]"
                  />
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="category">Catégorie</Label>
                  <select
                    id="category"
                    className="w-full px-3 py-2 border border-[#0d6ebb]/30 bg-background rounded-md text-sm hover:border-[#0d6ebb] focus:outline-none focus:ring-2 focus:ring-[#0d6ebb]/20"
                  >
                    <option value="pollution-marine">Pollution Marine</option>
                    <option value="economie-verte">Économie Verte</option>
                    <option value="ecologie-marine">Écologie Marine</option>
                    <option value="technologie-verte">Technologie Verte</option>
                    <option value="education">Éducation</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Durée Totale</Label>
                  <Input 
                    id="duration" 
                    defaultValue="8h 30m"
                    className="border-[#0d6ebb]/30 focus:border-[#0d6ebb]"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  rows={6} 
                  defaultValue="Apprenez les meilleures pratiques pour gérer et réduire les déchets plastiques dans les environnements marins. Cette formation complète couvre la détection, la collecte, le tri et le recyclage des plastiques marins."
                  className="border-[#0d6ebb]/30 focus:border-[#0d6ebb]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="objectives">Objectifs Pédagogiques</Label>
                <Textarea 
                  id="objectives" 
                  rows={4} 
                  defaultValue="- Identifier les différents types de pollution plastique marine&#10;- Maîtriser les techniques de collecte et tri des déchets&#10;- Comprendre les impacts environnementaux&#10;- Appliquer les solutions de recyclage innovantes"
                  className="border-[#0d6ebb]/30 focus:border-[#0d6ebb]"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-[#0d6ebb]/20">
            <CardHeader>
              <CardTitle className="text-[#0d6ebb]">Image et Médias</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="thumbnail">Image de Couverture (URL)</Label>
                <Input 
                  id="thumbnail" 
                  placeholder="https://example.com/image.jpg"
                  className="border-[#0d6ebb]/30 focus:border-[#0d6ebb]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="video-intro">Vidéo d'Introduction (URL)</Label>
                <Input 
                  id="video-intro" 
                  placeholder="https://example.com/video.mp4"
                  className="border-[#0d6ebb]/30 focus:border-[#0d6ebb]"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="content">
          <Card className="bg-white border-[#0d6ebb]/20">
            <CardHeader>
              <CardTitle className="text-[#0d6ebb]">Contenu de la Formation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-[#0d6ebb]/20 rounded-lg hover:border-[#0d6ebb]/40 transition-colors">
                <div>
                  <h4 className="font-medium text-gray-900">Leçon 1: Introduction à la Pollution Plastique</h4>
                  <p className="text-sm text-gray-500">Durée: 45 minutes • 3 vidéos, 2 documents</p>
                </div>
                <Button variant="outline" className="border-[#0d6ebb] text-[#0d6ebb] hover:bg-[#0d6ebb]/10">
                  Modifier
                </Button>
              </div>
              <div className="flex items-center justify-between p-4 border border-[#0d6ebb]/20 rounded-lg hover:border-[#0d6ebb]/40 transition-colors">
                <div>
                  <h4 className="font-medium text-gray-900">Leçon 2: Sources et Types de Déchets</h4>
                  <p className="text-sm text-gray-500">Durée: 1h 15m • 5 vidéos, 1 quiz</p>
                </div>
                <Button variant="outline" className="border-[#0d6ebb] text-[#0d6ebb] hover:bg-[#0d6ebb]/10">
                  Modifier
                </Button>
              </div>
              <Button className="w-full bg-[#0d6ebb] hover:bg-[#0d6ebb]/90">
                + Ajouter une Leçon
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card className="bg-white border-[#0d6ebb]/20">
            <CardHeader>
              <CardTitle className="text-[#0d6ebb]">Paramètres de la Formation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="visibility">Visibilité</Label>
                <select
                  id="visibility"
                  className="w-full px-3 py-2 border border-[#0d6ebb]/30 bg-background rounded-md text-sm hover:border-[#0d6ebb] focus:outline-none focus:ring-2 focus:ring-[#0d6ebb]/20"
                >
                  <option value="public">Public - Visible par tous</option>
                  <option value="private">Privé - Accès restreint</option>
                  <option value="unlisted">Non répertorié - Accessible par lien uniquement</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">Statut de Publication</Label>
                <select
                  id="status"
                  className="w-full px-3 py-2 border border-[#0d6ebb]/30 bg-background rounded-md text-sm hover:border-[#0d6ebb] focus:outline-none focus:ring-2 focus:ring-[#0d6ebb]/20"
                >
                  <option value="published">Publié</option>
                  <option value="draft">Brouillon</option>
                  <option value="archived">Archivé</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="certificate">Certificat</Label>
                <select
                  id="certificate"
                  className="w-full px-3 py-2 border border-[#0d6ebb]/30 bg-background rounded-md text-sm hover:border-[#0d6ebb] focus:outline-none focus:ring-2 focus:ring-[#0d6ebb]/20"
                >
                  <option value="enabled">Délivrer un certificat à la fin</option>
                  <option value="disabled">Aucun certificat</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="passing-score">Score Minimum de Réussite (%)</Label>
                <Input 
                  id="passing-score" 
                  type="number" 
                  defaultValue="70"
                  min="0"
                  max="100"
                  className="border-[#0d6ebb]/30 focus:border-[#0d6ebb]"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}