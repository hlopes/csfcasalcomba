'use client'

import { toast } from 'sonner'

import AnimateTop from '@/components/animations/AnimateTop'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { sendEmail } from '@/lib/mail'

export default function EmailForm() {
  async function send(formData: FormData) {
    const result = await sendEmail(formData)

    if (result?.error || result?.errors) {
      console.error(result?.error)
      toast.error('Uh oh! Ocorreu um erro inesperado.')

      return
    }

    toast.success('Email enviado con sucesso.')
  }

  return (
    <AnimateTop transition={{ delay: 0.3, duration: 0.5 }}>
      <div className="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
        <form action={send} className="space-y-8">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              placeholder="name@mail.com"
              required
              type="email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Assunto</Label>
            <Input
              id="subject"
              name="subject"
              placeholder="Em que podemos ajudar"
              required
              type="text"
            />
          </div>
          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="message">Mensagem</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Deixe o seu comentário ou questão"
              required
              rows={6}
            />
          </div>
          <Button className="float-end" size="lg" type="submit">
            Enviar
          </Button>
        </form>
      </div>
    </AnimateTop>
  )
}
