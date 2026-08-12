import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

const DESTINATIONS = [
  { label: 'Treatments', href: '#treatments' },
  { label: 'Same-day crowns', href: '#mill' },
  { label: 'Our dentists', href: '#team' },
  { label: 'Membership', href: '#membership' },
  { label: 'Hours & parking', href: '#hours' },
]

// Block the vacuous pass: "the phone menu is gone after tapping a destination"
// must not be satisfied by deleting the menu, emptying it, or stripping the page
// down to the bit the correctness spec looks at.
describe('anti-cheat', () => {
  it('still opens a phone menu carrying every destination', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByTestId('nav-toggle'))
    const panel = screen.getByTestId('mobile-menu')
    const links = within(panel).getAllByTestId('mobile-nav-link')
    expect(links.map((a) => a.textContent)).toEqual(DESTINATIONS.map((d) => d.label))
    expect(links.map((a) => a.getAttribute('href'))).toEqual(DESTINATIONS.map((d) => d.href))
  })

  it('keeps the booking action, the phone number and a way to dismiss the menu', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByTestId('nav-toggle'))
    const panel = screen.getByTestId('mobile-menu')
    expect(within(panel).getByTestId('mobile-menu-cta')).toHaveAttribute('href', '#book')
    expect(within(panel).getByTestId('mobile-menu-phone')).toHaveTextContent('(503) 555 0197')
    expect(within(panel).getByTestId('mobile-menu-close')).toHaveAccessibleName(/close/i)
  })

  it('keeps the wide-screen navigation as well', () => {
    render(<App />)
    const links = screen.getAllByTestId('nav-link')
    expect(links.map((a) => a.textContent)).toEqual(DESTINATIONS.map((d) => d.label))
  })

  it('keeps the page intact', () => {
    render(<App />)
    const doc = document
    expect(doc.querySelectorAll('section, header, footer').length).toBeGreaterThanOrEqual(8)
    expect(doc.querySelectorAll('h1, h2, h3').length).toBeGreaterThanOrEqual(8)
    expect((doc.body.textContent || '').split(/\s+/).length).toBeGreaterThanOrEqual(650)
  })

  it('keeps the sections those destinations point at', () => {
    render(<App />)
    for (const d of DESTINATIONS) {
      expect(document.querySelector(d.href)).not.toBeNull()
    }
    expect(screen.getAllByTestId('treatment-card').length).toBeGreaterThanOrEqual(6)
    expect(screen.getAllByTestId('plan-card').length).toBeGreaterThanOrEqual(3)
  })
})
