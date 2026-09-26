'use client'

import Image from 'next/image'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'

import { Button } from '@/components/ui/button'

export default function Diagram() {
  return (
    <div>
      <TransformWrapper>
        {({ resetTransform, zoomIn, zoomOut }) => (
          <>
            <div className="mb-4 flex flex-wrap gap-2">
              <Button onClick={() => zoomIn()} type="button" variant="outline">
                Ampliar
              </Button>
              <Button onClick={() => zoomOut()} type="button" variant="outline">
                Reduzir
              </Button>
              <Button
                onClick={() => resetTransform()}
                type="button"
                variant="outline"
              >
                Repor
              </Button>
            </div>
            <TransformComponent>
              <Image
                alt="Organograma do Centro Social da Freguesia de Casal Comba"
                height={861}
                src="/images/organograma/organograma.svg"
                width={1590}
              />
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  )
}
