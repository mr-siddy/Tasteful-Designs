import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

const tabs = () => screen.getAllByRole('tab')
const openPanels = () => screen.queryAllByRole('tabpanel')
const selectedTabs = () => tabs().filter((tab) => tab.getAttribute('aria-selected') === 'true')

/** The one menu a guest can actually read right now. */
function visiblePanel() {
  const open = openPanels()
  expect(open).toHaveLength(1)
  return open[0]
}

describe('Casa Marisol landing — structure', () => {
  it('renders the restaurant behind a top-level heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getAllByText(/casa marisol/i).length).toBeGreaterThan(0)
  })

  it('offers the four menus as tabs', () => {
    render(<App />)
    expect(tabs().map((tab) => tab.textContent)).toEqual(['Lunch', 'Dinner', 'Bar', 'Sunday Rice'])
  })

  it('renders a footer landmark', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})

describe('Casa Marisol menus — one menu at a time', () => {
  it('shows exactly one menu on first load', () => {
    render(<App />)
    expect(openPanels()).toHaveLength(1)
  })

  it('opens on the lunch menu', () => {
    render(<App />)
    const panel = visiblePanel()
    expect(within(panel).getByText(/fideuà of the day/i)).toBeInTheDocument()
    expect(within(panel).queryByText(/lamb shoulder from the ember box/i)).toBeNull()
  })

  it('marks exactly the lunch tab as selected on first load', () => {
    render(<App />)
    expect(selectedTabs()).toHaveLength(1)
    expect(selectedTabs()[0]).toHaveTextContent('Lunch')
  })

  it('shows only the second menu after choosing the second tab', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(tabs()[1])
    const panel = visiblePanel()
    expect(within(panel).getByRole('heading', { name: 'Dinner' })).toBeInTheDocument()
    expect(within(panel).getByText(/lamb shoulder from the ember box/i)).toBeInTheDocument()
    expect(within(panel).queryByText(/fideuà of the day/i)).toBeNull()
  })

  it('marks exactly the second tab as selected after choosing it', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(tabs()[1])
    expect(selectedTabs()).toHaveLength(1)
    expect(selectedTabs()[0]).toHaveTextContent('Dinner')
  })

  it('replaces the open menu instead of stacking another one below it', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('tab', { name: 'Dinner' }))
    await user.click(screen.getByRole('tab', { name: 'Sunday Rice' }))
    const panel = visiblePanel()
    expect(within(panel).getByText(/arròs negre/i)).toBeInTheDocument()
    expect(within(panel).queryByText(/lamb shoulder from the ember box/i)).toBeNull()
    expect(selectedTabs()).toHaveLength(1)
    expect(selectedTabs()[0]).toHaveTextContent('Sunday Rice')
  })
})
