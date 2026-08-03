import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

const CALL = /call|phone|ring|dial/i
const TEXT = /text|message|sms/i
const DIRECTIONS = /direction|map|address|find us|sorrel/i
const EMAIL = /email|e-mail|mail|write to/i

const rail = () => screen.getByTestId('contact-rail')
const form = () => screen.getByTestId('booking-form')

/** Reach a request-form control the way a screen-reader user does: by its label. */
const field = (label: RegExp) =>
  within(form()).getByLabelText(label, { selector: 'input, select, textarea' })

describe('Cedar & Vale landing — structure', () => {
  it('renders the practice promise as the page heading', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: /week you actually have/i }),
    ).toBeInTheDocument()
  })

  it('renders the booking panel with its quick-contact controls and request form', () => {
    render(<App />)
    expect(screen.getByTestId('booking-panel')).toBeInTheDocument()
    expect(screen.getAllByTestId('contact-action')).toHaveLength(4)
    expect(screen.getAllByTestId('studio-photo')).toHaveLength(3)
    expect(form()).toBeInTheDocument()
  })

  it('renders a footer landmark with the address and the phone number', () => {
    render(<App />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveTextContent(/14 Sorrel Street/i)
    expect(footer).toHaveTextContent(/\(614\) 555 0142/)
  })
})

describe('Cedar & Vale landing — announced to assistive tech (the defect)', () => {
  it('gives every image on the page non-empty alt text', () => {
    const { container } = render(<App />)
    const images = Array.from(container.querySelectorAll('img'))
    expect(images.length).toBeGreaterThanOrEqual(7)
    for (const image of images) {
      expect(image.getAttribute('alt')?.trim()).toBeTruthy()
    }
  })

  it('describes each of the three studio photographs distinctly', () => {
    render(<App />)
    const photos = screen.getAllByTestId('studio-photo')
    expect(photos).toHaveLength(3)
    const described = photos.map((photo) => (photo.getAttribute('alt') ?? '').trim().toLowerCase())
    for (const alt of described) {
      expect(alt.length).toBeGreaterThan(3)
    }
    expect(new Set(described).size).toBe(3)
  })

  it('gives every button on the page an accessible name', () => {
    render(<App />)
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBeGreaterThanOrEqual(5)
    for (const button of buttons) {
      expect(button).toHaveAccessibleName()
    }
  })

  it('names what each quick-contact control does', () => {
    render(<App />)
    const controls = within(rail())
    for (const purpose of [CALL, TEXT, DIRECTIONS, EMAIL]) {
      expect(controls.getAllByRole('button', { name: purpose }).length).toBeGreaterThan(0)
    }
  })

  it('finds every request-form control by the wording printed beside it', () => {
    render(<App />)
    expect(screen.getAllByTestId('booking-field')).toHaveLength(7)
    expect(field(/full name/i)).toBeInTheDocument()
    expect(field(/email address/i)).toBeInTheDocument()
    expect(field(/mobile number/i)).toBeInTheDocument()
    expect(field(/preferred day/i)).toBeInTheDocument()
    expect(field(/reason for visit/i)).toBeInTheDocument()
    expect(field(/anything we should know/i)).toBeInTheDocument()
    expect(field(/reminder/i)).toBeInTheDocument()
  })

  it('ties each label to the control it actually describes', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(field(/full name/i), 'Odile Brandt')
    await user.type(field(/mobile number/i), '614 555 0913')
    await user.selectOptions(field(/preferred day/i), 'Saturday morning')
    await user.type(field(/anything we should know/i), 'Night shifts, so mornings are easiest.')
    await user.click(field(/reminder/i))

    expect(field(/full name/i)).toHaveValue('Odile Brandt')
    expect(field(/mobile number/i)).toHaveValue('614 555 0913')
    expect(field(/preferred day/i)).toHaveValue('Saturday morning')
    expect(field(/anything we should know/i)).toHaveValue('Night shifts, so mornings are easiest.')
    expect(field(/reminder/i)).toBeChecked()
  })
})
