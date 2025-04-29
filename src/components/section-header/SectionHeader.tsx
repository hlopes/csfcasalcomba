import AnimateTop from '@/components/animations/AnimateTop'

type SectionHeaderProps = {
  description: string
  title: string
}

export default function SectionHeader({
  description,
  title,
}: SectionHeaderProps) {
  return (
    <>
      <AnimateTop transition={{ delay: 0.1, duration: 0.3 }}>
        <div className="mx-auto max-w-120">
          <h2 className="text-primary mx-auto mb-4 text-2xl uppercase">
            {title}
          </h2>
          <p className="mx-auto">{description}</p>
        </div>
      </AnimateTop>
    </>
  )
}
