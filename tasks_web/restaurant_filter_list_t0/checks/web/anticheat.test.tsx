import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

// Block the vacuous pass: "only the matching dishes render" must not be
// satisfiable by rendering no dishes, dropping courses, or gutting the page.
const COURSE_LABELS = ['All dishes', 'Small plates', 'From the hearth', 'Pasta & grains', 'Sweets']

const filters = () => within(screen.getByTestId('menu-filters'))
const cards = () => screen.queryAllByTestId('dish-card')

describe('anti-cheat', () => {
  it('keeps every course filter on the page', () => {
    render(<App />)
    expect(filters().getAllByRole('button').map((b) => (b.textContent || '').trim())).toEqual(
      COURSE_LABELS,
    )
  })

  it('still prints all fourteen dishes on first load', () => {
    render(<App />)
    expect(cards()).toHaveLength(14)
    expect(screen.getByTestId('menu-count')).toHaveTextContent(/of\s+14\s+dishes/i)
  })

  it('every course still reveals real dishes behind it', async () => {
    const user = userEvent.setup()
    render(<App />)
    for (const label of COURSE_LABELS) {
      await user.click(filters().getByRole('button', { name: label }))
      const visible = cards()
      expect(visible.length).toBeGreaterThanOrEqual(2)
      for (const card of visible) {
        expect(within(card).getByTestId('dish-course').textContent).toBeTruthy()
        expect((card.querySelector('h3')?.textContent || '').length).toBeGreaterThan(3)
        expect((card.textContent || '').length).toBeGreaterThan(120)
      }
    }
  })

  it('keeps the prices and the dietary detail on the menu', () => {
    render(<App />)
    expect(screen.getByText('Whole Hearth Trout')).toBeInTheDocument()
    expect(screen.getByText('$32')).toBeInTheDocument()
    expect(screen.getByText('$36')).toBeInTheDocument()
    expect(screen.getByText('Cane Ridge cornmeal · vegetarian')).toBeInTheDocument()
    expect(screen.getAllByTestId('dish-course')).toHaveLength(14)
  })

  it('keeps the page intact', () => {
    render(<App />)
    const doc = document
    expect(doc.querySelectorAll('section, header, footer').length).toBeGreaterThanOrEqual(12)
    expect(doc.querySelectorAll('h1, h2, h3').length).toBeGreaterThanOrEqual(45)
    expect(doc.querySelectorAll('a, button, input, select, textarea').length).toBeGreaterThanOrEqual(
      35,
    )
    expect((doc.body.textContent || '').split(/\s+/).length).toBeGreaterThanOrEqual(2200)
  })
})
