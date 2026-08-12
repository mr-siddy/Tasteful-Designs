import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '@app/App'

const classesOf = (el: Element) => (el.getAttribute('class') || '').split(/\s+/).filter(Boolean)

/** Column count applied at the smallest width (no breakpoint prefix), or null. */
const baseColumns = (el: Element): number | null => {
  let cols: number | null = null
  for (const cls of classesOf(el)) {
    const m = /^grid-cols-(\d+)$/.exec(cls)
    if (m) cols = Number(m[1])
  }
  return cols
}

/** Every unprefixed column count above one — i.e. columns forced onto phones. */
const forcedMultiColumn = (el: Element): string[] =>
  classesOf(el).filter((cls) => {
    const m = /^grid-cols-(\d+)$/.exec(cls)
    return m !== null && Number(m[1]) > 1
  })

/** Column counts introduced from a breakpoint up, e.g. `md:grid-cols-2`. */
const columnsFrom = (el: Element, breakpoint: string): number[] =>
  classesOf(el)
    .map((cls) => new RegExp(`^${breakpoint}:grid-cols-(\\d+)$`).exec(cls))
    .filter((m): m is RegExpExecArray => m !== null)
    .map((m) => Number(m[1]))

describe('Persimmon Alley landing — structure', () => {
  it('renders the restaurant name in the page heading', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: /persimmon alley/i }),
    ).toBeInTheDocument()
  })

  it('chalks up all six plates on the board', () => {
    render(<App />)
    const cards = screen.getAllByTestId('dish-card')
    expect(cards).toHaveLength(6)
    const text = cards.map((card) => card.textContent || '')
    expect(text.some((entry) => entry.includes('Mapo Tofu, Aged Bean'))).toBe(true)
  })

  it('renders a footer landmark', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})

describe("Persimmon Alley board — the grid collapses on phones (the defect)", () => {
  it('stacks the plate cards into a single column at the smallest width', () => {
    render(<App />)
    expect(baseColumns(screen.getByTestId('dish-grid'))).toBe(1)
  })

  it('never forces several plate columns before a breakpoint', () => {
    render(<App />)
    expect(forcedMultiColumn(screen.getByTestId('dish-grid'))).toEqual([])
  })

  it('opens the plate cards into two or more columns from the md breakpoint up', () => {
    render(<App />)
    const grid = screen.getByTestId('dish-grid')
    expect(columnsFrom(grid, 'md').some((cols) => cols >= 2)).toBe(true)
  })

  it('stacks the skewer tiles into a single column at the smallest width', () => {
    render(<App />)
    expect(baseColumns(screen.getByTestId('skewer-grid'))).toBe(1)
  })

  it('never forces several skewer columns before a breakpoint', () => {
    render(<App />)
    expect(forcedMultiColumn(screen.getByTestId('skewer-grid'))).toEqual([])
  })

  it('opens the skewer tiles into two or more columns from the md breakpoint up', () => {
    render(<App />)
    const grid = screen.getByTestId('skewer-grid')
    expect(columnsFrom(grid, 'md').some((cols) => cols >= 2)).toBe(true)
  })
})
