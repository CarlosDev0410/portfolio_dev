import { Button } from "@/components/ui/button"
import { Project } from "@/types"

interface Props {
  projects: Project[];
  current: number;
  onChange: (index: number) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function ProjectCarousel({ projects, current, onChange, onNext, onPrev }: Props) {
  return (
    <div className="flex justify-center items-center mt-8 space-x-4">
      <Button variant="ghost" size="sm" onClick={onPrev} className="text-white hover:bg-white/10">
        ← Anterior
      </Button>
      <div className="flex space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => onChange(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === current ? "bg-purple-400" : "bg-white/30"
            }`}
          />
        ))}
      </div>
      <Button variant="ghost" size="sm" onClick={onNext} className="text-white hover:bg-white/10">
        Próximo →
      </Button>
    </div>
  )
}
