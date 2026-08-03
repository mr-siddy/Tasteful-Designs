import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

// Block the vacuous pass: "exactly one most-popular badge" must not be satisfied
// by deleting plans, stripping their contents, or gutting the page around them.
const cards = () => screen.getAllByTestId('plan-card')

describe('anti-cheat', () => {
  it('keeps all three priced plans', () => {
    render(<App />)
    const names = cards().map(
      (card) => (card.querySelector('h1, h2, h3, h4, h5, h6')?.textContent || '').trim(),
    )
    expect(names).toEqual(['Solo', 'Crew', 'Fleet'])
  })

  it('keeps a price, a feature list and a call to action on every plan', () => {
    render(<App />)
    for (const card of cards()) {
      const scope = within(card)
      expect(scope.getByTestId('plan-price').textContent || '').toMatch(/\$\d/)
      expect(scope.getAllByTestId('plan-feature').length).toBeGreaterThanOrEqual(5)
      expect(scope.getAllByTestId('plan-cta').length).toBeGreaterThanOrEqual(1)
    }
  })

  it('keeps the billing toggle changing every plan price', async () => {
    const user = userEvent.setup()
    render(<App />)
    const prices = () => screen.getAllByTestId('plan-price').map((el) => el.textContent)
    const monthly = prices()
    await user.click(screen.getByTestId('billing-annual'))
    const annual = prices()
    expect(annual).toHaveLength(monthly.length)
    annual.forEach((price, index) => expect(price).not.toBe(monthly[index]))
    await user.click(screen.getByTestId('billing-monthly'))
    expect(prices()).toEqual(monthly)
  })

  it('keeps the rest of the landing page intact', () => {
    render(<App />)
    const doc = document
    expect(doc.querySelectorAll('section, header, footer').length).toBeGreaterThanOrEqual(11)
    expect(doc.querySelectorAll('h1, h2, h3').length).toBeGreaterThanOrEqual(24)
    expect(doc.querySelectorAll('*').length).toBeGreaterThanOrEqual(550)
    expect((doc.body.textContent || '').trim().split(/\s+/).length).toBeGreaterThanOrEqual(1600)
  })

  it('keeps the supporting sections of the page', () => {
    render(<App />)
    expect(screen.getAllByTestId('capability-card').length).toBeGreaterThanOrEqual(6)
    expect(screen.getAllByTestId('deep-dive-block').length).toBeGreaterThanOrEqual(3)
    expect(screen.getAllByTestId('trade-card').length).toBeGreaterThanOrEqual(4)
    expect(screen.getAllByTestId('rollout-step').length).toBeGreaterThanOrEqual(4)
    expect(screen.getAllByTestId('testimonial').length).toBeGreaterThanOrEqual(3)
    expect(screen.getAllByTestId('faq-item').length).toBeGreaterThanOrEqual(6)
    expect(screen.getAllByTestId('nav-link').length).toBeGreaterThanOrEqual(5)
    expect(screen.getAllByTestId('footer-link').length).toBeGreaterThanOrEqual(10)
  })
})
