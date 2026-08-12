import { useState } from 'react'

const DESTINATIONS = [
  { id: 'classes', label: 'Classes' },
  { id: 'timetable', label: 'Timetable' },
  { id: 'method', label: 'Method' },
  { id: 'instructors', label: 'Instructors' },
  { id: 'memberships', label: 'Memberships' },
]

function SundialMark() {
  return (
    <svg viewBox="0 0 48 48" className="h-9 w-9" role="img" aria-label="Sundial Movement Studio mark">
      <circle cx="24" cy="24" r="22" fill="#24493B" />
      <circle cx="24" cy="24" r="16" fill="none" stroke="#F7F1E6" strokeWidth="1.25" opacity="0.7" />
      <path d="M24 30 L24 12 L33 30 Z" fill="#C2571F" />
      <circle cx="24" cy="30" r="2.4" fill="#F7F1E6" />
      <g stroke="#F7F1E6" strokeWidth="1.6" strokeLinecap="round" opacity="0.85">
        <path d="M24 5 L24 8" />
        <path d="M43 24 L40 24" />
        <path d="M24 43 L24 40" />
        <path d="M5 24 L8 24" />
      </g>
    </svg>
  )
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [current, setCurrent] = useState('classes')

  // Remember which destination the visitor picked so the nav can show them
  // where on the page they currently are.
  const handleNavigate = (id: string) => {
    setCurrent(id)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-[#E3D6BE] bg-[#F7F1E6]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <a href="#top" data-testid="brand-link" className="flex items-center gap-3">
          <SundialMark />
          <span className="leading-tight">
            <span className="block text-base font-semibold tracking-tight">Sundial Movement</span>
            <span className="block text-[11px] uppercase tracking-[0.18em] text-[#C2571F]">
              Cobbler&apos;s Hill · Providence
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul data-testid="desktop-nav" className="flex items-center gap-7 text-sm font-medium">
            {DESTINATIONS.map((destination) => (
              <li key={destination.id}>
                <a
                  href={`#${destination.id}`}
                  data-testid={`desktop-link-${destination.id}`}
                  aria-current={current === destination.id ? 'page' : undefined}
                  onClick={() => handleNavigate(destination.id)}
                  className={
                    current === destination.id
                      ? 'text-[#C2571F] underline decoration-2 underline-offset-8'
                      : 'text-[#3D372E] hover:text-[#C2571F]'
                  }
                >
                  {destination.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a href="tel:+14015550173" className="text-sm font-medium text-[#3D372E]">
            (401) 555 0173
          </a>
          <a
            href="#visit"
            data-testid="header-cta"
            className="rounded-full bg-[#C2571F] px-5 py-2.5 text-sm font-semibold text-[#FFF8EC] shadow-sm"
          >
            Book your intro
          </a>
        </div>

        <button
          type="button"
          data-testid="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Hide menu' : 'Show menu'}
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#E3D6BE] bg-white/70 md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <g stroke="#1E1B16" strokeWidth="2" strokeLinecap="round">
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </g>
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          data-testid="mobile-menu"
          className="border-t border-[#E3D6BE] bg-[#F7F1E6] px-5 pb-6 pt-4 md:hidden"
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-[0.18em] text-[#7A7263]">
              Where would you like to go?
            </span>
            <button
              type="button"
              data-testid="mobile-menu-close"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#E3D6BE]"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                <g stroke="#1E1B16" strokeWidth="2" strokeLinecap="round">
                  <path d="M6 6l12 12" />
                  <path d="M18 6L6 18" />
                </g>
              </svg>
            </button>
          </div>

          <nav aria-label="Mobile">
            <ul className="divide-y divide-[#E3D6BE]">
              {DESTINATIONS.map((destination) => (
                <li key={destination.id}>
                  <a
                    href={`#${destination.id}`}
                    data-testid={`mobile-menu-link-${destination.id}`}
                    aria-current={current === destination.id ? 'page' : undefined}
                    onClick={() => handleNavigate(destination.id)}
                    className="block py-3 text-lg font-medium tracking-tight"
                  >
                    {destination.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="#visit"
            data-testid="mobile-menu-cta"
            onClick={() => handleNavigate('visit')}
            className="mt-5 block rounded-2xl bg-[#C2571F] px-5 py-3 text-center text-sm font-semibold text-[#FFF8EC]"
          >
            Book your $25 intro session
          </a>
          <p className="mt-3 text-center text-sm text-[#7A7263]">
            Or call the front desk on (401) 555 0173
          </p>
        </div>
      )}
    </header>
  )
}
