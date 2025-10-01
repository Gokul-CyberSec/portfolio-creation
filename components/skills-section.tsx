import { 
  Shield, 
  Bug, 
  Cloud, 
  Code, 
  Database, 
  Globe, 
  GitBranch, 
  Terminal, 
  Layers,
  Server,
  Lock,
  Eye,
  Activity,
  Wifi,
  FileText,
  Cpu,
  HardDrive,
  MonitorSpeaker,
  Zap,
  Search,
  Network
} from "lucide-react"

// Custom tool icons
const BurpSuiteIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
)

const MetasploitIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
  </svg>
)

const DockerIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186"/>
  </svg>
)

const KaliLinuxIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
)

const skills = [
  { name: "Python", level: 90 },
  { name: "Bash/Shell Scripting", level: 85 },
  { name: "Networking (TCP/IP, OSI)", level: 88 },
  { name: "Penetration Testing", level: 82 },
  { name: "Linux Administration", level: 87 },
  { name: "Security Analysis", level: 80 },
  { name: "Vulnerability Assessment", level: 78 },
  { name: "Incident Response", level: 75 },
  { name: "Cloud Security (AWS)", level: 70 },
  { name: "Web Application Security", level: 80 },
  { name: "Cryptography", level: 65 },
  { name: "SIEM Tools", level: 60 },
]

const tools = [
  // Development Tools
  { name: "Docker", icon: DockerIcon, category: "development", color: "blue" as const },
  { name: "Postman", icon: Server, category: "development", color: "orange" as const },
  
  // Security Tools
  { name: "Burp Suite", icon: BurpSuiteIcon, category: "security", color: "red" as const },
  { name: "Nmap", icon: Search, category: "security", color: "red" as const },
  { name: "Wireshark", icon: Network, category: "security", color: "blue" as const },
  { name: "Metasploit", icon: MetasploitIcon, category: "security", color: "red" as const },
  { name: "Kali Linux", icon: KaliLinuxIcon, category: "security", color: "green" as const },
  { name: "Hydra", icon: Lock, category: "security", color: "red" as const },
  
  // Cloud & DevOps
  { name: "AWS", icon: Cloud, category: "cloud", color: "yellow" as const },
  { name: "John the Ripper", icon: Lock, category: "security", color: "red" as const },
  { name: "Aircrack-ng", icon: Wifi, category: "security", color: "red" as const },
  
  // Monitoring & Analysis
  { name: "Splunk", icon: Database, category: "monitoring", color: "green" as const },
  { name: "Suricata", icon: Shield, category: "monitoring", color: "orange" as const },
  { name: "Zeek", icon: Eye, category: "monitoring", color: "blue" as const },
  { name: "pfSense", icon: Wifi, category: "monitoring", color: "red" as const },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-gray-900 border border-green-500/30 rounded-lg p-4 mb-8">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-green-400 font-mono text-sm">skills.exe</span>
              </div>
              <div className="text-left">
                <p className="text-green-400 font-mono text-sm">
                  <span className="text-green-500">root@gokul:~$</span> cat /proc/skills
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-green-400 font-mono mt-2">SKILLS & EXPERTISE</h2>
              </div>
            </div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto text-pretty font-mono">
              System analysis of technical capabilities and cybersecurity arsenal.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div className="bg-gray-900 border border-green-500/30 rounded-lg p-6 h-fit">
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-green-400 font-mono text-sm">technical_skills.log</span>
                </div>

                <h3 className="text-lg font-mono text-green-400 mb-4">
                  [INFO] Technical Proficiency Matrix
                </h3>
                <div className="space-y-3">
                  {skills.map((skill, index) => (
                    <div key={index} className="bg-black/50 border border-gray-700 rounded-lg p-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-mono text-green-300 text-sm">{skill.name}</span>
                        <span className="text-xs text-green-500 font-mono bg-green-500/10 px-2 py-1 rounded">[{skill.level}%]</span>
                      </div>
                      <div className="bg-gray-800 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-900 border border-green-500/30 rounded-lg p-6 h-fit">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-green-400 font-mono text-sm">tools_arsenal.sh</span>
                </div>
                <h4 className="text-lg font-mono text-green-400 mb-4">[ARSENAL] Tools & Technologies</h4>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {tools.map((tool, index) => {
                    const IconComponent = tool.icon
                    const colorClasses = {
                      red: "border-red-500/30 bg-red-500/10 text-red-400",
                      blue: "border-blue-500/30 bg-blue-500/10 text-blue-400", 
                      green: "border-green-500/30 bg-green-500/10 text-green-400",
                      orange: "border-orange-500/30 bg-orange-500/10 text-orange-400",
                      purple: "border-purple-500/30 bg-purple-500/10 text-purple-400",
                      yellow: "border-yellow-500/30 bg-yellow-500/10 text-yellow-400",
                      gray: "border-gray-500/30 bg-gray-500/10 text-gray-400"
                    }
                    
                    return (
                      <div
                        key={index}
                        className={`border rounded-lg p-3 transition-all duration-300 hover:scale-105 hover:shadow-lg ${colorClasses[tool.color]}`}
                      >
                        <div className="flex flex-col items-center gap-2 text-center">
                          <IconComponent className="w-6 h-6" />
                          <span className="font-mono text-xs font-medium">{tool.name}</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Certifications Section - Compact */}
              <div className="bg-gray-900 border border-green-500/30 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-green-400 font-mono text-sm">certifications.txt</span>
                </div>
                <h4 className="text-lg font-mono text-green-400 mb-4">[VERIFIED] Certifications</h4>
                
                <div className="grid grid-cols-2 gap-3">
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative block"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.4)]"></div>
                    <div className="relative bg-gray-900 m-[1px] rounded-md p-3 h-24 transition-all duration-300 group-hover:scale-[0.98] cursor-pointer flex items-center gap-3">
                      <img 
                        src="/icons/isc2.png" 
                        alt="ISC2 CC" 
                        className="w-8 h-8 object-contain flex-shrink-0"
                      />
                      <span className="font-mono text-xs text-green-300 leading-tight">ISC2 - CC Certified</span>
                    </div>
                  </a>

                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative block"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"></div>
                    <div className="relative bg-gray-900 m-[1px] rounded-md p-3 h-24 transition-all duration-300 group-hover:scale-[0.98] cursor-pointer flex items-center gap-3">
                      <img 
                        src="/icons/IBM.png" 
                        alt="IBM" 
                        className="w-8 h-8 object-contain flex-shrink-0"
                      />
                      <span className="font-mono text-xs text-blue-300 leading-tight">Penetration Testing - IBM</span>
                    </div>
                  </a>

                  <a 
                    href="https://coursera.org/verify/Q6MVOF4UTSJ8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative block"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]"></div>
                    <div className="relative bg-gray-900 m-[1px] rounded-md p-3 h-24 transition-all duration-300 group-hover:scale-[0.98] cursor-pointer flex items-center gap-3">
                      <img 
                        src="/icons/Red_Hat_logo.svg.png" 
                        alt="Red Hat" 
                        className="w-8 h-8 object-contain flex-shrink-0"
                      />
                      <span className="font-mono text-xs text-red-300 leading-tight">Red Hat Linux</span>
                    </div>
                  </a>

                  <a 
                    href="https://www.credly.com/badges/05c5533c-6d2d-42b6-bfb9-af4d9733c8c8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative block"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]"></div>
                    <div className="relative bg-gray-900 m-[1px] rounded-md p-3 h-24 transition-all duration-300 group-hover:scale-[0.98] cursor-pointer flex items-center gap-3">
                      <img 
                        src="/icons/cybersecurity-fundamentals.png" 
                        alt="IBM SkillsBuild" 
                        className="w-8 h-8 object-contain flex-shrink-0"
                      />
                      <span className="font-mono text-xs text-cyan-300 leading-tight">Cybersecurity Fundamentals</span>
                    </div>
                  </a>

                  <a 
                    href="https://www.credly.com/badges/f88487c1-9b36-4854-8780-c7f577a207c7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative block"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.4)]"></div>
                    <div className="relative bg-gray-900 m-[1px] rounded-md p-3 h-24 transition-all duration-300 group-hover:scale-[0.98] cursor-pointer flex items-center gap-3">
                      <img 
                        src="/icons/networking-basics.png" 
                        alt="Cisco" 
                        className="w-8 h-8 object-contain flex-shrink-0"
                      />
                      <span className="font-mono text-xs text-indigo-300 leading-tight">Networking Basics - Cisco</span>
                    </div>
                  </a>

                  <a 
                    href="https://www.credly.com/badges/677c1c1c-d093-4ea8-aa33-9550f31486bc" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative block"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.4)]"></div>
                    <div className="relative bg-gray-900 m-[1px] rounded-md p-3 h-24 transition-all duration-300 group-hover:scale-[0.98] cursor-pointer flex items-center gap-3">
                      <img 
                        src="/icons/aws-educate-introduction-to-cloud-101-training-badg.png" 
                        alt="AWS" 
                        className="w-8 h-8 object-contain flex-shrink-0"
                      />
                      <span className="font-mono text-xs text-yellow-300 leading-tight">AWS Cloud 101</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
