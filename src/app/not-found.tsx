import AnimateLeft from '@/components/animations/AnimateLeft'
import ArrowLink from '@/components/arrow-link/ArrowLink'
import HeroSecondary from '@/components/hero/HeroSecondary'
import SectionHeader from '@/components/section-header/SectionHeader'
import SectionWrapper from '@/components/section-wrapper/SectionWrapper'

export default function Home() {
  return (
    <main>
      <HeroSecondary imageUrl="/images/404/404.jpg" title="404" />
      <SectionWrapper>
        <SectionHeader
          description="A página que procura não existe."
          title={''}
        />
        <AnimateLeft transition={{ delay: 0.4, duration: 0.2 }}>
          <div className="flex justify-center">
            <ArrowLink href="/" text="Voltar ao ínicio" variant="outline" />
          </div>
        </AnimateLeft>
      </SectionWrapper>
    </main>
  )
}
