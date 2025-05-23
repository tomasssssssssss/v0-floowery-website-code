"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Check, CreditCard, Shield, Clock, Repeat, Sparkles, Star, ArrowRight, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

// Define the three allowed colors
const COLOR_LIGHT = "#F0F0F0"
const COLOR_PRIMARY = "#160C29"
const COLOR_SECONDARY = "#59CCB1"

interface ServicePackage {
  id: string
  name: string
  followers: string
  basePrice: number
  price: number
  features: string[]
  isTrial?: boolean
}

interface FormData {
  name: string
  email: string
  instagram: string
  paymentMethod: string
}

interface FormErrors {
  name: string
  email: string
  instagram: string
}

export default function Checkout() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const initialPackage = searchParams.get("package") || "500"
  const initialPrice = searchParams.get("price") || "120"
  const initialType = searchParams.get("type") || "monthly"
  const isTrial = searchParams.get("product") === "trial" || searchParams.get("trial") === "true"

  // Initialize payment type state
  const [paymentType, setPaymentType] = useState(
    isTrial || initialType === "one-time" ? "monthly" : (initialType as "monthly" | "yearly"),
  )

  // Add this useEffect to scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)

    // Update selected package when URL params change
    const newPackages = getServicePackages(paymentType)
    const foundPackage = findPackageByType(newPackages, paymentType, initialPackage)
    if (foundPackage) {
      setSelectedPackage(foundPackage)
    }
  }, [initialPackage, initialPrice, initialType, paymentType])

  // Base prices for each package
  const basePackagePrices = {
    "500": 120,
    "1000": 220,
    "2500": 320,
    trial: 10,
  }

  // Calculate price based on payment type
  const calculatePrice = (basePrice: number, type: string) => {
    switch (type) {
      case "one-time":
        return basePrice
      case "monthly":
        // Monthly price should be the same as one-time price
        return basePrice
      case "yearly":
        // Yearly price should be monthly price * 9 (25% off - 3 months free)
        return basePrice * 9
      default:
        return basePrice
    }
  }

  // Available service packages with updated prices
  const getServicePackages = (paymentType: string): ServicePackage[] => {
    const regularPackages = [
      {
        id: "basic",
        name: "Basic Growth",
        followers: "500–1,000",
        basePrice: 120,
        price: calculatePrice(120, paymentType),
        features: ["Real Instagram followers", "Gradual delivery", "30-day guarantee"],
      },
      {
        id: "standard",
        name: "Standard Growth",
        followers: "1,000–2,000",
        basePrice: 220,
        price: calculatePrice(220, paymentType),
        features: ["Real Instagram followers", "Gradual delivery", "30-day guarantee", "Priority support"],
      },
      {
        id: "premium",
        name: "Premium Growth",
        followers: "2,500–5,000",
        basePrice: 320,
        price: calculatePrice(320, paymentType),
        features: [
          "Real Instagram followers",
          "Gradual delivery",
          "30-day guarantee",
          "Priority support",
          "Engagement boost",
          "Content strategy",
        ],
      },
    ]

    // Only add trial package for monthly payment type
    if (paymentType === "monthly") {
      return [
        {
          id: "trial",
          name: "Trial Growth",
          followers: "50–100",
          basePrice: 15,
          price: 15,
          isTrial: true,
          features: [
            "50-100 real followers",
            "Full access to dashboard",
            "No commitment",
            "Real people, not bots",
            "Steady drip delivery",
            "One-time payment",
          ],
        },
        ...regularPackages,
      ]
    }

    return regularPackages
  }

  // Get service packages based on current payment type
  const servicePackages = getServicePackages(paymentType)

  // Find the appropriate initial package
  const findPackageByType = (packages, type, initialPkg) => {
    // If trial is specified in the URL, select the trial package
    if (isTrial) {
      return packages.find((pkg) => pkg.id === "trial") || packages[0]
    }

    if (initialPkg) {
      // Try to find by followers range
      const packageByFollowers = packages.find((pkg) => pkg.followers.split("–")[0] === initialPkg)
      if (packageByFollowers) return packageByFollowers
    }

    return packages[0]
  }

  // Initialize selected package state
  const [selectedPackage, setSelectedPackage] = useState(
    findPackageByType(servicePackages, paymentType, initialPackage),
  )

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    instagram: "",
    paymentMethod: "credit-card",
  })

  const [formErrors, setFormErrors] = useState<FormErrors>({
    name: "",
    email: "",
    instagram: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const validateForm = () => {
    let isValid = true
    const errors = {
      name: "",
      email: "",
      instagram: "",
    }

    if (!formData.name.trim()) {
      errors.name = "Name is required"
      isValid = false
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required"
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid"
      isValid = false
    }

    if (!formData.instagram.trim()) {
      errors.instagram = "Instagram username is required"
      isValid = false
    }

    setFormErrors(errors)
    return isValid
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  // Handle payment type change and update selected package accordingly
  const handlePaymentTypeChange = (type: "one-time" | "monthly" | "yearly") => {
    // If one-time is selected, change to monthly
    if (type === "one-time") {
      type = "monthly"
    }
    // Only proceed if the type is actually changing
    if (type === paymentType) return

    // Update payment type
    setPaymentType(type)

    // Get new packages for this payment type
    const newPackages = getServicePackages(type)

    // Try to find equivalent package in new payment type
    const currentId = selectedPackage?.id

    // Special case: if switching to yearly and had trial selected
    if (type === "yearly" && currentId === "trial") {
      setSelectedPackage(newPackages[0])
      return
    }

    // Try to find the equivalent package in the new payment type
    const newPackage = newPackages.find((pkg) => pkg.id === currentId)
    if (newPackage) {
      setSelectedPackage(newPackage)
    } else {
      // Fallback to first package
      setSelectedPackage(newPackages[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate processing delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Navigate to success page
      const successUrl = `/checkout/success?plan=${selectedPackage?.id}&type=${paymentType}&price=${selectedPackage?.price}`
      window.location.href = successUrl
    } catch (error) {
      console.error("Checkout error:", error)
      setIsSubmitting(false)
    }
  }

  // Get the billing period text
  const getBillingText = () => {
    switch (paymentType) {
      case "monthly":
        return "Monthly subscription"
      case "yearly":
        return "Annual subscription (save 25%)"
      default:
        return "Monthly subscription"
    }
  }

  return (
    <div className="min-h-screen bg-[#F0F0F0]">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Progress Steps */}
        <div className="mb-8 hidden md:block">
          <div className="flex items-center justify-center max-w-3xl mx-auto">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#160C29] text-[#F0F0F0] font-medium">
                1
              </div>
              <div className="ml-2 text-[#160C29] font-medium">Select Plan</div>
            </div>
            <div className="flex-1 h-1 mx-4 bg-[#160C29]"></div>
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#160C29] text-[#F0F0F0] font-medium">
                2
              </div>
              <div className="ml-2 text-[#160C29] font-medium">Payment Details</div>
            </div>
            <div className="flex-1 h-1 mx-4 bg-[#160C29] opacity-30"></div>
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#160C29] text-[#F0F0F0] font-medium opacity-30">
                3
              </div>
              <div className="ml-2 text-[#160C29] font-medium opacity-50">Confirmation</div>
            </div>
          </div>
        </div>

        {isTrial && paymentType === "monthly" && (
          <div className="mb-8 bg-gradient-to-r from-[#160C29] to-[#59CCB1] text-[#F0F0F0] p-6 rounded-xl text-center shadow-lg transform hover:scale-[1.01] transition-transform">
            <div className="flex items-center justify-center mb-2">
              <Sparkles className="h-6 w-6 mr-2 text-[#F0F0F0]" />
              <h2 className="text-xl font-bold">SPECIAL TRIAL OFFER</h2>
            </div>
            <p className="text-lg">Get your first month for just €15 per month. Cancel anytime.</p>
          </div>
        )}

        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-[#160C29]">
            {isTrial ? "Start Your Trial" : "Complete Your Purchase"}
          </h1>
          <p className="text-[#160C29] text-opacity-70 max-w-2xl mx-auto">
            {isTrial
              ? "Try our Instagram growth service with a special trial offer"
              : "Select your preferred growth package and complete your order to start growing your Instagram following"}
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Product Selection Column */}
            <div className="md:col-span-2 space-y-8">
              <div className="bg-[#F0F0F0] rounded-xl shadow-lg overflow-hidden border border-[#160C29] border-opacity-10 hover:border-opacity-20 transition-all">
                <div className="p-6 bg-[#160C29] bg-opacity-5 border-b border-[#160C29]/10">
                  <h2 className="text-xl font-semibold flex items-center text-[#160C29]">
                    <span className="bg-[#160C29] text-[#F0F0F0] w-8 h-8 rounded-full inline-flex items-center justify-center mr-3">
                      1
                    </span>
                    Select Your Payment Type
                  </h2>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input
                        type="radio"
                        id="monthly"
                        name="paymentType"
                        value="monthly"
                        checked={paymentType === "monthly"}
                        onChange={() => handlePaymentTypeChange("monthly")}
                        className="sr-only"
                      />
                      <label
                        htmlFor="monthly"
                        className={`block border-2 rounded-xl p-5 text-center cursor-pointer transition-all duration-300 hover:shadow-md ${
                          paymentType === "monthly"
                            ? "border-[#160C29] bg-[#160C29] bg-opacity-5 shadow transform scale-[1.02]"
                            : "border-[#160C29] border-opacity-10 hover:border-opacity-30"
                        }`}
                      >
                        <div className="mx-auto h-12 w-12 rounded-full bg-[#F0F0F0] flex items-center justify-center mb-3 border border-[#160C29] border-opacity-10">
                          <Repeat className="h-6 w-6 text-[#160C29]" />
                        </div>
                        <span className="font-medium text-[#160C29] text-lg block mb-1">Monthly</span>
                        <p className="text-xs text-[#160C29] text-opacity-60">Continuous growth</p>
                      </label>
                    </div>

                    <div>
                      <input
                        type="radio"
                        id="yearly"
                        name="paymentType"
                        value="yearly"
                        checked={paymentType === "yearly"}
                        onChange={() => handlePaymentTypeChange("yearly")}
                        className="sr-only"
                      />
                      <label
                        htmlFor="yearly"
                        className={`block border-2 rounded-xl p-5 text-center cursor-pointer transition-all duration-300 hover:shadow-md relative ${
                          paymentType === "yearly"
                            ? "border-[#160C29] bg-[#160C29] bg-opacity-5 shadow transform scale-[1.02]"
                            : "border-[#160C29] border-opacity-10 hover:border-opacity-30"
                        }`}
                      >
                        <span className="absolute -top-2 -right-2 bg-[#59CCB1] text-[#F0F0F0] text-xs px-2 py-1 rounded-full font-medium">
                          Save 25%
                        </span>
                        <div className="mx-auto h-12 w-12 rounded-full bg-[#F0F0F0] flex items-center justify-center mb-3 border border-[#160C29] border-opacity-10">
                          <svg
                            className="h-6 w-6 text-[#160C29]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <span className="font-medium text-[#160C29] text-lg block mb-1">Yearly</span>
                        <p className="text-xs text-[#160C29] text-opacity-60">Best value</p>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#F0F0F0] rounded-xl shadow-lg overflow-hidden border border-[#160C29] border-opacity-10 hover:border-opacity-20 transition-all">
                <div className="p-6 bg-[#160C29] bg-opacity-5 border-b border-[#160C29]/10">
                  <h2 className="text-xl font-semibold flex items-center text-[#160C29]">
                    <span className="bg-[#160C29] text-[#F0F0F0] w-8 h-8 rounded-full inline-flex items-center justify-center mr-3">
                      2
                    </span>
                    Select Your Growth Package
                  </h2>
                </div>

                <div className="p-6 space-y-4">
                  {servicePackages.map((pkg) => (
                    <div
                      key={pkg.id}
                      onClick={() => setSelectedPackage(pkg)}
                      className={`
                        border-2 rounded-xl p-5 cursor-pointer transition-all duration-300 relative hover:shadow-md
                        ${
                          selectedPackage?.id === pkg.id
                            ? "border-[#160C29] bg-[#160C29] bg-opacity-5 shadow-md transform scale-[1.01]"
                            : pkg.isTrial
                              ? "border-[#59CCB1] hover:border-[#160C29]"
                              : "border-[#160C29] border-opacity-10 hover:border-opacity-30"
                        }
                      `}
                    >
                      {pkg.isTrial && (
                        <span className="absolute -top-2 -right-2 bg-[#59CCB1] text-[#F0F0F0] text-xs px-2 py-1 rounded-full flex items-center font-medium">
                          <Star className="h-3 w-3 mr-1" /> MOST POPULAR
                        </span>
                      )}

                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-xl text-[#160C29] mb-1">{pkg.name}</h3>
                          <p className="text-[#160C29] text-opacity-70 mb-3">
                            {pkg.followers} Instagram followers{paymentType === "yearly" ? " monthly" : ""}
                          </p>

                          <ul className="space-y-2">
                            {pkg.features.map((feature, index) => (
                              <li key={index} className="flex items-center text-sm text-[#160C29] text-opacity-80">
                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#59CCB1] bg-opacity-20 flex items-center justify-center mr-2">
                                  <Check
                                    className={`h-3 w-3 flex-shrink-0 ${pkg.isTrial ? "text-[#59CCB1]" : "text-[#160C29]"}`}
                                  />
                                </div>
                                {feature}
                              </li>
                            ))}
                          </ul>

                          {pkg.isTrial && (
                            <div className="mt-4 bg-[#59CCB1] bg-opacity-10 p-3 rounded-lg border border-[#59CCB1] text-sm">
                              <p className="font-medium text-[#160C29]">Special Trial Offer:</p>
                              <p className="text-[#160C29] text-opacity-70">
                                One-time payment of €15 for 50-100 followers
                              </p>
                            </div>
                          )}
                        </div>

                        <div className="text-right">
                          {pkg.isTrial ? (
                            <>
                              <div className="text-3xl font-bold text-[#160C29]">€{pkg.price}</div>
                              <div className="text-sm text-[#160C29] text-opacity-50">one-time</div>
                              <div className="text-xs text-[#59CCB1] font-medium mt-1">Limited Time Offer</div>
                            </>
                          ) : (
                            <>
                              <div className="text-3xl font-bold text-[#160C29]">${pkg.price}</div>
                              <div className="text-sm text-[#160C29] text-opacity-50">
                                {paymentType === "one-time"
                                  ? "one-time"
                                  : paymentType === "monthly"
                                    ? "per month"
                                    : "per year"}
                              </div>
                            </>
                          )}

                          {selectedPackage?.id === pkg.id && (
                            <div className="mt-3 bg-[#160C29] text-[#F0F0F0] text-sm font-medium px-3 py-1.5 rounded-lg inline-flex items-center">
                              <Check className="h-4 w-4 mr-1" /> Selected
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#F0F0F0] rounded-xl shadow-lg overflow-hidden border border-[#160C29] border-opacity-10 hover:border-opacity-20 transition-all">
                <div className="p-6 bg-[#160C29] bg-opacity-5 border-b border-[#160C29]/10">
                  <h2 className="text-xl font-semibold flex items-center text-[#160C29]">
                    <span className="bg-[#160C29] text-[#F0F0F0] w-8 h-8 rounded-full inline-flex items-center justify-center mr-3">
                      3
                    </span>
                    Enter Your Details
                  </h2>
                </div>

                <div className="p-6">
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#160C29] mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 ring-[#59CCB1] focus:border-transparent transition-all ${
                          formErrors.name ? "border-red-500" : "border-[#160C29] border-opacity-20"
                        }`}
                        placeholder="John Smith"
                      />
                      {formErrors.name && <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#160C29] mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 ring-[#59CCB1] focus:border-transparent transition-all ${
                          formErrors.email ? "border-red-500" : "border-[#160C29] border-opacity-20"
                        }`}
                        placeholder="john@example.com"
                      />
                      {formErrors.email && <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="instagram" className="block text-sm font-medium text-[#160C29] mb-2">
                        Instagram Username
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-[#160C29] text-opacity-50">
                          @
                        </span>
                        <input
                          type="text"
                          id="instagram"
                          name="instagram"
                          value={formData.instagram}
                          onChange={handleChange}
                          required
                          className={`w-full pl-10 px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 ring-[#59CCB1] focus:border-transparent transition-all ${
                            formErrors.instagram ? "border-red-500" : "border-[#160C29] border-opacity-20"
                          }`}
                          placeholder="yourusername"
                        />
                      </div>
                      {formErrors.instagram ? (
                        <p className="mt-1 text-sm text-red-500">{formErrors.instagram}</p>
                      ) : (
                        <p className="text-xs text-[#160C29] text-opacity-50 mt-2">
                          Don't include the @ symbol, we've added it for you
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary Column */}
            <div className="md:col-span-1">
              <div className="bg-[#F0F0F0] rounded-xl shadow-lg overflow-hidden border border-[#160C29] border-opacity-10 sticky top-4">
                <div className="p-6 bg-[#160C29] text-[#F0F0F0]">
                  <h2 className="text-xl font-semibold flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    Order Summary
                  </h2>
                </div>

                <div className="p-6">
                  {selectedPackage && (
                    <div className="mb-6">
                      <div className="flex justify-between mb-3">
                        <span className="text-[#160C29] font-medium">{selectedPackage.name}</span>
                        <span className="font-bold text-[#160C29]">
                          {selectedPackage.isTrial ? `€${selectedPackage.price}` : `$${selectedPackage.price}`}
                        </span>
                      </div>
                      <div className="text-sm text-[#160C29] text-opacity-70 mb-1 flex items-center">
                        <Image src="/instagram-logo.png" alt="Instagram" width={16} height={16} className="mr-1" />
                        {selectedPackage.followers} Instagram followers
                      </div>
                      <div className="text-sm text-[#160C29] text-opacity-70 mb-4 flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-[#160C29] text-opacity-50" />
                        {selectedPackage.isTrial ? "Trial offer - one-time payment" : getBillingText()}
                      </div>

                      {selectedPackage.isTrial && (
                        <div className="bg-[#59CCB1] bg-opacity-10 p-4 rounded-lg mb-4 text-sm border border-[#59CCB1]">
                          <p className="font-medium text-[#160C29] mb-1">Trial Offer Details:</p>
                          <p className="text-[#160C29] text-opacity-70">
                            €15 one-time payment for 50-100 real followers.
                          </p>
                        </div>
                      )}

                      <div className="border-t-2 border-b-2 border-[#160C29] border-opacity-10 py-4 my-4">
                        <div className="flex justify-between font-bold text-lg">
                          <span>Total</span>
                          <span className="text-[#160C29]">
                            {selectedPackage.isTrial ? `€${selectedPackage.price}` : `$${selectedPackage.price}`}
                          </span>
                        </div>
                        {paymentType !== "one-time" && !selectedPackage.isTrial && (
                          <div className="text-xs text-[#160C29] text-opacity-50 text-right mt-1">
                            {paymentType === "monthly" ? "Billed monthly" : "Billed annually"}
                          </div>
                        )}
                        {selectedPackage.isTrial && (
                          <div className="text-xs text-[#160C29] text-opacity-50 text-right mt-1">One-time payment</div>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="font-medium mb-3 text-[#160C29]">Payment Method</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <input
                          type="radio"
                          id="credit-card"
                          name="paymentMethod"
                          value="credit-card"
                          checked={formData.paymentMethod === "credit-card"}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <label
                          htmlFor="credit-card"
                          className={`block border-2 rounded-lg p-3 text-center cursor-pointer transition-all duration-300 ${
                            formData.paymentMethod === "credit-card"
                              ? "border-[#160C29] bg-[#160C29] bg-opacity-5 transform scale-[1.02]"
                              : "border-[#160C29] border-opacity-10 hover:border-opacity-30"
                          }`}
                        >
                          <CreditCard className="mx-auto h-6 w-6 mb-1 text-[#160C29]" />
                          <span className="text-sm font-medium text-[#160C29]">Credit Card</span>
                        </label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          id="paypal"
                          name="paymentMethod"
                          value="paypal"
                          checked={formData.paymentMethod === "paypal"}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <label
                          htmlFor="paypal"
                          className={`block border-2 rounded-lg p-3 text-center cursor-pointer transition-all duration-300 ${
                            formData.paymentMethod === "paypal"
                              ? "border-[#160C29] bg-[#160C29] bg-opacity-5 transform scale-[1.02]"
                              : "border-[#160C29] border-opacity-10 hover:border-opacity-30"
                          }`}
                        >
                          <svg
                            className="mx-auto h-6 w-6 mb-1 text-[#160C29]"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M16 21V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V21"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="text-sm font-medium text-[#160C29]">PayPal</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className={`w-full bg-[#160C29] hover:bg-[#160C29]/90 text-[#F0F0F0] py-4 px-6 rounded-xl text-lg font-medium transition-all flex items-center justify-center ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        {selectedPackage?.isTrial ? "Start Trial Now" : "Complete Purchase"}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>

                  <div className="mt-6 space-y-3 bg-[#F0F0F0] p-4 rounded-lg border border-[#160C29] border-opacity-10">
                    <div className="flex items-center text-sm text-[#160C29]">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#59CCB1] bg-opacity-20 flex items-center justify-center mr-3">
                        <Lock className="h-4 w-4 text-[#160C29]" />
                      </div>
                      <span>Secure payment processing</span>
                    </div>
                    <div className="flex items-center text-sm text-[#160C29]">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#59CCB1] bg-opacity-20 flex items-center justify-center mr-3">
                        <Clock className="h-4 w-4 text-[#160C29]" />
                      </div>
                      <span>Delivery starts within 24 hours</span>
                    </div>
                    {selectedPackage?.isTrial && (
                      <div className="flex items-center text-sm text-[#160C29]">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#59CCB1] bg-opacity-20 flex items-center justify-center mr-3">
                          <Sparkles className="h-4 w-4 text-[#59CCB1]" />
                        </div>
                        <span>One-time payment - no commitment</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className="mt-10 text-center">
          <p className="text-sm text-[#160C29] text-opacity-50 max-w-2xl mx-auto">
            By completing this purchase, you agree to our{" "}
            <Link href="/terms" className="text-[#160C29] font-medium hover:text-[#59CCB1] transition-colors">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-[#160C29] font-medium hover:text-[#59CCB1] transition-colors">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
