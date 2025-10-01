"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Terminal, Folder } from "lucide-react"

const projects = [
  {
    title: "CTF GHOST",
    description:
      "Automates Capture The Flag (CTF) challenge solving using AI to analyze and exploit vulnerabilities.",
    technologies: ["Python", "Ctf Tools Api" , "Linux" , "AI"],
    liveUrl: "#",
    githubUrl: "https://github.com/Gokul-CyberSec/CTF_GHOST",
  },
  {
    title: "Leaks_Lookup",
    description:
      "A comprehensive tool to search for email and username leaks across multiple data breach databases.",
    technologies: ["Python", "APIs", "Data Parsing", "Automation"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Wifi_Pumpkin",
    description: "Wi-Fi penetration testing Tool for network auditing and security assessments.",
    technologies: ["Python", "Scapy", "Kali Linux", "Network Security"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Phishing Simulator",
    description: "Educational phishing simulation platform for security awareness training and assessment.",
    technologies: ["PHP", "JavaScript", "MySQL", "GoPhish"],
    liveUrl: "#",
    githubUrl: "#",
  },
  
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="bg-gray-900 border-2 border-green-500 rounded-lg p-6 font-mono inline-block">
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="h-5 w-5 text-green-400" />
                <span className="text-green-400">$</span>
                <span className="text-green-300">ls -la ~/projects/</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-green-300 mb-4"># Security Projects</h2>
              <p className="text-green-200 max-w-3xl text-lg">drwxr-xr-x cybersecurity tools and research projects</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 group">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900 border-2 border-green-500 rounded-lg font-mono hover:border-green-400 transition-all duration-500 hover:shadow-lg hover:shadow-green-500/20 cursor-pointer transform hover:scale-110 group-hover:blur-sm hover:!blur-none group-hover:scale-90 hover:!scale-110"
              >
                <div className="flex items-center gap-2 p-4 border-b border-green-500/30">
                  <Folder className="h-4 w-4 text-green-400" />
                  <span className="text-green-300 text-sm truncate">
                    {project.title.toLowerCase().replace(/\s+/g, "_")}
                  </span>
                  <div className="flex gap-1 ml-auto">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-green-400 mb-2">
                    <span className="text-green-500">$</span> cat README.md
                  </div>
                  <h3 className="text-xl font-bold text-green-300 mb-3"># {project.title}</h3>
                  <p className="text-green-200 text-sm mb-4 leading-relaxed">{project.description}</p>

                  <div className="text-green-400 mb-2">
                    <span className="text-green-500">$</span> cat requirements.txt
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs border border-green-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="bg-green-600 hover:bg-green-500 text-black font-mono text-xs" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        ./run.sh
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-green-500 text-green-400 hover:bg-green-500/10 font-mono text-xs bg-transparent"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3 mr-1" />
                        git clone
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gray-900 border-2 border-green-500 rounded-lg p-4 font-mono inline-block">
              <span className="text-green-400">
                <span className="text-green-500">$</span> find . -name "*.md" -exec grep -l "more projects" {} \;
              </span>
              <div className="text-green-300 mt-2">&gt; Check my GitHub for more security tools and research</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .group:hover > div:not(:hover) {
          filter: blur(10px);
          transform: scale(0.9);
        }
        .group > div:hover {
          transform: scale(1.1);
          filter: blur(0px);
        }
      `}</style>
    </section>
  )
}
