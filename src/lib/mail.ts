'use server'

import { Resend } from 'resend'
import { z } from 'zod'

import MailTemplate from '@/components/mail-template/MailTemplate'

const schema = z.object({
  email: z.email({
    error: 'Email inválido',
  }),
  message: z.string({
    error: 'Messagem inválida',
  }),
  subject: z.string({
    error: 'Assunto inválido',
  }),
})

export const sendEmail = async (formData: FormData) => {
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
  //

  const { data, error } = await resend.emails.send({
    from: 'www.csfcasalcomba.com <csfcasalcomba@resend.dev>',
    react: MailTemplate({
      content: validatedFields.data.message,
      from: validatedFields.data.email,
    }),
    subject: validatedFields.data.subject,
    to: [`${process.env.RESEND_TO}`],
  })

  return { data, error }
}
