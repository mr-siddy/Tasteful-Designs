import { describe, it, expect } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

// Block the vacuous pass: "exactly one answer is on screen" must not be satisfied
// by deleting the FAQ, dropping its questions, or emptying the answers. Also keep
// the rest of the landing page from being gutted on the way past.
describe('anti-cheat — the FAQ still exists', () => {
  it('keeps at least seven front-desk questions', () => {
    render(<App />)
    const labels = screen.getAllByTestId('faq-question').map((q) => q.textContent ?? '')
    expect(labels.length).toBeGreaterThanOrEqual(7)
    expect(labels.join(' | ')).toMatch(/contract or a joining fee/i)
    expect(labels.join(' | ')).toMatch(/bad back/i)
    expect(labels.join(' | ')).toMatch(/park/i)
  })

  it('every question still opens a real answer of its own', async () => {
    const user = userEvent.setup()
    render(<App />)
    const total = screen.getAllByTestId('faq-question').length
    cleanup()

    const seen = new Set<string>()
    for (let i = 0; i < total; i += 1) {
      render(<App />)
      await user.click(screen.getAllByTestId('faq-question')[i])
      const opened = screen.getAllByTestId('faq-answer')
      expect(opened.length).toBeGreaterThanOrEqual(1)
      const words = (opened[0].textContent ?? '').trim().split(/\s+/)
      expect(words.length).toBeGreaterThanOrEqual(20)
      seen.add(words.join(' '))
      cleanup()
    }
    // Distinct answers — not one shared string rendered seven times.
    expect(seen.size).toEqual(total)
  })

  it('keeps the specifics people actually ask about', async () => {
    const user = userEvent.setup()
    render(<App />)
    const parking = screen
      .getAllByTestId('faq-question')
      .find((q) => /park/i.test(q.textContent ?? ''))
    expect(parking).toBeTruthy()
    await user.click(parking!)
    const parkingAnswer = screen
      .getAllByTestId('faq-answer')
      .find((a) => /lowry lane/i.test(a.textContent ?? ''))
    expect(parkingAnswer).toBeTruthy()
  })
})

describe('anti-cheat — the page is still a page', () => {
  it('keeps the landing page intact', () => {
    render(<App />)
    const doc = document
    expect(doc.querySelectorAll('section, header, footer').length).toBeGreaterThanOrEqual(12)
    expect(doc.querySelectorAll('h1, h2, h3').length).toBeGreaterThanOrEqual(30)
    expect((doc.body.textContent ?? '').trim().split(/\s+/).length).toBeGreaterThanOrEqual(1500)
    expect(doc.querySelectorAll('svg, img').length).toBeGreaterThanOrEqual(40)
  })

  it('keeps the studio content the page was built around', () => {
    render(<App />)
    expect(screen.getAllByTestId('program-card').length).toBeGreaterThanOrEqual(6)
    expect(screen.getAllByTestId('timetable-row').length).toBeGreaterThanOrEqual(10)
    expect(screen.getAllByTestId('coach-card').length).toBeGreaterThanOrEqual(4)
    expect(screen.getAllByTestId('member-story').length).toBeGreaterThanOrEqual(3)
    expect(screen.getAllByTestId('tier-card').length).toBeGreaterThanOrEqual(3)
    expect(screen.getByTestId('intro-form')).toBeInTheDocument()
  })
})
