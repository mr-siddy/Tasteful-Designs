import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

const HOURS = /hours|tonight/i
const DIRECTIONS = /directions|parking|map|address/i
const GIFT = /gift|voucher/i
const CALL = /call|phone|ring|host stand/i
const NEXT = /next|forward/i
const PREVIOUS = /previous|prev|back/i

const ROOM_NAMES = [/hearth/i, /oyster counter/i, /cutting shed/i, /terrace/i, /cellar/i]

/** Reach a reservation control the way a screen-reader user does: by its label. */
const field = (label: RegExp) => screen.getByLabelText(label, { selector: 'input, select, textarea' })

describe('Salt Quarry landing — structure', () => {
  it('renders the campaign line as the page heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: /meets the fire/i })).toBeInTheDocument()
  })

  it('renders a footer landmark with the address and the host stand number', () => {
    render(<App />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveTextContent(/18 Quarry Landing/i)
    expect(footer).toHaveTextContent(/\(978\) 555 0142/)
  })

  it('renders the five rooms and the reservation request panel', () => {
    render(<App />)
    expect(screen.getAllByTestId('room-shot')).toHaveLength(5)
    expect(screen.getByTestId('reservation-form')).toBeInTheDocument()
  })
})

describe('Salt Quarry landing — announced to assistive tech (the defect)', () => {
  it('gives every photograph on the page non-empty alt text', () => {
    const { container } = render(<App />)
    const images = Array.from(container.querySelectorAll('img'))
    expect(images.length).toBeGreaterThanOrEqual(6)
    for (const image of images) {
      expect(image.getAttribute('alt')?.trim()).toBeTruthy()
    }
  })

  it('announces each room photograph by the room it shows', () => {
    render(<App />)
    for (const name of ROOM_NAMES) {
      const matches = screen.getAllByAltText(name)
      expect(matches.length).toBeGreaterThan(0)
      for (const match of matches) {
        expect(match.tagName).toBe('IMG')
      }
    }
  })

  it('announces the large photograph as the room currently on display', () => {
    render(<App />)
    const stage = screen.getByTestId('gallery-stage')
    expect(stage.tagName).toBe('IMG')
    expect(stage.getAttribute('alt') ?? '').toMatch(/hearth/i)
  })

  it('gives each header utility control an accessible name saying what it does', () => {
    render(<App />)
    const [hours, directions, gift, call] = screen.getAllByTestId('header-icon-button')
    expect(hours).toHaveAccessibleName(HOURS)
    expect(directions).toHaveAccessibleName(DIRECTIONS)
    expect(gift).toHaveAccessibleName(GIFT)
    expect(call).toHaveAccessibleName(CALL)
  })

  it('lets a screen-reader user open the opening-hours panel by name', async () => {
    const user = userEvent.setup()
    render(<App />)
    const matches = screen.getAllByRole('button', { name: HOURS })
    expect(matches.length).toBeGreaterThan(0)
    await user.click(matches[0])
    expect(screen.getByTestId('header-panel')).toHaveTextContent(/5:00 to 10:00 pm/i)
  })

  it('lets a screen-reader user step through the rooms by name', async () => {
    const user = userEvent.setup()
    render(<App />)
    const stageAlt = () => screen.getByTestId('gallery-stage').getAttribute('alt') ?? ''
    await user.click(screen.getAllByRole('button', { name: NEXT })[0])
    expect(stageAlt()).toMatch(/oyster counter/i)
    await user.click(screen.getAllByRole('button', { name: PREVIOUS })[0])
    expect(stageAlt()).toMatch(/hearth/i)
  })

  it('gives every button on the page an accessible name', () => {
    render(<App />)
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBeGreaterThanOrEqual(8)
    for (const button of buttons) {
      expect(button).toHaveAccessibleName()
    }
  })

  it('finds every reservation control by the wording printed beside it', () => {
    const { container } = render(<App />)
    expect(container.querySelectorAll('input, select, textarea')).toHaveLength(7)
    expect(field(/full name/i)).toBeInTheDocument()
    expect(field(/email address/i)).toBeInTheDocument()
    expect(field(/phone number/i)).toBeInTheDocument()
    expect(field(/party size/i)).toBeInTheDocument()
    expect(field(/seating area/i)).toBeInTheDocument()
    expect(field(/anything we should know/i)).toBeInTheDocument()
    expect(field(/friday board/i)).toBeInTheDocument()
  })

  it('ties each label to the control it describes', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(field(/full name/i), 'Ruth Halloran')
    await user.type(field(/email address/i), 'ruth@northsound.org')
    await user.selectOptions(field(/party size/i), '4 guests')
    await user.selectOptions(field(/seating area/i), 'The Cellar')
    await user.click(field(/friday board/i))
    expect(field(/full name/i)).toHaveValue('Ruth Halloran')
    expect(field(/email address/i)).toHaveValue('ruth@northsound.org')
    expect(field(/party size/i)).toHaveValue('4 guests')
    expect(field(/seating area/i)).toHaveValue('The Cellar')
    expect(field(/friday board/i)).toBeChecked()
  })
})
