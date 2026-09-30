import Image from 'next/image'
import Link from 'next/link'

import Animate from '@/components/animations/Animate'
import SectionWrapper from '@/components/section-wrapper/SectionWrapper'
import { cn } from '@/lib/utils'
import { Feature } from '@/types/Feature'

type FeaturesProps = {
  data: Feature[]
}

export default function Features({ data }: FeaturesProps) {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-12 lg:gap-20">
        {data.map(({ content, href, id, image, title }, index) => (
          <div
            className={cn(
              'relative flex flex-col gap-8 lg:flex-row lg:gap-32',
              id % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            )}
            key={id}
          >
            <Animate className="lg:w-1/2" delay={0.1} direction="right">
              <h2 className="text-primary relative mb-6 text-2xl tracking-wide uppercase">
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
            </Animate>
            <Animate
              className="relative mx-auto aspect-[734/460] w-full lg:w-1/2"
              delay={0.1}
              direction="left"
            >
              <Image
                alt={title}
                fill
                loading={index === 0 ? 'eager' : 'lazy'}
                priority={index === 0}
                sizes="(max-width: 1024px) 100vw, (max-width: 1390px) 50vw, 695px"
                src={image}
              />
            </Animate>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
