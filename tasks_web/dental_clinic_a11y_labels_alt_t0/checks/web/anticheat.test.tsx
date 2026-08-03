import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

// Block the vacuous pass: "everything on this page is announced" must not be
// satisfied by deleting the photographs, the quick-contact controls or the
// request-form fields. Every selector below is a data-testid or literal page
// copy, never an accessible name, so this gate reads the same before and after
// the fix.
describe('anti-cheat', () => {
  it('keeps the studio photographs and the team portraits on the page', () => {
    const { container } = render(<App />)
    expect(screen.getAllByTestId('studio-photo')).toHaveLength(3)
    expect(screen.getAllByTestId('team-photo')).toHaveLength(4)
    expect(container.querySelectorAll('img').length).toBeGreaterThanOrEqual(7)
  })

  it('keeps four quick-contact controls, each opening its own details', async () => {
    const user = userEvent.setup()
    render(<App />)
    const controls = screen.getAllByTestId('contact-action')
    expect(controls).toHaveLength(4)

    const details = new Set<string>()
    for (const control of controls) {
      await user.click(control)
      const text = screen.getByTestId('contact-detail').textContent ?? ''
      expect(text.trim().length).toBeGreaterThan(60)
      details.add(text)
    }
    expect(details.size).toBe(4)
  })

  it('keeps all seven request-form controls working and still confirms the request', async () => {
    const user = userEvent.setup()
    render(<App />)
    const fields = screen.getAllByTestId('booking-field')
    expect(fields).toHaveLength(7)

    await user.type(fields[0], 'Odile Brandt')
    await user.type(fields[1], 'odile@harbourmail.dental')
    await user.type(fields[2], '614 555 0913')
    await user.selectOptions(fields[3], 'Saturday morning')
    await user.selectOptions(fields[4], 'Check-up and clean')
    await user.type(fields[5], 'I work nights, so mornings are easiest.')
    await user.click(fields[6])

    expect(fields[0]).toHaveValue('Odile Brandt')
    expect(fields[3]).toHaveValue('Saturday morning')
    expect(fields[5]).toHaveValue('I work nights, so mornings are easiest.')
    expect(fields[6]).toBeChecked()

    await user.click(screen.getByTestId('booking-submit'))
    const confirmation = screen.getByTestId('booking-confirmation')
    expect(confirmation).toHaveTextContent(/Odile/)
    expect(confirmation).toHaveTextContent(/saturday morning/i)
  })

  it('keeps the treatments, plans, quotes and answers as readable copy', () => {
    render(<App />)
    expect(screen.getAllByTestId('service-card')).toHaveLength(6)
    expect(screen.getAllByTestId('plan-card')).toHaveLength(3)
    expect(screen.getAllByTestId('testimonial')).toHaveLength(3)
    expect(screen.getAllByTestId('faq-item')).toHaveLength(6)
    expect(screen.getAllByTestId('visit-step')).toHaveLength(5)
    expect(screen.getAllByTestId('hours-row')).toHaveLength(7)
    expect(screen.getAllByTestId('team-member')).toHaveLength(4)
    expect(screen.getByText('$95')).toBeInTheDocument()
    expect(screen.getByText('from $2,950')).toBeInTheDocument()
    expect(screen.getByText('Renée Aboagye')).toBeInTheDocument()
  })

  it('keeps the page intact', () => {
    render(<App />)
    const doc = document
    expect(doc.querySelectorAll('section, header, footer').length).toBeGreaterThanOrEqual(12)
    expect(doc.querySelectorAll('h1, h2, h3').length).toBeGreaterThanOrEqual(38)
    expect((doc.body.textContent || '').split(/\s+/).length).toBeGreaterThanOrEqual(2100)
  })
})
