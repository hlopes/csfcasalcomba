import { ReactNode } from 'react'

type ListItemProps = {
  children: ReactNode
}

export default function ListItem({ children }: ListItemProps) {
  return (
    <li className="flex items-center gap-2 border-b py-1 last:border-none">
      <span className="text-wrap">{children}</span>
    </li>
  )
}
