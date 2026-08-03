import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

const nameField = () => screen.getByLabelText(/^full name$/i)
const emailField = () => screen.getByLabelText(/^email address$/i)
const phoneField = () => screen.getByLabelText(/^phone number$/i)
const reasonField = () => screen.getByLabelText(/what is this visit for/i)
const submitButton = () => screen.getByTestId('booking-submit')
const confirmation = () => screen.queryByTestId('booking-success')

/** Validation messages, however the page chooses to mark them up. */
const errorMessages = () => {
  const flagged = screen.queryAllByTestId('field-error')
  return flagged.length > 0 ? flagged : screen.queryAllByRole('alert')
}

async function fillValidRequest(user: ReturnType<typeof userEvent.setup>) {
  await user.type(nameField(), 'Priya Raghunathan')
  await user.type(emailField(), 'priya@kestrelmail.com')
  await user.type(phoneField(), '2065550188')
  await user.selectOptions(reasonField(), 'New patient exam and clean')
}

describe('Alder Court Dental page — structure', () => {
  it('leads with the practice headline', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: /runs on time/i })).toBeInTheDocument()
  })

  it('asks the patient for their contact details and a reason', () => {
    render(<App />)
    expect(nameField()).toBeInTheDocument()
    expect(emailField()).toBeInTheDocument()
    expect(phoneField()).toBeInTheDocument()
    expect(reasonField()).toBeInTheDocument()
  })

  it('renders a footer landmark', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})

describe('Appointment request — incomplete requests are refused (the defect)', () => {
  it('does not confirm anything when an empty form is sent', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(submitButton())
    expect(confirmation()).toBeNull()
  })

  it('shows a message for every detail it still needs', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(submitButton())
    const messages = errorMessages()
    expect(messages.length).toBeGreaterThanOrEqual(4)
    for (const message of messages) {
      expect((message.textContent || '').trim().length).toBeGreaterThan(0)
    }
  })

  it('tells assistive technology which fields are at fault', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(submitButton())
    expect(nameField()).toHaveAttribute('aria-invalid', 'true')
    expect(emailField()).toHaveAttribute('aria-invalid', 'true')
    expect(phoneField()).toHaveAttribute('aria-invalid', 'true')
  })

  it('refuses an email address that is not an email address', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(nameField(), 'Doug Whitfield')
    await user.type(emailField(), 'doug.whitfield.at.kestrelmail')
    await user.type(phoneField(), '2065550171')
    await user.selectOptions(reasonField(), 'Toothache or something broken')
    await user.click(submitButton())
    expect(confirmation()).toBeNull()
    expect(errorMessages().length).toBeGreaterThanOrEqual(1)
  })

  it('refuses a phone number too short to call back', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(nameField(), 'Alina Mercado')
    await user.type(emailField(), 'alina@bellviewpost.com')
    await user.type(phoneField(), '5550')
    await user.selectOptions(reasonField(), "Child's first visit")
    await user.click(submitButton())
    expect(confirmation()).toBeNull()
    expect(errorMessages().length).toBeGreaterThanOrEqual(1)
  })

  it('keeps the half-filled form on screen instead of clearing it away', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(nameField(), 'Priya Raghunathan')
    await user.click(submitButton())
    expect(confirmation()).toBeNull()
    expect(nameField()).toHaveValue('Priya Raghunathan')
  })

  it('confirms the request once the missing details are supplied', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(submitButton())
    expect(confirmation()).toBeNull()

    await fillValidRequest(user)
    await user.click(submitButton())

    const panel = confirmation()
    expect(panel).not.toBeNull()
    expect(within(panel as HTMLElement).getByRole('heading', { name: /priya/i })).toBeInTheDocument()
    expect(errorMessages()).toHaveLength(0)
  })
})
