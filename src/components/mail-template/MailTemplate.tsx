import { Html } from '@react-email/html'
import { Img } from '@react-email/img'

type MailTemplateProps = {
  content: string
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : ''

const MailTemplate = ({ content }: MailTemplateProps) => {
  return (
    <Html lang="en">
      <Img
        alt="Centro Social da Freguesia de Casal Comba"
        height="160"
        src={`${baseUrl}/_next/image?url=%2Fimages%2Flogo%2Flogo.png&w=256&q=75`}
        width="448"
      />
      <b>Mensagem a partir do site www.csfcasalcomba.com</b>
      <pre>{content}</pre>
    </Html>
  )
}

export default MailTemplate
