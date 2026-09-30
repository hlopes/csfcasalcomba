import Animate from '@/components/animations/Animate'
import SectionWrapper from '@/components/section-wrapper/SectionWrapper'
import { TextContent } from '@/types/TextContent'

type TextColumnsProps = {
  data: TextContent | TextContent[]
}

export default function TextColumns({ data }: TextColumnsProps) {
  if (Array.isArray(data) && data.length > 1) {
    return (
      <SectionWrapper>
        <Animate delay={0.1}>
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
            {data.map(({ description, id, title }) => (
              <div className="w-full lg:w-1/2" key={id}>
                <div className="text-pretty">
                  <div className="mx-auto max-w-120">
                    <h2 className="text-primary font-display mx-auto mb-4 text-2xl tracking-wide uppercase">
                      {title}
                    </h2>
                    <p className="mx-auto">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Animate>
      </SectionWrapper>
    )
  }

  if ('title' in data && 'description' in data) {
    const { description, title } = data

    return (
      <SectionWrapper>
        <div className="w-full">
          <div className="text-pretty">
            <Animate delay={0.1}>
              <div className="mx-auto max-w-240">
                <h2 className="text-primary font-display mx-auto mb-4 text-2xl tracking-wide uppercase">
                  {title}
                </h2>
                {description}
              </div>
            </Animate>
          </div>
        </div>
      </SectionWrapper>
    )
  }

  return null
}
