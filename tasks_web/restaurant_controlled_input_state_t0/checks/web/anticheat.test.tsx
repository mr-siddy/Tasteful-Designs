import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

// Block the vacuous pass: "the fields hold what you type" must not be satisfied
// by deleting fields, dropping the summary and the confirmation, or gutting the
// landing page around the form.
describe('anti-cheat', () => {
  it('keeps every control of the reservation request form', () => {
    render(<App />)
    expect(screen.getByTestId('reservation-form')).toBeInTheDocument()
    expect(screen.getByLabelText('Name for the reservation')).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByLabelText('Which evening are you hoping for?')).toBeInTheDocument()
    expect(screen.getByLabelText('How many at the table?')).toBeInTheDocument()
    expect(screen.getByLabelText('Where would you like to sit?')).toBeInTheDocument()
    expect(screen.getByLabelText('Anything the kitchen should know?')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send the request/i })).toBeInTheDocument()
  })

  it('keeps the party size and seating choices on offer', () => {
    render(<App />)
    const party = screen.getByLabelText('How many at the table?') as HTMLSelectElement
    expect(party.querySelectorAll('option').length).toBeGreaterThanOrEqual(8)
    const seating = screen.getByLabelText('Where would you like to sit?') as HTMLSelectElement
    expect(seating.querySelectorAll('option').length).toBeGreaterThanOrEqual(3)
  })

  it('keeps the running summary and the character count on the page', () => {
    render(<App />)
    expect(screen.getByTestId('reservation-summary')).toBeInTheDocument()
    expect(screen.getByTestId('note-count')).toHaveTextContent('/240')
  })

  it('still confirms a request after the guest sends it', async () => {
    const user = userEvent.setup()
    render(<App />)
    expect(screen.queryByTestId('reservation-confirmation')).toBeNull()
    await user.click(screen.getByRole('button', { name: /send the request/i }))
    expect(screen.getByTestId('reservation-confirmation')).toBeInTheDocument()
  })

  it('keeps the menu and the private supra options intact', () => {
    render(<App />)
    expect(screen.getAllByTestId('course-card').length).toBeGreaterThanOrEqual(6)
    expect(screen.getAllByTestId('course-price').length).toBeGreaterThanOrEqual(6)
    expect(screen.getAllByTestId('private-package').length).toBeGreaterThanOrEqual(3)
    expect(screen.getAllByTestId('testimonial').length).toBeGreaterThanOrEqual(3)
    expect(screen.getAllByTestId('faq-item').length).toBeGreaterThanOrEqual(6)
  })

  it('keeps the rest of the landing page intact', () => {
    render(<App />)
    const doc = document
    expect(doc.querySelectorAll('section, header, footer').length).toBeGreaterThanOrEqual(11)
    expect(doc.querySelectorAll('h1, h2, h3').length).toBeGreaterThanOrEqual(38)
    expect((doc.body.textContent || '').trim().split(/\s+/).length).toBeGreaterThanOrEqual(1700)
  })
})
