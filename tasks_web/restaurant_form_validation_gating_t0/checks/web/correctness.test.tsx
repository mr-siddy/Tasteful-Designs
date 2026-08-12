import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

type User = ReturnType<typeof userEvent.setup>
type Draft = { name?: string; email?: string; guests?: string; seating?: string }

const nameField = () => screen.getByLabelText(/full name/i)
const emailField = () => screen.getByLabelText(/email address/i)
const guestsField = () => screen.getByLabelText(/guests in your party/i)
const seatingField = () => screen.getByLabelText(/which seating/i)
const success = () => screen.queryByTestId('reserve-success')

async function fill(user: User, draft: Draft) {
  if (draft.name) await user.type(nameField(), draft.name)
  if (draft.email) await user.type(emailField(), draft.email)
  if (draft.guests) await user.type(guestsField(), draft.guests)
  if (draft.seating) await user.selectOptions(seatingField(), draft.seating)
}

async function submit(user: User) {
  await user.click(screen.getByRole('button', { name: /send the request/i }))
}

const VALID: Draft = {
  name: 'Georgia Nwachukwu',
  email: 'georgia@brightleafquarterly.org',
  guests: '34',
  seating: 'main',
}

describe('Cinder & Rye landing — structure', () => {
  it('renders the hero headline', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: /oak and hickory/i })).toBeInTheDocument()
  })

  it('offers the Long Table request form with all of its fields', () => {
    render(<App />)
    expect(screen.getByTestId('reserve-form')).toBeInTheDocument()
    expect(nameField()).toBeInTheDocument()
    expect(emailField()).toBeInTheDocument()
    expect(guestsField()).toBeInTheDocument()
    expect(seatingField()).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send the request/i })).toBeInTheDocument()
  })

  it('renders a footer landmark', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})

describe('Cinder & Rye Long Table form — a request that cannot be acted on is refused (the defect)', () => {
  it('flags the missing name when the form is sent empty', async () => {
    const user = userEvent.setup()
    render(<App />)
    await submit(user)
    const error = screen.getByTestId('error-name')
    expect(error).toBeInTheDocument()
    expect(error.textContent?.trim().length).toBeGreaterThan(0)
  })

  it('flags the missing email address when the form is sent empty', async () => {
    const user = userEvent.setup()
    render(<App />)
    await submit(user)
    const error = screen.getByTestId('error-email')
    expect(error).toBeInTheDocument()
    expect(error.textContent?.trim().length).toBeGreaterThan(0)
  })

  it('flags the missing party size when the form is sent empty', async () => {
    const user = userEvent.setup()
    render(<App />)
    await submit(user)
    const error = screen.getByTestId('error-guests')
    expect(error).toBeInTheDocument()
    expect(error.textContent?.trim().length).toBeGreaterThan(0)
  })

  it('flags the unchosen seating when the form is sent empty', async () => {
    const user = userEvent.setup()
    render(<App />)
    await submit(user)
    const error = screen.getByTestId('error-seating')
    expect(error).toBeInTheDocument()
    expect(error.textContent?.trim().length).toBeGreaterThan(0)
  })

  it('does not confirm an empty request', async () => {
    const user = userEvent.setup()
    render(<App />)
    await submit(user)
    expect(success()).toBeNull()
    expect(screen.getByTestId('reserve-form')).toBeInTheDocument()
  })

  it('refuses an email address that stops at the @', async () => {
    const user = userEvent.setup()
    render(<App />)
    await fill(user, { ...VALID, email: 'odalys@' })
    await submit(user)
    expect(screen.getByTestId('error-email')).toBeInTheDocument()
    expect(success()).toBeNull()
  })

  it('refuses an email address with no @ at all', async () => {
    const user = userEvent.setup()
    render(<App />)
    await fill(user, { ...VALID, email: 'georgia.nwachukwu.durham' })
    await submit(user)
    expect(screen.getByTestId('error-email')).toBeInTheDocument()
    expect(success()).toBeNull()
  })

  it('refuses a party smaller than the table takes', async () => {
    const user = userEvent.setup()
    render(<App />)
    await fill(user, { ...VALID, guests: '4' })
    await submit(user)
    expect(screen.getByTestId('error-guests')).toBeInTheDocument()
    expect(success()).toBeNull()
  })

  it('refuses a party larger than the table takes', async () => {
    const user = userEvent.setup()
    render(<App />)
    await fill(user, { ...VALID, guests: '90' })
    await submit(user)
    expect(screen.getByTestId('error-guests')).toBeInTheDocument()
    expect(success()).toBeNull()
  })

  it('refuses a party size that is not a number', async () => {
    const user = userEvent.setup()
    render(<App />)
    await fill(user, { ...VALID, guests: 'a dozen' })
    await submit(user)
    expect(screen.getByTestId('error-guests')).toBeInTheDocument()
    expect(success()).toBeNull()
  })

  it('flags only the field that is actually wrong', async () => {
    const user = userEvent.setup()
    render(<App />)
    await fill(user, { name: VALID.name, email: VALID.email, guests: VALID.guests })
    await submit(user)
    expect(screen.getByTestId('error-seating')).toBeInTheDocument()
    expect(screen.queryByTestId('error-name')).toBeNull()
    expect(screen.queryByTestId('error-email')).toBeNull()
    expect(screen.queryByTestId('error-guests')).toBeNull()
    expect(success()).toBeNull()
  })

  it('confirms a request once every field is filled in properly', async () => {
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
      name: 'Bennett Traoré',
      email: 'bennett@sneadsferrycoop.net',
      guests: '12',
      seating: 'early',
    })
    await submit(user)
    expect(success()).toBeInTheDocument()
    expect(screen.queryByTestId('error-name')).toBeNull()
    expect(screen.queryByTestId('error-email')).toBeNull()
    expect(screen.queryByTestId('error-guests')).toBeNull()
    expect(screen.queryByTestId('error-seating')).toBeNull()
  })
})
