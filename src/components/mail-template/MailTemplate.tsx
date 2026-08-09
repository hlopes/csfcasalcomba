import type { CSSProperties } from 'react'

import { Container, Heading, Hr, Html, Section, Text } from 'react-email'

type MailTemplateProps = {
  content: string
  from: string
}

const MailTemplate = ({ content, from }: MailTemplateProps) => {
  return (
    <Html lang="pt">
      <Container style={container}>
        <Section style={track.container}>
          <Text style={global.paragraphWithBold}>
            A partir do site www.csfcasalcomba.com
          </Text>
          <Heading style={global.heading}>
            Mensagem de: <a href={`mailto:${from}`}>{from}</a>
          </Heading>
        </Section>
        <Hr style={global.hr} />
        <Section style={message}>
          <Text style={{ ...global.text, marginTop: 24 }}>{content}</Text>
        </Section>
      </Container>
    </Html>
  )
}

export default MailTemplate

const paddingX = {
  paddingLeft: '40px',
  paddingRight: '40px',
}

const paddingY = {
  paddingBottom: '22px',
  paddingTop: '22px',
}

const paragraph = {
  lineHeight: '2',
  margin: '0',
}

const global = {
  button: {
    border: '1px solid #929292',
    color: '#000',
    display: 'block',
    fontSize: '16px',
    fontWeight: 500,
    padding: '10px 0px',
    textAlign: 'center',
    textDecoration: 'none',
    width: '220px',
  } as CSSProperties,
  defaultPadding: {
    ...paddingX,
    ...paddingY,
  },
  heading: {
    fontSize: '32px',
    fontWeight: '700',
    letterSpacing: '-1px',
    lineHeight: '1.3',
    textAlign: 'center',
  } as CSSProperties,
  hr: {
    borderColor: '#E5E5E5',
    margin: '0',
  },
  paddingX,
  paddingY,
  paragraphWithBold: { ...paragraph, fontWeight: 'bold' },
  text: {
    ...paragraph,
    color: '#747474',
    fontWeight: '500',
  },
}

const container = {
  border: '1px solid #E5E5E5',
  margin: '10px auto',
  maxWidth: '100%',
  width: '600px',
}

const track = {
  container: {
    backgroundColor: '#F7F7F7',
    padding: '22px 40px',
  },
  number: {
    color: '#6F6F6F',
    fontWeight: 500,
    lineHeight: '1.4',
    margin: '12px 0 0 0',
  },
}

const message = {
  padding: '40px 74px',
  textAlign: 'center',
} as CSSProperties
