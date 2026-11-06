import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { usePathname } from 'next/navigation'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import Header from '@/components/header/Header'

const { setThemeMock } = vi.hoisted(() => ({
  setThemeMock: vi.fn(),
}))

vi.mock('next/navigation', () => ({
  usePathname: vi.fn(() => '/documentos'),
}))

vi.mock('next-themes', () => ({
  useTheme: () => ({ setTheme: setThemeMock, theme: 'light' }),
}))

describe('Header', () => {
  beforeEach(() => {
    setThemeMock.mockClear()
    vi.mocked(usePathname).mockReturnValue('/documentos')
  })

  it('renders the skip link, logo and primary navigation', () => {
    render(<Header />)

    expect(
      screen.getByRole('link', { name: 'Saltar para o conteúdo principal' })
    ).toHaveAttribute('href', '#main-content')
    expect(
      screen.getByAltText(
        'Logótipo do Centro Social da Freguesia de Casal Comba'
      )
    ).toBeInTheDocument()
    expect(
      screen.getByRole('navigation', { name: 'Navegação principal' })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Documentos' })).toHaveAttribute(
      'aria-current',
      'page'
    )
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Abrir menu' }))

    const closeButton = screen.getByRole('button', { name: 'Fechar menu' })
    expect(closeButton).toHaveAttribute('aria-expanded', 'true')

    await user.click(closeButton)

    expect(screen.getByRole('button', { name: 'Abrir menu' })).toHaveAttribute(
      'aria-expanded',
      'false'
    )
  })

  it('toggles the submenu of a menu entry', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const submenuButton = screen.getByRole('button', {
      name: 'Respostas Sociais',
    })

    expect(submenuButton).toHaveAttribute('aria-expanded', 'false')

    await user.click(submenuButton)

    expect(submenuButton).toHaveAttribute('aria-expanded', 'true')
    expect(
      screen.getByRole('link', { name: 'Área Sénior' })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Infância' })).toBeInTheDocument()
  })

  it('switches the theme', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(
      screen.getByRole('button', { name: 'Mudar para tema escuro' })
    )

    expect(setThemeMock).toHaveBeenCalledWith('dark')
  })
})
