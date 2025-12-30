import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: {
    default: "Wild Nature Journey - Best Camping & Outdoor Gear Reviews 2025",
    template: "%s | Wild Nature Journey",
  },
  description:
    "Expert reviews and buying guides for camping and outdoor gear. Honest, in-depth analysis to help you make informed decisions. Updated 2025.",
  keywords: [
    'camping gear reviews',
    'outdoor equipment',
    'camping reviews',
    'hiking gear',
    'camping equipment',
    'outdoor gear guide',
    'best camping gear',
  ],
  authors: [{ name: 'Wild Nature Journey' }],
  creator: 'Wild Nature Journey',
  publisher: 'Wild Nature Journey',
  generator: "v0.app",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'http://localhost:3000',
    siteName: 'Wild Nature Journey',
    title: 'Wild Nature Journey - Best Camping & Outdoor Gear Reviews',
    description: 'Expert reviews and buying guides for camping and outdoor gear.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wild Nature Journey - Best Camping & Outdoor Gear Reviews',
    description: 'Expert reviews and buying guides for camping and outdoor gear.',
    creator: '@wildnaturejourney',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'http://localhost:3000',
    types: {
      'application/rss+xml': 'http://localhost:3000/feed.xml',
    },
  },
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`} suppressHydrationWarning>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
