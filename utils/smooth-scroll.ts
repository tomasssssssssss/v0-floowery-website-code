/**
 * Smoothly scrolls to the specified element
 * @param elementId The ID of the element to scroll to
 * @param offset Optional offset from the top of the element (default: 80px)
 * @param duration Optional duration of the scroll animation in ms (default: 800ms)
 */
export function smoothScrollTo(elementId: string, offset = 80, duration = 800) {
  const element = document.getElementById(elementId)
  if (!element) return

  const elementPosition = element.getBoundingClientRect().top
  const offsetPosition = elementPosition + window.pageYOffset - offset

  const startTime = performance.now()
  const startPosition = window.pageYOffset

  function scrollAnimation(currentTime: number) {
    const elapsedTime = currentTime - startTime
    const progress = Math.min(elapsedTime / duration, 1)

    // Easing function: easeInOutCubic
    const ease = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2

    window.scrollTo(0, startPosition + (offsetPosition - startPosition) * ease)

    if (progress < 1) {
      requestAnimationFrame(scrollAnimation)
    }
  }

  requestAnimationFrame(scrollAnimation)
}

/**
 * Sets up smooth scrolling for all anchor links on the page
 */
export function setupSmoothScrolling() {
  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement
    const anchor = target.closest('a[href^="#"]')

    if (anchor) {
      e.preventDefault()
      const targetId = anchor.getAttribute("href")?.substring(1)
      if (targetId) {
        smoothScrollTo(targetId)
      }
    }
  })
}
