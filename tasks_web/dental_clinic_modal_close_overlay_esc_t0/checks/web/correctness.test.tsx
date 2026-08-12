import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

const trigger = () => screen.getByTestId('open-booking')
const overlay = () => screen.getByTestId('booking-overlay')
// Presence is read two ways on purpose: the test id catches a panel that is
// still mounted but hidden, the role catches one that is mounted and exposed.
const modal = () => screen.queryByTestId('booking-modal')
const dialog = () => screen.queryByRole('dialog')

const open = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.click(trigger())
  expect(modal()).toBeInTheDocument()
}

describe('Alder & Bay landing — structure', () => {
  it('renders the practice name', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: /alder & bay dental studio/i }),
    ).toBeInTheDocument()
  })

  it('opens the booking dialog from the new-patient button', async () => {
    const user = userEvent.setup()
    render(<App />)
    expect(modal()).toBeNull()
    await user.click(trigger())
    const panel = modal()
    expect(panel).toBeInTheDocument()
    expect(within(panel!).getByText(/reserve your new-patient visit/i)).toBeInTheDocument()
  })

  it('renders a footer landmark', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})

describe('Alder & Bay booking dialog — dismissing it (the defect)', () => {
  it('closes when the dimmed overlay behind it is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    await open(user)
    await user.click(overlay())
    expect(modal()).toBeNull()
  })

  it('closes when Escape is pressed', async () => {
    const user = userEvent.setup()
    render(<App />)
    await open(user)
    await user.keyboard('{Escape}')
    expect(modal()).toBeNull()
  })

  it('reopens and closes again on the second dismissal', async () => {
    const user = userEvent.setup()
    render(<App />)
    await open(user)
    await user.click(overlay())
    expect(modal()).toBeNull()

    await open(user)
    await user.keyboard('{Escape}')
    expect(modal()).toBeNull()
  })

  it('stays open while the click lands inside the dialog itself', async () => {
    const user = userEvent.setup()
    render(<App />)
    await open(user)

    await user.click(within(modal()!).getByText(/reserve your new-patient visit/i))
    expect(modal()).toBeInTheDocument()
    await user.click(within(modal()!).getByLabelText(/your name/i))
    expect(modal()).toBeInTheDocument()

    await user.click(overlay())
    expect(modal()).toBeNull()
  })

  it('only lets Escape act while the dialog is actually open', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.keyboard('{Escape}')
    expect(screen.getByRole('heading', { level: 1, name: /alder & bay dental studio/i })).toBeInTheDocument()
    expect(modal()).toBeNull()

    await open(user)
    await user.keyboard('{Escape}')
    expect(modal()).toBeNull()
  })

  it('takes the dismissed dialog out of the accessibility tree and leaves the page usable', async () => {
    const user = userEvent.setup()
    render(<App />)
    await open(user)
    expect(dialog()).toBeInTheDocument()

    await user.click(overlay())
    expect(dialog()).toBeNull()
    expect(screen.getByRole('heading', { name: /your first visit, booked in about a minute/i })).toBeInTheDocument()

    await user.click(trigger())
    expect(dialog()).toBeInTheDocument()
  })
})
