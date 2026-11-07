import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import ExternalLinksMenu from '@/components/external-links-menu/ExternalLinksMenu'

function getToggle() {
  return screen.getByRole('button', { name: 'Links externos' })
}

describe('ExternalLinksMenu', () => {
  it('opens on hover and closes when the pointer leaves', async () => {
    const user = userEvent.setup()
    render(<ExternalLinksMenu />)

    expect(getToggle()).toHaveAttribute('aria-expanded', 'false')

    await user.hover(getToggle())

    expect(getToggle()).toHaveAttribute('aria-expanded', 'true')

    await user.unhover(getToggle())

    expect(getToggle()).toHaveAttribute('aria-expanded', 'false')
  })

  it('stays open after a click until clicked again', async () => {
    const user = userEvent.setup()
    render(<ExternalLinksMenu />)

    await user.click(getToggle())

    expect(getToggle()).toHaveAttribute('aria-expanded', 'true')

    await user.unhover(getToggle())

    expect(getToggle()).toHaveAttribute('aria-expanded', 'true')

    await user.click(getToggle())

    expect(getToggle()).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes a pinned menu on Escape', async () => {
    const user = userEvent.setup()
    render(<ExternalLinksMenu />)

    await user.click(getToggle())

    expect(getToggle()).toHaveAttribute('aria-expanded', 'true')

    await user.keyboard('{Escape}')

    expect(getToggle()).toHaveAttribute('aria-expanded', 'false')
  })
})
