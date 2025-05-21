import Link from "next/link"
import { Button } from "@/components/ui/button"
import HeaderEnhanced from "@/components/HeaderEnhanced"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f8f6ff]">
      <HeaderEnhanced />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-[#59CCB1] mb-6">About Floowery</h1>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-700">
            Floowery is a premium Instagram growth service dedicated to helping influencers, businesses, and content
            creators build a genuine following of real, engaged users.
          </p>

          <h2 className="text-xl font-bold text-[#59CCB1] mt-8 mb-4">Our Mission</h2>
          <p className="text-gray-700">
            Our mission is to provide a safe, effective, and ethical way for Instagram users to grow their audience. We
            believe that everyone deserves a chance to be discovered, and we're here to help you stand out in a crowded
            digital landscape.
          </p>

          <h2 className="text-xl font-bold text-[#59CCB1] mt-8 mb-4">Our Approach</h2>
          <p className="text-gray-700">
            Unlike other growth services, we focus on quality over quantity. We don't use bots, fake accounts, or
            engagement pods. Instead, we leverage advanced targeting algorithms to connect your account with real users
            who are genuinely interested in your content and niche.
          </p>

          <div className="bg-purple-50 p-6 rounded-lg my-8">
            <h3 className="text-lg font-bold mb-3">What Sets Us Apart</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-[#160C29] mr-2 shrink-0"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>100% real followers who are interested in your content</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-[#160C29] mr-2 shrink-0"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>No password required - your account stays secure</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-[#160C29] mr-2 shrink-0"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>Gradual, natural growth that complies with Instagram's terms</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-[#160C29] mr-2 shrink-0"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>Dedicated support team available 7 days a week</span>
              </li>
            </ul>
          </div>

          <h2 className="text-xl font-bold text-[#59CCB1] mt-8 mb-4">Our Team</h2>
          <p className="text-gray-700">
            Floowery was founded in 2020 by a team of social media experts and growth hackers who recognized the
            challenges creators face when building an audience. What started as a boutique service for a handful of
            clients has grown into a trusted platform used by influencers, businesses, and content creators around the
            world.
          </p>

          <h2 className="text-xl font-bold text-[#59CCB1] mt-8 mb-4">Our Commitment</h2>
          <p className="text-gray-700">
            We're committed to providing exceptional service and results. We stand behind our work with a satisfaction
            guarantee and transparent policies. Our success is measured by your growth, and we're dedicated to helping
            you achieve your Instagram goals.
          </p>
        </div>

        <div className="mt-8">
          <Link href="/#pricing">
            <Button className="bg-[#160C29] hover:bg-[#2A1845]">View Our Pricing</Button>
          </Link>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Floowery. All rights reserved.</p>
          <div className="mt-2">
            <Link href="/about" className="text-gray-400 hover:text-white mx-2 transition">
              About Us
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white mx-2 transition">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white mx-2 transition">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
