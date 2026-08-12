import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

const NOTE = 'No walnuts for one of us, please'

const guestField = () => screen.getByLabelText('Name for the reservation')
const emailField = () => screen.getByLabelText('Email address')
const eveningField = () => screen.getByLabelText('Which evening are you hoping for?')
const partyField = () => screen.getByLabelText('How many at the table?')
const noteField = () => screen.getByLabelText('Anything the kitchen should know?')

describe('Tamada landing — structure', () => {
  it('renders the restaurant behind a top-level heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getAllByText(/tamada/i).length).toBeGreaterThan(0)
  })

  it('offers a reservation request form with every field labelled', () => {
    render(<App />)
    expect(guestField()).toBeInTheDocument()
    expect(emailField()).toBeInTheDocument()
    expect(eveningField()).toBeInTheDocument()
    expect(partyField()).toBeInTheDocument()
    expect(noteField()).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send the request/i })).toBeInTheDocument()
  })

  it('renders a footer landmark', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})

describe('Tamada reservation form — the fields keep what the guest types', () => {
  it('shows the name a guest types into the name field', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(guestField(), 'Marlena Ruiz')
    expect(guestField()).toHaveValue('Marlena Ruiz')
  })

  it('shows the email a guest types into the email field', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(emailField(), 'marlena.ruiz@fernhollow.test')
    expect(emailField()).toHaveValue('marlena.ruiz@fernhollow.test')
  })

  it('keeps every field separate as the guest fills the form in', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(guestField(), 'Marlena Ruiz')
    await user.type(eveningField(), 'Friday 20 March')
    expect(guestField()).toHaveValue('Marlena Ruiz')
    expect(eveningField()).toHaveValue('Friday 20 March')
  })

  it('shows the note typed for the kitchen and counts its characters', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(noteField(), NOTE)
    expect(noteField()).toHaveValue(NOTE)
    expect(screen.getByTestId('note-count')).toHaveTextContent(`${NOTE.length}/240`)
  })

  it('keeps the party size a guest chooses', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.selectOptions(partyField(), '6')
    expect(partyField()).toHaveValue('6')
  })

  it('rewrites the running summary as the guest types', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(guestField(), 'Marlena Ruiz')
    await user.type(eveningField(), 'Friday 20 March')
    await user.selectOptions(partyField(), '6')
    const summary = screen.getByTestId('reservation-summary')
    expect(summary).toHaveTextContent('Marlena Ruiz')
    expect(summary).toHaveTextContent('Friday 20 March')
    expect(summary).toHaveTextContent('6')
  })

  it('reads the guest details back once the request is sent', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(guestField(), 'Marlena Ruiz')
    await user.type(emailField(), 'marlena.ruiz@fernhollow.test')
    await user.type(eveningField(), 'Friday 20 March')
    await user.click(screen.getByRole('button', { name: /send the request/i }))
    const confirmation = screen.getByTestId('reservation-confirmation')
    expect(confirmation).toHaveTextContent('Marlena Ruiz')
    expect(confirmation).toHaveTextContent('marlena.ruiz@fernhollow.test')
    expect(confirmation).toHaveTextContent('Friday 20 March')
  })

  it('passes the note through to the sent request', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(guestField(), 'Marlena Ruiz')
    await user.type(noteField(), NOTE)
    await user.click(screen.getByRole('button', { name: /send the request/i }))
    expect(screen.getByTestId('confirmation-note')).toHaveTextContent(NOTE)
  })
})
