"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  FileText,
  CheckCircle,
  Award,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Loader2,
} from "lucide-react"

const courseData = {
  id: 1,
  title: "Introduction au Code de l'Environnement",
  instructor: "Dr. Awa Konaté",
  totalLessons: 12,
  completedLessons: 7,
  progress: 58,
  difficulty: "Débutant → Intermédiaire",
}

const lessons = [
  { id: 1, title: "Introduction au Code de l'Environnement", duration: "12:30", completed: true, type: "video", url: "/assets/videos/movie.mp4" },
  { id: 2, title: "Historique et portée légale du Code", duration: "18:20", completed: true, type: "video", url: "/assets/videos/movie.mp4" },
  { id: 3, title: "Principes clés : prévention, précaution, pollueur-payeur", duration: "16:45", completed: true, type: "video", url: "/assets/videos/movie.mp4" },
  { id: 4, title: "Droits et obligations des citoyens et des organisations", duration: "20:00", completed: true, type: "video", url: "/assets/videos/movie.mp4" },
  { id: 5, title: "Sources et impacts de la pollution plastique", duration: "14:50", completed: true, type: "video", url: "/assets/videos/movie.mp4" },
  { id: 6, title: "Bonnes pratiques : réduction, réutilisation, recyclage", duration: "22:10", completed: true, type: "video", url: "/assets/videos/movie.mp4" },
  { id: 7, title: "Organisation d'actions de terrain (nettoyages, campagnes)", duration: "19:40", completed: true, type: "video", url: "/assets/videos/movie.mp4" },
  { id: 8, title: "Guide pratique — Procédures & modèles d'action", completed: false, type: "pdf", url: "/assets/documents/CODE-DE-LENVIRONNEMENT-COTE-DIVOIRE-2023.pdf" },
  { id: 9, title: "Sensibilisation et communication communautaire", duration: "17:25", completed: false, type: "video", url: "/assets/videos/movie.mp4" },
  { id: 10, title: "Coordination avec autorités et partenaires locaux", duration: "15:30", completed: false, type: "video", url: "/assets/videos/movie.mp4" },
  { id: 11, title: "Directives du projet pratique final (atelier terrain)", completed: false, type: "pdf", url: "/assets/documents/CODE-DE-LENVIRONNEMENT-COTE-DIVOIRE-2023.pdf" },
  { id: 12, title: "Quiz d'évaluation finale", duration: "30:00", completed: false, type: "quiz" },
];

export default function CoursePage() {
  const [activeTab, setActiveTab] = useState("content")
  const [currentLessonId, setCurrentLessonId] = useState(1)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [pdfScale, setPdfScale] = useState(1)
  const [pdfPage, setPdfPage] = useState(1)
  const [totalPages, setTotalPages] = useState(10)
  const [notes, setNotes] = useState("")

  const videoRef = useRef<HTMLVideoElement>(null)
  const currentLesson = lessons.find(lesson => lesson.id === currentLessonId) || lessons[0]
  
  // Calcul dynamique de la progression
  const completedLessons = lessons.filter(lesson => lesson.completed).length
  const progress = Math.round((completedLessons / courseData.totalLessons) * 100)

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current
      const updateTime = () => setCurrentTime(video.currentTime)
      const updateDuration = () => setDuration(video.duration)
      
      video.addEventListener('timeupdate', updateTime)
      video.addEventListener('loadedmetadata', updateDuration)
      
      return () => {
        video.removeEventListener('timeupdate', updateTime)
        video.removeEventListener('loadedmetadata', updateDuration)
      }
    }
  }, [currentLessonId])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVolumeChange = (newVolume : number) => {
    if (videoRef.current) {
      videoRef.current.volume = newVolume
      setVolume(newVolume)
      setIsMuted(newVolume === 0)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      const newMuted = !isMuted
      videoRef.current.muted = newMuted
      setIsMuted(newMuted)
    }
  }

  const handleSeek = (percentage : number) => {
    if (videoRef.current && duration) {
      const newTime = (percentage / 100) * duration
      videoRef.current.currentTime = newTime
      setCurrentTime(newTime)
    }
  }

  const toggleFullscreen = () => {
    if (videoRef.current?.requestFullscreen) {
      videoRef.current.requestFullscreen()
    }
  }

  const formatTime = (time : number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const navigateLesson = (direction : 'next' | 'prev') => {
    const currentIndex = lessons.findIndex(lesson => lesson.id === currentLessonId)
    let newIndex = direction === 'next' 
      ? Math.min(currentIndex + 1, lessons.length - 1)
      : Math.max(currentIndex - 1, 0)
    
    setCurrentLessonId(lessons[newIndex].id)
    setIsPlaying(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <Button variant="ghost" size="sm" className="text-[#0d6ebb] hover:bg-[#0d6ebb]/10 w-fit">
            <ChevronLeft className="h-4 w-4 mr-2" />
            Retour aux Cours
          </Button>
          <Separator orientation="vertical" className="hidden md:block h-6 bg-gray-300" />
          <div className="flex-1">
            <h1 className="text-xl md:text-2xl font-bold text-[#0d6ebb]">{courseData.title}</h1>
            <p className="text-gray-600">par {courseData.instructor}</p>
          </div>
          <Badge className="bg-[#0d6ebb]/10 text-[#0d6ebb] border-[#0d6ebb]/20 w-fit">{courseData.difficulty}</Badge>
        </div>

        {/* Progress */}
        <Card className="border-[#0d6ebb]/20">
          <CardContent className="p-4 md:p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
              <div>
                <h3 className="font-semibold text-[#0d6ebb]">Progression du Cours</h3>
                <p className="text-sm text-gray-600">
                  {completedLessons} sur {courseData.totalLessons} leçons terminées
                </p>
              </div>
              <div className="text-right md:text-center">
                <div className="text-2xl font-bold text-[#0d6ebb]">{progress}%</div>
                <p className="text-sm text-gray-500">Terminé</p>
              </div>
            </div>
            <Progress value={progress} className="h-2" />
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            <Card className="border-[#0d6ebb]/20">
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="flex items-center gap-2 text-[#0d6ebb] text-lg md:text-xl">
                      {currentLesson.type === 'video' && <Play className="h-5 w-5 text-[#0DBD9F]" />}
                      {currentLesson.type === 'pdf' && <FileText className="h-5 w-5 text-[#0DBD9F]" />}
                      {currentLesson.type === 'quiz' && <Award className="h-5 w-5 text-[#0DBD9F]" />}
                      <span className="break-words">{currentLesson.title}</span>
                    </CardTitle>
                    <p className="text-sm text-gray-600 mt-1">
                      Leçon {currentLesson.id} sur {courseData.totalLessons}
                    </p>
                  </div>
                  <Badge
                    className={
                      currentLesson.type === "video"
                        ? "bg-[#0d6ebb] text-white"
                        : currentLesson.type === "pdf"
                          ? "bg-[#0DBD9F]/10 text-[#0DBD9F] border-[#0DBD9F]/20"
                          : "bg-orange-100 text-orange-700 border-orange-200"
                    }
                  >
                    {currentLesson.type.toUpperCase()}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Tabs */}
                  <div className="flex flex-wrap gap-1 bg-gray-100 p-1 rounded-lg w-full md:w-fit">
                    <button
                      onClick={() => setActiveTab("content")}
                      className={`flex-1 md:flex-none px-3 md:px-4 py-2 text-sm rounded-md transition-colors ${
                        activeTab === "content" ? "bg-[#0d6ebb] text-white shadow-sm" : "text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      Contenu
                    </button>
                    <button
                      onClick={() => setActiveTab("notes")}
                      className={`flex-1 md:flex-none px-3 md:px-4 py-2 text-sm rounded-md transition-colors ${
                        activeTab === "notes" ? "bg-[#0d6ebb] text-white shadow-sm" : "text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      Notes
                    </button>
                  </div>

                  {activeTab === "content" && (
                    <div className="space-y-4">
                      {currentLesson.type === "video" ? (
                        <div className="space-y-4">
                          <div className="relative bg-black rounded-lg overflow-hidden aspect-video w-full">
                            <video
                              ref={videoRef}
                              src={currentLesson.url}
                              className="w-full h-full object-contain"
                              onPlay={() => setIsPlaying(true)}
                              onPause={() => setIsPlaying(false)}
                              onClick={togglePlay}
                              controlsList="nodownload"
                              onContextMenu={(e) => e.preventDefault()}
                            />

                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 md:p-4">
                              <div className="space-y-2 md:space-y-3">
                                <div 
                                  className="w-full bg-white/30 h-1 md:h-2 rounded-full cursor-pointer"
                                  onClick={(e) => {
                                    const rect = e.currentTarget.getBoundingClientRect()
                                    const percentage = ((e.clientX - rect.left) / rect.width) * 100
                                    handleSeek(percentage)
                                  }}
                                >
                                  <div 
                                    className="bg-[#0DBD9F] h-full rounded-full transition-all"
                                    style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                                  />
                                </div>

                                <div className="flex items-center justify-between gap-2 md:gap-4">
                                  <div className="flex items-center gap-2 md:gap-3">
                                    <Button
                                      size="sm"
                                      variant="ghost"
                                      className="text-white hover:bg-white/20 p-1 md:p-2"
                                      onClick={togglePlay}
                                    >
                                      {isPlaying ? <Pause className="h-3 w-3 md:h-4 md:w-4" /> : <Play className="h-3 w-3 md:h-4 md:w-4" />}
                                    </Button>

                                    <div className="flex items-center gap-1 md:gap-2">
                                      <Button
                                        size="sm"
                                        variant="ghost"
                                        className="text-white hover:bg-white/20 p-1 md:p-2"
                                        onClick={toggleMute}
                                      >
                                        {isMuted ? <VolumeX className="h-3 w-3 md:h-4 md:w-4" /> : <Volume2 className="h-3 w-3 md:h-4 md:w-4" />}
                                      </Button>
                                      
                                      <input
                                        type="range"
                                        min="0"
                                        max="1"
                                        step="0.1"
                                        value={isMuted ? 0 : volume}
                                        onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                                        className="w-12 md:w-16 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer"
                                      />
                                    </div>
                                  </div>

                                  <div className="flex items-center gap-2 md:gap-4">
                                    <span className="text-white text-xs md:text-sm font-mono">
                                      {formatTime(currentTime)} / {formatTime(duration)}
                                    </span>

                                    <Button
                                      size="sm"
                                      variant="ghost"
                                      className="text-white hover:bg-white/20 p-1 md:p-2"
                                      onClick={toggleFullscreen}
                                    >
                                      <Maximize className="h-3 w-3 md:h-4 md:w-4" />
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {!duration && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <Loader2 className="h-8 w-8 text-white animate-spin" />
                              </div>
                            )}
                          </div>
                        </div>
                      ) : currentLesson.type === "pdf" ? (
                        <div className="space-y-4">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <h3 className="font-semibold text-[#0d6ebb]">{currentLesson.title}</h3>
                            <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setPdfScale(Math.max(0.5, pdfScale - 0.25))}
                                className="p-1 h-8"
                              >
                                <ZoomOut className="h-4 w-4" />
                              </Button>
                              <span className="text-sm px-2 min-w-[4rem] text-center">{Math.round(pdfScale * 100)}%</span>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setPdfScale(Math.min(2, pdfScale + 0.25))}
                                className="p-1 h-8"
                              >
                                <ZoomIn className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>

                          <div className="border border-gray-200 rounded-lg bg-white overflow-hidden">
                            <div className="min-h-[400px] md:min-h-[600px] flex items-center justify-center p-4">
                              <iframe
                                src={`${currentLesson.url}#page=${pdfPage}&zoom=${Math.round(pdfScale * 100)}`}
                                className="w-full h-[400px] md:h-[600px] border-none"
                                title={currentLesson.title}
                                onLoad={() => setTotalPages(10)}
                                style={{ transform: `scale(${pdfScale})`, transformOrigin: 'center top' }}
                              />
                            </div>
                            
                            <div className="flex items-center justify-between p-3 bg-gray-50 border-t">
                              <div className="flex items-center gap-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => setPdfPage(Math.max(1, pdfPage - 1))}
                                  disabled={pdfPage <= 1}
                                  className="border-[#0d6ebb] text-[#0d6ebb] hover:bg-[#0d6ebb] hover:text-white disabled:opacity-50"
                                >
                                  <ChevronLeft className="h-4 w-4" />
                                  <span className="hidden sm:inline ml-1">Précédent</span>
                                </Button>
                                
                                <div className="flex items-center gap-2">
                                  <span className="text-sm">Page</span>
                                  <input
                                    type="number"
                                    min="1"
                                    max={totalPages}
                                    value={pdfPage}
                                    onChange={(e) => setPdfPage(Math.max(1, Math.min(totalPages, parseInt(e.target.value) || 1)))}
                                    className="w-16 px-2 py-1 text-sm border rounded text-center"
                                  />
                                  <span className="text-sm">sur {totalPages}</span>
                                </div>
                                
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => setPdfPage(Math.min(totalPages, pdfPage + 1))}
                                  disabled={pdfPage >= totalPages}
                                  className="border-[#0d6ebb] text-[#0d6ebb] hover:bg-[#0d6ebb] hover:text-white disabled:opacity-50"
                                >
                                  <span className="hidden sm:inline mr-1">Suivant</span>
                                  <ChevronRight className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : currentLesson.type === "quiz" ? (
                        <div className="text-center space-y-4 py-8">
                          <Award className="h-16 w-16 mx-auto text-[#0DBD9F]" />
                          <div>
                            <h3 className="text-xl font-semibold text-[#0d6ebb]">Quiz d'Évaluation du Cours</h3>
                            <p className="text-gray-600">Testez vos connaissances avec notre quiz complet</p>
                          </div>
                          <a href="/dashboard/quiz/01" className="inline-block">
                            <Button size="lg" className="bg-gradient-to-r from-[#0d6ebb] to-[#0DBD9F] hover:from-[#0DBD9F] hover:to-[#0d6ebb] text-white">
                              Commencer le Quiz
                            </Button>
                          </a>
                        </div>
                      ) : null}
                    </div>
                  )}

                  {activeTab === "notes" && (
                    <div className="space-y-4">
                      <h3 className="font-semibold text-[#0d6ebb]">Mes Notes</h3>
                      <div className="border border-gray-200 rounded-lg p-4 min-h-[250px] md:min-h-[300px]">
                        <textarea
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder="Prenez des notes pendant l'apprentissage..."
                          className="w-full h-full min-h-[200px] md:min-h-[250px] resize-none border-none outline-none bg-transparent text-gray-700 placeholder-gray-400"
                        />
                      </div>
                      <div className="flex justify-end">
                        <Button variant="outline" className="border-[#0d6ebb] text-[#0d6ebb] hover:bg-[#0d6ebb] hover:text-white">
                          Sauvegarder les Notes
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="border-[#0d6ebb]/20">
              <CardContent className="p-0">
                <div className="space-y-1 max-h-[500px] overflow-y-auto">
                  {lessons.map((lesson) => (
                    <div
                      key={lesson.id}
                      onClick={() => setCurrentLessonId(lesson.id)}
                      className={`flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer border-l-2 transition-colors ${
                        lesson.id === currentLessonId ? "border-[#0DBD9F] bg-[#0DBD9F]/5" : "border-transparent"
                      }`}
                    >
                      <div className="flex-shrink-0">
                        {lesson.completed ? (
                          <CheckCircle className="h-4 w-4 text-[#0DBD9F]" />
                        ) : lesson.type === "video" ? (
                          <Play className="h-4 w-4 text-gray-400" />
                        ) : lesson.type === "pdf" ? (
                          <FileText className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Award className="h-4 w-4 text-gray-400" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p
                          className={`text-sm font-medium line-clamp-2 ${
                            lesson.id === currentLessonId ? "text-[#0d6ebb]" : "text-gray-700"
                          }`}
                        >
                          {lesson.title}
                        </p>
                        {lesson.duration && (
                          <p className="text-xs text-gray-500">{lesson.duration}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-2">
              <Button 
                variant="outline" 
                className="flex-1 border-[#0d6ebb]/30 text-[#0d6ebb] hover:bg-[#0d6ebb] hover:text-white disabled:opacity-50" 
                size="sm"
                onClick={() => navigateLesson('prev')}
                disabled={lessons.findIndex(l => l.id === currentLessonId) === 0}
              >
                <ChevronLeft className="h-4 w-4 mr-1 md:mr-2" />
                <span className="hidden sm:inline">Précédent</span>
              </Button>
              <Button 
                className="flex-1 bg-gradient-to-r from-[#0d6ebb] to-[#0DBD9F] hover:from-[#0DBD9F] hover:to-[#0d6ebb] text-white disabled:opacity-50" 
                size="sm"
                onClick={() => navigateLesson('next')}
                disabled={lessons.findIndex(l => l.id === currentLessonId) === lessons.length - 1}
              >
                <span className="hidden sm:inline">Suivant</span>
                <ChevronRight className="h-4 w-4 ml-1 md:ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <Button 
              variant="outline" 
              className="border-[#0d6ebb]/30 text-[#0d6ebb] hover:bg-[#0d6ebb] hover:text-white disabled:opacity-50" 
              size="sm"
              onClick={() => navigateLesson('prev')}
              disabled={lessons.findIndex(l => l.id === currentLessonId) === 0}
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Précédent
            </Button>
            
            <div className="text-center">
              <div className="text-sm font-medium text-[#0d6ebb]">
                {currentLessonId} / {lessons.length}
              </div>
            </div>
            
            <Button 
              className="bg-gradient-to-r from-[#0d6ebb] to-[#0DBD9F] hover:from-[#0DBD9F] hover:to-[#0d6ebb] text-white disabled:opacity-50" 
              size="sm"
              onClick={() => navigateLesson('next')}
              disabled={lessons.findIndex(l => l.id === currentLessonId) === lessons.length - 1}
            >
              Suivant
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>

        <div className="lg:hidden h-20"></div>
      </div>
    </div>
  )
}