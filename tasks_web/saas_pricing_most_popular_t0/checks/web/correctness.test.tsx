import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

// Copperline promotes exactly one tier: Crew, the middle plan of three.
const PROMOTED = 'Crew'
const PROMOTED_POSITION = 1 // second card, in the order the plans are laid out

const cards = () => screen.getAllByTestId('plan-card')
const badges = () => screen.queryAllByTestId('popular-badge')

function cardNamed(name: string): HTMLElement {
  const found = cards().find((card) =>
    Array.from(card.querySelectorAll('h1, h2, h3, h4, h5, h6')).some(
      (heading) => (heading.textContent || '').trim() === name,
    ),
  )
  if (!found) throw new Error(`no pricing card is titled "${name}"`)
  return found
}

describe('Copperline landing — structure', () => {
  it('renders the headline', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/on one board/i)
  })

  it('offers the three plans in order', () => {
    render(<App />)
    const names = cards().map(
      (card) => (card.querySelector('h1, h2, h3, h4, h5, h6')?.textContent || '').trim(),
    )
    expect(names).toEqual(['Solo', 'Crew', 'Fleet'])
  })

  it('renders a footer landmark', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})

describe('Copperline pricing — one promoted tier (the defect)', () => {
  it('shows the most-popular badge exactly once on the page', () => {
    render(<App />)
    expect(badges()).toHaveLength(1)
  })

  it('puts that badge on the Crew plan', () => {
    render(<App />)
    expect(within(cardNamed(PROMOTED)).queryAllByTestId('popular-badge')).toHaveLength(1)
  })

  it('puts the badge on the second plan in the row', () => {
    render(<App />)
    const promotedIndex = cards().findIndex(
      (card) => within(card).queryAllByTestId('popular-badge').length > 0,
    )
    expect(promotedIndex).toBe(PROMOTED_POSITION)
  })

  it('leaves the Solo plan unbadged', () => {
    render(<App />)
    expect(within(cardNamed('Solo')).queryByTestId('popular-badge')).toBeNull()
  })

  it('leaves the Fleet plan unbadged', () => {
    render(<App />)
    expect(within(cardNamed('Fleet')).queryByTestId('popular-badge')).toBeNull()
  })

  it('labels the Crew badge as the most popular plan', () => {
    render(<App />)
    expect(within(cardNamed(PROMOTED)).getByTestId('popular-badge')).toHaveTextContent(/most popular/i)
  })

  it('keeps the badge on Crew when annual billing is chosen', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByTestId('billing-annual'))
    expect(badges()).toHaveLength(1)
    expect(within(cardNamed(PROMOTED)).queryAllByTestId('popular-badge')).toHaveLength(1)
  })

  it('still promotes only Crew after switching back to monthly billing', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByTestId('billing-annual'))
    await user.click(screen.getByTestId('billing-monthly'))
    expect(badges()).toHaveLength(1)
    expect(within(cardNamed(PROMOTED)).queryAllByTestId('popular-badge')).toHaveLength(1)
    expect(within(cardNamed('Fleet')).queryByTestId('popular-badge')).toBeNull()
  })
})
