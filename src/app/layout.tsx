import type { Metadata } from 'next'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { MotionConfig } from 'framer-motion'
import { ThemeProvider } from 'next-themes'
import { Almendra, Comic_Neue, Source_Sans_3 } from 'next/font/google'

import './globals.css'

import { ReactNode } from 'react'

import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import ScrollToTop from '@/components/scroll-to-top/ScrollToTop'
import { Toaster } from '@/components/ui/sonner'

// TODO: Re-enable when IRS campaign is active again
// import IRSDialog from './IRSDialog'

const comic = Comic_Neue({
  subsets: ['latin'],
  variable: '--font-comic-neue',
  weight: '400',
})

const almendra = Almendra({
  subsets: ['latin'],
  variable: '--font-almendra',
  weight: '400',
})

const source = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source',
  weight: ['400', '600'],
})

export const metadata: Metadata = {
  description: 'Ao serviço da comunidade',
  title: 'Centro Social da Freguesia de Casal Comba',
}

type RootLayoutProps = {
  readonly children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body
        className={`${almendra.variable} ${source.variable} ${comic.variable} antialiased`}
        id="scrollable"
      >
        <MotionConfig reducedMotion="user">
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            disableTransitionOnChange
            enableSystem
          >
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
            {/* TODO: Re-enable when IRS campaign is active again */}
            {/* <IRSDialog /> */}
            <Toaster richColors />
          </ThemeProvider>
        </MotionConfig>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
