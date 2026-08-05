const NAV = [
  { href: '#menus', label: 'Menus' },
  { href: '#hearth', label: 'The Hearth' },
  { href: '#sourcing', label: 'Sourcing' },
  { href: '#loft', label: 'Private Dining' },
  { href: '#visit', label: 'Visit' },
]

export function SiteHeader() {
  return (
    <header
      data-testid="site-header"
      className="sticky top-0 z-40 border-b border-stone-800/60 bg-stone-950/95 text-stone-100 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-5 py-4">
        <a href="#hero" className="flex shrink-0 items-center gap-3" aria-label="Casa Marisol, home">
          <svg
            viewBox="0 0 40 40"
            role="img"
            aria-label="Casa Marisol flame and wave mark"
            className="h-10 w-10"
          >
            <defs>
              <linearGradient id="mark-ember" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#b45309" />
                <stop offset="55%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#fde68a" />
              </linearGradient>
            </defs>
            <circle cx="20" cy="20" r="19" fill="#1c1917" stroke="#f59e0b" strokeWidth="1.5" />
            <path
              d="M20 8c4.6 4.2 7 7.9 7 11.6 0 4-3.1 7.2-7 7.2s-7-3.2-7-7.2c0-2.1.9-4 2.6-5.9.4 2.3 1.5 3.6 3.2 3.9-.6-3.4.2-6.5 1.2-9.6z"
              fill="url(#mark-ember)"
            />
            <path
              d="M9 30.5c2.8-2 4.6-2 7.3 0s4.5 2 7.3 0 4.6-2 7.4 0"
              fill="none"
              stroke="#5eead4"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-xl font-semibold tracking-tight">Casa Marisol</span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.28em] text-amber-400">
              Larkspur Waterfront
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="ml-auto hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-testid="nav-link"
              className="text-sm font-medium text-stone-300 transition hover:text-amber-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+14015550164"
          className="hidden text-sm font-medium text-stone-400 hover:text-stone-100 md:inline"
        >
          (401) 555-0164
        </a>
        <a
          href="#visit"
          data-testid="header-reserve"
          className="ml-auto rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-stone-950 shadow-lg shadow-amber-900/30 transition hover:bg-amber-400 lg:ml-0"
        >
          Reserve a table
        </a>
      </div>
    </header>
  )
}
