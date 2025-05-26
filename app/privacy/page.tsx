import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/Footer"

export default function Privacy() {
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
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

          <p className="mb-4">
            <strong>Effective Date:</strong> January 1, 2024
          </p>

          <p className="mb-4">
            At Floowery, we are committed to protecting your privacy and ensuring the security of your personal
            information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
            you use our website and services.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>

          <h3 className="text-lg font-medium mt-4 mb-2">Personal Information</h3>
          <p className="mb-4">We may collect the following personal information:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Instagram username (for service delivery)</li>
            <li>Email address (for account creation and communication)</li>
            <li>Payment information (processed securely through third-party providers)</li>
            <li>Contact information you provide when reaching out to support</li>
          </ul>

          <h3 className="text-lg font-medium mt-4 mb-2">Usage Information</h3>
          <p className="mb-4">We automatically collect certain information about your use of our services:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>IP address and device information</li>
            <li>Browser type and version</li>
            <li>Pages visited and time spent on our website</li>
            <li>Referring website information</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
          <p className="mb-4">We use your information for the following purposes:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Providing and delivering our Instagram growth services</li>
            <li>Processing payments and managing your account</li>
            <li>Communicating with you about your service and support requests</li>
            <li>Improving our website and services</li>
            <li>Complying with legal obligations</li>
            <li>Preventing fraud and ensuring security</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">3. Information Sharing and Disclosure</h2>
          <p className="mb-4">
            We do not sell, trade, or rent your personal information to third parties. We may share your information in
            the following circumstances:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Service Providers:</strong> With trusted third-party providers who assist in delivering our
              services
            </li>
            <li>
              <strong>Legal Requirements:</strong> When required by law or to protect our rights and safety
            </li>
            <li>
              <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">4. Instagram Data and Privacy</h2>
          <p className="mb-4">
            <strong>Important:</strong> Floowery never requests or requires your Instagram password. Our service
            operates through external promotion and does not access your Instagram account directly.
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>We only use your Instagram username to identify your account for promotion</li>
            <li>We do not collect or store any private Instagram data</li>
            <li>We do not post on your behalf or access your account</li>
            <li>All follower growth is achieved through legitimate promotional methods</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">5. Data Security</h2>
          <p className="mb-4">
            We implement appropriate technical and organizational security measures to protect your personal information
            against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over
            the internet is 100% secure.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">6. Data Retention</h2>
          <p className="mb-4">
            We retain your personal information only for as long as necessary to provide our services and comply with
            legal obligations. Account information is typically retained for the duration of your service period plus
            any required legal retention periods.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">7. Your Rights</h2>
          <p className="mb-4">
            Depending on your location, you may have the following rights regarding your personal information:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Access to your personal information</li>
            <li>Correction of inaccurate information</li>
            <li>Deletion of your personal information</li>
            <li>Restriction of processing</li>
            <li>Data portability</li>
            <li>Objection to processing</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">8. Cookies and Tracking</h2>
          <p className="mb-4">
            Our website uses cookies and similar tracking technologies to enhance your experience and analyze website
            usage. You can control cookie settings through your browser preferences.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">9. Third-Party Links</h2>
          <p className="mb-4">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of
            these external sites. We encourage you to review their privacy policies.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">10. Children's Privacy</h2>
          <p className="mb-4">
            Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal
            information from children under 18.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">11. International Data Transfers</h2>
          <p className="mb-4">
            Your information may be transferred to and processed in countries other than your own. We ensure appropriate
            safeguards are in place to protect your information during such transfers.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">12. Changes to This Privacy Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any material changes by posting
            the new Privacy Policy on this page with an updated effective date.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">13. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy or our privacy practices, please contact us:
          </p>
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
