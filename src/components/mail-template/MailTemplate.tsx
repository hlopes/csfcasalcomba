import { Html } from '@react-email/html'

type MailTemplateProps = {
  content: string
}

const MailTemplate = ({ content }: MailTemplateProps) => {
  return (
    <Html lang="en">
      <b>👇Mensagem a partir do site www.csfcasalcomba.com👇</b>
      <pre>{content}</pre>
    </Html>
  )
}

export default MailTemplate
