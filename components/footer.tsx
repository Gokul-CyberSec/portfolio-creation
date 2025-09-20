import { Github, Linkedin, Mail, Twitter, Terminal, Shield, Code } from "lucide-react"
import { Button } from "@/components/ui/button"

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
                >
                  <Github className="h-4 w-4 text-green-400" />
                  <span className="sr-only">GitHub</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="border border-gray-700 hover:border-blue-500 hover:bg-blue-500/10"
                >
                  <Linkedin className="h-4 w-4 text-blue-400" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="border border-gray-700 hover:border-purple-500 hover:bg-purple-500/10"
                >
                  <Twitter className="h-4 w-4 text-purple-400" />
                  <span className="sr-only">Twitter</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="border border-gray-700 hover:border-red-500 hover:bg-red-500/10"
                >
                  <Mail className="h-4 w-4 text-red-400" />
                  <span className="sr-only">Email</span>
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
                <Shield className="h-5 w-5 text-red-400" />
                <h4 className="font-semibold text-red-400 font-mono">Security Services</h4>
              </div>
              <ul className="space-y-2 font-mono text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="text-red-500">•</span> Cybersecurity Audits
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500">•</span> Penetration Testing
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500">•</span> Security Consulting
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500">•</span> Incident Response
                </li>
              </ul>
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
