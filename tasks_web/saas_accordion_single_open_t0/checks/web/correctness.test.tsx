import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

const questions = () => screen.getAllByTestId('faq-question')
const answers = () => screen.queryAllByTestId('faq-answer')
const expandedQuestions = () =>
  questions().filter((question) => question.getAttribute('aria-expanded') === 'true')

describe('Colophon landing — structure', () => {
  it('renders the product name', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: /colophon/i })).toBeInTheDocument()
  })

  it('renders an FAQ of at least six questions, collapsed on load', () => {
    render(<App />)
    expect(questions().length).toBeGreaterThanOrEqual(6)
    expect(answers()).toHaveLength(0)
  })

  it('renders a footer landmark', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})

describe('Colophon FAQ — one answer at a time (the defect)', () => {
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
    await user.click(qs[2])
    expect(answers().map((answer) => answer.textContent ?? '')).not.toContain(firstAnswer)
  })

  it('marks exactly one question expanded after two have been opened', async () => {
    const user = userEvent.setup()
    render(<App />)
    const qs = questions()
    await user.click(qs[1])
    await user.click(qs[4])
    expect(expandedQuestions()).toHaveLength(1)
  })

  it('keeps a single answer on screen while every question is opened in turn', async () => {
    const user = userEvent.setup()
    render(<App />)
    for (const question of questions()) {
      await user.click(question)
      expect(answers()).toHaveLength(1)
    }
  })

  it('reopening an earlier question brings back that answer on its own', async () => {
    const user = userEvent.setup()
    render(<App />)
    const qs = questions()
    await user.click(qs[2])
    const thirdAnswer = screen.getByTestId('faq-answer').textContent ?? ''
    await user.click(qs[5])
    await user.click(qs[2])
    const open = answers()
    expect(open).toHaveLength(1)
    expect(open[0].textContent).toEqual(thirdAnswer)
  })
})
