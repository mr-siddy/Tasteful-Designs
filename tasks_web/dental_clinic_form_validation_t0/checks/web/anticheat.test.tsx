import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

// Block the vacuous pass: "an invalid request is refused" must not be satisfied
// by deleting the form, stripping its fields, or refusing every request forever.
describe('anti-cheat', () => {
  it('keeps the appointment form and all of its fields', () => {
    render(<App />)
    expect(screen.getByLabelText(/^full name$/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^email address$/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^phone number$/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/what is this visit for/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/preferred time of day/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/anything we should know/i)).toBeInTheDocument()
    expect(screen.getByTestId('booking-submit')).toBeInTheDocument()
  })

  it('still offers the real list of appointment reasons', () => {
    render(<App />)
    const reasons = screen.getByLabelText(/what is this visit for/i) as HTMLSelectElement
    expect(reasons.querySelectorAll('option').length).toBeGreaterThanOrEqual(6)
    expect(screen.getByRole('option', { name: 'New patient exam and clean' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Toothache or something broken' })).toBeInTheDocument()
  })

  it('still confirms a request that is completely valid', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(screen.getByLabelText(/^full name$/i), 'Marcus Oyelaran')
    await user.type(screen.getByLabelText(/^email address$/i), 'marcus@kestrelmail.com')
    await user.type(screen.getByLabelText(/^phone number$/i), '2065550133')
    await user.selectOptions(
      screen.getByLabelText(/what is this visit for/i),
      'Implant consultation',
    )
    await user.click(screen.getByTestId('booking-submit'))
    expect(screen.getByTestId('booking-success')).toBeInTheDocument()
  })

  it('keeps the marketing page around the form', () => {
    render(<App />)
    expect(screen.getAllByTestId('service-card').length).toBeGreaterThanOrEqual(6)
    expect(screen.getAllByTestId('faq-item').length).toBeGreaterThanOrEqual(6)
    expect(screen.getAllByTestId('testimonial').length).toBeGreaterThanOrEqual(3)
    expect(screen.getAllByTestId('team-member').length).toBeGreaterThanOrEqual(4)
    expect(screen.getAllByTestId('plan-card').length).toBeGreaterThanOrEqual(3)
  })

  it('keeps the page intact', () => {
    render(<App />)
    const doc = document
    expect(doc.querySelectorAll('section, header, footer').length).toBeGreaterThanOrEqual(11)
    expect(doc.querySelectorAll('h1, h2, h3').length).toBeGreaterThanOrEqual(24)
    expect(doc.querySelectorAll('a, button, input, select, textarea').length).toBeGreaterThanOrEqual(
      36,
    )
    expect((doc.body.textContent || '').split(/\s+/).length).toBeGreaterThanOrEqual(1800)
  })
})
