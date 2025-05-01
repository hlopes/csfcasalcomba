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
    <div className="fixed right-8 bottom-8 z-20">
      {isVisible && (
        <div
          aria-label="scroll to top"
          className="bg-primary hover:bg-primary/80 flex h-10 w-10 cursor-pointer items-center justify-center text-white shadow-md transition duration-300 ease-in-out"
          onClick={scrollToTop}
        >
          <span className="mt-[6px] h-3 w-3 rotate-45 border-t border-l border-white"></span>
          <span className="sr-only">scroll to top</span>
        </div>
      )}
    </div>
  )
}
