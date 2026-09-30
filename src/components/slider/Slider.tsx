'use client'

import { useState } from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import Animate from '@/components/animations/Animate'
import SectionWrapper from '@/components/section-wrapper/SectionWrapper'
import Slide from '@/components/slider/Slide'
import { Button } from '@/components/ui/button'
import { Image } from '@/types/Image'

type SwiperSlideProps = {
  images: Image[]
}

export default function Slider({ images }: SwiperSlideProps) {
  const [swiper, setSwiper] = useState<SwiperType | null>(null)
  const [isPaused, setIsPaused] = useState(false)

  const toggleAutoplay = () => {
    if (!swiper?.autoplay) {
      return
    }

    if (isPaused) {
      swiper.autoplay.start()
    } else {
      swiper.autoplay.stop()
    }

    setIsPaused(!isPaused)
  }

  return (
    <SectionWrapper>
      <Animate delay={0.1} duration={1}>
        <div
          aria-label="Galeria de fotografias"
          className="swiper testimonial-01 mb-20 pb-22.5"
          role="region"
        >
          <div className="mb-4 flex justify-end">
            <Button
              aria-label={isPaused ? 'Retomar carrossel' : 'Pausar carrossel'}
              aria-pressed={isPaused}
              onClick={toggleAutoplay}
              type="button"
              variant="outline"
            >
              {isPaused ? 'Retomar' : 'Pausar'}
            </Button>
          </div>
          {/* <!-- Additional required wrapper --> */}
          <Swiper
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            onSwiper={setSwiper}
            breakpoints={{
              // when window width is >= 640px
              0: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            modules={[Autoplay, Pagination]}
            pagination={{
              clickable: true,
            }}
            slidesPerView={2}
            spaceBetween={50}
          >
            {images.map((image) => (
              <SwiperSlide key={image.id}>
                <Slide {...image} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Animate>
    </SectionWrapper>
  )
}
