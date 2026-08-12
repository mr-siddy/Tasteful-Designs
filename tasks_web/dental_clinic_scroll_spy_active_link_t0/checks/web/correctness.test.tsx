import { describe, it, expect } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import App from '@app/App'

type Driver = {
  observedElements: () => Element[]
  scrollTo: (element: Element | null) => void
}

const driver = () => (globalThis as unknown as { intersectionDriver: Driver }).intersectionDriver

/** The six long-scroll destinations the header nav is meant to keep track of. */
const DESTINATIONS: ReadonlyArray<readonly [string, string]> = [
  ['treatments', 'Treatments'],
  ['technology', 'Technology'],
  ['visit', 'Your visit'],
  ['membership', 'Membership'],
  ['reviews', 'Patients'],
  ['faq', 'Questions'],
]

const navLink = (id: string) => screen.getByTestId(`nav-link-${id}`)

/** A link counts as "current" if a screen reader would announce it as such. */
const isCurrent = (element: HTMLElement) => {
  const flag = element.getAttribute('aria-current')
  return flag === 'true' || flag === 'location' || flag === 'page'
}

/** The ids of every nav destination currently marked as the one in view. */
const markedIds = () => DESTINATIONS.map(([id]) => id).filter((id) => isCurrent(navLink(id)))

/** Put `#<id>` under the top of the viewport and let the nav react to it. */
const scrollSectionIntoView = (id: string) => {
  const section = document.getElementById(id)
  expect(section, `the page has no #${id} section to scroll to`).not.toBeNull()
  act(() => driver().scrollTo(section))
}

describe('Copper Birch Dental landing — structure', () => {
  it('names the practice in the page heading', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: /copper birch dental/i }),
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

describe('Copper Birch Dental nav — it follows the reader down the page (the defect)', () => {
  it('marks the Treatments link as current once that section is in view', () => {
    render(<App />)
    scrollSectionIntoView('treatments')
    expect(markedIds()).toEqual(['treatments'])
  })

  it('hands the highlight on to the next section as the reader moves down', () => {
    render(<App />)
    scrollSectionIntoView('treatments')
    expect(markedIds()).toEqual(['treatments'])
    scrollSectionIntoView('technology')
    expect(markedIds()).toEqual(['technology'])
  })

  it('follows the reader back up the page as well as down', () => {
    render(<App />)
    scrollSectionIntoView('faq')
    expect(markedIds()).toEqual(['faq'])
    scrollSectionIntoView('visit')
    expect(markedIds()).toEqual(['visit'])
  })

  it('keeps up when the reader jumps straight to the bottom of the page', () => {
    render(<App />)
    scrollSectionIntoView('treatments')
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

  it('gives the current destination a different look from the rest', () => {
    render(<App />)
    scrollSectionIntoView('membership')
    const current = navLink('membership')
    const others = DESTINATIONS.filter(([id]) => id !== 'membership').map(([id]) => navLink(id))
    expect(isCurrent(current)).toBe(true)
    for (const other of others) {
      expect(current.className).not.toEqual(other.className)
    }
  })
})
