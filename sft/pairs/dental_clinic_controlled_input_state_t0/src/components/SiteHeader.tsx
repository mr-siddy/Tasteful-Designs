import { useState } from 'react'
import { LanternMark, PhoneIcon } from './Icons'

const DESTINATIONS = [
  { href: '#treatments', label: 'Treatments' },
  { href: '#technology', label: 'Technology' },
  { href: '#first-visit', label: 'Your first visit' },
  { href: '#membership', label: 'Membership' },
  { href: '#stories', label: 'Patients' },
  { href: '#questions', label: 'Questions' },
]

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-[#152046]/10 bg-[#faf6f0]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-5 py-4">
        <a href="#top" className="flex items-center gap-3 text-[#152046]">
          <LanternMark className="h-9 w-9" />
          <span className="leading-tight">
            <span className="block text-lg font-semibold tracking-tight">Lantern Lane</span>
            <span className="block text-[11px] uppercase tracking-[0.22em] text-[#2b3a7a]/70">
              Dental
            </span>
          </span>
        </a>

        <nav aria-label="Main" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-7 text-sm font-medium text-[#2b3a7a]">
            {DESTINATIONS.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition hover:text-[#f2704a]">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="tel:+15550142118"
          className="ml-auto hidden items-center gap-2 text-sm font-semibold text-[#2b3a7a] lg:ml-0 lg:flex"
        >
          <PhoneIcon className="h-4 w-4" />
          (555) 014-2118
        </a>

        <a
          href="#book"
          className="hidden rounded-full bg-[#f2704a] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#dd5a35] sm:inline-block"
        >
          Ask for a time
        </a>

        <button
          type="button"
          aria-label="Open the menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="ml-auto rounded-full border border-[#152046]/15 p-2 text-[#152046] lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" focusable="false">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {menuOpen ? (
        <nav aria-label="Menu" className="border-t border-[#152046]/10 px-5 pb-5 lg:hidden">
          <ul className="grid gap-1 pt-3 text-sm font-medium text-[#2b3a7a]">
            {DESTINATIONS.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="block rounded-xl px-3 py-2 hover:bg-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
