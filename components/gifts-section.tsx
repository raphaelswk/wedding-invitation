"use client"

import { useState } from "react"
import { useLanguage } from "./language-context"
import { weddingDetails } from "@/lib/wedding-data"
import { Copy, Check, ExternalLink, Building2, CreditCard, Gift } from "lucide-react"

export function GiftsSection() {
  const { t } = useLanguage()
  const [copied, setCopied] = useState(false)

  const handleCopyIban = async () => {
    try {
      await navigator.clipboard.writeText(weddingDetails.gifts.iban)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy IBAN:", err)
    }
  }

  return (
    <section id="gifts" className="py-20 lg:py-28 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">{t("giftsTitle")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">{t("giftsIntro")}</p>
        </div>

        {/* Gift Options Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* IBAN Card */}
          <div className="bg-background rounded-lg border border-border p-6 lg:p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif text-lg text-foreground">{t("giftsIbanTitle")}</h3>
            </div>

            <div className="space-y-4 flex-1">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{t("giftsAccountName")}</p>
                <p className="text-foreground font-medium">{weddingDetails.gifts.accountName}</p>
              </div>

              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{t("giftsIbanLabel")}</p>
                <p className="text-foreground font-mono text-sm break-all">{weddingDetails.gifts.iban}</p>
              </div>
            </div>

            <button
              onClick={handleCopyIban}
              className="mt-6 w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  {t("giftsCopied")}
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  {t("giftsCopyIban")}
                </>
              )}
            </button>
          </div>

          {/* Revolut Card */}
          <div className="bg-background rounded-lg border border-border p-6 lg:p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif text-lg text-foreground">{t("giftsRevolutTitle")}</h3>
            </div>

            <p className="text-muted-foreground text-sm flex-1 leading-relaxed">{t("giftsRevolutDesc")}</p>

            <a
              href={weddingDetails.gifts.revolutLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              {t("giftsRevolutButton")}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Registry Card */}
          <div className="bg-background rounded-lg border border-border p-6 lg:p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Gift className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif text-lg text-foreground">{t("giftsRegistryTitle")}</h3>
            </div>

            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{t("giftsRegistryIntro")}</p>

            <div className="space-y-3 mt-auto">
              {weddingDetails.gifts.registryLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between px-4 py-3 border border-border rounded-md hover:bg-secondary/50 transition-colors text-sm text-foreground"
                >
                  {link.name}
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
