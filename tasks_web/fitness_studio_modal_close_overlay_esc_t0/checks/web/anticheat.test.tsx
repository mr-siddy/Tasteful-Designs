import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

// Block the vacuous pass: "the dialog is gone after a click on the backdrop"
// must not be satisfied by never opening one, by gutting what is inside it, or
// by dropping the close control that already worked.
describe('anti-cheat', () => {
  it('still opens a real intro dialog from the booking button', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByTestId('open-intro'))

    const panel = screen.getByTestId('intro-modal')
    expect(panel).toHaveAttribute('role', 'dialog')
    expect(within(panel).getByText(/claim your intro ride/i)).toBeInTheDocument()
    expect(within(panel).getByText(/£9 · 45 minutes/i)).toBeInTheDocument()
  })

  it('keeps the request form inside the dialog', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByTestId('open-intro'))
    const panel = within(screen.getByTestId('intro-modal'))

    expect(panel.getByLabelText(/your name/i)).toBeInTheDocument()
    expect(panel.getByLabelText(/mobile number/i)).toBeInTheDocument()
    expect(panel.getByLabelText(/which session suits you/i)).toBeInTheDocument()
    expect(panel.getByLabelText(/anything the coach should know/i)).toBeInTheDocument()
    expect(panel.getByRole('button', { name: /send the request/i })).toBeInTheDocument()
    expect(panel.getAllByRole('option').length).toBeGreaterThanOrEqual(4)
  })

  it('keeps the close control working', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByTestId('open-intro'))
    expect(screen.getByTestId('intro-modal')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /close the intro ride form/i }))
    expect(screen.queryByTestId('intro-modal')).toBeNull()
  })

  it('keeps the intro ride section itself on the page', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { name: /your first ride costs £9/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/three bikes are still open on thursday evening/i)).toBeInTheDocument()
    expect(screen.getAllByTestId('intro-slot').length).toBeGreaterThanOrEqual(4)
  })

  it('keeps the rest of the page intact', () => {
    render(<App />)
    const doc = document
    expect(doc.querySelectorAll('section, header, footer').length).toBeGreaterThanOrEqual(11)
    expect(doc.querySelectorAll('h1, h2, h3').length).toBeGreaterThanOrEqual(40)
    expect(doc.querySelectorAll('a, button, input, select, textarea').length).toBeGreaterThanOrEqual(30)
    expect(doc.querySelectorAll('svg').length).toBeGreaterThanOrEqual(50)
    expect((doc.body.textContent || '').split(/\s+/).length).toBeGreaterThanOrEqual(2100)
  })
})
