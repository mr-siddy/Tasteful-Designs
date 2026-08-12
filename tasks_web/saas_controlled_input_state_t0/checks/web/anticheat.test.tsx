import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import App from '@app/App'

// Block the vacuous pass: "the fields reflect what you type" must not be satisfied
// by stripping the setup form down, dropping the live preview, or gutting the page
// around it.
describe('anti-cheat', () => {
  it('keeps every control of the setup form', () => {
    render(<App />)
    const form = screen.getByTestId('setup-form')
    expect(within(form).getByLabelText(/workspace name/i)).toBeInTheDocument()
    expect(within(form).getByLabelText(/work email/i)).toBeInTheDocument()
    expect(within(form).getByLabelText(/rotation size/i)).toBeInTheDocument()
    expect(within(form).getByLabelText(/what pages you today/i)).toBeInTheDocument()
    expect(within(form).getByRole('button', { name: /reserve this workspace/i })).toBeInTheDocument()
    expect(within(form).getByRole('button', { name: /start over/i })).toBeInTheDocument()
    expect(within(form).getAllByRole('option').length).toBeGreaterThanOrEqual(4)
  })

  it('keeps the live preview panel and everything it reports', () => {
    render(<App />)
    const preview = screen.getByTestId('setup-preview')
    expect(within(preview).getByTestId('preview-name')).toBeInTheDocument()
    expect(within(preview).getByTestId('preview-url')).toHaveTextContent('postlude.app/')
    expect(within(preview).getByTestId('preview-email')).toBeInTheDocument()
    expect(within(preview).getByTestId('preview-stack')).toBeInTheDocument()
    expect(screen.getByTestId('workspace-counter')).toHaveTextContent('/ 48')
  })

  it('keeps the rest of the landing page intact', () => {
    render(<App />)
    const doc = document
    expect(doc.querySelectorAll('section, header, footer').length).toBeGreaterThanOrEqual(11)
    expect(doc.querySelectorAll('h1, h2, h3').length).toBeGreaterThanOrEqual(30)
    expect((doc.body.textContent || '').trim().split(/\s+/).length).toBeGreaterThanOrEqual(1500)
    expect(screen.getAllByTestId('capability-card').length).toBeGreaterThanOrEqual(6)
    expect(screen.getAllByTestId('pricing-plan').length).toBeGreaterThanOrEqual(3)
    expect(screen.getAllByTestId('faq-item').length).toBeGreaterThanOrEqual(5)
    expect(screen.getAllByTestId('testimonial').length).toBeGreaterThanOrEqual(3)
  })
})
