'use client'

import AnimateTop from '@/components/animations/AnimateTop'
import SectionWrapper from '@/components/section-wrapper/SectionWrapper'
import { cn } from '@/lib/utils'
import { Tab } from '@/types/Tab'
import Image from 'next/image'
import { useState } from 'react'

type TabsProps = {
  data: Tab[]
}

export default function Tabs({ data }: TabsProps) {
  const [currentTab, setCurrentTab] = useState(1)

  return (
    <SectionWrapper>
      <div className="absolute -top-16 -z-1 mx-auto h-[350px] w-[90%]">
        <Image
          alt="Dotted Shape"
          className="dark:hidden"
          fill
          src="/images/shape/shape-dotted-light.svg"
        />
        <Image
          alt="Dotted Shape"
          className="hidden dark:block"
          fill
          src="/images/shape/shape-dotted-dark.svg"
        />
      </div>
      <AnimateTop
        className="border-stroke shadow-solid-5 dark:bg-blacksection dark:shadow-solid-6 bg-background mb-14 flex flex-wrap justify-center border md:flex-nowrap md:items-center lg:gap-8 xl:mb-22 xl:gap-12"
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        {data.map(({ id, title }) => (
          <div
            className={cn(
              'border-stroke relative flex w-full cursor-pointer items-center gap-4 border-b px-6 py-2 last:border-0 md:w-auto md:border-0 xl:px-14 xl:py-6',
              currentTab === id
                ? 'active before:bg-primary before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full'
                : ''
            )}
            key={id}
            onClick={() => setCurrentTab(id)}
          >
            <div className="md:w-3/5 lg:w-auto">
              <button className="xl:text-regular cursor-pointer text-sm font-medium dark:text-white">
                {title}
              </button>
            </div>
          </div>
        ))}
      </AnimateTop>
    </SectionWrapper>
  )
}
