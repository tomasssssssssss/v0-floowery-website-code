"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Define review categories
const categories = [
  { id: "fitness", label: "Fitness" },
  { id: "beauty", label: "Beauty" },
  { id: "travel", label: "Travel" },
  { id: "food", label: "Food" },
  { id: "fashion", label: "Fashion" },
  { id: "photography", label: "Photography" },
]

// Define reviews data
const reviewsData = {
  fitness: [
    {
      id: 1,
      name: "FitnessPro",
      username: "@fitnesspro",
      image: "/diverse-fitness-trainer.png",
      text: "Gained 10K followers in just 2 weeks! This service is amazing for my fitness brand.",
    },
    {
      id: 2,
      name: "YogaLife",
      username: "@yogalife",
      image: "/diverse-yoga-instructor.png",
      text: "My yoga studio's Instagram has grown by 300% since using Floowery. Highly recommend!",
    },
    {
      id: 3,
      name: "RunnerGirl",
      username: "@runnergirl",
      image: "/lone-runner-cityscape.png",
      text: "Started getting sponsorship offers after growing my running page with Floowery.",
    },
    {
      id: 4,
      name: "GymCoach",
      username: "@gymcoach",
      image: "/diverse-fitness-coach.png",
      text: "My online coaching business took off after growing my Instagram following.",
    },
    {
      id: 5,
      name: "CrossFitKing",
      username: "@crossfitking",
      image: "/crossfit-athlete.png",
      text: "Doubled my client base after growing my Instagram with real, engaged followers.",
    },
    {
      id: 6,
      name: "FitMama",
      username: "@fitmama",
      image: "/fitness-mom.png",
      text: "As a mom fitness influencer, I needed real growth. Floowery delivered beyond expectations!",
    },
  ],
  beauty: [
    {
      id: 1,
      name: "BeautyQueen",
      username: "@beautyqueen",
      image: "/makeup-artist-applying-lipstick.png",
      text: "My beauty brand took off after using this growth strategy! Now I get PR packages weekly.",
    },
    {
      id: 2,
      name: "GlamGuru",
      username: "@glamguru",
      image: "/makeup-artist-applying-lipstick.png",
      text: "From 2K to 50K followers in 3 months. My makeup tutorials now reach so many more people!",
    },
    {
      id: 3,
      name: "SkinCareSpecialist",
      username: "@skincarespecialist",
      image: "/skincare-specialist.png",
      text: "My skincare tips reach 5x more people now. Brands are reaching out for collaborations!",
    },
    {
      id: 4,
      name: "NailArtist",
      username: "@nailartist",
      image: "/placeholder.svg?key=h1p0n",
      text: "My nail art page exploded! Now I'm fully booked 3 months in advance thanks to my growth.",
    },
    {
      id: 5,
      name: "HairStylist",
      username: "@hairstylist",
      image: "/hair-stylist.png",
      text: "Clients now book appointments after seeing my work on Instagram. Best investment ever!",
    },
    {
      id: 6,
      name: "OrganicBeauty",
      username: "@organicbeauty",
      image: "/placeholder.svg?height=48&width=48&query=organic beauty",
      text: "My organic beauty product line sales increased 200% after growing my Instagram following.",
    },
  ],
  travel: [
    {
      id: 1,
      name: "TravelBlogger",
      username: "@travelblogger",
      image: "/backpacker.png",
      text: "Started getting paid travel opportunities after growing my page with Floowery!",
    },
    {
      id: 2,
      name: "Wanderlust",
      username: "@wanderlust",
      image: "/placeholder.svg?height=48&width=48&query=travel blogger",
      text: "Hotels now invite me for free stays in exchange for content. All thanks to my Instagram growth!",
    },
    {
      id: 3,
      name: "JetSetter",
      username: "@jetsetter",
      image: "/placeholder.svg?height=48&width=48&query=luxury traveler",
      text: "My luxury travel page now gets partnership offers from high-end resorts and airlines.",
    },
    {
      id: 4,
      name: "BudgetTravel",
      username: "@budgettravel",
      image: "/placeholder.svg?height=48&width=48&query=budget traveler",
      text: "My budget travel tips reach thousands more people now. Even got a book deal!",
    },
    {
      id: 5,
      name: "SoloTraveler",
      username: "@solotraveler",
      image: "/placeholder.svg?height=48&width=48&query=solo traveler",
      text: "As a female solo traveler, growing my audience has connected me with an amazing community.",
    },
    {
      id: 6,
      name: "TravelFamily",
      username: "@travelfamily",
      image: "/placeholder.svg?height=48&width=48&query=family travelers",
      text: "Our family travel blog now gets sponsorships that help fund our adventures. Life-changing!",
    },
  ],
  food: [
    {
      id: 1,
      name: "FoodieLife",
      username: "@foodielife",
      image: "/placeholder.svg?height=48&width=48&query=food blogger",
      text: "Restaurants invite me for free tastings now that my food page has grown!",
    },
    {
      id: 2,
      name: "ChefCreations",
      username: "@chefcreations",
      image: "/placeholder.svg?height=48&width=48&query=chef cooking",
      text: "My cooking tutorials reach 10x more people. Even launched my own cookbook thanks to my following!",
    },
    {
      id: 3,
      name: "VeganEats",
      username: "@veganeats",
      image: "/placeholder.svg?height=48&width=48&query=vegan chef",
      text: "My vegan recipe page grew from 5K to 100K followers. Now I have my own product line!",
    },
    {
      id: 4,
      name: "BakingQueen",
      username: "@bakingqueen",
      image: "/placeholder.svg?height=48&width=48&query=baker with cake",
      text: "My baking business quadrupled after growing my Instagram. Now I teach online classes too!",
    },
    {
      id: 5,
      name: "CocktailMaster",
      username: "@cocktailmaster",
      image: "/placeholder.svg?height=48&width=48&query=bartender",
      text: "Brands send me free products to feature in my cocktail recipes now. All thanks to Floowery!",
    },
    {
      id: 6,
      name: "HealthyMeals",
      username: "@healthymeals",
      image: "/placeholder.svg?height=48&width=48&query=healthy meal prep",
      text: "My meal prep business took off after growing my Instagram following with real, engaged users.",
    },
  ],
  fashion: [
    {
      id: 1,
      name: "StyleIcon",
      username: "@styleicon",
      image: "/placeholder.svg?height=48&width=48&query=fashion model",
      text: "Fashion brands now send me free clothes to feature on my page. Dream come true!",
    },
    {
      id: 2,
      name: "TrendSetter",
      username: "@trendsetter",
      image: "/placeholder.svg?height=48&width=48&query=fashion influencer",
      text: "From unknown to fashion week invites in 6 months after growing my Instagram presence.",
    },
    {
      id: 3,
      name: "SustainableFashion",
      username: "@sustainablefashion",
      image: "/placeholder.svg?height=48&width=48&query=sustainable fashion",
      text: "My sustainable fashion brand's sales increased 400% after growing our Instagram following.",
    },
    {
      id: 4,
      name: "MensStyle",
      username: "@mensstyle",
      image: "/placeholder.svg?height=48&width=48&query=men's fashion",
      text: "My men's style page now gets partnership offers from major brands. Life-changing growth!",
    },
    {
      id: 5,
      name: "VintageLover",
      username: "@vintagelover",
      image: "/placeholder.svg?height=48&width=48&query=vintage fashion",
      text: "My vintage clothing store's online sales exploded after growing our Instagram presence.",
    },
    {
      id: 6,
      name: "AccessoryDesigner",
      username: "@accessorydesigner",
      image: "/placeholder.svg?height=48&width=48&query=jewelry designer",
      text: "My handmade jewelry business is now my full-time job thanks to Instagram growth.",
    },
  ],
  photography: [
    {
      id: 1,
      name: "UrbanShots",
      username: "@urbanshots",
      image: "/placeholder.svg?height=48&width=48&query=urban photographer",
      text: "Started getting paid photography gigs after growing my portfolio page on Instagram.",
    },
    {
      id: 2,
      name: "NatureCaptures",
      username: "@naturecaptures",
      image: "/placeholder.svg?height=48&width=48&query=nature photographer",
      text: "My nature photography is now featured in magazines after gaining exposure on Instagram.",
    },
    {
      id: 3,
      name: "PortraitPro",
      username: "@portraitpro",
      image: "/placeholder.svg?height=48&width=48&query=portrait photographer",
      text: "My portrait photography business is booked solid 6 months in advance now!",
    },
    {
      id: 4,
      name: "WeddingPhotos",
      username: "@weddingphotos",
      image: "/placeholder.svg?height=48&width=48&query=wedding photographer",
      text: "Doubled my wedding photography bookings after growing my Instagram portfolio.",
    },
    {
      id: 5,
      name: "FoodPhotographer",
      username: "@foodphotographer",
      image: "/placeholder.svg?height=48&width=48&query=food photographer",
      text: "Restaurants and brands now hire me for professional food photography. Dream job!",
    },
    {
      id: 6,
      name: "TravelShots",
      username: "@travelshots",
      image: "/placeholder.svg?height=48&width=48&query=travel photographer",
      text: "Travel magazines and tourism boards now reach out for collaborations. Amazing growth!",
    },
  ],
}

export default function SimpleTestimonials() {
  const [activeCategory, setActiveCategory] = useState("fitness")
  const [viewMode, setViewMode] = useState<"scroll" | "grid">("scroll")
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  const toggleViewMode = () => {
    setViewMode(viewMode === "scroll" ? "grid" : "scroll")
  }

  // Safely handle image errors
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = "/placeholder.svg?height=48&width=48&query=profile"
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#F0FBF8] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#160C29] mb-4">
            What Our <span className="text-[#59CCB1]">Clients Say</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how our Instagram growth service has helped users across different niches achieve remarkable results.
          </p>
        </div>

        {/* Controls Row */}
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
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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
            aria-label={`Switch to ${viewMode === "scroll" ? "grid" : "scroll"} view`}
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
              <path d="M16 3H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z"></path>
              <path d="M8 7h8"></path>
              <path d="M8 11h8"></path>
              <path d="M8 15h2"></path>
            </svg>
            <span>Swap View</span>
          </button>
        </div>

        {/* Grid View */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviewsData[activeCategory as keyof typeof reviewsData].map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#59CCB1]">
                      <Image
                        src={review.image || "/placeholder.svg"}
                        alt={review.name}
                        width={48}
                        height={48}
                        className="object-cover"
                        onError={handleImageError}
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{review.name}</h3>
                      <p className="text-sm text-[#59CCB1]">{review.username}</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-[#F0FBF8] to-[#E6F7F3] p-3 rounded-lg">
                    <p className="text-gray-700 text-sm">{review.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Scroll View */}
        {viewMode === "scroll" && (
          <div className="relative">
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none hidden md:block"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5 text-gray-700" />
            </button>

            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-6 pb-6 px-4 snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {reviewsData[activeCategory as keyof typeof reviewsData].map((review) => (
                <div
                  key={review.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow flex-shrink-0 w-full md:w-[350px] snap-start"
                >
                  <div className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#59CCB1]">
                        <Image
                          src={review.image || "/placeholder.svg"}
                          alt={review.name}
                          width={48}
                          height={48}
                          className="object-cover"
                          onError={handleImageError}
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{review.name}</h3>
                        <p className="text-sm text-[#59CCB1]">{review.username}</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-[#F0FBF8] to-[#E6F7F3] p-3 rounded-lg">
                      <p className="text-gray-700 text-sm">{review.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none hidden md:block"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        )}

        {/* Scroll Indicator for Mobile */}
        {viewMode === "scroll" && (
          <div className="flex justify-center gap-1 mt-4 md:hidden">
            <div className="text-xs text-gray-500">← Swipe to see more →</div>
          </div>
        )}

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
