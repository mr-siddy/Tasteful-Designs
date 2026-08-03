import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

// Block the vacuous pass: "exactly one menu is visible" must not be satisfied by
// deleting the tabs, or by rendering an empty menu behind them.
describe('anti-cheat', () => {
  it('keeps all three menu tabs', () => {
    render(<App />)
    expect(screen.getAllByRole('tab').map((t) => t.textContent)).toEqual([
      'Lunch',
      'Dinner',
      'Drinks',
    ])
  })

  it('every tab still reveals a menu with at least three dishes', async () => {
    const user = userEvent.setup()
    render(<App />)
    for (const label of ['Lunch', 'Dinner', 'Drinks']) {
      await user.click(screen.getByRole('tab', { name: label }))
      expect(screen.getAllByTestId('menu-dish').length).toBeGreaterThanOrEqual(3)
    }
  })

  it('keeps prices on the menu', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('tab', { name: 'Dinner' }))
    expect(screen.getByText('$34')).toBeInTheDocument()
  })
})
