import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

const tabs = () => screen.getAllByRole('tab')
const panels = () => screen.queryAllByTestId('menu-panel')

describe('Saffron Row landing — structure', () => {
  it('renders the restaurant name', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: /saffron row/i })).toBeInTheDocument()
  })

  it('offers the three menus as tabs', () => {
    render(<App />)
    expect(tabs().map((t) => t.textContent)).toEqual(['Lunch', 'Dinner', 'Drinks'])
  })

  it('renders a footer landmark', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})

describe('Saffron Row menu — one menu at a time (the defect)', () => {
  it('shows exactly one menu panel on first load', () => {
    render(<App />)
    expect(panels()).toHaveLength(1)
  })

  it('starts on the lunch menu', () => {
    render(<App />)
    const panel = screen.getByTestId('menu-panel')
    expect(within(panel).getByText(/za'atar flatbread/i)).toBeInTheDocument()
    expect(within(panel).queryByText(/lamb shoulder/i)).toBeNull()
  })

  it('shows only the dinner menu after choosing Dinner', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('tab', { name: 'Dinner' }))
    expect(panels()).toHaveLength(1)
    const panel = screen.getByTestId('menu-panel')
    expect(within(panel).getByText(/lamb shoulder/i)).toBeInTheDocument()
    expect(within(panel).queryByText(/za'atar flatbread/i)).toBeNull()
  })

  it('replaces the dinner menu when Drinks is chosen', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('tab', { name: 'Dinner' }))
    await user.click(screen.getByRole('tab', { name: 'Drinks' }))
    expect(panels()).toHaveLength(1)
    const panel = screen.getByTestId('menu-panel')
    expect(within(panel).getByText(/fig leaf spritz/i)).toBeInTheDocument()
    expect(within(panel).queryByText(/lamb shoulder/i)).toBeNull()
  })

  it('marks exactly the chosen tab as selected', async () => {
    const user = userEvent.setup()
    render(<App />)
    const selected = () => tabs().filter((t) => t.getAttribute('aria-selected') === 'true')
    expect(selected()).toHaveLength(1)
    expect(selected()[0]).toHaveTextContent('Lunch')
    await user.click(screen.getByRole('tab', { name: 'Dinner' }))
    expect(selected()).toHaveLength(1)
    expect(selected()[0]).toHaveTextContent('Dinner')
  })
})
