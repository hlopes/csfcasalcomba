'use client'

import { useRef } from 'react'

import AnimateTop from '@/components/animations/AnimateTop'
import SectionWrapper from '@/components/section-wrapper/SectionWrapper'
import TabItem from '@/components/tabs/TabItem'
import { cn } from '@/lib/utils'
import { Tab } from '@/types/Tab'

type TabsProps = {
  currentTab: number
  data: Tab[]
  onTabChange: (id: number) => void
}

export default function Tabs({ currentTab, data, onTabChange }: TabsProps) {
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const focusTab = (index: number) => {
    const total = data.length
    const nextIndex = (index + total) % total
    tabRefs.current[nextIndex]?.focus()
    onTabChange(data[nextIndex].id)
  }

  return (
    <SectionWrapper sectionClassName="p-0">
      <AnimateTop
        className="border-stroke shadow-solid-5 dark:bg-blacksection dark:shadow-solid-6 bg-background -mx-8 mb-14 flex flex-wrap justify-center border md:flex-nowrap md:items-baseline lg:gap-8 xl:mb-22 xl:gap-12"
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <div
          aria-label="Secções"
          className="flex w-full flex-wrap justify-center md:flex-nowrap lg:gap-8 xl:gap-12"
          role="tablist"
        >
          {data.map(({ id, title }, index) => {
            const isSelected = currentTab === id

            return (
              <button
                aria-selected={isSelected}
                className={cn(
                  'border-stroke xl:text-regular relative flex min-h-11 w-full cursor-pointer items-center justify-center gap-4 border-b px-6 py-2 text-sm font-medium last:border-0 md:w-auto md:border-0 xl:px-14 xl:py-6 dark:text-white',
                  isSelected &&
                    'active before:bg-primary before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full'
                )}
                key={id}
                onClick={() => onTabChange(id)}
                onKeyDown={(event) => {
                  if (event.key === 'ArrowRight') {
                    event.preventDefault()
                    focusTab(index + 1)
                  }
                  if (event.key === 'ArrowLeft') {
                    event.preventDefault()
                    focusTab(index - 1)
                  }
                  if (event.key === 'Home') {
                    event.preventDefault()
                    focusTab(0)
                  }
                  if (event.key === 'End') {
                    event.preventDefault()
                    focusTab(data.length - 1)
                  }
                }}
                ref={(node) => {
                  tabRefs.current[index] = node
                }}
                role="tab"
                tabIndex={isSelected ? 0 : -1}
                type="button"
              >
                {title}
              </button>
            )
          })}
        </div>
      </AnimateTop>
      <AnimateTop
        className="max-w-c-1154 mx-auto"
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        {data.map((tab) => (
          <TabItem isVisible={tab.id === currentTab} key={tab.id} {...tab} />
        ))}
      </AnimateTop>
    </SectionWrapper>
  )
}
