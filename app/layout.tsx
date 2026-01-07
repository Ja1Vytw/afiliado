import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import { SearchProvider } from "@/contexts/search-context"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ofertas Exclusivas | Links de Afiliados",
  description: "Encontre as melhores ofertas da Shopee, Mercado Livre e AliExpress",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  other: {
    "google-adsense-account": "ca-pub-5931382207027722",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5931382207027722"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={`font-sans antialiased`}>
        <SearchProvider>
          {children}
        </SearchProvider>
        <Analytics />
      </body>
    </html>
  )
}
