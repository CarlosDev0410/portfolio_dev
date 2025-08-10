import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { Project } from "@/types"
import Image from "next/image"

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={400}
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
        <p className="text-white/80 mb-6 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, index) => (
            <Badge key={index} variant="secondary" className="bg-purple-600/20 text-purple-200">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex space-x-4">
          <Button
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 bg-transparent"
            onClick={() => window.open(project.preview, "_blank")}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Preview
          </Button>
          <Button
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 bg-transparent"
            onClick={() => window.open(project.github, "_blank")}
          >
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
        </div>
      </div>
    </div>
  )
}
