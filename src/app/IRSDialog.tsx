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
import { Separator } from '@/components/ui/separator'

export default function IRSDialog() {
  return (
    <SectionWrapper sectionClassName="p-0">
      <div className="flex flex-col justify-between gap-4 py-8 md:flex-row">
        <Dialog defaultOpen>
          <DialogContent className="xl:[&_svg]:stroke-primary h-auto max-h-[90dvh] rounded-xl p-0 xl:max-h-[760px] xl:max-w-[1200px] [&_svg]:stroke-white">
            <DialogHeader className="sr-only">
              <DialogTitle>Consigne 1% do seu IRS</DialogTitle>
              <DialogDescription>
                Seja solidário e consigne 1% do seu IRS ao Centro Social da
                Freguesia de Casal Comba. NIF: 503 247 367.
              </DialogDescription>
            </DialogHeader>
            <ScrollArea className="h-full">
              <div className="flex w-full flex-col overflow-hidden rounded-xl xl:flex-row">
                <div className="flex w-full flex-col xl:w-3/4">
                  <div className="bg-primary flex flex-col items-center gap-4 px-10 py-9 text-center">
                    <h1 className="fade-in text-2xl leading-snug font-bold text-white delay-1 md:text-3xl">
                      Seja solidário e consigne{' '}
                      <span className="font-bold">1%</span> do seu IRS
                      <br />
                      <span className="text-white">
                        Centro Social da Freguesia de Casal Comba
                      </span>
                    </h1>
                    <div className="fade-in border-primary bg-background inline-block rounded border-2 px-10 py-2 delay-2">
                      <span className="text-primary text-3xl font-extrabold tracking-widest md:text-4xl">
                        NIF: 503 247 367
                      </span>
                    </div>
                    <p className="fade-in max-w-lg text-sm leading-relaxed font-medium text-white delay-3 md:text-base">
                      Este pequeno gesto não terá qualquer custo para si, mas
                      fará toda a diferença para a nossa Instituição.
                    </p>
                  </div>
                  <div className="relative min-h-70 flex-1">
                    <div className="absolute inset-0 z-10 bg-linear-to-b from-black/20 to-black/50"></div>
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: "url('/images/home/facade.jpg')",
                      }}
                    ></div>
                    <div className="absolute inset-0 z-20 flex items-center justify-center">
                      <p className="fade-in text-center text-xl font-bold tracking-widest text-white uppercase drop-shadow-lg delay-4 md:text-3xl">
                        Uma Instituição ao
                        <br />
                        Serviço da Comunidade
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-background flex w-full flex-col items-center justify-evenly gap-8 px-6 py-8 xl:w-1/4">
                  <div className="fade-in hidden h-full flex-col items-center gap-3 delay-1 xl:flex">
                    <img
                      src="/images/logo/logo.png"
                      alt="Logo Centro Social da Freguesia de Casal Comba"
                      className="h-auto w-full object-contain"
                    />
                  </div>
                  <Separator className="hidden xl:block" />
                  <p className="fade-in text-primary py-11 text-center text-xl leading-relaxed font-semibold delay-5">
                    No quadro 11 do Modelo 3 da declaração de IRS, selecione a
                    opção para consignar o IRS
                  </p>
                </div>
              </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </div>
    </SectionWrapper>
  )
}
