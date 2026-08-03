import { useState } from 'react'
import MobileMenu from './MobileMenu'
import PrimaryNav from './PrimaryNav'
import { MenuIcon, Wordmark } from './icons'

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      data-testid="site-header"
      className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/95 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
        <a href="#top" data-testid="brand" className="flex items-center gap-2.5">
          <Wordmark />
          <span className="text-lg font-bold tracking-tight text-white">Taskflow</span>
        </a>

        <PrimaryNav />

        <div className="flex items-center gap-3">
          <a
            href="#demo"
            className="hidden rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 md:inline-flex"
          >
            Sign in
          </a>
          <a
            href="#demo"
            className="hidden rounded-xl bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-950 md:inline-flex"
          >
            Book a demo
          </a>
          <button
            type="button"
            data-testid="nav-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="rounded-xl border border-slate-700 p-2 text-slate-200 md:hidden"
          >
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      {menuOpen ? <MobileMenu onDismiss={() => setMenuOpen(false)} /> : null}
    </header>
  )
}
