'use client'

import { AnimationProps } from '@/types/AnimationProps'
import { motion } from 'framer-motion'

export default function AnimateTop({
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
          y: -20,
        },
        visible: {
          opacity: 1,
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
