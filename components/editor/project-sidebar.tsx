"use client"

import * as React from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

interface ProjectSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <>
      <div
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-40 transition-opacity ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />

      <aside
        aria-hidden={!isOpen}
        className={`fixed top-0 left-0 z-50 h-full w-80 max-w-full transform bg-card border-r border-border shadow-lg transition-transform duration-200 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-14 items-center justify-between px-4">
          <h2 className="text-sm font-medium">Projects</h2>
          <Button variant="ghost" size="icon-sm" onClick={onClose} aria-label="Close sidebar">
            <X />
          </Button>
        </div>

        <div className="p-4">
          <Tabs defaultValue="my-projects">
            <TabsList>
              <TabsTrigger value="my-projects">My Projects</TabsTrigger>
              <TabsTrigger value="shared">Shared</TabsTrigger>
            </TabsList>

            <div className="mt-4">
              <TabsContent value="my-projects">
                <div className="flex h-40 w-full items-center justify-center rounded-md border border-border bg-muted p-4 text-sm text-muted-foreground">
                  No projects yet.
                </div>
              </TabsContent>

              <TabsContent value="shared">
                <div className="flex h-40 w-full items-center justify-center rounded-md border border-border bg-muted p-4 text-sm text-muted-foreground">
                  No shared projects.
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <Button className="w-full" variant="default">
            <span className="flex items-center justify-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              New Project
            </span>
          </Button>
        </div>
      </aside>
    </>
  )
}

export default ProjectSidebar
