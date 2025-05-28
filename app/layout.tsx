import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import SmoothScrollProvider from "@/components/SmoothScrollProvider"
import ScrollToTop from "@/components/ScrollToTop"

export const metadata: Metadata = {
  title: "Floowery - Instagram Growth Analytics",
  description: "Get detailed insights about your Instagram growth and performance with Floowery's analytics dashboard.",
  generator: "v0.dev",
  keywords: "Instagram, analytics, growth, followers, social media",
  authors: [{ name: "Floowery" }],
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <ScrollToTop />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  )
}
