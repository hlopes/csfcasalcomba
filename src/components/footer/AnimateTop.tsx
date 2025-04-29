import { motion } from 'framer-motion'
import { Transition } from 'motion-dom'
import { ReactNode } from 'react'

type AnimateTopProps = {
  children: ReactNode
  className?: string
  transition?: Transition
}

export default function AnimateTop({
  children,
  className,
  transition,
}: AnimateTopProps) {
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
