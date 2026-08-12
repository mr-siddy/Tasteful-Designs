import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

const tabs = () => screen.getAllByRole('tab')
const openPanels = () => screen.queryAllByRole('tabpanel')
const selectedTabs = () => tabs().filter((t) => t.getAttribute('aria-selected') === 'true')

describe('Weirline landing — structure', () => {
  it('renders the product name as the page heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: /weirline/i })).toBeInTheDocument()
  })

  it('offers the four workflows as tabs', () => {
    render(<App />)
    expect(tabs().map((t) => t.textContent)).toEqual([
      'Sampling',
      'Lab results',
      'Reporting',
      'Audits',
    ])
  })

  it('renders a footer landmark', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})

describe('Weirline workflows — one panel at a time (the defect)', () => {
  it('shows exactly one workflow panel on first load', () => {
    render(<App />)
    expect(openPanels()).toHaveLength(1)
  })

  it('opens on Sampling and shows no other workflow', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { name: /the calendar the truck runs on/i }),
    ).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: /results that file themselves/i })).toBeNull()
    expect(screen.queryByRole('heading', { name: /a sanitary survey you can search/i })).toBeNull()
  })

  it('shows only the Lab results panel after choosing the second tab', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('tab', { name: 'Lab results' }))

    const panels = openPanels()
    expect(panels).toHaveLength(1)
    expect(
      within(panels[0]).getByRole('heading', { name: /results that file themselves/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Lab results' })).toHaveAttribute(
      'aria-selected',
      'true',
    )
  })

  it('replaces the open panel when a later workflow is chosen', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('tab', { name: 'Lab results' }))
    await user.click(screen.getByRole('tab', { name: 'Reporting' }))

    const panels = openPanels()
    expect(panels).toHaveLength(1)
    expect(
      within(panels[0]).getByRole('heading', { name: /the report drafts itself/i }),
    ).toBeInTheDocument()
    expect(within(panels[0]).queryByText(/results that file themselves/i)).toBeNull()
  })

  it('leaves the other workflows off screen once Audits is chosen', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('tab', { name: 'Audits' }))

    expect(
      screen.getByRole('heading', { name: /a sanitary survey you can search/i }),
    ).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: /the calendar the truck runs on/i })).toBeNull()
    expect(screen.queryByRole('heading', { name: /results that file themselves/i })).toBeNull()
    expect(screen.queryByRole('heading', { name: /the report drafts itself/i })).toBeNull()
  })

  it('marks exactly the chosen tab as selected', async () => {
    const user = userEvent.setup()
    render(<App />)
    expect(selectedTabs()).toHaveLength(1)
    expect(selectedTabs()[0]).toHaveTextContent('Sampling')

    await user.click(screen.getByRole('tab', { name: 'Audits' }))
    expect(selectedTabs()).toHaveLength(1)
    expect(selectedTabs()[0]).toHaveTextContent('Audits')
  })
})
