"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "./language-context"
import { useIntroState } from "./video-intro"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const navItems = [
  { key: "navBibleVerse", href: "#verse" },
  { key: "navDetails", href: "#details" },
  { key: "navSchedule", href: "#schedule" },
  // { key: "navTravel", href: "#travel" },
  { key: "navRecommendations", href: "#recommendations" },
  { key: "navGifts", href: "#gifts" },
  { key: "navRsvp", href: "#rsvp" },
  { key: "navFaq", href: "#faq" },
]

export function Navbar() {
  const { language, setLanguage, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const showIntro = useIntroState()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (showIntro) {
    return null
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-sm" : "bg-transparent",
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Monogram */}
          <a
            href="#"
            className={cn(
              "font-serif text-xl lg:text-2xl font-medium tracking-wide transition-colors",
              scrolled ? "text-foreground" : "text-background",
            )}
          >
            A&R
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "text-sm tracking-wide transition-colors hover:opacity-70",
                  scrolled ? "text-foreground" : "text-background",
                )}
              >
                {t(item.key)}
              </button>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <div
              className={cn(
                "flex items-center rounded-full border p-1 text-sm",
                scrolled ? "border-border" : "border-background/30",
              )}
            >
              <button
                onClick={() => setLanguage("en")}
                className={cn(
                  "px-3 py-1 rounded-full transition-all text-xs font-medium",
                  language === "en"
                    ? scrolled
                      ? "bg-primary text-primary-foreground"
                      : "bg-background text-foreground"
                    : scrolled
                      ? "text-muted-foreground hover:text-foreground"
                      : "text-background/70 hover:text-background",
                )}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("ptBR")}
                className={cn(
                  "px-3 py-1 rounded-full transition-all text-xs font-medium",
                  language === "ptBR"
                    ? scrolled
                      ? "bg-primary text-primary-foreground"
                      : "bg-background text-foreground"
                    : scrolled
                      ? "text-muted-foreground hover:text-foreground"
                      : "text-background/70 hover:text-background",
                )}
              >
                PT
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={cn("lg:hidden p-2 transition-colors", scrolled ? "text-foreground" : "text-background")}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-4 py-3 text-foreground hover:bg-secondary transition-colors"
                >
                  {t(item.key)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
