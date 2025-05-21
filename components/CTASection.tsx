import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20 px-6 gradient-bg">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          <span className="text-primary">Ready to Grow</span> <span className="text-secondary">Your Instagram?</span>
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Join thousands of satisfied customers who have transformed their Instagram presence with Floowery's proven
          growth strategies.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/pricing" className="primary-btn inline-flex items-center justify-center">
            Get Started Now
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
