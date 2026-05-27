"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface EditorNavbarProps {
  sidebarOpen: boolean
  onToggleSidebar: () => void
}

export function EditorNavbar({ sidebarOpen, onToggleSidebar }: EditorNavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 h-14 flex items-center justify-between px-4 bg-card border-b border-border">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon-sm" onClick={onToggleSidebar} aria-label="Toggle sidebar">
          {sidebarOpen ? <ChevronLeft /> : <ChevronRight />}
        </Button>
      </div>

      <div className="flex-1 text-center">
        <div className="text-sm font-medium">""</div>
      </div>

      <div className="flex items-center gap-2" />
    </header>
  )
}

export default EditorNavbar
