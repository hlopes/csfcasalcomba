import Animate from '@/components/animations/Animate'

type SectionHeaderProps = {
  description: string
  title: string
}

export default function SectionHeader({
  description,
  title,
}: SectionHeaderProps) {
  return (
    <Animate delay={0.1} duration={0.3}>
      <div className="mx-auto max-w-120 text-center">
        {title ? (
          <h2 className="text-primary font-display mx-auto mb-4 text-2xl tracking-wide uppercase">
            {title}
          </h2>
        ) : null}
        <p className="mx-auto">{description}</p>
      </div>
    </Animate>
  )
}
