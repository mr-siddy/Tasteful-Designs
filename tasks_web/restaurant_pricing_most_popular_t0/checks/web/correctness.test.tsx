import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

// Ember & Rye promotes exactly one private-dining package: the Chef's Table,
// the middle of the three in the row.
const PROMOTED = "Chef's Table"
const PROMOTED_POSITION = 1 // second card, in the order the packages are laid out
const ORDER = ['Hearthside', "Chef's Table", 'Full House']

const cards = () => screen.getAllByTestId('plan-card')
const badges = () => screen.queryAllByTestId('popular-badge')

function headingOf(card: HTMLElement): string {
  return (card.querySelector('h1, h2, h3, h4, h5, h6')?.textContent || '').trim()
}

function cardNamed(name: string): HTMLElement {
  const found = cards().find((card) =>
    Array.from(card.querySelectorAll('h1, h2, h3, h4, h5, h6')).some(
      (heading) => (heading.textContent || '').trim() === name,
    ),
  )
  if (!found) throw new Error(`no private-dining card is titled "${name}"`)
  return found
}

describe('Ember & Rye landing — structure', () => {
  it('renders the headline', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/meets the fire first/i)
  })

  it('offers the three private-dining packages in order', () => {
    render(<App />)
    expect(cards().map(headingOf)).toEqual(ORDER)
  })

  it('renders a footer landmark', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})

describe('Ember & Rye private dining — one promoted package (the defect)', () => {
  it('shows the most-popular badge exactly once on the page', () => {
    render(<App />)
    expect(badges()).toHaveLength(1)
  })

  it("puts that badge on the Chef's Table package", () => {
    render(<App />)
    expect(within(cardNamed(PROMOTED)).queryAllByTestId('popular-badge')).toHaveLength(1)
  })

  it('puts the badge on the second package in the row', () => {
    render(<App />)
    const promotedIndex = cards().findIndex(
      (card) => within(card).queryAllByTestId('popular-badge').length > 0,
    )
    expect(promotedIndex).toBe(PROMOTED_POSITION)
  })

  it("labels the Chef's Table badge as the most popular package", () => {
    render(<App />)
    expect(within(cardNamed(PROMOTED)).getByTestId('popular-badge')).toHaveTextContent(
      /most popular/i,
    )
  })

  it('leaves every other package without a badge', () => {
    render(<App />)
    for (const card of cards().filter((card) => headingOf(card) !== PROMOTED)) {
      expect(within(card).queryByTestId('popular-badge')).toBeNull()
    }
  })

  it('never calls another package the most popular one', () => {
    render(<App />)
    for (const card of cards().filter((card) => headingOf(card) !== PROMOTED)) {
      expect(card.textContent || '').not.toMatch(/most popular/i)
    }
  })

  it("keeps the badge on the Chef's Table at the weekend rate", async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByTestId('seating-weekend'))
    expect(badges()).toHaveLength(1)
    expect(within(cardNamed(PROMOTED)).queryAllByTestId('popular-badge')).toHaveLength(1)
  })

  it("still promotes only the Chef's Table back at the weeknight rate", async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByTestId('seating-weekend'))
    await user.click(screen.getByTestId('seating-weeknight'))
    expect(badges()).toHaveLength(1)
    expect(within(cardNamed(PROMOTED)).queryAllByTestId('popular-badge')).toHaveLength(1)
    expect(within(cardNamed('Full House')).queryByTestId('popular-badge')).toBeNull()
  })
})
