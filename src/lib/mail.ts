'use server'

import { EmailParams, MailerSend, Recipient, Sender } from 'mailersend'
import { z } from 'zod'

const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY!,
})

const schema = z.object({
  email: z.string().email(),
  message: z.string({
    invalid_type_error: 'Messagem inválida',
  }),
  subject: z.string({
    invalid_type_error: 'Assunto inválido',
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

  const sentFrom = new Sender(
    process.env.MAILERSEND_FROM!,
    'Mensagem a partir do site www.csfcasalcomba.com'
  )

  const replyTo = new Sender(validatedFields.data.email)

  const recipients = [new Recipient(process.env.MAILERSEND_TO!)]

  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setReplyTo(replyTo)
    .setSubject(
      `${validatedFields.data.email} - ${validatedFields.data.subject}`
    )
    .setText(validatedFields.data.message)

  await mailerSend.email.send(emailParams)
}
