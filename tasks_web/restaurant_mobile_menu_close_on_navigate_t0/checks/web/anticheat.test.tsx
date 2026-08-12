import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

// Block the vacuous pass: "the mobile menu is gone after tapping a destination"
// must not be satisfied by never rendering the menu, by emptying it of
// destinations, or by gutting the page those destinations point at.
describe('anti-cheat', () => {
  it('still opens a mobile menu from the header toggle', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggle = screen.getByTestId('nav-toggle')
    expect(toggle).toBeInTheDocument()
    await user.click(toggle)
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument()
  })

  it('keeps every destination in the mobile menu, each pointing at a real section', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByTestId('nav-toggle'))
    const menu = screen.getByTestId('mobile-menu')
    const links = within(menu).getAllByTestId('mobile-nav-link')
    expect(links.length).toBeGreaterThanOrEqual(5)
    for (const link of links) {
      expect((link.textContent || '').trim().length).toBeGreaterThan(2)
      const href = link.getAttribute('href') || ''
      expect(href.startsWith('#')).toBe(true)
      expect(document.getElementById(href.slice(1))).not.toBeNull()
    }
    expect(within(menu).getByTestId('mobile-nav-cta')).toBeInTheDocument()
  })

  it('keeps the desktop navigation and the reserve action', () => {
    render(<App />)
    expect(screen.getAllByTestId('desktop-nav-link').length).toBeGreaterThanOrEqual(5)
    expect(screen.getAllByRole('link', { name: /reserve a table/i }).length).toBeGreaterThanOrEqual(1)
  })

  it('can still be closed from the toggle itself', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggle = screen.getByTestId('nav-toggle')
    await user.click(toggle)
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument()
    await user.click(toggle)
    const still = screen.queryByTestId('mobile-menu')
    const showing = still !== null && !still.hasAttribute('hidden') && still.style.display !== 'none'
    expect(showing).toBe(false)
  })

  it('keeps the page intact', () => {
    render(<App />)
    const doc = document
    expect(doc.querySelectorAll('section, header, footer').length).toBeGreaterThanOrEqual(10)
    expect(doc.querySelectorAll('h1, h2, h3').length).toBeGreaterThanOrEqual(30)
    expect((doc.body.textContent || '').split(/\s+/).length).toBeGreaterThanOrEqual(1400)
    expect(doc.querySelectorAll('svg').length).toBeGreaterThanOrEqual(20)
    expect(screen.getAllByTestId('menu-dish').length).toBeGreaterThanOrEqual(6)
  })
})
