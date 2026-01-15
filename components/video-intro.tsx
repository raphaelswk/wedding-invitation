"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { useLanguage } from "./language-context"
import { copy } from "@/lib/wedding-data"
import { Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"

const VIDEO_URL = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/envelope-intro-kN2AmnSLpb8WjzxrhsttGA06ebTzYf.mov"

let globalSetShowOverlay: ((show: boolean) => void) | null = null
let globalShowOverlay = true

export function useIntroState() {
  const [showOverlay, setShowOverlay] = useState(globalShowOverlay)

  useEffect(() => {
    globalSetShowOverlay = setShowOverlay
    return () => {
      globalSetShowOverlay = null
    }
  }, [])

  return showOverlay
}

export function VideoIntro() {
  const { language } = useLanguage()
  const t = copy[language]
  const [showOverlay, setShowOverlay] = useState(true)
  const [isClient, setIsClient] = useState(false)
  const [isFading, setIsFading] = useState(false)
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Check session storage and initialize
  useEffect(() => {
    setIsClient(true)
    const played = sessionStorage.getItem("introPlayed")
    if (played === "true") {
      setShowOverlay(false)
      globalShowOverlay = false
    }
  }, [])

  useEffect(() => {
    if (showOverlay) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    // Update global state for Navbar
    globalShowOverlay = showOverlay
    if (globalSetShowOverlay) {
      globalSetShowOverlay(showOverlay)
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [showOverlay])

  // Initialize audio element
  useEffect(() => {
    if (isClient) {
      audioRef.current = new Audio("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/song-ThvHEPYFYbpeWyJlAY90Gq0d17bQXm.mp3")
      audioRef.current.loop = true
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [isClient])

  const toggleMusic = useCallback(() => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause()
        setIsMusicPlaying(false)
      } else {
        audioRef.current.play()
        setIsMusicPlaying(true)
      }
    }
  }, [isMusicPlaying])

  const handleOpen = useCallback(async () => {
    if (isFading) return

    if (videoRef.current) {
      try {
        videoRef.current.muted = false
        await videoRef.current.play()
      } catch (error) {
        console.log("Video autoplay prevented")
      }
    }

    setTimeout(() => {
      // Start background music after video audio finishes
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => setIsMusicPlaying(true))
          .catch(() => console.log("Audio autoplay prevented"))
      }

      setIsFading(true)
      // After fade animation completes, unmount overlay
      setTimeout(() => {
        setShowOverlay(false)
        sessionStorage.setItem("introPlayed", "true")
      }, 500)
    }, 4000)
  }, [isFading])

  if (!isClient) return null

  // After intro is complete, show only the floating music button
  if (!showOverlay) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleMusic}
          className="h-12 w-12 rounded-full bg-card/90 shadow-lg backdrop-blur-sm border-border hover:bg-card"
          aria-label={isMusicPlaying ? t.envelopeMusicOff : t.envelopeMusicOn}
        >
          {isMusicPlaying ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
        </Button>
      </div>
    )
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#f5f0e8] transition-opacity duration-500 ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      onClick={handleOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          handleOpen()
        }
      }}
      aria-label={t.videoTapToOpen}
    >
      <video
        ref={videoRef}
        src={VIDEO_URL}
        className="absolute inset-0 w-full h-full object-cover"
        playsInline
        preload="auto"
      />

      {/* Tap to open hint - pulsing animation */}
      <div className="absolute bottom-20 left-0 right-0 flex justify-center pointer-events-none">
        <p
          className="text-sm sm:text-base tracking-widest uppercase animate-pulse font-serif"
          style={{
            color: "rgba(180,160,140,0.9)",
            textShadow: "0 1px 4px rgba(255,255,255,0.8)",
          }}
        >
          {t.videoTapToOpen}
        </p>
      </div>

      {/* Skip button */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          setShowOverlay(false)
          sessionStorage.setItem("introPlayed", "true")
        }}
        className="absolute bottom-8 right-8 text-xs tracking-wide underline underline-offset-4 transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b4a08c]/50 z-10"
        style={{ color: "rgba(180,160,140,0.7)" }}
      >
        {t.envelopeSkip}
      </button>
    </div>
  )
}

export function ReplayIntroButton() {
  const { language } = useLanguage()
  const t = copy[language]

  const handleReplay = () => {
    sessionStorage.removeItem("introPlayed")
    window.location.reload()
  }

  return (
    <button
      onClick={handleReplay}
      className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
    >
      {t.envelopeReplay}
    </button>
  )
}
