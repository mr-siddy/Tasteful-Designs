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

// Block the vacuous pass: "the slider never runs off the end" must not be
// satisfied by freezing the controls, emptying the story list, or deleting the
// carousel — and the page around it has to survive too.
describe('anti-cheat', () => {
  it('still walks through all four guest stories with the next control', async () => {
    const user = userEvent.setup()
    render(<App />)
    const seen: string[] = []
    for (let i = 0; i < STORY_NAMES.length; i += 1) {
      const names = screen.queryAllByTestId('story-name')
      expect(names).toHaveLength(1)
      seen.push((names[0].textContent || '').trim())
      const quote = (screen.getByTestId('story-quote').textContent || '').trim()
      expect(quote.length).toBeGreaterThan(60)
      await user.click(screen.getByTestId('story-next'))
    }
    expect([...seen].sort()).toEqual([...STORY_NAMES].sort())
  })

  it('keeps the previous control, the four dots and the position counter', () => {
    render(<App />)
    expect(screen.getByTestId('story-prev')).toBeInTheDocument()
    expect(screen.getByTestId('story-next')).toBeInTheDocument()
    expect(screen.queryAllByTestId('story-dot')).toHaveLength(STORY_NAMES.length)
    expect((screen.getByTestId('story-position').textContent || '').trim()).toMatch(/\d/)
  })

  it('lets a dot jump straight to its story', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.queryAllByTestId('story-dot')[2])
    expect((screen.getByTestId('story-name').textContent || '').trim()).toBe(STORY_NAMES[2])
  })

  it('keeps the rest of the landing page intact', () => {
    render(<App />)
    const doc = document
    expect(doc.querySelectorAll('section, header, footer').length).toBeGreaterThanOrEqual(10)
    expect(doc.querySelectorAll('h1, h2, h3').length).toBeGreaterThanOrEqual(24)
    expect(doc.querySelectorAll('*').length).toBeGreaterThanOrEqual(450)
    expect((doc.body.textContent || '').split(/\s+/).length).toBeGreaterThanOrEqual(1400)
    expect(screen.queryAllByTestId('menu-dish').length).toBeGreaterThanOrEqual(6)
    expect(screen.queryAllByTestId('faq-item').length).toBeGreaterThanOrEqual(5)
  })
})
