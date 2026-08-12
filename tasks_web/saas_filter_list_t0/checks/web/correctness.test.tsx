import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

// Everything about the filter is asserted through the user's eyes: what is on
// the grid inside the template library after a category chip is pressed.
const gallery = () => screen.getByTestId('template-gallery')

const cards = () => within(gallery()).queryAllByTestId('template-card')

const cardNames = () =>
  cards().map((card) => within(card).getByRole('heading', { level: 3 }).textContent?.trim())

const chips = () => within(gallery()).getAllByTestId('template-chip')

const pick = async (user: ReturnType<typeof userEvent.setup>, label: string) => {
  await user.click(within(gallery()).getByRole('button', { name: label }))
}

const SALES = [
  'New logo handoff',
  'Quote approval chain',
  'Territory rebalance',
  'Renewal risk sweep',
]
const FINANCE = ['Vendor onboarding', 'Month-end close checklist', 'Expense exception review']
const SUPPORT = ['Escalation ladder', 'Refund authorization', 'Churn signal digest']
const SECURITY = ['Quarterly access review', 'Offboarding sweep']
const EVERYTHING = [...SALES, ...FINANCE, ...SUPPORT, ...SECURITY]

describe('Stonecrop landing — structure', () => {
  it('renders the hero headline as the page heading', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: /ops work your team keeps doing by hand/i }),
    ).toBeInTheDocument()
  })

  it('offers the five template categories', () => {
    render(<App />)
    expect(chips().map((chip) => chip.textContent?.trim())).toEqual([
      'All',
      'Sales',
      'Finance',
      'Support',
      'Security',
    ])
  })

  it('renders a footer landmark', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})

describe('Stonecrop template library — the category filter (the defect)', () => {
  it('narrows the grid to the sales templates', async () => {
    const user = userEvent.setup()
    render(<App />)
    await pick(user, 'Sales')
    expect(cardNames()).toEqual(SALES)
  })

  it('narrows the grid to the finance templates and drops the rest', async () => {
    const user = userEvent.setup()
    render(<App />)
    await pick(user, 'Finance')
    expect(cardNames()).toEqual(FINANCE)
    expect(within(gallery()).queryByText('New logo handoff')).toBeNull()
    expect(within(gallery()).queryByText('Escalation ladder')).toBeNull()
  })

  it('narrows the grid to the two security templates', async () => {
    const user = userEvent.setup()
    render(<App />)
    await pick(user, 'Security')
    expect(cardNames()).toEqual(SECURITY)
  })

  it('leaves no stale cards behind when one category replaces another', async () => {
    const user = userEvent.setup()
    render(<App />)
    await pick(user, 'Sales')
    await pick(user, 'Support')
    expect(cardNames()).toEqual(SUPPORT)
    expect(within(gallery()).queryByText('Renewal risk sweep')).toBeNull()
  })

  it('restores the whole library when All is chosen again', async () => {
    const user = userEvent.setup()
    render(<App />)
    await pick(user, 'Security')
    expect(cards()).toHaveLength(SECURITY.length)
    await pick(user, 'All')
    expect(cardNames()).toHaveLength(EVERYTHING.length)
    for (const name of EVERYTHING) {
      expect(within(gallery()).getByText(name)).toBeInTheDocument()
    }
  })

  it('keeps the count line in step with what is on the grid', async () => {
    const user = userEvent.setup()
    render(<App />)
    await pick(user, 'Finance')
    expect(screen.getByTestId('gallery-count')).toHaveTextContent(/showing\s+3\s+of\s+12/i)
    expect(cards()).toHaveLength(3)
  })
})
