import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

// Block the vacuous pass: "the dialog is gone after an overlay click / Escape"
// must not be satisfied by never showing the dialog, by gutting the booking
// form, or by making it collapse on any stray interaction inside it.
describe('anti-cheat', () => {
  it('does not show the reservation dialog until the guest asks for it', () => {
    render(<App />)
    expect(screen.queryByTestId('reservation-modal')).toBeNull()
    expect(screen.getByTestId('reserve-cta')).toBeInTheDocument()
  })

  it('opens a labelled modal dialog with a dimmed overlay behind it', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByTestId('reserve-cta'))
    const panel = screen.getByTestId('reservation-modal')
    expect(panel).toHaveAttribute('role', 'dialog')
    expect(panel).toHaveAttribute('aria-modal', 'true')
    expect(within(panel).getByRole('heading', { name: /request a table/i })).toBeInTheDocument()
    expect(screen.getByTestId('reservation-overlay')).toBeInTheDocument()
  })

  it('keeps the whole booking form inside the dialog', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByTestId('reserve-cta'))
    const panel = screen.getByTestId('reservation-modal')
    expect(within(panel).getByLabelText(/full name/i)).toBeInTheDocument()
    expect(within(panel).getByLabelText(/^date$/i)).toBeInTheDocument()
    expect(within(panel).getByLabelText(/party size/i)).toBeInTheDocument()
    expect(within(panel).getByTestId('reservation-submit')).toBeInTheDocument()
  })

  it('still closes from the labelled close button', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByTestId('reserve-cta'))
    await user.click(screen.getByRole('button', { name: /close reservation form/i }))
    expect(screen.queryByTestId('reservation-modal')).toBeNull()
  })

  it('stays open while the guest works inside it', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByTestId('reserve-cta'))

    await user.click(screen.getByRole('heading', { name: /request a table/i }))
    expect(screen.queryByTestId('reservation-modal')).toBeInTheDocument()

    const name = screen.getByLabelText(/full name/i)
    await user.type(name, 'Rosa Herrera')
    expect(screen.queryByTestId('reservation-modal')).toBeInTheDocument()
    expect(name).toHaveValue('Rosa Herrera')

    await user.selectOptions(screen.getByLabelText(/party size/i), '4 guests')
    expect(screen.queryByTestId('reservation-modal')).toBeInTheDocument()

    await user.click(screen.getByTestId('reservation-submit'))
    expect(screen.queryByTestId('reservation-modal')).toBeInTheDocument()
  })
})
