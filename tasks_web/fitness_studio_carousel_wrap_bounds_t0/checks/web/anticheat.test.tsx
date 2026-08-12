import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

// Block the vacuous pass: "the slider never goes blank" must not be satisfied by
// deleting the carousel, dropping members out of it, or emptying the cards.
const MEMBER_NAMES = [
  'Delphine Okonkwo-Barr',
  'Marcus Trelawney',
  'Rosalind Achebe-Whitfield',
  'Jonah Villareal-Kim',
  'Priscilla Naadu Mensah',
]

describe('anti-cheat', () => {
  it('keeps the member stories carousel and both controls', () => {
    render(<App />)
    expect(screen.getByTestId('member-stories')).toBeInTheDocument()
    expect(screen.getByTestId('story-prev')).toBeInTheDocument()
    expect(screen.getByTestId('story-next')).toBeInTheDocument()
    expect(screen.getByTestId('story-position')).toBeInTheDocument()
    expect(screen.getAllByTestId('story-dot')).toHaveLength(MEMBER_NAMES.length)
  })

  it('still reaches all five members, each with a real quote', async () => {
    const user = userEvent.setup()
    render(<App />)
    const seen: string[] = []
    const dots = screen.getAllByTestId('story-dot')
    for (let i = 0; i < dots.length; i += 1) {
      await user.click(screen.getAllByTestId('story-dot')[i])
      expect(screen.getAllByTestId('story-slide')).toHaveLength(1)
      seen.push((screen.getByTestId('story-name').textContent || '').trim())
      const quote = (screen.getByTestId('story-quote').textContent || '').trim()
      expect(quote.split(/\s+/).length).toBeGreaterThanOrEqual(25)
    }
    expect([...seen].sort()).toEqual([...MEMBER_NAMES].sort())
  })

  it('keeps the rest of the landing page intact', () => {
    render(<App />)
    const doc = document
    expect(doc.querySelectorAll('section, header, footer').length).toBeGreaterThanOrEqual(11)
    expect(doc.querySelectorAll('h1, h2, h3').length).toBeGreaterThanOrEqual(28)
    expect(doc.querySelectorAll('a, button').length).toBeGreaterThanOrEqual(30)
    expect((doc.body.textContent || '').trim().split(/\s+/).length).toBeGreaterThanOrEqual(1600)
  })

  it('keeps the programs, membership and coaches sections on the page', () => {
    render(<App />)
    expect(screen.getAllByTestId('program-card').length).toBeGreaterThanOrEqual(5)
    expect(screen.getAllByTestId('plan-card').length).toBeGreaterThanOrEqual(3)
    expect(screen.getAllByTestId('coach-card').length).toBeGreaterThanOrEqual(4)
    expect(screen.getAllByTestId('faq-item').length).toBeGreaterThanOrEqual(6)
  })
})
