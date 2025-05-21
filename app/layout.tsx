import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import AnnouncementBanner from "@/components/AnnouncementBanner"
import SmoothScroll from "@/components/SmoothScroll"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Floowery - Instagram Growth Service",
  description: "Grow your Instagram with real, engaged followers. No bots, no fake accounts - just real growth.",
    generator: 'v0.dev'
}

// Add a small script to enable smooth scrolling for anchor links
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.onload = function() {
                window.scrollTo(0, 0);
              }
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <AnnouncementBanner />
        <SmoothScroll offset={80} />
        {children}
      </body>
    </html>
  )
}
