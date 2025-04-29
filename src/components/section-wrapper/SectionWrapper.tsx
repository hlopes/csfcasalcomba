import { ReactNode } from 'react'

type SectionWrapperProps = {
  readonly children?: ReactNode
  className?: string
}

export default function SectionWrapper({
  children,
  className,
}: SectionWrapperProps) {
  const finalClassName = className ?? 'pt-15 md:pt-20 xl:pt-26'

  return (
    <section className={`overflow-hidden ${finalClassName}`}>
      <div className="max-w-c-1390 mx-auto overflow-hidden px-4 md:px-8 2xl:px-0">
        {children}
      </div>
    </section>
  )
}
