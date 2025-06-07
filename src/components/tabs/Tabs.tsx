'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

import AnimateTop from '@/components/animations/AnimateTop'
import SectionWrapper from '@/components/section-wrapper/SectionWrapper'
import TabItem from '@/components/tabs/TabItem'
import { cn } from '@/lib/utils'
import { Tab } from '@/types/Tab'

type TabsProps = {
  data: Tab[]
}

export default function Tabs({ data }: TabsProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [currentTab, setCurrentTab] = useState(
    parseInt(searchParams.get('tab') ?? '1')
  )

  const handleTabClick = (id: number) => {
    setCurrentTab(id)
    router.replace(`${pathname}?tab=${id}`, { scroll: false })
  }

  return (
    <SectionWrapper sectionClassName="p-0">
      <AnimateTop
        className="border-stroke shadow-solid-5 dark:bg-blacksection dark:shadow-solid-6 bg-background -mx-8 mb-14 flex flex-wrap justify-center border md:flex-nowrap md:items-baseline lg:gap-8 xl:mb-22 xl:gap-12"
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
            onClick={() => handleTabClick(id)}
          >
            <div className="md:w-auto">
              <button className="xl:text-regular cursor-pointer text-sm font-medium dark:text-white">
                {title}
              </button>
            </div>
          </div>
        ))}
      </AnimateTop>
      <AnimateTop
        className="max-w-c-1154 mx-auto"
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        {data.map((tab) => (
          <div
            className={tab.id === currentTab ? 'block' : 'hidden'}
            key={tab.id}
          >
            <TabItem {...tab} />
          </div>
        ))}
      </AnimateTop>
    </SectionWrapper>
  )
}
