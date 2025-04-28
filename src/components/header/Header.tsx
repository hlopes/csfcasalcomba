'use client'

import MenuEntry from '@/components/header/MenuEntry'
import MobileMenuButton from '@/components/mobile-menu-button/MobileMenuButton'
import ThemeToggler from '@/components/theme-toggler/ThemeToggler'
import { menuData } from '@/data/menu-data'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [navigationOpen, setNavigationOpen] = useState(false)

  return (
    <header className="bg-background fixed top-0 left-0 z-99999 w-full py-8">
      <div className="max-w-c-1390 relative mx-auto items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
        <div className="flex w-full items-center justify-between xl:w-1/4">
          <Link href="/">
            <Image
              alt="logo"
              className="w-full"
              height={90}
              src="/images/logo/logo.png"
              width={256}
            />
          </Link>
          <MobileMenuButton
            navigationOpen={navigationOpen}
            setNavigationOpen={setNavigationOpen}
          />
        </div>
        <div
          className={cn(
            'relative hidden h-0 w-full items-center justify-end gap-4 duration-0 xl:flex xl:h-auto xl:w-full',
            navigationOpen && 'navbar block h-auto p-8 xl:h-auto xl:p-0'
          )}
        >
          <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
            {menuData.map((menuItem) => (
              <MenuEntry key={menuItem.id} menuEntry={menuItem} />
            ))}
          </ul>
          <div className="flex items-center gap-6 xl:mt-0">
            <ThemeToggler />
          </div>
        </div>
      </div>
    </header>
  )
}
