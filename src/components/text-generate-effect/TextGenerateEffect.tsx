'use client'

import { motion, stagger, useAnimate } from 'framer-motion'
import { useEffect } from 'react'

type TextGenerateEffectProps = {
  className?: string
  delay?: number
  duration?: number
  filter?: boolean
  words: string
}
export const TextGenerateEffect = ({
  className,
  delay = 0.2,
  duration = 0.5,
  filter = true,
  words,
}: TextGenerateEffectProps) => {
  const [scope, animate] = useAnimate()
  const wordsArray = words.split(' ')

  useEffect(() => {
    animate(
      'span',
      {
        filter: filter ? 'blur(0px)' : 'none',
        opacity: 1,
      },
      {
        delay: stagger(delay, { startDelay: delay }),
        duration: duration,
      }
    )
  }, [animate, delay, duration, filter])

  return (
    <motion.span ref={scope}>
      {wordsArray.map((word, idx) => {
        return (
          <motion.span
            className={className}
            key={word + idx}
            style={{
              filter: filter ? 'blur(10px)' : 'none',
            }}
          >
            {word}{' '}
          </motion.span>
        )
      })}
    </motion.span>
  )
}
