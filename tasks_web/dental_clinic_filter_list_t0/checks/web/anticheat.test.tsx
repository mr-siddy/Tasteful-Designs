import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

const index = () => screen.getByTestId('treatment-index')
const cards = () => within(index()).queryAllByTestId('treatment-card')

// Block the vacuous pass: "only the matching treatments render" must not be
// satisfied by rendering nothing, by dropping treatments out of the catalogue,
// or by deleting the filter buttons — and the rest of the page has to survive too.
describe('anti-cheat', () => {
  it('keeps every category filter button', () => {
    render(<App />)
    const labels = within(index())
      .getAllByTestId('treatment-filter')
      .map((button) => (button.textContent ?? '').trim())
    expect(labels).toEqual(['All', 'Preventive', 'Cosmetic', 'Restorative', 'Emergency'])
  })

  it('still publishes all twelve treatments before anything is filtered', () => {
    render(<App />)
    expect(cards()).toHaveLength(12)
    expect(within(index()).getByText(/exam and hygiene visit/i)).toBeInTheDocument()
    expect(within(index()).getByText(/porcelain veneer/i)).toBeInTheDocument()
    expect(within(index()).getByText(/same-day ceramic crown/i)).toBeInTheDocument()
    expect(within(index()).getByText(/toothache triage appointment/i)).toBeInTheDocument()
  })

  it('every category still turns up at least one priced treatment', async () => {
    const user = userEvent.setup()
    render(<App />)
    for (const label of ['Preventive', 'Cosmetic', 'Restorative', 'Emergency', 'All']) {
      await user.click(within(index()).getByRole('button', { name: label }))
      const visible = cards()
      expect(visible.length).toBeGreaterThanOrEqual(1)
      for (const card of visible) {
        expect((card.querySelector('h3')?.textContent ?? '').trim().length).toBeGreaterThan(3)
        expect(card.textContent ?? '').toMatch(/\$\d/)
      }
    }
  })

  it('keeps the published prices on the index', () => {
    render(<App />)
    const text = index().textContent ?? ''
    expect(text).toContain('$130')
    expect(text).toContain('$980')
    expect(text).toContain('$85')
  })

  it('keeps the page intact', () => {
    render(<App />)
    const doc = document
    expect(doc.querySelectorAll('section, header, footer').length).toBeGreaterThanOrEqual(11)
    expect(doc.querySelectorAll('h1, h2, h3').length).toBeGreaterThanOrEqual(30)
    expect((doc.body.textContent || '').split(/\s+/).length).toBeGreaterThanOrEqual(1800)
  })
})
