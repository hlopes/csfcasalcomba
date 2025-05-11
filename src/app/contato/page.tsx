import EmailForm from '@/app/contato/email-form'
import HeroSecondary from '@/components/hero/HeroSecondary'
import SectionHeader from '@/components/section-header/SectionHeader'
import SectionWrapper from '@/components/section-wrapper/SectionWrapper'

export default function Contato() {
  return (
    <main>
      <HeroSecondary imageUrl="/images/contato/hero.jpg" title="Contato" />
      <SectionWrapper>
        <SectionHeader
          description="Gostaria de obter alguma informação adicional? Teve algum problema técnico usando o site? Informe-nos."
          title={''}
        />
      </SectionWrapper>

      <EmailForm />
    </main>
  )
}
