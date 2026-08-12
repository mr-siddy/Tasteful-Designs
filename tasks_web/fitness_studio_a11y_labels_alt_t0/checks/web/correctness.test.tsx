import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

const TIMETABLE = /timetable|schedule|classes|this week/i
const FRONT_DESK = /call|phone|desk|ring/i
const DIRECTIONS = /direction|parking|find|address|map|where/i
const MEMBERSHIP = /member|account|profile|your membership/i
const NEXT_ROOM = /next/i
const PREVIOUS_ROOM = /previous|prev|back/i

const ROOM_NAMES = [
  /platform room/i,
  /rack wall/i,
  /engine room/i,
  /rebuild studio/i,
  /boiler room/i,
]

const COACH_NAMES = [
  /nadia okonkwo/i,
  /marcus deane/i,
  /priya raghunathan/i,
  /tom[aá]s iriarte/i,
]

/** Reach a booking control the way a screen-reader user reaches it: by its wording. */
const field = (label: RegExp) => screen.getByLabelText(label, { selector: 'input, select, textarea' })

describe('Coalhouse landing — structure', () => {
  it('renders the club promise as the page heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: /still lifting at eighty/i })).toBeInTheDocument()
  })

  it('renders a footer landmark with the depot address and the front desk line', () => {
    render(<App />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveTextContent(/1140 Frankford Avenue/i)
    expect(footer).toHaveTextContent(/\(215\) 555 0142/)
  })

  it('renders the six programmes and the intro booking form', () => {
    render(<App />)
    expect(screen.getAllByTestId('programme-card')).toHaveLength(6)
    expect(screen.getByTestId('booking-form')).toBeInTheDocument()
  })
})

describe('Coalhouse landing — announced to assistive tech (the defect)', () => {
  it('gives every photograph on the page non-empty alt text', () => {
    const { container } = render(<App />)
    const images = Array.from(container.querySelectorAll('img'))
    expect(images.length).toBeGreaterThanOrEqual(10)
    for (const image of images) {
      expect(image.getAttribute('alt')?.trim()).toBeTruthy()
    }
  })

  it('announces each room shot by the room it is showing', () => {
    render(<App />)
    for (const room of ROOM_NAMES) {
      const matches = screen.getAllByAltText(room)
      expect(matches.length).toBeGreaterThan(0)
      for (const match of matches) {
        expect(match.tagName).toBe('IMG')
      }
    }
  })

  it('announces the large featured photograph as the room currently on display', () => {
    render(<App />)
    const stage = screen.getByTestId('gallery-stage')
    expect(stage.tagName).toBe('IMG')
    expect(stage.getAttribute('alt') ?? '').toMatch(/platform room/i)
  })

  it('lets a screen-reader user step between rooms by naming the control', async () => {
    const user = userEvent.setup()
    render(<App />)
    const stageAlt = () => screen.getByTestId('gallery-stage').getAttribute('alt') ?? ''
    await user.click(screen.getAllByRole('button', { name: NEXT_ROOM })[0])
    expect(stageAlt()).toMatch(/rack wall/i)
    await user.click(screen.getAllByRole('button', { name: PREVIOUS_ROOM })[0])
    expect(stageAlt()).toMatch(/platform room/i)
  })

  it('announces each coach portrait by the coach it shows', () => {
    render(<App />)
    for (const coach of COACH_NAMES) {
      const matches = screen.getAllByAltText(coach)
      expect(matches.length).toBeGreaterThan(0)
      expect(matches[0].tagName).toBe('IMG')
    }
  })

  it('gives each header utility control an accessible name saying what it does', () => {
    render(<App />)
    const [timetable, desk, directions, membership] = screen.getAllByTestId('header-utility')
    expect(timetable).toHaveAccessibleName(TIMETABLE)
    expect(desk).toHaveAccessibleName(FRONT_DESK)
    expect(directions).toHaveAccessibleName(DIRECTIONS)
    expect(membership).toHaveAccessibleName(MEMBERSHIP)
  })

  it('lets a screen-reader user open the directions panel by name', async () => {
    const user = userEvent.setup()
    render(<App />)
    const matches = screen.getAllByRole('button', { name: DIRECTIONS })
    expect(matches.length).toBeGreaterThan(0)
    await user.click(matches[0])
    expect(screen.getByTestId('header-panel')).toHaveTextContent(/frankford avenue/i)
  })

  it('gives every button on the page an accessible name', () => {
    render(<App />)
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBeGreaterThanOrEqual(10)
    for (const button of buttons) {
      expect(button).toHaveAccessibleName()
    }
  })

  it('finds every booking control by the wording printed beside it', () => {
    const { container } = render(<App />)
    expect(container.querySelectorAll('input, select, textarea')).toHaveLength(7)
    expect(field(/your name/i)).toBeInTheDocument()
    expect(field(/email address/i)).toBeInTheDocument()
    expect(field(/mobile number/i)).toBeInTheDocument()
    expect(field(/first eight weeks/i)).toBeInTheDocument()
    expect(field(/days a week/i)).toBeInTheDocument()
    expect(field(/a coach should know/i)).toBeInTheDocument()
    expect(field(/timetable on Sunday nights/i)).toBeInTheDocument()
  })

  it('ties each piece of wording to the control it describes', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(field(/your name/i), 'Della Marchetti')
    await user.type(field(/email address/i), 'della@frankfordpt.org')
    await user.selectOptions(field(/first eight weeks/i), 'Come back from an injury')
    await user.click(field(/timetable on Sunday nights/i))
    expect(field(/your name/i)).toHaveValue('Della Marchetti')
    expect(field(/email address/i)).toHaveValue('della@frankfordpt.org')
    expect(field(/first eight weeks/i)).toHaveValue('Come back from an injury')
    expect(field(/timetable on Sunday nights/i)).toBeChecked()
  })
})
