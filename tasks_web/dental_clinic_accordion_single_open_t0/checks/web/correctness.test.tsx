import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

const questions = () => screen.getAllByTestId('faq-question')
const answers = () => screen.queryAllByTestId('faq-answer')
const expanded = () => questions().filter((q) => q.getAttribute('aria-expanded') === 'true')
const questionByText = (pattern: RegExp) => {
  const match = questions().find((q) => pattern.test(q.textContent ?? ''))
  expect(match, `no FAQ question matching ${pattern}`).toBeTruthy()
  return match as HTMLElement
}

describe('Bramble Court Dental landing — structure', () => {
  it('renders the practice headline and name', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: /the price is on the wall/i }),
    ).toBeInTheDocument()
    expect(screen.getAllByText(/bramble court dental/i).length).toBeGreaterThan(0)
  })

  it('renders a front-desk FAQ of at least seven questions, collapsed on load', () => {
    render(<App />)
    expect(questions().length).toBeGreaterThanOrEqual(7)
    expect(answers()).toHaveLength(0)
  })

  it('renders a footer landmark', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})

describe('Bramble Court FAQ — one answer at a time (the defect)', () => {
  it('shows exactly one answer once a second question is opened', async () => {
    const user = userEvent.setup()
    render(<App />)
    const qs = questions()
    await user.click(qs[0])
    await user.click(qs[1])
    expect(answers()).toHaveLength(1)
  })

  it('still shows exactly one answer once a third question is opened', async () => {
    const user = userEvent.setup()
    render(<App />)
    const qs = questions()
    await user.click(qs[0])
    await user.click(qs[1])
    await user.click(qs[2])
    expect(answers()).toHaveLength(1)
  })

  it('replaces the open answer instead of stacking the new one under it', async () => {
    const user = userEvent.setup()
    render(<App />)
    const qs = questions()
    await user.click(qs[0])
    const firstAnswer = screen.getByTestId('faq-answer').textContent ?? ''
    expect(firstAnswer.length).toBeGreaterThan(0)
    await user.click(qs[1])
    expect(answers().map((a) => a.textContent ?? '')).not.toContain(firstAnswer)
  })

  it('marks exactly one question expanded after two have been opened', async () => {
    const user = userEvent.setup()
    render(<App />)
    const qs = questions()
    await user.click(qs[0])
    await user.click(qs[4])
    expect(expanded()).toHaveLength(1)
    expect(expanded()[0]).toBe(qs[4])
  })

  it('keeps a single answer on screen while every question is opened in turn', async () => {
    const user = userEvent.setup()
    render(<App />)
    for (const question of questions()) {
      await user.click(question)
      expect(answers()).toHaveLength(1)
    }
  })

  it('shows the parking answer on its own after the cost question was read first', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(questionByText(/before I agree to anything/i))
    await user.click(questionByText(/where do I park/i))
    const open = answers()
    expect(open).toHaveLength(1)
    expect(open[0].textContent ?? '').toMatch(/halyard yard/i)
  })

  it('reopening an earlier question brings that answer back on its own', async () => {
    const user = userEvent.setup()
    render(<App />)
    const qs = questions()
    await user.click(qs[1])
    const secondAnswer = screen.getByTestId('faq-answer').textContent ?? ''
    await user.click(qs[5])
    await user.click(qs[1])
    const open = answers()
    expect(open).toHaveLength(1)
    expect(open[0].textContent).toEqual(secondAnswer)
  })
})
