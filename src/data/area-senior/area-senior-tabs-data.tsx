import { Tab } from '@/types/Tab'

export const data: Tab[] = [
  {
    children: (
      <ul className="space-y-8 text-justify">
        <li>
          <h3 className="mb-4 font-semibold">Tipo de resposta e objetivos</h3>
          Resposta social que consiste na prestação de cuidados e serviços a
          pessoas idosas que se encontram no seu domicílio, em situação de
          dependência física e/ou psíquica, que precisam de apoio para assegurar
          a satisfação das suas necessidades básicas e a realização de
          atividades da vida diária, prevenindo situações de dependência ou o
          seu agravamento.
        </li>
        <li>
          <h3 className="mb-4 font-semibold">Serviços e atividades</h3>
          Cuidados de higiene e conforto pessoal, transporte, distribuição e
          acompanhamento de refeições, limpeza da habitação, tratamento de
          roupas de uso pessoal, acompanhamento na aquisição de bens, cuidados
          de imagem (cabeleireiro, manicure, pedicure), atividades de ocupação,
          animação e convívio, atividades desportivas (ginástica e
          hidroginástica geriátrica), acesso a equipamento de apoio (ajudas
          técnicas e material anti-escaras), acompanhamento e vigilância diária,
          apoio psicolófico e social.
        </li>
        <li>
          <h3 className="mb-4 font-semibold">Funcionamento</h3>
          Dias úteis (das 7h30 às 19h), fim de semana e feriados (das 8h30 às
          18h).
        </li>
        <li>
          <h3 className="mb-4 font-semibold">Destinatários</h3>
          Pessoas com idade superior a 65 anos, salvo situações excecionais.
        </li>
      </ul>
    ),
    id: 1,
    image: '/images/area-senior/sad.jpg',
    title: '(SAD) Serviço de Apoio Domiciliário',
  },
  {
    children: (
      <ul className="space-y-8 text-justify">
        <li>
          <h3 className="mb-4 font-semibold">Tipo de resposta e objetivos</h3>
          Resposta Social desenvolvida em equipamento, que consiste na prestação
          de serviços que contribuem para a manutenção das pessoas idosas no seu
          meio sociofamiliar, visando a promoção da autonomia e a prevenção de
          situações de dependência ou o seu agravamento.
        </li>
        <li>
          <h3 className="mb-4 font-semibold">Serviços e atividades</h3>
          Alimentação, cuidados de higiene pessoal, tratamento de roupa,
          administração de medicamentos, transporte, apoio na aquisição de bens
          e serviços, acompanhamento ao exterior, cuidados de imagem
          (cabeleireiro, manicure, pedicure), atividades lúdicas, de animação e
          socioculturais, atividades desportivas (ginástica e hidroginástica
          geriátrica), acompanhamento personalizado e vigilância diária, apoio
          psicológico e social.
        </li>
        <li>
          <h3 className="mb-4 font-semibold">Funcionamento</h3>
          Dias úteis (das 9h às 19h), fim de semana e feriados (das 10h30 às
          19h).
        </li>
        <li>
          <h3 className="mb-4 font-semibold">Destinatários</h3>
          Pessoas com idade superior a 65 anos, salvo situações excecionais.
        </li>
      </ul>
    ),
    id: 2,
    image: '/images/area-senior/cd.jpg',
    title: '(CD) Centro de Dia',
  },
  {
    children: (
      <ul className="space-y-8 text-justify">
        <li>
          <h3 className="mb-4 font-semibold">Tipo de resposta e objetivos</h3>
          Resposta social que desenvolve atividades de apoio psicológico e
          social a pessoas idosas através do alojamento coletivo, promovendo a
          qualidade de vida e o envelhecimento ativo.
        </li>
        <li>
          <h3 className="mb-4 font-semibold">Serviços e atividades</h3>
          Alojamento, alimentação, cuidados de higiene e conforto pessoal,
          tratamento de roupas, cuidados de saúde (assistência médica e de
          enfermagem), administração de medicamentos, acompanhamento a
          consultas/exames médicos, transporte, atividades de animação
          sociocultural, lúdicas e recreativas, atividades desportivas
          (ginástica e hidroginástica geriátrica), cuidados de imagem
          (cabeleireiro, manicure, pedicure), vigilância 24 horas,
          acompanhamento personalizado, apoio psicológico e social.
        </li>
        <li>
          <h3 className="mb-4 font-semibold">Funcionamento</h3>
          Todos os dias (24 horas).
        </li>
        <li>
          <h3 className="mb-4 font-semibold">Destinatários</h3>
          Pessoas com 65 ou mais anos que, por razões familiares, de
          dependência, de isolamento, de solidão ou insegurança, não podem
          permanecer na sua residência.
        </li>
      </ul>
    ),
    id: 3,
    image: '/images/area-senior/erpi.jpg',
    title: '(ERPI) Estrutura Residencial para Pessoas Idosas',
  },
]
