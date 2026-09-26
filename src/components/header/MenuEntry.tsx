import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import type { MenuEntry } from '@/types/MenuEntry'

import { Button } from '@/components/ui/button'

type MenuEntryProps = {
  menuEntry: MenuEntry
  onCloseMenu: () => void
}

export default function MenuEntry({ menuEntry, onCloseMenu }: MenuEntryProps) {
  const pathUrl = usePathname()
  const [dropdownToggler, setDropdownToggler] = useState(false)

  if (menuEntry.submenu) {
    const submenuId = `submenu-${menuEntry.id}`
    const isActiveParent = menuEntry.submenu.some(
      (item) => item.path === pathUrl
    )

    return (
      <li className="group relative" key={menuEntry.id}>
        <Button
          aria-controls={submenuId}
          aria-expanded={dropdownToggler}
          aria-haspopup="true"
          className="hover:text-primary group flex min-h-11 cursor-pointer items-center justify-between gap-3"
          onClick={() => setDropdownToggler(!dropdownToggler)}
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              setDropdownToggler(false)
              onCloseMenu()
            }
          }}
          variant="menu"
        >
          <span className={isActiveParent ? 'text-primary' : undefined}>
            {menuEntry.title}
          </span>
          <ChevronDown
            aria-hidden="true"
            className="h-6 w-6 xl:transition-transform xl:duration-200 xl:group-focus-within:rotate-180 xl:group-hover:rotate-180"
          />
        </Button>
        <ul
          className={`dropdown ${dropdownToggler ? 'flex' : ''}`}
          id={submenuId}
        >
          {menuEntry.submenu.map((item) => {
            const isActive = pathUrl === item.path

            return (
              <li className="xl:text-right" key={item.id}>
                <Link
                  aria-current={isActive ? 'page' : undefined}
                  className={`hover:text-primary inline-flex min-h-11 items-center ${isActive ? 'text-primary' : ''}`}
                  href={item.path ?? '#'}
                  onClick={onCloseMenu}
                >
                  {item.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </li>
    )
  }

  const isActive = pathUrl === menuEntry.path

  return (
    <li key={menuEntry.id}>
      <Link
        aria-current={isActive ? 'page' : undefined}
        className={`inline-flex min-h-11 items-center ${isActive ? 'text-primary hover:text-primary' : 'hover:text-primary'}`}
        href={menuEntry.path ?? '#'}
        onClick={onCloseMenu}
      >
        {menuEntry.title}
      </Link>
    </li>
  )
}
