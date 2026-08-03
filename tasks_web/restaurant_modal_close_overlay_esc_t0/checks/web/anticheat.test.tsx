import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

// Block the vacuous pass: "the dialog is gone after an outside click or Escape"
// must not be satisfied by never opening it, by rendering an empty shell, or by
// dismissing it whenever the guest touches something inside it.
describe('anti-cheat', () => {
  it('still opens a reservation panel with all three rooms', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByTestId('reserve-open'))
    const panel = screen.getByRole('dialog')
    expect(within(panel).getAllByTestId('seat-option')).toHaveLength(3)
    expect(panel).toHaveTextContent(/main dining room/i)
    expect(panel).toHaveTextContent(/lantern room/i)
  })

  it('keeps real content and a working close button in the panel', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByTestId('reserve-open'))
    const panel = screen.getByRole('dialog')
    expect(within(panel).getByTestId('reserve-submit')).toBeInTheDocument()
    expect(panel).toHaveTextContent(/\(555\) 0179/)
    await user.click(within(panel).getByTestId('reserve-close'))
    expect(screen.queryByRole('dialog')).toBeNull()
  })

  it('does not dismiss the panel when the guest uses it', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByTestId('reserve-open'))
    const panel = screen.getByRole('dialog')
    await user.click(within(panel).getAllByTestId('seat-option')[1])
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    await user.click(within(panel).getByTestId('reserve-submit'))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('keeps the page intact', () => {
    render(<App />)
    const doc = document
    expect(doc.querySelectorAll('section, header, footer').length).toBeGreaterThanOrEqual(12)
    expect(doc.querySelectorAll('h1, h2, h3').length).toBeGreaterThanOrEqual(30)
    expect((doc.body.textContent || '').split(/\s+/).length).toBeGreaterThanOrEqual(1800)
    expect(screen.getAllByTestId('menu-dish').length).toBeGreaterThanOrEqual(6)
  })
})
