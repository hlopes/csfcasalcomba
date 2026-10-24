import type { Metadata } from 'next'

import Boards from '@/components/boards/Boards'
import Cards from '@/components/cards/Cards'
import HeroSecondary from '@/components/hero/HeroSecondary'
import SectionHeader from '@/components/section-header/SectionHeader'
import SectionWrapper from '@/components/section-wrapper/SectionWrapper'
import TextColumns from '@/components/text-columns/TextColumns'
import { data as boardsData } from '@/data/instituicao/boards-data'
import { data as cardsData } from '@/data/instituicao/cards-data'
import { data as valuesData } from '@/data/instituicao/values-data'
import { data as visionAndMissionData } from '@/data/instituicao/vision-mission-data'

export const metadata: Metadata = {
  description:
    'Conheça a história, missão, visão, valores e órgãos sociais do Centro Social da Freguesia de Casal Comba.',
  openGraph: {
    description:
      'Conheça a história, missão, visão, valores e órgãos sociais do Centro Social da Freguesia de Casal Comba.',
    images: [
      {
        alt: 'Edifício do Centro Social da Freguesia de Casal Comba',
        height: 1026,
        url: '/images/home/facade.jpg',
        width: 1942,
      },
    ],
    title: 'A Instituição',
    url: '/instituicao',
  },
  title: 'A Instituição',
  twitter: {
    card: 'summary_large_image',
    description:
      'Conheça a história, missão, visão, valores e órgãos sociais do Centro Social da Freguesia de Casal Comba.',
    images: ['/images/home/facade.jpg'],
    title: 'A Instituição',
  },
}

export default function Instituicao() {
  return (
    <main id="main-content">
      <HeroSecondary
        imageUrl="/images/instituicao/hero.avif"
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
