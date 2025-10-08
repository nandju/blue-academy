"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TrendingUp, Users, Award, AlertTriangle, Download, Waves, Recycle, Leaf } from "lucide-react"

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[#0d6ebb]">Tableau d'Analytiques</h1>
          <p className="text-gray-600">Métriques avancées et aperçu des performances</p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="30">
            <SelectTrigger className="w-40 border-[#0d6ebb]/30">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7">7 derniers jours</SelectItem>
              <SelectItem value="30">30 derniers jours</SelectItem>
              <SelectItem value="90">90 derniers jours</SelectItem>
              <SelectItem value="365">Dernière année</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-[#0d6ebb] hover:bg-[#0d6ebb]/90">
            <Download className="h-4 w-4 mr-2" />
            Exporter Rapport
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-white border-l-4 border-l-[#0DBD9F]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">Impact Plastique Évité</CardTitle>
            <Recycle className="h-4 w-4 text-[#0DBD9F]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">45,231 kg</div>
            <p className="text-xs text-[#0DBD9F] flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3" />
              +20.1% ce mois
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white border-l-4 border-l-[#0d6ebb]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">Apprenants Actifs</CardTitle>
            <Users className="h-4 w-4 text-[#0d6ebb]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">2,847</div>
            <p className="text-xs text-[#0DBD9F] flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3" />
              +12.5% ce mois
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white border-l-4 border-l-[#0DBD9F]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">Formations Complétées</CardTitle>
            <Award className="h-4 w-4 text-[#0DBD9F]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">1,234</div>
            <p className="text-xs text-[#0DBD9F] flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3" />
              +8.2% ce mois
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white border-l-4 border-l-orange-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">Indicateurs Suspects</CardTitle>
            <AlertTriangle className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">12</div>
            <p className="text-xs text-gray-600 mt-1">Nécessite investigation</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Placeholder */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-white border-t-4 border-t-[#0d6ebb]">
          <CardHeader>
            <CardTitle className="text-[#0d6ebb] flex items-center gap-2">
              <Users className="h-5 w-5" />
              Croissance des Apprenants
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center border-2 border-dashed border-[#0d6ebb]/30 rounded-lg bg-[#0d6ebb]/5">
              <p className="text-gray-500">Graphique : Croissance dans le temps</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-t-4 border-t-[#0DBD9F]">
          <CardHeader>
            <CardTitle className="text-[#0d6ebb] flex items-center gap-2">
              <Waves className="h-5 w-5 text-[#0DBD9F]" />
              Tendances d'Inscription
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center border-2 border-dashed border-[#0DBD9F]/30 rounded-lg bg-[#0DBD9F]/5">
              <p className="text-gray-500">Graphique : Inscriptions par catégorie</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-t-4 border-t-[#0d6ebb]">
          <CardHeader>
            <CardTitle className="text-[#0d6ebb] flex items-center gap-2">
              <Award className="h-5 w-5" />
              Taux de Réussite
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center border-2 border-dashed border-[#0d6ebb]/30 rounded-lg bg-[#0d6ebb]/5">
              <p className="text-gray-500">Graphique : Taux de complétion des cours</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-t-4 border-t-[#0DBD9F]">
          <CardHeader>
            <CardTitle className="text-[#0d6ebb] flex items-center gap-2">
              <Leaf className="h-5 w-5 text-[#0DBD9F]" />
              Impact Environnemental
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center border-2 border-dashed border-[#0DBD9F]/30 rounded-lg bg-[#0DBD9F]/5">
              <p className="text-gray-500">Graphique : Réduction plastique par formation</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}