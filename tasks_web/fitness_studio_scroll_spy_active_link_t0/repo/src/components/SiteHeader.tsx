import { useEffect, useRef } from 'react'

export type NavDestination = { id: string; label: string }

/** The six long-scroll destinations the sticky nav keeps track of. */
export const NAV_DESTINATIONS: NavDestination[] = [
  { id: 'classes', label: 'Classes' },
  { id: 'facility', label: 'The floor' },
  { id: 'method', label: 'The method' },
  { id: 'membership', label: 'Membership' },
  { id: 'results', label: 'Results' },
  { id: 'faq', label: 'Questions' },
]

const LINK_BASE =
  'relative inline-flex items-center whitespace-nowrap rounded-full px-3.5 py-2 text-sm transition-colors duration-200'
const LINK_CURRENT = `${LINK_BASE} bg-lime-300 font-semibold text-stone-950 ring-1 ring-inset ring-lime-200`
const LINK_IDLE = `${LINK_BASE} font-medium text-stone-400 hover:bg-white/10 hover:text-lime-200`

function PlateMark() {
  return (
    <svg
      viewBox="0 0 44 44"
      className="h-11 w-11 shrink-0"
      role="img"
      aria-label="Northline Strength Club"
    >
      <defs>
        <linearGradient id="header-plate" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1c1917" />
          <stop offset="100%" stopColor="#0c0a09" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="44" height="44" rx="14" fill="url(#header-plate)" />
      <rect x="1" y="1" width="42" height="42" rx="13" fill="none" stroke="#3f3f46" strokeWidth="1" />
      <circle cx="22" cy="22" r="12" fill="none" stroke="#bef264" strokeWidth="2.4" />
      <circle cx="22" cy="22" r="4.4" fill="none" stroke="#fbbf24" strokeWidth="2" />
      <path d="M7 22h4M33 22h4" stroke="#e7e5e4" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M22 7v4M22 33v4" stroke="#e7e5e4" strokeWidth="2.6" strokeLinecap="round" />
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
 * as current, so a member always knows where they are in a very long page.
 */
export function SiteHeader() {
  // The observer fires on every scroll tick, so the section we are sitting in
  // is kept in a ref: the nav reads it on the way past and we do not pay for a
  // render every time the reader moves a few pixels.
  const currentId = useRef('')

  useEffect(() => {
    // Server-render and older browsers simply get an unhighlighted nav.
    if (typeof IntersectionObserver === 'undefined') return

    const sections = NAV_DESTINATIONS.map((destination) =>
      document.getElementById(destination.id),
    ).filter((element): element is HTMLElement => element !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const inView = entries.filter((entry) => entry.isIntersecting)
        if (inView.length === 0) return
        const topmost = inView.reduce((closest, entry) =>
          closest.boundingClientRect.top <= entry.boundingClientRect.top ? closest : entry,
        )
        currentId.current = topmost.target.id
      },
      { rootMargin: '-96px 0px -55% 0px', threshold: [0, 0.25, 0.6] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-stone-950/95 backdrop-blur">
      <div className="hidden bg-lime-300 text-stone-950 sm:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-2 text-xs font-medium sm:px-8">
          <p className="flex items-center gap-2">
            <PinGlyph />
            12 Alder Way, Bellwater — two blocks up from the grain terminal
          </p>
          <p className="flex items-center gap-5">
            <span className="hidden md:inline">
              Staffed 5:30–20:30 weekdays · 7:00–14:00 weekends
            </span>
            <a href="tel:+12065550137" className="flex items-center gap-2 font-bold hover:underline">
              <PhoneGlyph />
              (206) 555-0137
            </a>
          </p>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="#top" className="flex items-center gap-3" data-testid="brand-link">
          <PlateMark />
          <span className="leading-tight">
            <span className="block text-base font-black uppercase tracking-tight text-stone-50">
              Northline Strength Club
            </span>
            <span className="block text-xs text-stone-400">Coached barbell training since 2014</span>
          </span>
        </a>

        <nav aria-label="Sections of this page" data-testid="section-nav" className="min-w-0">
          <ul className="flex items-center gap-1 overflow-x-auto lg:gap-2">
            {NAV_DESTINATIONS.map((destination) => {
              const isCurrent = destination.id === currentId.current
              return (
                <li key={destination.id}>
                  <a
                    href={`#${destination.id}`}
                    data-testid={`nav-link-${destination.id}`}
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
          href="#join"
          data-testid="header-cta"
          className="hidden shrink-0 rounded-full bg-amber-400 px-5 py-2.5 text-sm font-bold text-stone-950 transition-colors hover:bg-amber-300 lg:inline-block"
        >
          Book a free intro
        </a>
      </div>
    </header>
  )
}
