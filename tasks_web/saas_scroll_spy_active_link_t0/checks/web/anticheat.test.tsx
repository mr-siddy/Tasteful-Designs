import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import App from '@app/App'

type IntersectionDriver = {
  observedElements(): Element[]
  scrollTo(element: Element | null | undefined): void
}

const driver = () =>
  (globalThis as unknown as { intersectionDriver: IntersectionDriver }).intersectionDriver

const SECTIONS = [
  'platform',
  'workflow',
  'integrations',
  'controls',
  'pricing',
  'customers',
  'faq',
] as const

const wordCount = (text: string | null) => (text || '').split(/\s+/).filter(Boolean).length

// Block the vacuous pass: "the in-view section's link is marked" must not be
// reachable by deleting the nav, dropping the sections it points at, or letting
// the page stop watching where the reader is.
describe('anti-cheat', () => {
  it('keeps the landing page intact', () => {
    render(<App />)
    expect(document.querySelectorAll('section, header, footer').length).toBeGreaterThanOrEqual(10)
    expect(document.querySelectorAll('h1, h2, h3').length).toBeGreaterThanOrEqual(24)
    expect(document.querySelectorAll('body *').length).toBeGreaterThanOrEqual(420)
    expect(wordCount(document.body.textContent)).toBeGreaterThanOrEqual(1400)
  })

  it('keeps the section nav and all of its destinations', () => {
    render(<App />)
    const nav = screen.getByTestId('section-nav')
    for (const id of SECTIONS) {
      const link = within(nav).getByTestId(`nav-link-${id}`)
      expect(link).toHaveAttribute('href', `#${id}`)
      expect(link.textContent?.trim()).toBeTruthy()
    }
  })

  it('keeps real content behind every destination', () => {
    render(<App />)
    for (const id of SECTIONS) {
      const section = document.getElementById(id)
      expect(section, `#${id} section is missing`).not.toBeNull()
      expect(section!.querySelectorAll('h1, h2, h3').length).toBeGreaterThanOrEqual(1)
      expect(wordCount(section!.textContent)).toBeGreaterThanOrEqual(40)
    }
  })

  it('still watches where the reader is on the page', () => {
    render(<App />)
    const observed = driver().observedElements()
    for (const id of SECTIONS) {
      const section = document.getElementById(id)
      expect(observed, `#${id} is not being watched`).toContain(section)
    }
  })
})
