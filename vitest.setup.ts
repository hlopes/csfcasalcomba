import '@testing-library/jest-dom/vitest'

import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

// Radix UI (tooltips, popper) observes element sizes; jsdom has no ResizeObserver.
if (!('ResizeObserver' in globalThis)) {
  globalThis.ResizeObserver = class ResizeObserver {
    disconnect() {}
    observe() {}
    unobserve() {}
  }
}

// jsdom throws "Not implemented" when user-event scrolls an element into view.
Object.defineProperty(window, 'scrollTo', { value: () => {}, writable: true })

afterEach(() => {
  cleanup()
})
