import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, BookOpen, Award, TrendingUp, AlertTriangle, Download, FileText, Clock, Waves, Recycle, Leaf } from "lucide-react"
import Link from "next/link"

const recentCourses = [
  {
    id: 1,
    title: "Gestion des Déchets Plastiques en Mer",
    instructor: "Dr. Marie Océane",
    students: 234,
    status: "Publié",
    lastUpdated: "2024-01-15",
  },
  {
    id: 2,
    title: "Économie Circulaire et Plastique",
    instructor: "Prof. Jean Recyclage",
    students: 189,
    status: "Publié",
    lastUpdated: "2024-01-14",
  },
  {
    id: 3,
    title: "Protection des Écosystèmes Marins",
    instructor: "Dr. Sophie Mer",
    students: 156,
    status: "Brouillon",
    lastUpdated: "2024-01-13",
  },
]

const suspiciousAttempts = [
  {
    id: 1,
    user: "Jean Dupont",
    quiz: "Quiz Pollution Océanique",
    reason: "Soumissions multiples rapides",
    time: "Il y a 2 heures",
    severity: "high",
  },
  {
    id: 2,
    user: "Marie Martin",
    quiz: "Quiz Recyclage Plastique",
    reason: "Modèle de réponses inhabituel",
    time: "Il y a 5 heures",
    severity: "medium",
  },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[#0d6ebb]">Tableau de bord</h1>
          <p className="text-gray-600">Bienvenue sur le panneau d'administration Blue Academy</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-[#0d6ebb] text-[#0d6ebb] hover:bg-[#0d6ebb]/10">
            <Download className="h-4 w-4 mr-2" />
            Exporter Données
          </Button>
          <Button className="bg-[#0d6ebb] hover:bg-[#0d6ebb]/90">
            <FileText className="h-4 w-4 mr-2" />
            Générer Rapport
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-white border-l-4 border-l-[#0d6ebb]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">Total Apprenants</CardTitle>
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
            <CardTitle className="text-sm font-medium text-gray-700">Formations Actives</CardTitle>
            <BookOpen className="h-4 w-4 text-[#0DBD9F]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">48</div>
            <p className="text-xs text-[#0DBD9F] flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3" />
              +3 nouvelles ce mois
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white border-l-4 border-l-[#0d6ebb]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">Certificats Délivrés</CardTitle>
            <Award className="h-4 w-4 text-[#0d6ebb]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">1,234</div>
            <p className="text-xs text-[#0DBD9F] flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3" />
              +89 cette semaine
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white border-l-4 border-l-[#0DBD9F]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">Taux de Réussite</CardTitle>
            <TrendingUp className="h-4 w-4 text-[#0DBD9F]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">78.5%</div>
            <p className="text-xs text-[#0DBD9F] flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3" />
              +2.3% ce mois
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Courses Widget */}
        <Card className="bg-white">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold text-[#0d6ebb]">Formations Récentes</CardTitle>
              <Button variant="ghost" size="sm" className="text-[#0d6ebb] hover:text-[#0d6ebb] hover:bg-[#0d6ebb]/10" asChild>
                <Link href="/admin/courses">Voir Tout</Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentCourses.map((course) => (
                <div key={course.id} className="flex items-center justify-between border-b pb-3 last:border-0">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{course.title}</h4>
                    <p className="text-sm text-gray-600">par {course.instructor}</p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {course.students} apprenants
                      </span>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {course.lastUpdated}
                      </span>
                    </div>
                  </div>
                  <Badge
                    variant={course.status === "Publié" ? "default" : "secondary"}
                    className={course.status === "Publié" ? "bg-[#0DBD9F] text-white" : ""}
                  >
                    {course.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Suspicious Attempts Alert */}
        <Card className="bg-white border-orange-200">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
                Tentatives Suspectes
              </CardTitle>
              <Badge variant="destructive">{suspiciousAttempts.length}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {suspiciousAttempts.map((attempt) => (
                <div key={attempt.id} className="border-b pb-3 last:border-0">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{attempt.user}</h4>
                      <p className="text-sm text-gray-600">{attempt.quiz}</p>
                      <p className="text-sm text-orange-600 mt-1">{attempt.reason}</p>
                      <span className="text-xs text-gray-500">{attempt.time}</span>
                    </div>
                    <Badge
                      variant={attempt.severity === "high" ? "destructive" : "secondary"}
                      className={attempt.severity === "medium" ? "bg-orange-100 text-orange-800" : ""}
                    >
                      {attempt.severity}
                    </Badge>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <Button size="sm" variant="outline" className="border-[#0d6ebb] text-[#0d6ebb] hover:bg-[#0d6ebb]/10">
                      Examiner
                    </Button>
                    <Button size="sm" variant="ghost">
                      Ignorer
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Access */}
      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-[#0d6ebb]">Accès Rapide</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Button variant="outline" className="h-auto flex-col items-start p-4 bg-transparent border-[#0d6ebb]/30 hover:bg-[#0d6ebb]/5" asChild>
              <Link href="/admin/courses/new">
                <Waves className="h-5 w-5 mb-2 text-[#0d6ebb]" />
                <span className="font-semibold text-gray-900">Créer Formation</span>
                <span className="text-xs text-gray-600">Ajouter un nouveau contenu</span>
              </Link>
            </Button>

            <Button variant="outline" className="h-auto flex-col items-start p-4 bg-transparent border-[#0DBD9F]/30 hover:bg-[#0DBD9F]/5" asChild>
              <Link href="/admin/certificates">
                <Award className="h-5 w-5 mb-2 text-[#0DBD9F]" />
                <span className="font-semibold text-gray-900">Gérer Certificats</span>
                <span className="text-xs text-gray-600">Émettre et révoquer</span>
              </Link>
            </Button>

            <Button variant="outline" className="h-auto flex-col items-start p-4 bg-transparent border-[#0d6ebb]/30 hover:bg-[#0d6ebb]/5" asChild>
              <Link href="/admin/analytics">
                <Recycle className="h-5 w-5 mb-2 text-[#0d6ebb]" />
                <span className="font-semibold text-gray-900">Impact Écologique</span>
                <span className="text-xs text-gray-600">Suivre les métriques</span>
              </Link>
            </Button>

            <Button variant="outline" className="h-auto flex-col items-start p-4 bg-transparent border-[#0DBD9F]/30 hover:bg-[#0DBD9F]/5">
              <Download className="h-5 w-5 mb-2 text-[#0DBD9F]" />
              <span className="font-semibold text-gray-900">Exporter Rapports</span>
              <span className="text-xs text-gray-600">Télécharger les données</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}