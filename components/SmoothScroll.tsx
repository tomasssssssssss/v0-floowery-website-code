"use client"

import { useEffect } from "react"
import { initSmoothScroll } from "@/lib/smooth-scroll"

interface SmoothScrollProps {
  offset?: number
}

export default function SmoothScroll({ offset = 80 }: SmoothScrollProps) {
  useEffect(() => {
    // Initialize smooth scrolling
    initSmoothScroll(offset)

    // Add CSS to ensure smooth scrolling works consistently across browsers
    const style = document.createElement("style")
    style.textContent = `
      html {
        scroll-behavior: smooth !important;
      }
      body {
        scroll-behavior: smooth !important;
        -webkit-overflow-scrolling: touch;
      }
      .smooth-scroll-section {
        scroll-margin-top: ${offset}px;
      }
      @media (prefers-reduced-motion: reduce) {
        html, body {
          scroll-behavior: auto !important;
        }
      }
    `
    document.head.appendChild(style)

    return () => {
      document.documentElement.style.scrollBehavior = ""
      document.head.removeChild(style)
    }
  }, [offset])

  return null
}
