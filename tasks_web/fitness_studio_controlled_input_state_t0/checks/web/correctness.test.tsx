import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

const nameField = () => screen.getByLabelText(/full name/i)
const emailField = () => screen.getByLabelText(/email address/i)
const phoneField = () => screen.getByLabelText(/mobile number/i)
const goalField = () => screen.getByLabelText(/next eight weeks/i)
const submitButton = () => screen.getByRole('button', { name: /book my trial fortnight/i })
const preview = () => screen.getByTestId('pass-preview')
const counterValue = () =>
  Number((screen.getByTestId('goal-counter').textContent || '').replace(/\D/g, ''))

describe('Ashgrove Barbell Club landing — structure', () => {
  it('leads with the club headline', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: /name written at the top/i }),
    ).toBeInTheDocument()
  })

  it('offers the trial pass form with all of its fields', () => {
    render(<App />)
    expect(screen.getByTestId('trial-form')).toBeInTheDocument()
    expect(nameField()).toBeInTheDocument()
    expect(emailField()).toBeInTheDocument()
    expect(phoneField()).toBeInTheDocument()
    expect(goalField()).toBeInTheDocument()
    expect(submitButton()).toBeInTheDocument()
  })

  it('renders a footer landmark', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})

describe('Ashgrove trial pass form — the fields keep what you type (the defect)', () => {
  it('shows the name as it is typed', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(nameField(), 'Marisol Vega')
    expect(nameField()).toHaveValue('Marisol Vega')
  })

  it('shows the email address as it is typed', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(emailField(), 'marisol@kempstreet.co')
    expect(emailField()).toHaveValue('marisol@kempstreet.co')
  })

  it('shows the mobile number as it is typed', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(phoneField(), '5550419')
    expect(phoneField()).toHaveValue('5550419')
  })

  it('keeps the whole sentence typed into the goal field', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(goalField(), 'Deadlift my own bodyweight by spring.')
    expect(goalField()).toHaveValue('Deadlift my own bodyweight by spring.')
  })

  it('fills the pass preview in as the visitor types', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(nameField(), 'Ilse Bergstrom')
    await user.type(emailField(), 'ilse@kempstreet.co')
    expect(within(preview()).getByText('Ilse Bergstrom')).toBeInTheDocument()
    expect(within(preview()).getByText('ilse@kempstreet.co')).toBeInTheDocument()
  })

  it('counts the remaining characters down while the goal is written', async () => {
    const user = userEvent.setup()
    render(<App />)
    const before = counterValue()
    await user.type(goalField(), 'Carry the shopping at eighty')
    expect(counterValue()).toBe(before - 'Carry the shopping at eighty'.length)
  })

  it('unlocks the submit button once a name and an email are present', async () => {
    const user = userEvent.setup()
    render(<App />)
    expect(submitButton()).toBeDisabled()
    await user.type(nameField(), 'Andrew Quist')
    await user.type(emailField(), 'andrew@kempstreet.co')
    expect(submitButton()).toBeEnabled()
  })

  it('confirms the booking back to the visitor by name', async () => {
    const user = userEvent.setup()
    render(<App />)
    expect(screen.queryByTestId('trial-confirmation')).toBeNull()
    await user.type(nameField(), 'Colleen Baptiste')
    await user.type(emailField(), 'colleen@kempstreet.co')
    await user.click(submitButton())
    const confirmation = screen.getByTestId('trial-confirmation')
    expect(confirmation).toHaveTextContent(/Colleen Baptiste/)
    expect(confirmation).toHaveTextContent(/colleen@kempstreet\.co/)
  })
})
