import type { Metadata } from 'next'
import { Suspense } from 'react'

import AreaSeniorTabs from '@/app/area-senior/AreaSeniorTabs'
import HeroSecondary from '@/components/hero/HeroSecondary'
import Slider from '@/components/slider/Slider'
import { images } from '@/data/area-senior/images-data'

export const metadata: Metadata = {
  description:
    'Apoio e serviços dedicados à terceira idade: centro de dia, serviço de apoio domiciliário e estrutura residencial para pessoas idosas (ERPI).',
  openGraph: {
    description:
      'Apoio e serviços dedicados à terceira idade: centro de dia, serviço de apoio domiciliário e estrutura residencial para pessoas idosas (ERPI).',
    images: [
      {
        alt: 'Área Sénior no Centro Social da Freguesia de Casal Comba',
        height: 427,
        url: '/images/area-senior/erpi.jpg',
        width: 640,
      },
    ],
    title: 'Área Sénior',
    url: '/area-senior',
  },
  title: 'Área Sénior',
  twitter: {
    card: 'summary_large_image',
    description:
      'Apoio e serviços dedicados à terceira idade: centro de dia, serviço de apoio domiciliário e estrutura residencial para pessoas idosas (ERPI).',
    images: ['/images/area-senior/erpi.jpg'],
    title: 'Área Sénior',
  },
}

export default function AreaSenior() {
  return (
    <main id="main-content">
      <HeroSecondary
        imageUrl="/images/area-senior/hero.avif"
        title="Área Sénior"
      />
      <Suspense>
        <AreaSeniorTabs />
      </Suspense>
      <Slider images={images} />
    </main>
  )
}
