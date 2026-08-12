import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

// Block the vacuous pass: "exactly one track is on screen" must not be satisfied
// by deleting the tabs, emptying the panel, or gutting the rest of the page.
describe('anti-cheat', () => {
  it('keeps all three training tracks as tabs', () => {
    render(<App />)
    expect(screen.getAllByRole('tab').map((tab) => tab.textContent)).toEqual([
      'Row',
      'Strength',
      'Restore',
    ])
  })

  it('every tab still reveals a track with at least four sessions', async () => {
    const user = userEvent.setup()
    render(<App />)
    for (const label of ['Row', 'Strength', 'Restore']) {
      await user.click(screen.getByRole('tab', { name: label }))
      const panel = screen.getAllByRole('tabpanel')[0]
      expect(within(panel).getAllByTestId('track-session').length).toBeGreaterThanOrEqual(4)
    }
  })

  it('every track still names its lead coach and its weekly volume', async () => {
    const user = userEvent.setup()
    render(<App />)
    for (const label of ['Row', 'Strength', 'Restore']) {
      await user.click(screen.getByRole('tab', { name: label }))
      const panel = screen.getAllByRole('tabpanel')[0]
      expect(within(panel).getByText(/led by /i)).toBeInTheDocument()
      expect(within(panel).getByText(/sessions a week/i)).toBeInTheDocument()
    }
  })

  it('keeps the training section heading and its tablist', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { name: /three tracks, one membership/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('tablist', { name: /training tracks/i })).toBeInTheDocument()
  })

  it('keeps the page intact', () => {
    render(<App />)
    const doc = document
    expect(doc.querySelectorAll('section, header, footer').length).toBeGreaterThanOrEqual(11)
    expect(doc.querySelectorAll('h1, h2, h3').length).toBeGreaterThanOrEqual(30)
    expect((doc.body.textContent || '').split(/\s+/).length).toBeGreaterThanOrEqual(1900)
  })
})
