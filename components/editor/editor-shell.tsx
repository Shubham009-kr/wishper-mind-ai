"use client"

import * as React from "react"
import EditorNavbar from "@/components/editor/editor-navbar"
import ProjectSidebar from "@/components/editor/project-sidebar"

export default function EditorShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false)

  return (
    <div className="min-h-screen">
      <EditorNavbar sidebarOpen={sidebarOpen} onToggleSidebar={() => setSidebarOpen((s) => !s)} />
      <ProjectSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="pt-14">
        {children}
      </main>
    </div>
  )
}
