import type React from "react"
import type { Metadata, Viewport } from "next"
import { DM_Sans, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { EVENT_YEAR, EVENT_PERIOD } from "@/config/site"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: `STL Valley ${EVENT_YEAR} | Camping Oficial do Festival STL`,
  description: `O camping oficial do festival STL ${EVENT_YEAR} em São Tomé das Letras. Hospedagem exclusiva com shows, estrutura completa, 96 chuveiros quentes, alimentação 24h e muito mais. ${EVENT_PERIOD}.`,
  keywords: [
    "camping oficial STL",
    "STL Valley",
    "hospedagem STL festival",
    "São Tomé das Letras",
    `festival ${EVENT_YEAR}`,
    "camping festival",
  ],
  authors: [{ name: "STL Clube de Camping e Entretenimento LTDA" }],
  openGraph: {
    title: `STL Valley ${EVENT_YEAR} | Camping Oficial do Festival STL`,
    description:
      "Viva a experiência completa do festival STL com hospedagem exclusiva, shows só para hóspedes e estrutura premium.",
    type: "website",
    locale: "pt_BR",
  },
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#2d5a27",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${dmSans.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
