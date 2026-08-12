import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

const trigger = () => screen.getByTestId('open-intro')
const backdrop = () => screen.getByTestId('intro-overlay')
// Presence is read two ways on purpose: the test id catches a panel that is
// still mounted, the role catches one that is still exposed to assistive tech.
const panel = () => screen.queryByTestId('intro-modal')
const dialog = () => screen.queryByRole('dialog')

const openDialog = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.click(trigger())
  expect(panel()).toBeInTheDocument()
}

describe('Pressroom Athletic landing — structure', () => {
  it('renders the studio name', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: /pressroom athletic/i }),
    ).toBeInTheDocument()
  })

  it('opens the intro ride dialog from the booking button', async () => {
    const user = userEvent.setup()
    render(<App />)
    expect(panel()).toBeNull()
    await user.click(trigger())
    const dialogPanel = panel()
    expect(dialogPanel).toBeInTheDocument()
    expect(within(dialogPanel!).getByText(/claim your intro ride/i)).toBeInTheDocument()
  })

  it('renders a footer landmark', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})

describe('Pressroom Athletic intro dialog — getting rid of it (the defect)', () => {
  it('closes when the dimmed area behind it is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    await openDialog(user)

    await user.click(backdrop())
    expect(panel()).toBeNull()
  })

  it('closes when Escape is pressed', async () => {
    const user = userEvent.setup()
    render(<App />)
    await openDialog(user)

    await user.keyboard('{Escape}')
    expect(panel()).toBeNull()
  })

  it('can be reopened and dismissed a second time', async () => {
    const user = userEvent.setup()
    render(<App />)

    await openDialog(user)
    await user.click(backdrop())
    expect(panel()).toBeNull()

    await openDialog(user)
    await user.keyboard('{Escape}')
    expect(panel()).toBeNull()
  })

  it('stays open while the click lands inside the form itself', async () => {
    const user = userEvent.setup()
    render(<App />)
    await openDialog(user)

    await user.click(within(panel()!).getByText(/claim your intro ride/i))
    expect(panel()).toBeInTheDocument()
    await user.click(within(panel()!).getByLabelText(/your name/i))
    expect(panel()).toBeInTheDocument()

    await user.click(backdrop())
    expect(panel()).toBeNull()
  })

  it('only lets Escape act while the dialog is actually up', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.keyboard('{Escape}')
    expect(panel()).toBeNull()
    expect(screen.getByRole('heading', { level: 1, name: /pressroom athletic/i })).toBeInTheDocument()

    await openDialog(user)
    await user.keyboard('{Escape}')
    expect(panel()).toBeNull()
  })

  it('takes the dismissed dialog out of the accessibility tree and leaves the page usable', async () => {
    const user = userEvent.setup()
    render(<App />)
    await openDialog(user)
    expect(dialog()).toBeInTheDocument()

    await user.click(backdrop())
    expect(dialog()).toBeNull()
    expect(
      screen.getByRole('heading', { name: /your first ride costs £9/i }),
    ).toBeInTheDocument()

    await user.click(trigger())
    expect(dialog()).toBeInTheDocument()
  })
})
