import { describe, expect, it } from 'vitest'

import { contactSchema } from '@/lib/contact-schema'

describe('contactSchema', () => {
  it('accepts a valid contact payload', () => {
    const result = contactSchema.safeParse({
      email: 'ana@example.com',
      message: 'Gostaria de saber mais sobre a creche.',
      subject: 'Informações',
    })

    expect(result.success).toBe(true)
  })

  it('rejects an invalid email address', () => {
    const result = contactSchema.safeParse({
      email: 'ana',
      message: 'Mensagem',
      subject: 'Assunto',
    })

    expect(result.success).toBe(false)
    expect(result.error?.flatten().fieldErrors.email).toEqual([
      'Email inválido',
    ])
  })

  it('reports every missing field', () => {
    const result = contactSchema.safeParse({})

    expect(result.success).toBe(false)
    expect(result.error?.flatten().fieldErrors).toEqual({
      email: ['Email inválido'],
      message: ['Mensagem inválida'],
      subject: ['Assunto inválido'],
    })
  })
})
