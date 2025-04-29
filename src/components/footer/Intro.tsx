import { Facebook } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Intro() {
  return (
    <>
      <Link className="relative" href="/">
        <Image
          alt="logo"
          height={64}
          src="/images/logo/logo-small.png"
          width={64}
        />
      </Link>
      <p className="my-4 text-justify">
        O Centro Social da Freguesia de Casal Comba é uma Instituição Particular
        de Solidariedade Social.
      </p>
      <div className="mt-8 flex items-center justify-between">
        <Link href="https://www.facebook.com/csfcasalcomba/">
          <Facebook className="text-primary h-10 w-6" />
        </Link>
        <Link href="https://www.livroreclamacoes.pt/">
          <Image
            alt="Livro de Reclamações"
            height={34}
            src="/images/footer/reclamacoes.png"
            width={133}
          />
        </Link>
      </div>
    </>
  )
}
