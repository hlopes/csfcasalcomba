import Image from 'next/image'

import { cn } from '@/lib/utils'
import { Tab } from '@/types/Tab'

export default function TabItem({
  content,
  image,
  isVisible = false,
  title,
}: Tab) {
  return (
    <div
      className={cn(
        'relative items-center md:gap-8 lg:gap-18',
        isVisible ? 'flex' : 'hidden'
      )}
    >
      <div className="absolute -top-16 -z-1 mx-auto h-[350px] w-[90%]">
        <Image
          alt="Dotted Shape"
          className="dark:hidden"
          fill
          src="/images/shape/shape-dotted-light.svg"
        />
        <Image
          alt="Dotted Shape"
          className="hidden dark:block"
          fill
          src="/images/shape/shape-dotted-dark.svg"
        />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-primary mb-16 text-2xl uppercase">{title}</h2>
        <ul className="space-y-8 text-pretty">
          {content.map((item) => (
            <li key={item.title}>
              <h3 className="mb-4 font-semibold">{item.title}</h3>
              {item.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="relative mx-auto aspect-562/366 max-w-[550px] md:block md:w-1/2">
        <Image
          alt={title}
          fill
          priority
          src={image}
          sizes="(max-width: 1024px) 100vw"
        />
      </div>
    </div>
  )
}
