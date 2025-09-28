import FileLink from '@/components/file-link/FileLink'
import { Folder } from '@/types/Folder'

export const data: Folder[] = [
  {
    content: (
      <ul>
        <li>
          <FileLink
            href="https://drive.google.com/file/d/1D4ESMsv54UY8bOsXxNeyFFHZWPYqzy-k/view?usp=drive_link"
            title="Estatutos"
          />
        </li>
        <li>
          <FileLink
            href="https://drive.google.com/file/d/1Mk-kNnRTyHFq9jaW1eBdkTfr-d5CtTRR/view?usp=drive_link"
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
            href="https://drive.google.com/file/d/1DcLbK1TpRkTYOzVc1QL6yTr2-bvUF76h/view?usp=drive_link"
            title="Contas do Exercício do Ano 2021"
          />
        </li>
        <li>
          <FileLink
            href="https://drive.google.com/file/d/1MHcvichKt_yy1pt3kecyOabGI2W6nfXD/view?usp=drive_link"
            title="Relatório de Atividades e Contas Ano 2020"
          />
        </li>
        <li>
          <FileLink
            href="https://drive.google.com/file/d/1LVIGKsAR4yG9w4SQNeUwE8JJkMONL0sk/view?usp=drive_link"
            title="Relatório de Atividades e Contas Ano 2021"
          />
        </li>
        <li>
          <FileLink
            href="https://drive.google.com/file/d/1WDzNIlOqjC2yLSInjxBjxA7ntVlsM-ed/view?usp=drive_link"
            title="Relatório de Atividades e Contas Ano 2022"
          />
        </li>
        <li>
          <FileLink
            href="https://drive.google.com/file/d/1nBL8yMDUDreBDbY7XTz6HSb_pvpP2GTX/view?usp=drive_link"
            title="Relatório de Atividades e Contas Ano 2023"
          />
        </li>
        <li>
          <FileLink
            href="https://drive.google.com/file/d/1n7BAzVLo_AaLyohUfi7oAMSs0QWf_oyf/view?usp=drive_link"
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
          <FileLink
            href="https://drive.google.com/file/d/1MAEhc7iAVEYMJ6l3DG0ninNRqJnRGQmg/view?usp=drive_link"
            title="Projecto SAD"
          />
        </li>
      </ul>
    ),
    id: 3,
    title: 'Projectos',
  },
]
