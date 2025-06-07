import { Suspense } from 'react'

import HeroSecondary from '@/components/hero/HeroSecondary'
import Slider from '@/components/slider/Slider'
import Tabs from '@/components/tabs/Tabs'
import { images } from '@/data/infancia/images-data'
import { data } from '@/data/infancia/tabs-data'

export default function Infancia() {
  return (
    <main>
      <HeroSecondary imageUrl="/images/infancia/hero.avif" title="Infância" />
      <Suspense>
        <Tabs data={data} />
      </Suspense>
      <Slider images={images} />
    </main>
  )
}
