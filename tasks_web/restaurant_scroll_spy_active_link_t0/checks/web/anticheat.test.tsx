import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import App from '@app/App'

const DESTINATIONS = [
  { id: 'menu', label: 'Menu' },
  { id: 'hearth', label: 'The Hearth' },
  { id: 'room', label: 'The Room' },
  { id: 'evening', label: 'The Evening' },
  { id: 'cellar', label: 'Cellar' },
  { id: 'visit', label: 'Visit' },
]

const words = (element: Element) => (element.textContent || '').trim().split(/\s+/).filter(Boolean)

// Block the vacuous pass: "exactly one destination is marked" must not be
// satisfiable by deleting the nav, by dropping destinations, or by gutting the
// sections those destinations point at.
describe('anti-cheat', () => {
  it('keeps the section nav and all six destinations', () => {
    render(<App />)
    const links = within(screen.getByTestId('section-nav')).getAllByRole('link')
    expect(links.map((link) => (link.textContent || '').trim())).toEqual(
      DESTINATIONS.map((destination) => destination.label),
    )
    expect(links.map((link) => link.getAttribute('href'))).toEqual(
      DESTINATIONS.map((destination) => `#${destination.id}`),
    )
  })

  it('anchors every destination on a real section with a heading and real copy', () => {
    render(<App />)
    for (const destination of DESTINATIONS) {
      const section = document.getElementById(destination.id)
      expect(section, `section #${destination.id} is missing`).not.toBeNull()
      expect(within(section as HTMLElement).getAllByRole('heading').length).toBeGreaterThanOrEqual(1)
      expect(words(section as HTMLElement).length).toBeGreaterThanOrEqual(60)
    }
  })

  it('marks a destination on first load rather than nothing at all', () => {
    render(<App />)
    const marked = within(screen.getByTestId('section-nav'))
      .getAllByRole('link')
      .filter((link) => {
        const current = link.getAttribute('aria-current')
        if (current && current !== 'false') return true
        return /(?:^|\s)(?:is-active|active)(?:\s|$)/.test(link.getAttribute('class') || '')
      })
    expect(marked).toHaveLength(1)
    expect((marked[0].textContent || '').trim()).toBe('Menu')
  })

  it('keeps the menu, its six dishes and their prices', () => {
    render(<App />)
    expect(screen.getAllByTestId('menu-dish').length).toBeGreaterThanOrEqual(6)
    expect(screen.getByText('£38')).toBeInTheDocument()
    expect(screen.getByText(/sirloin aged 28 days/i)).toBeInTheDocument()
  })

  it('keeps the cellar list, the guest stories and the reservation form', () => {
    render(<App />)
    expect(screen.getAllByTestId('cellar-pour').length).toBeGreaterThanOrEqual(6)
    expect(screen.getAllByTestId('guest-story').length).toBeGreaterThanOrEqual(3)
    expect(screen.getByTestId('reserve-form')).toBeInTheDocument()
    expect(screen.getByLabelText(/name on the booking/i)).toBeInTheDocument()
  })

  it('keeps the page itself intact', () => {
    render(<App />)
    expect(document.querySelectorAll('section, header, footer').length).toBeGreaterThanOrEqual(10)
    expect(document.querySelectorAll('h1, h2, h3').length).toBeGreaterThanOrEqual(32)
    expect(words(document.body).length).toBeGreaterThanOrEqual(1900)
  })
})
