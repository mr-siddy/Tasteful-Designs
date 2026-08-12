import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

const DESTINATIONS = [
  { id: 'classes', label: 'Classes' },
  { id: 'timetable', label: 'Timetable' },
  { id: 'method', label: 'Method' },
  { id: 'instructors', label: 'Instructors' },
  { id: 'memberships', label: 'Memberships' },
]

// Block the vacuous pass: "the drawer is gone after tapping a link" must not be
// satisfied by a drawer that never opens, a drawer with nothing in it, or a
// header that dropped the small-screen menu altogether.
describe('anti-cheat', () => {
  it('keeps a menu toggle that really opens a drawer', async () => {
    const user = userEvent.setup()
    render(<App />)
    expect(screen.queryByTestId('mobile-menu')).toBeNull()
    await user.click(screen.getByTestId('nav-toggle'))
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument()
  })

  it('carries every destination, the booking action and a close control in the drawer', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByTestId('nav-toggle'))
    const drawer = screen.getByTestId('mobile-menu')
    for (const destination of DESTINATIONS) {
      const link = within(drawer).getByTestId(`mobile-menu-link-${destination.id}`)
      expect(link).toHaveTextContent(destination.label)
      expect(link).toHaveAttribute('href', `#${destination.id}`)
    }
    expect(within(drawer).getByTestId('mobile-menu-cta')).toBeInTheDocument()
    expect(within(drawer).getByTestId('mobile-menu-close')).toBeInTheDocument()
  })

  it('still offers the same destinations on a wide screen', () => {
    render(<App />)
    const desktopNav = screen.getByTestId('desktop-nav')
    for (const destination of DESTINATIONS) {
      expect(within(desktopNav).getByTestId(`desktop-link-${destination.id}`)).toHaveTextContent(
        destination.label,
      )
    }
  })

  it('keeps a real section behind every destination', () => {
    render(<App />)
    for (const destination of DESTINATIONS) {
      const target = document.getElementById(destination.id)
      expect(target).not.toBeNull()
      expect((target as HTMLElement).textContent?.trim().length ?? 0).toBeGreaterThan(120)
    }
  })

  it('keeps the page intact', () => {
    render(<App />)
    const doc = document
    expect(doc.querySelectorAll('section, header, footer').length).toBeGreaterThanOrEqual(12)
    expect(doc.querySelectorAll('h1, h2, h3').length).toBeGreaterThanOrEqual(28)
    expect(doc.querySelectorAll('*').length).toBeGreaterThanOrEqual(550)
    expect((doc.body.textContent || '').trim().split(/\s+/).length).toBeGreaterThanOrEqual(1600)
  })

  it('keeps the classes, the timetable and the membership tiers', () => {
    render(<App />)
    expect(screen.getAllByTestId('class-card').length).toBeGreaterThanOrEqual(6)
    expect(within(screen.getByTestId('timetable')).getAllByRole('listitem').length).toBeGreaterThanOrEqual(10)
    expect(within(screen.getByTestId('membership-tiers')).getAllByText(/\$\d/).length).toBeGreaterThanOrEqual(3)
    expect(screen.getByTestId('intro-form')).toBeInTheDocument()
  })
})
