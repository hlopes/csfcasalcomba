'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

export default function ThemeToggler() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      aria-label={
        theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'
      }
      className="min-h-11 min-w-11 cursor-pointer"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      size="icon"
      variant="link"
    >
      <Sun aria-hidden="true" className="hidden dark:block" />
      <Moon aria-hidden="true" className="dark:hidden" />
    </Button>
  )
}
