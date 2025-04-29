import AnimateLeft from '@/components/animations/AnimateLeft'
import AnimateRight from '@/components/animations/AnimateRight'
import SectionWrapper from '@/components/section-wrapper/SectionWrapper'
import { cn } from '@/lib/utils'
import { Feature } from '@/types/Feature'
import Image from 'next/image'
import Link from 'next/link'

type FeaturesProps = {
  data: Feature[]
}

export default function Features({ data }: FeaturesProps) {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-12 lg:gap-20">
        {data.map(({ content, href, id, image, title }) => (
          <div
            className={cn(
              'relative flex flex-col gap-8 lg:flex-row lg:gap-32',
              id % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            )}
            key={id}
          >
            {id % 2 === 0 && (
              <div className="absolute -top-16 -z-1 mx-auto hidden h-[350px] w-[90%] lg:block">
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
            )}
            <AnimateRight
              className="lg:w-1/2"
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <h2 className="text-primary relative mb-6 text-2xl uppercase">
                {title}
              </h2>
              {content}
              <Link
                className="group hover:text-primary dark:hover:text-primary mt-8 inline-flex items-center gap-2 font-semibold dark:text-white"
                href={href}
              >
                <span className="duration-300 group-hover:pr-2">
                  Saber mais
                </span>
                <svg
                  fill="currentColor"
                  height="14"
                  viewBox="0 0 14 14"
                  width="14"
                >
                  <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                </svg>
              </Link>
            </AnimateRight>
            <AnimateLeft
              className="relative mx-auto aspect-[734/460] w-full lg:w-1/2"
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <Image alt={title} fill src={image} />
            </AnimateLeft>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
