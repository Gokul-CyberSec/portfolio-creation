import { Github, Linkedin, Mail, Terminal, Shield, Code } from "lucide-react"
import { Button } from "@/components/ui/button"

// Custom Discord Icon
const DiscordIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.120.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.210 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
)

export function Footer() {
  return (
    <footer className="bg-black border-t border-green-500/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-900 border border-green-500/30 rounded-lg p-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-green-400 font-mono text-sm">system_info.sh</span>
            </div>
            <div className="text-left">
              <p className="text-green-400 font-mono text-sm">
                <span className="text-green-500">root@gokul:~$</span> whoami && uptime
              </p>
              <div className="mt-2 text-green-300 font-mono text-sm">
                <p>gokul_amaran_s</p>
                <p>system uptime: 24/7 | status: ready_for_challenges</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="h-5 w-5 text-green-400" />
                <h3 className="font-bold text-xl text-green-400 font-mono">Gokul Amaran S</h3>
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed font-mono text-sm">
                Cybersecurity Specialist & Full-Stack Developer passionate about securing digital infrastructures and
                creating robust applications.
              </p>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="border border-gray-700 hover:border-green-500 hover:bg-green-500/10"
                  asChild
                >
                  <a href="https://github.com/Gokul-CyberSec" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 text-green-400" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="border border-gray-700 hover:border-blue-500 hover:bg-blue-500/10"
                  asChild
                >
                  <a href="https://linkedin.com/in/gokulamaran" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4 text-blue-400" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="border border-gray-700 hover:border-indigo-500 hover:bg-indigo-500/10"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <DiscordIcon className="h-4 w-4 text-indigo-400" />
                    <span className="sr-only">Discord</span>
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="border border-gray-700 hover:border-red-500 hover:bg-red-500/10"
                  asChild
                >
                  <a href="mailto:apsr.1231@gmail.com">
                    <Mail className="h-4 w-4 text-red-400" />
                    <span className="sr-only">Email</span>
                  </a>
                </Button>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Code className="h-5 w-5 text-blue-400" />
                <h4 className="font-semibold text-blue-400 font-mono">Navigation Menu</h4>
              </div>
              <ul className="space-y-2 font-mono text-sm">
                <li>
                  <a
                    href="#home"
                    className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2"
                  >
                    <span className="text-green-500">&gt;</span> Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2"
                  >
                    <span className="text-green-500">&gt;</span> About
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2"
                  >
                    <span className="text-green-500">&gt;</span> Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2"
                  >
                    <span className="text-green-500">&gt;</span> Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2"
                  >
                    <span className="text-green-500">&gt;</span> Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-5 w-5 text-orange-400" />
                <h4 className="font-semibold text-orange-400 font-mono">Internships</h4>
              </div>
              <div className="space-y-3">
                <div className="bg-gray-800/50 border border-gray-600 rounded p-3">
                  <h5 className="font-semibold text-white font-mono text-sm">Redynox (TheRedUsers)</h5>
                  <p className="text-orange-300 text-sm">Cybersecurity Intern</p>
                  <p className="text-gray-400 text-xs font-mono">July 25 - August 2025</p>
                </div>
                <div className="bg-gray-800/50 border border-gray-600 rounded p-3">
                  <h5 className="font-semibold text-white font-mono text-sm">Edu-Tantr</h5>
                  <p className="text-orange-300 text-sm">Cybersecurity Intern</p>
                  <p className="text-gray-400 text-xs font-mono">July 25 - September 2025</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="bg-black/50 border border-gray-800 rounded p-4">
              <p className="text-center text-gray-400 font-mono text-sm">
                <span className="text-green-500">root@gokul:~$</span> echo "© 2025 Gokul Amaran S. All rights reserved.
                | System secured and operational."
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
