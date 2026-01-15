"use client"

import { useLanguage } from "./language-context"
import { weddingDetails } from "@/lib/wedding-data"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const { t } = useLanguage()

  return (
    <section id="faq" className="py-24 bg-secondary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">{t("faqTitle")}</h2>
          <p className="text-muted-foreground">{t("faqSubtitle")}</p>
          <div className="w-24 h-px bg-accent mx-auto mt-6" />
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {weddingDetails.faqItems.map((item, index) => (
            <AccordionItem
              key={item.qKey}
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="font-serif text-left text-foreground hover:no-underline">
                {t(item.qKey)}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{t(item.aKey)}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
