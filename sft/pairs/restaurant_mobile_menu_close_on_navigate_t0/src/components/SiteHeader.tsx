import { useState } from 'react'
import { FernMark } from './Icons'

const NAV = [
  { label: 'Menus', href: '#menus' },
  { label: 'The Fire', href: '#fire' },
  { label: 'Sourcing', href: '#sourcing' },
  { label: 'Private Events', href: '#events' },
  { label: 'Visit', href: '#visit' },
]

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-[#12261F]/10 bg-[#F7F1E8]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <a href="#top" className="flex items-center gap-3" data-testid="brand-link">
          <FernMark className="h-10 w-10" />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-xl font-semibold tracking-tight text-[#12261F]">
              Copperfern
            </span>
            <span className="mt-1 text-[11px] uppercase tracking-[0.2em] text-[#4C6B54]">
              Ballard · wood fire
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-testid="desktop-nav-link"
              className="text-sm font-medium text-[#12261F]/80 transition-colors hover:text-[#C4653A]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#reserve"
            className="rounded-full bg-[#12261F] px-5 py-2.5 text-sm font-semibold text-[#F7F1E8] shadow-sm transition-colors hover:bg-[#C4653A]"
          >
            Reserve a table
          </a>
        </div>

        <button
          type="button"
          data-testid="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#12261F]/15 text-[#12261F] md:hidden"
        >
          {menuOpen ? (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ) : (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          data-testid="mobile-menu"
          className="border-t border-[#12261F]/10 bg-[#F7F1E8] px-5 pb-6 pt-2 md:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                data-testid="mobile-nav-link"
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#12261F]/10 py-4 font-serif text-lg text-[#12261F]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#reserve"
              data-testid="mobile-nav-cta"
              onClick={() => setMenuOpen(false)}
              className="mt-5 rounded-full bg-[#C4653A] px-5 py-3 text-center text-sm font-semibold text-[#F7F1E8]"
            >
              Reserve a table
            </a>
          </nav>
          <p className="mt-5 text-sm text-[#4C6B54]">
            Walk-ins welcome at the twelve-seat bar from 5pm, Wednesday to Sunday.
          </p>
        </div>
      )}
    </header>
  )
}
