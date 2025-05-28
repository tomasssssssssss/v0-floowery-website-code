"use client"

import { useState } from "react"
import Image from "next/image"
import { Star } from "lucide-react"

// Simple review type
interface Review {
  id: string
  username: string
  handle: string
  profilePic: string
  review: string
  category: string
  rating?: number
}

// Minimal sample data
const reviewsData: Review[] = [
  {
    id: "1",
    username: "FitnessPro",
    handle: "@fitnesspro",
    profilePic: "/diverse-fitness-trainer.png",
    review: "Gained 10K followers in just 2 weeks! This service is amazing!",
    category: "Fitness",
    rating: 5,
  },
  {
    id: "2",
    username: "GlowQueen",
    handle: "@glowqueen",
    profilePic: "/placeholder.svg?key=r5owz",
    review: "My beauty brand took off after using this growth strategy!",
    category: "Beauty",
    rating: 5,
  },
  {
    id: "3",
    username: "Wanderlust",
    handle: "@wanderlust",
    profilePic: "/placeholder.svg?key=1b5e9",
    review: "Started getting paid travel opportunities after growing my page.",
    category: "Travel",
    rating: 5,
  },
]

// Categories
const categories = ["Fitness", "Beauty", "Travel"]

export default function ClientTestimonials() {
  const [activeCategory, setActiveCategory] = useState("Fitness")

  // Filter reviews by active category
  const filteredReviews = reviewsData.filter((review) => review.category === activeCategory)

  // Render star ratings
  function renderStars(rating: number) {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`h-3 w-3 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
        ))}
      </div>
    )
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#F0FBF8] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#160C29] mb-4">
            What Our <span className="text-[#59CCB1]">Clients Say</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how our Instagram growth service has helped users across different niches achieve remarkable results.
          </p>
        </div>

        {/* Simple Category Tabs */}
        <div className="flex justify-center space-x-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === category
                  ? "bg-[#160C29] text-white"
                  : "bg-white text-[#160C29] border border-[#59CCB1]/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Simple Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <div key={review.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              <div className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#59CCB1]">
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
                    <p className="text-sm text-[#59CCB1]">{review.handle}</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#F0FBF8] to-[#E6F7F3] p-3 rounded-lg">
                  <p className="text-gray-700 text-sm">{review.review}</p>
                </div>

                <div className="mt-3">{review.rating && renderStars(review.rating)}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <a href="#pricing" className="inline-block bg-[#160C29] text-white font-medium px-8 py-3 rounded-full">
            Start Growing Your Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
