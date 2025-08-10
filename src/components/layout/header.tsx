"use client"
import { Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useTheme } from "@/hooks/useTheme"

export default function Header({ onScrollToSection }: { onScrollToSection: (id: string) => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  const sections = [
    { id: "home", label: "Início" },
    { id: "about", label: "Sobre" },
    { id: "skills", label: "Habilidades" },
    { id: "projects", label: "Projetos" },
    { id: "contact", label: "Contato" }
  ]

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Portfolio</h1>
        <nav className="hidden md:flex space-x-6">
          {sections.map(s => (
            <button
              key={s.id}
              onClick={() => onScrollToSection(s.id)}
              className="text-white/80 hover:text-white transition-colors capitalize"
            >
              {s.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-white hover:bg-white/10">
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-black/40 backdrop-blur-md border-t border-white/10">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {sections.map(s => (
              <button
                key={s.id}
                onClick={() => { onScrollToSection(s.id); setIsMenuOpen(false) }}
                className="block w-full text-left text-white/80 hover:text-white transition-colors capitalize py-2"
              >
                {s.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
