import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { sendEmail } from '@/lib/mail'

const { checkRateLimitMock, headersMock, sendMock } = vi.hoisted(() => ({
  checkRateLimitMock: vi.fn(),
  headersMock: vi.fn(),
  sendMock: vi.fn(),
}))

vi.mock('next/headers', () => ({
  headers: headersMock,
}))

vi.mock('@/helper/rate-limiter', () => ({
  checkRateLimit: checkRateLimitMock,
}))

vi.mock('resend', () => ({
  Resend: class {
    emails = { send: sendMock }
  },
}))

vi.mock('@/components/mail-template/MailTemplate', () => ({
  default: () => null,
}))

function createFormData(overrides: Record<string, string> = {}) {
  const formData = new FormData()

  formData.set('email', 'ana@example.com')
  formData.set('message', 'Gostaria de saber mais sobre a creche.')
  formData.set('subject', 'Informações')

  for (const [key, value] of Object.entries(overrides)) {
    formData.set(key, value)
  }

  return formData
}

describe('sendEmail', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.stubEnv('RESEND_API_KEY', 'test-key')
    vi.stubEnv('RESEND_FROM', 'Site <site@example.com>')
    vi.stubEnv('RESEND_TO', 'geral@example.com')

    checkRateLimitMock.mockReturnValue(false)
    headersMock.mockResolvedValue(
      new Headers({ 'x-forwarded-for': '203.0.113.10' })
    )
    sendMock.mockResolvedValue({ data: { id: 'email-1' }, error: null })
  })

  afterEach(() => {
    vi.unstubAllEnvs()
  })

  it('sends a validated email', async () => {
    const result = await sendEmail(createFormData())

    expect(sendMock).toHaveBeenCalledWith(
      expect.objectContaining({
        from: 'Site <site@example.com>',
        subject: 'Informações',
        to: ['geral@example.com'],
      })
    )
    expect(result).toEqual({ data: { id: 'email-1' }, error: null })
  })

  it('silently rejects submissions that fill the honeypot', async () => {
    const result = await sendEmail(
      createFormData({ website: 'https://spam.example' })
    )

    expect(result).toEqual({ data: null, error: null })
    expect(headersMock).not.toHaveBeenCalled()
    expect(sendMock).not.toHaveBeenCalled()
  })

  it('returns field errors for invalid input', async () => {
    const result = await sendEmail(createFormData({ email: 'not-an-email' }))

    expect(result).toEqual({ errors: { email: ['Email inválido'] } })
    expect(sendMock).not.toHaveBeenCalled()
  })

  it('returns a rate limit error without sending', async () => {
    checkRateLimitMock.mockReturnValue(true)

    const result = await sendEmail(createFormData())

    expect(result).toEqual({
      error: {
        message:
          'Demasiados pedidos. Aguarde um momento antes de tentar novamente.',
        name: 'rate_limit',
      },
    })
    expect(sendMock).not.toHaveBeenCalled()
  })
})
