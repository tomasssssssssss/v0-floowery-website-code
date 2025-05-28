"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Force scroll to top with multiple methods
    const forceScrollToTop = () => {
      // Disable smooth scrolling temporarily
      document.documentElement.style.scrollBehavior = "auto"
      document.body.style.scrollBehavior = "auto"

      // Multiple scroll methods
      window.scrollTo(0, 0)
      window.scrollTo({ top: 0, left: 0, behavior: "instant" })
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0

      // Re-enable smooth scrolling after a delay
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = ""
        document.body.style.scrollBehavior = ""
      }, 100)
    }

    // Immediate scroll
    forceScrollToTop()

    // Multiple delayed attempts
    setTimeout(forceScrollToTop, 0)
    setTimeout(forceScrollToTop, 50)
    setTimeout(forceScrollToTop, 100)
    setTimeout(forceScrollToTop, 200)
  }, [pathname])

  useEffect(() => {
    // Disable browser scroll restoration
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual"
      }

      // Force scroll on page load
      window.addEventListener("load", () => {
        window.scrollTo(0, 0)
      })

      // Force scroll on beforeunload
      window.addEventListener("beforeunload", () => {
        window.scrollTo(0, 0)
      })
    }
  }, [])

  return null
}
