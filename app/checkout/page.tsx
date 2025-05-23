"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

interface Package {
  id: string
  name: string
  price: number
}

const packages: Package[] = [
  { id: "basic", name: "Basic", price: 10 },
  { id: "standard", name: "Standard", price: 20 },
  { id: "premium", name: "Premium", price: 30 },
]

const CheckoutPage = () => {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(packages[0])
  const [paymentType, setPaymentType] = useState<string>("credit_card")
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const router = useRouter()

  useEffect(() => {
    if (!selectedPackage) {
      setSelectedPackage(packages[0])
    }
  }, [])

  const validateForm = () => {
    if (!name || !email) {
      alert("Please fill in all fields.")
      return false
    }

    if (!email.includes("@")) {
      alert("Please enter a valid email address.")
      return false
    }

    return true
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

      // Use Next.js router for navigation instead of window.location.href
      const successUrl = `/checkout/success?plan=${selectedPackage?.id}&type=${paymentType}&price=${selectedPackage?.price}`
      router.push(successUrl)
    } catch (error) {
      console.error("Checkout error:", error)
      setIsSubmitting(false)
    }
  }

  const handlePackageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const packageId = e.target.value
    const selected = packages.find((p) => p.id === packageId)
    setSelectedPackage(selected || null)
  }

  const handlePaymentTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPaymentType(e.target.value)
  }

  const DirectCheckoutButtons = () => {
    const encodedPlan = encodeURIComponent(selectedPackage?.id || "")
    const encodedType = encodeURIComponent(paymentType)
    const encodedPrice = encodeURIComponent(String(selectedPackage?.price || 0))

    return (
      <div>
        <a
          href={`/checkout/success?plan=${encodedPlan}&type=${encodedType}&price=${encodedPrice}`}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Direct Checkout Success
        </a>
        <a
          href={`/checkout/cancel?plan=${encodedPlan}&type=${encodedType}&price=${encodedPrice}`}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
        >
          Direct Checkout Cancel
        </a>
      </div>
    )
  }

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="package" className="block text-gray-700 text-sm font-bold mb-2">
            Select Package:
          </label>
          <select
            id="package"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={selectedPackage?.id}
            onChange={handlePackageChange}
          >
            {packages.map((pkg) => (
              <option key={pkg.id} value={pkg.id}>
                {pkg.name} - ${pkg.price}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="paymentType" className="block text-gray-700 text-sm font-bold mb-2">
            Payment Type:
          </label>
          <select
            id="paymentType"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={paymentType}
            onChange={handlePaymentTypeChange}
          >
            <option value="credit_card">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>

        <div className="mb-6">
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Submit"}
          </button>
        </div>

        <DirectCheckoutButtons />
      </form>
    </div>
  )
}

export default CheckoutPage
