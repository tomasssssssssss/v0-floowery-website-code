"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Instagram } from "lucide-react"

// Define the review type
interface Review {
  id: string
  username: string
  handle: string
  profilePic: string
  followers: number
  review: string
  category: string
}

// Sample data for reviews
const reviewsData: Review[] = [
  // Fitness category
  {
    id: "fit1",
    username: "FitnessPro",
    handle: "@fitnesspro",
    profilePic: "/fitness-profile.png",
    followers: 45600,
    review: "Gained 10K followers in just 2 weeks! This service is amazing!",
    category: "Fitness",
  },
  {
    id: "fit2",
    username: "GymLife",
    handle: "@gymlife",
    profilePic: "/placeholder.svg?key=291h2",
    followers: 28900,
    review: "My engagement rate doubled after using this growth service.",
    category: "Fitness",
  },
  {
    id: "fit3",
    username: "YogaDaily",
    handle: "@yogadaily",
    profilePic: "/placeholder.svg?key=umkvi",
    followers: 67300,
    review: "Best investment for my fitness page. Highly recommend!",
    category: "Fitness",
  },
  {
    id: "fit4",
    username: "RunnerHigh",
    handle: "@runnerhigh",
    profilePic: "/placeholder.svg?key=8c9gl",
    followers: 34200,
    review: "From 5K to 34K followers in 3 months. Incredible results!",
    category: "Fitness",
  },
  {
    id: "fit5",
    username: "CrossFitQueen",
    handle: "@crossfitqueen",
    profilePic: "/placeholder.svg?key=3q83n",
    followers: 52800,
    review: "My CrossFit community grew exponentially. Worth every penny!",
    category: "Fitness",
  },

  // Beauty category
  {
    id: "beauty1",
    username: "GlowQueen",
    handle: "@glowqueen",
    profilePic: "/placeholder.svg?key=co8dd",
    followers: 89700,
    review: "My beauty brand took off after using this growth strategy!",
    category: "Beauty",
  },
  {
    id: "beauty2",
    username: "MakeupArtist",
    handle: "@makeupbyjen",
    profilePic: "/placeholder.svg?height=100&width=100&query=makeup%20artist",
    followers: 124500,
    review: "Got featured by major beauty brands after growing my audience.",
    category: "Beauty",
  },
  {
    id: "beauty3",
    username: "SkincareSavvy",
    handle: "@skinsavvy",
    profilePic: "/placeholder.svg?height=100&width=100&query=skincare%20profile",
    followers: 56800,
    review: "Authentic followers who actually engage with my content!",
    category: "Beauty",
  },
  {
    id: "beauty4",
    username: "NailArtPro",
    handle: "@nailartpro",
    profilePic: "/placeholder.svg?height=100&width=100&query=nail%20artist",
    followers: 78400,
    review: "My nail art page exploded! Now I'm booked months in advance.",
    category: "Beauty",
  },
  {
    id: "beauty5",
    username: "HairGoals",
    handle: "@hairgoals",
    profilePic: "/placeholder.svg?height=100&width=100&query=hairstylist",
    followers: 103700,
    review: "From local stylist to influencer with brand partnerships!",
    category: "Beauty",
  },

  // Travel category
  {
    id: "travel1",
    username: "Wanderlust",
    handle: "@wanderlust",
    profilePic: "/placeholder.svg?height=100&width=100&query=travel%20profile",
    followers: 156000,
    review: "Started getting paid travel opportunities after growing my page.",
    category: "Travel",
  },
  {
    id: "travel2",
    username: "Backpacker",
    handle: "@backpackerlife",
    profilePic: "/placeholder.svg?height=100&width=100&query=backpacker%20profile",
    followers: 78300,
    review: "From hobby to full-time travel influencer in 6 months!",
    category: "Travel",
  },
  {
    id: "travel3",
    username: "JetsetterLife",
    handle: "@jetsetterlife",
    profilePic: "/placeholder.svg?height=100&width=100&query=luxury%20travel%20profile",
    followers: 203000,
    review: "Now partnering with luxury hotels worldwide. Thank you!",
    category: "Travel",
  },
  {
    id: "travel4",
    username: "AdventureSeeker",
    handle: "@adventureseeker",
    profilePic: "/placeholder.svg?height=100&width=100&query=adventure%20profile",
    followers: 92400,
    review: "My adventure page blew up! Now I'm living my dream life.",
    category: "Travel",
  },
  {
    id: "travel5",
    username: "NomadLife",
    handle: "@nomadlife",
    profilePic: "/placeholder.svg?height=100&width=100&query=digital%20nomad",
    followers: 118700,
    review: "Working remotely while traveling thanks to my Instagram growth!",
    category: "Travel",
  },

  // Business category
  {
    id: "biz1",
    username: "StartupFounder",
    handle: "@startupfounder",
    profilePic: "/placeholder.svg?height=100&width=100&query=entrepreneur%20profile",
    followers: 67800,
    review: "Our B2B leads increased 300% after growing our Instagram.",
    category: "Business",
  },
  {
    id: "biz2",
    username: "DigitalMarketer",
    handle: "@digitalmarketer",
    profilePic: "/placeholder.svg?height=100&width=100&query=marketer%20profile",
    followers: 45600,
    review: "As a marketing expert, I'm impressed with these results.",
    category: "Business",
  },
  {
    id: "biz3",
    username: "EcommerceGuru",
    handle: "@ecommerceguru",
    profilePic: "/placeholder.svg?height=100&width=100&query=ecommerce%20profile",
    followers: 89200,
    review: "Our online store sales doubled after growing our Instagram.",
    category: "Business",
  },
  {
    id: "biz4",
    username: "SocialMediaCoach",
    handle: "@socialmediacoach",
    profilePic: "/placeholder.svg?height=100&width=100&query=social%20media%20coach",
    followers: 112500,
    review: "I recommend this to all my clients. Consistent results every time.",
    category: "Business",
  },
  {
    id: "biz5",
    username: "FinanceFreedom",
    handle: "@financefreedom",
    profilePic: "/placeholder.svg?height=100&width=100&query=finance%20influencer",
    followers: 94300,
    review: "My financial advice channel grew to 6 figures in revenue!",
    category: "Business",
  },

  // Fashion category
  {
    id: "fashion1",
    username: "StyleIcon",
    handle: "@styleicon",
    profilePic: "/placeholder.svg?height=100&width=100&query=fashion%20profile",
    followers: 178900,
    review: "From 20K to 178K followers. Now I work with top brands!",
    category: "Fashion",
  },
  {
    id: "fashion2",
    username: "FashionForward",
    handle: "@fashionforward",
    profilePic: "/placeholder.svg?height=100&width=100&query=fashion%20blogger%20profile",
    followers: 134500,
    review: "Got invited to Fashion Week after growing my audience!",
    category: "Fashion",
  },
  {
    id: "fashion3",
    username: "TrendSetter",
    handle: "@trendsetter",
    profilePic: "/placeholder.svg?height=100&width=100&query=trendy%20fashion%20profile",
    followers: 98700,
    review: "My fashion line sold out in hours thanks to my new followers.",
    category: "Fashion",
  },
  {
    id: "fashion4",
    username: "VintageLover",
    handle: "@vintagelover",
    profilePic: "/placeholder.svg?height=100&width=100&query=vintage%20fashion%20profile",
    followers: 67300,
    review: "My niche vintage page is thriving with targeted followers!",
    category: "Fashion",
  },
  {
    id: "fashion5",
    username: "StreetStyle",
    handle: "@streetstyle",
    profilePic: "/placeholder.svg?height=100&width=100&query=street%20style%20fashion",
    followers: 145600,
    review: "Brands are reaching out daily since I grew my following!",
    category: "Fashion",
  },

  // Gaming category
  {
    id: "gaming1",
    username: "GamerPro",
    handle: "@gamerpro",
    profilePic: "/placeholder.svg?height=100&width=100&query=gamer%20profile",
    followers: 245000,
    review: "Got sponsored by gaming brands after growing my audience.",
    category: "Gaming",
  },
  {
    id: "gaming2",
    username: "StreamQueen",
    handle: "@streamqueen",
    profilePic: "/placeholder.svg?height=100&width=100&query=streamer%20profile",
    followers: 189600,
    review: "My streaming career took off after growing on Instagram!",
    category: "Gaming",
  },
  {
    id: "gaming3",
    username: "ESportsChamp",
    handle: "@esportschamp",
    profilePic: "/placeholder.svg?height=100&width=100&query=esports%20profile",
    followers: 321000,
    review: "From amateur to pro gamer with a massive following!",
    category: "Gaming",
  },
  {
    id: "gaming4",
    username: "RetroGamer",
    handle: "@retrogamer",
    profilePic: "/placeholder.svg?height=100&width=100&query=retro%20gamer",
    followers: 87400,
    review: "My retro gaming content found its perfect audience!",
    category: "Gaming",
  },
  {
    id: "gaming5",
    username: "MobileGaming",
    handle: "@mobilegamingpro",
    profilePic: "/placeholder.svg?height=100&width=100&query=mobile%20gamer",
    followers: 156800,
    review: "Became a top mobile gaming influencer in just 3 months!",
    category: "Gaming",
  },
]

// Format follower count (e.g., 1500 -> 1.5K)
const formatFollowers = (count: number): string => {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M`
  }
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K`
  }
  return count.toString()
}

export default function InstagramReviews() {
  const categories = ["Fitness", "Beauty", "Travel", "Business", "Fashion", "Gaming"]
  const [activeCategory, setActiveCategory] = useState("Fitness")
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Filter reviews by active category
  const filteredReviews = reviewsData.filter((review) => review.category === activeCategory)

  // Handle scroll buttons
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef
      const scrollAmount = direction === "left" ? -300 : 300
      current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  // Check if scrolling is needed
  const [showScrollButtons, setShowScrollButtons] = useState(false)

  useEffect(() => {
    const checkScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollWidth, clientWidth } = scrollContainerRef.current
        setShowScrollButtons(scrollWidth > clientWidth)
      }
    }

    checkScroll()
    window.addEventListener("resize", checkScroll)

    return () => {
      window.removeEventListener("resize", checkScroll)
    }
  }, [activeCategory])

  useEffect(() => {
    // Reset scroll position when category changes
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0
    }
  }, [activeCategory])

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">Real Results from Real Users</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how our Instagram growth service has helped users across different niches achieve remarkable results.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-md transform scale-105"
                  : "bg-white text-blue-600 hover:bg-blue-50 border border-blue-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Reviews Container */}
        <div className="relative">
          {/* Scroll Buttons - Only show on larger screens and if scrolling is needed */}
          {showScrollButtons && (
            <>
              <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-blue-600 hover:text-white transition-colors -ml-4 hidden md:flex items-center justify-center"
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-blue-600 hover:text-white transition-colors -mr-4 hidden md:flex items-center justify-center"
                aria-label="Scroll right"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          {/* Scrollable Reviews */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex gap-6 min-w-full">
              <AnimatePresence mode="wait">
                {filteredReviews.map((review) => (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="min-w-[280px] max-w-[320px] snap-start bg-white rounded-xl shadow-md overflow-hidden flex-shrink-0 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-blue-600">
                          <Image
                            src={review.profilePic || "/placeholder.svg"}
                            alt={review.username}
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">{review.username}</h3>
                          <p className="text-sm text-blue-600">{review.handle}</p>
                        </div>
                        <div className="ml-auto">
                          <div className="flex items-center text-xs font-medium text-gray-500">
                            <Instagram className="h-3 w-3 mr-1 text-blue-600" />
                            {formatFollowers(review.followers)}
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-3 rounded-lg">
                        <p className="text-gray-700 text-sm">{review.review}</p>
                      </div>

                      <div className="mt-3 flex justify-between items-center">
                        <div className="flex items-center">
                          <span className="inline-block px-2 py-1 bg-cyan-100 text-cyan-800 text-xs font-medium rounded-full">
                            Verified
                          </span>
                        </div>
                        <div className="text-xs text-gray-500">Real Results</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile Indicator */}
        <div className="mt-6 flex justify-center gap-1 md:hidden">
          <div className="text-xs text-gray-500">Swipe to see more</div>
          <ChevronRight className="h-4 w-4 text-gray-500 animate-pulse" />
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            Start Growing Your Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
