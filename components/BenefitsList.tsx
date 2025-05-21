import React from "react"
import Link from "next/link"
import {
  Users,
  Target,
  TrendingUp,
  Lock,
  HeadphonesIcon,
  ShieldCheck,
  Instagram,
  BarChart3,
  ArrowRight,
} from "lucide-react"

interface BenefitsListProps {
  centered?: boolean
}

export default function BenefitsList({ centered = false }: BenefitsListProps) {
  const benefits = [
    {
      icon: <Users className="w-5 h-5" />,
      title: "100% Real Instagram Followers",
      description: "Genuine accounts that engage with your content, not bots or fake profiles.",
      highlight: "Avg. 92% retention rate",
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Targeted to Your Niche",
      description: "Followers interested in your specific content category for better engagement.",
      highlight: "30+ niches supported",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Increased Engagement Rate",
      description: "More likes, comments, and shares on your posts from relevant followers.",
      highlight: "Up to 3x engagement",
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: "No Password Required",
      description: "Secure process that never asks for your Instagram credentials.",
      highlight: "100% secure process",
    },
    {
      icon: <HeadphonesIcon className="w-5 h-5" />,
      title: "24/7 Customer Support",
      description: "Our team is always available to answer questions and resolve issues.",
      highlight: "Avg. response: 2 hours",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Money-Back Guarantee",
      description: "Not satisfied with our service? Get a full refund within 30 days.",
      highlight: "No questions asked",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      title: "Safe & Compliant with Instagram",
      description: "Our methods follow Instagram's terms of service to protect your account.",
      highlight: "Zero risk of bans",
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Detailed Analytics Dashboard",
      description: "Track your growth and engagement metrics in real-time.",
      highlight: "Daily updates",
    },
  ]

  return (
    <div className="bg-gradient-to-br from-[#F0F0F0] to-[#F0F0F0]/70 py-4 px-0 sm:px-6 sm:py-8 rounded-xl shadow-md border border-[#59CCB1]/10 w-full max-w-[100vw] mx-auto">
      <div className="w-full px-2 sm:px-0">
        <div className="flex flex-col sm:flex-row items-center sm:justify-between mb-4 sm:mb-6">
          <h3 className={`text-xl sm:text-2xl font-bold text-[#160C29] mb-2 sm:mb-0 ${centered ? "mx-auto" : ""}`}>
            What You'll <span className="text-[#59CCB1]">Get</span>
          </h3>
          {!centered && (
            <div className="bg-[#160C29] text-[#F0F0F0] text-xs font-medium py-1 px-3 rounded-full">
              All included in every plan
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group flex bg-white p-2 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-[#F0F0F0]"
            >
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#59CCB1] flex items-center justify-center mr-2 sm:mr-3 group-hover:bg-[#160C29] transition-colors duration-300">
                {React.cloneElement(benefit.icon, { className: "w-4 h-4 sm:w-5 sm:h-5 text-[#F0F0F0]" })}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-[#160C29] mb-1 text-sm sm:text-base truncate">{benefit.title}</h4>
                <p className="text-xs text-[#160C29]/70 mb-1.5 line-clamp-2">{benefit.description}</p>
                <div className="flex items-center">
                  <span className="text-xs font-semibold bg-[#F0F0F0] text-[#160C29] py-0.5 px-2 rounded-full truncate max-w-full">
                    {benefit.highlight}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 sm:mt-6 bg-[#160C29] p-2 sm:p-4 rounded-lg text-[#F0F0F0] flex flex-col sm:flex-row items-center justify-between">
          <div className="text-center sm:text-left mb-3 sm:mb-0 w-full sm:w-auto">
            <p className="font-bold text-base sm:text-lg">Ready to grow your Instagram?</p>
            <p className="text-[#F0F0F0]/80 text-xs sm:text-sm">Join thousands of satisfied customers today</p>
          </div>
          <Link
            href="/checkout"
            className="w-full sm:w-auto bg-[#59CCB1] hover:bg-[#59CCB1]/90 text-[#F0F0F0] font-medium py-2 px-4 rounded-lg flex items-center justify-center transition-colors duration-300 text-sm"
          >
            Get Started Now
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
