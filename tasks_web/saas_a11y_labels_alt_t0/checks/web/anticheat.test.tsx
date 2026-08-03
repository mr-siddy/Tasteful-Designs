import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

// Block the vacuous pass: "everything on the page is announced" must not be
// satisfied by deleting the screenshots, the icon controls or the form fields.
// Every selector here is a data-testid, never an accessible name, so this gate
// holds identically before and after the fix.
describe('anti-cheat', () => {
  it('keeps the featured screenshot and all five screens in the gallery', () => {
    const { container } = render(<App />)
    expect(screen.getByTestId('gallery-stage')).toBeInTheDocument()
    expect(screen.getAllByTestId('tour-shot')).toHaveLength(5)
    expect(container.querySelectorAll('img').length).toBeGreaterThanOrEqual(6)
  })

  it('keeps the gallery stepper cycling through five distinct screens', async () => {
    const user = userEvent.setup()
    render(<App />)
    const [previous, next] = screen.getAllByTestId('gallery-nav')
    expect(previous).toBeInTheDocument()

    const captions = new Set<string>()
    for (let step = 0; step < 5; step += 1) {
      const caption = screen.getByTestId('gallery-caption').textContent ?? ''
      expect(caption.trim().length).toBeGreaterThan(30)
      captions.add(caption)
      await user.click(next)
    }
    expect(captions.size).toBe(5)
    expect(screen.getByTestId('gallery-caption').textContent).toBe([...captions][0])
  })

  it('keeps the four header utility controls, each opening its own panel', async () => {
    const user = userEvent.setup()
    render(<App />)
    const buttons = screen.getAllByTestId('header-icon-button')
    expect(buttons).toHaveLength(4)

    const panels = new Set<string>()
    for (const button of buttons) {
      await user.click(button)
      const text = screen.getByTestId('header-panel').textContent ?? ''
      expect(text.trim().length).toBeGreaterThan(40)
      panels.add(text)
    }
    expect(panels.size).toBe(4)
  })

  it('keeps all seven signup controls working and still confirms the request', async () => {
    const user = userEvent.setup()
    render(<App />)
    const fields = screen.getAllByTestId('signup-field')
    expect(fields).toHaveLength(7)

    await user.type(fields[0], 'dara@fernpost.bank')
    await user.type(fields[1], 'Dario Winslet')
    await user.type(fields[2], 'Fernpost Bank')
    await user.selectOptions(fields[3], '26 to 100 services')
    await user.selectOptions(fields[4], 'PCI DSS')
    await user.type(fields[5], 'Freeze windows for the settlement estate')
    await user.click(fields[6])

    expect(fields[0]).toHaveValue('dara@fernpost.bank')
    expect(fields[3]).toHaveValue('26 to 100 services')
    expect(fields[5]).toHaveValue('Freeze windows for the settlement estate')
    expect(fields[6]).toBeChecked()

    await user.click(screen.getByTestId('signup-submit'))
    expect(screen.getByTestId('signup-confirmation')).toHaveTextContent(/one business day/i)
  })

  it('keeps the plans, the customers and the priced tiers as readable copy', () => {
    render(<App />)
    expect(screen.getAllByTestId('customer-logo').length).toBeGreaterThanOrEqual(6)
    expect(screen.getByText('Fernpost Bank')).toBeInTheDocument()
    expect(screen.getByText('Ombra Health')).toBeInTheDocument()
    expect(screen.getByText('$480')).toBeInTheDocument()
    expect(screen.getByText('$1,900')).toBeInTheDocument()
    expect(screen.getByTestId('popular-badge')).toBeInTheDocument()
    expect(screen.getAllByTestId('capability-card')).toHaveLength(6)
    expect(screen.getAllByTestId('testimonial')).toHaveLength(3)
    expect(screen.getAllByTestId('faq-item')).toHaveLength(5)
  })

  it('keeps the page intact', () => {
    render(<App />)
    const doc = document
    expect(doc.querySelectorAll('section, header, footer').length).toBeGreaterThanOrEqual(10)
    expect(doc.querySelectorAll('h1, h2, h3').length).toBeGreaterThanOrEqual(30)
    expect((doc.body.textContent || '').split(/\s+/).length).toBeGreaterThanOrEqual(1500)
  })
})
