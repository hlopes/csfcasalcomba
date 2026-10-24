import type { Metadata } from 'next'

import BrandItem from '@/components/brands/BrandItem'
import Brands from '@/components/brands/Brands'
import HeroSecondary from '@/components/hero/HeroSecondary'
import Posts from '@/components/posts/Posts'
import SectionHeader from '@/components/section-header/SectionHeader'
import SectionWrapper from '@/components/section-wrapper/SectionWrapper'
import {
  iefp,
  data as partnershipsData,
} from '@/data/projectos-parcerias/brands-data'
import { data as projectsData } from '@/data/projectos-parcerias/posts-data'

export const metadata: Metadata = {
  description:
    'Conheça os projetos sociais desenvolvidos e as entidades parceiras do Centro Social da Freguesia de Casal Comba.',
  openGraph: {
    description:
      'Conheça os projetos sociais desenvolvidos e as entidades parceiras do Centro Social da Freguesia de Casal Comba.',
    images: [
      {
        alt: 'Projetos e Parcerias do Centro Social da Freguesia de Casal Comba',
        height: 1026,
        url: '/images/home/facade.jpg',
        width: 1942,
      },
    ],
    title: 'Projetos e Parcerias',
    url: '/projectos-parcerias',
  },
  title: 'Projetos e Parcerias',
  twitter: {
    card: 'summary_large_image',
    description:
      'Conheça os projetos sociais desenvolvidos e as entidades parceiras do Centro Social da Freguesia de Casal Comba.',
    images: ['/images/home/facade.jpg'],
    title: 'Projetos e Parcerias',
  },
}

export default function ProjectosParcerias() {
  return (
    <main id="main-content">
      <HeroSecondary
        imageUrl="/images/projectos-parcerias/hero.avif"
        title="Projetos e Parcerias"
      />
      <SectionWrapper>
        <SectionHeader
          description="Os nossos projetos sociais são concebidos para atender às necessidades urgentes da comunidade, promovendo o desenvolvimento sustentável e melhorando a qualidade de vida de indivíduos e famílias."
          title=""
        />
      </SectionWrapper>
      <Posts data={projectsData} />
      <SectionWrapper>
        <SectionHeader
          description="No centro da nossa missão está a crença de que mudanças significativas são melhor alcançadas através da colaboração."
          title="Parcerias"
        />
      </SectionWrapper>
      <SectionWrapper sectionClassName="flex items-center justify-center py-15 md:pt-20 md:pb-0  xl:pt-26">
        <BrandItem {...iefp} />
      </SectionWrapper>
      <Brands data={partnershipsData} />
    </main>
  )
}
