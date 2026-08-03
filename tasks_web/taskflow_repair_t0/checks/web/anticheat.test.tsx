import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@app/App'

// Block the vacuous pass: "the sheet is gone after a tap" must not be satisfied
// by never opening a sheet, by emptying it of destinations, or by deleting the
// mobile navigation altogether. Page integrity is guarded here — this gate is
// binary, so it costs a do-nothing agent nothing in partial credit.
describe('anti-cheat', () => {
  it('still opens a real navigation sheet from the header toggle', async () => {
    const user = userEvent.setup()
    render(<App />)
    const button = screen.getByTestId('nav-toggle')
    expect(button).toHaveAccessibleName()

    await user.click(button)

    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument()
    expect(screen.getByTestId('mobile-menu-overlay')).toBeInTheDocument()
  })

  it('keeps the destinations inside the sheet, labelled and linked', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByTestId('nav-toggle'))

    const links = within(screen.getByTestId('mobile-menu')).getAllByTestId('mobile-menu-link')
    expect(links.length).toBeGreaterThanOrEqual(4)
    for (const link of links) {
      expect(link.textContent?.trim().length ?? 0).toBeGreaterThan(0)
      expect(link.getAttribute('href')?.length ?? 0).toBeGreaterThan(0)
    }
    expect(within(screen.getByTestId('mobile-menu')).getByTestId('mobile-menu-cta')).toHaveTextContent(
      /\w/,
    )
  })

  it('keeps the sheet dismissable from its own close control', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByTestId('nav-toggle'))
    expect(screen.queryByTestId('mobile-menu')).toBeInTheDocument()

    await user.click(screen.getByTestId('mobile-menu-close'))

    expect(screen.queryByTestId('mobile-menu')).toBeNull()
  })

  it('keeps the desktop navigation destinations', () => {
    render(<App />)
    const links = within(screen.getByTestId('desktop-nav')).getAllByRole('link')
    expect(links.length).toBeGreaterThanOrEqual(4)
    for (const link of links) {
      expect(link.textContent?.trim().length ?? 0).toBeGreaterThan(0)
    }
  })

  it('keeps the page intact', () => {
    render(<App />)
    const doc = document
    expect(doc.querySelectorAll('section, header, footer').length).toBeGreaterThanOrEqual(10)
    expect(doc.querySelectorAll('h1, h2, h3').length).toBeGreaterThanOrEqual(30)
    expect((doc.body.textContent || '').split(/\s+/).length).toBeGreaterThanOrEqual(1400)
  })

  it('keeps the marketing sections populated', () => {
    render(<App />)
    expect(screen.getAllByTestId('feature-card').length).toBeGreaterThanOrEqual(6)
    expect(screen.getAllByTestId('deep-dive-block').length).toBeGreaterThanOrEqual(3)
    expect(screen.getAllByTestId('how-step').length).toBeGreaterThanOrEqual(4)
    expect(screen.getAllByTestId('integration-card').length).toBeGreaterThanOrEqual(6)
    expect(screen.getAllByTestId('plan-card').length).toBeGreaterThanOrEqual(3)
    expect(screen.getAllByTestId('testimonial').length).toBeGreaterThanOrEqual(3)
    expect(screen.getAllByTestId('faq-item').length).toBeGreaterThanOrEqual(5)
  })
})
