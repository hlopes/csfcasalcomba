import { Transition } from 'motion-dom'
import { ReactNode } from 'react'

export type AnimationProps = {
  children: ReactNode
  className?: string
  transition?: Transition
}
