import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import TargetCursor from "@/components/TargetCursor"
import LightRays from "@/components/ui/light-rays"
import BackToTopButton from "@/components/back-to-top-button"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Gokul - Portfolio",
  description: "Cybersecurity Professional & Ethical Hacker Portfolio",
  generator: "Next.js",
  icons: {
    icon: "/hacker.png",
    shortcut: "/hacker.png",
    apple: "/hacker.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body 
        className={`font-sans bg-black text-white ${GeistSans.variable} ${GeistMono.variable}`} 
        style={{ 
          touchAction: 'pan-y', 
          WebkitOverflowScrolling: 'touch',
          overflowX: 'hidden',
          position: 'relative',
          minHeight: '100vh'
        }}
      >
        <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
          <LightRays
            raysOrigin="top-left"
            raysColor="#00ff88"
            raysSpeed={0.8}
            lightSpread={2.5}
            rayLength={3.5}
            noiseAmount={0.1}
            saturation={0.8}
            fadeDistance={0.3}
            pulsating={true}
          />
        </div>
        <div className="relative z-10 w-full">
          <Suspense fallback={null}>
            {children}
            <TargetCursor />
            <BackToTopButton />
            <Analytics />
          </Suspense>
        </div>
      </body>
    </html>
  )
}
