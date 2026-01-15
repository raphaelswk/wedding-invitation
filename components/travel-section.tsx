"use client"

import { useLanguage } from "./language-context"
import { weddingDetails } from "@/lib/wedding-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Car, MapPin, Train, Bus } from "lucide-react"

export function TravelSection() {
  const { t } = useLanguage()

  const transportOptions = [
    { icon: Car, titleKey: "travelDriving", detailsKey: "travelDrivingDetails" },
    { icon: Car, titleKey: "travelTaxi", detailsKey: "travelTaxiDetails" },
    { icon: Train, titleKey: "travelPublic", detailsKey: "travelPublicDetails" },
  ]

  return (
    <section id="travel" className="py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">{t("travelTitle")}</h2>
          <p className="text-muted-foreground">{t("travelSubtitle")}</p>
          <div className="w-24 h-px bg-accent mx-auto mt-6" />
        </div>

        {/* Accommodation */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl text-foreground mb-8 text-center">{t("travelAccommodation")}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {weddingDetails.accommodationOptions.map((option) => (
              <Card key={option.titleKey} className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="font-serif text-lg">{t(option.titleKey)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-3">{t(option.detailsKey)}</p>
                  {option.distanceKey && (
                    <div className="flex items-center gap-2 text-accent text-sm">
                      <MapPin className="w-4 h-4" />
                      {t(option.distanceKey)}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Getting There */}
        <div>
          <h3 className="font-serif text-2xl text-foreground mb-8 text-center">{t("travelGettingThere")}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {transportOptions.map((option) => {
              const Icon = option.icon
              return (
                <Card key={option.titleKey} className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-serif text-lg text-foreground mb-2">{t(option.titleKey)}</h4>
                    <p className="text-muted-foreground text-sm">{t(option.detailsKey)}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Shuttle Info */}
          {weddingDetails.hasShuttle && (
            <Card className="mt-8 bg-accent/10 border-accent/30">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                  <Bus className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-foreground mb-2">{t("travelShuttle")}</h4>
                  <p className="text-muted-foreground text-sm">{t("travelShuttleDetails")}</p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}
