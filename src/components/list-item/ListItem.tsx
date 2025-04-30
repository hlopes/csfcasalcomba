import { Minus } from 'lucide-react'
import { ReactNode } from 'react'

type ListItemProps = {
  children: ReactNode
}

export default function ListItem({ children }: ListItemProps) {
  return (
    <li className="flex items-center gap-2 py-1 even:text-gray-800">
      <Minus color="#666" height={12} width={12} />
      <span className="text-wrap">{children}</span>
    </li>
  )
}
