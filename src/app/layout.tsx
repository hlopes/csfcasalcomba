import type { Metadata } from 'next'

import Lines from '@/components/background-effects/Lines'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import { Analytics } from '@vercel/analytics/react'

import './globals.css'

import { SpeedInsights } from '@vercel/speed-insights/next'
import { ThemeProvider } from 'next-themes'
import { Comic_Neue } from 'next/font/google'
import { ReactNode } from 'react'

const comic = Comic_Neue({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  description: 'Ao serviço da comunidade',
  title: 'Centro Social da Freguesia de Casal Comba',
}

type RootLayoutProps = {
  readonly children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${comic.className} antialiased`} id="scrollable">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
          enableSystem
        >
          <Lines />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
