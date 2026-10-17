import type { Metadata } from 'next'

import EmailForm from '@/app/contato/email-form'
import HeroSecondary from '@/components/hero/HeroSecondary'
import SectionHeader from '@/components/section-header/SectionHeader'
import SectionWrapper from '@/components/section-wrapper/SectionWrapper'

export const metadata: Metadata = {
  description:
    'Entre em contacto com o Centro Social da Freguesia de Casal Comba. Encontre as nossas informações de contacto, morada e envie-nos uma mensagem.',
  title: 'Contato',
}

export default function Contato() {
  return (
    <main id="main-content">
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
