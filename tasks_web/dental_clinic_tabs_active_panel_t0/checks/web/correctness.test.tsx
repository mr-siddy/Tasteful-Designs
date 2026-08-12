import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

const tabs = () => screen.getAllByRole('tab')
const selectedTabs = () => tabs().filter((t) => t.getAttribute('aria-selected') === 'true')
// Role queries drop anything hidden from the accessibility tree, so unmounting a
// panel, setting `hidden`, or setting aria-hidden all read the same way here.
const panels = () => screen.queryAllByRole('tabpanel')

describe('Marigold Dental landing — structure', () => {
  it('renders the practice name', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: /marigold dental co\./i })).toBeInTheDocument()
  })

  it('offers the four care pathways as tabs', () => {
    render(<App />)
    expect(tabs().map((t) => t.textContent)).toEqual(['Preventive', 'Cosmetic', 'Restorative', 'Emergency'])
  })

  it('renders a footer landmark', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})

describe('Marigold Dental care pathways — one pathway at a time (the defect)', () => {
  it('shows exactly one pathway panel on first load', () => {
    render(<App />)
    expect(panels()).toHaveLength(1)
  })

  it('opens on the preventive pathway', () => {
    render(<App />)
    const panel = screen.getByRole('tabpanel')
    expect(within(panel).getByText(/night guard for grinding/i)).toBeInTheDocument()
    expect(within(panel).queryByText(/enlighten whitening/i)).toBeNull()
  })

  it('shows only the cosmetic pathway after choosing the second tab', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(tabs()[1])
    expect(panels()).toHaveLength(1)
    const panel = screen.getByRole('tabpanel')
    expect(within(panel).getByText(/enlighten whitening/i)).toBeInTheDocument()
    expect(within(panel).queryByText(/night guard for grinding/i)).toBeNull()
    expect(within(panel).queryByText(/single implant/i)).toBeNull()
  })

  it('marks exactly the chosen tab as selected', async () => {
    const user = userEvent.setup()
    render(<App />)
    expect(selectedTabs()).toHaveLength(1)
    expect(selectedTabs()[0]).toHaveTextContent('Preventive')
    await user.click(tabs()[1])
    expect(selectedTabs()).toHaveLength(1)
    expect(selectedTabs()[0]).toHaveTextContent('Cosmetic')
  })

  it('pairs the panel that is showing with the tab that is selected', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(tabs()[1])
    const panel = screen.getByRole('tabpanel')
    const tab = selectedTabs()[0]
    const wiredByTab = Boolean(panel.id) && tab.getAttribute('aria-controls') === panel.id
    const wiredByPanel = Boolean(tab.id) && panel.getAttribute('aria-labelledby') === tab.id
    const namedPanel = /cosmetic/i.test(panel.getAttribute('aria-label') || '')
    expect(wiredByTab || wiredByPanel || namedPanel).toBe(true)
  })

  it('swaps the panel again for every other pathway', async () => {
    const user = userEvent.setup()
    render(<App />)
    const expected: [number, RegExp][] = [
      [2, /rebuilding what is already broken/i],
      [3, /pain today, not next tuesday/i],
      [0, /keep the teeth you already have/i],
    ]
    for (const [index, headline] of expected) {
      await user.click(tabs()[index])
      expect(panels()).toHaveLength(1)
      expect(within(screen.getByRole('tabpanel')).getByText(headline)).toBeInTheDocument()
    }
  })
})
