"use client"
import { useState, useRef, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import "../styles/reviews.css"

interface Review {
  id: number
  text: string
  author: string
  rating: number
  date: string
}

export default function ScrollableReviews() {
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

  const [currentIndex, setCurrentIndex] = useState(0)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [visibleItems, setVisibleItems] = useState(3)

  // Determine how many items to show based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleItems(1)
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2)
      } else {
        setVisibleItems(3)
      }
    }

    // Set initial value
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Clean up
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    if (currentIndex < reviews.length - visibleItems) {
      setCurrentIndex(currentIndex + 1)
    } else {
      // Loop back to the beginning
      setCurrentIndex(0)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else {
      // Loop to the end
      setCurrentIndex(reviews.length - visibleItems)
    }
  }

  // Update the transform style when currentIndex changes
  useEffect(() => {
    if (wrapperRef.current) {
      const itemWidth = 265 // 250px width + 15px margin
      wrapperRef.current.style.transform = `translateX(-${currentIndex * itemWidth}px)`
      wrapperRef.current.style.transition = "transform 0.5s ease"
    }
  }, [currentIndex])

  return (
    <section className="reviews-section py-16 px-6 bg-[#F0F0F0]">
      <h2 className="text-3xl font-bold text-center text-[#59CCB1] mb-6">
        What Our <span className="text-[#160C29]">Users Say</span>
      </h2>

      <div className="reviews-container">
        <button
          className="slider-btn prev-btn bg-[#160C29] text-white hover:bg-[#2A1845] transition-colors"
          onClick={prevSlide}
          aria-label="Previous review"
        >
          <ChevronLeft />
        </button>

        <div className="reviews-wrapper">
          <div
            ref={wrapperRef}
            style={{
              display: "flex",
              transition: "transform 0.5s ease",
            }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="review-item bg-white shadow-md rounded-xl p-6 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < review.rating ? "text-[#160C29] fill-[#160C29]" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="text-[#59CCB1] mb-4">&ldquo;{review.text}&rdquo;</p>
                <div className="mt-4">
                  <p className="font-medium text-[#160C29]">{review.author}</p>
                  <p className="text-xs text-gray-500">{review.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="slider-btn next-btn bg-[#160C29] text-white hover:bg-[#2A1845] transition-colors"
          onClick={nextSlide}
          aria-label="Next review"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  )
}
