import { Card, CardContent } from "@/components/ui/card"
import SpotlightCard from '@/components/ui/spotlight-card'
import { Code, Palette, Zap } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
             I’m a passionate Cyber Security Engineer with hands-on experience in Red Teaming, Bug Hunting, and Threat Analysis, dedicated to solving real-world security challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="/professional-headshot-of-a-developer.jpg"
                alt="Alex Johnson - Professional headshot"
                className="rounded-lg shadow-lg w-full max-w-md mx-auto"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
               My journey in tech started with a curiosity about how systems work. Today, I specialize in uncovering vulnerabilities, strengthening defenses, and crafting secure digital environments.
              </p>
              <p className="text-lg leading-relaxed">
                When I’m not hunting bugs or simulating attacks, you’ll find me exploring the latest in cybersecurity trends, contributing to open-source projects, or sharing insights through tech blogs and talks.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            <SpotlightCard>
              <Card className="text-center bg-transparent shadow-none border-0">
                <CardContent className="pt-6">
                  <Code className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
                  <p className="text-muted-foreground">
                    Writing maintainable, scalable code that stands the test of time
                  </p>
                </CardContent>
              </Card>
            </SpotlightCard>
            <SpotlightCard>
              <Card className="text-center bg-transparent shadow-none border-0">
                <CardContent className="pt-6">
                  <Palette className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Design Focus</h3>
                  <p className="text-muted-foreground">
                    cybersecurity with a keen eye for intuitive and engaging user experiences
                  </p>
                </CardContent>
              </Card>
            </SpotlightCard>
            <SpotlightCard>
              <Card className="text-center bg-transparent shadow-none border-0">
                <CardContent className="pt-6">
                  <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Performance</h3>
                  <p className="text-muted-foreground">
                    Ensuring robust and efficient security solutions without compromising speed
                  </p>
                </CardContent>
              </Card>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  )
}
