import Callout from '@/components/callout/Callout'
import Features from '@/components/features/Features'
import HeroPrimary from '@/components/hero/HeroPrimary'
import { featuresData } from '@/data/home/features-data'

export default function Home() {
  return (
    <main className="mt-40">
      <HeroPrimary />
      <Callout />
      <Features data={featuresData} />
    </main>
  )
}
