import { Suspense } from 'react'

import AreaSeniorTabs from '@/app/area-senior/AreaSeniorTabs'
import HeroSecondary from '@/components/hero/HeroSecondary'
import Slider from '@/components/slider/Slider'
import { images } from '@/data/area-senior/images-data'

export default function AreaSenior() {
  return (
    <main>
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
