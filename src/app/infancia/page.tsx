import type { Metadata } from 'next'
import { Suspense } from 'react'

import InfanciaTabs from '@/app/infancia/InfanciaTabs'
import HeroSecondary from '@/components/hero/HeroSecondary'
import Slider from '@/components/slider/Slider'
import { images } from '@/data/infancia/images-data'

export const metadata: Metadata = {
  description:
    'Respostas sociais dedicadas à infância: creche, educação pré-escolar e centro de atividades de tempos livres (CATL).',
  title: 'Infância',
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
