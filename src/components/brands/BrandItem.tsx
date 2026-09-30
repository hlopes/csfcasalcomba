'use client'

import Image from 'next/image'

import Animate from '@/components/animations/Animate'
import { cn } from '@/lib/utils'
import { Brand } from '@/types/Brand'

export default function BrandItem({ className, href, id, image, name }: Brand) {
  const finalClassName = !className ? 'h-20 w-20' : className

  return (
    <Animate
      className={cn('relative block max-w-full', finalClassName)}
      delay={Math.min(id, 0.3)}
      duration={0.4}
    >
      <a
        className="relative block h-full w-full"
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Image
          alt={name}
          className="opacity-65 transition-all duration-300 hover:opacity-100"
          fill
          src={image}
          sizes="(max-width: 1024px) 100vw"
        />
      </a>
    </Animate>
  )
}
