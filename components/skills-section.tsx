import { Progress } from "@/components/ui/progress"

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
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Skills & Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              A comprehensive overview of my technical skills and the tools I use to bring ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-8">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>

            <div>
                <h3 className="text-2xl font-semibold mb-6">🔐 Cybersecurity Tools & Technologies</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium mb-2">🔎 Offensive Security</h4>
                    <div className="bg-card border border-border rounded-lg p-4 text-sm text-muted-foreground">
                      Kali Linux · Burp Suite · Nmap · Wireshark · Metasploit · Hydra
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium mb-2">🛡️ Defensive & Monitoring</h4>
                    <div className="bg-card border border-border rounded-lg p-4 text-sm text-muted-foreground">
                      Splunk · Suricata · Zeek · SIEM Tools · pfSense
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium mb-2">☁️ Cloud & DevSecOps</h4>
                    <div className="bg-card border border-border rounded-lg p-4 text-sm text-muted-foreground">
                      AWS (S3, Route 53, CloudFront, IAM) · Docker · GitHub Actions · Vercel
                    </div>
                  </div>
                </div>

              <div className="mt-12">
                <h4 className="text-xl font-semibold mb-4">Certifications</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• AWS Certified Developer Associate</li>
                  <li>• Google Analytics Certified</li>
                  <li>• Meta Frontend Developer Certificate</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
