import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

const STORY_NAMES = [
  'Marguerite Sowande',
  'Danny Reyes-Whitlock',
  'Priya Venkataraman',
  'Owen Fitzsimmons',
]

const slides = () => screen.queryAllByTestId('story-slide')
const dots = () => screen.queryAllByTestId('story-dot')
const currentDots = () => dots().filter((dot) => dot.getAttribute('aria-current') === 'true')
const position = () => (screen.getByTestId('story-position').textContent || '').trim()

/** The name on the story currently on screen, or null if there is not exactly one. */
function visibleName(): string | null {
  const names = screen.queryAllByTestId('story-name')
  return names.length === 1 ? (names[0].textContent || '').trim() : null
}

async function press(testId: string, times: number) {
  const user = userEvent.setup()
  for (let i = 0; i < times; i += 1) {
    await user.click(screen.getByTestId(testId))
  }
}

describe('Ember & Oak landing — structure', () => {
  it('names the restaurant in the page heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: /ember & oak/i })).toBeInTheDocument()
  })

  it('ships the guest stories carousel with its controls', () => {
    render(<App />)
    expect(screen.getByTestId('guest-stories')).toBeInTheDocument()
    expect(screen.getByTestId('story-prev')).toBeInTheDocument()
    expect(screen.getByTestId('story-next')).toBeInTheDocument()
    expect(dots()).toHaveLength(STORY_NAMES.length)
  })

  it('renders a footer landmark', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})

describe('Ember & Oak guest stories — the slider stays in bounds (the defect)', () => {
  it('still shows a story after pressing next past the last one', async () => {
    render(<App />)
    await press('story-next', STORY_NAMES.length)
    expect(slides()).toHaveLength(1)
    expect(STORY_NAMES).toContain(visibleName())
  })

  it('never counts past the last story', async () => {
    render(<App />)
    await press('story-next', STORY_NAMES.length + 1)
    expect(position()).toMatch(/^[1-4] \/ 4$/)
  })

  it('still shows a story when previous is pressed on the first one', async () => {
    render(<App />)
    await press('story-prev', 1)
    expect(slides()).toHaveLength(1)
    expect(STORY_NAMES).toContain(visibleName())
  })

  it('never counts below the first story', async () => {
    render(<App />)
    await press('story-prev', 2)
    expect(position()).toMatch(/^[1-4] \/ 4$/)
  })

  it('always marks exactly one story dot as current, including past the ends', async () => {
    render(<App />)
    expect(currentDots()).toHaveLength(1)
    await press('story-next', STORY_NAMES.length)
    expect(currentDots()).toHaveLength(1)
    await press('story-prev', STORY_NAMES.length + 2)
    expect(currentDots()).toHaveLength(1)
  })

  it('lands on a real story after running off both ends', async () => {
    render(<App />)
    await press('story-next', 6)
    await press('story-prev', 9)
    expect(slides()).toHaveLength(1)
    expect(STORY_NAMES).toContain(visibleName())
    expect((screen.getByTestId('story-quote').textContent || '').trim().length).toBeGreaterThan(60)
    expect(position()).toMatch(/^[1-4] \/ 4$/)
  })
})
