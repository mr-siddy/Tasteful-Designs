import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

const MEMBER_NAMES = [
  'Delphine Okonkwo-Barr',
  'Marcus Trelawney',
  'Rosalind Achebe-Whitfield',
  'Jonah Villareal-Kim',
  'Priscilla Naadu Mensah',
]

const COUNT = MEMBER_NAMES.length

const slides = () => screen.queryAllByTestId('story-slide')
const dots = () => screen.queryAllByTestId('story-dot')
const currentDots = () => dots().filter((dot) => dot.getAttribute('aria-current') === 'true')
const position = () => (screen.getByTestId('story-position').textContent || '').trim()

/** The member currently on screen, or null when there isn't exactly one story showing. */
function visibleName(): string | null {
  const names = screen.queryAllByTestId('story-name')
  return names.length === 1 ? (names[0].textContent || '').trim() : null
}

/** A story is on screen and it is one of the five real members. */
function expectARealStory() {
  expect(slides()).toHaveLength(1)
  expect(MEMBER_NAMES).toContain(visibleName())
}

async function press(testId: string, times: number) {
  const user = userEvent.setup()
  for (let i = 0; i < times; i += 1) {
    await user.click(screen.getByTestId(testId))
  }
}

describe('Foundry Hill landing — structure', () => {
  it('names the gym in the page heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: /strength you can still use at sixty/i })).toBeInTheDocument()
  })

  it('ships the member stories carousel with its controls', () => {
    render(<App />)
    expect(screen.getByTestId('member-stories')).toBeInTheDocument()
    expect(screen.getByTestId('story-prev')).toBeInTheDocument()
    expect(screen.getByTestId('story-next')).toBeInTheDocument()
    expect(dots()).toHaveLength(COUNT)
  })

  it('renders a footer landmark', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})

describe('Foundry Hill member stories — the slider stays in bounds (the defect)', () => {
  it('still shows a story after pressing next past the last one', async () => {
    render(<App />)
    await press('story-next', COUNT)
    expectARealStory()
  })

  it('never counts past the last story', async () => {
    render(<App />)
    await press('story-next', COUNT + 1)
    expect(position()).toMatch(/^[1-5] \/ 5$/)
  })

  it('still shows a story when previous is pressed on the first one', async () => {
    render(<App />)
    await press('story-prev', 1)
    expectARealStory()
  })

  it('never counts below the first story', async () => {
    render(<App />)
    await press('story-prev', 2)
    expect(position()).toMatch(/^[1-5] \/ 5$/)
  })

  it('keeps exactly one dot marked current, including past the end', async () => {
    render(<App />)
    expect(currentDots()).toHaveLength(1)
    await press('story-next', COUNT + 1)
    expect(currentDots()).toHaveLength(1)
  })

  it('keeps a story on screen at every step of a long walk forwards', async () => {
    render(<App />)
    for (let step = 0; step < COUNT + 3; step += 1) {
      await press('story-next', 1)
      expectARealStory()
    }
  })

  it('keeps a story on screen at every step of a long walk backwards', async () => {
    render(<App />)
    for (let step = 0; step < COUNT + 3; step += 1) {
      await press('story-prev', 1)
      expectARealStory()
    }
  })
})
