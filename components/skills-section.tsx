const skills = [
  { name: "JavaScript/TypeScript", level: 95 },
  { name: "React/Next.js", level: 90 },
  { name: "Node.js/Express", level: 85 },
  { name: "Python/Django", level: 80 },
  { name: "PostgreSQL/MongoDB", level: 85 },
  { name: "UI/UX Design", level: 75 },
  { name: "AWS/Cloud Services", level: 70 },
  { name: "Docker/DevOps", level: 65 },
]

const tools = ["VS Code", "Git", "Figma", "Postman", "Docker", "AWS", "Vercel", "Linear"]

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

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gray-900 border border-green-500/30 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-green-400 font-mono text-sm">technical_skills.log</span>
              </div>

              <h3 className="text-xl font-semibold mb-8 text-green-400 font-mono">
                [INFO] Technical Proficiency Matrix
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-black/50 border border-gray-700 rounded p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-mono text-green-300">{skill.name}</span>
                      <span className="text-sm text-green-500 font-mono">[{skill.level}%]</span>
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

            <div className="space-y-6">
              <div className="bg-gray-900 border border-red-500/30 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-red-400 font-mono text-sm">offensive_tools.sh</span>
                </div>
                <h4 className="text-lg font-mono text-red-400 mb-3">[OFFENSIVE] Penetration Testing</h4>
                <div className="bg-black/50 border border-red-500/20 rounded p-3 font-mono text-sm text-red-300">
                  Kali Linux • Burp Suite • Nmap • Wireshark • Metasploit • Hydra
                </div>
              </div>

              <div className="bg-gray-900 border border-blue-500/30 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-blue-400 font-mono text-sm">defensive_tools.sh</span>
                </div>
                <h4 className="text-lg font-mono text-blue-400 mb-3">[DEFENSIVE] Security Monitoring</h4>
                <div className="bg-black/50 border border-blue-500/20 rounded p-3 font-mono text-sm text-blue-300">
                  Splunk • Suricata • Zeek • SIEM Tools • pfSense
                </div>
              </div>

              <div className="bg-gray-900 border border-purple-500/30 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-purple-400 font-mono text-sm">cloud_tools.sh</span>
                </div>
                <h4 className="text-lg font-mono text-purple-400 mb-3">[CLOUD] DevSecOps Pipeline</h4>
                <div className="bg-black/50 border border-purple-500/20 rounded p-3 font-mono text-sm text-purple-300">
                  AWS (S3, Route 53, CloudFront, IAM) • Docker • GitHub Actions • Vercel
                </div>
              </div>

              <div className="bg-gray-900 border border-green-500/30 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-green-400 font-mono text-sm">certifications.txt</span>
                </div>
                <h4 className="text-lg font-mono text-green-400 mb-3">[VERIFIED] Certifications</h4>
                <ul className="space-y-2 font-mono text-sm text-green-300">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> AWS Certified Developer Associate
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Google Analytics Certified
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Meta Frontend Developer Certificate
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
