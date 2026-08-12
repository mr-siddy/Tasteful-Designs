import { describe, it, expect } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

// Block the vacuous pass: "exactly one answer is on screen" must not be satisfied
// by deleting the FAQ, dropping its questions, or emptying the answers behind them.
// The rest of the landing page is guarded here too, so it cannot be gutted on the
// way past — this gate is binary, so it never adds free credit to the reward.
describe('anti-cheat — the FAQ still exists', () => {
  it('keeps all seven pre-call questions', () => {
    render(<App />)
    const labels = screen.getAllByTestId('faq-question').map((question) => question.textContent ?? '')
    expect(labels.length).toBeGreaterThanOrEqual(7)
    const joined = labels.join(' | ')
    expect(joined).toMatch(/spreadsheet/i)
    expect(joined).toMatch(/metadata/i)
    expect(joined).toMatch(/printer/i)
    expect(joined).toMatch(/freelancers/i)
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

  it('keeps the specifics publishers actually ask about', async () => {
    const user = userEvent.setup()
    render(<App />)
    const dates = screen
      .getAllByTestId('faq-question')
      .find((question) => /pub date/i.test(question.textContent ?? ''))
    expect(dates).toBeTruthy()
    await user.click(dates!)
    const datesAnswer = screen
      .getAllByTestId('faq-answer')
      .find((answer) => /advance-copy mailing/i.test(answer.textContent ?? ''))
    expect(datesAnswer).toBeTruthy()
  })
})

describe('anti-cheat — the page is still a page', () => {
  it('keeps the landing page intact', () => {
    render(<App />)
    const doc = document
    expect(doc.querySelectorAll('section, header, footer').length).toBeGreaterThanOrEqual(11)
    expect(doc.querySelectorAll('h1, h2, h3').length).toBeGreaterThanOrEqual(28)
    expect((doc.body.textContent ?? '').trim().split(/\s+/).length).toBeGreaterThanOrEqual(1500)
    expect(doc.querySelectorAll('svg, img').length).toBeGreaterThanOrEqual(40)
  })

  it('keeps the publishing content the page was built around', () => {
    render(<App />)
    expect(screen.getAllByTestId('module-card').length).toBeGreaterThanOrEqual(6)
    expect(screen.getAllByTestId('title-row').length).toBeGreaterThanOrEqual(8)
    expect(screen.getAllByTestId('proof-step').length).toBeGreaterThanOrEqual(5)
    expect(screen.getAllByTestId('feed-row').length).toBeGreaterThanOrEqual(6)
    expect(screen.getAllByTestId('rollout-step').length).toBeGreaterThanOrEqual(4)
    expect(screen.getAllByTestId('tier-card').length).toBeGreaterThanOrEqual(3)
    expect(screen.getAllByTestId('customer-story').length).toBeGreaterThanOrEqual(3)
    expect(screen.getByTestId('demo-form')).toBeInTheDocument()
  })
})
