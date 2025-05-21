import type React from "react"
/**
 * Utility for smooth scrolling to elements or positions
 */

// Options for smooth scrolling
export interface SmoothScrollOptions {
  offset?: number
  duration?: number
  behavior?: ScrollBehavior
  callback?: () => void
}

/**
 * Smoothly scrolls to an element by ID
 */
export function scrollToElement(elementId: string, options: SmoothScrollOptions = {}): void {
  const { offset = 0, behavior = "smooth", callback } = options

  const element = document.getElementById(elementId)
  if (!element) {
    console.warn(`Element with id "${elementId}" not found.`)
    return
  }

  const elementPosition = element.getBoundingClientRect().top
  const offsetPosition = elementPosition + window.pageYOffset - offset

  window.scrollTo({
    top: offsetPosition,
    behavior,
  })

  if (callback) {
    // Execute callback after animation completes
    setTimeout(callback, 1000)
  }
}

/**
 * Smoothly scrolls to a specific position
 */
export function scrollToPosition(position: number, options: SmoothScrollOptions = {}): void {
  const { behavior = "smooth", callback } = options

  window.scrollTo({
    top: position,
    behavior,
  })

  if (callback) {
    // Execute callback after animation completes
    setTimeout(callback, 1000)
  }
}

/**
 * Handles smooth scrolling for anchor links
 */
export function handleAnchorLinkClick(e: React.MouseEvent<HTMLAnchorElement>, options: SmoothScrollOptions = {}): void {
  e.preventDefault()

  const href = e.currentTarget.href
  const targetId = href.includes("#") ? href.split("#").pop() : ""

  if (targetId) {
    scrollToElement(targetId, options)

    // Update URL without scrolling
    window.history.pushState({}, "", href)
  }
}

/**
 * Initialize smooth scrolling for all anchor links on the page
 */
export function initSmoothScroll(offset = 0): void {
  if (typeof window === "undefined") return

  // Apply smooth scrolling to the document
  document.documentElement.style.scrollBehavior = "smooth"

  // Handle initial hash in URL
  setTimeout(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1)
      scrollToElement(id, { offset })
    }
  }, 100)
}
