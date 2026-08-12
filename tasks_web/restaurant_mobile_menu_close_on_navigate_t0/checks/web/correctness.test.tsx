import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

const toggle = () => screen.getByTestId('nav-toggle')
const panel = () => screen.queryByTestId('mobile-menu')

/**
 * The panel counts as showing only if it is on the page and not hidden. An
 * implementation may unmount it or hide it outright — either is a real close.
 */
const menuIsShowing = () => {
  const el = panel()
  if (el === null) return false
  if (el.hasAttribute('hidden')) return false
  return el.style.display !== 'none'
}

const openMenu = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.click(toggle())
  expect(menuIsShowing()).toBe(true)
  return screen.getByTestId('mobile-menu')
}

describe('Copperfern landing — structure', () => {
  it('renders the restaurant name', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: /copperfern/i })).toBeInTheDocument()
  })

  it('renders a footer landmark', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('opens the mobile menu from the header toggle', async () => {
    const user = userEvent.setup()
    render(<App />)
    expect(menuIsShowing()).toBe(false)
    await user.click(toggle())
    expect(menuIsShowing()).toBe(true)
    expect(screen.getAllByTestId('mobile-nav-link').length).toBeGreaterThanOrEqual(4)
  })
})

describe('Copperfern mobile menu — choosing a destination closes it (the defect)', () => {
  it('closes the menu when a destination is tapped', async () => {
    const user = userEvent.setup()
    render(<App />)
    const menu = await openMenu(user)
    await user.click(within(menu).getAllByTestId('mobile-nav-link')[0])
    expect(panel()).toBeNull()
  })

  it('closes the menu whichever destination is tapped', async () => {
    const user = userEvent.setup()
    render(<App />)
    const first = await openMenu(user)
    const labels = within(first)
      .getAllByTestId('mobile-nav-link')
      .map((link) => link.textContent || '')
    for (const label of labels) {
      const menu = menuIsShowing() ? screen.getByTestId('mobile-menu') : await openMenu(user)
      await user.click(within(menu).getByText(label))
      expect(menuIsShowing()).toBe(false)
    }
  })

  it('closes the menu when the reserve action inside it is tapped', async () => {
    const user = userEvent.setup()
    render(<App />)
    const menu = await openMenu(user)
    await user.click(within(menu).getByTestId('mobile-nav-cta'))
    expect(panel()).toBeNull()
  })

  it('leaves nothing of the menu covering the page afterwards', async () => {
    const user = userEvent.setup()
    render(<App />)
    const menu = await openMenu(user)
    await user.click(within(menu).getAllByTestId('mobile-nav-link')[1])
    expect(screen.queryAllByTestId('mobile-nav-link')).toHaveLength(0)
    expect(screen.queryByTestId('mobile-nav-cta')).toBeNull()
  })

  it('reports the menu as collapsed on the toggle once a destination is tapped', async () => {
    const user = userEvent.setup()
    render(<App />)
    const menu = await openMenu(user)
    expect(toggle()).toHaveAttribute('aria-expanded', 'true')
    await user.click(within(menu).getAllByTestId('mobile-nav-link')[0])
    expect(toggle()).toHaveAttribute('aria-expanded', 'false')
  })

  it('can be opened again after a destination closed it', async () => {
    const user = userEvent.setup()
    render(<App />)
    const first = await openMenu(user)
    await user.click(within(first).getAllByTestId('mobile-nav-link')[0])
    expect(menuIsShowing()).toBe(false)
    const second = await openMenu(user)
    await user.click(within(second).getAllByTestId('mobile-nav-link')[2])
    expect(menuIsShowing()).toBe(false)
  })
})
