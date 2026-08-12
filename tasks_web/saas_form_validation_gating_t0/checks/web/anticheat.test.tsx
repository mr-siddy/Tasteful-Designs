import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

// Block the vacuous pass: "an invalid submission is refused" must not be
// satisfied by deleting the form, stripping its fields, or wiring the button so
// that nothing ever gets through.
describe('anti-cheat', () => {
  it('keeps the walkthrough form and every one of its fields', () => {
    render(<App />)
    expect(screen.getByTestId('contact-form')).toBeInTheDocument()
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/work email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/technicians you dispatch/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/what are you running today/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /book my walkthrough/i })).toBeInTheDocument()
  })

  it('still lets a genuine visitor through to the confirmation', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(screen.getByLabelText(/full name/i), 'Marisol Vega')
    await user.type(screen.getByLabelText(/work email/i), 'marisol@kestrelmechanical.com')
    await user.type(screen.getByLabelText(/technicians you dispatch/i), '22')
    await user.click(screen.getByRole('button', { name: /book my walkthrough/i }))
    const confirmation = screen.getByTestId('contact-success')
    expect(confirmation).toBeInTheDocument()
    expect(confirmation.textContent || '').toMatch(/walkthrough/i)
  })

  it('keeps typed answers in the fields', async () => {
    const user = userEvent.setup()
    render(<App />)
    const email = screen.getByLabelText(/work email/i)
    await user.type(email, 'dwight@bowdenplumbing.com')
    expect(email).toHaveValue('dwight@bowdenplumbing.com')
  })

  it('keeps the supporting copy around the form', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /tell us about your shop/i })).toBeInTheDocument()
    expect(screen.getAllByText(/\(616\) 555-0142/).length).toBeGreaterThan(0)
  })

  it('keeps the page intact', () => {
    render(<App />)
    const doc = document
    expect(doc.querySelectorAll('section, header, footer').length).toBeGreaterThanOrEqual(12)
    expect(doc.querySelectorAll('h1, h2, h3').length).toBeGreaterThanOrEqual(30)
    expect(doc.querySelectorAll('a, button, input, textarea').length).toBeGreaterThanOrEqual(30)
    expect((doc.body.textContent || '').split(/\s+/).filter(Boolean).length).toBeGreaterThanOrEqual(1400)
  })
})
