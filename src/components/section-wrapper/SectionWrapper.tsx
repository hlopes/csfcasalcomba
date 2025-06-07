import { ReactNode } from 'react'

import { cn } from '@/lib/utils'

type SectionWrapperProps = {
  readonly children?: ReactNode
  divClassName?: string
  sectionClassName?: string
}

export default function SectionWrapper({
  children,
  divClassName,
  sectionClassName,
}: SectionWrapperProps) {
  const finalSectionClassName = sectionClassName ?? 'pt-15 md:pt-20 xl:pt-26'
  const finalDivClassName = divClassName ?? 'px-4 md:px-8 2xl:px-0'

  return (
    <section className={cn('overflow-hidden', finalSectionClassName)}>
      <div
        className={cn(
          'max-w-c-1390 relative mx-auto overflow-hidden',
          finalDivClassName
        )}
      >
        {children}
      </div>
    </section>
  )
}
