"use client"

import { Github, Linkedin, Mail, MessageCircle } from "lucide-react"

export function SocialMediaCard() {
  return (
    <div className="max-w-fit rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 shadow-lg hover:bg-white/10 transition-all duration-500">
      <ul className="p-4 flex gap-4 list-none items-center justify-center">
        <li className="iso-pro cursor-pointer relative">
          <span className="absolute inset-0 rounded-full bg-green-500/20 border border-green-500/30 opacity-0 transition-all duration-300" />
          <span className="absolute inset-0 rounded-full bg-green-500/20 border border-green-500/30 opacity-0 transition-all duration-300" />
          <span className="absolute inset-0 rounded-full bg-green-500/20 border border-green-500/30 opacity-0 transition-all duration-300" />
          <a href="https://github.com/Gokul-CyberSec" target="_blank" rel="noopener noreferrer" className="block">
            <div className="p-4 h-16 w-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center transition-all duration-300 hover:bg-green-500/20">
              <Github className="h-6 w-6 text-green-400" />
            </div>
          </a>
          <div className="text absolute opacity-0 bg-green-500/20 backdrop-blur-sm text-green-400 px-2 py-1 rounded text-sm border border-green-500/30 transition-all duration-300 z-50">
            GitHub
          </div>
        </li>

        <li className="iso-pro cursor-pointer relative">
          <span className="absolute inset-0 rounded-full bg-blue-500/20 border border-blue-500/30 opacity-0 transition-all duration-300" />
          <span className="absolute inset-0 rounded-full bg-blue-500/20 border border-blue-500/30 opacity-0 transition-all duration-300" />
          <span className="absolute inset-0 rounded-full bg-blue-500/20 border border-blue-500/30 opacity-0 transition-all duration-300" />
          <a href="https://linkedin.com/in/gokulamaran" target="_blank" rel="noopener noreferrer" className="block">
            <div className="p-4 h-16 w-16 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center transition-all duration-300 hover:bg-blue-500/20">
              <Linkedin className="h-6 w-6 text-blue-400" />
            </div>
          </a>
          <div className="text absolute opacity-0 bg-blue-500/20 backdrop-blur-sm text-blue-400 px-2 py-1 rounded text-sm border border-blue-500/30 transition-all duration-300 z-50">
            LinkedIn
          </div>
        </li>

        <li className="iso-pro cursor-pointer relative">
          <span className="absolute inset-0 rounded-full bg-red-500/20 border border-red-500/30 opacity-0 transition-all duration-300" />
          <span className="absolute inset-0 rounded-full bg-red-500/20 border border-red-500/30 opacity-0 transition-all duration-300" />
          <span className="absolute inset-0 rounded-full bg-red-500/20 border border-red-500/30 opacity-0 transition-all duration-300" />
          <a href="mailto:apsr.1231@gmail.com" className="block">
            <div className="p-4 h-16 w-16 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center transition-all duration-300 hover:bg-red-500/20">
              <Mail className="h-6 w-6 text-red-400" />
            </div>
          </a>
          <div className="text absolute opacity-0 bg-red-500/20 backdrop-blur-sm text-red-400 px-2 py-1 rounded text-sm border border-red-500/30 transition-all duration-300 z-50">
            Email
          </div>
        </li>

        <li className="iso-pro cursor-pointer relative">
          <span className="absolute inset-0 rounded-full bg-green-600/20 border border-green-600/30 opacity-0 transition-all duration-300" />
          <span className="absolute inset-0 rounded-full bg-green-600/20 border border-green-600/30 opacity-0 transition-all duration-300" />
          <span className="absolute inset-0 rounded-full bg-green-600/20 border border-green-600/30 opacity-0 transition-all duration-300" />
          <a href="https://wa.me/+918870961327" target="_blank" rel="noopener noreferrer" className="block">
            <div className="p-4 h-16 w-16 rounded-full bg-green-600/10 border border-green-600/30 flex items-center justify-center transition-all duration-300 hover:bg-green-600/20">
              <MessageCircle className="h-6 w-6 text-green-500" />
            </div>
          </a>
          <div className="text absolute opacity-0 bg-green-600/20 backdrop-blur-sm text-green-500 px-2 py-1 rounded text-sm border border-green-600/30 transition-all duration-300 z-50">
            WhatsApp
          </div>
        </li>
      </ul>

      <style jsx>{`
        .iso-pro:hover .text {
          opacity: 1;
          transform: translate(25px, -2px) skew(-5deg);
        }

        .iso-pro:hover div:first-of-type {
          transform: translate(5px, -5px);
        }

        .iso-pro:hover span:nth-child(1) {
          opacity: 0.2;
        }

        .iso-pro:hover span:nth-child(2) {
          opacity: 0.4;
          transform: translate(5px, -5px);
        }

        .iso-pro:hover span:nth-child(3) {
          opacity: 0.6;
          transform: translate(10px, -10px);
        }
      `}</style>
    </div>
  )
}
