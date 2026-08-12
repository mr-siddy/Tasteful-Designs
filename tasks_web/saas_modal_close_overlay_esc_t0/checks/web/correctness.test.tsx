import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

const dialog = () => screen.queryByRole('dialog')
const overlay = () => screen.queryByTestId('walkthrough-overlay')

const openDialog = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.click(screen.getByTestId('walkthrough-open'))
  return screen.getByRole('dialog')
}

describe('Portway landing — structure', () => {
  it('renders the product name in the hero heading', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: /portway files the customs paperwork/i }),
    ).toBeInTheDocument()
  })

  it('opens the walkthrough request from the booking button', async () => {
    const user = userEvent.setup()
    render(<App />)
    expect(dialog()).toBeNull()
    await user.click(screen.getByTestId('walkthrough-open'))
    expect(screen.getByRole('dialog')).toHaveTextContent(/book a portway walkthrough/i)
  })

  it('renders a footer landmark', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})

describe('Portway walkthrough request — dismissing it (the defect)', () => {
  it('closes when the dimmed page behind it is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    await openDialog(user)
    await user.click(screen.getByTestId('walkthrough-overlay'))
    expect(dialog()).toBeNull()
  })

  it('takes the dimmed backdrop away with it on an outside click', async () => {
    const user = userEvent.setup()
    render(<App />)
    await openDialog(user)
    await user.click(screen.getByTestId('walkthrough-overlay'))
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
    await user.click(screen.getByTestId('walkthrough-overlay'))
    expect(dialog()).toBeNull()
    await openDialog(user)
    await user.keyboard('{Escape}')
    expect(dialog()).toBeNull()
  })

  it('still dismisses after the visitor has picked a different volume band', async () => {
    const user = userEvent.setup()
    render(<App />)
    const panel = await openDialog(user)
    const bands = screen.getAllByTestId('volume-option')
    await user.click(bands[bands.length - 1])
    expect(panel).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(dialog()).toBeNull()
  })
})
