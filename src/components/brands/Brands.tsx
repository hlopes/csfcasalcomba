import BrandItem from '@/components/brands/BrandItem'
import SectionWrapper from '@/components/section-wrapper/SectionWrapper'
import { Brand } from '@/types/Brand'

type BrandsProps = {
  data: Brand[]
}

export default function Brands({ data }: BrandsProps) {
  return (
    <SectionWrapper
      divClassName="border-y-stroke bg-alabaster dark:bg-blacksection border border-x-0 p-12 md:mt-20 xl:mt-26"
      sectionClassName="p-0"
    >
      <div className="grid grid-cols-2 items-center justify-center gap-8 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 lg:gap-12.5 xl:gap-28">
        {data.map((brand) => (
          <BrandItem {...brand} key={brand.id} />
        ))}
      </div>
    </SectionWrapper>
  )
}
