import Image from 'next/image'

import AnimateTop from '@/components/animations/AnimateTop'
import ArrowLink from '@/components/arrow-link/ArrowLink'
import { Post } from '@/types/Post'

export default function PostItem({ description, icon, title, url }: Post) {
  return (
    <AnimateTop
      className="group shadow-solid-3 hover:shadow-solid-4 dark:bg-blacksection bg-background dark:hover:bg-hoverdark z-40 border-white transition-all"
      transition={{ duration: 0.5 }}
    >
      <div className="relative mx-auto flex aspect-video items-center justify-center overflow-hidden">
        <Image
          alt="title"
          className="transition-all duration-300 group-hover:scale-120"
          fill
          src={icon}
        />
      </div>
      <div className="p-4 xl:p-8">
        <h3 className="text-hoverdark my-8 text-lg font-semibold dark:text-white">
          {title}
        </h3>
        <p className="text-justify">{description}</p>
        <ArrowLink
          href={url ?? '#'}
          rel="noopener noreferrer"
          target="_blank"
          text="Saber mais"
        />
      </div>
    </AnimateTop>
  )
}
