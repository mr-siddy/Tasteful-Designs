import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

const DESTINATIONS = [
  'Treatments',
  'Same-day crowns',
  'Our dentists',
  'Membership',
  'Hours & parking',
]

const toggle = () => screen.getByTestId('nav-toggle')
const panel = () => screen.queryByTestId('mobile-menu')

async function openMenu(user: ReturnType<typeof userEvent.setup>) {
  await user.click(toggle())
  const open = screen.getByTestId('mobile-menu')
  expect(open).toBeInTheDocument()
  return open
}

describe('Foundry Row Dental landing — structure', () => {
  it('renders the practice name', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: /foundry row dental/i }),
    ).toBeInTheDocument()
  })

  it('offers a menu button for small screens', () => {
    render(<App />)
    expect(toggle()).toBeInTheDocument()
    expect(toggle()).toHaveAccessibleName(/menu/i)
  })

  it('renders a footer landmark', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})

describe('Foundry Row Dental nav — the phone menu gets out of the way (the defect)', () => {
  it('closes the menu when a destination is tapped', async () => {
    const user = userEvent.setup()
    render(<App />)
    const open = await openMenu(user)
    await user.click(within(open).getByText('Treatments'))
    expect(panel()).toBeNull()
  })

  it('closes the menu whichever destination is tapped', async () => {
    const user = userEvent.setup()
    render(<App />)
    for (const label of DESTINATIONS) {
      const open = await openMenu(user)
      await user.click(within(open).getByText(label))
      expect(panel()).toBeNull()
    }
  })

  it('stops covering the page once a destination is chosen', async () => {
    const user = userEvent.setup()
    render(<App />)
    const open = await openMenu(user)
    expect(screen.getByTestId('mobile-menu-backdrop')).toBeInTheDocument()
    await user.click(within(open).getByText('Our dentists'))
    expect(screen.queryByTestId('mobile-menu-backdrop')).toBeNull()
  })

  it('reports the menu as collapsed again after navigating', async () => {
    const user = userEvent.setup()
    render(<App />)
    const open = await openMenu(user)
    expect(toggle()).toHaveAttribute('aria-expanded', 'true')
    await user.click(within(open).getByText('Membership'))
    expect(toggle()).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the menu when the booking button inside it is tapped', async () => {
    const user = userEvent.setup()
    render(<App />)
    const open = await openMenu(user)
    await user.click(within(open).getByTestId('mobile-menu-cta'))
    expect(panel()).toBeNull()
  })

  it('opens again, with every destination, after one has been used', async () => {
    const user = userEvent.setup()
    render(<App />)
    const open = await openMenu(user)
    await user.click(within(open).getByText('Same-day crowns'))
    expect(panel()).toBeNull()

    const reopened = await openMenu(user)
    expect(within(reopened).getAllByTestId('mobile-nav-link').map((a) => a.textContent)).toEqual(
      DESTINATIONS,
    )
  })
})
