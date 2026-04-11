import Image from 'next/image'

import { Image as ImageType } from '@/types/Image'

export default function Slide({ src }: ImageType) {
  return (
    <div className="shadow-solid-9 dark:border-strokedark dark:bg-blacksection bg-background dark:border dark:shadow-none">
      <div className="border-stroke relative aspect-video justify-between border-b">
        <div className="relative size-full">
          <Image
            alt={src ?? ''}
            fill
            src={src}
            sizes="(max-width: 1024px) 100vw, (max-width: 1390px) 33vw, 450px"
          />
        </div>
      </div>
    </div>
  )
}
