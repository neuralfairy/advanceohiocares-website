import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Advance Ohio Cares Solutions - Contact Validator & Data Verification",
  description:
    "Professional B2B contact validation and data verification tools. Clean, verify, and enrich email/contact data for better outbound sales outcomes.",
  icons: {
    icon: "/favicon.png",
  },
  keywords: "email verification, data validation, contact validator, contact accuracy, B2B sales tools",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
