import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '@app/App'

const DESTINATIONS: ReadonlyArray<readonly [string, string]> = [
  ['treatments', 'Treatments'],
  ['technology', 'Technology'],
  ['visit', 'Your visit'],
  ['membership', 'Membership'],
  ['reviews', 'Patients'],
  ['faq', 'Questions'],
]

const navLink = (id: string) => screen.getByTestId(`nav-link-${id}`)

// "Exactly one destination is marked as current" must not be satisfiable by
// deleting nav links, by deleting the sections they point at, or by gutting the
// page around them.
describe('anti-cheat', () => {
  it('keeps all six destinations in the header nav', () => {
    render(<App />)
    expect(DESTINATIONS.map(([id]) => navLink(id).textContent)).toEqual(
      DESTINATIONS.map(([, label]) => label),
    )
    for (const [id] of DESTINATIONS) {
      expect(navLink(id)).toHaveAttribute('href', `#${id}`)
    }
  })

  it('every nav destination still points at a real section of the page', () => {
    render(<App />)
    for (const [id] of DESTINATIONS) {
      expect(document.getElementById(id), `#${id} is missing from the page`).not.toBeNull()
    }
  })

  it('keeps the long-form page intact', () => {
    render(<App />)
    expect(document.querySelectorAll('section, header, footer').length).toBeGreaterThanOrEqual(11)
    expect(document.querySelectorAll('h1, h2, h3').length).toBeGreaterThanOrEqual(24)
    expect((document.body.textContent || '').trim().split(/\s+/).length).toBeGreaterThanOrEqual(900)
  })

  it('keeps the treatment list and its prices', () => {
    render(<App />)
    expect(screen.getAllByTestId('treatment-card').length).toBeGreaterThanOrEqual(6)
    expect(screen.getAllByTestId('treatment-price').length).toBeGreaterThanOrEqual(6)
    expect(screen.getByText('from $4,200')).toBeInTheDocument()
  })

  it('keeps the memberships, the reviews and the questions on the page', () => {
    render(<App />)
    expect(screen.getAllByTestId('membership-plan').length).toBeGreaterThanOrEqual(3)
    expect(screen.getAllByTestId('review-card').length).toBeGreaterThanOrEqual(3)
    expect(screen.getAllByTestId('faq-item').length).toBeGreaterThanOrEqual(6)
    expect(screen.getAllByTestId('team-member').length).toBeGreaterThanOrEqual(4)
  })

  it('keeps the booking form usable', () => {
    render(<App />)
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/what brings you in/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /request my appointment/i })).toBeInTheDocument()
  })
})
