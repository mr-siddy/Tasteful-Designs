import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

// Block the vacuous pass: "the dialog is gone after a click on the overlay"
// must not be satisfied by never opening one, by gutting its contents, or by
// dropping the close control that already worked.
describe('anti-cheat', () => {
  it('still opens a real booking dialog from the new-patient button', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByTestId('open-booking'))

    const panel = screen.getByTestId('booking-modal')
    expect(panel).toHaveAttribute('role', 'dialog')
    expect(within(panel).getByText(/reserve your new-patient visit/i)).toBeInTheDocument()
    expect(within(panel).getByText(/\$149 · 75 minutes/i)).toBeInTheDocument()
  })

  it('keeps the request form inside the dialog', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByTestId('open-booking'))
    const panel = within(screen.getByTestId('booking-modal'))

    expect(panel.getByLabelText(/your name/i)).toBeInTheDocument()
    expect(panel.getByLabelText(/mobile number/i)).toBeInTheDocument()
    expect(panel.getByLabelText(/which chair suits you/i)).toBeInTheDocument()
    expect(panel.getByRole('button', { name: /send the request/i })).toBeInTheDocument()
    expect(panel.getAllByRole('option').length).toBeGreaterThanOrEqual(4)
  })

  it('keeps the close control working', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByTestId('open-booking'))
    expect(screen.getByTestId('booking-modal')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /close booking dialog/i }))
    expect(screen.queryByTestId('booking-modal')).toBeNull()
  })

  it('keeps the booking section itself on the page', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /your first visit, booked in about a minute/i })).toBeInTheDocument()
    expect(screen.getByText(/three chairs are still open for new patients/i)).toBeInTheDocument()
    expect(screen.getAllByText(/tuesday · 7:00 am/i).length).toBeGreaterThanOrEqual(1)
  })

  it('keeps the rest of the page intact', () => {
    render(<App />)
    const doc = document
    expect(doc.querySelectorAll('section, header, footer').length).toBeGreaterThanOrEqual(11)
    expect(doc.querySelectorAll('h1, h2, h3').length).toBeGreaterThanOrEqual(40)
    expect(doc.querySelectorAll('a, button, input, select, textarea').length).toBeGreaterThanOrEqual(30)
    expect(doc.querySelectorAll('svg').length).toBeGreaterThanOrEqual(40)
    expect((doc.body.textContent || '').split(/\s+/).length).toBeGreaterThanOrEqual(2100)
  })
})
