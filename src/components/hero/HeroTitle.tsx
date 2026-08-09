'use client'

import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'

type PageTitleProps = {
  highlight?: string
  highlightDelay?: number
  text?: string
  to?: string
}

export default function HeroTitle({
  highlight,
  highlightDelay,
  text,
  to,
}: PageTitleProps) {
  return (
    <h1 className="font-comic absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center text-xl leading-8 font-medium text-white uppercase md:text-2xl md:leading-12 lg:text-5xl lg:leading-16 xl:text-6xl xl:leading-20">
      <motion.span
        className="block"
        initial={{ filter: 'blur(6px)', opacity: 0, y: 8 }}
        transition={{
          delay: highlightDelay ?? 0,
          duration: 0.8,
          ease: 'easeOut',
        }}
        whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {text && <span className="block">{text}</span>}
        {highlight && (
          <span
            className={cn(
              'bg-gradient-to-b from-white via-white to-gray-400 bg-clip-text font-bold text-transparent uppercase',
              to ? to : 'to-gray-400'
            )}
          >
            {highlight}
          </span>
        )}
      </motion.span>
    </h1>
  )
}
