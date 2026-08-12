import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

const nameField = () => screen.getByLabelText(/full name/i) as HTMLInputElement
const emailField = () => screen.getByLabelText(/^email$/i) as HTMLInputElement
const phoneField = () => screen.getByLabelText(/^phone$/i) as HTMLInputElement
const treatmentField = () => screen.getByLabelText(/what do you need/i) as HTMLSelectElement
const notesField = () => screen.getByLabelText(/anything we should know/i) as HTMLTextAreaElement
const sendRequest = () => screen.getByRole('button', { name: /send the request/i })

describe('Lantern Lane landing — structure', () => {
  it('renders the practice name', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: /lantern lane/i }),
    ).toBeInTheDocument()
  })

  it('offers an appointment request form with a send button', () => {
    render(<App />)
    expect(screen.getByRole('form', { name: /appointment request/i })).toBeInTheDocument()
    expect(sendRequest()).toBeInTheDocument()
  })

  it('renders a footer landmark', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})

describe('Lantern Lane booking form — the fields hold what is typed (the defect)', () => {
  it('shows the visitor their own name as they type it', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(nameField(), 'Wendell Achterberg')
    expect(nameField()).toHaveValue('Wendell Achterberg')
  })

  it('shows the email address as it is typed', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(emailField(), 'wendell@kelsopark.co')
    expect(emailField()).toHaveValue('wendell@kelsopark.co')
  })

  it('keeps each field to its own value', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(nameField(), 'Rosalind Vance')
    await user.type(phoneField(), '5550149922')
    await user.type(emailField(), 'rosalind@kelsopark.co')
    expect(nameField()).toHaveValue('Rosalind Vance')
    expect(phoneField()).toHaveValue('5550149922')
    expect(emailField()).toHaveValue('rosalind@kelsopark.co')
  })

  it('records the chosen treatment in the dropdown', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.selectOptions(treatmentField(), 'Same-day crown')
    expect(treatmentField()).toHaveValue('Same-day crown')
  })

  it('keeps the note and counts what has been written', async () => {
    const user = userEvent.setup()
    render(<App />)
    const note = 'A back tooth has ached since Friday.'
    await user.type(notesField(), note)
    expect(notesField()).toHaveValue(note)
    expect(screen.getByTestId('enquiry-notes-count')).toHaveTextContent(String(note.length))
  })

  it('addresses the visitor by name once they have given it', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(nameField(), 'Wendell Achterberg')
    expect(screen.getByTestId('enquiry-summary')).toHaveTextContent(/Wendell Achterberg/)
  })

  it('reads the request back after it is sent', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(nameField(), 'Wendell Achterberg')
    await user.type(emailField(), 'wendell@kelsopark.co')
    await user.selectOptions(treatmentField(), 'Clear aligners')
    await user.click(sendRequest())
    const confirmation = within(screen.getByTestId('enquiry-confirmation'))
    expect(confirmation.getByText(/Wendell Achterberg/)).toBeInTheDocument()
    expect(confirmation.getByText(/Clear aligners/)).toBeInTheDocument()
    expect(confirmation.getByText(/wendell@kelsopark\.co/)).toBeInTheDocument()
  })

  it('empties the form for the next visitor once a request is sent', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(nameField(), 'Rosalind Vance')
    await user.type(notesField(), 'Nervous, would prefer a quiet slot.')
    expect(nameField()).toHaveValue('Rosalind Vance')
    await user.click(sendRequest())
    expect(nameField()).toHaveValue('')
    expect(notesField()).toHaveValue('')
  })
})
