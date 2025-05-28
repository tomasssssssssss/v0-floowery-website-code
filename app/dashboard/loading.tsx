import Image from "next/image"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0FBF8] to-white flex items-center justify-center">
      <div className="text-center">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 mx-auto shadow-xl">
          <Image
            src="/images/floowery-spiral-icon.png"
            alt="Floowery"
            width={48}
            height={48}
            className="object-contain animate-spin"
            style={{ animationDuration: "2s" }}
          />
        </div>
        <h2 className="text-xl font-semibold text-[#160C29] mb-2">Loading Dashboard</h2>
        <p className="text-[#59CCB1]">Please wait while we prepare your analytics...</p>
      </div>
    </div>
  )
}
