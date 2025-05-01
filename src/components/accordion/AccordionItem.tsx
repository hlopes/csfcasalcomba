import { cn } from '@/lib/utils'
import { Folder } from '@/types/Folder'

type AccordionItemProps = {
  activeSection: number
  folder: Folder
  handleSectionToggle: (id: number) => void
}
export default function AccordionItem({
  activeSection,
  folder,
  handleSectionToggle,
}: AccordionItemProps) {
  const { content, id, title } = folder

  return (
    <div className="border-stroke flex flex-col border-b last-of-type:border-none">
      <button
        className="text-primary flex cursor-pointer items-center justify-between p-6 font-medium uppercase lg:px-10 lg:py-8"
        onClick={() => {
          handleSectionToggle(id)
        }}
      >
        {title}
        {activeSection === id ? (
          <svg
            fill="none"
            height="4"
            viewBox="0 0 18 4"
            width="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.1666 0.833374H10.1666H7.83331H0.833313V3.16671H7.83331H10.1666H17.1666V0.833374Z"
              fill="currentColor"
            />
          </svg>
        ) : (
          <svg
            fill="none"
            height="18"
            viewBox="0 0 18 18"
            width="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.83331 7.83337V0.833374H10.1666V7.83337H17.1666V10.1667H10.1666V17.1667H7.83331V10.1667H0.833313V7.83337H7.83331Z"
              fill="currentColor"
            />
          </svg>
        )}
      </button>
      <div
        className={cn(
          'border-stroke border-t py-6 sm:px-6 lg:px-10 lg:py-8',
          activeSection === id ? 'block' : 'hidden'
        )}
      >
        {content}
      </div>
    </div>
  )
}
