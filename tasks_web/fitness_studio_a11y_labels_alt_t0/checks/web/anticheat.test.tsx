import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

// Block the vacuous pass: "everything on the page is announced" must not be
// satisfied by deleting the photographs, the icon controls or the form fields.
// Every selector below is a data-testid and never an accessible name, so this
// gate reads exactly the same before and after the fix.
describe('anti-cheat', () => {
  it('keeps the featured photograph and all five rooms in the gallery', () => {
    const { container } = render(<App />)
    expect(screen.getByTestId('gallery-stage')).toBeInTheDocument()
    expect(screen.getAllByTestId('room-shot')).toHaveLength(5)
    expect(screen.getAllByTestId('room-pick')).toHaveLength(5)
    expect(container.querySelectorAll('img').length).toBeGreaterThanOrEqual(10)
  })

  it('keeps the gallery stepper cycling through five distinct rooms', async () => {
    const user = userEvent.setup()
    render(<App />)
    const navs = screen.getAllByTestId('gallery-nav')
    expect(navs).toHaveLength(2)
    const next = navs[1]

    const captions = new Set<string>()
    for (let step = 0; step < 5; step += 1) {
      const caption = screen.getByTestId('gallery-caption').textContent ?? ''
      expect(caption.trim().length).toBeGreaterThan(40)
      captions.add(caption)
      await user.click(next)
    }
    expect(captions.size).toBe(5)
    expect(screen.getByTestId('gallery-caption').textContent).toBe([...captions][0])
  })

  it('keeps the four header utility controls, each opening its own panel', async () => {
    const user = userEvent.setup()
    render(<App />)
    const utilities = screen.getAllByTestId('header-utility')
    expect(utilities).toHaveLength(4)

    const panels = new Set<string>()
    for (const utility of utilities) {
      await user.click(utility)
      const text = screen.getByTestId('header-panel').textContent ?? ''
      expect(text.trim().length).toBeGreaterThan(60)
      panels.add(text)
    }
    expect(panels.size).toBe(4)
  })

  it('keeps all seven booking controls working and still confirms the request', async () => {
    const user = userEvent.setup()
    render(<App />)
    const fields = screen.getAllByTestId('booking-field')
    expect(fields).toHaveLength(7)
    expect(screen.getAllByTestId('booking-row')).toHaveLength(7)

    await user.type(fields[0], 'Ray Sunderland')
    await user.type(fields[1], 'ray@septaretirees.org')
    await user.type(fields[2], '2155550188')
    await user.selectOptions(fields[3], 'Still be lifting at eighty')
    await user.selectOptions(fields[4], 'Three days a week')
    await user.type(fields[5], 'Left knee replaced in 2021')
    await user.click(fields[6])

    expect(fields[0]).toHaveValue('Ray Sunderland')
    expect(fields[3]).toHaveValue('Still be lifting at eighty')
    expect(fields[4]).toHaveValue('Three days a week')
    expect(fields[5]).toHaveValue('Left knee replaced in 2021')
    expect(fields[6]).toBeChecked()

    await user.click(screen.getByTestId('booking-submit'))
    expect(screen.getByTestId('booking-confirmation')).toHaveTextContent(/one business day/i)
  })

  it('keeps the programmes, coaches, plans and answers as readable copy', () => {
    render(<App />)
    expect(screen.getAllByTestId('programme-card')).toHaveLength(6)
    expect(screen.getAllByTestId('coach-card')).toHaveLength(4)
    expect(screen.getAllByTestId('coach-portrait')).toHaveLength(4)
    expect(screen.getAllByTestId('plan-card')).toHaveLength(3)
    expect(screen.getAllByTestId('testimonial')).toHaveLength(3)
    expect(screen.getAllByTestId('faq-item')).toHaveLength(6)
    expect(screen.getAllByTestId('method-block')).toHaveLength(3)
    expect(screen.getAllByTestId('onramp-step')).toHaveLength(4)
    expect(screen.getAllByTestId('partner-mark').length).toBeGreaterThanOrEqual(6)
    expect(screen.getAllByText('Barbell Foundations').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Masters Strength').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Nadia Okonkwo').length).toBeGreaterThan(0)
    expect(screen.getByText('$240')).toBeInTheDocument()
    expect(screen.getByText('$120')).toBeInTheDocument()
  })

  it('keeps the FAQ answering one question at a time with real answers', async () => {
    const user = userEvent.setup()
    render(<App />)
    const questions = screen.getAllByTestId('faq-question')
    expect(questions).toHaveLength(6)
    await user.click(questions[3])
    const answers = screen.getAllByTestId('faq-answer')
    expect(answers).toHaveLength(1)
    expect((answers[0].textContent ?? '').trim().length).toBeGreaterThan(120)
  })

  it('keeps the page intact', () => {
    render(<App />)
    const doc = document
    expect(doc.querySelectorAll('section, header, footer').length).toBeGreaterThanOrEqual(11)
    expect(doc.querySelectorAll('h1, h2, h3').length).toBeGreaterThanOrEqual(32)
    expect((doc.body.textContent || '').split(/\s+/).length).toBeGreaterThanOrEqual(1800)
  })
})
