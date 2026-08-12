import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

// Block the vacuous pass: "an unusable booking is refused" must not be satisfied
// by deleting the form, dropping fields, or wiring the button so that nothing
// ever gets through to the confirmation.
describe('anti-cheat', () => {
  it('keeps the intro form and every one of its fields', () => {
    render(<App />)
    expect(screen.getByTestId('intro-form')).toBeInTheDocument()
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/mobile number/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/preferred start week/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/anything we should know/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /book my intro session/i })).toBeInTheDocument()
  })

  it('keeps every start week on offer', () => {
    render(<App />)
    const week = screen.getByLabelText(/preferred start week/i) as HTMLSelectElement
    expect(week.querySelectorAll('option').length).toBeGreaterThanOrEqual(5)
    expect(screen.getByRole('option', { name: /13 april/i })).toBeInTheDocument()
  })

  it('still lets a genuine visitor through to the confirmation', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(screen.getByLabelText(/full name/i), 'Nadia Ferreira')
    await user.type(screen.getByLabelText(/email address/i), 'nadia@corvinstreetclinic.org')
    await user.type(screen.getByLabelText(/mobile number/i), '5550149104')
    await user.selectOptions(screen.getByLabelText(/preferred start week/i), 'apr-20')
    await user.click(screen.getByRole('button', { name: /book my intro session/i }))
    const confirmation = screen.getByTestId('intro-success')
    expect(confirmation).toBeInTheDocument()
    expect(confirmation.textContent || '').toMatch(/intro session/i)
  })

  it('keeps typed answers in the fields', async () => {
    const user = userEvent.setup()
    render(<App />)
    const email = screen.getByLabelText(/email address/i)
    await user.type(email, 'gideon@marlowandvine.com')
    expect(email).toHaveValue('gideon@marlowandvine.com')
  })

  it('keeps the supporting copy around the form', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /thirty-five minutes/i })).toBeInTheDocument()
    expect(screen.getAllByText(/\(555\) 014-8820/).length).toBeGreaterThan(0)
  })

  it('keeps the page intact', () => {
    render(<App />)
    const doc = document
    expect(doc.querySelectorAll('section, header, footer').length).toBeGreaterThanOrEqual(12)
    expect(doc.querySelectorAll('h1, h2, h3').length).toBeGreaterThanOrEqual(40)
    expect(doc.querySelectorAll('a, button, input, select, textarea').length).toBeGreaterThanOrEqual(35)
    expect((doc.body.textContent || '').split(/\s+/).filter(Boolean).length).toBeGreaterThanOrEqual(2200)
  })
})
