import { Suspense } from 'react'

import InfanciaTabs from '@/app/infancia/InfanciaTabs'
import HeroSecondary from '@/components/hero/HeroSecondary'
import Slider from '@/components/slider/Slider'
import { images } from '@/data/infancia/images-data'

export default function Infancia() {
  return (
    <main>
      <HeroSecondary imageUrl="/images/infancia/hero.avif" title="Infância" />
      <Suspense>
        <InfanciaTabs />
      </Suspense>
      <Slider images={images} />
    </main>
  )
}
