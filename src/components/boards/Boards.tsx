import SectionWrapper from '@/components/section-wrapper/SectionWrapper'
import { TextContent } from '@/types/TextContent'

type BoardsProps = {
  data: TextContent[]
}

export default function Boards({ data }: BoardsProps) {
  return (
    <SectionWrapper>
      <div className="flex flex-wrap justify-center gap-2 xl:flex-nowrap xl:gap-4">
        {data.map(({ description, id, title }) => (
          <div
            className="group border-stroke shadow-solid-10 dark:bg-blacksection bg-background relative w-full border p-8 sm:w-[45%] xl:w-1/4 xl:p-8 dark:shadow-none"
            key={id}
          >
            <h3 className="text-primary mb-8 text-2xl">{title}</h3>
            <div className="border-stroke mt-8 border-t pt-8 pb-12">
              {description}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
