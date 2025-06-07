'use client'

import { motion } from 'framer-motion'

import { AnimationProps } from '@/types/AnimationProps'

export default function AnimateRight({
  children,
  className,
  transition,
}: AnimationProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      transition={transition}
      variants={{
        hidden: {
          opacity: 0,
          x: 20,
        },
        visible: {
          opacity: 1,
          x: 0,
        },
      }}
      viewport={{ once: true }}
      whileInView="visible"
    >
      {children}
    </motion.div>
  )
}
