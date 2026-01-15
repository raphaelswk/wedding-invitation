"use client"

import { useLanguage } from "./language-context"
import { weddingDetails } from "@/lib/wedding-data"

export function ScheduleSection() {
  const { t } = useLanguage()

  return (
    <section id="schedule" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">{t("scheduleTitle")}</h2>
          <p className="text-muted-foreground">{t("scheduleSubtitle")}</p>
          <div className="w-24 h-px bg-accent mx-auto mt-6" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-8">
            {weddingDetails.scheduleItems.map((item, index) => (
              <div
                key={item.titleKey}
                className={`relative flex items-center gap-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Time bubble */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-accent md:-translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
                    <span className="text-accent font-medium text-sm uppercase tracking-wider">{item.time}</span>
                    <h3 className="font-serif text-xl text-foreground mt-2">{t(item.titleKey)}</h3>
                    {item.descriptionKey && (
                      <p className="text-muted-foreground text-sm mt-1">{t(item.descriptionKey)}</p>
                    )}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
