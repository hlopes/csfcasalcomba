import HeroSecondary from '@/components/hero/HeroSecondary'
import SectionHeader from '@/components/section-header/SectionHeader'
import SectionWrapper from '@/components/section-wrapper/SectionWrapper'

export default function Home() {
  return (
    <main>
      <HeroSecondary
        imageUrl="/images/heros/hero-instituicao.avif"
        title="A Instituição"
      />
      <SectionWrapper>
        <div className="mx-auto text-center">
          <SectionHeader
            description="O Centro Social da Freguesia de Casal Comba é uma Instituição Particular de Solidariedade Social, com sede em Casal Comba, Concelho de Mealhada."
            title={''}
          />
        </div>
      </SectionWrapper>
    </main>
  )
}
