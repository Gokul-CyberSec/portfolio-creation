"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Download } from "lucide-react"
import styled from "styled-components"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
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
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="font-bold text-xl text-white relative">
            <span className="relative z-10 drop-shadow-sm">Portfolio</span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 blur-sm rounded-lg -z-10"></div>
          </div>

          {/* Desktop Navigation - Glass Radio Group */}
          <StyledWrapper className="hidden md:flex">
            <div className="glass-radio-group">
              <input
                type="radio"
                name="plan"
                id="glass-silver"
                defaultChecked
                onClick={() => scrollToSection("home")}
              />
              <label htmlFor="glass-silver">About</label>
              <input type="radio" name="plan" id="glass-gold" onClick={() => scrollToSection("projects")} />
              <label htmlFor="glass-gold">Projects</label>
              <input type="radio" name="plan" id="glass-platinum" onClick={() => scrollToSection("skills")} />
              <label htmlFor="glass-platinum">Skills</label>
              <input type="radio" name="plan" id="glass-diamond" onClick={() => scrollToSection("contact")} />
              <label htmlFor="glass-diamond">Contact</label>
              <div className="glass-glider" />
            </div>
          </StyledWrapper>

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
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "projects", label: "Projects" },
                { id: "skills", label: "Skills" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
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

const StyledWrapper = styled.div`
  .glass-radio-group {
    /* Updated background and text colors for better dark mode contrast */
    --bg: rgba(30, 41, 59, 0.8);
    --text: #ffffff;
    display: flex;
    position: relative;
    background: var(--bg);
    border-radius: 1rem;
    backdrop-filter: blur(12px);
    box-shadow:
      inset 1px 1px 4px rgba(255, 255, 255, 0.1),
      inset -1px -1px 6px rgba(0, 0, 0, 0.5),
      0 4px 12px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    width: fit-content;
    border: 1px solid rgba(148, 163, 184, 0.2);
  }

  .glass-radio-group input {
    display: none;
  }

  .glass-radio-group label {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 80px;
    font-size: 14px;
    padding: 0.8rem 1.6rem;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 0.3px;
    color: var(--text);
    position: relative;
    z-index: 2;
    transition: color 0.3s ease-in-out;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }

  .glass-radio-group label:hover {
    color: #10b981;
  }

  .glass-radio-group input:checked + label {
    color: #ffffff;
    text-shadow: 0 0 8px rgba(16, 185, 129, 0.5);
  }

  /* Adding the missing glider base styles */
  .glass-glider {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 25%;
    border-radius: 0.8rem;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1;
    backdrop-filter: blur(8px);
  }

  /* Silver */
  #glass-silver:checked ~ .glass-glider {
    transform: translateX(0%);
    background: linear-gradient(135deg, #10b981aa, #059669);
    box-shadow:
      0 0 18px rgba(16, 185, 129, 0.4),
      0 0 10px rgba(16, 185, 129, 0.2) inset;
  }

  /* Gold */
  #glass-gold:checked ~ .glass-glider {
    transform: translateX(100%);
    background: linear-gradient(135deg, #10b981aa, #059669);
    box-shadow:
      0 0 18px rgba(16, 185, 129, 0.4),
      0 0 10px rgba(16, 185, 129, 0.2) inset;
  }

  /* Platinum */
  #glass-platinum:checked ~ .glass-glider {
    transform: translateX(200%);
    background: linear-gradient(135deg, #10b981aa, #059669);
    box-shadow:
      0 0 18px rgba(16, 185, 129, 0.4),
      0 0 10px rgba(16, 185, 129, 0.2) inset;
  }

  /* Diamond */
  #glass-diamond:checked ~ .glass-glider {
    transform: translateX(300%);
    background: linear-gradient(135deg, #10b981aa, #059669);
    box-shadow:
      0 0 18px rgba(16, 185, 129, 0.4),
      0 0 10px rgba(16, 185, 129, 0.2) inset;
  }
`
