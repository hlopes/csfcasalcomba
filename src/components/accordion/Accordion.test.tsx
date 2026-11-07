import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { ReactNode } from 'react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import Accordion from '@/components/accordion/Accordion'
import type { Folder } from '@/types/Folder'

const { replaceMock } = vi.hoisted(() => ({
  replaceMock: vi.fn(),
}))

vi.mock('next/navigation', () => ({
  usePathname: () => '/documentos',
  useRouter: () => ({ replace: replaceMock }),
  useSearchParams: () => new URLSearchParams(),
}))

vi.mock('@/components/animations/Animate', () => ({
  default: ({ children }: { children: ReactNode }) => <>{children}</>,
}))

const data: Folder[] = [
  {
    content: <p>Conteúdo dos documentos gerais</p>,
    id: 1,
    title: 'Gerais',
  },
  {
    content: <p>Conteúdo dos relatórios</p>,
    id: 2,
    title: 'Relatórios',
  },
]

describe('Accordion', () => {
  beforeEach(() => {
    replaceMock.mockClear()
  })

  it('opens the first section by default', () => {
    render(<Accordion data={data} />)

    expect(screen.getByRole('button', { name: 'Gerais' })).toHaveAttribute(
      'aria-expanded',
      'true'
    )
    expect(screen.getByText('Conteúdo dos documentos gerais')).toBeVisible()
    expect(screen.getByText('Conteúdo dos relatórios')).not.toBeVisible()
  })

  it('switches the open section and updates the URL', async () => {
    const user = userEvent.setup()
    render(<Accordion data={data} />)

    await user.click(screen.getByRole('button', { name: 'Relatórios' }))

    expect(screen.getByRole('button', { name: 'Relatórios' })).toHaveAttribute(
      'aria-expanded',
      'true'
    )
    expect(screen.getByRole('button', { name: 'Gerais' })).toHaveAttribute(
      'aria-expanded',
      'false'
    )
    expect(screen.getByText('Conteúdo dos relatórios')).toBeVisible()
    expect(screen.getByText('Conteúdo dos documentos gerais')).not.toBeVisible()
    expect(replaceMock).toHaveBeenCalledWith('/documentos?section=2', {
      scroll: false,
    })
  })

  it('closes an open section when its header is clicked again', async () => {
    const user = userEvent.setup()
    render(<Accordion data={data} />)

    await user.click(screen.getByRole('button', { name: 'Gerais' }))

    expect(screen.getByRole('button', { name: 'Gerais' })).toHaveAttribute(
      'aria-expanded',
      'false'
    )
    expect(screen.getByText('Conteúdo dos documentos gerais')).not.toBeVisible()
  })
})
