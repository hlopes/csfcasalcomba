'use client'

import { motion } from 'framer-motion'
import { BookOpen, ExternalLink } from 'lucide-react'
import { useEffect, useState } from 'react'

import FacebookIcon from '@/components/icons/FacebookIcon'

const links = [
  {
    href: 'https://www.facebook.com/csfcasalcomba/',
    icon: FacebookIcon,
    label: 'Facebook',
  },
  {
    href: 'https://www.livroreclamacoes.pt/',
    icon: BookOpen,
    label: 'Livro de Reclamações',
  },
]

export default function ExternalLinksMenu() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)

    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <div className="fixed top-1/2 right-0 z-50 -translate-y-1/2">
      <motion.div className="relative">
        <motion.div
          animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
          className="absolute right-0 bottom-full mb-3 overflow-hidden"
          initial={false}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <div className="flex flex-col items-end gap-3">
            {links.map(({ href, icon: Icon, label }, i) => (
              <motion.a
                key={label}
                className="dark:bg-blacksection border-stroke bg-background flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium dark:border"
                href={href}
                animate={
                  open
                    ? { opacity: 1, rotate: 0, scale: 1, x: 0 }
                    : { opacity: 0, rotate: 10, scale: 0.6, x: 60 }
                }
                initial={false}
                rel="noopener noreferrer"
                target="_blank"
                transition={{
                  delay: open ? i * 0.05 : 0,
                  type: 'spring',
                  stiffness: 300,
                  damping: 22,
                }}
              >
                <Icon className="text-primary h-4 w-4" />
                <span className="whitespace-nowrap">
                  {label}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
        <motion.button
          aria-expanded={open}
          aria-label="Links externos"
          className="bg-primary text-white flex h-12 w-12 items-center justify-center shadow-lg cursor-pointer"
          onClick={() => setOpen((v) => !v)}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
        >
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <ExternalLink className="h-5 w-5" />
          </motion.span>
        </motion.button>
      </motion.div>
    </div>
  )
}
