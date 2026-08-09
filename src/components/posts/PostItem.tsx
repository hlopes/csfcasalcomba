import Image from 'next/image'
import Link from 'next/link'

import AnimateTop from '@/components/animations/AnimateTop'
import { Post } from '@/types/Post'

export default function PostItem({ description, icon, title, url }: Post) {
  return (
    <Link href={url ?? '#'} rel="noopener noreferrer" target="_blank">
      <AnimateTop
        className="group shadow-solid-3 hover:shadow-solid-4 dark:bg-blacksection bg-background dark:hover:bg-hoverdark z-40 h-full border-white transition-all"
        transition={{ duration: 0.5 }}
      >
        <div className="relative mx-auto flex aspect-video items-center justify-center overflow-hidden">
          <Image
            alt="title"
            className="transition-all duration-300 group-hover:scale-110"
            fill
            sizes="(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw"
            src={icon}
          />
        </div>
        <div className="p-4 xl:p-8">
          <h3 className="text-hoverdark my-8 text-lg font-semibold dark:text-white">
            {title}
          </h3>
          <p className="text-pretty">{description}</p>
        </div>
      </AnimateTop>
    </Link>
  )
}
