import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '@app/App'

describe('Grainline page integrity', () => {
  it('still renders the capability grid with all six cards', () => {
    render(<App />)
    const grid = screen.getByTestId('capability-grid')
    expect(grid).toBeInTheDocument()
    expect(screen.getAllByTestId('capability-card')).toHaveLength(6)
  })

  it('keeps every capability card inside the grid it is laid out by', () => {
    render(<App />)
    const grid = screen.getByTestId('capability-grid')
    for (const card of screen.getAllByTestId('capability-card')) {
      expect(card.parentElement).toBe(grid)
    }
  })

  it('keeps real content in every capability card', () => {
    render(<App />)
    for (const card of screen.getAllByTestId('capability-card')) {
      const heading = card.querySelector('h3')
      expect((heading?.textContent || '').trim().length).toBeGreaterThan(3)
      const body = (card.textContent || '').replace(/\s+/g, ' ').trim()
      expect(body.length).toBeGreaterThan(120)
    }
  })

  it('names the six things the platform section promises', () => {
    render(<App />)
    const grid = screen.getByTestId('capability-grid')
    for (const label of [
      /cut tickets/i,
      /fabric lots/i,
      /sew-line boards/i,
      /size runs/i,
      /subcontractor handoffs/i,
      /rework log/i,
    ]) {
      expect(grid).toHaveTextContent(label)
    }
  })

  it('keeps the rest of the page intact', () => {
    render(<App />)
    const doc = document
    expect(doc.querySelectorAll('section, header, footer').length).toBeGreaterThanOrEqual(11)
    expect(doc.querySelectorAll('h1, h2, h3').length).toBeGreaterThanOrEqual(26)
    expect(doc.querySelectorAll('*').length).toBeGreaterThanOrEqual(450)
    expect(
      doc.querySelectorAll('a, button, input, select, textarea').length,
    ).toBeGreaterThanOrEqual(20)
    const words = (doc.body.textContent || '').trim().split(/\s+/).length
    expect(words).toBeGreaterThanOrEqual(1400)
  })
})
