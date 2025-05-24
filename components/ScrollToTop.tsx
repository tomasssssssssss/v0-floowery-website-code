"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll to top when component mounts (page loads)
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo(0, 0)
  }, [pathname])

  return null // This component doesn't render anything
}
