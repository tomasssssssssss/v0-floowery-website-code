import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import SmoothScrollProvider from "@/components/SmoothScrollProvider"
import ScrollToTop from "@/components/ScrollToTop"

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ScrollToTop />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  )
}
