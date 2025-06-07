import { Suspense } from 'react'

import HeroSecondary from '@/components/hero/HeroSecondary'
import Slider from '@/components/slider/Slider'
import Tabs from '@/components/tabs/Tabs'
import { images } from '@/data/area-senior/images-data'
import { data } from '@/data/area-senior/tabs-data'

export default function AreaSenior() {
  return (
    <main>
      <HeroSecondary
        imageUrl="/images/area-senior/hero.avif"
        title="Área Sénior"
      />
      <Suspense>
        <Tabs data={data} />
      </Suspense>
      <Slider images={images} />
    </main>
  )
}
