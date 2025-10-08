"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
import { Search, MoreVertical, UserCog, Ban, Key, Download, Eye, Mail, Shield } from "lucide-react"

const users = [
  {
    id: 1,
    name: "Jean Dupont",
    email: "jean@exemple.com",
    role: "Apprenant",
    status: "Actif",
    enrolledCourses: 5,
    completedCourses: 3,
    joinDate: "2023-12-01",
    lastActive: "2024-01-15",
  },
  {
    id: 2,
    name: "Marie Martin",
    email: "marie@exemple.com",
    role: "Apprenant",
    status: "Actif",
    enrolledCourses: 8,
    completedCourses: 6,
    joinDate: "2023-11-15",
    lastActive: "2024-01-14",
  },
  {
    id: 3,
    name: "Sophie Océane",
    email: "sophie@exemple.com",
    role: "Instructeur",
    status: "Actif",
    enrolledCourses: 0,
    completedCourses: 0,
    joinDate: "2023-10-01",
    lastActive: "2024-01-15",
  },
  {
    id: 4,
    name: "Pierre Durand",
    email: "pierre@exemple.com",
    role: "Apprenant",
    status: "Suspendu",
    enrolledCourses: 3,
    completedCourses: 1,
    joinDate: "2023-12-20",
    lastActive: "2024-01-10",
  },
]

export default function AdminUsersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [roleFilter, setRoleFilter] = useState("Tous les Rôles")

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRole = roleFilter === "Tous les Rôles" || user.role === roleFilter
    return matchesSearch && matchesRole
  })

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Admin":
        return "bg-purple-100 text-purple-800"
      case "Instructeur":
        return "bg-[#0d6ebb]/10 text-[#0d6ebb]"
      case "Apprenant":
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
          <h1 className="text-3xl font-bold tracking-tight text-[#0d6ebb]">Gestion des Utilisateurs</h1>
          <p className="text-gray-600">Gérer les utilisateurs, rôles et permissions</p>
        </div>
        <Button className="bg-[#0d6ebb] hover:bg-[#0d6ebb]/90">
          <Mail className="h-4 w-4 mr-2" />
          Inviter Utilisateur
        </Button>
      </div>

      {/* Filters */}
      <Card className="bg-white border-[#0d6ebb]/20">
        <CardContent className="p-4">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0d6ebb]" />
              <Input
                placeholder="Rechercher par nom ou email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 border-[#0d6ebb]/30 focus:border-[#0d6ebb]"
              />
            </div>
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="px-3 py-2 border border-[#0d6ebb]/30 bg-background rounded-md text-sm hover:border-[#0d6ebb]"
            >
              <option value="Tous les Rôles">Tous les Rôles</option>
              <option value="Admin">Admin</option>
              <option value="Instructeur">Instructeur</option>
              <option value="Apprenant">Apprenant</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Users Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredUsers.map((user) => (
          <Card key={user.id} className="bg-white hover:shadow-lg hover:border-[#0d6ebb]/40 transition-all border-[#0d6ebb]/10">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-gray-900">{user.name}</h3>
                    <p className="text-sm text-gray-600">{user.email}</p>
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
                        Voir Profil
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Download className="h-4 w-4 mr-2" />
                        Exporter Formations
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <Dialog>
                        <DialogTrigger asChild>
                          <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                            <Shield className="h-4 w-4 mr-2" />
                            Changer Rôle
                          </DropdownMenuItem>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle className="text-[#0d6ebb]">Changer le Rôle</DialogTitle>
                            <DialogDescription>Mettre à jour le rôle pour {user.name}</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="role">Nouveau Rôle</Label>
                              <Select defaultValue={user.role.toLowerCase()}>
                                <SelectTrigger className="border-[#0d6ebb]/30">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="apprenant">Apprenant</SelectItem>
                                  <SelectItem value="instructeur">Instructeur</SelectItem>
                                  <SelectItem value="admin">Admin</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <DialogFooter>
                            <Button className="bg-[#0d6ebb] hover:bg-[#0d6ebb]/90">Mettre à Jour</Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                      <Dialog>
                        <DialogTrigger asChild>
                          <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                            <Key className="h-4 w-4 mr-2" />
                            Réinitialiser Mot de Passe
                          </DropdownMenuItem>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle className="text-[#0d6ebb]">Réinitialiser le Mot de Passe</DialogTitle>
                            <DialogDescription>Envoyer un email de réinitialisation à {user.email}</DialogDescription>
                          </DialogHeader>
                          <div className="py-4">
                            <p className="text-sm text-gray-600">
                              L'utilisateur recevra un email avec les instructions pour réinitialiser son mot de passe.
                            </p>
                          </div>
                          <DialogFooter>
                            <Button className="bg-[#0d6ebb] hover:bg-[#0d6ebb]/90">Envoyer Email</Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                      <DropdownMenuSeparator />
                      {user.status === "Actif" ? (
                        <Dialog>
                          <DialogTrigger asChild>
                            <DropdownMenuItem onSelect={(e) => e.preventDefault()} className="text-red-600">
                              <Ban className="h-4 w-4 mr-2" />
                              Suspendre
                            </DropdownMenuItem>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle className="text-red-600">Suspendre l'Utilisateur</DialogTitle>
                              <DialogDescription>Êtes-vous sûr de vouloir suspendre {user.name}?</DialogDescription>
                            </DialogHeader>
                            <div className="py-4">
                              <p className="text-sm text-gray-600">
                                Cet utilisateur ne pourra plus accéder à son compte ni aux formations.
                              </p>
                            </div>
                            <DialogFooter>
                              <Button variant="outline">Annuler</Button>
                              <Button variant="destructive">Suspendre</Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      ) : (
                        <DropdownMenuItem className="text-green-600">
                          <UserCog className="h-4 w-4 mr-2" />
                          Réactiver
                        </DropdownMenuItem>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="flex items-center gap-2">
                  <Badge className={getRoleColor(user.role)}>{user.role}</Badge>
                  <Badge
                    className={
                      user.status === "Actif"
                        ? "bg-[#0DBD9F] text-white"
                        : user.status === "Suspendu"
                          ? "bg-red-100 text-red-800"
                          : "bg-gray-100 text-gray-800"
                    }
                  >
                    {user.status}
                  </Badge>
                </div>

                <div className="space-y-2 pt-2 border-t border-[#0d6ebb]/10">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Formations inscrites:</span>
                    <span className="font-semibold text-[#0d6ebb]">{user.enrolledCourses}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Formations complétées:</span>
                    <span className="font-semibold text-[#0DBD9F]">{user.completedCourses}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Inscription:</span>
                    <span className="text-gray-700">{user.joinDate}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Dernière activité:</span>
                    <span className="text-gray-700">{user.lastActive}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredUsers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">Aucun utilisateur trouvé.</p>
        </div>
      )}
    </div>
  )
}