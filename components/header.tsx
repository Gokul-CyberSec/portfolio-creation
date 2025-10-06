"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Download } from "lucide-react"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>(NAV_ITEMS[0]?.id ?? "home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        root: null,
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0.1,
      }
    )

    NAV_ITEMS.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
      setActiveSection(sectionId)
    }
  }

  const downloadResume = () => {
    // You can replace this with your actual resume file path
    const resumeUrl = "/resume.pdf" // Place your resume.pdf in the public folder
    const link = document.createElement("a")
    link.href = resumeUrl
    link.download = "Resume.pdf"
    link.click()
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? "bg-slate-900/90 backdrop-blur-xl border-b border-slate-700/50 shadow-lg shadow-black/20"
          : "bg-slate-900/80 backdrop-blur-md"
      }`}
      style={{
        background: isScrolled
          ? "linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(30,41,59,0.90) 100%)"
          : "linear-gradient(135deg, rgba(15,23,42,0.85) 0%, rgba(30,41,59,0.75) 100%)",
        borderImage: "linear-gradient(90deg, transparent, rgba(148,163,184,0.3), transparent) 1",
        touchAction: 'pan-y',
        WebkitTransform: 'translateZ(0)' // Force hardware acceleration
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="font-bold text-xl text-white relative">
            <span className="relative z-10 drop-shadow-sm">G0kµ1</span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 blur-sm rounded-lg -z-10"></div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 rounded-2xl border border-slate-600/40 bg-slate-900/70 px-3 py-2 shadow-inner shadow-black/20 backdrop-blur">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "relative overflow-hidden rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300",
                    isActive ? "text-emerald-300" : "text-slate-300 hover:text-emerald-200"
                  )}
                >
                  <span className="relative z-10">{item.label}</span>
                  <span
                    aria-hidden
                    className={cn(
                      "absolute inset-0 scale-95 rounded-full border border-emerald-400/30 bg-emerald-500/10 opacity-0 transition-all duration-300",
                      isActive && "scale-100 opacity-100 shadow-[0_0_18px_rgba(16,185,129,0.35)]"
                    )}
                  />
                </button>
              )
            })}
          </nav>

          <div className="flex items-center gap-4">
            {/* Download Resume Button - Desktop */}
            <Button
              onClick={downloadResume}
              className="hidden md:flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden relative bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 hover:bg-slate-700/80 text-white hover:text-emerald-300 rounded-full transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full blur-sm opacity-50"></div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-slate-700/50 backdrop-blur-xl">
            <div className="flex flex-col space-y-2 bg-slate-800/80 rounded-2xl p-4 backdrop-blur-sm border border-slate-600/30">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-white hover:text-emerald-300 transition-all duration-300 p-3 rounded-xl hover:bg-slate-700/60 backdrop-blur-sm relative group font-medium"
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </button>
              ))}
              
              {/* Download Resume Button - Mobile */}
              <button
                onClick={downloadResume}
                className="flex items-center gap-2 text-white bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 p-3 rounded-xl font-medium mt-2"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
