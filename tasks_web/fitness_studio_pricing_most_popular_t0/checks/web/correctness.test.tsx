import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

const PLAN_ORDER = ['Open Floor', 'Coached', 'Full Program']
const PROMOTED = 'Coached'

const planCards = () => screen.getAllByTestId('plan-card')
const allBadges = () => screen.queryAllByTestId('popular-badge')

const nameOf = (card: HTMLElement) =>
  (within(card).getByRole('heading', { level: 3 }).textContent || '').trim()

const priceOf = (card: HTMLElement) =>
  Number((within(card).getByTestId('plan-price').textContent || '').replace(/[^0-9]/g, ''))

/** Every plan card that carries the most-popular flag, in page order. */
const badgedCards = () =>
  planCards().filter((card) => within(card).queryAllByTestId('popular-badge').length > 0)

const switchBilling = async (user: ReturnType<typeof userEvent.setup>, period: 'monthly' | 'annual') => {
  await user.click(screen.getByTestId(`billing-${period}`))
}

describe('Foundry Row landing — structure', () => {
  it('renders the club pitch and a footer landmark', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('lists the three memberships in page order', () => {
    render(<App />)
    expect(planCards().map(nameOf)).toEqual(PLAN_ORDER)
  })

  it('gives every membership a price and a way to sign up', () => {
    render(<App />)
    for (const card of planCards()) {
      expect(priceOf(card)).toBeGreaterThan(0)
      expect(within(card).getByTestId('plan-cta')).toBeInTheDocument()
    }
  })
})

describe('Foundry Row membership — one promoted tier (the defect)', () => {
  it('shows exactly one most-popular flag on the whole page', () => {
    render(<App />)
    expect(allBadges()).toHaveLength(1)
  })

  it('puts the flag inside the tier the club promotes', () => {
    render(<App />)
    expect(badgedCards().map(nameOf)).toEqual([PROMOTED])
  })

  it('promotes the middle of the three cards', () => {
    render(<App />)
    const cards = planCards()
    const promotedIndex = cards.findIndex(
      (card) => within(card).queryAllByTestId('popular-badge').length > 0,
    )
    expect(promotedIndex).toBe(1)
  })

  it('leaves the entry tier and the top tier unflagged', () => {
    render(<App />)
    for (const card of planCards()) {
      if (nameOf(card) === PROMOTED) continue
      expect(within(card).queryAllByTestId('popular-badge')).toHaveLength(0)
    }
  })

  it('flags the $179 a month membership, not another one', () => {
    render(<App />)
    expect(badgedCards().map(priceOf)).toEqual([179])
  })

  it('promotes a tier priced between the other two', () => {
    render(<App />)
    const promoted = badgedCards()
    expect(promoted).toHaveLength(1)
    const others = planCards()
      .filter((card) => !promoted.includes(card))
      .map(priceOf)
    const price = priceOf(promoted[0])
    expect(Math.min(...others)).toBeLessThan(price)
    expect(Math.max(...others)).toBeGreaterThan(price)
  })

  it('keeps the flag on the same tier when annual billing is chosen', async () => {
    const user = userEvent.setup()
    render(<App />)
    await switchBilling(user, 'annual')
    expect(allBadges()).toHaveLength(1)
    expect(badgedCards().map(nameOf)).toEqual([PROMOTED])
  })

  it('shows the annual price on the promoted tier and none on the others', async () => {
    const user = userEvent.setup()
    render(<App />)
    await switchBilling(user, 'annual')
    expect(badgedCards().map(priceOf)).toEqual([159])
    for (const card of planCards()) {
      if (nameOf(card) === PROMOTED) continue
      expect(within(card).queryAllByTestId('popular-badge')).toHaveLength(0)
    }
  })

  it('keeps the flag on the same tier after toggling back to monthly', async () => {
    const user = userEvent.setup()
    render(<App />)
    await switchBilling(user, 'annual')
    await switchBilling(user, 'monthly')
    expect(allBadges()).toHaveLength(1)
    expect(badgedCards().map(nameOf)).toEqual([PROMOTED])
    expect(badgedCards().map(priceOf)).toEqual([179])
  })
})
