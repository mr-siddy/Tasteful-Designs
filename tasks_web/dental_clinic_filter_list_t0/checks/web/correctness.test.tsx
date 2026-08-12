import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

const index = () => screen.getByTestId('treatment-index')
const cards = () => within(index()).queryAllByTestId('treatment-card')
const cardNames = () =>
  cards().map((card) => (card.querySelector('h3')?.textContent ?? '').trim())
const countLabel = () => within(index()).getByTestId('treatment-count')
const chooseCategory = async (user: ReturnType<typeof userEvent.setup>, label: string) => {
  await user.click(within(index()).getByRole('button', { name: label }))
}

const PREVENTIVE = ['Exam and hygiene visit', "Children's first checkup", 'Night guard for grinding']
const COSMETIC = [
  'Take-home whitening kit',
  'Composite bonding',
  'Porcelain veneer',
  'Gum reshaping',
]
const RESTORATIVE = ['White filling', 'Same-day ceramic crown', 'Root canal treatment']
const EMERGENCY = ['Toothache triage appointment', 'Chipped or knocked-out tooth']

describe('Tidewater Dental Studio landing — structure', () => {
  it('names the practice in the page heading', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: /tidewater dental studio/i }),
    ).toBeInTheDocument()
  })

  it('offers a filter button for every category of the treatment index', () => {
    render(<App />)
    const labels = within(index())
      .getAllByTestId('treatment-filter')
      .map((button) => (button.textContent ?? '').trim())
    expect(labels).toEqual(['All', 'Preventive', 'Cosmetic', 'Restorative', 'Emergency'])
  })

  it('renders a footer landmark', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})

describe('Tidewater treatment index — the category filter (the defect)', () => {
  it('narrows the index to the preventive treatments', async () => {
    const user = userEvent.setup()
    render(<App />)
    await chooseCategory(user, 'Preventive')
    expect(cardNames().sort()).toEqual([...PREVENTIVE].sort())
  })

  it('narrows the index to the cosmetic treatments', async () => {
    const user = userEvent.setup()
    render(<App />)
    await chooseCategory(user, 'Cosmetic')
    expect(cardNames().sort()).toEqual([...COSMETIC].sort())
    expect(within(index()).queryByText(/white filling/i)).toBeNull()
  })

  it('narrows the index to the restorative treatments', async () => {
    const user = userEvent.setup()
    render(<App />)
    await chooseCategory(user, 'Restorative')
    expect(cardNames().sort()).toEqual([...RESTORATIVE].sort())
    expect(within(index()).queryByText(/take-home whitening kit/i)).toBeNull()
  })

  it('narrows the index to the emergency treatments', async () => {
    const user = userEvent.setup()
    render(<App />)
    await chooseCategory(user, 'Emergency')
    expect(cardNames().sort()).toEqual([...EMERGENCY].sort())
    expect(within(index()).queryByText(/exam and hygiene visit/i)).toBeNull()
  })

  it('replaces the previous category rather than adding to it', async () => {
    const user = userEvent.setup()
    render(<App />)
    await chooseCategory(user, 'Preventive')
    await chooseCategory(user, 'Restorative')
    expect(cards()).toHaveLength(RESTORATIVE.length)
    expect(within(index()).queryByText(/night guard for grinding/i)).toBeNull()
    expect(within(index()).getByText(/same-day ceramic crown/i)).toBeInTheDocument()
  })

  it('brings the whole catalogue back when All is chosen', async () => {
    const user = userEvent.setup()
    render(<App />)
    await chooseCategory(user, 'Emergency')
    expect(cards()).toHaveLength(EMERGENCY.length)
    await chooseCategory(user, 'All')
    expect(cards()).toHaveLength(12)
    for (const name of [...PREVENTIVE, ...COSMETIC, ...RESTORATIVE, ...EMERGENCY]) {
      expect(cardNames()).toContain(name)
    }
  })

  it('keeps the visible count in step with the filter', async () => {
    const user = userEvent.setup()
    render(<App />)
    expect(countLabel()).toHaveTextContent(/12\s+of\s+12/)
    await chooseCategory(user, 'Cosmetic')
    expect(countLabel()).toHaveTextContent(/4\s+of\s+12/)
    await chooseCategory(user, 'Emergency')
    expect(countLabel()).toHaveTextContent(/2\s+of\s+12/)
    await chooseCategory(user, 'All')
    expect(countLabel()).toHaveTextContent(/12\s+of\s+12/)
  })
})
