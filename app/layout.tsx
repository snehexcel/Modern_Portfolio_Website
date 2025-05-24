import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import Navigation from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sneha - Full-Stack Developer",
  description: "Professional portfolio showcasing React.js, Next.js, and Fastify development expertise",
  authors: [{ name: "Sneha" }],
  openGraph: {
    title: "Sneha - Full-Stack Developer",
    description: "Professional portfolio showcasing React.js, Next.js, and Fastify development expertise",
    url: "https://sneha.com",
    siteName: "Sneha",
    images: [
      {
        url: "https://sneha.com/og.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Sneha - Full-Stack Developer",
    description: "Professional portfolio showcasing React.js, Next.js, and Fastify development expertise",
    images: ["https://sneha.com/og.jpg"],
    card: "summary_large_image",
    creator: "@Sneha",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navigation />
          <main>{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
