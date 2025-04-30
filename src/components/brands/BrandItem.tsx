'use client'

import { cn } from '@/lib/utils'
import { Brand } from '@/types/Brand'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function BrandItem({ className, href, id, image, name }: Brand) {
  const finalClassName = !className ? 'h-20 w-20' : className

  return (
    <motion.a
      className={cn('mx-w-full relative block', finalClassName)}
      href={href}
      initial="hidden"
      transition={{ delay: id, duration: 1 }}
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
      <Image
        alt={name}
        className="opacity-65 transition-all duration-300 hover:opacity-100"
        fill
        src={image}
      />
    </motion.a>
  )
}
