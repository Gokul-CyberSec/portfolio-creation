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
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans bg-black text-white ${GeistSans.variable} ${GeistMono.variable}`}>
        <div className="fixed inset-0 z-0 pointer-events-none">
          <LightRays
            raysOrigin="top-left"
            raysColor="#66e3c4"
            raysSpeed={1.2}
            lightSpread={1.2}
            rayLength={2.2}
            noiseAmount={0.05}
          />
        </div>
        <div className="relative z-10">
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
