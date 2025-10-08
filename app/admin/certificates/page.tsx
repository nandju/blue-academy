"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Plus, MoreVertical, Download, Eye, XCircle, CheckCircle, Award } from "lucide-react"

const certificates = [
  {
    id: "CERT-PM-001",
    user: "Jean Dupont",
    email: "jean@exemple.com",
    course: "Gestion des Déchets Plastiques",
    score: 95,
    issueDate: "2024-01-15",
    status: "Actif",
    verificationCode: "PM-2024-001-ABC",
  },
  {
    id: "CERT-OC-002",
    user: "Marie Martin",
    email: "marie@exemple.com",
    course: "Protection des Océans",
    score: 88,
    issueDate: "2024-01-14",
    status: "Actif",
    verificationCode: "OC-2024-002-XYZ",
  },
  {
    id: "CERT-EC-003",
    user: "Pierre Durand",
    email: "pierre@exemple.com",
    course: "Économie Circulaire",
    score: 92,
    issueDate: "2024-01-13",
    status: "Révoqué",
    verificationCode: "EC-2024-003-DEF",
  },
]

export default function AdminCertificatesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [verifyCode, setVerifyCode] = useState("")
  const [verifyResult, setVerifyResult] = useState<any>(null)

  const filteredCertificates = certificates.filter(
    (cert) =>
      cert.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleVerify = () => {
    const found = certificates.find((c) => c.verificationCode === verifyCode)
    setVerifyResult(found || { error: "Certificat introuvable" })
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[#0d6ebb]">Gestion des Certificats</h1>
          <p className="text-gray-600">Émettre, gérer et vérifier les certificats</p>
        </div>
        <div className="flex gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="border-[#0d6ebb] text-[#0d6ebb] hover:bg-[#0d6ebb]/10">
                <CheckCircle className="h-4 w-4 mr-2" />
                Vérifier Certificat
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-[#0d6ebb]">Vérifier un Certificat</DialogTitle>
                <DialogDescription>Entrez le code de vérification pour valider l'authenticité</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="verify-code">Code de Vérification</Label>
                  <Input
                    id="verify-code"
                    placeholder="ex: PM-2024-001-ABC"
                    value={verifyCode}
                    onChange={(e) => setVerifyCode(e.target.value)}
                    className="border-[#0d6ebb]/30"
                  />
                </div>
                {verifyResult && (
                  <div
                    className={`p-4 rounded-lg ${verifyResult.error ? "bg-red-50 border border-red-200" : "bg-green-50 border border-green-200"}`}
                  >
                    {verifyResult.error ? (
                      <div className="flex items-center gap-2 text-red-800">
                        <XCircle className="h-5 w-5" />
                        <span className="font-medium">{verifyResult.error}</span>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-green-800 mb-2">
                          <CheckCircle className="h-5 w-5" />
                          <span className="font-semibold">Certificat Valide</span>
                        </div>
                        <div className="text-sm text-gray-700">
                          <p>
                            <strong>Utilisateur:</strong> {verifyResult.user}
                          </p>
                          <p>
                            <strong>Formation:</strong> {verifyResult.course}
                          </p>
                          <p>
                            <strong>Score:</strong> {verifyResult.score}%
                          </p>
                          <p>
                            <strong>Émis le:</strong> {verifyResult.issueDate}
                          </p>
                          <p>
                            <strong>Statut:</strong>{" "}
                            <Badge
                              className={
                                verifyResult.status === "Actif"
                                  ? "bg-[#0DBD9F] text-white"
                                  : "bg-red-100 text-red-800"
                              }
                            >
                              {verifyResult.status}
                            </Badge>
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <DialogFooter>
                <Button onClick={handleVerify} className="bg-[#0d6ebb] hover:bg-[#0d6ebb]/90">
                  Vérifier
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-[#0d6ebb] hover:bg-[#0d6ebb]/90">
                <Plus className="h-4 w-4 mr-2" />
                Générer Certificat
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-[#0d6ebb]">Générer un Certificat Manuellement</DialogTitle>
                <DialogDescription>Créer un certificat pour un apprenant ayant complété une formation</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="user">Utilisateur</Label>
                  <Select>
                    <SelectTrigger className="border-[#0d6ebb]/30">
                      <SelectValue placeholder="Sélectionner un utilisateur" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Jean Dupont (jean@exemple.com)</SelectItem>
                      <SelectItem value="2">Marie Martin (marie@exemple.com)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="course">Formation</Label>
                  <Select>
                    <SelectTrigger className="border-[#0d6ebb]/30">
                      <SelectValue placeholder="Sélectionner une formation" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Gestion des Déchets Plastiques</SelectItem>
                      <SelectItem value="2">Protection des Océans</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="score">Score (%)</Label>
                  <Input id="score" type="number" placeholder="85" className="border-[#0d6ebb]/30" />
                </div>
              </div>
              <DialogFooter>
                <Button className="bg-[#0d6ebb] hover:bg-[#0d6ebb]/90">Générer Certificat</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Search */}
      <Card className="bg-white border-[#0d6ebb]/20">
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0d6ebb]" />
            <Input
              placeholder="Rechercher par utilisateur, email, formation ou ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 border-[#0d6ebb]/30 focus:border-[#0d6ebb]"
            />
          </div>
        </CardContent>
      </Card>

      {/* Certificates Table */}
      <Card className="bg-white border-[#0d6ebb]/20">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#0d6ebb]/5">
                <TableHead className="text-[#0d6ebb]">ID Certificat</TableHead>
                <TableHead className="text-[#0d6ebb]">Utilisateur</TableHead>
                <TableHead className="text-[#0d6ebb]">Email</TableHead>
                <TableHead className="text-[#0d6ebb]">Formation</TableHead>
                <TableHead className="text-[#0d6ebb]">Score</TableHead>
                <TableHead className="text-[#0d6ebb]">Date d'Émission</TableHead>
                <TableHead className="text-[#0d6ebb]">Statut</TableHead>
                <TableHead className="text-right text-[#0d6ebb]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCertificates.map((cert) => (
                <TableRow key={cert.id} className="hover:bg-[#0d6ebb]/5">
                  <TableCell className="font-mono text-sm text-gray-900">{cert.id}</TableCell>
                  <TableCell className="font-medium text-gray-900">{cert.user}</TableCell>
                  <TableCell className="text-gray-700">{cert.email}</TableCell>
                  <TableCell className="text-gray-700">{cert.course}</TableCell>
                  <TableCell className="font-semibold text-[#0d6ebb]">{cert.score}%</TableCell>
                  <TableCell className="text-gray-700">{cert.issueDate}</TableCell>
                  <TableCell>
                    <Badge
                      className={cert.status === "Actif" ? "bg-[#0DBD9F] text-white" : "bg-red-100 text-red-800"}
                    >
                      {cert.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="hover:bg-[#0d6ebb]/10">
                          <MoreVertical className="h-4 w-4 text-[#0d6ebb]" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="h-4 w-4 mr-2" />
                          Voir Certificat
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Download className="h-4 w-4 mr-2" />
                          Télécharger PDF
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Award className="h-4 w-4 mr-2" />
                          Voir Code de Vérification
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        {cert.status === "Actif" ? (
                          <DropdownMenuItem className="text-red-600">
                            <XCircle className="h-4 w-4 mr-2" />
                            Révoquer Certificat
                          </DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem className="text-green-600">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Réactiver Certificat
                          </DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}