"use client"

import type React from "react"

import { useLanguage } from "./language-context"
import { weddingDetails } from "@/lib/wedding-data"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Heart, Footprints, Clock, Cloud, Compass } from "lucide-react"

const iconMap: Record<string, React.ElementType> = {
  sparkles: Sparkles,
  heart: Heart,
  footprints: Footprints,
  clock: Clock,
  cloud: Cloud,
}

export function RecommendationsSection() {
  const { t } = useLanguage()

  return (
    <section id="recommendations" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">{t("recTitle")}</h2>
          <p className="text-muted-foreground">{t("recSubtitle")}</p>
          <div className="w-24 h-px bg-accent mx-auto mt-6" />
        </div>

        {/* Recommendation Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {weddingDetails.recommendations.map((rec) => {
            const Icon = iconMap[rec.icon] || Sparkles
            const isWhiteCard = rec.titleKey === "recWhite"
            return (
              <Card
                key={rec.titleKey}
                className={`border-border ${
                  isWhiteCard ? "bg-accent/10 border-accent/30 ring-2 ring-accent/20" : "bg-card"
                }`}
              >
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                      isWhiteCard ? "bg-accent/30" : "bg-accent/20"
                    }`}
                  >
                    <Icon className={`w-6 h-6 ${isWhiteCard ? "text-accent" : "text-accent"}`} />
                  </div>
                  <h3 className="font-serif text-lg text-foreground mb-2">{t(rec.titleKey)}</h3>
                  <p className="text-muted-foreground text-sm">{t(rec.bodyKey)}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Weekend Ideas */}
        {/* <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2">{t("recWeekendTitle")}</h3>
            <p className="text-muted-foreground">{t("recWeekendSubtitle")}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {weddingDetails.weekendIdeas.map((idea) => (
              <Card key={idea.titleKey} className="bg-card border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <Compass className="w-5 h-5 text-accent" />
                  </div>
                  <h4 className="font-serif text-base text-foreground mb-2">{t(idea.titleKey)}</h4>
                  <p className="text-muted-foreground text-sm">{t(idea.bodyKey)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}
