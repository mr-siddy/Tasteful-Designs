import { describe, it, expect } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

// Block the vacuous pass: "exactly one answer is on screen" must not be reached by
// deleting the FAQ, dropping its questions, emptying the answers, or making the
// answers permanently unreachable. The second block stops the rest of the landing
// page being gutted on the way past.
describe('anti-cheat — the FAQ still exists', () => {
  it('keeps at least seven front-desk questions', () => {
    render(<App />)
    const labels = screen.getAllByTestId('faq-question').map((q) => q.textContent ?? '')
    expect(labels.length).toBeGreaterThanOrEqual(7)
    const joined = labels.join(' | ')
    expect(joined).toMatch(/before I agree to anything/i)
    expect(joined).toMatch(/frightened of the chair/i)
    expect(joined).toMatch(/where do I park/i)
  })

  it('every question still opens a real answer of its own', async () => {
    const user = userEvent.setup()
    render(<App />)
    const total = screen.getAllByTestId('faq-question').length
    cleanup()

    const seen = new Set<string>()
    for (let index = 0; index < total; index += 1) {
      render(<App />)
      await user.click(screen.getAllByTestId('faq-question')[index])
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

  it('lets the open question be closed again', async () => {
    const user = userEvent.setup()
    render(<App />)
    const first = screen.getAllByTestId('faq-question')[0]
    await user.click(first)
    expect(screen.getAllByTestId('faq-answer').length).toBeGreaterThanOrEqual(1)
    await user.click(first)
    expect(screen.queryAllByTestId('faq-answer')).toHaveLength(0)
  })

  it('keeps the specifics people actually ring up about', async () => {
    const user = userEvent.setup()
    render(<App />)
    const parking = screen
      .getAllByTestId('faq-question')
      .find((q) => /where do I park/i.test(q.textContent ?? ''))
    expect(parking).toBeTruthy()
    await user.click(parking!)
    const parkingAnswer = screen
      .getAllByTestId('faq-answer')
      .find((a) => /halyard yard/i.test(a.textContent ?? ''))
    expect(parkingAnswer).toBeTruthy()
  })
})

describe('anti-cheat — the page is still a page', () => {
  it('keeps the landing page intact', () => {
    render(<App />)
    const doc = document
    expect(doc.querySelectorAll('section, header, footer').length).toBeGreaterThanOrEqual(12)
    expect(doc.querySelectorAll('h1, h2, h3').length).toBeGreaterThanOrEqual(30)
    expect((doc.body.textContent ?? '').trim().split(/\s+/).length).toBeGreaterThanOrEqual(1800)
    expect(doc.querySelectorAll('svg, img').length).toBeGreaterThanOrEqual(45)
  })

  it('keeps the practice content the page was built around', () => {
    render(<App />)
    expect(screen.getAllByTestId('treatment-card').length).toBeGreaterThanOrEqual(6)
    expect(screen.getAllByTestId('fee-row').length).toBeGreaterThanOrEqual(10)
    expect(screen.getAllByTestId('visit-step').length).toBeGreaterThanOrEqual(5)
    expect(screen.getAllByTestId('team-member').length).toBeGreaterThanOrEqual(4)
    expect(screen.getAllByTestId('patient-story').length).toBeGreaterThanOrEqual(3)
    expect(screen.getAllByTestId('plan-card').length).toBeGreaterThanOrEqual(3)
    expect(screen.getAllByTestId('hours-row').length).toBeGreaterThanOrEqual(7)
    expect(screen.getByTestId('callback-form')).toBeInTheDocument()
  })
})
