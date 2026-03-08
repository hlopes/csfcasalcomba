'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

import DocsDialogs from '@/app/infancia/DocsDialogs'
import Tabs from '@/components/tabs/Tabs'
import { data } from '@/data/infancia/tabs-data'

const CATL_TAB_INDEX = 3

export default function InfanciaTabs() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [currentTab, setCurrentTab] = useState(
    parseInt(searchParams.get('tab') ?? '1')
  )

  const handleTabChange = (id: number) => {
    setCurrentTab(id)
    router.replace(`${pathname}?tab=${id}`, { scroll: false })
  }

  return (
    <>
      <Tabs currentTab={currentTab} data={data} onTabChange={handleTabChange} />
      {currentTab === CATL_TAB_INDEX && <DocsDialogs />}
    </>
  )
}
