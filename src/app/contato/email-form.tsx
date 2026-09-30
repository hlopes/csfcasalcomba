'use client'

import { useRef, useState } from 'react'
import { toast } from 'sonner'

import Animate from '@/components/animations/Animate'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { sendEmail } from '@/lib/mail'

type FieldErrors = {
  email?: string[]
  message?: string[]
  subject?: string[]
}

export default function EmailForm() {
  const [errors, setErrors] = useState<FieldErrors | null>(null)
  const [isSending, setIsSending] = useState(false)
  const summaryRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  async function send(formData: FormData) {
    setErrors(null)
    setIsSending(true)

    const result = await sendEmail(formData)

    setIsSending(false)

    if (result?.error || result?.errors) {
      console.error(result?.error)
      if (result?.errors) {
        setErrors(result.errors as FieldErrors)
      }
      toast.error('Uh oh! Ocorreu um erro inesperado.')
      summaryRef.current?.focus()

      return
    }

    setErrors(null)
    formRef.current?.reset()
    toast.success('Email enviado com sucesso.')
  }

  const emailError = errors?.email?.[0]
  const subjectError = errors?.subject?.[0]
  const messageError = errors?.message?.[0]
  const hasErrors = Boolean(emailError ?? subjectError ?? messageError)

  return (
    <Animate delay={0.3}>
      <div className="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
        {hasErrors && (
          <div
            aria-live="assertive"
            className="border-destructive mb-8 rounded-md border p-4"
            ref={summaryRef}
            role="alert"
            tabIndex={-1}
          >
            <p className="font-semibold">
              Não foi possível enviar o formulário. Verifique:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
              {emailError && (
                <li>
                  <a className="underline" href="#email">
                    Email: {emailError}
                  </a>
                </li>
              )}
              {subjectError && (
                <li>
                  <a className="underline" href="#subject">
                    Assunto: {subjectError}
                  </a>
                </li>
              )}
              {messageError && (
                <li>
                  <a className="underline" href="#message">
                    Mensagem: {messageError}
                  </a>
                </li>
              )}
            </ul>
          </div>
        )}
        <form action={send} className="space-y-8" ref={formRef}>
          <div className="space-y-2">
            <Label htmlFor="email">
              Email <span aria-hidden="true">*</span>
            </Label>
            <Input
              aria-describedby={
                emailError ? 'email-error email-help' : 'email-help'
              }
              aria-invalid={Boolean(emailError)}
              autoComplete="email"
              id="email"
              name="email"
              placeholder="name@mail.com"
              required
              type="email"
            />
            <p className="text-muted-foreground text-sm" id="email-help">
              Usamos o seu email apenas para responder.
            </p>
            {emailError && (
              <p
                className="text-destructive text-sm"
                id="email-error"
                role="alert"
              >
                {emailError}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">
              Assunto <span aria-hidden="true">*</span>
            </Label>
            <Input
              aria-describedby={subjectError ? 'subject-error' : undefined}
              aria-invalid={Boolean(subjectError)}
              autoComplete="off"
              id="subject"
              name="subject"
              placeholder="Em que podemos ajudar"
              required
              type="text"
            />
            {subjectError && (
              <p
                className="text-destructive text-sm"
                id="subject-error"
                role="alert"
              >
                {subjectError}
              </p>
            )}
          </div>
          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="message">
              Mensagem <span aria-hidden="true">*</span>
            </Label>
            <Textarea
              aria-describedby={messageError ? 'message-error' : undefined}
              aria-invalid={Boolean(messageError)}
              id="message"
              name="message"
              placeholder="Deixe o seu comentário ou questão"
              required
              rows={6}
            />
            {messageError && (
              <p
                className="text-destructive text-sm"
                id="message-error"
                role="alert"
              >
                {messageError}
              </p>
            )}
          </div>
          <div className="flex justify-end">
            <Button
              className="w-full sm:w-auto"
              disabled={isSending}
              size="lg"
              type="submit"
            >
              {isSending ? 'A enviar…' : 'Enviar'}
            </Button>
          </div>
        </form>
      </div>
    </Animate>
  )
}
