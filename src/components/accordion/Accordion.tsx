'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

import AccordionItem from '@/components/accordion/AccordionItem'
import Animate from '@/components/animations/Animate'
import SectionWrapper from '@/components/section-wrapper/SectionWrapper'
import { Folder } from '@/types/Folder'

type AccordionProps = {
  data: Folder[]
}

export default function Accordion({ data }: AccordionProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [activeSection, setActiveSection] = useState(
    parseInt(searchParams.get('section') ?? `${data[0].id}`)
  )

  const handleSectionToggle = (id: number) => {
    setActiveSection(activeSection === id ? 0 : id)
    router.replace(`${pathname}?section=${id}`, { scroll: false })
  }

  return (
    <SectionWrapper>
      <Animate className="p-1" delay={0.1} direction="right" duration={1}>
        <div className="dark:border-stroke dark:bg-blacksection shadow-solid-8 dark:border">
          {data.map((folder) => (
            <AccordionItem
              activeSection={activeSection}
              folder={folder}
              handleSectionToggle={handleSectionToggle}
              key={folder.id}
            />
          ))}
        </div>
      </Animate>
    </SectionWrapper>
  )
}
