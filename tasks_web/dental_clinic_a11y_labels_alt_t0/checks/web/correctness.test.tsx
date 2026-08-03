import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

const CALL = /call|phone|ring|telephone|dial/i
const DIRECTIONS = /direction|map|find|where|address|locat/i
const HOURS = /hour|open|time|when/i
const DISMISS = /dismiss|close|hide|remove|notice|banner|message|alert/i

describe('Alder & Vine Dental landing — structure', () => {
  it('renders the practice name as the page heading', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: /alder & vine dental/i }),
    ).toBeInTheDocument()
  })

  it('renders a footer landmark with the address and phone number', () => {
    render(<App />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveTextContent(/14 Kingsmead Row/i)
    expect(footer).toHaveTextContent(/01865 555 0142/)
  })

  it('renders the three clinician cards and the booking form', () => {
    render(<App />)
    expect(screen.getAllByTestId('clinician-card')).toHaveLength(3)
    expect(screen.getByTestId('booking-form')).toBeInTheDocument()
  })
})

describe('Alder & Vine Dental landing — announced to assistive tech (the defect)', () => {
  it('gives every photograph on the page non-empty alt text', () => {
    const { container } = render(<App />)
    const images = Array.from(container.querySelectorAll('img'))
    expect(images.length).toBeGreaterThanOrEqual(4)
    for (const img of images) {
      expect(img.getAttribute('alt')?.trim()).toBeTruthy()
    }
  })

  it('announces each clinician portrait with that clinician’s name', () => {
    render(<App />)
    const portraits = screen.getAllByTestId('clinician-photo')
    for (const who of [/mara ellison/i, /tobias frey/i, /imogen vance/i]) {
      const portrait = screen.getByAltText(who)
      expect(portrait.tagName).toBe('IMG')
      expect(portraits).toContain(portrait)
    }
  })

  it('gives each header icon control an accessible name saying what it does', () => {
    render(<App />)
    const [call, directions, hours] = screen.getAllByTestId('header-icon-button')
    expect(call).toHaveAccessibleName(CALL)
    expect(directions).toHaveAccessibleName(DIRECTIONS)
    expect(hours).toHaveAccessibleName(HOURS)
  })

  it('lets a screen-reader user reach the directions control by name', async () => {
    const user = userEvent.setup()
    render(<App />)
    const matches = screen.getAllByRole('button', { name: DIRECTIONS })
    expect(matches.length).toBeGreaterThan(0)
    await user.click(matches[0])
    expect(screen.getByTestId('header-detail')).toHaveTextContent(/kingsmead row/i)
  })

  it('names the control that dismisses the emergency notice', async () => {
    const user = userEvent.setup()
    render(<App />)
    const dismiss = screen.getByTestId('notice-dismiss')
    expect(dismiss).toHaveAccessibleName(DISMISS)
    await user.click(dismiss)
    expect(screen.queryByTestId('emergency-notice')).toBeNull()
  })

  it('gives every button on the page an accessible name', () => {
    render(<App />)
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBeGreaterThanOrEqual(5)
    for (const button of buttons) {
      expect(button).toHaveAccessibleName()
    }
  })

  it('finds every booking field by its visible label', () => {
    const { container } = render(<App />)
    expect(container.querySelectorAll('input, select, textarea')).toHaveLength(5)
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/preferred day/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/reason for your visit/i)).toBeInTheDocument()
  })

  it('wires each label to the control it describes', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(screen.getByLabelText(/full name/i), 'Priya Raman')
    await user.type(screen.getByLabelText(/email address/i), 'priya@example.com')
    await user.selectOptions(screen.getByLabelText(/preferred day/i), 'Friday')
    expect(screen.getByLabelText(/full name/i)).toHaveValue('Priya Raman')
    expect(screen.getByLabelText(/email address/i)).toHaveValue('priya@example.com')
    expect(screen.getByLabelText(/preferred day/i)).toHaveValue('Friday')
  })
})
