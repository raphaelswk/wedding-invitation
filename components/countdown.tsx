"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "./language-context"
import { weddingDetails } from "@/lib/wedding-data"

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function Countdown() {
  const { t } = useLanguage()
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null)
  const [isToday, setIsToday] = useState(false)

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Target date from weddingDetails (Europe/Dublin timezone handled via ISO string)
      const targetDate = new Date(weddingDetails.dateTimeISO)
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference <= 0) {
        setIsToday(true)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      setIsToday(false)
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      })
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])

  if (!timeLeft) return null

  if (isToday) {
    return (
      <div className="text-center">
        <p className="text-2xl md:text-3xl font-serif text-background animate-pulse">{t("countdownToday")}</p>
      </div>
    )
  }

  const timeUnits = [
    { value: timeLeft.days, label: t("countdownDays") },
    { value: timeLeft.hours, label: t("countdownHours") },
    { value: timeLeft.minutes, label: t("countdownMinutes") },
    { value: timeLeft.seconds, label: t("countdownSeconds") },
  ]

  return (
    <div className="flex justify-center gap-4 md:gap-8">
      {timeUnits.map((unit) => (
        <div key={unit.label} className="text-center">
          <div className="bg-background/10 backdrop-blur-sm rounded-lg px-4 py-3 md:px-6 md:py-4 border border-background/20">
            <span className="text-2xl md:text-4xl font-serif text-background font-light">
              {String(unit.value).padStart(2, "0")}
            </span>
          </div>
          <span className="text-xs md:text-sm text-background/80 mt-2 block uppercase tracking-widest">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  )
}
