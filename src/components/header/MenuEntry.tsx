import type { MenuEntry } from '@/types/MenuEntry'

import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

type MenuEntryProps = {
  menuEntry: MenuEntry
}

export default function MenuEntry({ menuEntry }: MenuEntryProps) {
  const pathUrl = usePathname()
  const [dropdownToggler, setDropdownToggler] = useState(false)

  return (
    <li className={menuEntry.submenu && 'group relative'} key={menuEntry.id}>
      {menuEntry.submenu ? (
        <>
          <Button
            className="hover:text-primary group flex cursor-pointer items-center justify-between gap-3"
            onClick={() => setDropdownToggler(!dropdownToggler)}
            variant="menu"
          >
            {menuEntry.title}
            <ChevronDown className="h-6 w-6 xl:transition-transform xl:duration-200 xl:group-hover:rotate-180" />
          </Button>
          <ul className={`dropdown ${dropdownToggler ? 'flex' : ''}`}>
            {menuEntry.submenu.map((item) => (
              <li className="xl:text-right" key={item.id}>
                <Link className="hover:text-primary" href={item.path ?? '#'}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <Link
          className={
            pathUrl === menuEntry.path
              ? 'text-primary hover:text-primary'
              : 'hover:text-primary'
          }
          href={menuEntry.path ?? '#'}
        >
          {menuEntry.title}
        </Link>
      )}
    </li>
  )
}
