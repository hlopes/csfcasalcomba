'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

import AccordionItem from '@/components/accordion/AccordionItem'
import AnimateRight from '@/components/animations/AnimateRight'
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
      <AnimateRight className="p-1" transition={{ delay: 0.1, duration: 1 }}>
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
      </AnimateRight>
    </SectionWrapper>
  )
}
