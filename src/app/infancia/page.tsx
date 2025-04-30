import HeroSecondary from '@/components/hero/HeroSecondary'
import Slider from '@/components/slider/Slider'
import Tabs from '@/components/tabs/Tabs'
import { images } from '@/data/infancia/images-data'
import { data } from '@/data/infancia/tabs-data'

export default function AreaSenior() {
  return (
    <main>
      <HeroSecondary imageUrl="/images/infancia/hero.avif" title="Infância" />
      <Tabs data={data} />
      <Slider images={images} />
    </main>
  )
}
