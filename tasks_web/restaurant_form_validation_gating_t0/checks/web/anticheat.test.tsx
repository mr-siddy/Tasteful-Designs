import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

// Block the vacuous pass: "an unusable request is refused" must not be satisfied
// by deleting the form, stripping its fields, or wiring the button so that
// nothing ever gets through.
describe('anti-cheat', () => {
  it('keeps the Long Table form and every one of its fields', () => {
    render(<App />)
    expect(screen.getByTestId('reserve-form')).toBeInTheDocument()
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/guests in your party/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/which seating/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/anything we should know/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send the request/i })).toBeInTheDocument()
  })

  it('keeps all three seatings on offer', () => {
    render(<App />)
    const seating = screen.getByLabelText(/which seating/i) as HTMLSelectElement
    expect(seating.querySelectorAll('option').length).toBeGreaterThanOrEqual(4)
    expect(screen.getByRole('option', { name: /early seating/i })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: /main seating/i })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: /full buyout/i })).toBeInTheDocument()
  })

  it('still lets a genuine party through to the confirmation', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(screen.getByLabelText(/full name/i), 'Camille Ostrander')
    await user.type(screen.getByLabelText(/email address/i), 'camille@brightleafquarterly.org')
    await user.type(screen.getByLabelText(/guests in your party/i), '41')
    await user.selectOptions(screen.getByLabelText(/which seating/i), 'buyout')
    await user.click(screen.getByRole('button', { name: /send the request/i }))
    const confirmation = screen.getByTestId('reserve-success')
    expect(confirmation).toBeInTheDocument()
    expect(confirmation.textContent || '').toMatch(/long table/i)
  })

  it('keeps typed answers in the fields', async () => {
    const user = userEvent.setup()
    render(<App />)
    const email = screen.getByLabelText(/email address/i)
    await user.type(email, 'bennett@sneadsferrycoop.net')
    expect(email).toHaveValue('bennett@sneadsferrycoop.net')
    const guests = screen.getByLabelText(/guests in your party/i)
    await user.type(guests, '18')
    expect(guests).toHaveValue('18')
  })

  it('keeps the note field optional', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(screen.getByLabelText(/full name/i), 'Georgia Nwachukwu')
    await user.type(screen.getByLabelText(/email address/i), 'georgia@brightleafquarterly.org')
    await user.type(screen.getByLabelText(/guests in your party/i), '34')
    await user.selectOptions(screen.getByLabelText(/which seating/i), 'main')
    await user.click(screen.getByRole('button', { name: /send the request/i }))
    expect(screen.getByTestId('reserve-success')).toBeInTheDocument()
  })

  it('keeps the supporting copy around the form', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /twenty-two feet of heart pine/i })).toBeInTheDocument()
    expect(screen.getAllByText(/\(919\) 555-0164/).length).toBeGreaterThan(0)
  })

  it('keeps the page intact', () => {
    render(<App />)
    const doc = document
    expect(doc.querySelectorAll('section, header, footer').length).toBeGreaterThanOrEqual(12)
    expect(doc.querySelectorAll('h1, h2, h3').length).toBeGreaterThanOrEqual(40)
    expect(doc.querySelectorAll('a, button, input, select, textarea').length).toBeGreaterThanOrEqual(30)
    expect((doc.body.textContent || '').split(/\s+/).filter(Boolean).length).toBeGreaterThanOrEqual(1800)
  })
})
