import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import App from '@app/App'

const DESTINATIONS = [
  { label: 'Treatments', href: '#treatments' },
  { label: 'Same-day crowns', href: '#same-day' },
  { label: 'Our team', href: '#team' },
  { label: 'Membership', href: '#membership' },
  { label: 'Visits & hours', href: '#visit' },
]

// Block the vacuous pass: "the treatment grid is one column on a phone" must not
// be satisfied by deleting the grid, emptying the cards, or stripping the rest of
// the page down to the bit the correctness spec looks at.
describe('anticheat', () => {
  it('still lays the treatments out in a grid container', () => {
    render(<App />)
    const grid = screen.getByTestId('services-grid')
    expect((grid.getAttribute('class') || '').split(/\s+/)).toContain('grid')
    expect(within(grid).getAllByTestId('service-card')).toHaveLength(6)
  })

  it('keeps all six treatments named, priced and described', () => {
    render(<App />)
    const cards = screen.getAllByTestId('service-card')
    expect(cards).toHaveLength(6)

    const names = cards.map((card) => card.querySelector('h3')?.textContent?.trim() ?? '')
    expect(new Set(names).size).toBe(6)
    for (const name of names) expect(name.length).toBeGreaterThan(3)

    for (const card of cards) {
      expect(within(card).getByTestId('service-price').textContent).toMatch(/\$\d/)
      const copy = card.textContent || ''
      expect(copy.split(/\s+/).filter(Boolean).length).toBeGreaterThanOrEqual(30)
      expect(card.querySelectorAll('li').length).toBeGreaterThanOrEqual(3)
    }
  })

  it('keeps the page intact', () => {
    render(<App />)
    const doc = document
    expect(doc.querySelectorAll('section, header, footer').length).toBeGreaterThanOrEqual(10)
    expect(doc.querySelectorAll('h1, h2, h3').length).toBeGreaterThanOrEqual(24)
    expect((doc.body.textContent || '').split(/\s+/).length).toBeGreaterThanOrEqual(1100)
  })

  it('keeps the navigation and the sections it points at', () => {
    render(<App />)
    const links = screen.getAllByTestId('nav-link')
    expect(links.map((a) => a.textContent)).toEqual(DESTINATIONS.map((d) => d.label))
    expect(links.map((a) => a.getAttribute('href'))).toEqual(DESTINATIONS.map((d) => d.href))
    for (const d of DESTINATIONS) {
      expect(document.querySelector(d.href)).not.toBeNull()
    }
  })

  it('keeps the rest of the landing page — team, plans, quotes, questions', () => {
    render(<App />)
    expect(screen.getAllByTestId('team-member').length).toBeGreaterThanOrEqual(3)
    expect(screen.getAllByTestId('plan-card').length).toBeGreaterThanOrEqual(3)
    expect(screen.getAllByTestId('testimonial').length).toBeGreaterThanOrEqual(3)
    expect(screen.getAllByTestId('faq-item').length).toBeGreaterThanOrEqual(5)
    expect(screen.getByRole('contentinfo')).toHaveTextContent(/\(802\) 555 0142/)
  })
})
