import Image from 'next/image'

import HeroTitle from '@/components/hero/HeroTitle'

type HeroSecondaryProps = {
  imageUrl: string
  title: string
}

export default function HeroSecondary({ imageUrl, title }: HeroSecondaryProps) {
  return (
    <section className="max-w-c-1390 relative mx-auto mt-40 overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-56 lg:pb-40">
      <Image
        alt={title}
        className="absolute top-0 left-0 h-full w-full object-cover object-center brightness-40 grayscale"
        height={150}
        src={imageUrl}
        width={150}
      />
      <span className="bg-primary absolute top-0 left-0 h-full w-full opacity-50" />
      <div className="absolute top-1/2 left-1/2 z-10 flex w-full -translate-x-1/2 -translate-y-1/2">
        <div className="w-full text-center">
          <HeroTitle highlight={title} />
        </div>
      </div>
    </section>
  )
}
