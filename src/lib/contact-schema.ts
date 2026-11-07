import { z } from 'zod'

export const contactSchema = z.object({
  email: z.email({
    error: 'Email inválido',
  }),
  message: z.string({
    error: 'Mensagem inválida',
  }),
  subject: z.string({
    error: 'Assunto inválido',
  }),
})
