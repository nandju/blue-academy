"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Save, Download, Upload } from "lucide-react"

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[#0d6ebb]">Paramètres</h1>
          <p className="text-gray-600">Configurer les paramètres globaux du système et les intégrations</p>
        </div>
        <Button className="bg-[#0d6ebb] hover:bg-[#0d6ebb]/90">
          <Save className="h-4 w-4 mr-2" />
          Enregistrer
        </Button>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="bg-white border border-[#0d6ebb]/20">
          <TabsTrigger value="general" className="data-[state=active]:bg-[#0d6ebb] data-[state=active]:text-white">
            Général
          </TabsTrigger>
          <TabsTrigger value="email" className="data-[state=active]:bg-[#0d6ebb] data-[state=active]:text-white">
            Email
          </TabsTrigger>
          <TabsTrigger value="integrations" className="data-[state=active]:bg-[#0d6ebb] data-[state=active]:text-white">
            Intégrations
          </TabsTrigger>
          <TabsTrigger value="backup" className="data-[state=active]:bg-[#0d6ebb] data-[state=active]:text-white">
            Sauvegarde
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card className="bg-white border-[#0d6ebb]/20">
            <CardHeader>
              <CardTitle className="text-[#0d6ebb]">Paramètres de la Plateforme</CardTitle>
              <CardDescription>Configurer les informations de base de la plateforme</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="platform-name">Nom de la Plateforme</Label>
                <Input 
                  id="platform-name" 
                  defaultValue="Blue Academy" 
                  className="border-[#0d6ebb]/30 focus:border-[#0d6ebb]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="platform-description">Description</Label>
                <Textarea 
                  id="platform-description" 
                  rows={3} 
                  defaultValue="Plateforme de formation environnementale pour la lutte contre la pollution plastique"
                  className="border-[#0d6ebb]/30 focus:border-[#0d6ebb]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="support-email">Email de Support</Label>
                <Input 
                  id="support-email" 
                  type="email" 
                  defaultValue="support@blueacademy.org"
                  className="border-[#0d6ebb]/30 focus:border-[#0d6ebb]"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-[#0d6ebb]/20">
            <CardHeader>
              <CardTitle className="text-[#0d6ebb]">Paramètres des Formations</CardTitle>
              <CardDescription>Configurations par défaut des formations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-[#0d6ebb]/5">
                <div className="space-y-0.5">
                  <Label>Publication automatique</Label>
                  <p className="text-sm text-gray-500">Publier automatiquement après création</p>
                </div>
                <Switch className="data-[state=checked]:bg-[#0d6ebb]" />
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-[#0d6ebb]/5">
                <div className="space-y-0.5">
                  <Label>Quiz obligatoire</Label>
                  <p className="text-sm text-gray-500">Les apprenants doivent réussir le quiz pour obtenir le certificat</p>
                </div>
                <Switch defaultChecked className="data-[state=checked]:bg-[#0d6ebb]" />
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-[#0d6ebb]/5">
                <div className="space-y-0.5">
                  <Label>Activer les évaluations</Label>
                  <p className="text-sm text-gray-500">Permettre aux apprenants d'évaluer les formations</p>
                </div>
                <Switch defaultChecked className="data-[state=checked]:bg-[#0d6ebb]" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="email">
          <Card className="bg-white border-[#0d6ebb]/20">
            <CardHeader>
              <CardTitle className="text-[#0d6ebb]">Configuration Email</CardTitle>
              <CardDescription>Configurer les notifications email et les modèles</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="smtp-host">Hôte SMTP</Label>
                <Input 
                  id="smtp-host" 
                  placeholder="smtp.blueacademy.org"
                  className="border-[#0d6ebb]/30 focus:border-[#0d6ebb]"
                />
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="smtp-port">Port SMTP</Label>
                  <Input 
                    id="smtp-port" 
                    placeholder="587"
                    className="border-[#0d6ebb]/30 focus:border-[#0d6ebb]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="smtp-user">Utilisateur SMTP</Label>
                  <Input 
                    id="smtp-user" 
                    placeholder="noreply@blueacademy.org"
                    className="border-[#0d6ebb]/30 focus:border-[#0d6ebb]"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations">
          <Card className="bg-white border-[#0d6ebb]/20">
            <CardHeader>
              <CardTitle className="text-[#0d6ebb]">Intégrations Tierces</CardTitle>
              <CardDescription>Connecter des services externes et APIs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-[#0d6ebb]/20 rounded-lg hover:border-[#0d6ebb]/40 transition-colors">
                <div>
                  <h4 className="font-medium text-gray-900">Passerelle de Paiement</h4>
                  <p className="text-sm text-gray-500">Intégration Stripe pour les paiements</p>
                </div>
                <Button variant="outline" className="border-[#0d6ebb] text-[#0d6ebb] hover:bg-[#0d6ebb]/10">
                  Configurer
                </Button>
              </div>
              <div className="flex items-center justify-between p-4 border border-[#0d6ebb]/20 rounded-lg hover:border-[#0d6ebb]/40 transition-colors">
                <div>
                  <h4 className="font-medium text-gray-900">Hébergement Vidéo</h4>
                  <p className="text-sm text-gray-500">Stockage cloud pour les vidéos de formation</p>
                </div>
                <Button variant="outline" className="border-[#0d6ebb] text-[#0d6ebb] hover:bg-[#0d6ebb]/10">
                  Configurer
                </Button>
              </div>
              <div className="flex items-center justify-between p-4 border border-[#0d6ebb]/20 rounded-lg hover:border-[#0d6ebb]/40 transition-colors">
                <div>
                  <h4 className="font-medium text-gray-900">Analytiques</h4>
                  <p className="text-sm text-gray-500">Intégration Google Analytics</p>
                </div>
                <Button variant="outline" className="border-[#0d6ebb] text-[#0d6ebb] hover:bg-[#0d6ebb]/10">
                  Configurer
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="backup">
          <Card className="bg-white border-[#0d6ebb]/20">
            <CardHeader>
              <CardTitle className="text-[#0d6ebb]">Sauvegarde & Restauration</CardTitle>
              <CardDescription>Gérer les sauvegardes système et la restauration des données</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-[#0d6ebb]/5">
                  <div className="space-y-0.5">
                    <Label>Sauvegardes Automatiques</Label>
                    <p className="text-sm text-gray-500">Sauvegardes automatiques quotidiennes à 2h00</p>
                  </div>
                  <Switch defaultChecked className="data-[state=checked]:bg-[#0d6ebb]" />
                </div>
              </div>

              <div className="flex gap-4">
                <Button className="flex-1 bg-[#0d6ebb] hover:bg-[#0d6ebb]/90">
                  <Download className="h-4 w-4 mr-2" />
                  Créer Sauvegarde
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent border-[#0d6ebb] text-[#0d6ebb] hover:bg-[#0d6ebb]/10">
                  <Upload className="h-4 w-4 mr-2" />
                  Restaurer
                </Button>
              </div>

              <div className="border-t border-[#0d6ebb]/20 pt-4">
                <h4 className="font-medium mb-2 text-[#0d6ebb]">Sauvegardes Récentes</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 border border-[#0d6ebb]/20 rounded-lg hover:border-[#0d6ebb]/40 transition-colors">
                    <div>
                      <p className="font-medium text-sm text-gray-900">sauvegarde-2024-01-15.zip</p>
                      <p className="text-xs text-gray-500">15 janvier 2024 à 2h00</p>
                    </div>
                    <Button variant="ghost" size="sm" className="hover:bg-[#0d6ebb]/10">
                      <Download className="h-4 w-4 text-[#0d6ebb]" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-[#0d6ebb]/20 rounded-lg hover:border-[#0d6ebb]/40 transition-colors">
                    <div>
                      <p className="font-medium text-sm text-gray-900">sauvegarde-2024-01-14.zip</p>
                      <p className="text-xs text-gray-500">14 janvier 2024 à 2h00</p>
                    </div>
                    <Button variant="ghost" size="sm" className="hover:bg-[#0d6ebb]/10">
                      <Download className="h-4 w-4 text-[#0d6ebb]" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}