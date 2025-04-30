import { Tab } from '@/types/Tab'
import Image from 'next/image'

export default function TabItem({ children, image, title }: Tab) {
  return (
    <div className="relative flex items-center md:gap-8 lg:gap-18">
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
        {children}
      </div>
      <div className="relative mx-auto aspect-562/366 max-w-[550px] md:block md:w-1/2">
        <Image alt={title} fill priority src={image} />
      </div>
    </div>
  )
}
