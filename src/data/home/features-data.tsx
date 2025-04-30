import ListItem from '@/components/list-item/ListItem'
import { Feature } from '@/types/Feature'

export const featuresData: Feature[] = [
  {
    content: (
      <ul className="list- max-w-md list-inside space-y-2 pl-2 text-gray-500 dark:text-gray-400">
        <ListItem>Acompanhamento e vigilância</ListItem>
        <ListItem>Apoio psicológico e social</ListItem>
        <ListItem>Alimentação</ListItem>
        <ListItem>Cuidados de higiene pessoal</ListItem>
        <ListItem>Atividades pedagógicas, lúdicas e de motricidade</ListItem>
        <ListItem>Transporte</ListItem>
      </ul>
    ),
    href: '/infancia',
    id: 1,
    image: '/images/home/creche.avif',
    title: 'Creche',
  },
  {
    content: (
      <ul className="max-w-md list-inside list-disc space-y-2 pl-8 text-gray-500 dark:text-gray-400">
        <ListItem>Centro de Dia</ListItem>
        <ListItem>Serviço de Apoio Domiciliário</ListItem>
        <ListItem>Estrutura Residencial para Pessoas Idosas</ListItem>
      </ul>
    ),
    href: '/area-senior',
    id: 2,
    image: '/images/home/area-senior.avif',
    title: 'Aceitamos Inscrições',
  },
  {
    content: <p>Inscrições e Renovações de Inscrição.</p>,
    href: '/infancia',
    id: 3,
    image: '/images/home/catl.avif',
    title: 'Centro de Atividades de Tempos Livres',
  },
]
