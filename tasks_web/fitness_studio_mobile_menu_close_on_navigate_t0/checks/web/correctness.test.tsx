import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

const drawer = () => screen.queryByTestId('mobile-menu')
const toggle = () => screen.getByTestId('nav-toggle')

const DESTINATIONS = ['classes', 'timetable', 'method', 'instructors', 'memberships']

async function openDrawer(user: ReturnType<typeof userEvent.setup>) {
  await user.click(toggle())
  const opened = drawer()
  expect(opened).not.toBeNull()
  return opened as HTMLElement
}

describe('Sundial Movement Studio landing — structure', () => {
  it('renders the studio name as the page heading', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: /sundial movement studio/i }),
    ).toBeInTheDocument()
  })

  it('puts the menu toggle in the site header', () => {
    render(<App />)
    const banner = screen.getByRole('banner')
    expect(within(banner).getByTestId('nav-toggle')).toBeInTheDocument()
  })

  it('renders a footer landmark', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})

describe('Sundial Movement Studio menu — choosing a destination puts the drawer away', () => {
  it('closes the drawer after tapping Timetable', async () => {
    const user = userEvent.setup()
    render(<App />)
    const opened = await openDrawer(user)
    await user.click(within(opened).getByTestId('mobile-menu-link-timetable'))
    expect(drawer()).toBeNull()
  })

  it('closes the drawer whichever destination is tapped', async () => {
    const user = userEvent.setup()
    render(<App />)
    for (const destination of DESTINATIONS) {
      const opened = await openDrawer(user)
      await user.click(within(opened).getByTestId(`mobile-menu-link-${destination}`))
      expect(drawer()).toBeNull()
    }
  })

  it('closes the drawer when the booking action inside it is tapped', async () => {
    const user = userEvent.setup()
    render(<App />)
    const opened = await openDrawer(user)
    await user.click(within(opened).getByTestId('mobile-menu-cta'))
    expect(drawer()).toBeNull()
  })

  it('leaves nothing from the drawer on top of the page', async () => {
    const user = userEvent.setup()
    render(<App />)
    const opened = await openDrawer(user)
    await user.click(within(opened).getByTestId('mobile-menu-link-method'))
    expect(screen.queryByTestId('mobile-menu-cta')).toBeNull()
    expect(screen.queryByTestId('mobile-menu-close')).toBeNull()
    expect(screen.queryAllByTestId(/^mobile-menu-link-/)).toHaveLength(0)
  })

  it('reports the menu as collapsed again once a destination is chosen', async () => {
    const user = userEvent.setup()
    render(<App />)
    const opened = await openDrawer(user)
    expect(toggle()).toHaveAttribute('aria-expanded', 'true')
    await user.click(within(opened).getByTestId('mobile-menu-link-classes'))
    expect(toggle()).toHaveAttribute('aria-expanded', 'false')
  })

  it('can be opened again after a destination was chosen', async () => {
    const user = userEvent.setup()
    render(<App />)
    const opened = await openDrawer(user)
    await user.click(within(opened).getByTestId('mobile-menu-link-memberships'))
    expect(drawer()).toBeNull()
    const reopened = await openDrawer(user)
    expect(within(reopened).getByTestId('mobile-menu-link-classes')).toBeInTheDocument()
  })
})
