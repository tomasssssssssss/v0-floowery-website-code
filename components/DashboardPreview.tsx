"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function DashboardPreview() {
  return (
    <section className="py-16 px-6 bg-[#F0FBF8]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#59CCB1] mb-4">
            Powerful <span className="text-[#160C29]">Analytics Dashboard</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Track your Instagram growth in real-time with our comprehensive analytics dashboard. Monitor followers,
            engagement, and more.
          </p>
        </div>

        <div className="relative">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10 shadow-2xl rounded-xl overflow-hidden"
          >
            <Image
              src="/images/dashboard-preview.png"
              alt="Floowery Dashboard"
              width={1200}
              height={675}
              className="w-full h-auto"
            />
          </motion.div>

          <div className="absolute -bottom-6 -right-6 -left-6 h-24 bg-gradient-to-t from-[#F0FBF8] to-transparent z-20"></div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-[#59CCB1] mb-6">Ready to track your Instagram growth?</h3>
          <Link href="/dashboard">
            <Button className="bg-[#160C29] hover:bg-[#2A1845] text-white px-8 py-6 text-lg rounded-full">
              Try Dashboard Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
