import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

// Block the vacuous pass: "the arrows stay in bounds" must not be satisfied by
// deleting stories, removing the arrows, or gutting the page around them.
const ORGS = [
  'Ninth Street Land Trust',
  'Harbor Commons Housing',
  'Piedmont Mutual Homes',
  'Wabash Neighborhood Trust',
  'Saltmarsh Community Homes',
]

const carousel = () => screen.getByTestId('story-carousel')
const shownStories = () => within(carousel()).queryAllByRole('group')

function onlyShownStory(): HTMLElement {
  const stories = shownStories()
  expect(stories).toHaveLength(1)
  return stories[0]
}

describe('anti-cheat', () => {
  it('keeps all five customer stories reachable from the dots', async () => {
    const user = userEvent.setup()
    render(<App />)
    const dots = screen.getAllByTestId('story-dot')
    expect(dots).toHaveLength(ORGS.length)

    for (let position = 0; position < ORGS.length; position += 1) {
      await user.click(screen.getAllByTestId('story-dot')[position])
      expect(onlyShownStory()).toHaveTextContent(ORGS[position])
    }
  })

  it('keeps a real, attributed story behind every dot', async () => {
    const user = userEvent.setup()
    render(<App />)

    for (let position = 0; position < ORGS.length; position += 1) {
      await user.click(screen.getAllByTestId('story-dot')[position])
      const story = within(onlyShownStory())
      expect((story.getByTestId('story-quote').textContent || '').trim().length).toBeGreaterThanOrEqual(200)
      expect((story.getByTestId('story-person').textContent || '').trim().length).toBeGreaterThanOrEqual(6)
      expect((story.getByTestId('story-role').textContent || '').trim().length).toBeGreaterThanOrEqual(10)
      expect(story.getAllByTestId('story-metric').length).toBeGreaterThanOrEqual(3)
      expect(story.getByRole('heading', { level: 3 })).toBeInTheDocument()
    }
  })

  it('keeps both arrows, with names a screen reader can announce', async () => {
    const user = userEvent.setup()
    render(<App />)
    expect(screen.getByRole('button', { name: /previous story/i })).toBeEnabled()
    expect(screen.getByRole('button', { name: /next story/i })).toBeEnabled()

    // Stepping forward from the opening story must actually move the carousel.
    expect(onlyShownStory()).toHaveTextContent(ORGS[0])
    await user.click(screen.getByTestId('story-next'))
    expect(onlyShownStory()).toHaveTextContent(ORGS[1])
  })

  it('keeps the running story count visible to the reader', () => {
    render(<App />)
    expect((screen.getByTestId('story-counter').textContent || '').replace(/\s+/g, ' ')).toMatch(/of 5/)
  })

  it('keeps the rest of the landing page intact', () => {
    render(<App />)
    const doc = document
    expect(doc.querySelectorAll('section, header, footer').length).toBeGreaterThanOrEqual(10)
    expect(doc.querySelectorAll('h1, h2, h3').length).toBeGreaterThanOrEqual(40)
    expect(doc.querySelectorAll('*').length).toBeGreaterThanOrEqual(700)
    expect((doc.body.textContent || '').trim().split(/\s+/).length).toBeGreaterThanOrEqual(2100)
  })

  it('keeps the supporting sections of the page', () => {
    render(<App />)
    expect(screen.getAllByTestId('hero-stat').length).toBeGreaterThanOrEqual(3)
    expect(screen.getAllByTestId('trust-stat').length).toBeGreaterThanOrEqual(4)
    expect(screen.getAllByTestId('capability-card').length).toBeGreaterThanOrEqual(6)
    expect(screen.getAllByTestId('deep-dive-block').length).toBeGreaterThanOrEqual(3)
    expect(screen.getAllByTestId('integration-item').length).toBeGreaterThanOrEqual(8)
    expect(screen.getAllByTestId('rollout-step').length).toBeGreaterThanOrEqual(5)
    expect(screen.getAllByTestId('outcome-quote').length).toBeGreaterThanOrEqual(3)
    expect(screen.getAllByTestId('faq-item').length).toBeGreaterThanOrEqual(6)
    expect(screen.getAllByTestId('nav-link').length).toBeGreaterThanOrEqual(5)
    expect(screen.getAllByTestId('footer-link').length).toBeGreaterThanOrEqual(14)
  })
})
