'use client'

import { motion } from 'motion/react'
import { ReactNode } from 'react'

type AnimateDirection = 'left' | 'none' | 'right' | 'top'

type AnimateProps = {
  children: ReactNode
  className?: string
  delay?: number
  direction?: AnimateDirection
  duration?: number
}

const offsets: Record<AnimateDirection, { x: number; y: number }> = {
  left: { x: -20, y: 0 },
  none: { x: 0, y: 0 },
  right: { x: 20, y: 0 },
  top: { x: 0, y: -20 },
}

export default function Animate({
  children,
  className,
  delay = 0,
  direction = 'top',
  duration = 0.5,
}: AnimateProps) {
  const { x, y } = offsets[direction]

  return (
    <motion.div
      className={className}
      initial="hidden"
      transition={{ delay, duration }}
      variants={{
        hidden: {
          opacity: 0,
          x,
          y,
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
        },
      }}
      viewport={{ once: true }}
      whileInView="visible"
    >
      {children}
    </motion.div>
  )
}
