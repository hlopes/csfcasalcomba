'use client'

import { toast } from 'sonner'

import AnimateTop from '@/components/animations/AnimateTop'
import { Button } from '@/components/ui/button'
import { sendEmail } from '@/lib/mail'

export default function EmailForm() {
  async function send(formData: FormData) {
    const result = await sendEmail(formData)

    if (result?.errors) {
      toast.error('Uh oh! Ocorreu um erro inesperado.')

      return
    }

    toast.success('Email enviado con sucesso.')
  }

  return (
    <AnimateTop transition={{ delay: 0.3, duration: 0.5 }}>
      <div className="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
        <form action={send} className="space-y-8">
          <div>
            <label className="mb-2 block text-sm font-medium" htmlFor="email">
              Email
            </label>
            <input
              className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-cyan-900 dark:text-white dark:placeholder-gray-400"
              id="email"
              name="email"
              placeholder="name@mail.com"
              required
              type="email"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium" htmlFor="subject">
              Assunto
            </label>
            <input
              className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-cyan-900 dark:text-white dark:placeholder-gray-400"
              id="subject"
              name="subject"
              placeholder="Em que podemos ajudar"
              required
              type="text"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-2 block text-sm font-medium" htmlFor="message">
              Mensagem
            </label>
            <textarea
              className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-cyan-900 dark:text-white dark:placeholder-gray-400"
              id="message"
              name="message"
              placeholder="Deixe o seu comentário..."
              required
              rows={6}
            ></textarea>
          </div>
          <Button className="float-end" size="lg" type="submit">
            Enviar
          </Button>
        </form>
      </div>
    </AnimateTop>
  )
}
