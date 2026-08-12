import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

const tabs = () => screen.getAllByRole('tab')
const selectedTabs = () => tabs().filter((tab) => tab.getAttribute('aria-selected') === 'true')

describe('Tidemark Row Club landing — structure', () => {
  it('renders the hero headline as the page heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: /rowing is a skill/i })).toBeInTheDocument()
  })

  it('offers the three training tracks as tabs', () => {
    render(<App />)
    expect(tabs().map((tab) => tab.textContent)).toEqual(['Row', 'Strength', 'Restore'])
  })

  it('renders a footer landmark', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})

describe('Tidemark Row Club training tracks — one track at a time (the defect)', () => {
  it('shows exactly one track panel on first load', () => {
    render(<App />)
    expect(screen.getAllByRole('tabpanel')).toHaveLength(1)
  })

  it('opens on the Row track and nothing else', () => {
    render(<App />)
    const panel = screen.getByRole('tabpanel')
    expect(within(panel).getByText(/tidewater 45/i)).toBeInTheDocument()
    expect(within(panel).queryByText(/barbell base/i)).toBeNull()
    expect(within(panel).queryByText(/slack water/i)).toBeNull()
  })

  it('marks exactly the Row tab as selected on first load', () => {
    render(<App />)
    expect(selectedTabs()).toHaveLength(1)
    expect(selectedTabs()[0]).toHaveTextContent('Row')
  })

  it('shows only the second track once its tab is chosen', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(tabs()[1])
    expect(screen.getAllByRole('tabpanel')).toHaveLength(1)
    const panel = screen.getByRole('tabpanel')
    expect(within(panel).getByText(/barbell base/i)).toBeInTheDocument()
    expect(within(panel).getByText(/hinge clinic/i)).toBeInTheDocument()
    expect(within(panel).queryByText(/tidewater 45/i)).toBeNull()
  })

  it('marks exactly the second tab as selected once it is chosen', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(tabs()[1])
    expect(selectedTabs()).toHaveLength(1)
    expect(selectedTabs()[0]).toHaveTextContent('Strength')
  })

  it('replaces the strength track when Restore is chosen', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('tab', { name: 'Strength' }))
    await user.click(screen.getByRole('tab', { name: 'Restore' }))
    expect(screen.getAllByRole('tabpanel')).toHaveLength(1)
    const panel = screen.getByRole('tabpanel')
    expect(within(panel).getByText(/cedar & plunge/i)).toBeInTheDocument()
    expect(within(panel).queryByText(/barbell base/i)).toBeNull()
    expect(selectedTabs()).toHaveLength(1)
    expect(selectedTabs()[0]).toHaveTextContent('Restore')
  })
})
