import { describe, it, expect } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import App from '@app/App'

type IntersectionDriver = {
  observedElements(): Element[]
  scrollTo(element: Element | null | undefined): void
}

const driver = () =>
  (globalThis as unknown as { intersectionDriver: IntersectionDriver }).intersectionDriver

/** The destinations the sticky nav offers, in the order the page presents them. */
const SECTIONS = [
  'platform',
  'workflow',
  'integrations',
  'controls',
  'pricing',
  'customers',
  'faq',
] as const

const navLink = (id: string) => screen.getByTestId(`nav-link-${id}`)

/**
 * "Marked as the current section", read the way a user or a screen reader would:
 * an active class on the link, an explicit data flag, or aria-current. Any of
 * the three counts — this asserts the outcome, not one implementation of it.
 */
const isMarkedActive = (element: Element): boolean => {
  const current = element.getAttribute('aria-current')
  if (current && current !== 'false') return true
  if (element.getAttribute('data-active') === 'true') return true
  return /(^|[\s-])active\b/i.test(element.getAttribute('class') || '')
}

const markedLinks = () => SECTIONS.map((id) => navLink(id)).filter(isMarkedActive)

/** Put a section in the viewport band, exactly as scrolling the page would. */
const scrollToSection = (id: string) => {
  const target = document.getElementById(id)
  expect(target, `the page has no #${id} section to scroll to`).not.toBeNull()
  act(() => {
    driver().scrollTo(target)
  })
}

describe('Ledgerloom landing — structure', () => {
  it('leads with the four-day close promise', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: /four days, not fourteen/i })).toBeInTheDocument()
  })

  it('offers a nav link for every anchored section', () => {
    render(<App />)
    for (const id of SECTIONS) {
      expect(navLink(id)).toHaveAttribute('href', `#${id}`)
      expect(document.getElementById(id)).not.toBeNull()
    }
  })

  it('renders a footer landmark', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})

describe('Ledgerloom landing — the nav follows the reader (the defect)', () => {
  it('marks the Workflow link once the workflow section is in view', () => {
    render(<App />)
    scrollToSection('workflow')
    expect(isMarkedActive(navLink('workflow'))).toBe(true)
  })

  it('marks the Pricing link once the pricing section is in view', () => {
    render(<App />)
    scrollToSection('pricing')
    expect(isMarkedActive(navLink('pricing'))).toBe(true)
    expect(isMarkedActive(navLink('platform'))).toBe(false)
  })

  it('reaches the sections far down the page', () => {
    render(<App />)
    scrollToSection('customers')
    expect(isMarkedActive(navLink('customers'))).toBe(true)
  })

  it('moves the mark along as the reader scrolls on', () => {
    render(<App />)
    scrollToSection('workflow')
    expect(isMarkedActive(navLink('workflow'))).toBe(true)
    scrollToSection('faq')
    expect(isMarkedActive(navLink('faq'))).toBe(true)
    expect(isMarkedActive(navLink('workflow'))).toBe(false)
  })

  it('marks exactly one destination at a time', () => {
    render(<App />)
    scrollToSection('integrations')
    const marked = markedLinks()
    expect(marked).toHaveLength(1)
    expect(marked[0]).toHaveTextContent(/integrations/i)
  })

  it('marks each destination in turn as the page scrolls past it', () => {
    render(<App />)
    for (const id of SECTIONS) {
      scrollToSection(id)
      expect(isMarkedActive(navLink(id)), `#${id} is in view but its nav link is not marked`).toBe(
        true,
      )
    }
  })
})
