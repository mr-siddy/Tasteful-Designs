import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

const NAMES = ['Marta Kowalczyk', 'Alan Prideaux', 'Deborah Finch', 'Sam Okonjo', 'Priya Raghunathan']

const carousel = () => screen.getByTestId('stories-carousel')
// Role queries drop anything outside the accessibility tree, so unmounting a
// slide, setting `hidden`, setting aria-hidden or hiding it with CSS all read
// the same way here — the check does not care which technique the slider uses.
const showingSlides = () => within(carousel()).queryAllByRole('group')
const nextButton = () => screen.getByTestId('stories-next')
const prevButton = () => screen.getByTestId('stories-prev')
const dots = () => screen.getAllByTestId('story-dot')
const isCurrentDot = (dot: HTMLElement) => {
  const current = dot.getAttribute('aria-current')
  return current !== null && current !== 'false'
}
const counterText = () => (screen.getByTestId('stories-counter').textContent || '').replace(/\s+/g, ' ').trim()

/** Which patient is on screen right now, as a comparable label. */
const showing = () => {
  const slides = showingSlides()
  if (slides.length !== 1) return `${slides.length} slides on screen`
  const text = slides[0].textContent || ''
  const matches = NAMES.filter((name) => text.includes(name))
  return matches.length === 1 ? matches[0] : 'unrecognised slide'
}

describe('Harbourline Dental landing — structure', () => {
  it('renders the practice name', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: /harbourline dental/i })).toBeInTheDocument()
  })

  it('gives the patient stories slider back, next and five jump dots', () => {
    render(<App />)
    expect(prevButton()).toBeInTheDocument()
    expect(nextButton()).toBeInTheDocument()
    expect(dots()).toHaveLength(5)
  })

  it('renders a footer landmark', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})

describe('Harbourline Dental patient stories — the slider stays inside its own ends (the defect)', () => {
  it('still has a story on screen after pressing next past the last one', async () => {
    const user = userEvent.setup()
    render(<App />)
    for (let click = 0; click < 5; click++) await user.click(nextButton())
    expect(showingSlides()).toHaveLength(1)
  })

  it('still has a story on screen after pressing back from the first one', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(prevButton())
    expect(showingSlides()).toHaveLength(1)
  })

  it('never lets the counter leave the range of stories', async () => {
    const user = userEvent.setup()
    render(<App />)
    for (let click = 0; click < 9; click++) {
      await user.click(nextButton())
      expect(counterText()).toMatch(/^[1-5] of 5$/)
    }
  })

  it('walks forward through every story and comes back inside the ends', async () => {
    const user = userEvent.setup()
    render(<App />)
    const seen = [showing()]
    for (let click = 0; click < 6; click++) {
      await user.click(nextButton())
      seen.push(showing())
    }
    const wraps = [NAMES[0], NAMES[1], NAMES[2], NAMES[3], NAMES[4], NAMES[0], NAMES[1]]
    const holds = [NAMES[0], NAMES[1], NAMES[2], NAMES[3], NAMES[4], NAMES[4], NAMES[4]]
    expect([wraps, holds]).toContainEqual(seen)
  })

  it('walks backward from the first story without falling off that end either', async () => {
    const user = userEvent.setup()
    render(<App />)
    const seen = [showing()]
    for (let click = 0; click < 5; click++) {
      await user.click(prevButton())
      seen.push(showing())
    }
    const wraps = [NAMES[0], NAMES[4], NAMES[3], NAMES[2], NAMES[1], NAMES[0]]
    const holds = [NAMES[0], NAMES[0], NAMES[0], NAMES[0], NAMES[0], NAMES[0]]
    expect([wraps, holds]).toContainEqual(seen)
  })

  it('keeps exactly one dot marked as the current story the whole way round', async () => {
    const user = userEvent.setup()
    render(<App />)
    expect(dots().filter(isCurrentDot)).toHaveLength(1)
    for (let click = 0; click < 7; click++) {
      await user.click(nextButton())
      expect(dots().filter(isCurrentDot)).toHaveLength(1)
    }
  })

  it('keeps the dot, the counter and the story on screen agreeing after running past the end', async () => {
    const user = userEvent.setup()
    render(<App />)
    for (let click = 0; click < 6; click++) await user.click(nextButton())

    const position = Number(counterText().split(' ')[0])
    expect(position).toBeGreaterThanOrEqual(1)
    expect(position).toBeLessThanOrEqual(5)
    expect(dots().findIndex(isCurrentDot)).toBe(position - 1)
    expect(showing()).toBe(NAMES[position - 1])
  })
})
