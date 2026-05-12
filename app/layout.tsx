// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ParticleBackground from '../components/ParticleBackground'
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Marcus Steven A. Basanta | Game Development Portfolio',
  description: 'Portfolio showcasing Game Assets and Coding Projects.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-950 text-slate-200 antialiased relative`}>
        
        {/* Render the interactive sparks globally behind everything */}
        <ParticleBackground /> 
        
        {/* The main content (your page.tsx or gallery/page.tsx) */}
        <div className="relative z-10">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}