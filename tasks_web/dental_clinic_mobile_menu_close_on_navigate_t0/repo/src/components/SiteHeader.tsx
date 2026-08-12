import { useState } from 'react'

export const DESTINATIONS = [
  { href: '#treatments', label: 'Treatments' },
  { href: '#mill', label: 'Same-day crowns' },
  { href: '#team', label: 'Our dentists' },
  { href: '#membership', label: 'Membership' },
  { href: '#hours', label: 'Hours & parking' },
]

export function FoundryMark({ className = 'h-10 w-10' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" focusable="false">
      <rect x="1" y="1" width="46" height="46" rx="13" fill="#14312c" />
      <path
        d="M24 10.5c3.9 0 5.7 1.9 8.1 1.9 3.1 0 5.2 2.4 5.2 6.2 0 5-2.2 8.7-3.3 12.4-1 3.1-1.8 5-3.5 5-1.8 0-2.4-3-3-5.6-.6-2.1-1.1-3.4-1.9-3.4-.8 0-1.4 1.3-1.9 3.4-.6 2.6-1.3 5.6-3.1 5.6-1.7 0-2.5-1.9-3.4-5-1.1-3.7-3.3-7.4-3.3-12.4 0-3.8 2-6.2 5.1-6.2 2.3 0 4.1-1.9 8-1.9z"
        fill="#fbf6f0"
      />
      <path d="M24 15v8.5" stroke="#d9682f" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  )
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-40 border-b border-[#14312c]/10 bg-[#fbf6f0]/95 backdrop-blur">
      <p className="bg-[#14312c] px-5 py-2 text-center text-[11px] font-medium tracking-wide text-[#f3e9dd] sm:text-xs">
        Chairs open 6:45am Monday to Friday · Registered patients in pain are seen the same
        day · Every price on this page is the price you pay
      </p>

      <div className="mx-auto flex max-w-6xl items-center gap-5 px-5 py-4">
        <a href="#top" data-testid="brand-link" className="flex items-center gap-3">
          <FoundryMark />
          <span className="leading-tight">
            <span className="block font-serif text-lg font-semibold tracking-tight text-[#14312c]">
              Foundry Row
            </span>
            <span className="block text-[11px] uppercase tracking-[0.3em] text-[#d9682f]">
              Dental
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="ml-auto hidden items-center gap-7 lg:flex">
          {DESTINATIONS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-testid="nav-link"
              className="text-sm font-medium text-[#14312c]/75 transition hover:text-[#d9682f]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3 lg:ml-0">
          <a
            href="tel:+15035550197"
            data-testid="header-phone"
            className="hidden text-sm font-semibold text-[#14312c] sm:block"
          >
            (503) 555 0197
          </a>
          <a
            href="#book"
            data-testid="header-cta"
            className="hidden rounded-full bg-[#d9682f] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#c25a24] sm:inline-block"
          >
            Book a chair
          </a>
          <button
            type="button"
            data-testid="nav-toggle"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#14312c]/15 text-[#14312c] transition hover:bg-[#f3e9dd] lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" focusable="false">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div>
          <div
            data-testid="mobile-menu-backdrop"
            onClick={closeMenu}
            className="fixed inset-0 z-40 bg-[#14312c]/50 lg:hidden"
          />
          <div
            id="mobile-menu"
            data-testid="mobile-menu"
            className="fixed inset-x-0 top-0 z-50 border-b border-[#14312c]/10 bg-[#fbf6f0] p-5 shadow-2xl lg:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-serif text-lg font-semibold text-[#14312c]">
                Where to next?
              </span>
              <button
                type="button"
                data-testid="mobile-menu-close"
                aria-label="Close menu"
                onClick={closeMenu}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#14312c]/15 text-[#14312c]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" focusable="false">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <nav aria-label="Mobile" className="mt-5 flex flex-col">
              {DESTINATIONS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  data-testid="mobile-nav-link"
                  className="border-b border-[#14312c]/10 py-3.5 font-serif text-xl text-[#14312c]"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="#book"
              data-testid="mobile-menu-cta"
              className="mt-5 block rounded-full bg-[#d9682f] px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Book a chair
            </a>
            <a
              href="tel:+15035550197"
              data-testid="mobile-menu-phone"
              className="mt-3 block text-center text-sm font-semibold text-[#14312c]"
            >
              Call (503) 555 0197
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
