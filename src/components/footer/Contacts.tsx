import { Mail, Phone } from 'lucide-react'
import Link from 'next/link'

export default function Contacts() {
  return (
    <div className="lg:pl-8">
      <ul className="mb-4">
        <li>
          <h4 className="text-primary mb-2">Email</h4>
        </li>
        <li>
          <Link
            className="flex items-center gap-2"
            href="mailto:csfcasalcomba@gmail.com"
          >
            <Mail className="h-4 w-4" />
            <span>csfcasalcomba@gmail.com</span>
          </Link>
        </li>
      </ul>
      <ul className="mb-4">
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
      <ul className="mb-4">
        <li>
          <h4 className="text-primary mb-2">CATL</h4>
        </li>
        <li className="flex items-center gap-2">
          <Phone className="h-4 w-4" />
          <Link href="tel:934580002">934 580 002</Link>
        </li>
      </ul>
      <ul className="mb-4">
        <li>
          <h4 className="text-primary mb-2">Creche</h4>
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
    </div>
  )
}
