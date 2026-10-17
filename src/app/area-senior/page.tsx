import type { Metadata } from 'next'
import { Suspense } from 'react'

import AreaSeniorTabs from '@/app/area-senior/AreaSeniorTabs'
import HeroSecondary from '@/components/hero/HeroSecondary'
import Slider from '@/components/slider/Slider'
import { images } from '@/data/area-senior/images-data'

export const metadata: Metadata = {
  description:
    'Apoio e serviços dedicados à terceira idade: centro de dia, serviço de apoio domiciliário e estrutura residencial para pessoas idosas (ERPI).',
  title: 'Área Sénior',
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
