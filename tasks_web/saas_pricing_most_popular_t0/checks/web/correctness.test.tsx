import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import App from '@app/App'

const planCards = () => screen.getAllByTestId('plan-card')

const planName = (card: HTMLElement) =>
  within(card).getByRole('heading', { level: 3 }).textContent?.trim()

const cardNamed = (name: string) => {
  const card = planCards().find((c) => planName(c) === name)
  if (!card) throw new Error(`no plan card named ${name}`)
  return card
}

const flaggedCards = () =>
  planCards().filter((c) => within(c).queryAllByTestId('popular-badge').length > 0)

describe('Slatepine landing — structure', () => {
  it('renders the product name', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: /slatepine/i })).toBeInTheDocument()
  })

  it('offers the three plans in order', () => {
    render(<App />)
    expect(planCards().map(planName)).toEqual(['Starter', 'Team', 'Scale'])
  })

  it('renders a footer landmark', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})

describe('Slatepine pricing — one recommended plan (the defect)', () => {
  it('flags exactly one plan as the most popular', () => {
    render(<App />)
    expect(screen.queryAllByTestId('popular-badge')).toHaveLength(1)
  })

  it('puts the most-popular flag on the Team plan, matched by name', () => {
    render(<App />)
    expect(flaggedCards().map(planName)).toEqual(['Team'])
  })

  it('puts the most-popular flag on the middle tier, matched by order', () => {
    render(<App />)
    const flaggedPositions = planCards().flatMap((c, i) =>
      within(c).queryAllByTestId('popular-badge').length > 0 ? [i] : [],
    )
    expect(flaggedPositions).toEqual([1])
  })

  it('leaves the Starter plan unflagged', () => {
    render(<App />)
    expect(within(cardNamed('Starter')).queryByTestId('popular-badge')).toBeNull()
  })

  it('leaves the Scale plan unflagged', () => {
    render(<App />)
    expect(within(cardNamed('Scale')).queryByTestId('popular-badge')).toBeNull()
  })

  it('shows the most-popular wording exactly once on the page', () => {
    render(<App />)
    expect(screen.queryAllByText(/most popular/i)).toHaveLength(1)
  })

  it('gives the highlighted card treatment to the Team plan alone', () => {
    render(<App />)
    const highlighted = planCards().filter((c) => c.getAttribute('data-featured') === 'true')
    expect(highlighted.map(planName)).toEqual(['Team'])
  })
})
