import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import App from '@app/App'

// Block the vacuous pass: "one column on a phone" must not be satisfied by
// emptying the timetable, dropping the intensity key, or lifting the cards out
// of the grid that is supposed to lay them out.
describe('anti-cheat', () => {
  it('keeps all six coached classes with their days and times', () => {
    render(<App />)
    const cards = screen.getAllByTestId('class-card')
    expect(cards).toHaveLength(6)
    for (const card of cards) {
      expect(within(card).getByRole('heading').textContent?.trim().length).toBeGreaterThan(2)
      expect(within(card).getByTestId('class-time').textContent).toMatch(/\d/)
    }
    const text = cards.map((card) => card.textContent || '')
    for (const name of ['Foundations', 'Barbell Strength', 'Engine Room', 'Long Slow Sunday']) {
      expect(text.some((entry) => entry.includes(name))).toBe(true)
    }
  })

  it('keeps the four intensity tiles that the classes are tagged with', () => {
    render(<App />)
    const tiles = screen.getAllByTestId('level-tile')
    expect(tiles).toHaveLength(4)
    const names = tiles.map((tile) => tile.textContent || '')
    for (const level of ['Reset', 'Build', 'Push', 'Compete']) {
      expect(names.some((text) => text.includes(level))).toBe(true)
    }
  })

  it('still lays both sets of cards out with the grid containers', () => {
    render(<App />)
    const classGrid = screen.getByTestId('class-grid')
    const levelGrid = screen.getByTestId('level-grid')
    expect(classGrid.className.split(/\s+/)).toContain('grid')
    expect(levelGrid.className.split(/\s+/)).toContain('grid')
    expect(within(classGrid).getAllByTestId('class-card')).toHaveLength(6)
    expect(within(levelGrid).getAllByTestId('level-tile')).toHaveLength(4)
  })

  it('keeps the rest of the marketing page intact', () => {
    render(<App />)
    const doc = document
    expect(doc.querySelectorAll('section, header, footer').length).toBeGreaterThanOrEqual(10)
    expect(doc.querySelectorAll('h1, h2, h3').length).toBeGreaterThanOrEqual(24)
    expect((doc.body.textContent || '').split(/\s+/).length).toBeGreaterThanOrEqual(1500)
  })

  it('keeps the programs and the trial enquiry form', () => {
    render(<App />)
    expect(screen.getAllByTestId('program-card').length).toBeGreaterThanOrEqual(5)
    expect(screen.getByTestId('trial-form')).toBeInTheDocument()
    expect(screen.getByTestId('trial-submit')).toBeInTheDocument()
  })
})
