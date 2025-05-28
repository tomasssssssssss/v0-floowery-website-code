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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Force scroll to top immediately
              if (typeof window !== 'undefined') {
                window.scrollTo(0, 0);
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
                if ('scrollRestoration' in history) {
                  history.scrollRestoration = 'manual';
                }
              }
            `,
          }}
        />
      </head>
      <body>
        <ScrollToTop />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  )
}
