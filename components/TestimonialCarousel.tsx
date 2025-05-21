"use client"

import { useState, useRef, useEffect } from "react"

interface Testimonial {
  id: number
  name: string
  handle: string
  avatar: string
  content: string
  rating: number
  category: string
  date: string
  stats: {
    followers: {
      before: number
      after: number
    }
    engagement?: number
  }
  verified?: boolean
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jessica Miller",
    handle: "@jessicabeauty",
    avatar: "/blonde-woman-portrait.png",
    content:
      "Floowery transformed my Instagram presence! I gained over 5,000 real followers in just a month, and they actually engage with my content. My reach has increased by 300% and I'm getting collaboration offers weekly now.",
    rating: 5,
    category: "Influencer",
    date: "2 days ago",
    stats: {
      followers: {
        before: 2300,
        after: 7500,
      },
      engagement: 4.8,
    },
    verified: true,
  },
  {
    id: 2,
    name: "Michael Chen",
    handle: "@chendesigns",
    avatar: "/asian-man-smiling.png",
    content:
      "As a small business owner, I was skeptical about Instagram growth services, but Floowery delivered exactly what they promised. My boutique's account has grown consistently and the engagement is better than ever. Sales are up 40%!",
    rating: 5,
    category: "Business",
    date: "1 week ago",
    stats: {
      followers: {
        before: 1200,
        after: 4800,
      },
      engagement: 3.9,
    },
  },
  {
    id: 3,
    name: "Sarah Williams",
    handle: "@sarahcooks",
    avatar: "/woman-dark-hair.png",
    content:
      "I've been using Floowery for my food blog for 3 months now. Not only did I get more followers, but they're actually trying my recipes and tagging me! The quality of followers is what impressed me the most - real people who care about my content.",
    rating: 5,
    category: "Influencer",
    date: "2 weeks ago",
    stats: {
      followers: {
        before: 3400,
        after: 9200,
      },
      engagement: 5.2,
    },
    verified: true,
  },
  {
    id: 4,
    name: "David Rodriguez",
    handle: "@davidfitness",
    avatar: "/diverse-person-portrait.png",
    content:
      "Fast delivery and amazing results! I started seeing new followers within hours of signing up. What I love most is that these are genuine accounts that match my target audience. Worth every penny for my personal fitness journey.",
    rating: 5,
    category: "Personal",
    date: "3 weeks ago",
    stats: {
      followers: {
        before: 850,
        after: 3200,
      },
      engagement: 6.7,
    },
  },
  {
    id: 5,
    name: "Emma Lawrence",
    handle: "@emmalens",
    avatar: "/diverse-group-profile.png",
    content:
      "The quality of followers exceeded my expectations. As a photographer, I need followers who appreciate visual art, and Floowery somehow found exactly the right audience for my work. I've received multiple paid gig offers since growing my account.",
    rating: 5,
    category: "Influencer",
    date: "1 month ago",
    stats: {
      followers: {
        before: 1700,
        after: 6300,
      },
      engagement: 4.3,
    },
    verified: true,
  },
  {
    id: 6,
    name: "James Peterson",
    handle: "@jamespcrafts",
    avatar: "/abstract-profile.png",
    content:
      "This is my second time using Floowery and I'm just as impressed as the first time. My online store has seen a 65% increase in traffic from Instagram since I started using their service. The ROI is incredible!",
    rating: 5,
    category: "Business",
    date: "1 month ago",
    stats: {
      followers: {
        before: 2100,
        after: 7800,
      },
      engagement: 3.5,
    },
  },
]

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [filter, setFilter] = useState("All")
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const categories = ["All", "Influencer", "Business", "Personal"]

  const filteredTestimonials = filter === "All" ? testimonials : testimonials.filter((t) => t.category === filter)

  const formatNumber = (num: number) => {
    return num >= 1000 ? `${(num / 1000).toFixed(1)}K` : num
  }

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % filteredTestimonials.length)
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? filteredTestimonials.length - 1 : prev - 1))
  }

  // Handle autoplay
  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [autoplay, filteredTestimonials.length, activeIndex])

  // Reset active index when filter changes
  useEffect(() => {
    setActiveIndex(0)
  }, [filter])

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false)
  const handleMouseLeave = () => setAutoplay(true)

  return null
}
