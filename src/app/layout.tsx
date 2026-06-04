import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { Navbar } from "../components/navbar"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shashank.ink"),
  title: {
    default: "Shashank Poola",
    template: "%s | Shashank Poola",
  },
  description: "Developer, cardist and maker of things.",
  openGraph: {
    title: "Shashank Poola",
    description: "Developer, cardist and maker of things.",
    url: "https://www.shashank.ink",
    siteName: "Shashank Poola",
    locale: "en_US",
    type: "website",
    images: ["https://www.shashank.ink/og/home"],
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  twitter: {
    title: "Shashank Poola",
    card: "summary_large_image",
    creator: "@shashankpoola",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} antialiased min-h-screen font-mono`}
      >
        <div className="max-w-4xl mx-auto px-5 sm:px-4 py-8">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}
