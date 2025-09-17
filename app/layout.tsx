import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import TargetCursor from '@/components/TargetCursor'
import LightRays from '@/components/ui/light-rays'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <div className="fixed inset-0 z-0 pointer-events-none">
          <LightRays raysOrigin="top-left" raysColor="#66e3c4" raysSpeed={1.2} lightSpread={1.2} rayLength={2.2} noiseAmount={0.05} />
        </div>
        <div className="relative z-10">
          {children}
          <TargetCursor />
          <Analytics />
        </div>
      </body>
    </html>
  )
}
