import type { Metadata } from 'next'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { MotionConfig } from 'motion/react'
import { ThemeProvider } from 'next-themes'
import { Lexend, Source_Sans_3 } from 'next/font/google'

import './globals.css'

import { ReactNode } from 'react'

import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import ExternalLinksMenu from '@/components/external-links-menu/ExternalLinksMenu'
import ScrollToTop from '@/components/scroll-to-top/ScrollToTop'
import { Toaster } from '@/components/ui/sonner'

// TODO: Re-enable when IRS campaign is active again
// import IRSDialog from './IRSDialog'

const display = Lexend({
  subsets: ['latin'],
  variable: '--font-display-sans',
  weight: ['400', '600', '700'],
})

const source = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source',
  weight: ['400', '600', '700'],
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
        className={`${display.variable} ${source.variable} antialiased`}
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
            <ExternalLinksMenu />
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
