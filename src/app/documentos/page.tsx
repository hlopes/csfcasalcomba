import Accordion from '@/components/accordion/Accordion'
import HeroSecondary from '@/components/hero/HeroSecondary'
import SectionHeader from '@/components/section-header/SectionHeader'
import SectionWrapper from '@/components/section-wrapper/SectionWrapper'
import { data } from '@/data/documentos/docs-data'

export default function Documentos() {
  return (
    <main>
      <HeroSecondary
        imageUrl="/images/documentos/hero.jpg"
        title="Documentos"
      />
      <SectionWrapper>
        <SectionHeader
          description="
          Nós acreditamos que a confiança começa com a transparência por isso apresentamos os principais documentos financeiros que indicam como tem sido a nossa performance e gestão de recursos."
          title=""
        />
      </SectionWrapper>
      <Accordion data={data} />
    </main>
  )
}
