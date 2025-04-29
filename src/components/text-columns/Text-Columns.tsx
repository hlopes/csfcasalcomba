import AnimateTop from '@/components/animations/AnimateTop'
import SectionWrapper from '@/components/section-wrapper/SectionWrapper'
import { TextColumn } from '@/types/TextColumn'

type TextColumnsProps = {
  data: TextColumn | TextColumn[]
}

export default function TextColumns({ data }: TextColumnsProps) {
  if (!data) {
    return null
  }

  if (Array.isArray(data) && data.length > 1) {
    return (
      <SectionWrapper>
        <AnimateTop transition={{ delay: 0.1, duration: 0.5 }}>
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
            {data.map(({ description, id, title }) => (
              <div className="w-full lg:w-1/2" key={id}>
                <div className="text-justify">
                  <div className="mx-auto max-w-120">
                    <h2 className="text-primary mx-auto mb-4 text-2xl uppercase">
                      {title}
                    </h2>
                    <p className="mx-auto">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimateTop>
      </SectionWrapper>
    )
  }

  return (
    <SectionWrapper>
      <div className="w-full">
        <div className="text-justify">
          <AnimateTop transition={{ delay: 0.1, duration: 0.5 }}>
            <div className="mx-auto max-w-240">
              <h2 className="text-primary mx-auto mb-4 text-2xl uppercase">
                Valores
              </h2>
              <ul className="space-y-8">
                <li>
                  <strong>Confiança:</strong> Acredita que a honestidade é a
                  base do bom funcionamento da instituição, visto que, é o pilar
                  que sustenta a relação entre a sua atuação e os elementos que
                  dela fazem parte.
                </li>

                <li>
                  <strong>Solidariedade:</strong> Defende que o espírito de
                  entreajuda deve estar presente em toda e qualquer intervenção
                  da Instituição.
                </li>

                <li>
                  <strong>Transparência/Probidade:</strong> Defende a existência
                  de rigor e clareza em todos os procedimentos de gestão e ações
                  desenvolvidas como uma base para o estabelecimento de uma
                  relação de confiança entre os envolvidos.
                </li>

                <li>
                  <strong>Aprendizagem e Evolução Contínua:</strong> Sustenta
                  que a sua atuação se deve pautar pela inovação e pela mudança,
                  ao nível do desenvolvimento de iniciativas adequadas à
                  realidade social e ao nível da formação contínua dos seus
                  diretores, gestores, e colaboradores. Somente desta forma, a
                  instituição se poderá adaptar ao contexto socioeconómico e
                  político em constante mutação.
                </li>

                <li>
                  <strong>Profissionalismo:</strong> Acredita que todos os
                  colaboradores têm uma postura e agem com integridade e
                  honestidade, detêm competências específicas e desempenham as
                  suas funções de forma correta e responsável, de acordo com
                  aquilo que é melhor para o utente e para a Instituição,
                  respondendo pelas suas ações.
                </li>
                <li>
                  <strong>Orientação para o Utente:</strong> Todas as ações
                  desenvolvidas e cuidados prestados são personalizados e têm
                  sempre como prioridade o bem-estar da população-alvo,
                  independentemente das suas características pessoais (idade,
                  sexo, religião, etc.) e da sua situação socioeconómica. A
                  Instituição entende o utente como o elemento central e mais
                  importante, acreditando que contribuir para o seu bem-estar,
                  colmatando as suas necessidades, é promover o seu sentimento
                  de pertença.
                </li>
                <li>
                  <strong>
                    Respeito pela Individualidade, Dignidade e Autonomia:
                  </strong>{' '}
                  Compreende o ser humano como uma pessoa com personalidade e
                  vivência próprias que merece ser defendida e protegida acima
                  de qualquer outro interesse que não seja o seu. Defende a
                  importância do sigilo profissional, ou seja, de preservar
                  informações e dados pessoais dos utentes, como forma de
                  respeitar a vida privada e a dignidade de cada um.
                </li>
                <li>
                  <strong>Envolvimento e Participação da Comunidade:</strong>{' '}
                  Acredita que a Instituição tem um papel fulcral em termos de
                  responsabilidade pública e que a intervenção social local e as
                  suas atividades e respostas sociais têm um grande impacto na
                  comunidade. No entanto, para prestar apoio social à freguesia
                  de Casal Comba, qualquer iniciativa somente poderá ser
                  realizada com o estabelecimento de parcerias com as entidades
                  locais e com a colaboração de todos os que residem na sua área
                  de atuação.
                </li>
              </ul>
            </div>
          </AnimateTop>
        </div>
      </div>
    </SectionWrapper>
  )
}
