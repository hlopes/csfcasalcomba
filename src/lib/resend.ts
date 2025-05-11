'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

type MailParameters = {
  from: string
  html: string
  subject: string
}

export const sendEmail = async ({ from, html, subject }: MailParameters) => {
  const { data, error } = await resend.emails.send({
    from,
    html,
    subject,
    to: 'hugo.rodrigues.lopes@gmail.com',
  })

  if (error) {
    console.error('Error while sending email ', error)

    return
  }

  console.error('Sent email with data: ', data)
}
