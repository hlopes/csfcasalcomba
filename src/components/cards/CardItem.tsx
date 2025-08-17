import Image from 'next/image'
import Link from 'next/link'

import AnimateTop from '@/components/animations/AnimateTop'
import { Card } from '@/types/Card'

export default function CardItem({ href, mainImage, metadata, title }: Card) {
  return (
    <AnimateTop
      className="bg-background dark:bg-blacksection p-1"
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <Link href={href}>
        <div className="shadow-solid-10 flex h-full w-full cursor-pointer items-center p-4 hover:scale-105">
          <div className="relative block h-28 w-28">
            <Image alt={title} fill src={mainImage} />
          </div>
          <div className="flex w-full flex-col justify-between px-4 text-center md:text-left">
            <h3 className="hover:text-primary line-clamp-2 inline-block text-lg text-black duration-300 dark:text-white">
              {title}
            </h3>
            <p className="line-clamp-3 text-sm">{metadata}</p>
          </div>
        </div>
      </Link>
    </AnimateTop>
  )
}
