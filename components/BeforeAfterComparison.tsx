"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ChevronLeft, ChevronRight, Instagram, Users, TrendingUp } from "lucide-react"

interface Example {
  id: number
  beforeImage: string
  afterImage: string
  beforeFollowers: string
  afterFollowers: string
  verified?: boolean
  category?: string
  username?: string
}

export default function BeforeAfterComparison() {
  // Define categories
  const categories = [
    { id: "all", label: "All Results" },
    { id: "influencer", label: "Influencers" },
    { id: "business", label: "Businesses" },
    { id: "personal", label: "Personal" },
    { id: "highest-growth", label: "Highest Growth" },
  ]

  const examples: Example[] = [
    // Original examples
    {
      id: 1,
      beforeImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sn%C3%ADmka%20obrazovky%202025-05-15%20210427-yTcRIV0dgiKTuPoyroMNAqrkTRdvZM.png",
      afterImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sn%C3%ADmka%20obrazovky%202025-05-15%20210440-t9FAWVUH7xYw4Ay9FAtg7RTQ3iImRg.png",
      beforeFollowers: "572",
      afterFollowers: "3,904",
      category: "personal",
      username: "@fitness_enthusiast",
    },
    {
      id: 2,
      beforeImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sn%C3%ADmka%20obrazovky%202025-05-15%20210357-CHnLhORs9hpsGb5vDwP5mTQXNVSZvO.png",
      afterImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sn%C3%ADmka%20obrazovky%202025-05-15%20210413-npTW8Sh9mYQ6mQ81vtRhvC81LRuj1V.png",
      beforeFollowers: "1,286",
      afterFollowers: "4,320",
      category: "personal",
      username: "@travel_blogger",
    },
    {
      id: 3,
      beforeImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sn%C3%ADmka%20obrazovky%202025-05-15%20210454-CK9shQBhye2TCrWf1MfIwWb8gZOZhX.png",
      afterImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sn%C3%ADmka%20obrazovky%202025-05-15%20210508-A5WBVA7zIzTLKbVplJC1RBqs3u3yYc.png",
      beforeFollowers: "12.3K",
      afterFollowers: "88.1K",
      verified: true,
      category: "influencer",
      username: "@fashion_icon",
    },
    {
      id: 4,
      beforeImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sn%C3%ADmka%20obrazovky%202025-05-15%20210517-g05MIcJBcZo1lx7Hf23SLpHomg8y3F.png",
      afterImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sn%C3%ADmka%20obrazovky%202025-05-15%20210528-fythWTdFUbQetDrMg6fENTShSr38jq.png",
      beforeFollowers: "15.7K",
      afterFollowers: "27.4K",
      verified: true,
      category: "influencer",
      username: "@lifestyle_guru",
    },
    {
      id: 5,
      beforeImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sn%C3%ADmka%20obrazovky%202025-05-15%20210541-5jUgNi87ppRYbEfWAV9K6wAZnklYl5.png",
      afterImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sn%C3%ADmka%20obrazovky%202025-05-15%20210551-yYizAk6txhFJia3rK2YDc32L4nsBnA.png",
      beforeFollowers: "975",
      afterFollowers: "5,547",
      category: "personal",
      username: "@fitness_coach",
    },

    // New examples
    {
      id: 6,
      beforeImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sn%C3%ADmka%20obrazovky%202025-05-15%20210603-49jk0keLeo7AyUwzTlEnktOOOgRzGD.png",
      afterImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sn%C3%ADmka%20obrazovky%202025-05-15%20210613-XjCxejkiXjIRumhOnbkNjb16FqaG4E.png",
      beforeFollowers: "24.4K",
      afterFollowers: "52.8K",
      verified: true,
      category: "influencer",
      username: "@iambeadixon",
    },
    {
      id: 7,
      beforeImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sn%C3%ADmka%20obrazovky%202025-05-15%20210627-Vx9sW0QskFhsXtDhp2e8EZQ85XObla.png",
      afterImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sn%C3%ADmka%20obrazovky%202025-05-15%20210642-6Asr1FY8WNUKIjCi9sgD8qiKc5wnIJ.png",
      beforeFollowers: "12.5K",
      afterFollowers: "40.5K",
      verified: true,
      category: "business",
      username: "@swansit",
    },
    {
      id: 8,
      beforeImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sn%C3%ADmka%20obrazovky%202025-05-15%20210726-zfM6Z9U4Tuymz6hAGX6eXkIaPVIYrQ.png",
      afterImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sn%C3%ADmka%20obrazovky%202025-05-15%20210736-FeM7fBhs4JKkHoAeyL4tLDcvRW7y2b.png",
      beforeFollowers: "2,764",
      afterFollowers: "6,348",
      verified: true,
      category: "business",
      username: "@paulgunnjr",
    },
    {
      id: 9,
      beforeImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sn%C3%ADmka%20obrazovky%202025-05-15%20210749-OHcC0Qib5jcLDLi5xSLhaAJNvEPvV9.png",
      afterImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sn%C3%ADmka%20obrazovky%202025-05-15%20210759-r7YiQMvNeWSowiEPSJdTOQWeHAQ8fZ.png",
      beforeFollowers: "4,797",
      afterFollowers: "11.2K",
      verified: true,
      category: "influencer",
      username: "@rohitbb",
    },
    {
      id: 10,
      beforeImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sn%C3%ADmka%20obrazovky%202025-05-15%20210807-mZQO3ZJm9depv0BLvruUHNKfzVjfeu.png",
      afterImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sn%C3%ADmka%20obrazovky%202025-05-15%20210816-UWff8KkVgX9ApR9PLDqoyVWgInz2hy.png",
      beforeFollowers: "304",
      afterFollowers: "2,404",
      verified: true,
      category: "personal",
      username: "@alden_mills",
    },
    {
      id: 11,
      beforeImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sn%C3%ADmka%20obrazovky%202025-05-15%20210833-YJ2mAxShKOuKZSBVRXdTkh6ppRDgHj.png",
      afterImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sn%C3%ADmka%20obrazovky%202025-05-15%20210841-IAGNX2lq1u0bslfUtwErr0bN35N74J.png",
      beforeFollowers: "248",
      afterFollowers: "8,368",
      verified: true,
      category: "business",
      username: "@marloncnichols",
    },
  ]

  const [activeCategory, setActiveCategory] = useState("all")
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeExample, setActiveExample] = useState<number | null>(null)
  const [viewMode, setViewMode] = useState<"scroll" | "stack">("scroll")
  const [currentStackIndex, setCurrentStackIndex] = useState(0)

  const toggleViewMode = () => {
    setViewMode(viewMode === "scroll" ? "stack" : "scroll")
    // Reset to first example when switching to stack view
    if (viewMode === "scroll") {
      setCurrentStackIndex(0)
    }
  }

  const goToNextExample = () => {
    setCurrentStackIndex((prev) => (prev < filteredExamples.length - 1 ? prev + 1 : prev))
  }

  const goToPrevExample = () => {
    setCurrentStackIndex((prev) => (prev > 0 ? prev - 1 : prev))
  }

  // Enhanced smooth scrolling implementation
  useEffect(() => {
    // Apply smooth scrolling to the entire document
    document.documentElement.style.scrollBehavior = "smooth"

    // Add smooth scrolling class to body
    document.body.classList.add("smooth-scroll")

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
      .smooth-scroll {
        scroll-behavior: smooth !important;
        -webkit-overflow-scrolling: touch;
      }
      .scroll-container {
        scroll-behavior: smooth !important;
        transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
      }
      .scroll-snap-container {
        scroll-snap-type: y proximity;
        scroll-padding: 1rem;
      }
      .scroll-snap-item {
        scroll-snap-align: start;
        scroll-margin-top: 2rem;
      }
      @media (prefers-reduced-motion: reduce) {
        html, body, .smooth-scroll, .scroll-container {
          scroll-behavior: auto !important;
          transition: none !important;
        }
      }
    `
    document.head.appendChild(style)

    // Clean up when component unmounts
    return () => {
      document.documentElement.style.scrollBehavior = ""
      document.body.classList.remove("smooth-scroll")
      document.head.removeChild(style)
    }
  }, [])

  // Scroll to section on load
  useEffect(() => {
    // Ensure smooth scrolling to the section if it's targeted in the URL
    if (window.location.hash === "#results") {
      setTimeout(() => {
        const resultsSection = document.getElementById("results")
        if (resultsSection) {
          resultsSection.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }, 500)
    }
  }, [])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeExample !== null) {
        if (e.key === "ArrowDown" || e.key === "j") {
          e.preventDefault()
          const nextExample = Math.min(activeExample + 1, filteredExamples.length - 1)
          scrollToExample(nextExample)
        } else if (e.key === "ArrowUp" || e.key === "k") {
          e.preventDefault()
          const prevExample = Math.max(activeExample - 1, 0)
          scrollToExample(prevExample)
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [activeExample])

  // Detect which example is currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number.parseInt(entry.target.id.split("-")[1])
            setActiveExample(id)
          }
        })
      },
      {
        root: null,
        rootMargin: "-10% 0px -10% 0px",
        threshold: 0.5,
      },
    )

    const exampleElements = document.querySelectorAll("[id^='example-']")
    exampleElements.forEach((element) => observer.observe(element))

    return () => {
      exampleElements.forEach((element) => observer.unobserve(element))
    }
  }, [activeCategory])

  const scrollToExample = (id: number) => {
    const exampleElement = document.getElementById(`example-${id}`)
    if (exampleElement) {
      exampleElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
      setActiveExample(id)
    }
  }

  // Filter examples based on selected category
  const filteredExamples =
    activeCategory === "all"
      ? examples
      : activeCategory === "highest-growth"
        ? [...examples].sort((a, b) => {
            const parseFollowers = (str: string) => {
              if (str.includes("K")) {
                return Number.parseFloat(str.replace("K", "")) * 1000
              }
              return Number.parseFloat(str.replace(/,/g, ""))
            }

            const aBeforeCount = parseFollowers(a.beforeFollowers)
            const aAfterCount = parseFollowers(a.afterFollowers)
            const aGrowthPercent = (aAfterCount - aBeforeCount) / aBeforeCount

            const bBeforeCount = parseFollowers(b.beforeFollowers)
            const bAfterCount = parseFollowers(b.afterFollowers)
            const bGrowthPercent = (bAfterCount - bBeforeCount) / bBeforeCount

            return bGrowthPercent - aGrowthPercent
          })
        : examples.filter((example) => example.category === activeCategory)

  return (
    <section
      id="results"
      ref={sectionRef}
      className="py-10 px-2 sm:px-4 bg-[#F0F0F0] dark:bg-gray-900 scroll-mt-16 w-full scroll-container scroll-snap-container"
    >
      {/* Wider container for the entire section */}
      <div className="max-w-[1400px] w-full mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#160C29] mb-4">
            Real <span className="text-[#59CCB1]">Results</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            See how our Instagram growth service has helped users across different niches achieve remarkable follower
            growth.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? "bg-[#160C29] text-white"
                      : "bg-white text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <button
              onClick={toggleViewMode}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#F0FBF8] border border-[#59CCB1] text-[#160C29] hover:bg-[#E6F7F3] transition-colors"
              aria-label={`Switch to ${viewMode === "scroll" ? "stack" : "scroll"} view`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                {viewMode === "scroll" ? (
                  <>
                    {/* Stack icon */}
                    <rect x="4" y="4" width="16" height="6" rx="1" />
                    <rect x="4" y="14" width="16" height="6" rx="1" />
                  </>
                ) : (
                  <>
                    {/* Scroll icon */}
                    <line x1="17" y1="10" x2="3" y2="10" />
                    <line x1="21" y1="6" x2="3" y2="6" />
                    <line x1="21" y1="14" x2="3" y2="14" />
                    <line x1="17" y1="18" x2="3" y2="18" />
                  </>
                )}
              </svg>
              <span>{viewMode === "scroll" ? "Stack View" : "Scroll View"}</span>
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            <div className="flex items-center bg-[#160C29] text-white px-4 py-2 rounded-full">
              <Users className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">10,000+ Satisfied Clients</span>
            </div>
            <div className="flex items-center bg-[#59CCB1] text-white px-4 py-2 rounded-full">
              <Instagram className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">100% Real Followers</span>
            </div>
            <div className="flex items-center bg-[#160C29] text-white px-4 py-2 rounded-full">
              <TrendingUp className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Average 200% Growth</span>
            </div>
          </div>
        </div>

        {/* Navigation dots for examples */}
        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 hidden lg:flex flex-col gap-2">
          {filteredExamples.map((example, index) => (
            <button
              key={example.id}
              onClick={() => scrollToExample(example.id)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeExample === example.id ? "bg-[#59CCB1] scale-125" : "bg-[#160C29] opacity-50 hover:opacity-75"
              }`}
              aria-label={`Go to example ${index + 1}`}
            />
          ))}
        </div>

        {/* Wider container for examples */}
        {viewMode === "scroll" ? (
          <div className="space-y-12 w-full mx-auto scroll-container">
            {filteredExamples.map((example) => (
              <ExampleCard key={example.id} example={example} />
            ))}
          </div>
        ) : (
          <div className="w-full mx-auto">
            {/* Stack view with navigation */}
            <div className="relative">
              <ExampleCard example={filteredExamples[currentStackIndex]} />

              {/* Navigation controls */}
              <div className="flex justify-between mt-6">
                <button
                  onClick={goToPrevExample}
                  disabled={currentStackIndex === 0}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                    currentStackIndex === 0
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-[#160C29] text-white hover:bg-[#2A1B45]"
                  } transition-colors`}
                >
                  <ChevronLeft className="h-5 w-5" />
                  Previous
                </button>

                <div className="flex items-center gap-2">
                  <span className="text-[#160C29] font-medium">
                    {currentStackIndex + 1} of {filteredExamples.length}
                  </span>

                  {/* Pagination dots */}
                  <div className="hidden md:flex items-center gap-1 mx-4">
                    {filteredExamples.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentStackIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          currentStackIndex === index
                            ? "bg-[#59CCB1] scale-150"
                            : "bg-[#160C29] opacity-30 hover:opacity-60"
                        }`}
                        aria-label={`Go to example ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <button
                  onClick={goToNextExample}
                  disabled={currentStackIndex === filteredExamples.length - 1}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                    currentStackIndex === filteredExamples.length - 1
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-[#160C29] text-white hover:bg-[#2A1B45]"
                  } transition-colors`}
                >
                  Next
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Stats Section - Wider */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
          <div className="bg-white p-4 rounded-xl shadow-lg border-l-4 border-[#59CCB1]">
            <h3 className="text-2xl font-bold text-[#160C29] mb-1">200%+</h3>
            <p className="text-gray-600">Average follower growth within 3 months</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-lg border-l-4 border-[#59CCB1]">
            <h3 className="text-2xl font-bold text-[#160C29] mb-1">30 Days</h3>
            <p className="text-gray-600">See significant results in just one month</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-lg border-l-4 border-[#59CCB1]">
            <h3 className="text-2xl font-bold text-[#160C29] mb-1">100%</h3>
            <p className="text-gray-600">Real followers with genuine engagement</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <a
            href="#pricing"
            className="inline-block bg-[#160C29] text-white font-medium px-8 py-3 rounded-full hover:bg-[#2A1B45] transition-colors"
          >
            Start Growing Your Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

function ExampleCard({ example }: { example: Example }) {
  const [isShowingAfter, setIsShowingAfter] = useState(true)
  const [imageErrors, setImageErrors] = useState({
    before: false,
    after: false,
  })

  const cardRef = useRef<HTMLDivElement>(null)
  const scrollPositionRef = useRef(0)
  const isTransitioningRef = useRef(false)

  // Enhanced scroll handling
  useEffect(() => {
    // Save scroll position before state change
    scrollPositionRef.current = window.scrollY
  }, [])

  // Improved smooth scrolling after state change
  useEffect(() => {
    if (!cardRef.current || isTransitioningRef.current) return

    isTransitioningRef.current = true

    const handleSmoothScroll = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const cardHeight = rect.height

        // Check if card is taller than viewport
        if (cardHeight > windowHeight) {
          // For tall cards, scroll to top of card
          window.scrollTo({
            top: window.scrollY + rect.top - 20,
            behavior: "smooth",
          })
        } else {
          // For smaller cards, center them in viewport
          const cardCenter = rect.top + cardHeight / 2
          const viewportCenter = windowHeight / 2
          const scrollAdjustment = cardCenter - viewportCenter

          if (Math.abs(scrollAdjustment) > 50) {
            // Only scroll if adjustment is significant
            window.scrollTo({
              top: window.scrollY + scrollAdjustment,
              behavior: "smooth",
            })
          }
        }

        // Reset transition flag after animation completes
        setTimeout(() => {
          isTransitioningRef.current = false
        }, 800)
      }
    }

    // Delay to allow for DOM updates and animations to start
    const timeoutId = setTimeout(handleSmoothScroll, 100)
    return () => clearTimeout(timeoutId)
  }, [isShowingAfter])

  const handleImageError = useCallback(
    (type: "before" | "after") => {
      console.log(`Error loading ${type} image:`, type === "before" ? example.beforeImage : example.afterImage)
      setImageErrors((prev) => ({
        ...prev,
        [type]: true,
      }))
    },
    [example.afterImage, example.beforeImage],
  )

  const toggleView = useCallback(() => {
    if (isTransitioningRef.current) return

    // Save current scroll position before toggle
    scrollPositionRef.current = window.scrollY

    // Toggle the view state
    setIsShowingAfter((prev) => !prev)
  }, [])

  // Determine image sources with fallbacks
  const beforeImageSrc = imageErrors.before ? "/generic-social-media-profile.png" : example.beforeImage
  const afterImageSrc = imageErrors.after ? "/generic-social-media-profile.png" : example.afterImage

  // Calculate growth
  const calculateGrowth = () => {
    // Parse the follower counts and calculate the real difference
    const parseFollowers = (str: string) => {
      if (str.includes("K")) {
        return Number.parseFloat(str.replace("K", "")) * 1000
      }
      return Number.parseFloat(str.replace(/,/g, ""))
    }

    const beforeCount = parseFollowers(example.beforeFollowers)
    const afterCount = parseFollowers(example.afterFollowers)
    const growth = afterCount - beforeCount
    const growthPercent = Math.round((growth / beforeCount) * 100)

    // Format the growth number
    const formatNumber = (num: number) => {
      if (num >= 1000) {
        return `${(num / 1000).toFixed(1).replace(/\.0$/, "")}K`
      }
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

    return {
      raw: `+${formatNumber(growth)}`,
      percent: `+${growthPercent}%`,
    }
  }

  const growth = calculateGrowth()

  return (
    <div
      ref={cardRef}
      className="bg-white overflow-hidden rounded-2xl shadow-xl transition-all duration-700 max-w-[1200px] mx-auto scroll-container scroll-snap-item"
      id={`example-${example.id}`}
    >
      <div className="relative">
        {/* Image Container - Improved for mobile and wider screens */}
        <div
          className="relative cursor-pointer overflow-hidden w-full transition-all duration-700"
          onClick={toggleView}
          role="button"
          tabIndex={0}
          aria-label="Toggle between before and after view"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              toggleView()
              e.preventDefault()
            }
          }}
        >
          <AnimatePresence mode="wait">
            {isShowingAfter ? (
              <motion.div
                key="after"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="flex justify-center w-full"
              >
                <div className="w-full max-w-full sm:max-w-[95%] md:max-w-[90%] lg:max-w-[85%] relative transition-all duration-700">
                  <Image
                    src={afterImageSrc || "/placeholder.svg"}
                    alt="Instagram profile after using Floowery"
                    width={1000}
                    height={1200}
                    className="object-contain w-full h-auto min-w-[320px] max-h-[800px] transition-all duration-700"
                    onError={() => handleImageError("after")}
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 95vw, (max-width: 1024px) 90vw, 85vw"
                    style={{ objectFit: "contain", width: "100%" }}
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-[#160C29]/40 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-white px-6 py-3 rounded-full flex items-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <span className="text-[#59CCB1] font-medium mr-2">See Before</span>
                    <ArrowRight className="h-5 w-5 text-[#160C29] rotate-180" />
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="before"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="flex justify-center w-full"
              >
                <div className="w-full max-w-full sm:max-w-[95%] md:max-w-[90%] lg:max-w-[85%] relative transition-all duration-700">
                  <Image
                    src={beforeImageSrc || "/placeholder.svg"}
                    alt="Instagram profile before using Floowery"
                    width={1000}
                    height={1200}
                    className="object-contain w-full h-auto min-w-[320px] max-h-[800px] transition-all duration-700"
                    onError={() => handleImageError("before")}
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 95vw, (max-width: 1024px) 90vw, 85vw"
                    style={{ objectFit: "contain", width: "100%" }}
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-[#160C29]/40 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-white px-6 py-3 rounded-full flex items-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <span className="text-[#59CCB1] font-medium mr-2">See After Results</span>
                    <ArrowRight className="h-5 w-5 text-[#160C29]" />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Info Section */}
      <div className="p-4 sm:p-6 bg-[#F0F0F0]">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 max-w-[1100px] mx-auto">
          <div>
            <div
              className={`px-3 py-1 rounded-full text-white text-sm font-medium mb-3 inline-block ${isShowingAfter ? "bg-[#59CCB1]" : "bg-[#160C29]"}`}
            >
              {isShowingAfter ? "After Floowery" : "Before Floowery"}
            </div>

            <div className="flex items-center mb-2">
              <span className="font-bold text-[#160C29]">Followers:</span>
              <div className="ml-2 relative h-8 overflow-hidden">
                <AnimatePresence mode="wait">
                  {!isShowingAfter ? (
                    <motion.span
                      key="before-followers"
                      className="absolute text-[#160C29] font-bold text-xl"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {example.beforeFollowers}
                    </motion.span>
                  ) : (
                    <motion.span
                      key="after-followers"
                      className="absolute text-[#160C29] font-bold text-xl"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {example.afterFollowers}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </div>
            {isShowingAfter && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-sm font-medium px-3 py-1 bg-[#59CCB1] text-white rounded-full inline-block"
              >
                {growth.raw} followers ({growth.percent})
              </motion.div>
            )}
          </div>

          <button
            onClick={toggleView}
            className="bg-[#160C29] hover:bg-[#59CCB1] text-white px-6 py-3 rounded-lg transition-all duration-400 ease-in-out text-base font-medium flex items-center justify-center shadow-md hover:shadow-lg transform hover:scale-105"
            aria-label={isShowingAfter ? "View before image" : "View after image"}
          >
            {isShowingAfter ? (
              <>
                <ChevronLeft className="h-5 w-5 mr-2" />
                View Before
              </>
            ) : (
              <>
                View After
                <ChevronRight className="h-5 w-5 ml-2" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
