import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

// Block the vacuous pass: "only one menu is showing" must not be satisfied by
// deleting the tabs, emptying the menus, or gutting the page around them.
describe('anti-cheat', () => {
  it('keeps all four menu tabs', () => {
    render(<App />)
    expect(screen.getAllByRole('tab').map((tab) => tab.textContent)).toEqual([
      'Lunch',
      'Dinner',
      'Bar',
      'Sunday Rice',
    ])
  })

  it('still puts a full menu behind every tab', async () => {
    const user = userEvent.setup()
    render(<App />)
    for (const label of ['Lunch', 'Dinner', 'Bar', 'Sunday Rice']) {
      await user.click(screen.getByRole('tab', { name: label }))
      expect(screen.getAllByTestId('menu-dish').length).toBeGreaterThanOrEqual(5)
    }
  })

  it('keeps the dinner menu priced and complete', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('tab', { name: 'Dinner' }))
    expect(screen.getAllByText('$44').length).toBeGreaterThan(0)
    expect(screen.getAllByText(/suquet de peix/i).length).toBeGreaterThan(0)
  })

  it('keeps the rest of the landing page intact', () => {
    render(<App />)
    const doc = document
    expect(doc.querySelectorAll('section, header, footer').length).toBeGreaterThanOrEqual(11)
    expect(doc.querySelectorAll('h1, h2, h3').length).toBeGreaterThanOrEqual(36)
    expect((doc.body.textContent || '').trim().split(/\s+/).length).toBeGreaterThanOrEqual(1300)
  })
})
