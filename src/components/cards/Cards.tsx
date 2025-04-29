import CardItem from '@/components/cards/CardItem'
import SectionWrapper from '@/components/section-wrapper/SectionWrapper'
import { Card } from '@/types/Card'

type CardsProps = {
  data: Card[]
}

export default function Cards({ data }: CardsProps) {
  return (
    <SectionWrapper>
      <div className="grid auto-rows-max grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
        {data.slice(0, 3).map((card) => (
          <CardItem {...card} key={card.id} />
        ))}
      </div>
    </SectionWrapper>
  )
}
