import { Card, CardContent } from "@/components/ui/card"
import { skills } from "@/data/skills"

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-8">Habilidades</h2>
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-4 text-center">
                  <div className="text-2xl mb-2">{skill.icon}</div>
                  <h3 className="text-white text-sm font-medium">{skill.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
