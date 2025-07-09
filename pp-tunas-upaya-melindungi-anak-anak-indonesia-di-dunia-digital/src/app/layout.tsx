import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/store/providers'
import Script from 'next/script'
import { GoogleAnalytics } from '@next/third-parties/google'
import localFont from "next/font/local";
import generatedMeta from '@public/article/generated-meta.json'
import { baseUrl } from '@/constants/meta'
const inter = Inter({
  style: "normal",
  weight: ["300", "400", "700"],
  display: "auto",
  subsets: ["latin"],
  variable: "--font-inter",
});

const apple = localFont({
  src: [
    {
      path: "../../public/font/AppleGaramond-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/font/AppleGaramond.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/AppleGaramond-Light.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-apple",
});
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: generatedMeta.seo.title,
  description: generatedMeta.seo.desc,
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="canonical"
          href={`${baseUrl}/`}
          key="canonical"
        />
        <link rel="icon" href={`${baseUrl}/favicon.ico`} type="image/x-icon" />
      </head>
      <Script defer id="foundation-widget" type="module" src="https://gnfifoundation.org/assets/widget/widget.js?v=10" crossOrigin="anonymous" widget-container="donation-container" />
      <Script
        src="https://platform-api.sharethis.com/js/sharethis.js#property=65d7025dafa82e0019c9e3e8&product=sop"
        async
      />
      <body style={{ ...inter.style }} className={`w-full ${apple.variable} font-sans`}>
        <Providers>{children}</Providers>
      </body>
      <GoogleAnalytics gaId="G-1CY08P02JH" />
    </html>
  )
}


