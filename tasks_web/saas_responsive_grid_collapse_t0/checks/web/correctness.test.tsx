import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '@app/App'

/** The class list actually applied to the capability card grid. */
function gridClasses(): string[] {
  render(<App />)
  const grid = screen.getByTestId('capability-grid')
  return (grid.getAttribute('class') || '').split(/\s+/).filter(Boolean)
}

/**
 * How many columns the class list declares at a given Tailwind breakpoint.
 * `prefix` of '' means the unprefixed, mobile-first declaration. Returns null
 * when the class list says nothing about that breakpoint.
 */
function columnsAt(classes: string[], prefix: string): number | null {
  const pattern = prefix
    ? new RegExp(`^${prefix}:grid-cols-(\\d+)$`)
    : /^grid-cols-(\d+)$/
  let columns: number | null = null
  for (const cls of classes) {
    const match = cls.match(pattern)
    if (match) columns = Number(match[1])
  }
  return columns
}

const BREAKPOINTS = ['', 'sm', 'md', 'lg', 'xl', '2xl']

/**
 * How many columns are actually in effect at a breakpoint, letting narrower
 * declarations cascade upward the way Tailwind's mobile-first prefixes do.
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

describe('Grainline landing page', () => {
  // --- structure: true of the page whether or not the defect is fixed ---

  it('leads with the headline and names the platform section', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: /400-unit run/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /everything the floor already asks for/i }),
    ).toBeInTheDocument()
  })

  it('shows all six capability cards, each with a name', () => {
    render(<App />)
    const cards = screen.getAllByTestId('capability-card')
    expect(cards).toHaveLength(6)
    for (const card of cards) {
      const heading = card.querySelector('h3')
      expect(heading?.textContent?.trim().length ?? 0).toBeGreaterThan(0)
    }
  })

  it('closes with a footer carrying the mailing address', () => {
    render(<App />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveTextContent(/Fall River/i)
    expect(footer).toHaveTextContent(/Hobart Mill Road/i)
  })

  // --- the responsive rule: one column on a phone, several on wider screens ---

  it('stacks the capability grid into a single column on phones', () => {
    expect(gridClasses()).toContain('grid-cols-1')
  })

  it('opens the capability grid back up at the md breakpoint', () => {
    const classes = gridClasses()
    const responsive = classes.filter((cls) => cls.startsWith('md:grid-cols-'))
    expect(responsive.length).toBeGreaterThan(0)
    expect(columnsAt(classes, 'md')).toBeGreaterThanOrEqual(2)
  })

  it('never forces a multi-column track list at phone width', () => {
    const cramped = gridClasses().filter((cls) => /^grid-cols-([2-9]|\d\d)$/.test(cls))
    expect(cramped).toEqual([])
  })

  it('declares exactly one column as the mobile-first default', () => {
    expect(columnsAt(gridClasses(), '')).toBe(1)
  })

  it('steps the capability grid up from phone to tablet to laptop', () => {
    const classes = gridClasses()
    const phone = effectiveColumns(classes, '')
    const tablet = effectiveColumns(classes, 'md')
    const laptop = effectiveColumns(classes, 'lg')
    expect(phone).toBe(1)
    expect(tablet as number).toBeGreaterThanOrEqual(2)
    expect(laptop as number).toBeGreaterThanOrEqual(tablet as number)
  })
})
