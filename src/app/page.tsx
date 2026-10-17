import type { Metadata } from 'next'

import Callout from '@/components/callout/Callout'
import Features from '@/components/features/Features'
import HeroPrimary from '@/components/hero/HeroPrimary'
import { featuresData } from '@/data/home/features-data'

export const metadata: Metadata = {
  description:
    'Centro Social da Freguesia de Casal Comba — Instituição Particular de Solidariedade Social (IPSS) ao serviço da comunidade, com respostas para infância e terceira idade.',
}

export default function Home() {
  return (
    <main className="mt-[var(--header-height)]" id="main-content">
      <HeroPrimary />
      <Callout />
      <Features data={featuresData} />
    </main>
  )
}
