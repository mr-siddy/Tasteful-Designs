import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import App from '@app/App'

// Block the vacuous pass: "one column on a phone" must not be satisfied by
// emptying the board, dropping the skewer trough, or lifting the cards out of
// the grid containers that are supposed to lay them out.
describe('anti-cheat', () => {
  it('keeps all six plates on the board with their prices and heat ratings', () => {
    render(<App />)
    const cards = screen.getAllByTestId('dish-card')
    expect(cards).toHaveLength(6)
    for (const card of cards) {
      expect(within(card).getByRole('heading').textContent?.trim().length).toBeGreaterThan(2)
      expect(within(card).getByTestId('dish-price').textContent).toMatch(/\d/)
      expect(within(card).getByTestId('dish-heat')).toBeInTheDocument()
    }
    const text = cards.map((card) => card.textContent || '')
    for (const plate of ['Dan Dan', 'Mapo Tofu', 'Three-Cup Chicken', 'Lu Rou Fan']) {
      expect(text.some((entry) => entry.includes(plate))).toBe(true)
    }
  })

  it('keeps the four skewers that come off the charcoal trough', () => {
    render(<App />)
    const tiles = screen.getAllByTestId('skewer-tile')
    expect(tiles).toHaveLength(4)
    const names = tiles.map((tile) => tile.textContent || '')
    for (const skewer of ['Cumin Lamb', 'Charred Leek', 'Chicken Heart', 'King Oyster']) {
      expect(names.some((entry) => entry.includes(skewer))).toBe(true)
    }
  })

  it('still lays both sets of cards out with the grid containers', () => {
    render(<App />)
    const dishGrid = screen.getByTestId('dish-grid')
    const skewerGrid = screen.getByTestId('skewer-grid')
    expect(dishGrid.className.split(/\s+/)).toContain('grid')
    expect(skewerGrid.className.split(/\s+/)).toContain('grid')
    expect(within(dishGrid).getAllByTestId('dish-card')).toHaveLength(6)
    expect(within(skewerGrid).getAllByTestId('skewer-tile')).toHaveLength(4)
  })

  it('keeps the rest of the marketing page intact', () => {
    render(<App />)
    const doc = document
    expect(doc.querySelectorAll('section, header, footer').length).toBeGreaterThanOrEqual(10)
    expect(doc.querySelectorAll('h1, h2, h3').length).toBeGreaterThanOrEqual(30)
    expect((doc.body.textContent || '').split(/\s+/).length).toBeGreaterThanOrEqual(1500)
  })

  it('keeps the set feasts, the guest quotes and the reservation form', () => {
    render(<App />)
    expect(screen.getAllByTestId('feast-card')).toHaveLength(2)
    expect(screen.getAllByTestId('voice-card').length).toBeGreaterThanOrEqual(3)
    expect(screen.getAllByTestId('faq-item').length).toBeGreaterThanOrEqual(5)
    expect(screen.getByTestId('reserve-form')).toBeInTheDocument()
    expect(screen.getByTestId('reserve-submit')).toBeInTheDocument()
  })
})
