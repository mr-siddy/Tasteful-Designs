import { FlameMark } from './Icons'

const DESTINATIONS = [
  { label: 'The menu', href: '#menu' },
  { label: 'The fire', href: '#fire' },
  { label: 'Guest stories', href: '#stories' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Visit', href: '#visit' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-stone-800/60 bg-stone-950/95 text-stone-100 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-5 py-4">
        <a href="#hero" className="flex items-center gap-3" data-testid="brand-link">
          <FlameMark className="h-9 w-9" />
          <span className="flex flex-col leading-none">
            <span className="text-lg font-semibold tracking-tight">Ember &amp; Oak</span>
            <span className="mt-1 text-[11px] uppercase tracking-[0.22em] text-amber-400/80">
              Foundry Lane
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="ml-auto hidden md:block">
          <ul className="flex items-center gap-7 text-sm text-stone-300">
            {DESTINATIONS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  data-testid="nav-link"
                  className="transition-colors hover:text-amber-400"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#reserve"
          data-testid="header-cta"
          className="ml-auto rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-stone-950 shadow-lg shadow-amber-900/40 transition-colors hover:bg-amber-400 md:ml-0"
        >
          Reserve a table
        </a>
      </div>
    </header>
  )
}
