import type { MenuEntry } from '@/types/MenuEntry'

export const menuData: MenuEntry[] = [
  {
    id: 1,
    newTab: false,
    path: '/instituicao',
    title: 'A Instituição',
  },
  {
    id: 2,
    newTab: false,
    submenu: [
      {
        id: 21,
        newTab: false,
        path: '/area-senior',
        title: 'Área Sénior',
      },
      {
        id: 22,
        newTab: false,
        path: '/infancia',
        title: 'Infância',
      },
    ],
    title: 'Respostas Sociais',
  },
  {
    id: 3,
    newTab: false,
    path: '/projectos-parcerias',
    title: 'Projetos e Parcerias',
  },
  {
    id: 4,
    newTab: false,
    path: '/documentos',
    title: 'Documentos',
  },
  {
    id: 5,
    newTab: false,
    path: '/contato',
    title: 'Contato',
  },
]
