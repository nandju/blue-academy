"use client"

import { useState, useEffect, use } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Clock, ChevronLeft, ChevronRight, Flag, CheckCircle, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

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


export default function QuizPage({ params }: { params: Promise<{ id: string }> }) {  
  const router = useRouter()
  const resolvedParams = use(params) // Ajoutez cette ligne
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<{ [key: number]: number }>({})
  const [timeLeft, setTimeLeft] = useState(quizData.duration * 60)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showExitDialog, setShowExitDialog] = useState(false)
  const [showSubmitDialog, setShowSubmitDialog] = useState(false)

  // Timer effect
  useEffect(() => {
    if (timeLeft > 0 && !isSubmitted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0 && !isSubmitted) {
      handleSubmitQuiz()
    }
  }, [timeLeft, isSubmitted])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  const handleAnswerChange = (questionId: number, answerIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answerIndex,
    }))
  }

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmitQuiz = () => {
    setIsSubmitted(true)
    const score = calculateScore()
    router.push(`/dashboard/quiz/${resolvedParams.id}/results?score=${score}&answers=${JSON.stringify(answers)}`)
  }

  const calculateScore = () => {
    let correct = 0
    questions.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        correct++
      }
    })
    return Math.round((correct / questions.length) * 100)
  }

  const getAnsweredCount = () => {
    return Object.keys(answers).length
  }

  const isQuestionAnswered = (questionId: number) => {
    return answers.hasOwnProperty(questionId)
  }

  const currentQuestionData = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100
  const answeredCount = getAnsweredCount()

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Quiz Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-[#0d6ebb] hover:bg-[#0d6ebb]/10"
            onClick={() => setShowExitDialog(true)}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Quitter le Quiz
          </Button>
          <div className="w-px h-6 bg-gray-300" />
          <div>
            <h1 className="text-xl font-bold text-[#0d6ebb]">{quizData.title}</h1>
            <p className="text-sm text-gray-600">{quizData.course}</p>
          </div>
        </div>

        {/* Timer */}
        <Card className="p-3 border-[#0d6ebb]/20">
          <div className="flex items-center gap-2">
            <Clock className={`h-4 w-4 ${timeLeft < 300 ? "text-red-500" : "text-[#0DBD9F]"}`} />
            <span className={`font-mono text-sm ${timeLeft < 300 ? "text-red-500 font-semibold" : "text-[#0d6ebb]"}`}>
              {formatTime(timeLeft)}
            </span>
          </div>
        </Card>
      </div>

      {/* Progress Bar */}
      <Card className="border-[#0d6ebb]/20">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-[#0d6ebb]">
              Question {currentQuestion + 1} sur {questions.length}
            </span>
            <span className="text-sm text-gray-600">
              {answeredCount} sur {questions.length} répondues
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Question Area */}
        <div className="lg:col-span-3">
          <Card className="border-[#0d6ebb]/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg text-[#0d6ebb]">Question {currentQuestion + 1}</CardTitle>
                <Badge className={isQuestionAnswered(currentQuestionData.id) ? "bg-[#0DBD9F] text-white" : "bg-gray-100 text-gray-600"}>
                  {isQuestionAnswered(currentQuestionData.id) ? "Répondu" : "Non Répondu"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Question */}
              <div>
                <h3 className="text-lg font-medium mb-4 text-gray-900">{currentQuestionData.question}</h3>

                {/* Answer Options */}
                <RadioGroup
                  value={answers[currentQuestionData.id]?.toString() || ""}
                  onValueChange={(value) => handleAnswerChange(currentQuestionData.id, Number.parseInt(value))}
                >
                  {currentQuestionData.options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:bg-[#0d6ebb]/5 hover:border-[#0DBD9F]/30">
                      <RadioGroupItem value={index.toString()} id={`option-${index}`} className="border-[#0d6ebb] text-[#0d6ebb]" />
                      <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer text-gray-700">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between pt-4">
                <Button
                  variant="outline"
                  onClick={handlePreviousQuestion}
                  disabled={currentQuestion === 0}
                  className="border-[#0d6ebb]/30 text-[#0d6ebb] hover:bg-[#0d6ebb] hover:text-white"
                >
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Précédent
                </Button>

                <div className="flex gap-2">
                  {currentQuestion === questions.length - 1 ? (
                    <Button 
                      className="bg-gradient-to-r from-[#0d6ebb] to-[#0DBD9F] hover:from-[#0DBD9F] hover:to-[#0d6ebb] text-white"
                      onClick={() => setShowSubmitDialog(true)}
                    >
                      <Flag className="h-4 w-4 mr-2" />
                      Soumettre le Quiz
                    </Button>
                  ) : (
                    <Button 
                      onClick={handleNextQuestion}
                      className="bg-gradient-to-r from-[#0d6ebb] to-[#0DBD9F] hover:from-[#0DBD9F] hover:to-[#0d6ebb] text-white"
                    >
                      Suivant
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar - Question Navigator */}
        <div className="space-y-6">
          <Card className="border-[#0d6ebb]/20">
            <CardHeader>
              <CardTitle className="text-base text-[#0d6ebb]">Aperçu du Quiz</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Questions Totales</p>
                  <p className="font-semibold text-[#0d6ebb]">{questions.length}</p>
                </div>
                <div>
                  <p className="text-gray-500">Répondues</p>
                  <p className="font-semibold text-[#0d6ebb]">{answeredCount}</p>
                </div>
                <div>
                  <p className="text-gray-500">Temps Restant</p>
                  <p className={`font-semibold ${timeLeft < 300 ? "text-red-500" : "text-[#0d6ebb]"}`}>{formatTime(timeLeft)}</p>
                </div>
                <div>
                  <p className="text-gray-500">Score de Réussite</p>
                  <p className="font-semibold text-[#0d6ebb]">{quizData.passingScore}%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-[#0d6ebb]/20">
            <CardHeader>
              <CardTitle className="text-base text-[#0d6ebb]">Navigateur de Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-5 gap-2">
                {questions.map((question, index) => (
                  <Button
                    key={question.id}
                    variant={currentQuestion === index ? "default" : "outline"}
                    size="sm"
                    className={`h-8 w-8 p-0 ${
                      currentQuestion === index
                        ? "bg-[#0d6ebb] hover:bg-[#0d6ebb]/90 text-white"
                        : isQuestionAnswered(question.id)
                          ? "bg-[#0DBD9F]/10 border-[#0DBD9F]/30 text-[#0DBD9F] hover:bg-[#0DBD9F]/20"
                          : "border-gray-300 text-gray-600 hover:bg-gray-100"
                    }`}
                    onClick={() => setCurrentQuestion(index)}
                  >
                    {isQuestionAnswered(question.id) && currentQuestion !== index && (
                      <CheckCircle className="h-3 w-3" />
                    )}
                    {!isQuestionAnswered(question.id) && currentQuestion !== index && index + 1}
                    {currentQuestion === index && index + 1}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Warning for unanswered questions */}
          {answeredCount < questions.length && (
            <Card className="border-orange-200 bg-orange-50">
              <CardContent className="p-4">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-orange-600 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-orange-800">Quiz Incomplet</p>
                    <p className="text-orange-700">Vous avez {questions.length - answeredCount} questions non répondues.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Exit Dialog */}
      {showExitDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold text-[#0d6ebb] mb-2">Quitter le Quiz ?</h3>
            <p className="text-gray-600 mb-4">
              Êtes-vous sûr de vouloir quitter le quiz ? Votre progression sera perdue et vous devrez recommencer.
            </p>
            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={() => setShowExitDialog(false)}>
                Continuer le Quiz
              </Button>
              <Button className="bg-red-600 hover:bg-red-700 text-white" asChild>
                <Link href={`/dashboard/course/${resolvedParams.id}`}>Quitter le Quiz</Link>
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Submit Dialog */}
      {showSubmitDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold text-[#0d6ebb] mb-2">Soumettre le Quiz ?</h3>
            <p className="text-gray-600 mb-4">
              Vous avez répondu à {answeredCount} sur {questions.length} questions. Une fois soumis, vous ne pourrez plus modifier vos réponses.
            </p>
            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={() => setShowSubmitDialog(false)}>
                Revoir les Réponses
              </Button>
              <Button 
                className="bg-gradient-to-r from-[#0d6ebb] to-[#0DBD9F] hover:from-[#0DBD9F] hover:to-[#0d6ebb] text-white"
                onClick={handleSubmitQuiz}
              >
                Soumettre le Quiz
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}