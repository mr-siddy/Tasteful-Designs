import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

type Draft = { name?: string; email?: string; phone?: string; week?: string }

const nameField = () => screen.getByLabelText(/full name/i)
const emailField = () => screen.getByLabelText(/email address/i)
const phoneField = () => screen.getByLabelText(/mobile number/i)
const weekField = () => screen.getByLabelText(/preferred start week/i)
const success = () => screen.queryByTestId('intro-success')

async function fill(user: ReturnType<typeof userEvent.setup>, draft: Draft) {
  if (draft.name) await user.type(nameField(), draft.name)
  if (draft.email) await user.type(emailField(), draft.email)
  if (draft.phone) await user.type(phoneField(), draft.phone)
  if (draft.week) await user.selectOptions(weekField(), draft.week)
}

async function submit(user: ReturnType<typeof userEvent.setup>) {
  await user.click(screen.getByRole('button', { name: /book my intro session/i }))
}

const VALID: Draft = {
  name: 'Alma Whitcombe',
  email: 'alma@wharfsiderowing.org',
  phone: '5550142277',
  week: 'apr-13',
}

describe('Sablewood landing — structure', () => {
  it('renders the hero headline', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: /rope works/i })).toBeInTheDocument()
  })

  it('offers the intro-session form with all four required fields', () => {
    render(<App />)
    expect(screen.getByTestId('intro-form')).toBeInTheDocument()
    expect(nameField()).toBeInTheDocument()
    expect(emailField()).toBeInTheDocument()
    expect(phoneField()).toBeInTheDocument()
    expect(weekField()).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /book my intro session/i })).toBeInTheDocument()
  })

  it('renders a footer landmark', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})

describe('Sablewood intro form — an unusable booking is refused (the defect)', () => {
  it('flags the missing name when the form is submitted empty', async () => {
    const user = userEvent.setup()
    render(<App />)
    await submit(user)
    const error = screen.getByTestId('error-name')
    expect(error).toBeInTheDocument()
    expect(error.textContent?.trim().length).toBeGreaterThan(0)
  })

  it('flags the missing email address when the form is submitted empty', async () => {
    const user = userEvent.setup()
    render(<App />)
    await submit(user)
    const error = screen.getByTestId('error-email')
    expect(error).toBeInTheDocument()
    expect(error.textContent?.trim().length).toBeGreaterThan(0)
  })

  it('flags the missing mobile number when the form is submitted empty', async () => {
    const user = userEvent.setup()
    render(<App />)
    await submit(user)
    const error = screen.getByTestId('error-phone')
    expect(error).toBeInTheDocument()
    expect(error.textContent?.trim().length).toBeGreaterThan(0)
  })

  it('flags the unchosen start week when the form is submitted empty', async () => {
    const user = userEvent.setup()
    render(<App />)
    await submit(user)
    const error = screen.getByTestId('error-week')
    expect(error).toBeInTheDocument()
    expect(error.textContent?.trim().length).toBeGreaterThan(0)
  })

  it('does not confirm an empty submission', async () => {
    const user = userEvent.setup()
    render(<App />)
    await submit(user)
    expect(success()).toBeNull()
    expect(screen.getByTestId('intro-form')).toBeInTheDocument()
  })

  it('refuses an email address that stops at the @', async () => {
    const user = userEvent.setup()
    render(<App />)
    await fill(user, { ...VALID, email: 'alma@' })
    await submit(user)
    expect(screen.getByTestId('error-email')).toBeInTheDocument()
    expect(success()).toBeNull()
  })

  it('refuses an email address with no @ at all', async () => {
    const user = userEvent.setup()
    render(<App />)
    await fill(user, { ...VALID, email: 'alma.whitcombe.rowing' })
    await submit(user)
    expect(screen.getByTestId('error-email')).toBeInTheDocument()
    expect(success()).toBeNull()
  })

  it('refuses a mobile number that is too short to dial', async () => {
    const user = userEvent.setup()
    render(<App />)
    await fill(user, { ...VALID, phone: '5550' })
    await submit(user)
    expect(screen.getByTestId('error-phone')).toBeInTheDocument()
    expect(success()).toBeNull()
  })

  it('refuses a booking with no start week chosen', async () => {
    const user = userEvent.setup()
    render(<App />)
    await fill(user, { name: VALID.name, email: VALID.email, phone: VALID.phone })
    await submit(user)
    expect(screen.getByTestId('error-week')).toBeInTheDocument()
    expect(success()).toBeNull()
  })

  it('flags only the field that is actually wrong', async () => {
    const user = userEvent.setup()
    render(<App />)
    await fill(user, { name: VALID.name, email: VALID.email, week: VALID.week })
    await submit(user)
    expect(screen.getByTestId('error-phone')).toBeInTheDocument()
    expect(screen.queryByTestId('error-name')).toBeNull()
    expect(screen.queryByTestId('error-email')).toBeNull()
    expect(screen.queryByTestId('error-week')).toBeNull()
    expect(success()).toBeNull()
  })

  it('confirms the booking once every field is filled in properly', async () => {
    const user = userEvent.setup()
    render(<App />)
    await fill(user, VALID)
    await submit(user)
    expect(success()).toBeInTheDocument()
  })

  it('lets a refused visitor correct the form and get through', async () => {
    const user = userEvent.setup()
    render(<App />)
    await submit(user)
    expect(success()).toBeNull()
    await fill(user, {
      name: 'Gideon Park',
      email: 'gideon@marlowandvine.com',
      phone: '(555) 014-6631',
      week: 'apr-27',
    })
    await submit(user)
    expect(success()).toBeInTheDocument()
    expect(screen.queryByTestId('error-name')).toBeNull()
    expect(screen.queryByTestId('error-email')).toBeNull()
    expect(screen.queryByTestId('error-phone')).toBeNull()
    expect(screen.queryByTestId('error-week')).toBeNull()
  })
})
