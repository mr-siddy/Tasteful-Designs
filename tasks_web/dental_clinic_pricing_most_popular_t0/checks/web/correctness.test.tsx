import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

// Foxglove Dental Studio promotes exactly one in-house membership: Complete Care,
// the middle of the three plans and the $54-a-month one.
const PROMOTED = 'Complete Care'
const PROMOTED_POSITION = 1 // second card, in the order the plans are laid out
const ORDER = ['Bright Start', 'Complete Care', 'Whole Family']

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
  if (!found) throw new Error(`no membership card is titled "${name}"`)
  return found
}

function promotedCard(): HTMLElement | undefined {
  return cards().find((card) => within(card).queryAllByTestId('popular-badge').length > 0)
}

describe('Foxglove Dental Studio landing — structure', () => {
  it('renders the headline', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /pace of the person in the chair/i,
    )
  })

  it('offers the three memberships in order', () => {
    render(<App />)
    expect(cards().map(headingOf)).toEqual(ORDER)
  })

  it('renders a footer landmark', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})

describe('Foxglove memberships — one promoted plan (the defect)', () => {
  it('shows the most-popular badge exactly once on the page', () => {
    render(<App />)
    expect(badges()).toHaveLength(1)
  })

  it('puts that badge on the Complete Care membership', () => {
    render(<App />)
    expect(within(cardNamed(PROMOTED)).queryAllByTestId('popular-badge')).toHaveLength(1)
  })

  it('puts the badge on the second membership in the row', () => {
    render(<App />)
    expect(cards().findIndex((card) => within(card).queryAllByTestId('popular-badge').length > 0)).toBe(
      PROMOTED_POSITION,
    )
  })

  it('labels the Complete Care badge as the most popular plan', () => {
    render(<App />)
    expect(within(cardNamed(PROMOTED)).getByTestId('popular-badge')).toHaveTextContent(/most popular/i)
  })

  it('leaves every other membership without a badge', () => {
    render(<App />)
    for (const card of cards().filter((card) => headingOf(card) !== PROMOTED)) {
      expect(within(card).queryByTestId('popular-badge')).toBeNull()
    }
  })

  it('never calls another membership the most popular one', () => {
    render(<App />)
    for (const card of cards().filter((card) => headingOf(card) !== PROMOTED)) {
      expect(card.textContent || '').not.toMatch(/most popular/i)
    }
  })

  it('promotes the $54 a month membership, not the household plan', () => {
    render(<App />)
    const card = promotedCard()
    expect(card).toBeDefined()
    expect(within(card as HTMLElement).getByTestId('plan-price')).toHaveTextContent(/\$54\b/)
  })

  it('keeps the badge on Complete Care at the yearly rate', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByTestId('billing-yearly'))
    expect(badges()).toHaveLength(1)
    expect(within(cardNamed(PROMOTED)).queryAllByTestId('popular-badge')).toHaveLength(1)
  })

  it('still promotes only Complete Care back at the monthly rate', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByTestId('billing-yearly'))
    await user.click(screen.getByTestId('billing-monthly'))
    expect(badges()).toHaveLength(1)
    expect(within(cardNamed(PROMOTED)).queryAllByTestId('popular-badge')).toHaveLength(1)
    expect(within(cardNamed('Whole Family')).queryByTestId('popular-badge')).toBeNull()
  })
})
