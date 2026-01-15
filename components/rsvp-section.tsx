"use client"

import { useLanguage } from "./language-context"
import { Card, CardContent } from "@/components/ui/card"

export function RsvpSection() {
  const { t } = useLanguage()

  return (
    <section id="rsvp" className="py-24 bg-background">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">{t("rsvpTitle")}</h2>
          <div className="w-24 h-px bg-accent mx-auto mt-6" />
        </div>

        <Card className="bg-card border-border">
          <CardContent className="p-8 md:p-12 text-center">
            {/* Decorative monogram */}
            <div className="mb-8">
              <div className="w-20 h-20 mx-auto rounded-full border-2 border-accent/30 flex items-center justify-center">
                <span className="font-serif text-2xl text-accent italic">A&R</span>
              </div>
            </div>

            {/* Warm message */}
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md mx-auto">{t("rsvpMessage")}</p>

            {/* Decorative flourish */}
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="w-12 h-px bg-accent/40" />
              <svg className="w-5 h-5 text-accent/60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <div className="w-12 h-px bg-accent/40" />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
