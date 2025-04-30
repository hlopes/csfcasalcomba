'use client'

import AccordionItem from '@/components/accordion/AccordionItem'
import AnimateRight from '@/components/animations/AnimateRight'
import SectionWrapper from '@/components/section-wrapper/SectionWrapper'
import { Folder } from '@/types/Folder'
import { useState } from 'react'

type AccordionProps = {
  data: Folder[]
}

export default function Accordion({ data }: AccordionProps) {
  const [activeSection, setActiveSection] = useState(1)

  const handleSectionToggle = (id: number) =>
    setActiveSection(activeSection === id ? 0 : id)

  return (
    <SectionWrapper>
      <AnimateRight className="p-1" transition={{ delay: 0.1, duration: 1 }}>
        <div className="dark:border-stroke dark:bg-blacksection shadow-solid-8 dark:border">
          {data.map((folder) => (
            <AccordionItem
              activeFaq={activeSection}
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
