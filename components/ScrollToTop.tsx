"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Multiple methods to ensure scroll to top works
    const scrollToTop = () => {
      try {
        // Method 1: Standard scroll
        window.scrollTo(0, 0)

        // Method 2: Smooth scroll
        window.scrollTo({ top: 0, left: 0, behavior: "instant" })

        // Method 3: Document element scroll
        if (document.documentElement) {
          document.documentElement.scrollTop = 0
        }

        // Method 4: Body scroll
        if (document.body) {
          document.body.scrollTop = 0
        }
      } catch (error) {
        console.warn("Scroll to top failed:", error)
      }
    }

    // Immediate scroll
    scrollToTop()

    // Delayed scroll for safety
    const timeoutId = setTimeout(scrollToTop, 100)

    return () => clearTimeout(timeoutId)
  }, [pathname])

  useEffect(() => {
    // Disable scroll restoration
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"
    }
  }, [])

  return null
}
