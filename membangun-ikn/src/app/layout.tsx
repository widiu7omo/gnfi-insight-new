import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/store/providers'
import Script from 'next/script'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <Script
        src="https://platform-api.sharethis.com/js/sharethis.js#property=65d7025dafa82e0019c9e3e8&product=sop"
        async
      />
      <body style={{ ...inter.style }} className="w-full">
        <Providers>{children}</Providers>
        <GoogleAnalytics gaId="G-HPD8SMYT1T" />
      </body>
    </html>
  )
}
