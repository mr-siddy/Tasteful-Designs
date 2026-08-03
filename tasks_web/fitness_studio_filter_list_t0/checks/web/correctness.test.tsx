import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

const STRENGTH = ['Barbell Basics', 'Heavy Hour', 'Kettlebell Ladders']
const CONDITIONING = ['Sunrise Intervals', 'Row & Recover', 'Hill Repeats']
const MOBILITY = ['Deep Stretch', 'Hips & Shoulders']
const EVERY_CLASS = [...STRENGTH, ...CONDITIONING, ...MOBILITY]

/** The class names currently on screen, sorted so any order of cards is accepted. */
const shown = () =>
  screen
    .queryAllByTestId('class-card')
    .map((card) => within(card).getByRole('heading', { level: 3 }).textContent)
    .sort()

const filterButton = (label: string) =>
  within(screen.getByTestId('class-filter')).getByRole('button', { name: label })

describe('Ridgeline Studio landing — structure', () => {
  it('renders the studio name', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: /ridgeline studio/i })).toBeInTheDocument()
  })

  it('offers a filter button for each type of class', () => {
    render(<App />)
    const buttons = within(screen.getByTestId('class-filter')).getAllByRole('button')
    expect(buttons.map((b) => b.textContent)).toEqual([
      'All',
      'Strength',
      'Conditioning',
      'Mobility',
    ])
  })

  it('renders a footer landmark', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})

describe('Ridgeline Studio schedule — the filter (the defect)', () => {
  it('shows only the strength classes when Strength is chosen', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(filterButton('Strength'))
    expect(shown()).toEqual([...STRENGTH].sort())
  })

  it('shows only the conditioning classes when Conditioning is chosen', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(filterButton('Conditioning'))
    expect(shown()).toEqual([...CONDITIONING].sort())
  })

  it('shows only the mobility classes, and nothing from the other types', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(filterButton('Mobility'))
    expect(shown()).toEqual([...MOBILITY].sort())
    expect(screen.queryByText('Barbell Basics')).toBeNull()
    expect(screen.queryByText('Hill Repeats')).toBeNull()
  })

  it('replaces the list when moving straight from one type to another', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(filterButton('Strength'))
    await user.click(filterButton('Conditioning'))
    expect(shown()).toEqual([...CONDITIONING].sort())
    expect(filterButton('Conditioning')).toHaveAttribute('aria-pressed', 'true')
    expect(filterButton('Strength')).toHaveAttribute('aria-pressed', 'false')
  })

  it('brings the whole week back when All is chosen after filtering', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(filterButton('Mobility'))
    await user.click(filterButton('All'))
    expect(shown()).toEqual([...EVERY_CLASS].sort())
  })

  it('keeps the count of shown classes in step with the filter', async () => {
    const user = userEvent.setup()
    render(<App />)
    expect(screen.getByTestId('class-count')).toHaveTextContent(/showing 8 of 8/i)
    await user.click(filterButton('Conditioning'))
    expect(screen.getByTestId('class-count')).toHaveTextContent(/showing 3 of 8/i)
    await user.click(filterButton('All'))
    expect(screen.getByTestId('class-count')).toHaveTextContent(/showing 8 of 8/i)
  })
})
