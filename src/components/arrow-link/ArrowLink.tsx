import Link from 'next/link'

type ArrowLinkProps = {
  href: string
  rel?: string
  target?: string
  text: string
  variant?: 'outline'
}

export default function ArrowLink({
  href,
  rel,
  target = '_self',
  text,
  variant,
}: ArrowLinkProps) {
  if (variant === 'outline') {
    return (
      <Link
        className="text-primary dark:bg-primary group bg-background inline-flex items-center gap-2 px-6 py-4 font-medium hover:opacity-90 dark:text-white"
        href={href}
        rel={rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)}
        target={target}
      >
        {text}
        <svg
          className="inline-block h-6 w-6 opacity-50 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100"
          fill="none"
          height="1em"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          viewBox="0 0 24 24"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18 8L22 12L18 16" />
          <path d="M2 12H22" />
        </svg>
      </Link>
    )
  }

  return (
    <Link
      className="group hover:text-primary dark:hover:text-primary mt-7.5 inline-flex items-center gap-2.5 text-black dark:text-white"
      href={href}
      rel={rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)}
      target={target}
    >
      <span className="duration-300 group-hover:pr-2">{text}</span>
      <svg fill="currentColor" height="14" viewBox="0 0 14 14" width="14">
        <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
      </svg>
    </Link>
  )
}
