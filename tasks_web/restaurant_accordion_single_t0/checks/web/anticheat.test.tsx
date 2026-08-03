import { describe, it, expect } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

// Block the vacuous pass: "exactly one answer is on screen" must not be satisfied
// by deleting the FAQ, dropping questions, or emptying the answers behind them.
// The rest of the landing page is guarded here too, so it cannot be gutted on the
// way past — this gate is binary and never feeds the reward fraction.
describe('anti-cheat — the FAQ still exists', () => {
  it('keeps all seven front-of-house questions', () => {
    render(<App />)
    const labels = screen.getAllByTestId('faq-question').map((q) => q.textContent ?? '')
    expect(labels.length).toBeGreaterThanOrEqual(7)
    const joined = labels.join(' | ')
    expect(joined).toMatch(/book/i)
    expect(joined).toMatch(/walk-ins/i)
    expect(joined).toMatch(/park/i)
    expect(joined).toMatch(/children/i)
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
      expect(words.length).toBeGreaterThanOrEqual(25)
      seen.add(words.join(' '))
      cleanup()
    }
    // Seven distinct answers — not one shared string rendered seven times.
    expect(seen.size).toEqual(total)
  })

  it('keeps the details guests actually ring about', async () => {
    const user = userEvent.setup()
    render(<App />)
    const parking = screen
      .getAllByTestId('faq-question')
      .find((q) => /park/i.test(q.textContent ?? ''))
    expect(parking).toBeTruthy()
    await user.click(parking!)
    const parkingAnswer = screen
      .getAllByTestId('faq-answer')
      .find((a) => /slipway road/i.test(a.textContent ?? ''))
    expect(parkingAnswer).toBeTruthy()
  })
})

describe('anti-cheat — the page is still a page', () => {
  it('keeps the landing page intact', () => {
    render(<App />)
    const doc = document
    expect(doc.querySelectorAll('section, header, footer').length).toBeGreaterThanOrEqual(12)
    expect(doc.querySelectorAll('h1, h2, h3').length).toBeGreaterThanOrEqual(40)
    expect((doc.body.textContent ?? '').trim().split(/\s+/).length).toBeGreaterThanOrEqual(1800)
    expect(doc.querySelectorAll('svg, img').length).toBeGreaterThanOrEqual(40)
  })

  it('keeps the restaurant content the page was built around', () => {
    render(<App />)
    expect(screen.getAllByTestId('dish-card').length).toBeGreaterThanOrEqual(6)
    expect(screen.getAllByTestId('producer-card').length).toBeGreaterThanOrEqual(5)
    expect(screen.getAllByTestId('flow-step').length).toBeGreaterThanOrEqual(5)
    expect(screen.getAllByTestId('team-member').length).toBeGreaterThanOrEqual(4)
    expect(screen.getAllByTestId('guest-review').length).toBeGreaterThanOrEqual(3)
    expect(screen.getAllByTestId('hours-row').length).toBeGreaterThanOrEqual(7)
    expect(screen.getAllByTestId('loft-layout').length).toBeGreaterThanOrEqual(3)
    expect(screen.getAllByTestId('pour-card').length).toBeGreaterThanOrEqual(4)
  })
})
