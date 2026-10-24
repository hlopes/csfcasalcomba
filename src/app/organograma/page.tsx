import type { Metadata } from 'next'

import Diagram from '@/app/organograma/diagram'
import HeroSecondary from '@/components/hero/HeroSecondary'
import SectionWrapper from '@/components/section-wrapper/SectionWrapper'

export const metadata: Metadata = {
  description:
    'Estrutura organizacional e hierárquica do Centro Social da Freguesia de Casal Comba.',
  openGraph: {
    description:
      'Estrutura organizacional e hierárquica do Centro Social da Freguesia de Casal Comba.',
    images: [
      {
        alt: 'Organograma do Centro Social da Freguesia de Casal Comba',
        height: 427,
        url: '/images/organograma/hero.jpg',
        width: 640,
      },
    ],
    title: 'Organograma',
    url: '/organograma',
  },
  title: 'Organograma',
  twitter: {
    card: 'summary_large_image',
    description:
      'Estrutura organizacional e hierárquica do Centro Social da Freguesia de Casal Comba.',
    images: ['/images/organograma/hero.jpg'],
    title: 'Organograma',
  },
}

export default function Organograma() {
  return (
    <main id="main-content">
      <HeroSecondary
        imageUrl="/images/organograma/hero.jpg"
        title="Organograma"
      />
      <SectionWrapper>
        <Diagram />
      </SectionWrapper>
    </main>
  )
}
