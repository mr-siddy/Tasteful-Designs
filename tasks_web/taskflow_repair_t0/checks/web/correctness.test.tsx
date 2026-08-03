import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

type User = ReturnType<typeof userEvent.setup>

const sheet = () => screen.queryByTestId('mobile-menu')
const toggle = () => screen.getByTestId('nav-toggle')

/** Tap the hamburger and confirm the navigation sheet is actually on screen. */
async function openSheet(user: User) {
  await user.click(toggle())
  const panel = sheet()
  expect(panel).toBeInTheDocument()
  return panel as HTMLElement
}

describe('Taskflow landing — structure', () => {
  it('renders the product name', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: /taskflow/i })).toBeInTheDocument()
  })

  it('offers a mobile navigation toggle in the header', () => {
    render(<App />)
    const button = toggle()
    expect(button).toBeInTheDocument()
    expect(button).toHaveAccessibleName()
  })

  it('renders a footer landmark', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})

describe('Taskflow mobile navigation — choosing a destination (the defect)', () => {
  it('puts the sheet away once a destination is chosen', async () => {
    const user = userEvent.setup()
    render(<App />)
    const panel = await openSheet(user)

    await user.click(within(panel).getAllByTestId('mobile-menu-link')[0])

    expect(sheet()).toBeNull()
  })

  it('puts the sheet away whichever destination is chosen', async () => {
    const user = userEvent.setup()
    render(<App />)

    const count = within(await openSheet(user)).getAllByTestId('mobile-menu-link').length
    expect(count).toBeGreaterThanOrEqual(4)
    await user.click(screen.getByTestId('mobile-menu-close'))

    for (let index = 0; index < count; index += 1) {
      const panel = await openSheet(user)
      await user.click(within(panel).getAllByTestId('mobile-menu-link')[index])
      expect(sheet()).toBeNull()
    }
  })

  it('clears the dimmed overlay so the page underneath is usable again', async () => {
    const user = userEvent.setup()
    render(<App />)
    const panel = await openSheet(user)
    expect(screen.queryByTestId('mobile-menu-overlay')).toBeInTheDocument()

    await user.click(within(panel).getAllByTestId('mobile-menu-link')[1])

    expect(screen.queryByTestId('mobile-menu-overlay')).toBeNull()
  })

  it('reports the menu as collapsed on the toggle afterwards', async () => {
    const user = userEvent.setup()
    render(<App />)
    const panel = await openSheet(user)
    expect(toggle()).toHaveAttribute('aria-expanded', 'true')

    await user.click(within(panel).getAllByTestId('mobile-menu-link')[2])

    expect(toggle()).toHaveAttribute('aria-expanded', 'false')
  })

  it('lets the sheet be opened again after a destination is chosen', async () => {
    const user = userEvent.setup()
    render(<App />)
    const first = await openSheet(user)
    await user.click(within(first).getAllByTestId('mobile-menu-link')[0])

    const second = await openSheet(user)

    expect(within(second).getAllByTestId('mobile-menu-link').length).toBeGreaterThanOrEqual(4)
  })

  it('puts the sheet away when its call to action is used', async () => {
    const user = userEvent.setup()
    render(<App />)
    const panel = await openSheet(user)

    await user.click(within(panel).getByTestId('mobile-menu-cta'))

    expect(sheet()).toBeNull()
  })
})
