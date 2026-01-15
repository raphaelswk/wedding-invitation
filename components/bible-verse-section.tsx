"use client"

import { useLanguage } from "./language-context"
import { weddingDetails } from "@/lib/wedding-data"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, ExternalLink } from "lucide-react"

export function BibleVerseSection() {
  const { language, t } = useLanguage()
  const verse = weddingDetails.bibleVerse

  const reference = verse.reference[language]
  const version = verse.version[language]
  const paraphrase = language === "en" ? verse.text.enParaphrase : verse.text.ptBRParaphrase
  const fullText = language === "en" ? verse.text.enFull : verse.text.ptBRFull
  const link = verse.links[language]

  // Show full text if provided, otherwise show paraphrase
  const displayText = fullText || paraphrase

  return (
    <section id="verse" className="py-24 bg-secondary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">{t("verseTitle")}</h2>
          <p className="text-muted-foreground">{t("verseNote")}</p>
          <div className="w-24 h-px bg-accent mx-auto mt-6" />
        </div>

        <Card className="bg-card border-border shadow-lg">
          <CardContent className="p-8 md:p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-8">
              <BookOpen className="w-8 h-8 text-accent" />
            </div>

            <blockquote className="font-serif text-xl md:text-2xl text-foreground italic leading-relaxed mb-6 text-balance">
              "{displayText}"
            </blockquote>

            <p className="text-muted-foreground mb-6">
              {reference} ({version})
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
