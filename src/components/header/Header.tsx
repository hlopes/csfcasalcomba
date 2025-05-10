'use client'

import MenuEntry from '@/components/header/MenuEntry'
import MobileMenuButton from '@/components/mobile-menu-button/MobileMenuButton'
import ThemeToggler from '@/components/theme-toggler/ThemeToggler'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { menuData } from '@/data/menu-data'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useOnClickOutside, useScrollLock } from 'usehooks-ts'

export default function Header() {
  const containerRef = useRef(null)

  const [navigationOpen, setNavigationOpen] = useState(false)

  const { lock, unlock } = useScrollLock({
    autoLock: false,
    lockTarget: '#scrollable',
  })

  const toggleMenu = useCallback(() => {
    if (navigationOpen) {
      unlock()
    } else {
      lock()
    }

    setNavigationOpen(!navigationOpen)
  }, [lock, navigationOpen, unlock])

  const closeMenu = useCallback(() => {
    setNavigationOpen(false)
    unlock()
  }, [unlock, setNavigationOpen])

  // @ts-expect-error it will never be null
  useOnClickOutside(containerRef, () => {
    if (containerRef.current) {
      closeMenu()
    }
  })

  useEffect(() => {
    window.addEventListener('resize', () => closeMenu())
  }, [closeMenu])

  return (
    <>
      {navigationOpen && (
        <div className="fixed top-0 left-0 z-30 min-h-full w-full bg-black opacity-40"></div>
      )}
      <header
        className="bg-background fixed top-0 left-0 z-40 w-full py-8"
        ref={containerRef}
      >
        <div className="max-w-c-1390 relative mx-auto items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
          <div className="flex w-full items-center justify-between xl:w-1/4">
            <Link href="/" onClick={closeMenu}>
              <Image
                alt="logo"
                className="w-full"
                height={90}
                priority
                src="/images/logo/logo.png"
                width={256}
              />
            </Link>
            <MobileMenuButton
              navigationOpen={navigationOpen}
              toggleMenu={toggleMenu}
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
                <MenuEntry
                  key={menuItem.id}
                  menuEntry={menuItem}
                  onCloseMenu={closeMenu}
                />
              ))}
            </ul>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center gap-6 xl:mt-0">
                    <ThemeToggler />
                  </div>
                </TooltipTrigger>
                <TooltipContent className="hidden xl:block">
                  <p>Mudar tema</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </header>
    </>
  )
}
