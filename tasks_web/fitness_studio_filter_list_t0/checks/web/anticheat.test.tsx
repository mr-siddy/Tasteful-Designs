import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

// Block the vacuous pass: "only the matching classes are on screen" must not be
// satisfiable by deleting classes, deleting the filter buttons, or rendering
// stripped-down cards behind them.
const filterButton = (label: string) =>
  within(screen.getByTestId('class-filter')).getByRole('button', { name: label })

describe('anti-cheat', () => {
  it('keeps all four filter buttons', () => {
    render(<App />)
    const buttons = within(screen.getByTestId('class-filter')).getAllByRole('button')
    expect(buttons.map((b) => b.textContent)).toEqual([
      'All',
      'Strength',
      'Conditioning',
      'Mobility',
    ])
  })

  it('still lists the full eight-class week', () => {
    render(<App />)
    expect(screen.getAllByTestId('class-card')).toHaveLength(8)
    for (const name of [
      'Barbell Basics',
      'Sunrise Intervals',
      'Heavy Hour',
      'Deep Stretch',
      'Row & Recover',
      'Hips & Shoulders',
      'Kettlebell Ladders',
      'Hill Repeats',
    ]) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })

  it('every type still reveals real classes', async () => {
    const user = userEvent.setup()
    render(<App />)
    for (const label of ['Strength', 'Conditioning', 'Mobility']) {
      await user.click(filterButton(label))
      expect(screen.getAllByTestId('class-card').length).toBeGreaterThanOrEqual(2)
    }
  })

  it('keeps the day, time and coach on every card', () => {
    render(<App />)
    for (const card of screen.getAllByTestId('class-card')) {
      expect(card.textContent).toMatch(/\d{1,2}:\d{2}\s*(AM|PM)/)
      expect(card.textContent).toMatch(/with\s+[A-Z][a-z]+\s+[A-Z][a-z]+/)
    }
    const barbell = screen.getByText('Barbell Basics').closest('[data-testid="class-card"]')!
    expect(barbell).toHaveTextContent('Nadia Fierro')
    expect(barbell).toHaveTextContent('Mon')
  })
})
