'use client'

import { useEffect, useRef } from 'react'

import HeroTitle from '@/components/hero/HeroTitle'
import SectionWrapper from '@/components/section-wrapper/SectionWrapper'

export default function HeroPrimary() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) {
      return
    }
    video.playbackRate = 0.4
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.pause()
    }
  }, [])

  return (
    <SectionWrapper divClassName="px-0" sectionClassName="pt-0">
      <div className="relative aspect-8/10 w-full md:aspect-2/1">
        <video
          aria-hidden="true"
          autoPlay
          className="absolute inset-0 h-full w-full object-cover brightness-[0.6]"
          muted
          playsInline
          poster="/images/home/facade.jpg"
          preload="metadata"
          ref={videoRef}
          tabIndex={-1}
        >
          <source src="/images/home/file.mp4" type="video/mp4" />
        </video>
        <HeroTitle
          highlight="Comunidade"
          highlightDelay={1.2}
          text="Uma instituição ao serviço da"
          to="to-cyan-500"
        />
      </div>
    </SectionWrapper>
  )
}
