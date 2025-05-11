'use client'

import Image from 'next/image'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'

export default function Diagram() {
  return (
    <TransformWrapper>
      <TransformComponent>
        <Image
          alt="organograma"
          height={861}
          src="/images/organograma/organograma.svg"
          width={1590}
        />
      </TransformComponent>
    </TransformWrapper>
  )
}
