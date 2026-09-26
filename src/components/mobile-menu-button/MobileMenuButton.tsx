import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type MobileMenuButtonProps = {
  navigationOpen: boolean
  toggleMenu: () => void
}

export default function MobileMenuButton({
  navigationOpen,
  toggleMenu,
}: MobileMenuButtonProps) {
  return (
    <Button
      aria-expanded={navigationOpen}
      aria-label={navigationOpen ? 'Fechar menu' : 'Abrir menu'}
      className="block min-h-11 min-w-11 xl:hidden"
      onClick={() => toggleMenu()}
      variant="link"
    >
      <span className="relative block h-5.5 w-5.5 cursor-pointer">
        <span className="absolute right-0 block h-full w-full">
          <span
            className={cn(
              'bg-primary relative top-0 left-0 my-1 block h-0.5 delay-0 duration-200 ease-in-out',
              !navigationOpen ? 'w-full! delay-300' : 'w-0'
            )}
          ></span>
          <span
            className={cn(
              'bg-primary relative top-0 left-0 my-1 block h-0.5 delay-150 duration-200 ease-in-out',
              !navigationOpen ? 'w-full! delay-400' : 'w-0'
            )}
          ></span>
          <span
            className={cn(
              'bg-primary relative top-0 left-0 my-1 block h-0.5 delay-200 duration-200 ease-in-out',
              !navigationOpen ? 'w-full! delay-500' : 'w-0'
            )}
          ></span>
        </span>
        <span className="du-block absolute right-0 h-full w-full rotate-45">
          <span
            className={cn(
              'bg-primary absolute top-0 left-2.5 block h-full w-0.5 delay-300 duration-200 ease-in-out',
              !navigationOpen ? 'h-0! delay-0' : 'h-full'
            )}
          ></span>
          <span
            className={cn(
              'bg-primary absolute top-2.5 left-0 block h-0.5 w-full delay-400 duration-200 ease-in-out',
              !navigationOpen ? 'h-0! delay-200' : 'h-0.5'
            )}
          ></span>
        </span>
      </span>
    </Button>
  )
}
