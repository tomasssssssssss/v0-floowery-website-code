"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Users, BarChart3, Award } from "lucide-react"

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("stats-section")
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const stats = [
    {
      icon: <Users className="h-8 w-8 text-[#160C29]" />,
      value: "10,000+",
      label: "Satisfied clients",
      description: "who have grown their Instagram presence",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-[#160C29]" />,
      value: "200%+",
      label: "Average growth",
      description: "for our clients within 3 months",
    },
    {
      icon: <Award className="h-8 w-8 text-[#160C29]" />,
      value: "4.9/5",
      label: "Client satisfaction",
      description: "based on 500+ reviews",
    },
  ]

  return (
    <section id="stats-section" className="py-16 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#59CCB1] mb-12">
          Real <span className="text-[#160C29]">Results</span> for Our Clients
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <div className="bg-[#F0E6FF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {stat.icon}
              </div>
              <h3 className="text-xl font-bold text-[#59CCB1] mb-2">{stat.value}</h3>
              <p className="text-[#59CCB1] font-medium">{stat.label}</p>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
