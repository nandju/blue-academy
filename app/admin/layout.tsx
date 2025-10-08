import type React from "react"
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
  SidebarSeparator,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  LayoutDashboard,
  BookOpen,
  FileQuestion,
  Award,
  Users,
  FolderOpen,
  BarChart3,
  Settings,
  LogOut,
  GraduationCap,
} from "lucide-react"
import Link from "next/link"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar className="bg-white border-r border-gray-200">
          <SidebarHeader className="border-b border-gray-200 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#0d6ebb] to-[#0DBD9F] p-2 shadow-lg">
                <img 
                  src="/assets/images/logo.png"
                  alt="Blue Academy Logo"
                  className="h-6 w-6 rounded object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-[#0d6ebb]">Blue Academy</span>
                <span className="text-xs text-gray-500">Panneau Admin</span>
              </div>
            </div>
          </SidebarHeader>

          <SidebarContent className="p-2">
            <SidebarMenu className="space-y-1">
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="w-full justify-start hover:bg-[#0d6ebb]/10 hover:text-[#0d6ebb] rounded-lg p-3">
                  <Link href="/admin">
                    <LayoutDashboard className="h-5 w-5" />
                    <span className="font-medium">Tableau de bord</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild className="w-full justify-start hover:bg-[#0d6ebb]/10 hover:text-[#0d6ebb] rounded-lg p-3">
                  <Link href="/admin/courses">
                    <BookOpen className="h-5 w-5" />
                    <span className="font-medium">Cours</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild className="w-full justify-start hover:bg-[#0d6ebb]/10 hover:text-[#0d6ebb] rounded-lg p-3">
                  <Link href="/admin/quizzes">
                    <FileQuestion className="h-5 w-5" />
                    <span className="font-medium">Quiz</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild className="w-full justify-start hover:bg-[#0d6ebb]/10 hover:text-[#0d6ebb] rounded-lg p-3">
                  <Link href="/admin/certificates">
                    <Award className="h-5 w-5" />
                    <span className="font-medium">Certificats</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild className="w-full justify-start hover:bg-[#0d6ebb]/10 hover:text-[#0d6ebb] rounded-lg p-3">
                  <Link href="/admin/users">
                    <Users className="h-5 w-5" />
                    <span className="font-medium">Utilisateurs</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild className="w-full justify-start hover:bg-[#0d6ebb]/10 hover:text-[#0d6ebb] rounded-lg p-3">
                  <Link href="/admin/content">
                    <FolderOpen className="h-5 w-5" />
                    <span className="font-medium">Bibliothèque</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild className="w-full justify-start hover:bg-[#0d6ebb]/10 hover:text-[#0d6ebb] rounded-lg p-3">
                  <Link href="/admin/analytics">
                    <BarChart3 className="h-5 w-5" />
                    <span className="font-medium">Analytiques</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>

            <SidebarSeparator className="my-4 bg-gray-200" />

            <SidebarMenu className="space-y-1">
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="w-full justify-start hover:bg-[#0d6ebb]/10 hover:text-[#0d6ebb] rounded-lg p-3">
                  <Link href="/admin/settings">
                    <Settings className="h-5 w-5" />
                    <span className="font-medium">Paramètres</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>

          <SidebarFooter className="border-t border-gray-200 p-4">
            <SidebarMenu>
              <SidebarMenuItem>
                <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-50">
                  <Avatar className="h-10 w-10 border-2 border-[#0DBD9F]">
                    <AvatarImage src="/placeholder-user.png" />
                    <AvatarFallback className="bg-[#0DBD9F] text-white font-semibold">AD</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col flex-1 min-w-0">
                    <span className="text-sm font-semibold text-gray-900 truncate">Administrateur</span>
                    <span className="text-xs text-gray-500 truncate">admin@blueacademy.org</span>
                  </div>
                </div>
              </SidebarMenuItem>

              <SidebarMenuItem className="mt-2">
                <SidebarMenuButton asChild className="w-full justify-start hover:bg-red-50 hover:text-red-600 rounded-lg p-3">
                  <Link href="/logout">
                    <LogOut className="h-5 w-5" />
                    <span className="font-medium">Déconnexion</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset className="bg-gray-50">
          <header className="flex h-16 shrink-0 items-center gap-4 border-b border-gray-200 bg-white px-6 shadow-sm">
            <SidebarTrigger className="text-[#0d6ebb] hover:bg-[#0d6ebb]/10 rounded-lg p-2" />
            <div className="flex items-center gap-2">
              <div className="h-6 w-px bg-gray-300" />
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-[#0DBD9F]" />
                <span className="font-semibold text-[#0d6ebb] text-lg">Panneau Admin</span>
              </div>
            </div>
          </header>

          <main className="flex-1 p-6 bg-gray-50">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}