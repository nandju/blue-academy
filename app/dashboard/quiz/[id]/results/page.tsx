"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Trophy, Download, CheckCircle, XCircle, RotateCcw, Home, Share2, Calendar, Target, Award } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useEffect, useState, use } from "react"

const quizData = {
  id: 1,
  title: "Évaluation - Introduction au Code de l’Environnement",
  course: "Introduction au Code de l’Environnement",
  instructor: "ONG BLUE CI",
  duration: 30, // minutes
  totalQuestions: 10,
  passingScore: 70,
  description:
    "Testez vos connaissances de base sur le Code de l’Environnement, ses principes et son application dans la lutte contre la pollution plastique.",
}

const questions = [
  {
    id: 1,
    question: "Quel est l’objectif principal du Code de l’Environnement en Côte d’Ivoire ?",
    options: [
      "Encourager uniquement le développement économique",
      "Assurer la protection de l’environnement et un développement durable",
      "Limiter l’accès aux ressources naturelles",
      "Remplacer les lois internationales de protection de l’environnement",
    ],
    correctAnswer: 1,
    explanation:
      "Le Code de l’Environnement vise à protéger l’environnement tout en garantissant un développement durable et équilibré.",
  },
  {
    id: 2,
    question: "Quelle est la principale source de pollution plastique dans les milieux urbains ?",
    options: [
      "Les déchets ménagers mal gérés",
      "Les émissions de gaz industriels",
      "La déforestation",
      "Les déchets agricoles",
    ],
    correctAnswer: 0,
    explanation:
      "Les déchets ménagers, notamment les plastiques à usage unique, sont une des principales sources de pollution dans les villes.",
  },
  {
    id: 3,
    question: "Quel principe environnemental repose sur l’idée que celui qui pollue doit payer ?",
    options: [
      "Principe de prévention",
      "Principe de participation",
      "Principe du pollueur-payeur",
      "Principe de précaution",
    ],
    correctAnswer: 2,
    explanation:
      "Le principe du pollueur-payeur impose que les acteurs responsables d’une pollution prennent en charge les coûts de réparation et de prévention.",
  },
  {
    id: 4,
    question: "Parmi ces actions, laquelle contribue directement à la lutte contre la pollution plastique ?",
    options: [
      "Utiliser des sacs plastiques réutilisables",
      "Augmenter la production de plastique",
      "Brûler les déchets plastiques en plein air",
      "Réduire les campagnes de sensibilisation",
    ],
    correctAnswer: 0,
    explanation:
      "L’utilisation de sacs réutilisables réduit la dépendance au plastique jetable et limite la pollution.",
  },
  {
    id: 5,
    question: "Quel est le rôle d’une ONG comme BLUE CI dans l’application du Code de l’Environnement ?",
    options: [
      "Assurer uniquement la sanction des pollueurs",
      "Sensibiliser, former et mobiliser les citoyens pour protéger l’environnement",
      "Rédiger les lois à la place du gouvernement",
      "Exporter les déchets plastiques vers d’autres pays",
    ],
    correctAnswer: 1,
    explanation:
      "Les ONG comme BLUE CI sensibilisent, forment et mobilisent les populations pour appuyer l’application du Code de l’Environnement et lutter contre la pollution plastique.",
  },
]


export default function QuizResultsPage({ params }: { params: Promise<{ id: string }> }) {

const resolvedParams = use(params)  // ← AJOUTEZ CETTE LIGNE
  
  // Par ceci :
const searchParams = useSearchParams()
const [score, setScore] = useState(0)
const [userAnswers, setUserAnswers] = useState<{[key : number] : number}>({})

useEffect(() => {
  const scoreParam = searchParams.get('score')
  const answersParam = searchParams.get('answers')
  
  if (scoreParam) {
    setScore(parseInt(scoreParam))
  }
  
  if (answersParam) {
    try {
      setUserAnswers(JSON.parse(answersParam))
    } catch (error) {
      console.error('Erreur lors du parsing des réponses:', error)
    }
  }
}, [searchParams])


  const isPassed = score >= quizData.passingScore
  const correctAnswers = Math.round((score / 100) * questions.length)
  const incorrectAnswers = questions.length - correctAnswers
  const completionDate = new Date().toLocaleDateString('fr-FR')
  const certificateId = `CERT-${quizData.course.replace(/\s+/g, "").toUpperCase()}-${Date.now()}`

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-[#0DBD9F]"
    if (score >= 70) return "text-[#0d6ebb]"
    if (score >= 50) return "text-orange-500"
    return "text-red-500"
  }

  const getFeedbackMessage = (score: number) => {
    if (score >= 90) return "Excellent travail ! Vous maîtrisez parfaitement les concepts."
    if (score >= 80) return "Très bon travail ! Vous avez une solide compréhension."
    if (score >= 70) return "Bon travail ! Vous avez réussi l'évaluation."
    if (score >= 50) return "Vous êtes sur la bonne voie, mais considérez réviser le matériel."
    return "Ne vous inquiétez pas ! Révisez le matériel de cours et réessayez."
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          {isPassed ? (
            <div className="h-16 w-16 bg-[#0DBD9F]/10 rounded-full flex items-center justify-center border-2 border-[#0DBD9F]">
              <Trophy className="h-8 w-8 text-[#0DBD9F]" />
            </div>
          ) : (
            <div className="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center border-2 border-red-300">
              <RotateCcw className="h-8 w-8 text-red-500" />
            </div>
          )}
        </div>
        <div>
          <h1 className="text-3xl font-bold text-[#0d6ebb]">Résultats du Quiz</h1>
          <p className="text-gray-600">{quizData.title}</p>
        </div>
      </div>

      {/* Score Overview */}
      <Card className="border-[#0d6ebb]/20">
        <CardContent className="p-8">
          <div className="text-center space-y-6">
            <div>
              <div className={`text-6xl font-bold ${getScoreColor(score)}`}>{score}%</div>
              <Badge 
                className={
                  isPassed 
                    ? "mt-2 bg-[#0DBD9F] text-white" 
                    : "mt-2 bg-red-500 text-white"
                }
              >
                {isPassed ? "RÉUSSI" : "ÉCHOUÉ"}
              </Badge>
            </div>

            <div className="max-w-md mx-auto">
              <Progress value={score} className="h-3" />
              <p className="text-sm text-gray-500 mt-2">Score de passage : {quizData.passingScore}%</p>
            </div>

            <p className="text-lg text-gray-600 max-w-md mx-auto">{getFeedbackMessage(score)}</p>

            {isPassed && (
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-[#0d6ebb] to-[#0DBD9F] hover:from-[#0DBD9F] hover:to-[#0d6ebb] text-white">
                  <Download className="h-4 w-4 mr-2" />
                  Télécharger le Certificat
                </Button>
                <Button variant="outline" size="lg" className="border-[#0DBD9F] text-[#0DBD9F] hover:bg-[#0DBD9F] hover:text-white">
                  <Share2 className="h-4 w-4 mr-2" />
                  Partager la Réussite
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Detailed Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-[#0d6ebb]/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">Questions Totales</CardTitle>
            <Target className="h-4 w-4 text-[#0DBD9F]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#0d6ebb]">{questions.length}</div>
          </CardContent>
        </Card>

        <Card className="border-[#0d6ebb]/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">Réponses Correctes</CardTitle>
            <CheckCircle className="h-4 w-4 text-[#0DBD9F]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#0DBD9F]">{correctAnswers}</div>
          </CardContent>
        </Card>

        <Card className="border-[#0d6ebb]/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">Réponses Incorrectes</CardTitle>
            <XCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-500">{incorrectAnswers}</div>
          </CardContent>
        </Card>

        <Card className="border-[#0d6ebb]/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">Date de Réalisation</CardTitle>
            <Calendar className="h-4 w-4 text-[#0DBD9F]" />
          </CardHeader>
          <CardContent>
            <div className="text-sm font-bold text-[#0d6ebb]">{completionDate}</div>
          </CardContent>
        </Card>
      </div>

      {/* Certificate Preview (if passed) */}
      {isPassed && (
        <Card className="border-[#0d6ebb]/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#0d6ebb]">
              <Award className="h-5 w-5 text-[#0DBD9F]" />
              Certificat de Réussite
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-br from-[#0d6ebb]/10 to-[#0DBD9F]/10 border-2 border-dashed border-[#0d6ebb]/30 rounded-lg p-8 text-center">
              <div className="space-y-4">
                <div className="h-12 w-12 bg-gradient-to-r from-[#0d6ebb] to-[#0DBD9F] rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0d6ebb]">Certificat de Réussite</h3>
                  <p className="text-gray-600">Ceci certifie que</p>
                  <p className="text-lg font-semibold text-[#0d6ebb]">Jean Dupont</p>
                  <p className="text-gray-600">a terminé avec succès</p>
                  <p className="text-lg font-semibold text-[#0d6ebb]">{quizData.course}</p>
                  <p className="text-sm text-gray-500 mt-4">ID du certificat : {certificateId}</p>
                </div>
                <Button className="bg-gradient-to-r from-[#0d6ebb] to-[#0DBD9F] hover:from-[#0DBD9F] hover:to-[#0d6ebb] text-white">
                  <Download className="h-4 w-4 mr-2" />
                  Télécharger le Certificat
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Question Review */}
      <Card className="border-[#0d6ebb]/20">
        <CardHeader>
          <CardTitle className="text-[#0d6ebb]">Révision des Questions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {questions.map((question, index) => {
            const userAnswer = userAnswers[question.id]
            const isCorrect = userAnswer === question.correctAnswer
            const wasAnswered = userAnswer !== undefined

            return (
              <div key={question.id} className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    {wasAnswered ? (
                      isCorrect ? (
                        <CheckCircle className="h-5 w-5 text-[#0DBD9F]" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500" />
                      )
                    ) : (
                      <div className="h-5 w-5 rounded-full border-2 border-gray-300" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-[#0d6ebb]">
                      Question {index + 1} : {question.question}
                    </h4>
                    <div className="mt-2 space-y-1">
                      {question.options.map((option, optionIndex) => (
                        <div
                          key={optionIndex}
                          className={`p-2 rounded text-sm ${
                            optionIndex === question.correctAnswer
                              ? "bg-[#0DBD9F]/10 border border-[#0DBD9F]/30 text-[#0DBD9F]"
                              : optionIndex === userAnswer && !isCorrect
                                ? "bg-red-50 border border-red-200 text-red-700"
                                : "bg-gray-50 text-gray-700"
                          }`}
                        >
                          <span className="font-medium">{String.fromCharCode(65 + optionIndex)}.</span> {option}
                          {optionIndex === question.correctAnswer && (
                            <Badge className="ml-2 text-xs bg-[#0DBD9F]/10 text-[#0DBD9F] border-[#0DBD9F]/20">
                              Correct
                            </Badge>
                          )}
                          {optionIndex === userAnswer && !isCorrect && (
                            <Badge className="ml-2 text-xs bg-red-100 text-red-700 border-red-200">
                              Votre Réponse
                            </Badge>
                          )}
                        </div>
                      ))}
                    </div>
                    {!wasAnswered && <p className="text-sm text-gray-500 mt-2">Aucune réponse fournie</p>}
                    <div className="mt-3 p-3 bg-[#0d6ebb]/10 rounded-lg border border-[#0d6ebb]/20">
                      <p className="text-sm text-[#0d6ebb]">
                        <strong>Explication :</strong> {question.explanation}
                      </p>
                    </div>
                  </div>
                </div>
                {index < questions.length - 1 && <div className="border-t border-gray-200 my-4" />}
              </div>
            )
          })}
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button variant="outline" className="border-[#0d6ebb]/30 text-[#0d6ebb] hover:bg-[#0d6ebb] hover:text-white" asChild>
          <Link href="/dashboard">
            <Home className="h-4 w-4 mr-2" />
            Retour au Tableau de Bord
          </Link>
        </Button>
        <Button variant="outline" className="border-[#0DBD9F]/30 text-[#0DBD9F] hover:bg-[#0DBD9F] hover:text-white" asChild>
          <Link href={`/dashboard/course/${resolvedParams.id}`}>Retourner au Cours</Link>
        </Button>
        {!isPassed && (
          <Button className="bg-gradient-to-r from-[#0d6ebb] to-[#0DBD9F] hover:from-[#0DBD9F] hover:to-[#0d6ebb] text-white" asChild>
            <Link href={`/dashboard/quiz/${resolvedParams.id}`}>
              <RotateCcw className="h-4 w-4 mr-2" />
              Refaire le Quiz
            </Link>
          </Button>
        )}
      </div>
    </div>
  )
}