'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

import Tabs from '@/components/tabs/Tabs'
import { data } from '@/data/area-senior/tabs-data'

export default function AreaSeniorTabs() {
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
    <Tabs
      currentTab={currentTab}
      data={data}
      onTabChange={handleTabChange}
    />
  )
}
