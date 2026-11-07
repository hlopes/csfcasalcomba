import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { ReactNode } from 'react'
import { toast } from 'sonner'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import EmailForm from '@/app/contato/email-form'
import { sendEmail } from '@/lib/mail'

vi.mock('@/lib/mail', () => ({
  sendEmail: vi.fn(),
}))

vi.mock('@/components/animations/Animate', () => ({
  default: ({ children }: { children: ReactNode }) => <>{children}</>,
}))

vi.mock('sonner', () => ({
  toast: { error: vi.fn(), success: vi.fn() },
}))

const sendEmailMock = vi.mocked(sendEmail)

async function fillAndSubmit() {
  const user = userEvent.setup()

  render(<EmailForm />)

  await user.type(screen.getByLabelText(/Email/), 'ana@example.com')
  await user.type(screen.getByLabelText(/Assunto/), 'Informações')
  await user.type(screen.getByLabelText(/Mensagem/), 'Gostaria de saber mais.')
  await user.click(screen.getByRole('button', { name: 'Enviar' }))

  return user
}

describe('EmailForm', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.spyOn(console, 'error').mockImplementation(() => {})
  })

  it('sends the form and confirms success', async () => {
    sendEmailMock.mockResolvedValue({ data: null, error: null })

    await fillAndSubmit()

    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith('Email enviado com sucesso.')
    })
    expect(sendEmailMock).toHaveBeenCalledOnce()
    expect(screen.getByLabelText(/Email/)).toHaveValue('')
  })

  it('shows field errors returned by the server action', async () => {
    sendEmailMock.mockResolvedValue({
      errors: { email: ['Email inválido'] },
    })

    await fillAndSubmit()

    const summary = await screen.findByText(
      /Não foi possível enviar o formulário/
    )

    expect(summary.closest('[role="alert"]')).toHaveFocus()
    expect(screen.getByText('Email inválido')).toBeInTheDocument()
    expect(screen.getByLabelText(/Email/)).toHaveAttribute(
      'aria-invalid',
      'true'
    )
    expect(screen.getByRole('button', { name: 'Enviar' })).toBeEnabled()
  })

  it('shows a rate limit message in a toast', async () => {
    sendEmailMock.mockResolvedValue({
      error: {
        message:
          'Demasiados pedidos. Aguarde um momento antes de tentar novamente.',
        name: 'rate_limit',
      },
    })

    await fillAndSubmit()

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith(
        'Demasiados pedidos. Aguarde um momento antes de tentar novamente.'
      )
    })
  })
})
