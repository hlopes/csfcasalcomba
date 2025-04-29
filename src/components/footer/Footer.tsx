'use client'

import AnimateTop from '@/components/animations/AnimateTop'
import Address from '@/components/footer/Address'
import Contacts from '@/components/footer/Contacts'
import Intro from '@/components/footer/Intro'

export default function Footer() {
  return (
    <footer className="border-stroke dark:bg-blacksection bg-background mt-12 border-t lg:mt-24">
      <div className="max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">
        <div className="py-10 lg:py-16">
          <div className="mb-10 flex flex-col justify-center gap-y-6 md:flex-row md:flex-wrap lg:justify-between">
            <AnimateTop
              className="mb-4 w-full lg:w-1/3"
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Address />
            </AnimateTop>
            <AnimateTop
              className="w-full md:w-1/2 lg:w-1/3"
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Contacts />
            </AnimateTop>
            <AnimateTop
              className="w-full md:w-1/2 lg:w-1/3"
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Intro />
            </AnimateTop>
          </div>
          <AnimateTop
            className="w-full"
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <iframe
              allowFullScreen
              height="300px"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.9211327361113!2d-8.467436687758754!3d40.36627307132859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd23008a8966a3b1%3A0xf9b3b80f9569c790!2sCentro%20Social%20Da%20Freguesia%20De%20Casal%20Comba!5e0!3m2!1spt-PT!2spt!4v1745532090274!5m2!1spt-PT!2spt"
              style={{ border: 0 }}
              title="Localização do Centro Social da Freguesia de Casal Comba"
              width="100%"
            />
          </AnimateTop>
        </div>
        <div className="border-stroke dark:border-strokedark flex flex-col flex-wrap items-center justify-center gap-4 border-t py-8 lg:flex-row lg:gap-0">
          <AnimateTop transition={{ delay: 0.1, duration: 0.5 }}>
            <p className="text-primary">
              &copy; {new Date().getFullYear()} CSFCC. Todos os direitos
              reservados.
            </p>
          </AnimateTop>
        </div>
      </div>
    </footer>
  )
}
