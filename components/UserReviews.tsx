"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

interface Review {
  id: number
  text: string
  author: string
  rating: number
  date: string
}

export default function UserReviews() {
  // Sample review data
  const reviews: Review[] = [
    {
      id: 1,
      text: "Excellent service! I gained over 500 real followers in just a week. The engagement on my posts has increased significantly.",
      author: "Jessica M.",
      rating: 5,
      date: "2 days ago",
    },
    {
      id: 2,
      text: "Very satisfied with the followers! They're all real accounts and many of them engage with my content regularly.",
      author: "Michael T.",
      rating: 5,
      date: "1 week ago",
    },
    {
      id: 3,
      text: "Great customer support! Had a small issue with my order and they resolved it immediately. Very professional team.",
      author: "Sarah K.",
      rating: 4,
      date: "2 weeks ago",
    },
    {
      id: 4,
      text: "Fast delivery, highly recommend! I started seeing new followers within hours of placing my order.",
      author: "David R.",
      rating: 5,
      date: "3 weeks ago",
    },
    {
      id: 5,
      text: "Outstanding experience! The quality of followers exceeded my expectations. Will definitely use again.",
      author: "Emma L.",
      rating: 5,
      date: "1 month ago",
    },
    {
      id: 6,
      text: "Will use again for sure! This is my second time using Floowery and I'm just as impressed as the first time.",
      author: "James P.",
      rating: 5,
      date: "1 month ago",
    },
  ]

  const [currentPage, setCurrentPage] = useState(0)
  const reviewsPerPage = 3
  const totalPages = Math.ceil(reviews.length / reviewsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const currentReviews = reviews.slice(currentPage * reviewsPerPage, (currentPage + 1) * reviewsPerPage)

  return (
    <section className="py-16 px-6 bg-[#F0F0F0]">
      <div className="container mx-auto max-w-6xl">
        <h3 className="text-3xl font-bold text-center text-[#160C29] mb-12">
          What Our <span className="text-[#160C29]">Users Say</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-xl shadow-md p-6 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4">&ldquo;{review.text}&rdquo;</p>
              <div className="flex justify-between items-center">
                <p className="font-medium text-[#160C29]">{review.author}</p>
                <p className="text-xs text-gray-500">{review.date}</p>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevPage}
              className="p-2 rounded-full bg-[#160C29] text-white hover:bg-[#2A1845] transition-colors"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    currentPage === i ? "bg-[#160C29]" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                  aria-current={currentPage === i ? "page" : undefined}
                />
              ))}
            </div>
            <button
              onClick={nextPage}
              className="p-2 rounded-full bg-[#160C29] text-white hover:bg-[#2A1845] transition-colors"
              aria-label="Next reviews"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
