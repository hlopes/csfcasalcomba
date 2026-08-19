import Image from 'next/image'
import Link from 'next/link'

export default function Intro() {
  return (
    <>
      <Link className="relative" href="/">
        <Image
          alt="logo"
          height={81}
          src="/images/logo/logo-small.png"
          className="h-auto"
          width={64}
        />
      </Link>
      <p className="my-4 text-pretty">
        O Centro Social da Freguesia de Casal Comba é uma Instituição Particular
        de Solidariedade Social.
      </p>
    </>
  )
}
