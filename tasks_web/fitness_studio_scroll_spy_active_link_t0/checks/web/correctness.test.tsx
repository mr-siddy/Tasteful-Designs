import { describe, it, expect } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import App from '@app/App'

type Driver = {
  observedElements: () => Element[]
  scrollTo: (element: Element | null) => void
}

const driver = () => (globalThis as unknown as { intersectionDriver: Driver }).intersectionDriver

/** The six long-scroll destinations the sticky header nav keeps track of. */
const DESTINATIONS: ReadonlyArray<readonly [string, string]> = [
  ['classes', 'Classes'],
  ['facility', 'The floor'],
  ['method', 'The method'],
  ['membership', 'Membership'],
  ['results', 'Results'],
  ['faq', 'Questions'],
]

const navLink = (id: string) => screen.getByTestId(`nav-link-${id}`)

/** A destination counts as current if a screen reader would announce it as such. */
const isCurrent = (element: HTMLElement) => {
  const flag = element.getAttribute('aria-current')
  return flag === 'true' || flag === 'page' || flag === 'location'
}

/** The ids of every nav destination currently marked as the one being read. */
const markedIds = () => DESTINATIONS.map(([id]) => id).filter((id) => isCurrent(navLink(id)))

/** However the link is styled — utility classes or an inline style, either is fine. */
const look = (element: HTMLElement) =>
  `${element.className}|${element.getAttribute('style') ?? ''}`

/** Put `#<id>` under the top of the viewport and let the nav react to it. */
const scrollSectionIntoView = (id: string) => {
  const section = document.getElementById(id)
  expect(section, `the page has no #${id} section to scroll to`).not.toBeNull()
  act(() => driver().scrollTo(section))
}

describe('Northline Strength Club landing — structure', () => {
  it('names the club in the page heading', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: /get strong on a written plan/i }),
    ).toBeInTheDocument()
  })

  it('offers the six section destinations in the header nav', () => {
    render(<App />)
    expect(DESTINATIONS.map(([id]) => navLink(id).textContent)).toEqual(
      DESTINATIONS.map(([, label]) => label),
    )
  })

  it('renders a footer landmark', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})

describe('Northline nav — it follows the reader down the page (the defect)', () => {
  it('marks the Classes link as current once that section is in view', () => {
    render(<App />)
    scrollSectionIntoView('classes')
    expect(markedIds()).toEqual(['classes'])
  })

  it('hands the highlight on to the next section as the reader moves down', () => {
    render(<App />)
    scrollSectionIntoView('classes')
    expect(markedIds()).toEqual(['classes'])
    scrollSectionIntoView('facility')
    expect(markedIds()).toEqual(['facility'])
  })

  it('follows the reader back up the page as well as down', () => {
    render(<App />)
    scrollSectionIntoView('faq')
    expect(markedIds()).toEqual(['faq'])
    scrollSectionIntoView('method')
    expect(markedIds()).toEqual(['method'])
  })

  it('keeps up when the reader jumps straight to the bottom of the page', () => {
    render(<App />)
    scrollSectionIntoView('classes')
    scrollSectionIntoView('faq')
    expect(markedIds()).toEqual(['faq'])
  })

  it('tracks every one of the six destinations, one at a time', () => {
    render(<App />)
    for (const [id] of DESTINATIONS) {
      scrollSectionIntoView(id)
      expect(markedIds()).toEqual([id])
    }
  })

  it('gives the destination being read a different look from the rest', () => {
    render(<App />)
    scrollSectionIntoView('membership')
    const current = navLink('membership')
    expect(isCurrent(current)).toBe(true)
    for (const [id] of DESTINATIONS.filter(([other]) => other !== 'membership')) {
      expect(look(current)).not.toEqual(look(navLink(id)))
    }
  })
})
