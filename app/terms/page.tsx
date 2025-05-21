import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/Footer"

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#F0F0F0]">
      {/* Custom header with the correct logo */}
      <header className="bg-[#F0F0F0] shadow-sm">
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/floowery-logo-light-bg.png"
              alt="Floowery"
              width={180}
              height={45}
              className="h-auto w-[120px] sm:w-[150px] md:w-[180px]"
              priority
            />
          </Link>

          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-[#744AEC] transition-colors">
              Home
            </Link>
            <Link href="/dashboard" className="text-gray-700 hover:text-[#744AEC] transition-colors">
              Dashboard
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#744AEC] transition-colors">
              About Us
            </Link>
          </nav>

          <div className="hidden md:flex space-x-4">
            <Link href="/dashboard">
              <button className="px-4 py-2 bg-[#744AEC] text-white rounded-full hover:bg-[#5A35C3] transition-colors">
                Dashboard
              </button>
            </Link>
            <Link href="/login">
              <button className="px-4 py-2 border border-[#744AEC] text-[#744AEC] rounded-full hover:bg-[#744AEC] hover:text-white transition-colors">
                Sign In
              </button>
            </Link>
          </div>

          <button className="md:hidden text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800 bg-white rounded shadow">
          <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

          <p className="mb-4">
            Welcome to Floowery. By accessing or using our website and services, you agree to comply with and be legally
            bound by the following terms and conditions. If you do not agree to these Terms, please do not use our
            services.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">1. Service Description</h2>
          <p className="mb-4">
            Floowery provides a promotional service designed to help users grow their Instagram following by connecting
            them with real, active Instagram users. We do not use bots, fake accounts, or engagement pods. All followers
            delivered through our service are real people with active Instagram accounts.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">2. How It Works</h2>
          <p className="mb-4">
            Floowery operates through a network of over 2,000 niche Instagram pages across various industries. We run
            targeted ads and promotions for your profile through these pages, exposing your account to users who are
            likely to be interested in your content.
          </p>
          <p className="mb-4">Our process:</p>
          <ol className="list-decimal pl-6 mb-4 space-y-2">
            <li>You provide your Instagram username (no password required).</li>
            <li>We analyze your account and identify relevant promotional pages.</li>
            <li>Your profile is promoted through strategic placements.</li>
            <li>Interested users discover and follow your account.</li>
          </ol>
          <p className="mb-4">
            This ensures organic growth with real users who are more likely to engage with your content.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">3. Account Registration</h2>
          <p className="mb-4">To use our service, you must create an account on Floowery. You agree to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Provide accurate, current, and complete information during registration.</li>
            <li>Keep your account information updated.</li>
            <li>Maintain the confidentiality of your login credentials.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">4. Eligibility and Requirements</h2>
          <p className="mb-4">
            You must be at least 18 years old to use this service. By registering, you confirm that you meet this age
            requirement.
          </p>
          <p className="mb-4">
            To use our services, your Instagram account must be set to public during the entire promotion period.
            Private accounts cannot be promoted. If your account is private, we will be unable to deliver followers, and
            no refunds will be issued.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">5. Payment Terms</h2>
          <p className="mb-4">
            All payments are processed securely through third-party payment processors. Floowery reserves the right to
            change pricing at any time without prior notice.
          </p>
          <p className="mb-4">Refund Policy:</p>
          <p className="mb-4">
            All sales are final. Floowery does not offer refunds under any circumstances, including:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Changing your mind after purchase</li>
            <li>Making your account private</li>
            <li>Unsubscribing during the promotion period</li>
            <li>Dissatisfaction with follower engagement</li>
          </ul>
          <p className="mb-4">Please ensure you understand how the service works before purchasing.</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">6. Service Delivery</h2>
          <p className="mb-4">
            Followers are delivered gradually over a 30-day period to maintain account integrity. While the exact number
            of followers may vary slightly, we guarantee delivery of at least 90% of the purchased amount.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">7. Account Security</h2>
          <p className="mb-4">
            Floowery will never ask for your Instagram password. Our service promotes your account externally and does
            not require login access. You are solely responsible for securing your Instagram account and any related
            activities.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">8. User Responsibility</h2>
          <p className="mb-4">You agree to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Use our service in compliance with Instagram's Terms of Use and Community Guidelines.</li>
            <li>Keep your account public during the entire promotion.</li>
            <li>Avoid any activity that may result in account penalties or restrictions.</li>
          </ul>
          <p className="mb-4">Floowery is not responsible for any actions taken by Instagram against your account.</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">9. Results Disclaimer</h2>
          <p className="mb-4">
            Floowery does not guarantee specific engagement metrics (likes, comments, etc.). While we aim to deliver
            high-quality followers, actual engagement levels may vary based on your content, niche, and posting
            frequency.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">10. Limitation of Liability</h2>
          <p className="mb-4">Floowery is not responsible for:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Any changes in Instagram's algorithm or platform policies</li>
            <li>Loss of followers after delivery</li>
            <li>Business outcomes, revenue, or reputation impacts</li>
          </ul>
          <p className="mb-4">
            In no event shall Floowery or its affiliates be liable for indirect, incidental, or consequential damages.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">11. Modifications to Terms</h2>
          <p className="mb-4">
            Floowery reserves the right to modify these Terms at any time. Updates will be posted on this page with a
            new effective date. Continued use of the service after changes constitutes your acceptance of the revised
            terms.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">12. Contact Information</h2>
          <p className="mb-4">If you have any questions or concerns about these Terms, please contact us at:</p>
          <p className="mb-2">
            📧 Email:{" "}
            <Link href="mailto:support@floowery.com" className="text-[#744AEC] hover:underline">
              support@floowery.com
            </Link>
          </p>
          <p className="mb-8">
            🌐 Website:{" "}
            <Link href="https://www.floowery.com" className="text-[#744AEC] hover:underline">
              www.floowery.com
            </Link>
          </p>

          <Link href="/">
            <Button className="bg-[#744AEC] hover:bg-[#5A35C3]">&larr; Back to Home</Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
