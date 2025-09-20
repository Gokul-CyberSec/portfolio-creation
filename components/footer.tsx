import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-xl text-primary mb-4">Alex Johnson</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Full-Stack Developer passionate about creating exceptional digital experiences that make a positive
                impact.
              </p>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#home" className="hover:text-primary transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-primary transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Cybersecurity Audits</li>
                <li>Penetration Testing</li>
                <li>Security Consulting</li>
                <li>Incident Response</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Gokul Amaran S. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
