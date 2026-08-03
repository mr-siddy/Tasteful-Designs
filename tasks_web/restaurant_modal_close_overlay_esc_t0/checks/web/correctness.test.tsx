import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

type User = ReturnType<typeof userEvent.setup>

const dialog = () => screen.queryByTestId('reservation-modal')

async function openReservation(user: User) {
  await user.click(screen.getByTestId('reserve-cta'))
  expect(dialog()).toBeInTheDocument()
}

describe('Copper Vine landing — structure', () => {
  it('renders the restaurant name', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: /copper vine/i })).toBeInTheDocument()
  })

  it('renders a footer landmark', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('opens the reservation dialog from the booking button', async () => {
    const user = userEvent.setup()
    render(<App />)
    expect(dialog()).toBeNull()
    await user.click(screen.getByTestId('reserve-cta'))
    expect(dialog()).toBeInTheDocument()
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })
})

describe('Copper Vine reservation dialog — dismissing it (the defect)', () => {
  it('closes when the dimmed overlay behind it is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    await openReservation(user)
    await user.click(screen.getByTestId('reservation-overlay'))
    expect(dialog()).toBeNull()
  })

  it('leaves the accessibility tree after an overlay click', async () => {
    const user = userEvent.setup()
    render(<App />)
    await openReservation(user)
    await user.click(screen.getByTestId('reservation-overlay'))
    expect(screen.queryByRole('dialog')).toBeNull()
    expect(screen.getByRole('heading', { level: 1, name: /copper vine/i })).toBeInTheDocument()
  })

  it('closes when Escape is pressed', async () => {
    const user = userEvent.setup()
    render(<App />)
    await openReservation(user)
    await user.keyboard('{Escape}')
    expect(dialog()).toBeNull()
  })

  it('closes with Escape again after being reopened', async () => {
    const user = userEvent.setup()
    render(<App />)
    await openReservation(user)
    await user.click(screen.getByTestId('reservation-overlay'))
    expect(dialog()).toBeNull()
    await openReservation(user)
    await user.keyboard('{Escape}')
    expect(dialog()).toBeNull()
  })

  it('can be reopened after being dismissed with Escape', async () => {
    const user = userEvent.setup()
    render(<App />)
    await openReservation(user)
    await user.keyboard('{Escape}')
    expect(dialog()).toBeNull()
    await user.click(screen.getByTestId('reserve-cta'))
    expect(dialog()).toBeInTheDocument()
  })

  it('closes on Escape once the guest has started filling the form', async () => {
    const user = userEvent.setup()
    render(<App />)
    await openReservation(user)
    await user.type(screen.getByLabelText(/full name/i), 'Rosa Herrera')
    await user.keyboard('{Escape}')
    expect(dialog()).toBeNull()
  })
})
