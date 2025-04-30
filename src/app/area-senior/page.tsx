import HeroSecondary from '@/components/hero/HeroSecondary'
import Tabs from '@/components/tabs/Tabs'
import { data } from '@/data/area-senior-tabs-data'

export default function AreaSenior() {
  return (
    <main>
      <HeroSecondary
        imageUrl="/images/area-senior/hero.avif"
        title="Área Sénior"
      />
      <Tabs data={data} />
    </main>
  )
}
