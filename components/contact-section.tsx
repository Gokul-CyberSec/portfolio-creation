"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Terminal } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
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
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 hover:bg-green-700 text-black font-mono font-bold border border-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Terminal className="h-4 w-4 mr-2" />
                  {isSubmitting ? 'TRANSMITTING...' : 'TRANSMIT MESSAGE'}
                </Button>
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
                    variant="outline"
                    size="sm"
                    className="border-green-500 text-green-400 hover:bg-green-500/10 font-mono bg-transparent"
                  >
                    Download Resume.pdf
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
