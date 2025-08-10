"use client"

import { useState } from "react"
import { projects } from "@/data/projects"
import { Card, CardContent } from "@/components/ui/card"
import ProjectCard from "@/components/projects/project-card"
import ProjectCarousel from "@/components/projects/project-carousel"

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">Projetos</h2>
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8">
              <ProjectCard project={projects[currentProject]} />
              <ProjectCarousel
                projects={projects}
                current={currentProject}
                onChange={setCurrentProject}
                onNext={() => setCurrentProject((p) => (p + 1) % projects.length)}
                onPrev={() => setCurrentProject((p) => (p - 1 + projects.length) % projects.length)}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
