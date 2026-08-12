import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

const workspaceField = () => screen.getByLabelText(/workspace name/i)
const emailField = () => screen.getByLabelText(/work email/i)
const stackField = () => screen.getByLabelText(/what pages you today/i)

describe('Postlude landing — structure', () => {
  it('renders the product name in the top heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: /postlude/i })).toBeInTheDocument()
  })

  it('renders the workspace setup form with its reserve action', () => {
    render(<App />)
    expect(screen.getByTestId('setup-form')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /reserve this workspace/i })).toBeInTheDocument()
  })

  it('renders a footer landmark', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})

describe('Postlude workspace setup — the fields hold what you type (the defect)', () => {
  it('shows the workspace name as it is typed', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(workspaceField(), 'Northwind Platform')
    expect(workspaceField()).toHaveValue('Northwind Platform')
  })

  it('shows the work email as it is typed', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(emailField(), 'priya@northwindfreight.com')
    expect(emailField()).toHaveValue('priya@northwindfreight.com')
  })

  it('shows the service notes as they are typed', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(stackField(), 'Postgres and a Go checkout service')
    expect(stackField()).toHaveValue('Postgres and a Go checkout service')
  })

  it('keeps each field independent of the others', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(workspaceField(), 'Alder Bank Core')
    await user.type(emailField(), 'marcus@alderbank.eu')
    await user.type(stackField(), 'Kafka, two Postgres clusters, a payments gateway')
    expect(workspaceField()).toHaveValue('Alder Bank Core')
    expect(emailField()).toHaveValue('marcus@alderbank.eu')
    expect(stackField()).toHaveValue('Kafka, two Postgres clusters, a payments gateway')
  })

  it('replaces the value when a field is cleared and typed again', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(workspaceField(), 'Tessellate')
    await user.clear(workspaceField())
    await user.type(workspaceField(), 'Havenline Edge')
    expect(workspaceField()).toHaveValue('Havenline Edge')
  })

  it('counts the characters that were actually typed', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(workspaceField(), 'Alder Bank')
    expect(screen.getByTestId('workspace-counter')).toHaveTextContent('10 / 48')
  })

  it('builds the preview workspace name and url from the typed name', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(workspaceField(), 'Northwind Platform')
    expect(screen.getByTestId('preview-name')).toHaveTextContent('Northwind Platform')
    expect(screen.getByTestId('preview-url')).toHaveTextContent('postlude.app/northwind-platform')
  })

  it('echoes the typed email and notes into the preview panel', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(emailField(), 'lena@cadencehealth.io')
    await user.type(stackField(), 'Four Rails services and a very tired Redis')
    expect(screen.getByTestId('preview-email')).toHaveTextContent('lena@cadencehealth.io')
    expect(screen.getByTestId('preview-stack')).toHaveTextContent('Four Rails services and a very tired Redis')
  })

  it('reserves the workspace using the details that were entered', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(workspaceField(), 'Cadence Platform')
    await user.type(emailField(), 'lena@cadencehealth.io')
    await user.click(screen.getByRole('button', { name: /reserve this workspace/i }))
    const confirmation = screen.getByTestId('setup-confirmation')
    expect(confirmation).toHaveTextContent('Cadence Platform')
    expect(confirmation).toHaveTextContent('postlude.app/cadence-platform')
    expect(confirmation).toHaveTextContent('lena@cadencehealth.io')
    expect(screen.queryByTestId('error-workspace')).toBeNull()
    expect(screen.queryByTestId('error-email')).toBeNull()
  })
})
