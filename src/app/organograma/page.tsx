import Diagram from '@/app/organograma/diagram'
import HeroSecondary from '@/components/hero/HeroSecondary'
import SectionWrapper from '@/components/section-wrapper/SectionWrapper'

export default function Organograma() {
  return (
    <main>
      <HeroSecondary
        imageUrl="/images/organograma/hero.jpg"
        title="Organograma"
      />
      <SectionWrapper>
        <Diagram />
      </SectionWrapper>
    </main>
  )
}
