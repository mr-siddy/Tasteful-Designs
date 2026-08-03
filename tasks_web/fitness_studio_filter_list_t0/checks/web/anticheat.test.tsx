import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

// Block the vacuous pass: "only the matching classes render" must not be
// satisfiable by rendering no classes, dropping tracks, or gutting the page.
const TRACK_LABELS = ['All classes', 'Strength', 'Conditioning', 'Mobility', 'Semi-private']

const filters = () => within(screen.getByTestId('class-filters'))
const cards = () => screen.queryAllByTestId('class-card')

describe('anti-cheat', () => {
  it('keeps every track filter on the page', () => {
    render(<App />)
    expect(filters().getAllByRole('button').map((b) => (b.textContent || '').trim())).toEqual(
      TRACK_LABELS,
    )
  })

  it('still lists the full week of twelve sessions on first load', () => {
    render(<App />)
    expect(cards()).toHaveLength(12)
    expect(screen.getByTestId('class-count')).toHaveTextContent(/of\s+12\s+sessions/i)
  })

  it('every track still reveals real classes behind it', async () => {
    const user = userEvent.setup()
    render(<App />)
    for (const label of TRACK_LABELS) {
      await user.click(filters().getByRole('button', { name: label }))
      const visible = cards()
      expect(visible.length).toBeGreaterThanOrEqual(2)
      for (const card of visible) {
        expect(within(card).getByTestId('class-track').textContent).toBeTruthy()
        expect((card.querySelector('h3')?.textContent || '').length).toBeGreaterThan(3)
        expect((card.textContent || '').length).toBeGreaterThan(120)
      }
    }
  })

  it('keeps the coach, time and booking detail on each class', () => {
    render(<App />)
    expect(screen.getByText('Barbell Foundations')).toBeInTheDocument()
    expect(screen.getAllByText('Reserve a place').length).toBeGreaterThanOrEqual(12)
    expect(screen.getByText(/Monday · 6:00 AM · 60 min/)).toBeInTheDocument()
  })

  it('keeps the page intact', () => {
    render(<App />)
    const doc = document
    expect(doc.querySelectorAll('section, header, footer').length).toBeGreaterThanOrEqual(11)
    expect(doc.querySelectorAll('h1, h2, h3').length).toBeGreaterThanOrEqual(40)
    expect(doc.querySelectorAll('a, button, input, select').length).toBeGreaterThanOrEqual(40)
    expect((doc.body.textContent || '').split(/\s+/).length).toBeGreaterThanOrEqual(2200)
  })
})
