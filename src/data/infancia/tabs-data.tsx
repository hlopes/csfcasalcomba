import ListItem from '@/components/list-item/ListItem'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
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
      <>
        <ul className="space-y-8 text-justify">
          <li>
            <h3 className="mb-4 font-semibold">Tipo de resposta e objetivos</h3>
            Resposta social que visa proporcionar o bem-estar e o
            desenvolvimento individual das crianças, na ocupação do seu tempo
            extracurricular, com atividades de animação, sociais e educativas.
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
        <div className="flex flex-col justify-between gap-4 py-8 md:flex-row">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="uppercase" size="lg">
                Inscrição
              </Button>
            </DialogTrigger>
            <DialogContent className="xl:max-w-[1200px]">
              <DialogHeader>
                <DialogTitle className="text-primary">
                  INSCRIÇÃO CATL
                </DialogTitle>
                <DialogDescription>
                  Documentos necessários para realização de inscrição:
                </DialogDescription>
              </DialogHeader>
              <ScrollArea className="h-[70vh]">
                <div>
                  <p className="py-4">
                    Vimos por este meio informar V. Ex.a, que se encontram
                    abertas as inscrições para o Centro de Atividades de Tempos
                    Livres, para o ano letivo 2024/2025, com a prestação de
                    serviços ao nível do fornecimento de almoço, realização de
                    atividades de animação/ocupação dos tempos livres e
                    transporte. Caso esteja interessado em fazer a inscrição do
                    seu Educando, deverá entregar, até ao dia 30 de Junho, os
                    seguintes documentos:
                  </p>
                  <ul className="nt">
                    <ListItem>
                      Fotocópia do Bilhete de Identidade, Cartão de Cidadão ou
                      Certidão de Nascimento da criança;
                    </ListItem>
                    <ListItem>
                      Fotocópia de documento da Segurança Social que identifique
                      o NISS (Nº de Identificação de Segurança Social) da
                      criança;
                    </ListItem>
                    <ListItem>
                      Fotocópia do Boletim de Vacinas atualizado da criança;
                    </ListItem>
                    <ListItem>
                      Fotocópia do Cartão de Utente do Serviço Nacional de Saúde
                      ou de outro subsistema de saúde a que a criança pertença;
                    </ListItem>
                    <ListItem>
                      Atestado/declaração médica, elaborada pelo Médico
                      Assistente, comprovando a situação clínica da criança e se
                      sofre de alguma doença infetocontagiosa, ou seja,
                      declaração que indique que a criança pode frequentar a
                      Instituição;
                    </ListItem>
                    <ListItem>
                      Declaração de um profissional de saúde qualificado que
                      informe acerca da existência de alergias, intolerâncias
                      alimentares e/ou necessidade de dietas específicas;
                    </ListItem>
                    <ListItem>
                      Fotocópia do Cartão de Cidadão ou do Bilhete de Identidade
                      e Cartão de Contribuinte do Encarregado de Educação;
                    </ListItem>
                    <ListItem>
                      Fotocópia da última Declaração de IRS e respetiva Nota de
                      Liquidação, referente ao ano de anterior;
                    </ListItem>
                    <ListItem>
                      Fotocópia do último recibo de vencimento do Encarregado de
                      Educação e do cônjuge;
                    </ListItem>
                    <ListItem>
                      Comprovativo de ausência de rendimentos, quando se
                      verificar uma situação de desemprego;
                    </ListItem>
                    <ListItem>
                      Comprovativo de Pensões de que os elementos do agregado
                      familiar beneficiam (ex.: velhice, invalidez,
                      sobrevivência, aposentação, reforma, rendas temporárias ou
                      vitalícias, prestações a cargo de companhias de seguros ou
                      fundos de pensões, pensões de alimentos);
                    </ListItem>
                    <ListItem>
                      Comprovativo de Prestações Sociais de que os elementos do
                      agregado familiar beneficiam (ex.: rendimento social de
                      inserção, subsídio de desemprego, subsídio de doença,
                      abonos);
                    </ListItem>
                    <ListItem>
                      Comprovativo de Bolsas de Estudo e Formação Profissional
                      de que os elementos do agregado familiar beneficiam;
                    </ListItem>
                    <ListItem>
                      Fotocópia do comprovativo de pagamento de empréstimo
                      bancário sobre a habitação ou de renda de casa;
                    </ListItem>
                    <ListItem>
                      Fotocópia do comprovativo de despesas com saúde e
                      medicação de uso continuado em caso de doença crónica;
                    </ListItem>
                    <ListItem>
                      Comprovativo de despesas com transportes (transportes
                      públicos);
                    </ListItem>
                    <ListItem>
                      Fotocópia do documento de Regulação das Responsabilidades
                      Parentais, bem como da atribuição da Pensão de Alimentos
                      (se aplicável).
                    </ListItem>
                  </ul>
                </div>
              </ScrollArea>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="uppercase" size="lg">
                Renovação da inscrição
              </Button>
            </DialogTrigger>
            <DialogContent className="xl:max-w-[1200px]">
              <DialogHeader>
                <DialogTitle className="text-primary">
                  RENOVAÇÃO DA INSCRIÇÃO NO CATL
                </DialogTitle>
                <DialogDescription>
                  Documentos necessários para realização da renovação da
                  inscrição:
                </DialogDescription>
              </DialogHeader>
              <ScrollArea className="h-[70vh]">
                <div>
                  <p className="py-4">
                    Vimos por este meio informar V. Ex.a, que se encontram
                    abertas as inscrições para o Centro de Atividades de Tempos
                    Livres, para o ano letivo 2024/2025, com a prestação de
                    serviços ao nível do fornecimento de almoço, realização de
                    atividades de animação/ocupação dos tempos livres e
                    transporte. Caso esteja interessado em renovar a inscrição
                    do seu Educando, deverá entregar, até ao dia 30 de Junho, os
                    seguintes documentos:
                  </p>
                  <ul>
                    <ListItem>
                      Fotocópia do Boletim de Vacinas atualizado da criança;
                    </ListItem>
                    <ListItem>
                      Fotocópia da última Declaração de IRS e respetiva Nota de
                      Liquidação, referente ao ano anterior;
                    </ListItem>
                    <ListItem>
                      Fotocópia do último recibo de vencimento do Encarregado de
                      Educação e do cônjuge;
                    </ListItem>
                    <ListItem>
                      Comprovativo de ausência de rendimentos, quando se
                      verificar uma situação de desemprego;
                    </ListItem>
                    <ListItem>
                      Comprovativo de Pensões de que os elementos do agregado
                      familiar beneficiam (ex.: velhice, invalidez,
                      sobrevivência, aposentação, reforma, rendas temporárias ou
                      vitalícias, prestações a cargo de companhias de seguros ou
                      fundos de pensões, pensões de alimentos);
                    </ListItem>
                    <ListItem>
                      Comprovativo de Prestações Sociais de que os elementos do
                      agregado familiar beneficiam (ex.: rendimento social de
                      inserção, subsídio de desemprego, subsídio de doença,
                      abonos);
                    </ListItem>
                    <ListItem>
                      Comprovativo de Bolsas de Estudo e Formação Profissional
                      de que os elementos do agregado familiar beneficiam;
                    </ListItem>
                    <ListItem>
                      Fotocópia do comprovativo de pagamento de empréstimo
                      bancário sobre a habitação ou de renda de casa;
                    </ListItem>
                    <ListItem>
                      Fotocópia do comprovativo de despesas com saúde e
                      medicação de uso continuado em caso de doença crónica;
                    </ListItem>
                    <ListItem>
                      Comprovativo de despesas com transportes (transportes
                      públicos);
                    </ListItem>
                    <ListItem>
                      Fotocópia do documento de Regulação das Responsabilidades
                      Parentais, bem como da atribuição da Pensão de Alimentos
                      (se aplicável).
                    </ListItem>
                  </ul>
                  <p className="mt-4 font-semibold uppercase">Notas:</p>
                  <ul>
                    <ListItem>
                      Em caso de alteração ao nível dos documentos de
                      identificação da criança e/ou Encarregado de Educação é
                      necessário entregar as respetivas fotocópias.
                    </ListItem>
                    <ListItem>
                      Em caso de alteração da situação clínica da criança é
                      necessário entregar uma declaração médica comprovativa.
                    </ListItem>
                  </ul>
                </div>
              </ScrollArea>
            </DialogContent>
          </Dialog>
        </div>
      </>
    ),
    id: 3,
    image: '/images/infancia/catl.jpg',
    title: '(CATL) Centro de Atividades de Tempos Livres',
  },
]
