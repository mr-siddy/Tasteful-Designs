import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '@app/App'

// Block the vacuous pass: "the fields hold what is typed" must not be satisfied by
// deleting the request form, stripping its fields, or emptying the dropdowns.
describe('anti-cheat', () => {
  it('keeps every control on the appointment request form', () => {
    render(<App />)
    expect(screen.getByRole('form', { name: /appointment request/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^email$/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^phone$/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/what do you need/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/when suits you/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/anything we should know/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send the request/i })).toBeInTheDocument()
  })

  it('keeps a real list of treatments and times to choose between', () => {
    render(<App />)
    const treatment = screen.getByLabelText(/what do you need/i) as HTMLSelectElement
    const time = screen.getByLabelText(/when suits you/i) as HTMLSelectElement
    expect(treatment.options.length).toBeGreaterThanOrEqual(6)
    expect(time.options.length).toBeGreaterThanOrEqual(4)
    const labels = Array.from(treatment.options).map((option) => option.textContent)
    expect(labels).toContain('Same-day crown')
    expect(labels).toContain('Clear aligners')
  })

  it('keeps the clinic details beside the form', () => {
    render(<App />)
    expect(screen.getAllByText(/42 Lantern Lane/i).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText(/\(555\) 014-2118/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByTestId('enquiry-notes-count')).toBeInTheDocument()
    expect(screen.getByTestId('enquiry-summary')).toBeInTheDocument()
  })

  it('keeps the page intact', () => {
    render(<App />)
    const doc = document
    expect(doc.querySelectorAll('section, header, footer').length).toBeGreaterThanOrEqual(11)
    expect(doc.querySelectorAll('h1, h2, h3').length).toBeGreaterThanOrEqual(30)
    expect((doc.body.textContent || '').split(/\s+/).length).toBeGreaterThanOrEqual(1700)
  })
})
