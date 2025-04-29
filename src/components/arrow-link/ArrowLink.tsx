import Link from 'next/link'

type ArrowLinkProps = {
  href: string
  text: string
}

export default function ArrowLink({ href, text }: ArrowLinkProps) {
  return (
    <Link
      className="text-primary dark:bg-primary group inline-flex items-center gap-2.5 bg-white px-6 py-3 font-medium hover:opacity-90 dark:text-white"
      href={href}
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
