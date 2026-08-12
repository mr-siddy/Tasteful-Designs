import { describe, it, expect } from 'vitest'
import { act, render, screen, within } from '@testing-library/react'
import App from '@app/App'

/** The anchored destinations, in the order they appear down the page. */
const SECTIONS = [
  { id: 'menu', label: 'Menu' },
  { id: 'hearth', label: 'The Hearth' },
  { id: 'room', label: 'The Room' },
  { id: 'evening', label: 'The Evening' },
  { id: 'cellar', label: 'Cellar' },
  { id: 'visit', label: 'Visit' },
]

const labelFor = (id: string) => SECTIONS.find((section) => section.id === id)!.label

const nav = () => screen.getByTestId('section-nav')
const navLinks = () => within(nav()).getAllByRole('link')

/**
 * A link counts as marked either way a real site would do it: `aria-current`
 * set to anything truthy, or an active class on the element.
 */
function isMarked(link: HTMLElement) {
  const current = link.getAttribute('aria-current')
  if (current && current !== 'false') return true
  return /(?:^|\s)(?:is-active|active)(?:\s|$)/.test(link.getAttribute('class') || '')
}

const markedLabels = () =>
  navLinks()
    .filter(isMarked)
    .map((link) => (link.textContent || '').trim())

/** Move sections in and out of the viewport the way scrolling does. */
function viewport(changes: Array<[string, boolean]>) {
  act(() => {
    const intersect = (globalThis as unknown as {
      __intersect: (c: Array<[Element | null, boolean]>) => void
    }).__intersect
    intersect(changes.map(([id, visible]) => [document.getElementById(id), visible]))
  })
}

/** Walk the guest through the page: each section leaves as the next arrives. */
function scrollThrough(path: string[], from = 'menu') {
  let previous = from
  for (const id of path) {
    viewport(previous === id ? [[id, true]] : [[previous, false], [id, true]])
    previous = id
  }
}

describe('Lantern & Rye landing — structure', () => {
  it('names the restaurant in the page heading', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: /lantern\s*&\s*rye/i }),
    ).toBeInTheDocument()
  })

  it('offers the six destinations in the section nav', () => {
    render(<App />)
    expect(navLinks().map((link) => (link.textContent || '').trim())).toEqual(
      SECTIONS.map((section) => section.label),
    )
  })

  it('renders a footer landmark', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})

describe('Lantern & Rye nav — it follows where you are reading (the defect)', () => {
  it('marks the hearth link once the hearth section is on screen', () => {
    render(<App />)
    scrollThrough(['hearth'])
    expect(markedLabels()).toEqual(['The Hearth'])
  })

  it('marks the cellar link after scrolling on down to the cellar', () => {
    render(<App />)
    scrollThrough(['hearth', 'room', 'evening', 'cellar'])
    expect(markedLabels()).toEqual(['Cellar'])
  })

  it('drops the previous destination as soon as the next one arrives', () => {
    render(<App />)
    scrollThrough(['room'])
    const menuLink = within(nav()).getByRole('link', { name: 'Menu' })
    expect(isMarked(menuLink)).toBe(false)
    expect(markedLabels()).toEqual(['The Room'])
  })

  it('keeps exactly one destination marked all the way down the page', () => {
    render(<App />)
    scrollThrough(['hearth', 'room', 'evening', 'cellar', 'visit'])
    expect(markedLabels()).toHaveLength(1)
    expect(markedLabels()).toEqual(['Visit'])
  })

  it('marks the matching link for every anchored section on the page', () => {
    render(<App />)
    let previous = 'menu'
    for (const section of SECTIONS) {
      scrollThrough([section.id], previous)
      expect(markedLabels()).toEqual([labelFor(section.id)])
      previous = section.id
    }
  })

  it('handles one section leaving and the next arriving together', () => {
    render(<App />)
    scrollThrough(['room'])
    viewport([
      ['room', false],
      ['evening', true],
    ])
    expect(markedLabels()).toEqual(['The Evening'])
  })

  it('follows the guest back up the page as well as down', () => {
    render(<App />)
    scrollThrough(['hearth', 'room', 'evening', 'cellar', 'visit'])
    expect(markedLabels()).toEqual(['Visit'])
    scrollThrough(['cellar', 'evening', 'room', 'menu'], 'visit')
    expect(markedLabels()).toEqual(['Menu'])
  })
})
