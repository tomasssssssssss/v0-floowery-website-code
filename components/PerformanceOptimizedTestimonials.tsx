"use client"

import { useState, useCallback, useMemo } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import LazyImage from "./LazyImage"

interface Testimonial {
  id: number
  name: string
  handle: string
  avatar: string
  content: string
  rating: number
  category: string
  stats: {
    followers: {
      before: number
      after: number
    }
  }
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jessica Miller",
    handle: "@jessicabeauty",
    avatar: "/blonde-woman-portrait.png",
    content: "Floowery transformed my Instagram presence! I gained over 5,000 real followers in just a month.",
    rating: 5,
    category: "Influencer",
    stats: {
      followers: {
        before: 2300,
        after: 7500,
      },
    },
  },
  {
    id: 2,
    name: "Michael Chen",
    handle: "@chendesigns",
    avatar: "/asian-man-smiling.png",
    content: "As a small business owner, Floowery delivered exactly what they promised. Sales are up 40%!",
    rating: 5,
    category: "Business",
    stats: {
      followers: {
        before: 1200,
        after: 4800,
      },
    },
  },
  {
    id: 3,
    name: "Sarah Williams",
    handle: "@sarahcooks",
    avatar: "/woman-dark-hair.png",
    content: "The quality of followers is what impressed me the most - real people who care about my content.",
    rating: 5,
    category: "Influencer",
    stats: {
      followers: {
        before: 3400,
        after: 9200,
      },
    },
  },
]

export default function PerformanceOptimizedTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  const currentTestimonial = useMemo(() => testimonials[currentIndex], [currentIndex])

  const formatNumber = useCallback((num: number) => {
    return num >= 1000 ? `${(num / 1000).toFixed(1)}K` : num.toString()
  }, [])

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-[#F0F0F0] to-[#F0F0F0]/70">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#160C29] mb-12">
          What Our <span className="text-[#59CCB1]">Customers Say</span>
        </h2>

        <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <LazyImage
                src={currentTestimonial.avatar}
                alt={currentTestimonial.name}
                width={120}
                height={120}
                className="rounded-full"
                sizes="120px"
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-4">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-lg text-gray-700 mb-4 italic">"{currentTestimonial.content}"</blockquote>

              <div className="mb-4">
                <div className="font-bold text-[#160C29]">{currentTestimonial.name}</div>
                <div className="text-[#59CCB1]">{currentTestimonial.handle}</div>
              </div>

              <div className="flex justify-center md:justify-start gap-4 text-sm">
                <div className="bg-[#F0F0F0] px-3 py-1 rounded-full">
                  <span className="text-gray-600">Before: </span>
                  <span className="font-semibold">{formatNumber(currentTestimonial.stats.followers.before)}</span>
                </div>
                <div className="bg-[#59CCB1] text-white px-3 py-1 rounded-full">
                  <span>After: </span>
                  <span className="font-semibold">{formatNumber(currentTestimonial.stats.followers.after)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-[#F0F0F0] hover:bg-[#59CCB1] hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-[#59CCB1]" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-[#F0F0F0] hover:bg-[#59CCB1] hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
