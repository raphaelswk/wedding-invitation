"use client"

import Image from "next/image"
import { useLanguage } from "./language-context"
import { weddingDetails } from "@/lib/wedding-data"
import { Countdown } from "./countdown"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export function HeroSection() {
  const { language, t } = useLanguage()

  const handleRsvpClick = () => {
    document.querySelector("#rsvp")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleCalendarClick = () => {
    // Generate ICS file for calendar
    const event = {
      title: `${weddingDetails.coupleNames} Wedding`,
      start: weddingDetails.dateTimeISO,
      location: weddingDetails.venue.address,
    }

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${new Date(event.start).toISOString().replace(/[-:]/g, "").split(".")[0]}Z
SUMMARY:${event.title}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`

    const blob = new Blob([icsContent], { type: "text/calendar" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "wedding.ics"
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Replace /hero.jpg with your actual hero image */}
        <Image src="/bg-hero-page.JPG" alt="Wedding hero background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
        <p className="text-background/90 uppercase tracking-[0.3em] text-sm mb-6">{t("heroWelcome")}</p>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-background font-light mb-6 text-balance">
          {weddingDetails.coupleNames}
        </h1>

        <p className="text-background/90 text-lg md:text-xl mb-4 font-light">{weddingDetails.dateDisplay[language]}</p>

        <p className="text-background/80 text-base md:text-lg mb-10">{weddingDetails.venue.name}</p>

        {/* Countdown */}
        <div className="mb-12">
          <Countdown />
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* <Button
            size="lg"
            onClick={handleRsvpClick}
            className="bg-background text-foreground hover:bg-background/90 px-8 py-6 text-base uppercase tracking-wider"
          >
            {t("heroRsvp")}
          </Button> */}
          <Button
            size="lg"
            variant="outline"
            onClick={handleCalendarClick}
            className="border-background text-background hover:bg-background/10 px-8 py-6 text-base uppercase tracking-wider bg-transparent"
          >
            <Calendar className="mr-2 h-5 w-5" />
            {t("heroCalendar")}
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-background/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-background/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
