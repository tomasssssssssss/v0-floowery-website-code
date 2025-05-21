"use client"

import { useState, useEffect } from "react"

export default function CountdownTimer() {
  // Set the countdown to 3 hours
  const [timeLeft, setTimeLeft] = useState({
    hours: 3,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Update the countdown every second
    const timer = setInterval(() => {
      if (timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
        clearInterval(timer)
        return
      }

      let newSeconds = timeLeft.seconds - 1
      let newMinutes = timeLeft.minutes
      let newHours = timeLeft.hours

      if (newSeconds < 0) {
        newSeconds = 59
        newMinutes -= 1
      }

      if (newMinutes < 0) {
        newMinutes = 59
        newHours -= 1
      }

      setTimeLeft({
        hours: newHours,
        minutes: newMinutes,
        seconds: newSeconds,
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft])

  // Format the time units to always have two digits
  const formatTimeUnit = (unit: number) => {
    return unit.toString().padStart(2, "0")
  }

  return (
    <span className="inline whitespace-nowrap">
      {formatTimeUnit(timeLeft.hours)}h:{formatTimeUnit(timeLeft.minutes)}m:{formatTimeUnit(timeLeft.seconds)}s
    </span>
  )
}
