import FileLink from '@/components/file-link/FileLink'
import { Folder } from '@/types/Folder'

export const data: Folder[] = [
  {
    content: (
      <ul>
        <li>
          <FileLink href="/docs/estatutos.pdf" title="Estatutos" />
        </li>
        <li>
          <FileLink
            href="/docs/ficha-socio.pdf"
            title="Ficha de Inscrição de Sócio"
          />
        </li>
      </ul>
    ),
    id: 1,
    title: 'Gerais',
  },
  {
    content: (
      <ul>
        <li>
          <FileLink
            href="/docs/cea-2021.pdf"
            title="Contas do Exercício do Ano 2021"
          />
        </li>
        <li>
          <FileLink
            href="/docs/rac-2020.pdf"
            title="Relatório de Atividades e Contas Ano 2020"
          />
        </li>
        <li>
          <FileLink
            href="/docs/rac-2021.pdf"
            title="Relatório de Atividades e Contas Ano 2021"
          />
        </li>
        <li>
          <FileLink
            href="/docs/rac-2022.pdf"
            title="Relatório de Atividades e Contas Ano 2022"
          />
        </li>
        <li>
          <FileLink
            href="/docs/rac-2023.pdf"
            title="Relatório de Atividades e Contas Ano 2023"
          />
        </li>
        <li>
          <FileLink
            href="/docs/rac-2024.pdf"
            title="Relatório de Atividades e Contas Ano 2024"
          />
        </li>
      </ul>
    ),
    id: 2,
    title: 'Apresentação de Contas',
  },
  {
    content: (
      <ul>
        <li>
          <FileLink href="/docs/projeto-sad.pdf" title="Projecto SAD" />
        </li>
      </ul>
    ),
    id: 3,
    title: 'Projectos',
  },
]
