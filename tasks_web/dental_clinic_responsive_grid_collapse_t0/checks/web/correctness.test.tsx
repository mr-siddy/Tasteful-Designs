import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '@app/App'

/** Tailwind's mobile-first breakpoint prefixes, narrowest first. */
const BREAKPOINTS = ['', 'sm', 'md', 'lg', 'xl', '2xl']

/** The class list actually applied to the treatment card grid. */
function gridClasses(): string[] {
  render(<App />)
  const grid = screen.getByTestId('services-grid')
  return (grid.getAttribute('class') || '').split(/\s+/).filter(Boolean)
}

/**
 * Columns declared *at* one breakpoint. `prefix` of '' is the unprefixed,
 * mobile-first declaration. null when the class list says nothing there.
 */
function columnsAt(classes: string[], prefix: string): number | null {
  const pattern = prefix ? new RegExp(`^${prefix}:grid-cols-(\\d+)$`) : /^grid-cols-(\d+)$/
  let columns: number | null = null
  for (const cls of classes) {
    const match = cls.match(pattern)
    if (match) columns = Number(match[1])
  }
  return columns
}

/**
 * Columns in effect at a breakpoint, letting narrower declarations cascade
 * upward the way Tailwind's mobile-first prefixes do.
 */
function effectiveColumns(classes: string[], breakpoint: string): number | null {
  let columns: number | null = null
  for (const prefix of BREAKPOINTS) {
    const declared = columnsAt(classes, prefix)
    if (declared !== null) columns = declared
    if (prefix === breakpoint) break
  }
  return columns
}

describe('Quarry Hill Dental landing page', () => {
  // --- structure: true of the page whether or not the defect is fixed ---

  it('leads with the practice name and names the treatments section', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: /quarry hill dental/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /everything a family needs, on one street/i }),
    ).toBeInTheDocument()
  })

  it('shows all six treatment cards, each with a name', () => {
    render(<App />)
    const cards = screen.getAllByTestId('service-card')
    expect(cards).toHaveLength(6)
    for (const card of cards) {
      const heading = card.querySelector('h3')
      expect(heading?.textContent?.trim().length ?? 0).toBeGreaterThan(0)
    }
  })

  it('closes with a footer carrying the street address', () => {
    render(<App />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveTextContent(/Water Street/i)
    expect(footer).toHaveTextContent(/Burlington/i)
  })

  // --- the responsive rule: one column on a phone, several on wider screens ---

  it('stacks the treatment grid into a single column on phones', () => {
    expect(gridClasses()).toContain('grid-cols-1')
  })

  it('declares exactly one column as the mobile-first default', () => {
    expect(columnsAt(gridClasses(), '')).toBe(1)
  })

  it('opens the treatment grid back up at the md breakpoint', () => {
    const classes = gridClasses()
    const responsive = classes.filter((cls) => cls.startsWith('md:grid-cols-'))
    expect(responsive.length).toBeGreaterThan(0)
    expect(columnsAt(classes, 'md')).toBeGreaterThanOrEqual(2)
  })

  it('never forces a multi-column track list at phone width', () => {
    const cramped = gridClasses().filter((cls) => /^grid-cols-([2-9]|\d\d)$/.test(cls))
    expect(cramped).toEqual([])
  })

  it('states the column count per breakpoint rather than once for every screen', () => {
    const classes = gridClasses()
    const responsive = classes.filter((cls) => /^(sm|md|lg|xl|2xl):grid-cols-\d+$/.test(cls))
    expect(responsive.length).toBeGreaterThan(0)
  })

  it('steps the treatment grid up from phone to tablet to laptop', () => {
    const classes = gridClasses()
    const phone = effectiveColumns(classes, '')
    const tablet = effectiveColumns(classes, 'md')
    const laptop = effectiveColumns(classes, 'lg')
    expect(phone).toBe(1)
    expect(tablet as number).toBeGreaterThanOrEqual(2)
    expect(laptop as number).toBeGreaterThanOrEqual(tablet as number)
  })
})
