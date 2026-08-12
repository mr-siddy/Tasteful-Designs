import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

// Rooftree's story carousel holds five customer stories and shows one at a time.
// The arrows must stay inside that set: past the last story you land back on the
// first, and stepping back from the first lands on the last.
const ORGS = [
  'Ninth Street Land Trust',
  'Harbor Commons Housing',
  'Piedmont Mutual Homes',
  'Wabash Neighborhood Trust',
  'Saltmarsh Community Homes',
]

const carousel = () => screen.getByTestId('story-carousel')

/** Every story that is actually exposed to a reader right now. */
const shownStories = () => within(carousel()).queryAllByRole('group')

/** The organisation whose story is on screen, read the way a visitor reads it. */
function shownOrg(): string {
  const stories = shownStories()
  if (stories.length !== 1) {
    throw new Error(`expected exactly one story on screen, found ${stories.length}`)
  }
  const text = stories[0].textContent || ''
  const org = ORGS.find((candidate) => text.includes(candidate))
  if (!org) throw new Error('the story on screen is not one of the five customer stories')
  return org
}

/** The "Story N of 5" line the carousel prints for the reader. */
const counter = () => (screen.getByTestId('story-counter').textContent || '').replace(/\s+/g, ' ').trim()

const nextButton = () => screen.getByTestId('story-next')
const prevButton = () => screen.getByTestId('story-prev')

describe('Rooftree landing — structure', () => {
  it('renders the headline', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/finally in one place/i)
  })

  it('renders the story carousel with its arrows and five dots', () => {
    render(<App />)
    expect(carousel()).toBeInTheDocument()
    expect(prevButton()).toBeInTheDocument()
    expect(nextButton()).toBeInTheDocument()
    expect(screen.getAllByTestId('story-dot')).toHaveLength(5)
  })

  it('renders a footer landmark', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})

describe('Rooftree story carousel — the arrows stay in bounds (the defect)', () => {
  it('wraps round to the first story when next is pressed on the last one', async () => {
    const user = userEvent.setup()
    render(<App />)
    for (let step = 0; step < 4; step += 1) await user.click(nextButton())
    expect(shownOrg()).toBe('Saltmarsh Community Homes')

    await user.click(nextButton())
    expect(shownOrg()).toBe('Ninth Street Land Trust')
    expect(counter()).toBe('Story 1 of 5')
  })

  it('wraps back to the last story when previous is pressed on the first one', async () => {
    const user = userEvent.setup()
    render(<App />)
    expect(counter()).toBe('Story 1 of 5')

    await user.click(prevButton())
    expect(shownOrg()).toBe('Saltmarsh Community Homes')
    expect(counter()).toBe('Story 5 of 5')
  })

  it('still shows exactly one story after pressing next well past the end', async () => {
    const user = userEvent.setup()
    render(<App />)
    for (let step = 0; step < 8; step += 1) await user.click(nextButton())
    expect(shownStories()).toHaveLength(1)
  })

  it('never announces a story number outside the five it has', async () => {
    const user = userEvent.setup()
    render(<App />)
    for (let step = 0; step < 9; step += 1) {
      await user.click(nextButton())
      expect(counter()).toMatch(/^Story [1-5] of 5$/)
    }
    for (let step = 0; step < 9; step += 1) {
      await user.click(prevButton())
      expect(counter()).toMatch(/^Story [1-5] of 5$/)
    }
  })

  it('keeps exactly one dot marked as the current story after wrapping', async () => {
    const user = userEvent.setup()
    render(<App />)
    for (let step = 0; step < 5; step += 1) await user.click(nextButton())

    const dots = screen.getAllByTestId('story-dot')
    const current = dots.filter((dot) => dot.getAttribute('aria-current') === 'true')
    expect(current).toHaveLength(1)
    expect(dots.indexOf(current[0])).toBe(0)
  })

  it('comes back to where it started after a full lap forwards', async () => {
    const user = userEvent.setup()
    render(<App />)
    const start = shownOrg()
    for (let step = 0; step < 5; step += 1) await user.click(nextButton())
    expect(shownOrg()).toBe(start)
    expect(counter()).toBe('Story 1 of 5')
  })

  it('keeps the dots in step when the reader goes backwards past the start', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(prevButton())

    const dots = screen.getAllByTestId('story-dot')
    const current = dots.filter((dot) => dot.getAttribute('aria-current') === 'true')
    expect(current).toHaveLength(1)
    expect(dots.indexOf(current[0])).toBe(4)
  })

  it('cycles through all five stories in order, twice, without falling off the end', async () => {
    const user = userEvent.setup()
    render(<App />)
    const seen: string[] = []
    for (let step = 0; step < 10; step += 1) {
      await user.click(nextButton())
      seen.push(shownOrg())
    }
    expect(seen).toEqual([...ORGS.slice(1), ORGS[0], ...ORGS.slice(1), ORGS[0]])
  })
})
