'use client'

import HeroTitle from '@/components/hero/HeroTitle'
import SectionWrapper from '@/components/section-wrapper/SectionWrapper'
import { useEffect, useRef } from 'react'

export default function HeroPrimary() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4
    }
  }, [])

  return (
    <SectionWrapper divClassName="px-0" sectionClassName="pt-0">
      <div className="relative aspect-8/10 w-full md:aspect-2/1">
        <video
          autoPlay
          className="absolute inset-0 h-full w-full object-cover brightness-[0.6]"
          muted
          playsInline
          ref={videoRef}
        >
          <source src="/videos/hero/file.mp4" type="video/mp4" />
        </video>
        <HeroTitle highlight="Comunidade" text="Uma institução ao serviço da" />
      </div>
    </SectionWrapper>
  )
}
