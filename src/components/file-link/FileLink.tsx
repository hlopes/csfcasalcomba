import { File } from 'lucide-react'
import Link from 'next/link'

type FileLinkProps = {
  href: string
  title: string
}

export default function FileLink({ href, title }: FileLinkProps) {
  return (
    <Link
      className="group hover:text-primary dark:hover:text-primary ml-8 inline-flex items-center gap-2 dark:text-white"
      href={href}
      target="_blank"
    >
      <File />
      <span className="duration-300 group-hover:pr-2">{title}</span>
      <svg fill="currentColor" height="14" viewBox="0 0 14 14" width="14">
        <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
      </svg>
    </Link>
  )
}
