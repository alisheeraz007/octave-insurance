import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Octave Insurance Agency - Medicare & Final Expense Insurance",
  description:
    "Professional Medicare supplement, Medicare advantage, and final expense insurance services. Get personalized coverage solutions from trusted insurance experts.",
  generator: "v0.app",
  keywords: "Medicare supplement, Medicare advantage, final expense insurance, health insurance, senior insurance",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${poppins.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
