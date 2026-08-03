import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

const filters = () => within(screen.getByTestId('class-filters'))
const list = () => screen.getByTestId('class-list')
const cards = () => screen.queryAllByTestId('class-card')
const trackBadges = () =>
  cards().map((card) => (within(card).getByTestId('class-track').textContent || '').trim())
const titleOf = (card: HTMLElement) => (card.querySelector('h3')?.textContent || '').trim()
const titles = () => cards().map(titleOf)

const choose = async (user: ReturnType<typeof userEvent.setup>, label: string) => {
  await user.click(filters().getByRole('button', { name: label }))
}

const summaryCount = () => {
  const text = screen.getByTestId('class-count').textContent || ''
  const match = text.match(/(\d+)\s+of\s+(\d+)/)
  return match ? Number(match[1]) : -1
}

describe('Tidewater landing — structure', () => {
  it('renders the studio name as the page heading', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: /tidewater strength/i }),
    ).toBeInTheDocument()
  })

  it('offers every track as a filter above the schedule', () => {
    render(<App />)
    expect(filters().getAllByRole('button').map((b) => (b.textContent || '').trim())).toEqual([
      'All classes',
      'Strength',
      'Conditioning',
      'Mobility',
      'Semi-private',
    ])
  })

  it('renders a footer landmark', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})

describe('Tidewater schedule — the category buttons filter the list (the defect)', () => {
  it('narrows the schedule to the strength sessions', async () => {
    const user = userEvent.setup()
    render(<App />)
    await choose(user, 'Strength')
    expect(cards()).toHaveLength(4)
    expect(trackBadges()).toEqual(['Strength', 'Strength', 'Strength', 'Strength'])
    expect(within(list()).queryByText('Rowing Intervals')).toBeNull()
    expect(within(list()).queryByText('Slow Flow')).toBeNull()
  })

  it('narrows the schedule to the mobility sessions', async () => {
    const user = userEvent.setup()
    render(<App />)
    await choose(user, 'Mobility')
    expect([...titles()].sort()).toEqual(['Hips and Hinge', 'Shoulder Reset', 'Slow Flow'])
    expect(within(list()).queryByText('Barbell Foundations')).toBeNull()
  })

  it('narrows the schedule to the two semi-private sessions', async () => {
    const user = userEvent.setup()
    render(<App />)
    await choose(user, 'Semi-private')
    expect(cards()).toHaveLength(2)
    expect(trackBadges()).toEqual(['Semi-private', 'Semi-private'])
  })

  it('replaces one track with the next instead of adding to it', async () => {
    const user = userEvent.setup()
    render(<App />)
    await choose(user, 'Strength')
    await choose(user, 'Conditioning')
    expect(cards()).toHaveLength(3)
    expect(within(list()).getByText('Engine Room')).toBeInTheDocument()
    expect(within(list()).queryByText('Barbell Foundations')).toBeNull()
    expect(within(list()).queryByText('Press Club')).toBeNull()
  })

  it('brings the whole week back when All classes is chosen', async () => {
    const user = userEvent.setup()
    render(<App />)
    await choose(user, 'Strength')
    expect(cards()).toHaveLength(4)
    await choose(user, 'All classes')
    expect(cards()).toHaveLength(12)
    for (const title of ['Barbell Foundations', 'Engine Room', 'Slow Flow', 'Return to Lifting']) {
      expect(within(list()).getByText(title)).toBeInTheDocument()
    }
  })

  it('keeps the summary line in step with the classes on screen', async () => {
    const user = userEvent.setup()
    render(<App />)
    expect(summaryCount()).toBe(cards().length)
    await choose(user, 'Conditioning')
    expect(summaryCount()).toBe(cards().length)
    await choose(user, 'Mobility')
    expect(summaryCount()).toBe(cards().length)
    await choose(user, 'All classes')
    expect(summaryCount()).toBe(cards().length)
  })
})
