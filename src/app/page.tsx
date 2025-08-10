"use client"

import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Skills from "@/components/sections/skills"
import Projects from "@/components/sections/projects"
import Contact from "@/components/sections/contact"
import { useScrollToSection } from "@/hooks/useScrollToSection"

export default function PortfolioPage() {
  const scrollToSection = useScrollToSection()

  return (
    <>
      <Header onScrollToSection={scrollToSection} />
      <Hero onScrollToContact={() => scrollToSection("contact")} />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}