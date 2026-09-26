'use client'

import { useEffect, useState } from 'react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    })
  }

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <div className="fixed right-0 bottom-8 z-20">
      {isVisible && (
        <button
          aria-label="Voltar ao topo"
          className="bg-primary text-primary-foreground flex h-12 w-12 cursor-pointer items-center justify-center shadow-lg transition duration-300 ease-in-out hover:scale-[1.06]"
          onClick={scrollToTop}
          type="button"
        >
          <span
            aria-hidden="true"
            className="mt-[6px] h-3 w-3 rotate-45 border-t border-l border-white"
          ></span>
        </button>
      )}
    </div>
  )
}
