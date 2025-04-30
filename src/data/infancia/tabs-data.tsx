import { Tab } from '@/types/Tab'

export const data: Tab[] = [
  {
    children: (
      <ul className="space-y-8 text-justify">
        <li>
          <h3 className="mb-4 font-semibold">Tipo de resposta e objetivos</h3>
          Resposta social de natureza socioeducativa que visa apoiar as famílias
          e proporcionar às crianças um clima de segurança física e emocional,
          que contribua para o seu bem estar e para o desenvolvimento de
          competências.
        </li>
        <li>
          <h3 className="mb-4 font-semibold">Serviços e atividades</h3>
          Acompanhamento personalizado e vigilância diária das crianças, apoio
          psicológico e social, alimentação, cuidados de higiene pessoal,
          atividades pedagógicas, lúdicas e de motricidade, transporte.
        </li>
        <li>
          <h3 className="mb-4 font-semibold">Funcionamento</h3>
          Dias úteis (das 7h30 às 19h15).
        </li>
        <li>
          <h3 className="mb-4 font-semibold">Destinatários</h3>
          Crianças dos 4 meses aos 3 anos.
        </li>
      </ul>
    ),
    id: 1,
    image: '/images/infancia/creche.jpg',
    title: 'Creche',
  },
  {
    children: (
      <ul className="space-y-8 text-justify">
        <li>
          <h3 className="mb-4 font-semibold">Tipo de resposta e objetivos</h3>
          Resposta às necessidades dos agregados familiares que visa assegurar o
          acompanhamento das crianças na educação pré-escolar antes e/ou depois
          do período diário de atividades educativas e durante os períodos de
          interrupção destas atividades.
        </li>
        <li>
          <h3 className="mb-4 font-semibold">Serviços e atividades</h3>
          Acompanhamento personalizado e vigilância diária das crianças, apoio
          psicológico e social, atividades lúdicas e socioeducativas,
          alimentação, prolongamento de horário e transporte.
        </li>
        <li>
          <h3 className="mb-4 font-semibold">Funcionamento</h3>
          Todos os dias úteis (das 9h às 19h00).
        </li>
        <li>
          <h3 className="mb-4 font-semibold">Destinatários</h3>
          Crianças dos 3 aos 6 anos.
        </li>
      </ul>
    ),
    id: 2,
    image: '/images/infancia/aaaf.jpg',
    title: '(AAAF) Atividades de Animação e Apoio à Família',
  },
  {
    children: (
      <ul className="space-y-8 text-justify">
        <li>
          <h3 className="mb-4 font-semibold">Tipo de resposta e objetivos</h3>
          Resposta social que visa proporcionar o bem-estar e o desenvolvimento
          individual das crianças, na ocupação do seu tempo extracurricular, com
          atividades de animação, sociais e educativas.
        </li>
        <li>
          <h3 className="mb-4 font-semibold">Serviços e atividades</h3>
          Acompanhamento personalizado e vigilância diária das crianças, apoio
          psicológico e social, atividades de animação, convívio e lúdicas,
          apoio e acompanhamento na realização de trabalhos escolares,
          atividades no exterior, transporte.
        </li>
        <li>
          <h3 className="mb-4 font-semibold">Funcionamento</h3>
          Todos os dias úteis (das 8h às 19h).
        </li>
        <li>
          <h3 className="mb-4 font-semibold">Destinatários</h3>
          Crianças dos 6 aos 12 anos.
        </li>
      </ul>
    ),
    id: 3,
    image: '/images/infancia/catl.jpg',
    title: '(CATL) Centro de Atividades de Tempos Livres',
  },
]
