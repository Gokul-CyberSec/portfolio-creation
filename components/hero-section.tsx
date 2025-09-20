"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Terminal } from "lucide-react"
import { useEffect, useState } from "react"
import { LiveTime } from "./live-time"
import { SocialMediaCard } from "./social-media-card"
import { Waves } from "@/components/ui/waves-background"

export function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const fullText = "Cyber Security Engineer & Red Team Enthusiast"

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)

    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(timer)
      clearInterval(cursorTimer)
    }
  }, [])

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-black">
      <div className="absolute inset-0">
        <Waves
          lineColor="rgba(0, 255, 0, 0.15)"
          backgroundColor="transparent"
          waveSpeedX={0.01}
          waveSpeedY={0.005}
          waveAmpX={25}
          waveAmpY={12}
          xGap={15}
          yGap={40}
          friction={0.95}
          tension={0.003}
          maxCursorMove={80}
        />
      </div>

      <div className="absolute inset-0 bg-black/20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/95 backdrop-blur-sm border-2 border-green-500 rounded-lg p-8 font-mono shadow-2xl shadow-green-500/20">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-green-500/30">
              <Terminal className="h-5 w-5 text-green-400" />
              <span className="text-green-400 text-sm">gokul@portfolio:~$</span>
              <div className="ml-4">
                <LiveTime />
              </div>
              <div className="flex gap-1 ml-auto">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>

            <div className="text-left space-y-4">
              <div className="text-green-400">
                <span className="text-green-500">$</span> whoami
              </div>
              <div className="text-green-300 text-2xl sm:text-4xl lg:text-5xl font-bold">
                <span className="text-amber-400">Gokul Amaran</span>
              </div>

              <div className="text-green-400 mt-6">
                <span className="text-green-500">$</span> cat role.txt
              </div>
              <div className="text-green-300 text-lg sm:text-xl">
                {displayText}
                <span className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}>_</span>
              </div>

              <div className="text-green-400 mt-6">
                <span className="text-green-500">$</span> ls -la skills/
              </div>
              <div className="text-green-300 text-sm">
                drwxr-xr-x penetration-testing
                <br />
                drwxr-xr-x vulnerability-assessment
                <br />
                drwxr-xr-x red-team-operations
                <br />
                drwxr-xr-x security-research
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8 pt-6 border-t border-green-500/30">
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="group bg-green-600 hover:bg-green-500 text-black font-mono border-2 border-green-400"
              >
                ./view_projects.sh
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <SocialMediaCard />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-green-400 font-mono text-sm">
          <ArrowDown className="h-6 w-6 mx-auto" />
          <div>scroll_down</div>
        </div>
      </div>
    </section>
  )
}
