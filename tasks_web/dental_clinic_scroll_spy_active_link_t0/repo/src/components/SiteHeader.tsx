import { useEffect, useState } from 'react'

export type NavDestination = { href: string; label: string }

/** The six long-scroll destinations the sticky nav keeps track of. */
export const NAV_DESTINATIONS: NavDestination[] = [
  { href: '#treatments', label: 'Treatments' },
  { href: '#technology', label: 'Technology' },
  { href: '#visit', label: 'Your visit' },
  { href: '#membership', label: 'Membership' },
  { href: '#reviews', label: 'Patients' },
  { href: '#faq', label: 'Questions' },
]

const LINK_BASE =
  'relative inline-flex items-center whitespace-nowrap rounded-full px-3.5 py-2 text-sm transition-colors duration-200'
const LINK_CURRENT = `${LINK_BASE} bg-teal-50 font-semibold text-teal-900 ring-1 ring-inset ring-teal-200`
const LINK_IDLE = `${LINK_BASE} font-medium text-stone-600 hover:bg-stone-100 hover:text-teal-800`

function BirchMark() {
  return (
    <svg viewBox="0 0 40 40" className="h-10 w-10 shrink-0" role="img" aria-label="Copper Birch Dental">
      <defs>
        <linearGradient id="header-mark-fill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0f766e" />
          <stop offset="100%" stopColor="#134e4a" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="40" height="40" rx="13" fill="url(#header-mark-fill)" />
      <path
        d="M20 8c5.6 2.1 8.4 6.1 8.4 11.9 0 5.3-2.6 9-5 9-1.6 0-2.4-1.4-3.4-1.4s-1.8 1.4-3.4 1.4c-2.4 0-5-3.7-5-9C11.6 14.1 14.4 10.1 20 8Z"
        fill="#f5f5f4"
      />
      <path d="M20 11.5c0 6.5 0 10.4 0 14.4" stroke="#0d9488" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M20 15.6c1.9-.4 3.2-1.5 3.9-3.4" stroke="#0d9488" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M20 19.9c-1.9-.4-3.2-1.5-3.9-3.4" stroke="#0d9488" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="29.5" cy="11.5" r="3.4" fill="#f59e0b" />
    </svg>
  )
}

function PhoneGlyph() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true" fill="none">
      <path
        d="M4.6 3h3l1.2 3.2-1.9 1.4a10 10 0 0 0 4.5 4.5l1.4-1.9L16 11.4v3a1.6 1.6 0 0 1-1.8 1.6A12.6 12.6 0 0 1 3 4.8 1.6 1.6 0 0 1 4.6 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PinGlyph() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true" fill="none">
      <path d="M10 17.5s5.5-5 5.5-9a5.5 5.5 0 1 0-11 0c0 4 5.5 9 5.5 9Z" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="10" cy="8.4" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

/**
 * Sticky site header. The nav is a scroll spy: whichever of the six tracked
 * sections is sitting under the top of the viewport is the destination we mark
 * as current, so the reader always knows where they are in a very long page.
 */
export function SiteHeader() {
  const [currentHref, setCurrentHref] = useState('')

  useEffect(() => {
    // Server-render and older browsers simply get an unhighlighted nav.
    if (typeof IntersectionObserver === 'undefined') return

    const sections = NAV_DESTINATIONS.map((destination) =>
      document.getElementById(destination.href),
    ).filter((element): element is HTMLElement => element !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const inView = entries.filter((entry) => entry.isIntersecting)
        if (inView.length === 0) return
        const topmost = inView.reduce((closest, entry) =>
          closest.boundingClientRect.top <= entry.boundingClientRect.top ? closest : entry,
        )
        setCurrentHref(`#${topmost.target.id}`)
      },
      { rootMargin: '-88px 0px -55% 0px', threshold: [0, 0.2, 0.6] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 bg-stone-50/95 backdrop-blur">
      <div className="hidden bg-teal-900 text-teal-50 sm:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-2 text-xs sm:px-8">
          <p className="flex items-center gap-2">
            <PinGlyph />
            118 Halloway Street, Rivermill — two doors up from the tram stop
          </p>
          <p className="flex items-center gap-5">
            <span className="hidden md:inline">Mon–Thu 7:30–19:00 · Fri 7:30–16:00 · Sat 8:00–13:00</span>
            <a href="tel:+15035550164" className="flex items-center gap-2 font-semibold hover:text-amber-300">
              <PhoneGlyph />
              (503) 555-0164
            </a>
          </p>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="#top" className="flex items-center gap-3" data-testid="brand-link">
          <BirchMark />
          <span className="leading-tight">
            <span className="block text-base font-semibold tracking-tight text-teal-900">Copper Birch Dental</span>
            <span className="block text-xs text-stone-500">Family &amp; cosmetic care since 1999</span>
          </span>
        </a>

        <nav aria-label="Sections of this page" data-testid="section-nav" className="min-w-0">
          <ul className="flex items-center gap-1 overflow-x-auto lg:gap-2">
            {NAV_DESTINATIONS.map((destination) => {
              const isCurrent = destination.href === currentHref
              return (
                <li key={destination.href}>
                  <a
                    href={destination.href}
                    data-testid={`nav-link-${destination.href.slice(1)}`}
                    aria-current={isCurrent ? 'true' : undefined}
                    className={isCurrent ? LINK_CURRENT : LINK_IDLE}
                  >
                    {destination.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <a
          href="#book"
          data-testid="header-cta"
          className="hidden shrink-0 rounded-full bg-teal-800 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-teal-900 lg:inline-block"
        >
          Request an appointment
        </a>
      </div>
    </header>
  )
}
