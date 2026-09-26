import AnimateLeft from '@/components/animations/AnimateLeft'
import AnimateRight from '@/components/animations/AnimateRight'
import ArrowLink from '@/components/arrow-link/ArrowLink'
import SectionWrapper from '@/components/section-wrapper/SectionWrapper'

export default function Callout() {
  return (
    <SectionWrapper divClassName="px-0" sectionClassName="pt-0">
      <div className="dark:bg-blacksection bg-primary flex min-h-40 flex-wrap justify-center gap-8 px-8 py-8 opacity-80 md:flex-nowrap md:items-center md:justify-between md:gap-0 md:py-0 dark:opacity-100">
        <AnimateLeft
          className="md:w-[70%] lg:w-1/2"
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <h2 className="font-display mb-4 w-11/12 text-2xl font-bold tracking-wide text-white uppercase">
            Ajude-nos a crescer
          </h2>
          <p className="text-sm text-slate-200">
            Os sócios são fundamentais para a dinâmica e crescimento da nossa
            instituição. Agradecemos toda a contribuição, participação,
            colaboração e apoio.
          </p>
        </AnimateLeft>
        <AnimateRight
          className="lg:w-[45%]"
          transition={{ delay: 0.15, duration: 0.4 }}
        >
          <div className="flex justify-end">
            <ArrowLink
              href="/documentos"
              text="Tornar-se Sócio"
              variant="outline"
            />
          </div>
        </AnimateRight>
      </div>
    </SectionWrapper>
  )
}
