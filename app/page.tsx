import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Portfolio() {
  return (
    <div 
      className="min-h-screen bg-background overflow-x-hidden"
      style={{
        WebkitOverflowScrolling: 'touch',
        overflowY: 'auto',
        position: 'relative',
        width: '100%'
      }}
    >
      <Header />
      <main 
        className="relative"
        style={{
          WebkitOverflowScrolling: 'touch',
          overflowY: 'visible'
        }}
      >
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
