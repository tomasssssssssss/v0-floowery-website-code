"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  handle: string
  image: string
  content: string
  rating: number
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      handle: "@sarahjbeauty",
      image: "/woman-dark-hair.png",
      content:
        "Floowery helped me grow my beauty account from 500 to over 10K followers in just 3 months. The followers are real and engage with my content regularly!",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      handle: "@miketravels",
      image: "/asian-man-smiling.png",
      content:
        "I was skeptical at first, but Floowery delivered exactly what they promised. My travel page has grown consistently and the engagement is better than ever.",
      rating: 5,
    },
    {
      id: 3,
      name: "Jessica Williams",
      handle: "@jessicacooks",
      image: "/blonde-woman-portrait.png",
      content:
        "As a food blogger, I needed real followers who would actually try my recipes. Floowery delivered quality followers who genuinely interact with my content.",
      rating: 4,
    },
    {
      id: 4,
      name: "David Rodriguez",
      handle: "@davidfitness",
      image: "/diverse-person-portrait.png",
      content:
        "I've tried other growth services before, but Floowery is the only one that delivered real, engaged followers. My fitness account has grown tremendously!",
      rating: 5,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  // Show 1 testimonial on mobile, 2 on tablet, 3 on desktop
  const visibleTestimonials = () => {
    const result = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length
      result.push(testimonials[index])
    }
    return result
  }

  return (
    <section className="py-16 px-6 bg-[#F0F0F0]">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#59CCB1] mb-4">
          What Our <span className="text-[#160C29]">Clients Say</span>
        </h2>
        <p className="text-center text-[#59CCB1] mb-12 max-w-2xl mx-auto">
          Join thousands of satisfied customers who have transformed their Instagram presence with Floowery
        </p>

        <div className="relative">
          <div className="flex flex-col md:flex-row gap-6 overflow-hidden">
            {visibleTestimonials().map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`bg-white rounded-xl shadow-md p-6 flex-1 transition-all duration-500 ease-in-out transform hover:scale-102 hover:shadow-lg ${
                  index === 0 ? "block" : index === 1 ? "hidden md:block" : "hidden lg:block"
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#59CCB1]">{testimonial.name}</h3>
                    <p className="text-sm text-[#160C29]">{testimonial.handle}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="text-[#59CCB1]">{testimonial.content}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-[#160C29] text-white hover:bg-[#59CCB1] transition-all duration-300 ease-in-out transform hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-[#160C29] text-white hover:bg-[#59CCB1] transition-all duration-300 ease-in-out transform hover:scale-110"
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
