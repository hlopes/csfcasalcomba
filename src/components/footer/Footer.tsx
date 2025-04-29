'use client'

import AnimateTop from '@/components/footer/AnimateTop'
import { Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

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
              <Link className="relative" href="/">
                <Image
                  alt="logo"
                  height={80}
                  src="/images/logo/logo.png"
                  width={224}
                />
              </Link>
              <p className="my-4">Uma instuição ao serviço da comunidade.</p>
              <Link
                className="flex items-center gap-2"
                href="mailto:csfcasalcomba@gmail.com"
              >
                <Mail className="h-4 w-4" />
                <span>csfcasalcomba@gmail.com</span>
              </Link>
            </AnimateTop>
            <AnimateTop
              className="w-full md:w-1/2 lg:w-1/3"
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <ul className="mb-4 lg:pl-8">
                <li>
                  <h4 className="text-primary mb-2">Gabinete Técnico</h4>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <Link href="tel:933573804">933 573 804</Link>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <Link href="tel:231201400">231 201 400</Link>
                </li>
              </ul>
              <ul className="mb-4 lg:pl-8">
                <li>
                  <h4 className="text-primary mb-2">CATL</h4>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <Link href="tel:934580002">934 580 002</Link>
                </li>
              </ul>
              <ul className="mb-4 lg:pl-8">
                <li>
                  <h4 className="text-itemtitle2 text-primary mb-2 font-medium">
                    Creche
                  </h4>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <Link href="tel:933573804">933 573 804</Link>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <Link href="tel:231201401">231 201 401</Link>
                </li>
              </ul>
            </AnimateTop>
            <AnimateTop
              className="w-full md:w-1/2 lg:w-1/3"
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <h4 className="text-primary mb-4">Onde Estamos</h4>
              <address className="not-italic">
                Centro Social da Freguesia de Casal Comba
                <br />
                Rua da Portela, nº16
                <br />
                3050-151 Casal Comba
              </address>
              <Link href="https://www.livroreclamacoes.pt/">
                <Image
                  alt="Livro de Reclamações"
                  className="mt-12"
                  height={34}
                  src="/images/footer/reclamacoes.png"
                  width={133}
                />
              </Link>
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
