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
      <span className="text-sm duration-300 group-hover:pr-2">{title}</span>
    </Link>
  )
}
