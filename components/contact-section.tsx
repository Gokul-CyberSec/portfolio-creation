"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { Mail, MapPin, Phone, Terminal, Download } from "lucide-react"

// Custom Rocket Icon Component
const RocketIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C12.8 2 13.5 2.3 14 2.9L22 11L14 11.1C13.5 11.7 12.8 12 12 12S10.5 11.7 10 11.1L2 11L10 2.9C10.5 2.3 11.2 2 12 2M12 9C13.1 9 14 8.1 14 7S13.1 5 12 5 10 5.9 10 7 10.9 9 12 9M7 13.5C7 13.5 7.8 13.2 8.5 13H15.5C16.2 13.2 17 13.5 17 13.5V21C17 21.6 16.6 22 16 22H8C7.4 22 7 21.6 7 21V13.5Z"/>
  </svg>
)

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [showRocket, setShowRocket] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setShowRocket(true)
    
    // Hide rocket after animation (3 seconds for more realistic timing)
    setTimeout(() => setShowRocket(false), 3000)
    
    try {
      // Your Formspree form endpoint
      const response = await fetch('https://formspree.io/f/mrbanddb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 bg-black">
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
                <span className="text-green-400 font-mono text-sm">secure_contact.exe</span>
              </div>
              <div className="text-left">
                <p className="text-green-400 font-mono text-sm">
                  <span className="text-green-500">root@gokul:~$</span> ./establish_connection
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-green-400 font-mono mt-2">
                  SECURE COMMUNICATION CHANNEL
                </h2>
              </div>
            </div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto text-pretty font-mono">
              Initiating encrypted communication protocol. All transmissions secured.
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
                <span className="text-green-400 font-mono text-sm">message_composer.sh</span>
              </div>

              <div className="mb-4">
                <p className="text-green-400 font-mono text-sm">
                  <span className="text-green-500">gokul@secure:~$</span> nano new_message.txt
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-green-400 font-mono text-sm">
                    [SENDER_NAME]
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 bg-black/50 border-gray-700 text-green-300 font-mono focus:border-green-500"
                    placeholder="Enter your identification..."
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-green-400 font-mono text-sm">
                    [SENDER_EMAIL]
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 bg-black/50 border-gray-700 text-green-300 font-mono focus:border-green-500"
                    placeholder="your.email@domain.com"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-green-400 font-mono text-sm">
                    [MESSAGE_PAYLOAD]
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="mt-1 bg-black/50 border-gray-700 text-green-300 font-mono focus:border-green-500"
                    placeholder="Type your encrypted message here..."
                  />
                </div>
                
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="mb-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <p className="text-green-400 font-mono text-sm">
                      [SUCCESS] Message transmitted successfully! I'll get back to you soon.
                    </p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <p className="text-red-400 font-mono text-sm">
                      [ERROR] Transmission failed. Please try again or contact directly.
                    </p>
                  </div>
                )}
                
                <div className="relative">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-600 hover:bg-green-700 text-black font-mono font-bold border border-green-500 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                  >
                    {isSubmitting ? (
                      <RocketIcon className="h-4 w-4 mr-2" />
                    ) : (
                      <Terminal className="h-4 w-4 mr-2" />
                    )}
                    {isSubmitting ? 'LAUNCHING...' : 'TRANSMIT MESSAGE'}
                  </Button>
                  
                  {/* Realistic Rocket Animation */}
                  {showRocket && (
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      {/* Rocket */}
                      <div className="rocket-container">
                        <RocketIcon className="h-8 w-8 text-white rocket" />
                        {/* Exhaust Fire */}
                        <div className="exhaust-fire"></div>
                        {/* Smoke Trail */}
                        <div className="smoke-trail"></div>
                      </div>
                      {/* Particle Effects */}
                      <div className="particles">
                        <div className="particle particle-1"></div>
                        <div className="particle particle-2"></div>
                        <div className="particle particle-3"></div>
                        <div className="particle particle-4"></div>
                        <div className="particle particle-5"></div>
                      </div>
                    </div>
                  )}
                </div>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-900 border border-green-500/30 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-green-400 font-mono text-sm">connection_details.log</span>
                </div>

                <h3 className="text-xl font-mono text-green-400 mb-6">[INFO] Connection Endpoints</h3>
                <div className="space-y-4">
                  <div className="bg-black/50 border border-gray-700 rounded p-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-green-500/20 p-2 rounded">
                        <Mail className="h-4 w-4 text-green-400" />
                      </div>
                      <div>
                        <p className="font-mono text-green-400 text-sm">[EMAIL_PROTOCOL]</p>
                        <p className="text-green-300 font-mono text-sm">apsr.1231@gmail.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/50 border border-gray-700 rounded p-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-green-500/20 p-2 rounded">
                        <Phone className="h-4 w-4 text-green-400" />
                      </div>
                      <div>
                        <p className="font-mono text-green-400 text-sm">[VOICE_CHANNEL]</p>
                        <p className="text-green-300 font-mono text-sm">+91 8870961327</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/50 border border-gray-700 rounded p-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-green-500/20 p-2 rounded">
                        <MapPin className="h-4 w-4 text-green-400" />
                      </div>
                      <div>
                        <p className="font-mono text-green-400 text-sm">[LOCATION_DATA]</p>
                        <p className="text-green-300 font-mono text-sm">Chennai, Tamil Nadu, India</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 border border-blue-500/30 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-blue-400 font-mono text-sm">collaboration.txt</span>
                </div>

                <h4 className="text-lg font-mono text-blue-400 mb-4">[NOTICE] Collaboration Protocol</h4>
                <p className="text-gray-400 mb-6 leading-relaxed font-mono text-sm">
                  Always interested in new security challenges and collaborative projects. Whether you need penetration
                  testing, security consulting, or just want to discuss the latest cybersecurity trends, feel free to
                  establish connection.
                </p>
                <div className="flex gap-4">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-green-500 text-green-400 hover:bg-green-500/10 font-mono bg-transparent"
                  >
                    <Link href="/resume.pdf" download>
                      <Download className="mr-2 h-4 w-4" /> Download Resume
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .rocket-container {
          position: absolute;
          bottom: 50%;
          left: 50%;
          transform: translateX(-50%);
          animation: rocketLaunch 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          z-index: 10;
        }
        
        .rocket {
          filter: drop-shadow(0 0 8px #ffffff) drop-shadow(0 0 12px #3b82f6);
          animation: rocketShake 3s ease-out forwards;
        }
        
        .exhaust-fire {
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 12px;
          height: 20px;
          background: linear-gradient(180deg, 
            #ff4500 0%, 
            #ff6500 20%, 
            #ff8500 40%, 
            #ffa500 60%, 
            #ffff00 80%, 
            transparent 100%);
          border-radius: 50% 50% 0 0;
          animation: exhaustFlame 3s ease-out forwards;
          filter: blur(1px);
        }
        
        .exhaust-fire::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 8px;
          height: 15px;
          background: linear-gradient(180deg, 
            #ff0000 0%, 
            #ff4500 30%, 
            #ffff00 70%, 
            transparent 100%);
          border-radius: 50% 50% 0 0;
        }
        
        .smoke-trail {
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 50px;
          background: linear-gradient(180deg, 
            rgba(255, 255, 255, 0.3) 0%, 
            rgba(200, 200, 200, 0.2) 50%, 
            transparent 100%);
          border-radius: 2px;
          animation: smokeTrail 3s ease-out forwards;
          filter: blur(2px);
        }
        
        .particles {
          position: absolute;
          bottom: 50%;
          left: 50%;
          transform: translateX(-50%);
        }
        
        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: #ff6500;
          border-radius: 50%;
          animation: particleFloat 3s ease-out forwards;
        }
        
        .particle-1 { animation-delay: 0.2s; left: -10px; }
        .particle-2 { animation-delay: 0.4s; left: 10px; }
        .particle-3 { animation-delay: 0.6s; left: -5px; }
        .particle-4 { animation-delay: 0.8s; left: 5px; }
        .particle-5 { animation-delay: 1s; left: 0px; }
        
        @keyframes rocketLaunch {
          0% {
            transform: translateX(-50%) translateY(0) scale(1);
            opacity: 1;
          }
          15% {
            transform: translateX(-50%) translateY(-20px) scale(1.05);
            opacity: 1;
          }
          30% {
            transform: translateX(-50%) translateY(-60px) scale(1.1);
            opacity: 1;
          }
          50% {
            transform: translateX(-50%) translateY(-150px) scale(1);
            opacity: 1;
          }
          70% {
            transform: translateX(-50%) translateY(-300px) scale(0.8);
            opacity: 0.8;
          }
          90% {
            transform: translateX(-50%) translateY(-500px) scale(0.5);
            opacity: 0.4;
          }
          100% {
            transform: translateX(-50%) translateY(-600px) scale(0.3);
            opacity: 0;
          }
        }
        
        @keyframes rocketShake {
          0%, 15% {
            transform: rotate(0deg) scale(1);
          }
          5% {
            transform: rotate(-1deg) scale(1.02);
          }
          10% {
            transform: rotate(1deg) scale(0.98);
          }
          20% {
            transform: rotate(0deg) scale(1);
          }
          100% {
            transform: rotate(0deg) scale(1);
          }
        }
        
        @keyframes exhaustFlame {
          0% {
            height: 0px;
            opacity: 0;
          }
          10% {
            height: 15px;
            opacity: 0.8;
            transform: translateX(-50%) scaleX(1.2);
          }
          20% {
            height: 25px;
            opacity: 1;
            transform: translateX(-50%) scaleX(1);
          }
          80% {
            height: 35px;
            opacity: 1;
            transform: translateX(-50%) scaleX(0.8);
          }
          100% {
            height: 40px;
            opacity: 0;
            transform: translateX(-50%) scaleX(0.5);
          }
        }
        
        @keyframes smokeTrail {
          0% {
            height: 0px;
            opacity: 0;
          }
          30% {
            height: 30px;
            opacity: 0.6;
          }
          70% {
            height: 100px;
            opacity: 0.4;
            transform: translateX(-50%) scaleX(2);
          }
          100% {
            height: 200px;
            opacity: 0;
            transform: translateX(-50%) scaleX(4);
          }
        }
        
        @keyframes particleFloat {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          20% {
            transform: translateY(-20px) scale(1.2);
            opacity: 1;
          }
          50% {
            transform: translateY(-80px) scale(0.8);
            opacity: 0.8;
          }
          100% {
            transform: translateY(-200px) scale(0.3);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  )
}
