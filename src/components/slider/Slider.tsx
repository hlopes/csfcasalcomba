'use client'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import AnimateTop from '@/components/animations/AnimateTop'
import SectionWrapper from '@/components/section-wrapper/SectionWrapper'
import Slide from '@/components/slider/Slide'
import { Image } from '@/types/Image'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type SwiperSlideProps = {
  images: Image[]
}

export default function Slider({ images }: SwiperSlideProps) {
  return (
    <SectionWrapper>
      <AnimateTop transition={{ delay: 0.1, duration: 1 }}>
        <div className="swiper testimonial-01 mb-20 pb-22.5">
          {/* <!-- Additional required wrapper --> */}
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
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
      </AnimateTop>
    </SectionWrapper>
  )
}
