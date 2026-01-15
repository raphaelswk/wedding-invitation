import { LanguageProvider } from "@/components/language-context"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { DetailsSection } from "@/components/details-section"
import { PhotoSection } from "@/components/photo-section"
import { ScheduleSection } from "@/components/schedule-section"
import { TravelSection } from "@/components/travel-section"
import { RecommendationsSection } from "@/components/recommendations-section"
import { BibleVerseSection } from "@/components/bible-verse-section"
import { GiftsSection } from "@/components/gifts-section"
import { RsvpSection } from "@/components/rsvp-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { VideoIntro } from "@/components/video-intro"

export default function WeddingPage() {
  return (
    <LanguageProvider>
      <VideoIntro />
      <main className="min-h-screen">
        <Navbar />
        <HeroSection />
        <BibleVerseSection />
        <DetailsSection />
        <PhotoSection />
        <ScheduleSection />
        {/* <TravelSection /> */}
        <RecommendationsSection />
        <GiftsSection />
        <RsvpSection />
        <FaqSection />
        <Footer />
      </main>
    </LanguageProvider>
  )
}
