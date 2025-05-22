"use client"

import type React from "react"

import { useEffect } from "react"
import { setupSmoothScrolling } from "@/utils/smooth-scroll"

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // Set up smooth scrolling for all anchor links
    setupSmoothScrolling()

    // Apply smooth scrolling to the document
    document.documentElement.style.scrollBehavior = "smooth"

    // Add smooth scrolling class to body
    document.body.classList.add("smooth-scroll")

    return () => {
      // Clean up
      document.documentElement.style.scrollBehavior = ""
      document.body.classList.remove("smooth-scroll")
    }
  }, [])

  return <>{children}</>
}
