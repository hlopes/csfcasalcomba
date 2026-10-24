import type { Metadata } from 'next'
import { Suspense } from 'react'

import Accordion from '@/components/accordion/Accordion'
import HeroSecondary from '@/components/hero/HeroSecondary'
import SectionHeader from '@/components/section-header/SectionHeader'
import SectionWrapper from '@/components/section-wrapper/SectionWrapper'
import { data } from '@/data/documentos/docs-data'

export const metadata: Metadata = {
  description:
    'Consulte os principais documentos institucionais e de prestação de contas do Centro Social da Freguesia de Casal Comba.',
  openGraph: {
    description:
      'Consulte os principais documentos institucionais e de prestação de contas do Centro Social da Freguesia de Casal Comba.',
    images: [
      {
        alt: 'Documentos do Centro Social da Freguesia de Casal Comba',
        height: 1278,
        url: '/images/documentos/hero.jpg',
        width: 1920,
      },
    ],
    title: 'Documentos',
    url: '/documentos',
  },
  title: 'Documentos',
  twitter: {
    card: 'summary_large_image',
    description:
      'Consulte os principais documentos institucionais e de prestação de contas do Centro Social da Freguesia de Casal Comba.',
    images: ['/images/documentos/hero.jpg'],
    title: 'Documentos',
  },
}

export default function Documentos() {
  return (
    <main id="main-content">
      <HeroSecondary
        imageUrl="/images/documentos/hero.jpg"
        title="Documentos"
      />
      <SectionWrapper>
        <SectionHeader
          description="
          Nós acreditamos que a confiança começa com a transparência por isso apresentamos os principais documentos financeiros que indicam como tem sido a nossa performance e gestão de recursos."
          title=""
        />
      </SectionWrapper>
      <Suspense>
        <Accordion data={data} />
      </Suspense>
    </main>
  )
}
