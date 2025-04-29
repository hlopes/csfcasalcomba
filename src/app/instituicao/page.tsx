import Boards from '@/components/boards/Boards'
import Cards from '@/components/cards/Cards'
import HeroSecondary from '@/components/hero/HeroSecondary'
import SectionHeader from '@/components/section-header/SectionHeader'
import SectionWrapper from '@/components/section-wrapper/SectionWrapper'
import TextColumns from '@/components/text-columns/Text-Columns'
import { data as boardsData } from '@/data/boards-data'
import { data as cardsData } from '@/data/cards-data'
import { data as valuesData } from '@/data/values-data'
import { data as visionAndMissionData } from '@/data/vision-mission-data'

export default function Home() {
  return (
    <main>
      <HeroSecondary
        imageUrl="/images/heros/hero-instituicao.avif"
        title="A Instituição"
      />
      <SectionWrapper>
        <SectionHeader
          description="O Centro Social da Freguesia de Casal Comba é uma Instituição Particular de Solidariedade Social, com sede em Casal Comba, Concelho de Mealhada."
          title={''}
        />
      </SectionWrapper>
      <TextColumns data={visionAndMissionData} />
      <Cards data={cardsData} />
      <TextColumns data={valuesData} />
      <SectionWrapper>
        <SectionHeader
          description="Orgãos eleitos e responsáveis por representar e gerir a organização, tomando decisões importantes e assegurando o cumprimento das leis e regulamentos."
          title="Orgão Sociais"
        />
      </SectionWrapper>
      <Boards data={boardsData} />
    </main>
  )
}
