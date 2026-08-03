import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

// Block the vacuous pass: "everything on the page is announced" must not be
// satisfied by deleting the photographs, the icon controls or the form fields.
describe('anti-cheat', () => {
  it('keeps the reception photograph and all three clinician portraits', () => {
    const { container } = render(<App />)
    expect(screen.getByTestId('hero-photo')).toBeInTheDocument()
    expect(screen.getAllByTestId('clinician-photo')).toHaveLength(3)
    expect(container.querySelectorAll('img').length).toBeGreaterThanOrEqual(4)
  })

  it('keeps the three header icon controls, each revealing its own detail', async () => {
    const user = userEvent.setup()
    render(<App />)
    const buttons = screen.getAllByTestId('header-icon-button')
    expect(buttons).toHaveLength(3)
    const details = new Set<string>()
    for (const button of buttons) {
      await user.click(button)
      const text = screen.getByTestId('header-detail').textContent ?? ''
      expect(text.trim().length).toBeGreaterThan(20)
      details.add(text)
    }
    expect(details.size).toBe(3)
  })

  it('keeps the emergency notice and its dismiss control', async () => {
    const user = userEvent.setup()
    render(<App />)
    expect(screen.getByTestId('emergency-notice')).toHaveTextContent(/same-day emergency/i)
    await user.click(screen.getByTestId('notice-dismiss'))
    expect(screen.queryByTestId('emergency-notice')).toBeNull()
  })

  it('keeps all five booking fields working and still confirms the request', async () => {
    const user = userEvent.setup()
    render(<App />)
    const fields = screen.getAllByTestId('booking-field')
    expect(fields).toHaveLength(5)
    await user.type(fields[0], 'Priya Raman')
    await user.type(fields[1], 'priya@example.com')
    await user.type(fields[2], '07700 900123')
    await user.selectOptions(fields[3], 'Friday')
    await user.type(fields[4], 'Chipped molar, aches on cold drinks')
    expect(fields[0]).toHaveValue('Priya Raman')
    expect(fields[4]).toHaveValue('Chipped molar, aches on cold drinks')
    await user.click(screen.getByTestId('booking-submit'))
    expect(screen.getByTestId('booking-confirmation')).toHaveTextContent(/one working day/i)
  })

  it('keeps the clinicians and their roles as readable copy', () => {
    render(<App />)
    expect(screen.getByText('Dr. Mara Ellison')).toBeInTheDocument()
    expect(screen.getByText('Dr. Tobias Frey')).toBeInTheDocument()
    expect(screen.getByText('Imogen Vance')).toBeInTheDocument()
    expect(screen.getByText(/lead hygienist/i)).toBeInTheDocument()
    expect(screen.getByText(/principal dentist/i)).toBeInTheDocument()
  })
})
