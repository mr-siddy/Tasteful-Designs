import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

type Draft = { name?: string; email?: string; crew?: string }

const nameField = () => screen.getByLabelText(/full name/i)
const emailField = () => screen.getByLabelText(/work email/i)
const crewField = () => screen.getByLabelText(/technicians you dispatch/i)
const success = () => screen.queryByTestId('contact-success')

async function fill(user: ReturnType<typeof userEvent.setup>, draft: Draft) {
  if (draft.name) await user.type(nameField(), draft.name)
  if (draft.email) await user.type(emailField(), draft.email)
  if (draft.crew) await user.type(crewField(), draft.crew)
}

async function submit(user: ReturnType<typeof userEvent.setup>) {
  await user.click(screen.getByRole('button', { name: /book my walkthrough/i }))
}

describe('Rivetwork landing — structure', () => {
  it('renders the hero headline', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: /dispatch board/i })).toBeInTheDocument()
  })

  it('offers the walkthrough form with its three required fields', () => {
    render(<App />)
    expect(screen.getByTestId('contact-form')).toBeInTheDocument()
    expect(nameField()).toBeInTheDocument()
    expect(emailField()).toBeInTheDocument()
    expect(crewField()).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /book my walkthrough/i })).toBeInTheDocument()
  })

  it('renders a footer landmark', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})

describe('Rivetwork walkthrough form — invalid input is refused (the defect)', () => {
  it('flags the missing name when the form is submitted empty', async () => {
    const user = userEvent.setup()
    render(<App />)
    await submit(user)
    const error = screen.getByTestId('error-name')
    expect(error).toBeInTheDocument()
    expect(error.textContent?.trim().length).toBeGreaterThan(0)
  })

  it('flags the missing work email when the form is submitted empty', async () => {
    const user = userEvent.setup()
    render(<App />)
    await submit(user)
    const error = screen.getByTestId('error-email')
    expect(error).toBeInTheDocument()
    expect(error.textContent?.trim().length).toBeGreaterThan(0)
  })

  it('flags the missing crew size when the form is submitted empty', async () => {
    const user = userEvent.setup()
    render(<App />)
    await submit(user)
    const error = screen.getByTestId('error-crew')
    expect(error).toBeInTheDocument()
    expect(error.textContent?.trim().length).toBeGreaterThan(0)
  })

  it('does not confirm an empty submission', async () => {
    const user = userEvent.setup()
    render(<App />)
    await submit(user)
    expect(success()).toBeNull()
    expect(screen.getByTestId('contact-form')).toBeInTheDocument()
  })

  it('refuses an email address that is not an address', async () => {
    const user = userEvent.setup()
    render(<App />)
    await fill(user, { name: 'Renata Alcott', email: 'renata@', crew: '14' })
    await submit(user)
    expect(screen.getByTestId('error-email')).toBeInTheDocument()
    expect(success()).toBeNull()
  })

  it('refuses an email address with no @ at all', async () => {
    const user = userEvent.setup()
    render(<App />)
    await fill(user, { name: 'Renata Alcott', email: 'renata.alcott.kestrel', crew: '14' })
    await submit(user)
    expect(screen.getByTestId('error-email')).toBeInTheDocument()
    expect(success()).toBeNull()
  })

  it('refuses a crew size of zero', async () => {
    const user = userEvent.setup()
    render(<App />)
    await fill(user, { name: 'Renata Alcott', email: 'renata@kestrelmechanical.com', crew: '0' })
    await submit(user)
    expect(screen.getByTestId('error-crew')).toBeInTheDocument()
    expect(success()).toBeNull()
  })

  it('refuses a crew size that is not a number', async () => {
    const user = userEvent.setup()
    render(<App />)
    await fill(user, { name: 'Renata Alcott', email: 'renata@kestrelmechanical.com', crew: 'a dozen' })
    await submit(user)
    expect(screen.getByTestId('error-crew')).toBeInTheDocument()
    expect(success()).toBeNull()
  })

  it('flags only the field that is actually wrong', async () => {
    const user = userEvent.setup()
    render(<App />)
    await fill(user, { name: 'Renata Alcott', email: 'renata@kestrelmechanical.com' })
    await submit(user)
    expect(screen.getByTestId('error-crew')).toBeInTheDocument()
    expect(screen.queryByTestId('error-name')).toBeNull()
    expect(screen.queryByTestId('error-email')).toBeNull()
    expect(success()).toBeNull()
  })

  it('confirms once every field is filled in correctly', async () => {
    const user = userEvent.setup()
    render(<App />)
    await fill(user, { name: 'Renata Alcott', email: 'renata@kestrelmechanical.com', crew: '14' })
    await submit(user)
    expect(success()).toBeInTheDocument()
  })

  it('lets a rejected visitor correct the form and get through', async () => {
    const user = userEvent.setup()
    render(<App />)
    await submit(user)
    expect(success()).toBeNull()
    await fill(user, { name: 'Dwight Bowden', email: 'dwight@bowdenplumbing.com', crew: '22' })
    await submit(user)
    expect(success()).toBeInTheDocument()
    expect(screen.queryByTestId('error-name')).toBeNull()
    expect(screen.queryByTestId('error-email')).toBeNull()
    expect(screen.queryByTestId('error-crew')).toBeNull()
  })
})
