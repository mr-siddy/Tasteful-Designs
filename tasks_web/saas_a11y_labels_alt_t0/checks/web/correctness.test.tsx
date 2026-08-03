import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

const SEARCH = /search|docs|documentation|find/i
const CHANGELOG = /new|changelog|release|update|version|announce/i
const STATUS = /status|health|uptime|operational|incident/i
const ACCOUNT = /account|profile|sign in|workspace|user/i
const NEXT = /next|forward/i
const PREVIOUS = /previous|prev|back/i

/** Look a signup control up the way a screen-reader user reaches it: by its label. */
const field = (label: RegExp) => screen.getByLabelText(label, { selector: 'input, select, textarea' })

const SCREEN_NAMES = [
  /deploy timeline/i,
  /approval queue/i,
  /evidence bundle/i,
  /blast[\s-]?radius/i,
  /freeze calendar/i,
]

describe('Halyard landing — structure', () => {
  it('renders the campaign line as the page heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: /ship on friday/i })).toBeInTheDocument()
  })

  it('renders a footer landmark with the office address and the support line', () => {
    render(<App />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveTextContent(/88 Dorrance Street/i)
    expect(footer).toHaveTextContent(/\(401\) 555 0168/)
  })

  it('renders the three plans and the trial signup form', () => {
    render(<App />)
    expect(screen.getAllByTestId('plan-card')).toHaveLength(3)
    expect(screen.getByTestId('signup-form')).toBeInTheDocument()
  })
})

describe('Halyard landing — announced to assistive tech (the defect)', () => {
  it('gives every product screenshot on the page non-empty alt text', () => {
    const { container } = render(<App />)
    const images = Array.from(container.querySelectorAll('img'))
    expect(images.length).toBeGreaterThanOrEqual(6)
    for (const image of images) {
      expect(image.getAttribute('alt')?.trim()).toBeTruthy()
    }
  })

  it('announces each screenshot by the screen it is showing', () => {
    render(<App />)
    for (const name of SCREEN_NAMES) {
      const matches = screen.getAllByAltText(name)
      expect(matches.length).toBeGreaterThan(0)
      for (const match of matches) {
        expect(match.tagName).toBe('IMG')
      }
    }
  })

  it('announces the large featured screenshot as the screen currently on display', () => {
    render(<App />)
    const stage = screen.getByTestId('gallery-stage')
    expect(stage.tagName).toBe('IMG')
    expect(stage.getAttribute('alt') ?? '').toMatch(/deploy timeline/i)
  })

  it('gives each header utility control an accessible name saying what it does', () => {
    render(<App />)
    const [search, changelog, status, account] = screen.getAllByTestId('header-icon-button')
    expect(search).toHaveAccessibleName(SEARCH)
    expect(changelog).toHaveAccessibleName(CHANGELOG)
    expect(status).toHaveAccessibleName(STATUS)
    expect(account).toHaveAccessibleName(ACCOUNT)
  })

  it('lets a screen-reader user open the system status panel by name', async () => {
    const user = userEvent.setup()
    render(<App />)
    const matches = screen.getAllByRole('button', { name: STATUS })
    expect(matches.length).toBeGreaterThan(0)
    await user.click(matches[0])
    expect(screen.getByTestId('header-panel')).toHaveTextContent(/operational/i)
  })

  it('lets a screen-reader user step through the screenshots by name', async () => {
    const user = userEvent.setup()
    render(<App />)
    const stageAlt = () => screen.getByTestId('gallery-stage').getAttribute('alt') ?? ''
    await user.click(screen.getAllByRole('button', { name: NEXT })[0])
    expect(stageAlt()).toMatch(/approval queue/i)
    await user.click(screen.getAllByRole('button', { name: PREVIOUS })[0])
    expect(stageAlt()).toMatch(/deploy timeline/i)
  })

  it('gives every button on the page an accessible name', () => {
    render(<App />)
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBeGreaterThanOrEqual(6)
    for (const button of buttons) {
      expect(button).toHaveAccessibleName()
    }
  })

  it('finds every signup control by its visible label', () => {
    const { container } = render(<App />)
    expect(container.querySelectorAll('input, select, textarea')).toHaveLength(7)
    expect(field(/work email/i)).toBeInTheDocument()
    expect(field(/full name/i)).toBeInTheDocument()
    expect(field(/company/i)).toBeInTheDocument()
    expect(field(/services to start/i)).toBeInTheDocument()
    expect(field(/compliance regime/i)).toBeInTheDocument()
    expect(field(/automate first/i)).toBeInTheDocument()
    expect(field(/release.?engineering digest/i)).toBeInTheDocument()
  })

  it('wires each label to the control it describes', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(field(/work email/i), 'dara@fernpost.bank')
    await user.type(field(/full name/i), 'Dario Winslet')
    await user.selectOptions(field(/services to start/i), '11 to 25 services')
    await user.click(field(/release.?engineering digest/i))
    expect(field(/work email/i)).toHaveValue('dara@fernpost.bank')
    expect(field(/full name/i)).toHaveValue('Dario Winslet')
    expect(field(/services to start/i)).toHaveValue('11 to 25 services')
    expect(field(/release.?engineering digest/i)).toBeChecked()
  })
})
