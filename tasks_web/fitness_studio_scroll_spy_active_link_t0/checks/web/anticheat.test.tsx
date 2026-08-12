import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '@app/App'

const DESTINATIONS: ReadonlyArray<readonly [string, string]> = [
  ['classes', 'Classes'],
  ['facility', 'The floor'],
  ['method', 'The method'],
  ['membership', 'Membership'],
  ['results', 'Results'],
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
    expect(document.querySelectorAll('h1, h2, h3').length).toBeGreaterThanOrEqual(36)
    expect((document.body.textContent || '').trim().split(/\s+/).length).toBeGreaterThanOrEqual(1800)
  })

  it('keeps the class list, the timetable and their prices', () => {
    render(<App />)
    expect(screen.getAllByTestId('class-card').length).toBeGreaterThanOrEqual(6)
    expect(screen.getAllByTestId('class-price').length).toBeGreaterThanOrEqual(6)
    expect(
      screen.getAllByTestId('class-price').some((price) => price.textContent?.includes('$28')),
    ).toBe(true)
    expect(screen.getAllByTestId('schedule-slot').length).toBeGreaterThanOrEqual(10)
  })

  it('keeps the memberships, the coaches, the results and the questions on the page', () => {
    render(<App />)
    expect(screen.getAllByTestId('membership-plan').length).toBeGreaterThanOrEqual(3)
    expect(screen.getAllByTestId('plan-price').length).toBeGreaterThanOrEqual(3)
    expect(screen.getByText('$189')).toBeInTheDocument()
    expect(screen.getAllByTestId('coach-card').length).toBeGreaterThanOrEqual(4)
    expect(screen.getAllByTestId('result-card').length).toBeGreaterThanOrEqual(3)
    expect(screen.getAllByTestId('faq-item').length).toBeGreaterThanOrEqual(6)
    expect(screen.getAllByTestId('facility-block').length).toBeGreaterThanOrEqual(3)
    expect(screen.getAllByTestId('method-step').length).toBeGreaterThanOrEqual(4)
  })

  it('keeps the intro-session form usable', () => {
    render(<App />)
    expect(screen.getByLabelText(/your name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/what are you after/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /request my intro session/i })).toBeInTheDocument()
  })
})
