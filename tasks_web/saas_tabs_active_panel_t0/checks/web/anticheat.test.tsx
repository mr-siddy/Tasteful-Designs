import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

const WORKFLOWS = ['Sampling', 'Lab results', 'Reporting', 'Audits']

// Block the vacuous pass: "exactly one panel is open" must not be satisfied by
// deleting the tabs, or by leaving an empty panel behind each one.
describe('anti-cheat', () => {
  it('keeps all four workflow tabs', () => {
    render(<App />)
    expect(screen.getAllByRole('tab').map((t) => t.textContent)).toEqual(WORKFLOWS)
  })

  it('every tab still reveals a workflow with its capability lines', async () => {
    const user = userEvent.setup()
    render(<App />)
    for (const label of WORKFLOWS) {
      await user.click(screen.getByRole('tab', { name: label }))
      expect(screen.getAllByRole('tabpanel').length).toBeGreaterThanOrEqual(1)
      expect(screen.getAllByTestId('platform-feature').length).toBeGreaterThanOrEqual(4)
    }
  })

  it('keeps the numbers that go with each workflow', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('tab', { name: 'Reporting' }))
    expect(screen.getByText('19 min')).toBeInTheDocument()
    await user.click(screen.getByRole('tab', { name: 'Audits' }))
    expect(screen.getByText('2 hrs')).toBeInTheDocument()
  })

  it('keeps the page intact', () => {
    render(<App />)
    const doc = document
    expect(doc.querySelectorAll('section, header, footer').length).toBeGreaterThanOrEqual(12)
    expect(doc.querySelectorAll('h1, h2, h3').length).toBeGreaterThanOrEqual(24)
    expect((doc.body.textContent || '').split(/\s+/).length).toBeGreaterThanOrEqual(1600)
  })

  it('keeps the rest of the marketing page around the tabs', () => {
    render(<App />)
    expect(screen.getAllByTestId('module-card').length).toBeGreaterThanOrEqual(6)
    expect(screen.getAllByTestId('pricing-plan').length).toBeGreaterThanOrEqual(3)
    expect(screen.getAllByTestId('testimonial').length).toBeGreaterThanOrEqual(3)
    expect(screen.getAllByTestId('faq-item').length).toBeGreaterThanOrEqual(4)
  })
})
