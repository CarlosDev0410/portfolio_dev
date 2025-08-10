import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Props {
  onScrollToContact: () => void
}

export default function Hero({ onScrollToContact }: Props) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <Image
            src="/placeholder.svg"
            alt="Foto de perfil"
            width={200}
            height={200}
            className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-white/20 shadow-2xl object-cover"
            priority // garante carregamento rápido no LCP
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">João Silva</h1>
        <h2 className="text-2xl md:text-3xl text-purple-200 mb-6">Desenvolvedor Full Stack Junior</h2>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
          Apaixonado por tecnologia e desenvolvimento web. Especializado em criar soluções digitais inovadoras com
          foco na experiência do usuário e performance otimizada.
        </p>
        <div className="mt-8">
          <Button
            onClick={onScrollToContact}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg"
          >
            Entre em Contato
          </Button>
        </div>
      </div>
    </section>
  )
}
