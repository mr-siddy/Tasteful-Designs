import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

// Block the vacuous pass: "exactly one tier is flagged as most popular" must not
// be satisfied by deleting the flag, gutting the plan cards, or dropping the
// billing toggle — and the rest of the page has to survive too.
describe('anti-cheat', () => {
  it('keeps the three memberships with their names in page order', () => {
    render(<App />)
    const names = screen
      .getAllByTestId('plan-card')
      .map((card) => (within(card).getByRole('heading', { level: 3 }).textContent || '').trim())
    expect(names).toEqual(['Open Floor', 'Coached', 'Full Program'])
  })

  it('still flags a membership as most popular', () => {
    render(<App />)
    const badges = screen.getAllByTestId('popular-badge')
    expect(badges.length).toBeGreaterThanOrEqual(1)
    expect((badges[0].textContent || '').toLowerCase()).toContain('popular')
  })

  it('keeps a price, a call to action and the feature list on every membership', () => {
    render(<App />)
    for (const card of screen.getAllByTestId('plan-card')) {
      const price = Number(
        (within(card).getByTestId('plan-price').textContent || '').replace(/[^0-9]/g, ''),
      )
      expect(price).toBeGreaterThan(0)
      expect(within(card).getByTestId('plan-cta')).toBeInTheDocument()
      expect(within(card).getAllByTestId('plan-feature').length).toBeGreaterThanOrEqual(4)
    }
  })

  it('keeps the billing toggle working, with annual cheaper than monthly', async () => {
    const user = userEvent.setup()
    render(<App />)
    const prices = () =>
      screen
        .getAllByTestId('plan-card')
        .map((card) =>
          Number((within(card).getByTestId('plan-price').textContent || '').replace(/[^0-9]/g, '')),
        )
    const monthly = prices()
    await user.click(screen.getByTestId('billing-annual'))
    const annual = prices()
    expect(annual).toHaveLength(monthly.length)
    annual.forEach((value, i) => expect(value).toBeLessThan(monthly[i]))
    await user.click(screen.getByTestId('billing-monthly'))
    expect(prices()).toEqual(monthly)
  })

  it('keeps the page intact', () => {
    render(<App />)
    const doc = document
    expect(doc.querySelectorAll('section, header, footer').length).toBeGreaterThanOrEqual(10)
    expect(doc.querySelectorAll('h1, h2, h3').length).toBeGreaterThanOrEqual(20)
    expect((doc.body.textContent || '').split(/\s+/).filter(Boolean).length).toBeGreaterThanOrEqual(
      1500,
    )
  })
})
