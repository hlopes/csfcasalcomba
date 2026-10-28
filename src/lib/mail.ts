'use server'

import { headers } from 'next/headers'
import { Resend } from 'resend'
import { z } from 'zod'

import MailTemplate from '@/components/mail-template/MailTemplate'
import { checkRateLimit } from '@/helper/rate-limiter'

const schema = z.object({
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

// ---------------------------------------------------------------------------
// Server action
// ---------------------------------------------------------------------------
export const sendEmail = async (formData: FormData) => {
  // Honeypot check — the hidden "website" field must be empty
  const honeypot = formData.get('website')

  if (honeypot) {
    // Silently reject: looks like success to the bot
    return { data: null, error: null }
  }

  // Rate limiting by client IP
  const headersList = await headers()
  const ip =
    headersList.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    headersList.get('x-real-ip') ??
    'unknown'

  if (checkRateLimit(ip)) {
    return {
      error: {
        message:
          'Demasiados pedidos. Aguarde um momento antes de tentar novamente.',
        name: 'rate_limit',
      },
    }
  }

  const validatedFields = schema.safeParse({
    email: formData.get('email'),
    message: formData.get('message'),
    subject: formData.get('subject'),
  })

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  const from =
    process.env.RESEND_FROM ??
    'www.csfcasalcomba.com <csfcasalcomba@resend.dev>'

  const { data, error } = await resend.emails.send({
    from,
    react: MailTemplate({
      content: validatedFields.data.message,
      from: validatedFields.data.email,
    }),
    subject: validatedFields.data.subject,
    to: (process.env.RESEND_TO ?? '')
      .split(',')
      .map((email) => email.trim())
      .filter(Boolean),
  })

  return { data, error }
}
