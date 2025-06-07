import Image from 'next/image'

import { Image as ImageType } from '@/types/Image'

export default function Slide({ src }: ImageType) {
  return (
    <div className="shadow-solid-9 dark:border-strokedark dark:bg-blacksection bg-background p-10 pt-8 dark:border dark:shadow-none">
      <div className="border-stroke mb-8 flex aspect-video justify-between border-b pb-6">
        <Image alt={src ?? ''} fill src={src} />
      </div>
    </div>
  )
}
