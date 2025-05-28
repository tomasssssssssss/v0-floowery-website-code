"use client"

import { useState, useRef, useEffect } from "react"

interface Review {
  id: number
  text: string
  author: string
  handle: string
  image: string
  rating: number
  date: string
  category: "influencer" | "business" | "personal"
  followers: {
    before: number
    after: number
  }
}

export default function EnhancedReviews() {
  // Sample review data with more details
  const reviews: Review[] = [
    {
      id: 1,
      text: "Floowery transformed my Instagram presence! I gained over 5,000 real followers in just a month, and they actually engage with my content. My reach has increased by 300% and I'm getting collaboration offers weekly now.",
      author: "Jessica Miller",
      handle: "@jessicabeauty",
      image: "/blonde-woman-portrait.png",
      rating: 5,
      date: "2 days ago",
      category: "influencer",
      followers: {
        before: 2300,
        after: 7500,
      },
    },
    {
      id: 2,
      text: "As a small business owner, I was skeptical about Instagram growth services, but Floowery delivered exactly what they promised. My boutique's account has grown consistently and the engagement is better than ever. Sales are up 40%!",
      author: "Michael Chen",
      handle: "@chendesigns",
      image: "/asian-man-smiling.png",
      rating: 5,
      date: "1 week ago",
      category: "business",
      followers: {
        before: 1200,
        after: 4800,
      },
    },
    {
      id: 3,
      text: "I've been using Floowery for my food blog for 3 months now. Not only did I get more followers, but they're actually trying my recipes and tagging me! The quality of followers is what impressed me the most - real people who care about my content.",
      author: "Sarah Williams",
      handle: "@sarahcooks",
      image: "/woman-dark-hair.png",
      rating: 5,
      date: "2 weeks ago",
      category: "influencer",
      followers: {
        before: 3400,
        after: 9200,
      },
    },
    {
      id: 4,
      text: "Fast delivery and amazing results! I started seeing new followers within hours of signing up. What I love most is that these are genuine accounts that match my target audience. Worth every penny for my personal fitness journey.",
      author: "David Rodriguez",
      handle: "@davidfitness",
      image: "/diverse-person-portrait.png",
      rating: 5,
      date: "3 weeks ago",
      category: "personal",
      followers: {
        before: 850,
        after: 3200,
      },
    },
    {
      id: 5,
      text: "The quality of followers exceeded my expectations. As a photographer, I need followers who appreciate visual art, and Floowery somehow found exactly the right audience for my work. I've received multiple paid gig offers since growing my account.",
      author: "Emma Lawrence",
      handle: "@emmalens",
      image: "/diverse-group-profile.png",
      rating: 5,
      date: "1 month ago",
      category: "influencer",
      followers: {
        before: 1700,
        after: 6300,
      },
    },
    {
      id: 6,
      text: "This is my second time using Floowery and I'm just as impressed as the first time. My online store has seen a 65% increase in traffic from Instagram since I started using their service. The ROI is incredible!",
      author: "James Peterson",
      handle: "@jamespcrafts",
      image: "/musician-profile.png",
      rating: 5,
      date: "1 month ago",
      category: "business",
      followers: {
        before: 2100,
        after: 7800,
      },
    },
  ]

  const [activeFilter, setActiveFilter] = useState<string>("all")
  const [currentPage, setCurrentPage] = useState(0)
  const [visibleItems, setVisibleItems] = useState(3)
  const reviewsContainerRef = useRef<HTMLDivElement>(null)

  // Filter reviews based on selected category
  const filteredReviews =
    activeFilter === "all" ? reviews : reviews.filter((review) => review.category === activeFilter)

  // Calculate total pages
  const totalPages = Math.ceil(filteredReviews.length / visibleItems)

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

  // Reset current page when filter changes
  useEffect(() => {
    setCurrentPage(0)
  }, [activeFilter])

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
    } else {
      // Loop back to the beginning
      setCurrentPage(0)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    } else {
      // Loop to the end
      setCurrentPage(totalPages - 1)
    }
  }

  // Get current reviews to display
  const currentReviews = filteredReviews.slice(currentPage * visibleItems, (currentPage + 1) * visibleItems)

  // Format follower count with K for thousands
  const formatFollowers = (count: number) => {
    return count >= 1000 ? `${(count / 1000).toFixed(1)}K` : count
  }

  return null
}
