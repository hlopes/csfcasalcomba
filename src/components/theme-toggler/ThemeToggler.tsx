'use client'

import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function ThemeToggler() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      size="icon"
      variant="link"
    >
      <Sun className="hidden h-[1.2rem] w-[1.2rem] dark:block" />
      <Moon className="h-[1.2rem] w-[1.2rem] dark:hidden" />
    </Button>
  )
}
