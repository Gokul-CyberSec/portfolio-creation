import { Shield, Bug, Target, Terminal } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="bg-gray-900 border-2 border-green-500 rounded-lg p-6 font-mono inline-block">
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="h-5 w-5 text-green-400" />
                <span className="text-green-400">$</span>
                <span className="text-green-300">cat about.md</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-green-300 mb-4"># About Me</h2>
              <p className="text-green-200 max-w-3xl text-lg">
                Passionate Cyber Security Engineer with hands-on experience in Red Teaming, Bug Hunting, and Threat
                Analysis.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-gray-900 border-2 border-green-500 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-green-500/30">
                <span className="text-green-400 font-mono text-sm">image_viewer.exe</span>
                <div className="flex gap-1 ml-auto">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
              </div>
              <img
                src="/professional-headshot-of-a-developer.jpg"
                alt="Gokul Amaran - Professional headshot"
                className="rounded border-2 border-green-500/30 w-full"
              />
            </div>

            <div className="bg-gray-900 border-2 border-green-500 rounded-lg p-6 font-mono">
              <div className="text-green-400 mb-4">
                <span className="text-green-500">$</span> cat journey.txt
              </div>
              <div className="space-y-4 text-green-300">
                <p className="leading-relaxed">
                  &gt; My journey in tech started with curiosity about how systems work. Today, I specialize in
                  uncovering vulnerabilities and strengthening defenses.
                </p>
                <div className="text-green-400">
                  <span className="text-green-500">$</span> cat interests.txt
                </div>
                <p className="leading-relaxed">
                  &gt; When not hunting bugs or simulating attacks, I explore cybersecurity trends, contribute to
                  open-source projects, and share insights through tech blogs.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border-2 border-green-500 rounded-lg p-6 font-mono mb-12">
            <div className="text-green-400 mb-4">
              <span className="text-green-500">$</span> cat recent_achievements.txt
            </div>
            <div className="bg-gray-800/50 border border-green-500/30 rounded p-4">
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl mt-1">🛡️</span>
                <div>
                  <h4 className="text-green-300 font-semibold mb-2">Ethical Hacking Contribution</h4>
                  <p className="text-green-200 leading-relaxed">
                    Responsible Disclosure: Identified Authentication Bypass vulnerability (jackjones.in – Bestseller Group)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
