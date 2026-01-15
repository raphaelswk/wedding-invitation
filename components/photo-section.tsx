"use client"

import Image from "next/image"
import { useLanguage } from "./language-context"

export function PhotoSection() {
  const { t } = useLanguage()

  return (
    <section className="relative h-[60vh] md:h-[80vh]">
      {/* Replace /couple-1.jpg with real couple photo */}
      <Image src="/romantic-couple.JPG" alt="Couple portrait" fill className="object-cover object-top" style={{ objectPosition: "center 30%" }}/>
      <div className="absolute inset-0 bg-foreground/30" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4 max-w-2xl">
          <blockquote className="font-serif text-2xl md:text-4xl text-background font-light italic text-balance">
            "{t("photoQuote")}"
          </blockquote>
        </div>
      </div>
    </section>
  )
}
