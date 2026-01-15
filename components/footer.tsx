"use client"

import { useLanguage } from "./language-context"
import { weddingDetails } from "@/lib/wedding-data"
import { Heart } from "lucide-react"
import { ReplayIntroButton } from "./video-intro"

export function Footer() {
  const { language, t } = useLanguage()

  return (
    <footer className="py-16 bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="font-serif text-3xl md:text-4xl mb-4">{weddingDetails.coupleNames}</h3>
        <p className="text-background/70 mb-8">{weddingDetails.dateDisplay[language]}</p>

        {/* <p className="text-background/60 text-sm mb-4">
          {t("footerContact")}{" "}
          <a
            href={`mailto:${weddingDetails.contactEmail}`}
            className="underline hover:text-background transition-colors"
          >
            {weddingDetails.contactEmail}
          </a>
        </p> */}

        <div className="mb-6">
          <ReplayIntroButton />
        </div>

        <div className="flex items-center justify-center gap-2 text-background/50 text-sm">
          <span>{t("footerMadeWith")}</span>
          <Heart className="w-4 h-4 fill-current text-red-500" />
        </div>
      </div>
    </footer>
  )
}
