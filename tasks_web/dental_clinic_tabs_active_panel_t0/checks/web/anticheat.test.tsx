import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

// Block the vacuous pass: "exactly one pathway is showing" must not be satisfied
// by deleting the tabs, or by leaving an empty panel behind them.
describe('anti-cheat', () => {
  it('keeps all four care pathway tabs', () => {
    render(<App />)
    expect(screen.getAllByRole('tab').map((t) => t.textContent)).toEqual([
      'Preventive',
      'Cosmetic',
      'Restorative',
      'Emergency',
    ])
  })

  it('every tab still reveals a pathway with at least three treatments', async () => {
    const user = userEvent.setup()
    render(<App />)
    for (const label of ['Preventive', 'Cosmetic', 'Restorative', 'Emergency']) {
      await user.click(screen.getByRole('tab', { name: label }))
      expect(screen.getAllByTestId('pathway-treatment').length).toBeGreaterThanOrEqual(3)
    }
  })

  it('keeps the prices on the pathway treatments', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('tab', { name: 'Cosmetic' }))
    expect(screen.getByText('£395')).toBeInTheDocument()
    expect(screen.getByText(/composite bonding/i)).toBeInTheDocument()
  })

  it('keeps the rest of the page intact', () => {
    render(<App />)
    const doc = document
    expect(doc.querySelectorAll('section, header, footer').length).toBeGreaterThanOrEqual(11)
    expect(doc.querySelectorAll('h1, h2, h3').length).toBeGreaterThanOrEqual(28)
    expect(doc.querySelectorAll('a, button, input, select, textarea').length).toBeGreaterThanOrEqual(30)
    expect((doc.body.textContent || '').split(/\s+/).length).toBeGreaterThanOrEqual(1500)
  })
})
