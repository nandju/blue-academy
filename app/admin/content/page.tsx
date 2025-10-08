"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Search,
  Upload,
  MoreVertical,
  Download,
  Eye,
  Link2,
  Trash2,
  FileVideo,
  FileText,
  ImageIcon,
} from "lucide-react"

const mediaFiles = [
  {
    id: 1,
    name: "pollution-plastique-oceanique.mp4",
    type: "Vidéo",
    size: "125 MB",
    uploadDate: "2024-01-15",
    assignedTo: "Gestion des Déchets Plastiques",
    url: "https://cdn.example.com/videos/pollution-plastique.mp4",
  },
  {
    id: 2,
    name: "guide-economie-circulaire.pdf",
    type: "PDF",
    size: "5.2 MB",
    uploadDate: "2024-01-14",
    assignedTo: "Économie Circulaire et Plastique",
    url: "https://cdn.example.com/docs/economie-circulaire.pdf",
  },
  {
    id: 3,
    name: "ecosysteme-marin-thumbnail.jpg",
    type: "Image",
    size: "850 KB",
    uploadDate: "2024-01-13",
    assignedTo: "Protection des Écosystèmes Marins",
    url: "https://cdn.example.com/images/ecosysteme.jpg",
  },
  {
    id: 4,
    name: "recyclage-plastique-fondamentaux.mp4",
    type: "Vidéo",
    size: "98 MB",
    uploadDate: "2024-01-12",
    assignedTo: "Non Assigné",
    url: "https://cdn.example.com/videos/recyclage-fondamentaux.mp4",
  },
]

export default function AdminContentPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const filteredFiles = mediaFiles.filter((file) => {
    const matchesSearch = file.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType =
      activeTab === "all" ||
      (activeTab === "videos" && file.type === "Vidéo") ||
      (activeTab === "documents" && file.type === "PDF") ||
      (activeTab === "images" && file.type === "Image")
    return matchesSearch && matchesType
  })

  const getFileIcon = (type: string) => {
    switch (type) {
      case "Vidéo":
        return <FileVideo className="h-5 w-5 text-[#0d6ebb]" />
      case "PDF":
        return <FileText className="h-5 w-5 text-red-600" />
      case "Image":
        return <ImageIcon className="h-5 w-5 text-[#0DBD9F]" />
      default:
        return <FileText className="h-5 w-5 text-gray-600" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Vidéo":
        return "bg-[#0d6ebb]/10 text-[#0d6ebb]"
      case "PDF":
        return "bg-red-100 text-red-800"
      case "Image":
        return "bg-[#0DBD9F]/10 text-[#0DBD9F]"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[#0d6ebb]">Bibliothèque de Contenu</h1>
          <p className="text-gray-600">Gestion centralisée des médias et affectations</p>
        </div>
        <Button className="bg-[#0d6ebb] hover:bg-[#0d6ebb]/90">
          <Upload className="h-4 w-4 mr-2" />
          Téléverser Média
        </Button>
      </div>

      {/* Search */}
      <Card className="bg-white border-[#0d6ebb]/20">
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0d6ebb]" />
            <Input
              placeholder="Rechercher des fichiers médias..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 border-[#0d6ebb]/30 focus:border-[#0d6ebb]"
            />
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="bg-white border border-[#0d6ebb]/20">
          <TabsTrigger value="all" className="data-[state=active]:bg-[#0d6ebb] data-[state=active]:text-white">
            Tous les Fichiers ({mediaFiles.length})
          </TabsTrigger>
          <TabsTrigger value="videos" className="data-[state=active]:bg-[#0d6ebb] data-[state=active]:text-white">
            Vidéos ({mediaFiles.filter((f) => f.type === "Vidéo").length})
          </TabsTrigger>
          <TabsTrigger value="documents" className="data-[state=active]:bg-[#0d6ebb] data-[state=active]:text-white">
            Documents ({mediaFiles.filter((f) => f.type === "PDF").length})
          </TabsTrigger>
          <TabsTrigger value="images" className="data-[state=active]:bg-[#0d6ebb] data-[state=active]:text-white">
            Images ({mediaFiles.filter((f) => f.type === "Image").length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredFiles.map((file) => (
              <Card key={file.id} className="bg-white hover:shadow-lg hover:border-[#0d6ebb]/40 transition-all border-[#0d6ebb]/10">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        {getFileIcon(file.type)}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-gray-900 truncate">{file.name}</h3>
                          <p className="text-sm text-gray-500">{file.size}</p>
                        </div>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="hover:bg-[#0d6ebb]/10">
                            <MoreVertical className="h-4 w-4 text-[#0d6ebb]" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="h-4 w-4 mr-2" />
                            Aperçu
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Download className="h-4 w-4 mr-2" />
                            Télécharger
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Link2 className="h-4 w-4 mr-2" />
                            Copier URL Signée
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Link2 className="h-4 w-4 mr-2" />
                            Assigner à Formation
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Supprimer
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    <div className="flex items-center gap-2">
                      <Badge className={getTypeColor(file.type)}>{file.type}</Badge>
                      <span className="text-xs text-gray-500">{file.uploadDate}</span>
                    </div>

                    <div className="pt-2 border-t border-[#0d6ebb]/10">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Assigné à:</span>{" "}
                        <span className={file.assignedTo === "Non Assigné" ? "text-orange-600" : "text-[#0d6ebb]"}>
                          {file.assignedTo}
                        </span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredFiles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">Aucun fichier média trouvé.</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}