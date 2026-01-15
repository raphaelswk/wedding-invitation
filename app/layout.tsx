import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({ subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"] })

// SEO metadata - updates based on selected language (client-side)
// For server-side language detection, implement i18n routing
export const metadata: Metadata = {
  metadataBase: new URL("http://alineraphael.ie/"),
  title: "Aline & Raphael | Wedding Invitation",
  description: "Join us to celebrate our wedding on April 11th, 2026 at Radisson Blu St. Helen's Hotel, Dublin.",
  openGraph: {
    title: "Aline & Raphael | Wedding Invitation",
    description: "Join us to celebrate our wedding on April 11th, 2026 at Radisson Blu St. Helen's Hotel, Dublin.",
    type: "website",
    images: ["/bg-hero-page.JPG"],
  },
  icons: {
    icon: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
