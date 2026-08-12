import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

const filters = () => within(screen.getByTestId('menu-filters'))
const list = () => screen.getByTestId('menu-list')
const cards = () => screen.queryAllByTestId('dish-card')
const courseBadges = () =>
  cards().map((card) => (within(card).getByTestId('dish-course').textContent || '').trim())
const titleOf = (card: HTMLElement) => (card.querySelector('h3')?.textContent || '').trim()
const titles = () => cards().map(titleOf)

const choose = async (user: ReturnType<typeof userEvent.setup>, label: string) => {
  await user.click(filters().getByRole('button', { name: label }))
}

describe('Persimmon & Rye landing — structure', () => {
  it('renders the restaurant name as the page heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: /persimmon & rye/i })).toBeInTheDocument()
  })

  it('offers every course as a filter above the menu', () => {
    render(<App />)
    expect(filters().getAllByRole('button').map((b) => (b.textContent || '').trim())).toEqual([
      'All dishes',
      'Small plates',
      'From the hearth',
      'Pasta & grains',
      'Sweets',
    ])
  })

  it('renders a footer landmark', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})

describe('Persimmon & Rye menu — the course buttons filter the list (the defect)', () => {
  it('narrows the menu to the five small plates', async () => {
    const user = userEvent.setup()
    render(<App />)
    await choose(user, 'Small plates')
    expect(cards()).toHaveLength(5)
    expect(courseBadges()).toEqual([
      'Small plate',
      'Small plate',
      'Small plate',
      'Small plate',
      'Small plate',
    ])
    expect(within(list()).queryByText('Whole Hearth Trout')).toBeNull()
    expect(within(list()).queryByText('Persimmon Pudding Cake')).toBeNull()
  })

  it('narrows the menu to the four dishes off the hearth', async () => {
    const user = userEvent.setup()
    render(<App />)
    await choose(user, 'From the hearth')
    expect([...titles()].sort()).toEqual([
      'Coal-Roasted Half Chicken',
      'Ember-Baked Sweet Potato',
      'White Oak Pork Chop',
      'Whole Hearth Trout',
    ])
    expect(within(list()).queryByText('Skillet Cornbread with Sorghum Butter')).toBeNull()
  })

  it('narrows the menu to the two sweets', async () => {
    const user = userEvent.setup()
    render(<App />)
    await choose(user, 'Sweets')
    expect(cards()).toHaveLength(2)
    expect(courseBadges()).toEqual(['Sweets', 'Sweets'])
    expect(within(list()).getByText('Persimmon Pudding Cake')).toBeInTheDocument()
  })

  it('replaces one course with the next instead of adding to it', async () => {
    const user = userEvent.setup()
    render(<App />)
    await choose(user, 'From the hearth')
    await choose(user, 'Pasta & grains')
    expect(cards()).toHaveLength(3)
    expect(within(list()).getByText('Rye Pappardelle with Nettle')).toBeInTheDocument()
    expect(within(list()).queryByText('Whole Hearth Trout')).toBeNull()
    expect(within(list()).queryByText('Charred Okra and Benne')).toBeNull()
  })

  it('brings the whole menu back when All dishes is chosen', async () => {
    const user = userEvent.setup()
    render(<App />)
    await choose(user, 'Small plates')
    expect(cards()).toHaveLength(5)
    await choose(user, 'All dishes')
    expect(cards()).toHaveLength(14)
    for (const name of [
      'Hearth Bread and Cultured Butter',
      'Whole Hearth Trout',
      'Cane Ridge Grits and Wild Mushroom',
      'Buttermilk Ice with Honeycomb',
    ]) {
      expect(within(list()).getByText(name)).toBeInTheDocument()
    }
  })

  it('keeps the summary line in step with the dishes on screen', async () => {
    const user = userEvent.setup()
    render(<App />)
    const count = () => screen.getByTestId('menu-count')
    expect(count()).toHaveTextContent(/showing 14 of 14 dishes/i)
    await choose(user, 'From the hearth')
    expect(count()).toHaveTextContent(/showing 4 of 14 dishes/i)
    await choose(user, 'Sweets')
    expect(count()).toHaveTextContent(/showing 2 of 14 dishes/i)
    await choose(user, 'All dishes')
    expect(count()).toHaveTextContent(/showing 14 of 14 dishes/i)
  })
})
