import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

// Block the vacuous pass: "the dialog is gone after an outside click or Escape"
// must not be satisfied by never opening it, by rendering an empty shell, or by
// dismissing it the moment the visitor touches something inside it.
describe('anti-cheat', () => {
  it('still opens a walkthrough request with all three volume bands', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByTestId('walkthrough-open'))
    const panel = screen.getByRole('dialog')
    expect(within(panel).getAllByTestId('volume-option')).toHaveLength(3)
    expect(panel).toHaveTextContent(/under 500 containers a year/i)
    expect(panel).toHaveTextContent(/over 5,000 containers a year/i)
  })

  it('keeps real content and a working close button in the request panel', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByTestId('walkthrough-open'))
    const panel = screen.getByRole('dialog')
    expect(within(panel).getByTestId('walkthrough-submit')).toBeInTheDocument()
    expect(panel).toHaveTextContent(/\(253\) 555-0148/)
    await user.click(within(panel).getByTestId('walkthrough-close'))
    expect(screen.queryByRole('dialog')).toBeNull()
  })

  it('does not dismiss the panel when the visitor uses it', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByTestId('walkthrough-open'))
    const panel = screen.getByRole('dialog')
    await user.click(within(panel).getAllByTestId('volume-option')[1])
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    await user.click(within(panel).getByTestId('walkthrough-submit'))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('keeps the page intact', () => {
    render(<App />)
    const doc = document
    expect(doc.querySelectorAll('section, header, footer').length).toBeGreaterThanOrEqual(13)
    expect(doc.querySelectorAll('h1, h2, h3').length).toBeGreaterThanOrEqual(40)
    expect((doc.body.textContent || '').split(/\s+/).length).toBeGreaterThanOrEqual(2200)
    expect(screen.getAllByTestId('capability-card').length).toBeGreaterThanOrEqual(6)
    expect(screen.getAllByTestId('pricing-tier').length).toBeGreaterThanOrEqual(3)
  })
})
