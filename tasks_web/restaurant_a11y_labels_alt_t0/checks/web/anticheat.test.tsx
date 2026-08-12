import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

// Block the vacuous pass: "everything on the page is announceable" must not be
// satisfied by deleting the photographs, the icon controls or the reservation
// fields. Every selector below is a data-testid, never an accessible name, so
// this gate reads identically before and after the fix.
describe('anti-cheat', () => {
  it('keeps the featured photograph and all five room shots', () => {
    const { container } = render(<App />)
    expect(screen.getByTestId('gallery-stage')).toBeInTheDocument()
    expect(screen.getAllByTestId('room-shot')).toHaveLength(5)
    expect(container.querySelectorAll('img').length).toBeGreaterThanOrEqual(6)
  })

  it('keeps the stepper cycling through five distinct rooms', async () => {
    const user = userEvent.setup()
    render(<App />)
    const [previous, next] = screen.getAllByTestId('gallery-nav')
    expect(previous).toBeInTheDocument()

    const captions = new Set<string>()
    for (let step = 0; step < 5; step += 1) {
      const caption = screen.getByTestId('gallery-caption').textContent ?? ''
      expect(caption.trim().length).toBeGreaterThan(60)
      captions.add(caption)
      await user.click(next)
    }
    expect(captions.size).toBe(5)
    expect(screen.getByTestId('gallery-caption').textContent).toBe([...captions][0])
  })

  it('keeps the five room thumbnails selectable', async () => {
    const user = userEvent.setup()
    render(<App />)
    const thumbnails = screen.getAllByTestId('room-shot-button')
    expect(thumbnails).toHaveLength(5)
    await user.click(thumbnails[3])
    expect(screen.getByTestId('gallery-caption').textContent).toMatch(/pier deck/i)
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
      expect(text.trim().length).toBeGreaterThan(80)
      panels.add(text)
    }
    expect(panels.size).toBe(4)
  })

  it('keeps all seven reservation controls working and still confirms the request', async () => {
    const user = userEvent.setup()
    render(<App />)
    const fields = screen.getAllByTestId('reservation-field')
    expect(fields).toHaveLength(7)

    await user.type(fields[0], 'Ruth Halloran')
    await user.type(fields[1], 'ruth@northsound.org')
    await user.type(fields[2], '4015550119')
    await user.selectOptions(fields[3], '6 guests')
    await user.selectOptions(fields[4], 'The Harbour Terrace')
    await user.type(fields[5], 'One of us cannot manage stairs')
    await user.click(fields[6])

    expect(fields[0]).toHaveValue('Ruth Halloran')
    expect(fields[2]).toHaveValue('4015550119')
    expect(fields[3]).toHaveValue('6 guests')
    expect(fields[5]).toHaveValue('One of us cannot manage stairs')
    expect(fields[6]).toBeChecked()

    await user.click(screen.getByTestId('reservation-submit'))
    expect(screen.getByTestId('reservation-confirmation')).toHaveTextContent(/one business day/i)
  })

  it('keeps the board, the press strip and the rest of the page as readable copy', () => {
    render(<App />)
    expect(screen.getAllByTestId('menu-course')).toHaveLength(3)
    expect(screen.getAllByTestId('dish')).toHaveLength(7)
    expect(screen.getByText('Hearth cod and drawn brine')).toBeInTheDocument()
    expect(screen.getByText('$68')).toBeInTheDocument()
    expect(screen.getAllByTestId('press-logo').length).toBeGreaterThanOrEqual(6)
    expect(screen.getAllByTestId('story-block')).toHaveLength(3)
    expect(screen.getAllByTestId('service-step')).toHaveLength(4)
    expect(screen.getAllByTestId('testimonial')).toHaveLength(3)
    expect(screen.getByText('Emmett Kohl')).toBeInTheDocument()
    expect(screen.getAllByTestId('event-format')).toHaveLength(3)
    expect(screen.getAllByTestId('faq-item')).toHaveLength(6)
  })

  it('keeps the page intact', () => {
    render(<App />)
    const doc = document
    expect(doc.querySelectorAll('section, header, footer').length).toBeGreaterThanOrEqual(11)
    expect(doc.querySelectorAll('h1, h2, h3').length).toBeGreaterThanOrEqual(30)
    expect((doc.body.textContent || '').split(/\s+/).length).toBeGreaterThanOrEqual(1800)
  })
})
