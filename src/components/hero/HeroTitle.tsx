import { cn } from '@/lib/utils'

type PageTitleProps = {
  highlight?: string
  text?: string
  to?: string
}

export default function HeroTitle({ highlight, text, to }: PageTitleProps) {
  return (
    <h1 className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center text-xl leading-8 font-medium text-white uppercase md:text-2xl md:leading-12 lg:text-4xl lg:leading-20 xl:text-6xl">
      {text}{' '}
      <span
        className={cn(
          'relative inline-block bg-gradient-to-b from-white via-white to-gray-400 bg-clip-text font-bold text-transparent uppercase',
          to ? to : 'to-gray-400'
        )}
      >
        {highlight}
      </span>
    </h1>
  )
}
