"use client"

import Image from "next/image"
import { useLanguage } from "./language-context"
import { weddingDetails } from "@/lib/wedding-data"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Info } from "lucide-react"

export function DetailsSection() {
  const { t } = useLanguage()

  return (
    <section id="details" className="py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">{t("detailsTitle")}</h2>
          <div className="w-24 h-px bg-accent mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Venue Photo */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            <Image src={weddingDetails.venue.venueImageSrc} alt={weddingDetails.venue.name} fill className="object-cover" />
          </div>

          {/* Details Cards */}
          <div className="space-y-6">
            {/* Ceremony & Reception */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-foreground mb-2">{t("detailsCeremony")}</h3>
                    <p className="text-muted-foreground">{t("detailsCeremonyTime")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Address */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl text-foreground mb-2">{t("detailsAddress")}</h3>
                    <p className="text-muted-foreground mb-4">{weddingDetails.venue.address}</p>
                    <Button asChild variant="outline" className="w-full sm:w-auto bg-transparent">
                      <a href={weddingDetails.venue.mapsLink} target="_blank" rel="noopener noreferrer">
                        <MapPin className="w-4 h-4 mr-2" />
                        {t("detailsOpenMaps")}
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Notes */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <Info className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-foreground mb-4">{t("detailsNotes")}</h3>
                    <ul className="space-y-3 text-muted-foreground text-sm">
                      <li className="flex gap-2">
                        <span className="text-accent">•</span>
                        {t("detailsUnplugged")}
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span>
                        {t("detailsPlusOneNote")}
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
