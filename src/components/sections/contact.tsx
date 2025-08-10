import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">Contato</h2>
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">Nome</label>
                  <Input id="name" placeholder="Seu nome" className="bg-white/10 border-white/20 text-white" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white mb-2">Email</label>
                  <Input id="email" placeholder="seu@email.com" className="bg-white/10 border-white/20 text-white" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white mb-2">Mensagem</label>
                  <Textarea id="message" rows={5} placeholder="Sua mensagem..." className="bg-white/10 border-white/20 text-white" />
                </div>
                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  <Mail className="w-4 h-4 mr-2" /> Enviar Mensagem
                </Button>
              </form>
              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-white/80">
                  <div className="flex items-center"><Mail className="w-5 h-5 mr-2" /> joao.silva@email.com</div>
                  <div className="flex items-center"><Phone className="w-5 h-5 mr-2" /> (11) 99999-9999</div>
                  <div className="flex items-center"><MapPin className="w-5 h-5 mr-2" /> São Paulo, SP</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
