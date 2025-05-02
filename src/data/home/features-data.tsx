import { Feature } from '@/types/Feature'

export const featuresData: Feature[] = [
  {
    content: (
      <ul className="max-w-md list-inside list-disc space-y-2 pl-2 text-gray-500 dark:text-gray-400">
        <li>Acompanhamento e vigilância</li>
        <li>Apoio psicológico e social</li>
        <li>Alimentação</li>
        <li>Cuidados de higiene pessoal</li>
        <li>Atividades pedagógicas, lúdicas e de motricidade</li>
        <li>Transporte</li>
      </ul>
    ),
    href: '/infancia?tab=1',
    id: 1,
    image: '/images/home/creche.avif',
    title: 'Creche',
  },
  {
    content: (
      <ul className="max-w-md list-inside list-disc space-y-2 pl-8 text-gray-500 dark:text-gray-400">
        <li>Centro de Dia</li>
        <li>Serviço de Apoio Domiciliário</li>
        <li>Estrutura Residencial para Pessoas Idosas</li>
      </ul>
    ),
    href: '/area-senior',
    id: 2,
    image: '/images/home/area-senior.avif',
    title: 'Aceitamos Inscrições',
  },
  {
    content: <p>Inscrições e Renovações de Inscrição.</p>,
    href: '/infancia?tab=3',
    id: 3,
    image: '/images/home/catl.avif',
    title: 'Centro de Atividades de Tempos Livres',
  },
]
