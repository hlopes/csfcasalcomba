import SectionWrapper from '@/components/section-wrapper/SectionWrapper'
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

export default function DocsDialogs() {
  return (
    <SectionWrapper sectionClassName="p-0">
      <div className="flex flex-col justify-between gap-4 py-8 md:flex-row">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="group cursor-pointer uppercase" size="lg">
              Inscrição
              <svg
                className="inline-block h-6 w-6 opacity-50 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100"
                fill="none"
                height="1em"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18 8L22 12L18 16" />
                <path d="M2 12H22" />
              </svg>
            </Button>
          </DialogTrigger>
          <DialogContent className="xl:max-w-[1200px]">
            <DialogHeader>
              <DialogTitle className="text-primary">INSCRIÇÃO CATL</DialogTitle>
              <DialogDescription>
                Documentos necessários para realização de inscrição:
              </DialogDescription>
            </DialogHeader>
            <ScrollArea className="h-[70vh]">
              <div>
                <p className="py-4 text-sm">
                  Vimos por este meio informar V. Ex.a, que se encontram abertas
                  as inscrições para o Centro de Atividades de Tempos Livres,
                  para o ano letivo 2024/2025, com a prestação de serviços ao
                  nível do fornecimento de almoço, realização de atividades de
                  animação/ocupação dos tempos livres e transporte. Caso esteja
                  interessado em fazer a inscrição do seu Educando, deverá
                  entregar, até ao dia 30 de Junho, os seguintes documentos:
                </p>
                <ul className="list-inside list-decimal text-sm">
                  <li className="pb-2" key={1}>
                    Fotocópia do Bilhete de Identidade, Cartão de Cidadão ou
                    Certidão de Nascimento da criança;
                  </li>
                  <li className="pb-2" key={2}>
                    Fotocópia de documento da Segurança Social que identifique o
                    NISS (Nº de Identificação de Segurança Social) da criança;
                  </li>
                  <li className="pb-2" key={3}>
                    Fotocópia do Boletim de Vacinas atualizado da criança;
                  </li>
                  <li className="pb-2" key={4}>
                    Fotocópia do Cartão de Utente do Serviço Nacional de Saúde
                    ou de outro subsistema de saúde a que a criança pertença;
                  </li>
                  <li className="pb-2" key={5}>
                    Atestado/declaração médica, elaborada pelo Médico
                    Assistente, comprovando a situação clínica da criança e se
                    sofre de alguma doença infetocontagiosa, ou seja, declaração
                    que indique que a criança pode frequentar a Instituição;
                  </li>
                  <li className="pb-2" key={6}>
                    Declaração de um profissional de saúde qualificado que
                    informe acerca da existência de alergias, intolerâncias
                    alimentares e/ou necessidade de dietas específicas;
                  </li>
                  <li className="pb-2" key={7}>
                    Fotocópia do Cartão de Cidadão ou do Bilhete de Identidade e
                    Cartão de Contribuinte do Encarregado de Educação;
                  </li>
                  <li className="pb-2" key={8}>
                    Fotocópia da última Declaração de IRS e respetiva Nota de
                    Liquidação, referente ao ano de anterior;
                  </li>
                  <li className="pb-2" key={9}>
                    Fotocópia do último recibo de vencimento do Encarregado de
                    Educação e do cônjuge;
                  </li>
                  <li className="pb-2" key={10}>
                    Comprovativo de ausência de rendimentos, quando se verificar
                    uma situação de desemprego;
                  </li>
                  <li className="pb-2" key={11}>
                    Comprovativo de Pensões de que os elementos do agregado
                    familiar beneficiam (ex.: velhice, invalidez, sobrevivência,
                    aposentação, reforma, rendas temporárias ou vitalícias,
                    prestações a cargo de companhias de seguros ou fundos de
                    pensões, pensões de alimentos);
                  </li>
                  <li className="pb-2" key={12}>
                    Comprovativo de Prestações Sociais de que os elementos do
                    agregado familiar beneficiam (ex.: rendimento social de
                    inserção, subsídio de desemprego, subsídio de doença,
                    abonos);
                  </li>
                  <li className="pb-2" key={13}>
                    Comprovativo de Bolsas de Estudo e Formação Profissional de
                    que os elementos do agregado familiar beneficiam;
                  </li>
                  <li className="pb-2" key={14}>
                    Fotocópia do comprovativo de pagamento de empréstimo
                    bancário sobre a habitação ou de renda de casa;
                  </li>
                  <li className="pb-2" key={15}>
                    Fotocópia do comprovativo de despesas com saúde e medicação
                    de uso continuado em caso de doença crónica;
                  </li>
                  <li className="pb-2" key={16}>
                    Comprovativo de despesas com transportes (transportes
                    públicos);
                  </li>
                  <li className="pb-2" key={17}>
                    Fotocópia do documento de Regulação das Responsabilidades
                    Parentais, bem como da atribuição da Pensão de Alimentos (se
                    aplicável).
                  </li>
                </ul>
              </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="group cursor-pointer uppercase" size="lg">
              Renovação da inscrição
              <svg
                className="inline-block h-6 w-6 opacity-50 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100"
                fill="none"
                height="1em"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18 8L22 12L18 16" />
                <path d="M2 12H22" />
              </svg>
            </Button>
          </DialogTrigger>
          <DialogContent className="xl:max-w-[1200px]">
            <DialogHeader>
              <DialogTitle className="text-primary mx-10 sm:mx-0">
                RENOVAÇÃO DA INSCRIÇÃO NO CATL
              </DialogTitle>
              <DialogDescription>
                Documentos necessários para realização da renovação da
                inscrição:
              </DialogDescription>
            </DialogHeader>
            <ScrollArea className="h-[70vh]">
              <div>
                <p className="py-4 text-sm">
                  Vimos por este meio informar V. Ex.a, que se encontram abertas
                  as inscrições para o Centro de Atividades de Tempos Livres,
                  para o ano letivo 2024/2025, com a prestação de serviços ao
                  nível do fornecimento de almoço, realização de atividades de
                  animação/ocupação dos tempos livres e transporte. Caso esteja
                  interessado em renovar a inscrição do seu Educando, deverá
                  entregar, até ao dia 30 de Junho, os seguintes documentos:
                </p>
                <ul className="list-inside list-decimal text-sm">
                  <li className="pb-2" key={1}>
                    Fotocópia do Boletim de Vacinas atualizado da criança;
                  </li>
                  <li className="pb-2" key={2}>
                    Fotocópia da última Declaração de IRS e respetiva Nota de
                    Liquidação, referente ao ano anterior;
                  </li>
                  <li className="pb-2" key={3}>
                    Fotocópia do último recibo de vencimento do Encarregado de
                    Educação e do cônjuge;
                  </li>
                  <li className="pb-2" key={4}>
                    Comprovativo de ausência de rendimentos, quando se verificar
                    uma situação de desemprego;
                  </li>
                  <li className="pb-2" key={5}>
                    Comprovativo de Pensões de que os elementos do agregado
                    familiar beneficiam (ex.: velhice, invalidez, sobrevivência,
                    aposentação, reforma, rendas temporárias ou vitalícias,
                    prestações a cargo de companhias de seguros ou fundos de
                    pensões, pensões de alimentos);
                  </li>
                  <li className="pb-2" key={6}>
                    Comprovativo de Prestações Sociais de que os elementos do
                    agregado familiar beneficiam (ex.: rendimento social de
                    inserção, subsídio de desemprego, subsídio de doença,
                    abonos);
                  </li>
                  <li className="pb-2" key={7}>
                    Comprovativo de Bolsas de Estudo e Formação Profissional de
                    que os elementos do agregado familiar beneficiam;
                  </li>
                  <li className="pb-2" key={8}>
                    Fotocópia do comprovativo de pagamento de empréstimo
                    bancário sobre a habitação ou de renda de casa;
                  </li>
                  <li className="pb-2" key={9}>
                    Fotocópia do comprovativo de despesas com saúde e medicação
                    de uso continuado em caso de doença crónica;
                  </li>
                  <li className="pb-2" key={10}>
                    Comprovativo de despesas com transportes (transportes
                    públicos);
                  </li>
                  <li className="pb-2" key={11}>
                    Fotocópia do documento de Regulação das Responsabilidades
                    Parentais, bem como da atribuição da Pensão de Alimentos (se
                    aplicável).
                  </li>
                </ul>
                <p className="mt-4 text-sm font-semibold uppercase">Notas:</p>
                <ul className="list-inside list-disc text-sm">
                  <li className="pb-2" key={1}>
                    Em caso de alteração ao nível dos documentos de
                    identificação da criança e/ou Encarregado de Educação é
                    necessário entregar as respetivas fotocópias.
                  </li>
                  <li className="pb-2" key={2}>
                    Em caso de alteração da situação clínica da criança é
                    necessário entregar uma declaração médica comprovativa.
                  </li>
                </ul>
              </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </div>
    </SectionWrapper>
  )
}
