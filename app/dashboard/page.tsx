import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Clock, Trophy, TrendingUp, PlayCircle, CheckCircle, Star, Users } from "lucide-react"
import Link from "next/link"

const availableCourses = [
  {
    id: 1,
    title: "Introduction au Code de l'Environnement",
    instructor: "Dr. Awa Konaté",
    duration: "6 heures",
    difficulty: "Débutant",
    rating: 4.7,
    students: 842,
    image: "/assets/images/illustrations/page-dashbaord/formateur.png", // océan / protection
    color: "from-[#0d6ebb] to-[#0DBD9F]",
  },
];

const inProgressCourses = [
  {
    id: 1,
    title: "Introduction au Code de l'Environnement",
    progress: 45,
    nextLesson: "Chapitre 2 : Droits et obligations environnementales",
    timeLeft: "3h 20m",
    image: "/assets/images/illustrations/page-dashbaord/formateur.png", // continuité du thème environnement
  },
];


export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[#0d6ebb]">Bon retour, Jean !</h1>
          <p className="text-gray-600">Continuez votre parcours d'apprentissage</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
        <Card className="border-[#0d6ebb]/20 hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">Cours Terminés</CardTitle>
            <CheckCircle className="h-4 w-4 text-[#0DBD9F]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#0d6ebb]">8</div>
            <p className="text-xs text-gray-500">+2 ce mois-ci</p>
          </CardContent>
        </Card>

        <Card className="border-[#0d6ebb]/20 hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">Certificats Obtenus</CardTitle>
            <Trophy className="h-4 w-4 text-[#0DBD9F]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#0d6ebb]">5</div>
            <p className="text-xs text-gray-500">+1 ce mois-ci</p>
          </CardContent>
        </Card>

        <Card className="border-[#0d6ebb]/20 hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">Score Moyen</CardTitle>
            <TrendingUp className="h-4 w-4 text-[#0DBD9F]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#0d6ebb]">92%</div>
            <p className="text-xs text-gray-500">+5% ce mois-ci</p>
          </CardContent>
        </Card>
      </div>

      {/* Continue Learning */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#0d6ebb]">Continuer l'apprentissage</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {inProgressCourses.map((course) => (
            <div key={course.id} className="group overflow-hidden border shadow-md rounded-lg border-[#0d6ebb]/20 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="relative">
                {/* Image de fond avec overlay */}
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Progression overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-[#0d6ebb]">Progression</span>
                        <span className="text-sm font-bold text-[#0d6ebb]">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2 bg-gray-200">
                        <div 
                          className="h-full bg-gradient-to-r from-[#0d6ebb] to-[#0DBD9F] rounded-full transition-all" 
                          style={{ width: `${course.progress}%` }}
                        />
                      </Progress>
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-[#0d6ebb] mb-2 group-hover:text-[#0DBD9F] transition-colors">
                    {course.title}
                  </h3>
                  
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <PlayCircle className="h-4 w-4 text-[#0DBD9F]" />
                      <span className="font-medium">Prochaine leçon:</span>
                    </div>
                    <p className="text-[#0d6ebb] ml-6">{course.nextLesson}</p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      {course.timeLeft} restant
                    </div>
                    <Button 
                      asChild 
                      className="bg-gradient-to-r from-[#0d6ebb] to-[#0DBD9F] hover:from-[#0DBD9F] hover:to-[#0d6ebb] text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Link href={`/dashboard/course/${course.id}`}>
                        <PlayCircle className="h-4 w-4 mr-2" />
                        Continuer
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </div>
          ))}
        </div>
      </div>

      {/* Available Courses */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[#0d6ebb]">Cours Disponibles</h2>
          <Button variant="outline" asChild className="border-[#0d6ebb] text-[#0d6ebb] hover:bg-[#0d6ebb] hover:text-white">
            <Link href="/dashboard/courses">Voir Tout</Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {availableCourses.map((course) => (
            <div key={course.id} className="group rounded-lg overflow-hidden border shadow-md hover:shadow-2xl transition-all duration-300 border-[#0d6ebb]/20 hover:border-[#0DBD9F]/50 hover:scale-105">
              <div className="relative">
                {/* Header avec image et gradient */}
                <div className="relative h-40 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${course.color}`} />
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover object-top mix-blend-soft-light opacity-80 group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Badge difficulté */}
                  <Badge className="absolute top-3 right-3 bg-white/95 text-[#0d6ebb] hover:bg-white shadow-md backdrop-blur-sm">
                    {course.difficulty}
                  </Badge>
                  
                  {/* Rating badge */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm rounded-full px-2 py-1 shadow-md">
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-[#0DBD9F] text-[#0DBD9F]" />
                      <span className="text-xs font-medium text-[#0d6ebb]">{course.rating}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 space-y-4">
                {/* Titre et instructeur */}
                <div className="space-y-2">
                  <h3 className="font-bold text-lg leading-tight text-[#0d6ebb] group-hover:text-[#0DBD9F] transition-colors line-clamp-3 min-h-[3.5rem]">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-medium">par {course.instructor}</p>
                </div>

                {/* Métadonnées du cours */}
                <div className="flex items-center justify-between text-xs text-gray-500 bg-gray-50 rounded-lg p-2">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3 text-[#0DBD9F]" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3 text-[#0DBD9F]" />
                    <span>{course.students}</span>
                  </div>
                </div>

                {/* Bouton d'action */}
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-[#0d6ebb] to-[#0DBD9F] hover:from-[#0DBD9F] hover:to-[#0d6ebb] text-white shadow-md hover:shadow-lg transition-all duration-300 group-hover:shadow-xl"
                >
                  <Link href={`/dashboard/course/${course.id}`}>
                    <PlayCircle className="h-4 w-4 mr-2" />
                    Commencer
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}