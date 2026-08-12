import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

// Block the vacuous pass: "only the matching templates render" must not be
// satisfied by rendering nothing, by dropping category chips, or by gutting the
// library down to a couple of stub cards.
const gallery = () => screen.getByTestId('template-gallery')
const cards = () => within(gallery()).queryAllByTestId('template-card')

describe('anti-cheat', () => {
  it('keeps all five category chips', () => {
    render(<App />)
    expect(
      within(gallery())
        .getAllByTestId('template-chip')
        .map((chip) => chip.textContent?.trim()),
    ).toEqual(['All', 'Sales', 'Finance', 'Support', 'Security'])
  })

  it('shows the whole twelve-template library on first load', () => {
    render(<App />)
    expect(cards().length).toBeGreaterThanOrEqual(12)
  })

  it('every category still reveals real templates with real descriptions', async () => {
    const user = userEvent.setup()
    render(<App />)
    for (const category of ['Sales', 'Finance', 'Support', 'Security']) {
      await user.click(within(gallery()).getByRole('button', { name: category }))
      const shown = cards()
      expect(shown.length).toBeGreaterThanOrEqual(2)
      for (const card of shown) {
        expect(within(card).getByRole('heading', { level: 3 }).textContent?.trim()).toBeTruthy()
        expect((card.textContent || '').split(/\s+/).length).toBeGreaterThanOrEqual(20)
      }
    }
  })

  it('keeps the templates the marketing copy promises', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(within(gallery()).getByRole('button', { name: 'All' }))
    for (const name of ['Month-end close checklist', 'Escalation ladder', 'Offboarding sweep']) {
      expect(within(gallery()).getByText(name)).toBeInTheDocument()
    }
  })

  it('keeps the rest of the page intact', () => {
    render(<App />)
    const doc = document
    expect(doc.querySelectorAll('section, header, footer').length).toBeGreaterThanOrEqual(11)
    expect(doc.querySelectorAll('h1, h2, h3').length).toBeGreaterThanOrEqual(30)
    expect(doc.querySelectorAll('a, button, input').length).toBeGreaterThanOrEqual(35)
    expect((doc.body.textContent || '').split(/\s+/).length).toBeGreaterThanOrEqual(1700)
  })
})
