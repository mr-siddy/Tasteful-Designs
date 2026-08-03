import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

const dialog = () => screen.queryByRole('dialog')
const overlay = () => screen.queryByTestId('reserve-overlay')

const openDialog = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.click(screen.getByTestId('reserve-open'))
  return screen.getByRole('dialog')
}

describe('Blue Iris landing — structure', () => {
  it('renders the supper club name', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: /blue iris supper club/i }),
    ).toBeInTheDocument()
  })

  it('opens the reservation panel from the reserve button', async () => {
    const user = userEvent.setup()
    render(<App />)
    expect(dialog()).toBeNull()
    await user.click(screen.getByTestId('reserve-open'))
    expect(screen.getByRole('dialog')).toHaveTextContent(/reserve at the blue iris/i)
  })

  it('renders a footer landmark', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})

describe('Blue Iris reservation panel — dismissing it (the defect)', () => {
  it('closes when the dimmed page behind it is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    await openDialog(user)
    await user.click(screen.getByTestId('reserve-overlay'))
    expect(dialog()).toBeNull()
  })

  it('takes the dimmed backdrop away with it on an outside click', async () => {
    const user = userEvent.setup()
    render(<App />)
    await openDialog(user)
    await user.click(screen.getByTestId('reserve-overlay'))
    expect(overlay()).toBeNull()
  })

  it('closes when Escape is pressed', async () => {
    const user = userEvent.setup()
    render(<App />)
    await openDialog(user)
    await user.keyboard('{Escape}')
    expect(dialog()).toBeNull()
  })

  it('takes the dimmed backdrop away with it on Escape', async () => {
    const user = userEvent.setup()
    render(<App />)
    await openDialog(user)
    await user.keyboard('{Escape}')
    expect(overlay()).toBeNull()
  })

  it('can be reopened after an outside click and dismissed again with Escape', async () => {
    const user = userEvent.setup()
    render(<App />)
    await openDialog(user)
    await user.click(screen.getByTestId('reserve-overlay'))
    expect(dialog()).toBeNull()
    await openDialog(user)
    await user.keyboard('{Escape}')
    expect(dialog()).toBeNull()
  })

  it('still dismisses after the guest has chosen a different room', async () => {
    const user = userEvent.setup()
    render(<App />)
    const panel = await openDialog(user)
    const rooms = screen.getAllByTestId('seat-option')
    await user.click(rooms[rooms.length - 1])
    expect(panel).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(dialog()).toBeNull()
  })
})
