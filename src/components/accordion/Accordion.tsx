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
  const [activeFaq, setActiveFaq] = useState(1)

  const handleFaqToggle = (id: number) =>
    setActiveFaq(activeFaq === id ? 0 : id)

  return (
    <SectionWrapper>
      <AnimateRight transition={{ delay: 0.1, duration: 1 }}>
        <div className="shadow-solid-8 dark:border-stroke dark:bg-blacksection bg-background dark:border">
          {data.map((folder) => (
            <AccordionItem
              activeFaq={activeFaq}
              folder={folder}
              handleFaqToggle={handleFaqToggle}
              key={folder.id}
            />
          ))}
        </div>
      </AnimateRight>
    </SectionWrapper>
  )
}
