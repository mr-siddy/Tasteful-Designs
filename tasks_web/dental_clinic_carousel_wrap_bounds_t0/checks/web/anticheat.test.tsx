import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

const NAMES = ['Marta Kowalczyk', 'Alan Prideaux', 'Deborah Finch', 'Sam Okonjo', 'Priya Raghunathan']

const carousel = () => screen.getByTestId('stories-carousel')
const showingSlides = () => within(carousel()).queryAllByRole('group')

// Block the vacuous pass: "the slider never runs off its ends" must not be
// satisfied by pinning it to one story, emptying the slides, or deleting the
// controls. And the rest of the page has to survive too.
describe('anti-cheat', () => {
  it('keeps all five patient stories in the slider', () => {
    render(<App />)
    const slides = screen.getAllByTestId('story-slide')
    expect(slides).toHaveLength(5)
    slides.forEach((slide, i) => {
      const text = (slide.textContent || '').trim()
      expect(text).toContain(NAMES[i])
      expect(text.split(/\s+/).length).toBeGreaterThanOrEqual(40)
    })
  })

  it('keeps both arrows and all five jump dots, each with an accessible name', () => {
    render(<App />)
    expect(screen.getByTestId('stories-prev')).toHaveAccessibleName()
    expect(screen.getByTestId('stories-next')).toHaveAccessibleName()
    const dots = screen.getAllByTestId('story-dot')
    expect(dots).toHaveLength(5)
    dots.forEach((dot) => expect(dot).toHaveAccessibleName())
  })

  it('still reaches every one of the five stories through its dot', async () => {
    const user = userEvent.setup()
    render(<App />)
    for (let i = 0; i < NAMES.length; i++) {
      await user.click(screen.getAllByTestId('story-dot')[i])
      expect(showingSlides()).toHaveLength(1)
      expect(showingSlides()[0].textContent || '').toContain(NAMES[i])
    }
  })

  it('still moves off the opening story when next is pressed once', async () => {
    const user = userEvent.setup()
    render(<App />)
    expect(showingSlides()[0].textContent || '').toContain(NAMES[0])
    await user.click(screen.getByTestId('stories-next'))
    expect(showingSlides()).toHaveLength(1)
    expect(showingSlides()[0].textContent || '').toContain(NAMES[1])
  })

  it('keeps the published price list intact', () => {
    render(<App />)
    expect(screen.getAllByTestId('treatment-row').length).toBeGreaterThanOrEqual(8)
    expect(screen.getByText('£2,150')).toBeInTheDocument()
    expect(screen.getByText(/crown, made in-house/i)).toBeInTheDocument()
  })

  it('keeps the rest of the page intact', () => {
    render(<App />)
    const doc = document
    expect(doc.querySelectorAll('section, header, footer').length).toBeGreaterThanOrEqual(12)
    expect(doc.querySelectorAll('h1, h2, h3').length).toBeGreaterThanOrEqual(42)
    expect(doc.querySelectorAll('a, button, input, select, textarea').length).toBeGreaterThanOrEqual(30)
    expect(doc.querySelectorAll('svg').length).toBeGreaterThanOrEqual(30)
    expect((doc.body.textContent || '').split(/\s+/).length).toBeGreaterThanOrEqual(2400)
  })
})
