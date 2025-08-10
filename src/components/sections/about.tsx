import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">Sobre Mim</h2>
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8">
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                Sou um desenvolvedor full stack junior com paixão por criar aplicações web modernas e funcionais...
              </p>
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                Minha jornada na programação começou há 2 anos...
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                Quando não estou codando, gosto de estudar novas tecnologias...
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
