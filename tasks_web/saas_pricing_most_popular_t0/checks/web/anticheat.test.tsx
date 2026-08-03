import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import App from '@app/App'

const planCards = () => screen.getAllByTestId('plan-card')

const planName = (card: HTMLElement) =>
  within(card).getByRole('heading', { level: 3 }).textContent?.trim()

// Block the vacuous pass: "exactly one plan is flagged" must not be satisfied by
// dropping the other two tiers, by gutting a card, or by deleting the ribbon.
describe('anti-cheat', () => {
  it('keeps all three plans, named and in order', () => {
    render(<App />)
    expect(planCards().map(planName)).toEqual(['Starter', 'Team', 'Scale'])
  })

  it('keeps every plan its headline price', () => {
    render(<App />)
    const prices = planCards().map((c) => within(c).getByTestId('plan-price').textContent?.trim())
    expect(prices).toEqual(['$12', '$29', '$58'])
  })

  it('keeps at least three features on every plan', () => {
    render(<App />)
    for (const card of planCards()) {
      expect(within(card).getAllByTestId('plan-feature').length).toBeGreaterThanOrEqual(3)
    }
  })

  it('keeps a call to action on every plan', () => {
    render(<App />)
    for (const card of planCards()) {
      const cta = within(card).getByTestId('plan-cta')
      expect(cta.textContent?.trim().length ?? 0).toBeGreaterThan(0)
    }
  })

  it('still renders a most-popular ribbon with real wording', () => {
    render(<App />)
    const badges = screen.getAllByTestId('popular-badge')
    expect(badges.length).toBeGreaterThanOrEqual(1)
    for (const badge of badges) {
      expect(badge).toHaveTextContent(/most popular/i)
    }
  })
})
