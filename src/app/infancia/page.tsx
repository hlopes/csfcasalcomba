import type { Metadata } from 'next'
import { Suspense } from 'react'

import InfanciaTabs from '@/app/infancia/InfanciaTabs'
import HeroSecondary from '@/components/hero/HeroSecondary'
import Slider from '@/components/slider/Slider'
import { images } from '@/data/infancia/images-data'

export const metadata: Metadata = {
  description:
    'Respostas sociais dedicadas à infância: creche, educação pré-escolar e centro de atividades de tempos livres (CATL).',
  openGraph: {
    description:
      'Respostas sociais dedicadas à infância: creche, educação pré-escolar e centro de atividades de tempos livres (CATL).',
    images: [
      {
        alt: 'Infância no Centro Social da Freguesia de Casal Comba',
        height: 427,
        url: '/images/infancia/creche.jpg',
        width: 640,
      },
    ],
    title: 'Infância',
    url: '/infancia',
  },
  title: 'Infância',
  twitter: {
    card: 'summary_large_image',
    description:
      'Respostas sociais dedicadas à infância: creche, educação pré-escolar e centro de atividades de tempos livres (CATL).',
    images: ['/images/infancia/creche.jpg'],
    title: 'Infância',
  },
}

export default function Infancia() {
  return (
    <main id="main-content">
      <HeroSecondary imageUrl="/images/infancia/hero.avif" title="Infância" />
      <Suspense>
        <InfanciaTabs />
      </Suspense>
      <Slider images={images} />
    </main>
  )
}
