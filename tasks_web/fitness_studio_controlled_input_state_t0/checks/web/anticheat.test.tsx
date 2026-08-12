import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import App from '@app/App'

// Block the vacuous pass: "the fields keep what you type" must not be satisfied
// by stripping the form down to one input, deleting the live pass preview, or
// gutting the rest of the landing page around it.
describe('anti-cheat', () => {
  it('keeps every control of the trial pass form', () => {
    render(<App />)
    const form = screen.getByTestId('trial-form')
    expect(form).toBeInTheDocument()
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/mobile number/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/preferred first session/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/next eight weeks/i)).toBeInTheDocument()
    expect(within(form).getByRole('button', { name: /book my trial fortnight/i })).toBeInTheDocument()
    expect(within(form).getByRole('button', { name: /start over/i })).toBeInTheDocument()
  })

  it('keeps the live pass preview and what the fortnight includes', () => {
    render(<App />)
    const preview = screen.getByTestId('pass-preview')
    expect(within(preview).getByText(/trial pass/i)).toBeInTheDocument()
    expect(screen.getAllByTestId('pass-included').length).toBeGreaterThanOrEqual(4)
    expect(screen.getByTestId('goal-counter')).toBeInTheDocument()
  })

  it('keeps the rest of the landing page intact', () => {
    render(<App />)
    const doc = document
    expect(doc.querySelectorAll('section, header, footer').length).toBeGreaterThanOrEqual(12)
    expect(doc.querySelectorAll('h1, h2, h3').length).toBeGreaterThanOrEqual(30)
    expect(doc.querySelectorAll('a, button, input, select, textarea').length).toBeGreaterThanOrEqual(25)
    expect((doc.body.textContent || '').trim().split(/\s+/).length).toBeGreaterThanOrEqual(1700)
  })

  it('keeps the programs, membership tiers and member stories on the page', () => {
    render(<App />)
    expect(screen.getAllByTestId('program-card').length).toBeGreaterThanOrEqual(6)
    expect(screen.getAllByTestId('membership-tier').length).toBeGreaterThanOrEqual(3)
    expect(screen.getAllByTestId('member-story').length).toBeGreaterThanOrEqual(3)
    expect(screen.getAllByTestId('faq-item').length).toBeGreaterThanOrEqual(6)
  })
})
