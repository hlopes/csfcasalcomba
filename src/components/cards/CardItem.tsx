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
      <div className="shadow-solid-10 flex h-full w-full items-center p-4 pb-8">
        {href ? (
          <Link className="relative block h-26 w-26" href={href}>
            <Image alt={title} fill src={mainImage} />
          </Link>
        ) : (
          <div className="relative block h-26 w-26">
            <Image alt={title} fill src={mainImage} />
          </div>
        )}
        <div className="w-full px-4 text-center md:text-left">
          <h3 className="hover:text-primary mt-8 mb-4 line-clamp-2 inline-block text-lg text-black duration-300 dark:text-white">
            {href ? <Link href={href}>{title}</Link> : title}
          </h3>
          <p className="line-clamp-3 text-sm">{metadata}</p>
        </div>
      </div>
    </AnimateTop>
  )
}
